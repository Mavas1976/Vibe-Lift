import fs from 'node:fs';
import path from 'node:path';
import {buildSuite} from '../eval/suite.mjs';
import {promptContractVersion} from '../dist/prompt-contracts.js';
const root=path.resolve(import.meta.dirname,'..');
const edition=process.argv[2]||promptContractVersion;
if(!/^[a-z0-9.-]+$/i.test(edition)||edition==='.'||edition==='..')throw Error('Use a plain suite edition name');
const output=path.join(root,'eval','generated',edition);
if(fs.existsSync(output))throw Error(`Preserve the existing immutable suite: ${output}`);
const suite=buildSuite();
fs.mkdirSync(output,{recursive:true});
const trials=[];
for(const item of suite){
  const dir=path.join(output,'cases',item.id);fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(path.join(dir,'case.json'),JSON.stringify(item,null,2)+'\n');
  fs.writeFileSync(path.join(dir,'prompt.txt'),item.prompt);
  for(const [file,content] of Object.entries(item.sources)){
    const target=path.resolve(dir,'project',file);
    if(!target.startsWith(path.join(dir,'project')+path.sep))throw Error('Fixture path escapes case');
    fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content);
  }
  for(let repeat=1;repeat<=3;repeat++)trials.push({id:`${item.id}-r${repeat}`,caseId:item.id,key:item.key,tool:item.tool,repeat,promptHash:item.promptHash,fixtureHash:item.fixtureHash,status:'NOT_RUN'});
}
const manifest={version:promptContractVersion,suiteEdition:edition,createdAt:new Date().toISOString(),synthetic:true,cases:suite.length,trials:trials.length,modelExecution:'NOT_RUN',runs:trials};
fs.writeFileSync(path.join(output,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({output,cases:suite.length,trials:trials.length,status:'PREPARED_NOT_EXECUTED'}));
