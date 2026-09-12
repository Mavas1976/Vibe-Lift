import assert from 'node:assert/strict';
import fs from 'node:fs';
import {allPromptKeys,getPrompt,composePrompt,missingInput,normalizeDraft,createDraftStore,commandOptions,expectedResult,escapeHTML} from '../dist/prompt-workbench.js';

let checks=0;
const check=(value,message)=>{assert.ok(value,message);checks++;};
const memory=new Map();
const storage={getItem:k=>memory.get(k),setItem:(k,v)=>memory.set(k,v),removeItem:k=>memory.delete(k)};
const store=createDraftStore(storage);
const unusual='Mijn project <script> & "aanvragen"\nTweede regel, café 🎨';
store.project('goal',unusual);
store.project('name','Eigen project');
for(const key of allPromptKeys){
  const p=getPrompt(key);
  for(const f of p.config.fields)store.field(key,f.key,key==='41'&&f.key==='publish'?commandOptions[1][0]:`Eigen ${key} ${f.key}`);
  const copy=composePrompt(key,store.state);
  check(missingInput(key,store.state).length===0,`${key}: usable with explicit inputs`);
  check(p.config.fields.every(f=>copy.includes(store.state.prompts[key].fields[f.key])),`${key}: every field is included verbatim`);
  check(copy.includes(unusual),`${key}: shared multiline project context is preserved`);
  check(!copy.includes('Studio Maan')&&!copy.includes('Bijvoorbeeld:'),`${key}: examples never masquerade as project facts`);
  check(!/\bundefined\b|\[object Object\]|SPOS/.test(copy),`${key}: complete standalone instruction`);
  const blanks=normalizeDraft(store.state);
  for(const f of p.config.fields)if(f.required){
    blanks.prompts[key].fields[f.key]=' \n\t';
    check(missingInput(key,blanks).some(m=>m.id===`input-${key}-${f.key}`),`${key}: required whitespace is rejected`);
    blanks.prompts[key].fields[f.key]='Filled';
  }
  for(const tool of p.config.tools){
    store.tool(key,tool);
    check(store.state.prompts[key].tool===tool,`${key}: destination can be selected`);
  }
}
check(!composePrompt('1',store.state).includes('Eigen 2 question'),'Inputs from unrelated steps do not leak into another task');
check(composePrompt('1',store.state).includes('Claude'),'Tool choice is included in the copied instruction');
const restored=createDraftStore(storage);
assert.deepEqual(restored.state,store.state);checks++;
store.tool('7','chatgpt');check(store.state.prompts['7'].tool==='stitch','Stitch design cannot switch silently to a chat tool');
store.project('__proto__','value');store.field('1','unknown','value');
check(!Object.hasOwn(store.state.project,'__proto__')&&!Object.hasOwn(store.state.prompts['1'].fields,'unknown'),'Only declared inputs are retained');
for(const [option] of commandOptions.slice(1)){
  store.field('41','publish',option);
  const text=composePrompt('41',store.state);
  if(/push nog niet/.test(option)){
    check(text.includes('Push niet naar GitHub')&&!text.includes('Push die commit')&&!text.includes('Controleer na de push'),'Local-only choice removes contradictory push actions');
    check(expectedResult('41',store.state).includes('lokale commit'),'Expected result matches local-only action');
  }else check(text.includes('Push die commit'),'Authorized push is an explicit action');
}
store.clear();check(memory.size===0&&store.state.project.goal===''&&Object.keys(store.state.prompts).length===0,'Clear removes the complete current-tab draft');
const bad=createDraftStore({getItem(){return '{broken';},setItem(){throw Error('Denied');},removeItem(){throw Error('Denied');}});
check(bad.restoreIssue&&!bad.persistent,'Corrupt storage does not prevent loading');
bad.project('goal','Still usable');check(bad.state.project.goal==='Still usable'&&!bad.persistent,'Storage rejection retains usable memory');
bad.clear();check(bad.state.project.goal==='','Memory clear works with rejected storage');
const noStorage=createDraftStore();noStorage.project('name','Volatile');check(noStorage.state.project.name==='Volatile'&&!noStorage.persistent,'Session storage is optional');
const normalized=normalizeDraft({project:{name:'x'.repeat(200),goal:42},prompts:{'41':{tool:'unknown',fields:{publish:'invented'}},'evil':{}}});
check(normalized.project.name.length===160&&normalized.project.goal===''&&normalized.prompts['41'].tool==='antigravity'&&normalized.prompts['41'].fields.publish===''&&!normalized.prompts.evil,'Untrusted stored data is bounded and normalized');
check(escapeHTML(unusual).includes('&lt;script&gt;')&&!escapeHTML(unusual).includes('<script>'),'Project text cannot become markup');
const download=fs.readFileSync(new URL('../dist/downloads/opdrachten.md',import.meta.url),'utf8');
check(allPromptKeys.every(key=>download.includes(getPrompt(key).title)),'Download includes all current commands');
check(!download.includes(unusual),'Download never contains a learner draft');
const report={status:'PASS',checks,prompts:allPromptKeys.length,coverage:['Complete project and step input','Required fields and empty input','Tool selection','Isolation between steps','Storage restore, rejection and clear','Explicit push vs local commit','HTML escaping','General download'],browser_qa:false};
fs.writeFileSync(new URL('../docs/prompt-validation.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
