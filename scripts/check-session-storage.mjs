import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createDraftStore,normalizeDraft,allPromptKeys,getPrompt} from '../dist/prompt-workbench.js';

const checks=[];
const check=(label,run)=>{run();checks.push(label);};
const key='vibe-lift-project-tab-v1';
const memory=new Map();
const storage={getItem:k=>memory.get(k),setItem:(k,v)=>memory.set(k,v),removeItem:k=>memory.delete(k)};
check('Legacy version 1 restores without UI settings',()=>{
  storage.setItem(key,JSON.stringify({version:1,project:{goal:'Existing goal'},prompts:{}}));
  const s=createDraftStore(storage);assert.equal(s.state.project.goal,'Existing goal');assert.equal(s.state.ui.projectOpen,false);
});
check('Project disclosure choice survives restore',()=>{
  const s=createDraftStore(storage);s.projectOpen(true);assert.equal(createDraftStore(storage).state.ui.projectOpen,true);
  s.projectOpen(false);assert.equal(createDraftStore(storage).state.ui.projectOpen,false);
});
check('Read access does not imply write access',()=>{
  const s=createDraftStore({...storage,setItem(){throw Error('Denied');}});
  assert.equal(s.persistent,false);assert.equal(s.state.project.goal,'Existing goal');
  s.project('name','Latest');assert.equal(s.state.project.name,'Latest');
});
check('Removal failure falls back to replacing the old draft',()=>{
  const s=createDraftStore({...storage,removeItem(){throw Error('Denied');}});
  assert.equal(s.clear(),true);assert.equal(createDraftStore(storage).state.project.goal,'');
});
check('Unremovable storage reports incomplete clear',()=>{
  const s=createDraftStore({getItem:storage.getItem,setItem(){throw Error('Denied');},removeItem(){throw Error('Denied');}});
  s.project('name','Temporary');assert.equal(s.clear(),false);assert.equal(s.clearIssue,true);assert.equal(s.state.project.name,'');
});
check('Invalid schema and future versions report failed restore',()=>{
  for(const value of [null,42,[],{}, {version:2,project:{}},{version:1,project:[]}]){
    storage.setItem(key,JSON.stringify(value));assert.equal(createDraftStore(storage).restoreIssue,true);
  }
});
check('Allowed heavily escaped input larger than the old limit restores',()=>{
  const value=normalizeDraft(null);
  for(const k of allPromptKeys)value.prompts[k]={tool:getPrompt(k).config.tools[0],fields:Object.fromEntries(getPrompt(k).config.fields.filter(f=>f.key!=='publish').map(f=>[f.key,'\u0000'.repeat(8000)]))};
  const raw=JSON.stringify(value);assert.ok(raw.length>1_500_000);storage.setItem(key,raw);
  const s=createDraftStore(storage);assert.equal(s.restoreIssue,false);const expected=normalizeDraft(value);expected.ui.projectOpen=true;assert.ok(JSON.stringify(s.state)===JSON.stringify(expected),'Restored draft matches all normalized input');
});
check('Successful clear does not leave a probe or draft behind',()=>{
  const s=createDraftStore(storage);assert.equal(s.clear(),true);assert.equal(memory.size,0);
});
const report={status:'PASS',checks,scope:'Session storage edge cases; synthetic fixtures only'};
fs.writeFileSync(new URL('../docs/session-storage-validation.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
