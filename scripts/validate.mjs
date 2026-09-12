import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {lessons,phases} from '../dist/content.js';
import {prompts} from '../dist/prompts.js';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'dist');
let checks=0;
const verify=(condition,message)=>{assert.ok(condition,message);checks++;};
const source=fs.readFileSync(path.join(output,'downloads/handboek.md'),'utf8');
verify(lessons.length===14,'Exactly fourteen lessons');
verify(phases.length===5,'Exactly five phases');
verify(prompts.length===28,'Exactly twenty-eight original prompts');
assert.deepEqual(lessons.map(l=>l.id),Array.from({length:14},(_,i)=>i+1));
assert.deepEqual(prompts.map(p=>p.id),Array.from({length:28},(_,i)=>i+1));
assert.deepEqual(lessons.flatMap(l=>l.prompts).sort((a,b)=>a-b),prompts.map(p=>p.id));
checks+=3;
for(const lesson of lessons) {
  for(const key of ['title','short','intro','goal','input','output','sources','pitfall']) verify(typeof lesson[key]==='string' && lesson[key].trim().length>0,`Lesson ${lesson.id}: ${key}`);
  verify(phases.some(p=>p.id===lesson.phase),`Lesson ${lesson.id} has a phase`);
  verify(lesson.actions.length>=3 && lesson.actions.every(a=>a.length===2 && a.every(Boolean)),`Lesson ${lesson.id}: actionable explanations`);
  verify(lesson.flow.length>=3 && lesson.flow.every(Boolean),`Lesson ${lesson.id}: flow`);
  verify(lesson.example.items.length>=3 && lesson.example.text && lesson.example.title,`Lesson ${lesson.id}: worked example`);
  verify(lesson.checks.length>=3 && lesson.checks.every(Boolean),`Lesson ${lesson.id}: review criteria`);
  verify(lesson.term.length===2 && lesson.term.every(Boolean),`Lesson ${lesson.id}: glossary`);
}
const normalizedSource=source.replace(/\r\n/g,'\n');
for(const prompt of prompts) {
  const heading=new RegExp('(?:\\*\\*|### )Opdracht '+String(prompt.id).padStart(2,'0')+' [—–-]');
  const start=normalizedSource.search(heading);
  verify(start>=0,`Source contains prompt ${prompt.id}`);
  const original=/```text\n([\s\S]*?)\n```/.exec(normalizedSource.slice(start))?.[1];
  verify(original===prompt.text,`Prompt ${prompt.id} exactly matches the source (normalized line endings)`);
}

// In-memory renderer contract tests: no browser, screenshots or DOM automation.
const listeners={},mainListeners={};
const fakeElement=()=>({innerHTML:'',textContent:'',focus(){},select(){},scrollIntoView(){},setAttribute(){},removeAttribute(){},classList:{add(){},remove(){}},addEventListener(){}});
const main=fakeElement();main.addEventListener=(name,fn)=>mainListeners[name]=fn;
const elements=new Map([['#main',main],['.skip-link',fakeElement()],['#notice',fakeElement()],['#route-content',fakeElement()]]);
globalThis.document={title:'',querySelector:selector=>{if(!elements.has(selector))elements.set(selector,fakeElement());return elements.get(selector);},querySelectorAll:()=>[]};
main.querySelectorAll=()=>[];
globalThis.window={scrollTo(){},addEventListener:(name,fn)=>listeners[name]=fn};
globalThis.location={hash:'#route'};
const {parseRoute,escapeHTML}=await import('../dist/app.js');
for(const id of [0,15,-1,100]) verify(parseRoute(`#stap/${id}`).page==='missing',`Reject step ${id}`);
for(const hash of ['#stap/01','#stap/1/nope','#stap/1/','#__proto__','#<script>','#stap/1?x=2','#stap/%31']) verify(parseRoute(hash).page==='missing',`Reject invalid route ${hash}`);
verify(escapeHTML('<img src=x onerror="alert(1)">&\'')==='&lt;img src=x onerror=&quot;alert(1)&quot;&gt;&amp;&#39;','Dynamic text is escaped');
verify(parseRoute('').page==='route','Empty route opens the map');
const routeNames=['#route','#voorbeeld','#tools','#spos','#opdrachten',...lessons.flatMap(l=>['uitleg','voorbeeld','opdracht','controle'].map(t=>`#stap/${l.id}/${t}`))];
const rendered=new Map();
for(const hash of routeNames) {
  location.hash=hash;listeners.hashchange();
  const html=main.innerHTML;rendered.set(hash,html);
  verify((html.match(/<h1\b/g)||[]).length===1,`${hash}: exactly one main heading`);
  verify(!/\bundefined\b|\[object Object\]|\bNaN\b/.test(html),`${hash}: no unresolved values`);
  for(const match of html.matchAll(/href="(#[^"]+)"/g)) verify(parseRoute(match[1]).page!=='missing',`${hash}: internal link ${match[1]} resolves`);
  for(const match of html.matchAll(/(?:src|href)="((?:assets|downloads)\/[^"#]+)"/g)) verify(fs.existsSync(path.join(output,match[1])),`${hash}: asset ${match[1]} exists`);
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  verify(ids.length===new Set(ids).size,`${hash}: unique HTML IDs`);
  if(hash.startsWith('#stap/')) {
    verify((html.match(/role="tab"/g)||[]).length===4,`${hash}: four tabs`);
    verify((html.match(/aria-selected="true"/g)||[]).length===1,`${hash}: one selected tab`);
    const selected=/aria-labelledby="tab-([^"]+)"/.exec(html)?.[1];
    verify(selected===parseRoute(hash).tab,`${hash}: panel and tab match`);
    verify((html.match(/class="side-step"/g)||[]).length===14,`${hash}: every step is reachable`);
  }
}
verify((rendered.get('#route').match(/class="step-card /g)||[]).length===14,'Map contains every step');
verify((rendered.get('#opdrachten').match(/class="prompt-card"/g)||[]).length===28,'Library contains all original prompts');
verify((rendered.get('#voorbeeld').match(/href="#stap\/\d+\/voorbeeld"/g)||[]).length===14,'Example links to all fourteen lessons');
// Copy success and denied-clipboard fallback exercise the production handler.
location.hash='#stap/1/opdracht';listeners.hashchange();
let copied='',selected=false;
Object.defineProperty(globalThis,'navigator',{configurable:true,value:{clipboard:{writeText:async t=>{copied=t;}}}});
const copyEvent={target:{closest:selector=>selector==='[data-copy]'?{dataset:{copy:'1'}}:null}};
await mainListeners.click(copyEvent);
verify(copied===prompts[0].text,'Copy sends the exact original prompt');
navigator.clipboard.writeText=async()=>{throw new Error('Denied');};
document.querySelector('#prompt-text-1').select=()=>{selected=true;};
await mainListeners.click(copyEvent);
verify(selected,'Clipboard denial offers selectable text');
// Keyboard navigation must wrap and support the two ends of the tab list.
for(const [current,key,expected] of [['uitleg','ArrowLeft','controle'],['controle','ArrowRight','uitleg'],['opdracht','Home','uitleg'],['voorbeeld','End','controle']]) {
  let prevented=false;location.hash=`#stap/7/${current}`;
  mainListeners.keydown({key,preventDefault(){prevented=true;},target:{closest:()=>({dataset:{tab:current}})}});
  verify(prevented && location.hash===`stap/7/${expected}`,`Keyboard: ${current} + ${key}`);
}
mainListeners.change({target:{id:'step-select',value:'14'}});
verify(location.hash==='stap/14','Mobile step selector reaches the final lesson');
location.hash='#stap/999';listeners.hashchange();
verify(main.innerHTML.includes('Deze stap kunnen we niet vinden'),'Unknown route has a helpful fallback');

const files=fs.readdirSync(output,{recursive:true}).filter(f=>fs.statSync(path.join(output,f)).isFile());
verify(files.includes('index.html'),'Static entrypoint exists');
const totalBytes=files.reduce((sum,f)=>sum+fs.statSync(path.join(output,f)).size,0);
verify(totalBytes<5_000_000,'Published assets stay below the five megabyte initial budget');
for(const file of files.filter(f=>/\.(html|js|css)$/.test(f))) {
  const text=fs.readFileSync(path.join(output,file),'utf8');
  verify(!/localStorage|sessionStorage|document\.cookie|XMLHttpRequest|fetch\(/.test(text),`${file}: no app tracking, persistent learner state or backend calls`);
}
const manifest=JSON.parse(fs.readFileSync(path.join(root,'.openai/hosting.json'),'utf8').replace(/^\uFEFF/,''));
verify(manifest.project_id==='appgprj_6aa5374be46881918efdd7f0e0b517bd' && manifest.static.directory==='dist','Existing Sites registration and output directory retained');
const report={status:'PASS',generated_at:new Date().toISOString(),checks,rendered_routes:routeNames.length,lessons:14,original_prompts:28,source_sha256:createHash('sha256').update(fs.readFileSync(path.join(output,'downloads/handboek.md'))).digest('hex'),published_files:files.length,published_bytes:totalBytes,browser_qa:'Not performed; these are source, data and in-memory renderer checks, not browser UI tests.',limitations:['No real novice usability study','No browser layout, keyboard, screen-reader or contrast certification','External tool availability may change','Private hosted access is enforced by Sites, not application JavaScript']};
fs.writeFileSync(path.join(root,'docs/validation.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
