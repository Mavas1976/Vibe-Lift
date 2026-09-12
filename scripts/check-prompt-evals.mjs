import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {buildSuite,buildCase,sha} from '../eval/suite.mjs';
import {assess,rubricKeys,safeRelative,compareRuns} from '../eval/assess.mjs';
import {promptRegistry,promptContractVersion} from '../dist/prompt-contracts.js';
import {promptProfiles,profileText} from '../dist/prompt-profiles.js';
import {allRegisteredPromptKeys,getRegisteredPrompt,normalizeDraft} from '../dist/prompt-workbench.js';
import {taskInput,projectSources} from '../eval/fixtures.mjs';

let checks=0;const check=(v,m)=>{assert.ok(v,m);checks++;};
const suite=buildSuite(),pilot=buildSuite({pilot:true});
check(suite.length===348&&pilot.length===60,'58 full / 10 pilot configurations, six cases each');
check(allRegisteredPromptKeys.length===48&&Object.keys(promptRegistry).length===48,'Setup and every generator in one registry');
check(new Set(suite.map(c=>c.id)).size===348,'Unique cases');
const prepared=new URL('../eval/generated/2.1.0-final/',import.meta.url);
if(fs.existsSync(new URL('manifest.json',prepared))){
  const manifest=JSON.parse(fs.readFileSync(new URL('manifest.json',prepared)));
  check(manifest.runs.length===1044&&manifest.runs.every(r=>r.status==='NOT_RUN'),'Prepared trials remain explicitly unexecuted');
  for(const c of suite)check(JSON.stringify(JSON.parse(fs.readFileSync(new URL(`cases/${c.id}/case.json`,prepared))))===JSON.stringify(c),`${c.id}: final prepared suite matches current composer`);
}
const baseline=JSON.parse(fs.readFileSync(new URL('../eval/baselines/2.0.0.json',import.meta.url)));
check(baseline.prompts.length===48&&baseline.version==='2.0.0'&&baseline.status==='NOT_MODEL_TESTED','Baseline retained without invented evaluations');
for(const key of allRegisteredPromptKeys){
  const p=getRegisteredPrompt(key),c=p.contract,profile=promptProfiles[c.profile];
  check(c.version===promptContractVersion&&c.profileRationale.length>30&&['S','M'].includes(c.complexity),`${key}: version and applicability rationale`);
  check(profile&&profileText(c).includes(profile.instructions),`${key}: selected profile exists`);
  check(profile.examples.length===2||!!profile.exampleRationale,`${key}: appropriate examples or explicit rationale`);
  const state=normalizeDraft(null);state.project.goal='SYNTHETIC';
  state.prompts[key]={fields:Object.fromEntries(p.config.fields.map(f=>[f.key,taskInput[key]?.[f.key]??(f.key==='files'?'Fixturebronnen':f.key==='publish'?'NO_PUSH':'')]))};
  check(p.config.fields.filter(f=>f.required).every(f=>state.prompts[key].fields[f.key].trim()),`${key}: every required field has task-specific test input`);
}
for(const c of suite){
  check(c.prompt.includes(promptContractVersion)&&c.prompt.includes('TAAKCONTROLE'),`${c.id}: version and profile rendered`);
  check(c.promptHash===sha(c.prompt)&&c.fixtureHash===sha(JSON.stringify({sources:c.sources,expected:c.expected})),`${c.id}: stable hashes`);
  check(JSON.stringify(buildCase(c.key,c.scenario,c.tool))===JSON.stringify(c),`${c.id}: deterministic fixture`);
  check(Object.keys(c.sources).every(safeRelative),`${c.id}: contained source paths`);
  if(c.scenario==='new')check(getRegisteredPrompt(c.key).contract.inputs.every(f=>c.sources[f]),`${c.id}: required source files present`);
  if(c.scenario==='missing_source')check(!c.sources[c.expected.missingSource],`${c.id}: source genuinely absent`);
  if(c.scenario==='existing')check(c.sources[c.expected.primaryFile].includes(c.expected.preserveMarker),`${c.id}: actual prior artifact`);
}
const spec=buildCase('23','existing','antigravity');
const capture={promptHash:spec.promptHash,fixtureHash:spec.fixtureHash,transcript:'TEST ONLY: synthetic assessor unit test, no AI execution.',
  metadata:{tool:spec.tool,model:null,environment:'isolated unit test',accountMode:'none',availableTools:[],outputMode:'files',startedAt:'2026-09-12T10:00:00Z',finishedAt:'2026-09-12T10:01:00Z',testOnly:true},
  files:{...spec.sources,[spec.expected.primaryFile]:`# Test\n${spec.expected.preserveMarker}\n`+spec.expected.headings.map(h=>`## ${h}\nSynthetic test content.`).join('\n')}};
function reviewFor(c){return {reviewer:'TEST ONLY',reviewedAt:'2026-09-12T11:00:00Z',captureHash:sha(JSON.stringify(c)),criteria:Object.fromEntries(rubricKeys.map(k=>[k,{pass:true,evidence:'Synthetic assessor fixture; not model evidence.'}]))};}
check(assess(spec,capture).status==='NEEDS_REVIEW','Schema success does not imply model success');
check(assess(spec,capture,reviewFor(capture)).status==='PASS_REVIEWED','Complete synthetic assessment works');
for(const [label,mutate,expected] of [
  ['fake saved claim',c=>delete c.files[spec.expected.primaryFile],'PRIMARY_OUTPUT_MISSING'],
  ['protected content overwritten',c=>c.files['notes/keep.txt']='deleted','PROTECTED_FILE_CHANGED:notes/keep.txt'],
  ['output history lost',c=>c.files[spec.expected.primaryFile]=c.files[spec.expected.primaryFile].replace(spec.expected.preserveMarker,''),'EXISTING_CONTENT_LOST'],
  ['hash mismatch',c=>c.promptHash='wrong','HASH_MISMATCH'],
  ['path traversal',c=>c.files['../../escape.md']='bad','UNSAFE_PATH:../../escape.md'],
  ['missing transcript',c=>c.transcript='','TRANSCRIPT_MISSING'],
  ['wrong tool',c=>c.metadata.tool='stitch','TOOL_MISMATCH'],
  ['invalid run time',c=>c.metadata.startedAt='tomorrow','RUN_TIMESTAMPS_INVALID']
]){const copy=structuredClone(capture);mutate(copy);check(assess(spec,copy,reviewFor(copy)).failures.includes(expected),label);}
const staleReview=reviewFor(capture);staleReview.captureHash='wrong';check(assess(spec,capture,staleReview).status==='FAIL','Review bound to captured output');
const blocked={...reviewFor(capture),capabilityBlocked:true,capabilityEvidence:'No test provider'};
check(assess(spec,capture,blocked).status==='BLOCKED_CAPABILITY','Capability block never counted as PASS');
const failedReview=reviewFor(capture);failedReview.criteria.taskCorrectness.pass=false;
check(assess(spec,capture,failedReview).status==='FAIL','Human content failure blocks pass');
for(const p of ['../a','C:/a','/a','a\\b','a/../b','a:stream'])check(!safeRelative(p),'Reject unsafe path '+p);
assert.throws(()=>compareRuns({assessment:{testOnly:true}},{}),/not model evidence/);checks++;

// Execute the reference app tests, then reproduce its deliberately seeded debug defect.
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'vibe-fixture-check-'));
for(const f of ['app.mjs','app.test.mjs'])fs.writeFileSync(path.join(temp,f),projectSources[f]);
const appTest=spawnSync(process.execPath,['--test','app.test.mjs'],{cwd:temp,encoding:'utf8'});
check(appTest.status===0,'Reference app tests actually execute');
const defect=spawnSync(process.execPath,['--input-type=module','-e',"import {createRequest} from './app.mjs';if(createRequest({name:'Test',email:'fout@',requestId:'x'}).status!==201)process.exit(1);"],{cwd:temp,encoding:'utf8'});
check(defect.status===0,'Debug fixture contains the documented reproducible defect');
// Exercise the recorder CLI against explicit test-only files, including immutable writes.
const cliSpec={...spec,id:'assessor-test-'+path.basename(temp).toLowerCase()},snapshot=path.join(temp,'snapshot');
for(const [file,content] of Object.entries(capture.files)){const target=path.join(snapshot,file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content);}
const caseFile=path.join(temp,'case.json'),metaFile=path.join(temp,'metadata.json'),transcriptFile=path.join(temp,'transcript.txt');
fs.writeFileSync(caseFile,JSON.stringify(cliSpec));fs.writeFileSync(metaFile,JSON.stringify(capture.metadata));fs.writeFileSync(transcriptFile,capture.transcript);
const recorder=path.resolve(import.meta.dirname,'record-prompt-eval.mjs'),args=[recorder,caseFile,'1',snapshot,metaFile,transcriptFile];
const recorded=spawnSync(process.execPath,args,{encoding:'utf8'});
check(recorded.status===0&&JSON.parse(recorded.stdout).status==='NEEDS_REVIEW','Recorder captures a real test-only snapshot without implying success');
const actualCapture=JSON.parse(fs.readFileSync(JSON.parse(recorded.stdout).output)).capture;
const reviewFile=path.join(temp,'review.json');fs.writeFileSync(reviewFile,JSON.stringify(reviewFor(actualCapture)));
const reviewed=spawnSync(process.execPath,[...args,reviewFile],{encoding:'utf8'});
check(reviewed.status===0&&JSON.parse(reviewed.stdout).status==='PASS_REVIEWED','Recorder review matches actual captured hashes');
check(spawnSync(process.execPath,args,{encoding:'utf8'}).status!==0,'Recorder refuses overwriting previous evidence');
fs.writeFileSync(path.join(snapshot,'.env'),'TEST ONLY');
check(spawnSync(process.execPath,[recorder,caseFile,'2',snapshot,metaFile,transcriptFile],{encoding:'utf8'}).status!==0,'Recorder rejects secret-file names before writing');
const paired={caseId:spec.id,fixtureHash:spec.fixtureHash,assessment:{status:'PASS_REVIEWED',testOnly:false},capture:{...capture,metadata:{...capture.metadata,model:'SYNTHETIC-MODEL-FOR-UNIT-TEST'}}};
const variant=structuredClone(paired);variant.capture.promptHash='different-synthetic-prompt';
check(compareRuns(paired,variant).status==='PAIRED_OBSERVATIONS_ONLY','A pair does not produce an improvement claim');
variant.capture.metadata.environment='different';assert.throws(()=>compareRuns(paired,variant),/Unpaired environment/);checks++;
// Temporary text fixtures are intentionally retained for inspection; no model run files are written.
const registry=allRegisteredPromptKeys.map(key=>{const p=getRegisteredPrompt(key);return {key,version:p.contract.version,profile:p.contract.profile,rationale:p.contract.profileRationale,complexity:p.contract.complexity,tools:p.config.tools,capabilityGaps:suite.find(c=>c.key===key).expected.capabilityGap,promptHash:suite.find(c=>c.key===key).promptHash};});
const report={status:'PASS',checks,version:promptContractVersion,registered:48,configurations:58,cases:348,plannedTrials:1044,pilotTrials:180,modelExecution:'NOT_RUN',reason:'User confirmed no model/tool test access is available.',fixtureAppTests:'PASS',seededDefect:'REPRODUCED',assessmentTests:'SYNTHETIC_ONLY',registry};
fs.writeFileSync(new URL('../docs/prompt-eval-validation.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({status:report.status,checks,cases:348,plannedTrials:1044,modelExecution:'NOT_RUN'}));
