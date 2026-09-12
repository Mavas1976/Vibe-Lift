import fs from 'node:fs';
import path from 'node:path';
import {assess,safeRelative} from '../eval/assess.mjs';
import {sha} from '../eval/suite.mjs';

// Capture an explicitly supplied, isolated fixture snapshot. Never runs a model.
const [caseFile,trial,snapshotDir,metadataFile,transcriptFile,reviewFile]=process.argv.slice(2);
if(!caseFile||!['1','2','3'].includes(trial)||!snapshotDir||!metadataFile||!transcriptFile)throw Error('Usage: node scripts/record-prompt-eval.mjs CASE_JSON REPEAT(1..3) FIXTURE_SNAPSHOT METADATA_JSON TRANSCRIPT_TXT [REVIEW_JSON]');
const spec=JSON.parse(fs.readFileSync(caseFile,'utf8'));
if(!/^[a-z0-9_-]+$/i.test(spec.id)||!/^\d+\.\d+\.\d+$/.test(spec.version))throw Error('Invalid case identity');
if(spec.promptHash!==sha(spec.prompt)||spec.fixtureHash!==sha(JSON.stringify({sources:spec.sources,expected:spec.expected})))throw Error('Case content does not match its hashes');
const root=path.resolve(snapshotDir),files={};let total=0;
function collect(dir){
  if(fs.lstatSync(dir).isSymbolicLink())throw Error('Symlinks are not accepted in captured fixtures');
  for(const item of fs.readdirSync(dir,{withFileTypes:true})){
    const full=path.join(dir,item.name),relative=path.relative(root,full).split(path.sep).join('/');
    if(!safeRelative(relative)||fs.lstatSync(full).isSymbolicLink())throw Error(`Unsafe snapshot entry: ${relative}`);
    if(['.git','node_modules','.env'].includes(item.name)||item.name.startsWith('.env.'))throw Error('Supply a curated fixture snapshot without repositories, dependencies or secrets');
    if(item.isDirectory())collect(full);
    else if(item.isFile()){
      const bytes=fs.readFileSync(full);total+=bytes.length;
      if(total>5_000_000||Object.keys(files).length>=500||bytes.includes(0))throw Error('Snapshot exceeds text-only fixture limits');
      files[relative]=bytes.toString('utf8');
    }else throw Error('Only ordinary text files are accepted');
  }
}
collect(root);
const capture={promptHash:spec.promptHash,fixtureHash:spec.fixtureHash,metadata:JSON.parse(fs.readFileSync(metadataFile,'utf8')),transcript:fs.readFileSync(transcriptFile,'utf8'),files};
const review=reviewFile?JSON.parse(fs.readFileSync(reviewFile,'utf8')):null;
const assessment=assess(spec,capture,review),captureHash=sha(JSON.stringify(capture));
const result={id:`${spec.id}-r${trial}`,caseId:spec.id,version:spec.version,fixtureHash:spec.fixtureHash,capturedAt:new Date().toISOString(),captureHash,capture,review,assessment};
const output=path.resolve(import.meta.dirname,'..','eval','runs',spec.version,`${result.id}${review?'-reviewed':''}.json`);
fs.mkdirSync(path.dirname(output),{recursive:true});
fs.writeFileSync(output,JSON.stringify(result,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({output,captureHash,status:assessment.status,failures:assessment.failures,pending:assessment.pending}));
