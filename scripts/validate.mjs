import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {lessons,phases} from '../dist/content.js';
import {prompts} from '../dist/prompts.js';
import {tools,lessonTools} from '../dist/tools.js';
import {seoLessons,seoInBuild} from '../dist/seo.js';
import {stepPrompts} from '../dist/prompt-config.js';
import {draftStore,composePrompt,getPrompt,allPromptKeys,commandOptions} from '../dist/prompt-workbench.js';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'dist');
let checks=0;
const verify=(condition,message)=>{assert.ok(condition,message);checks++;};
const source=fs.readFileSync(path.join(output,'downloads/handboek.md'),'utf8');
verify(lessons.length===14,'Exactly fourteen lessons');
verify(phases.length===5,'Exactly five phases');
verify(prompts.length===42,'Forty-two reusable step prompts');
verify(seoLessons.length===5,'Five additional SEO lessons');
for(const lesson of lessons){
  const guide=lessonTools[lesson.id];
  verify(guide?.intro && guide?.handoff,`Step ${lesson.id}: tool instructions and handoff`);
  verify(guide.items.length>=2 && guide.items.every(([key,use])=>tools[key] && use),`Step ${lesson.id}: real tool references and concrete uses`);
}
for(const [key,tool] of Object.entries(tools)){
  verify(tool.name && tool.description && tool.logo,`${key}: complete identity with real logo`);
  verify(/^assets\/tools\/[a-z]+\.(png|svg)$/.test(tool.logo) && fs.existsSync(path.join(output,tool.logo)),`${key}: locally available logo asset`);
  verify(new URL(tool.url).protocol==='https:' && new URL(tool.docs).protocol==='https:',`${key}: secure official tool and documentation links`);
}
for(const lesson of seoLessons){
  verify(lesson.title && lesson.input && lesson.output && lesson.example,`SEO ${lesson.id}: complete explanation`);
  verify(lesson.actions.length>=4 && lesson.checks.length>=3 && lesson.settings.length>=4,`SEO ${lesson.id}: actions, settings and checks`);
  verify(lesson.tools.every(key=>tools[key]),`SEO ${lesson.id}: valid tool references`);
  verify(lesson.sources.every(([title,url])=>title && new URL(url).protocol==='https:'),`SEO ${lesson.id}: source links`);
  verify(source.includes(lesson.prompt),`SEO ${lesson.id}: copy text and download stay aligned`);
}
for(const id of [2,5,7,8,11,12])verify(seoInBuild[id],`SEO integrated before and during building: step ${id}`);
verify(prompts.find(p=>p.id===9).text.includes('seo-plan.md') && prompts.find(p=>p.id===9).text.includes('GitHub'), 'Actual build prompt includes SEO and connected repository workflow');
verify(!source.includes('git-scm.com/install') && !/git (?:add|commit|push|clone)\b/.test(source),'Reader does not need a Git download or terminal command tutorial');
assert.deepEqual(lessons.map(l=>l.id),Array.from({length:14},(_,i)=>i+1));
assert.deepEqual(prompts.map(p=>p.id),Array.from({length:42},(_,i)=>i+1));
assert.deepEqual(Object.values(stepPrompts).flatMap(p=>[...p.main,...p.extra]).sort((a,b)=>a-b),prompts.map(p=>p.id));
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
for(const prompt of prompts.filter(p=>p.id<=28)) {
  const heading=new RegExp('(?:\\*\\*|### )Opdracht '+String(prompt.id).padStart(2,'0')+' [—–-]');
  const start=normalizedSource.search(heading);
  verify(start>=0,`Source contains prompt ${prompt.id}`);
  const original=/```text\n([\s\S]*?)\n```/.exec(normalizedSource.slice(start))?.[1];
  verify(original===prompt.text,`Prompt ${prompt.id} exactly matches the source (normalized line endings)`);
}

// In-memory renderer contract tests: no browser, screenshots or DOM automation.
const listeners={},mainListeners={};
const fakeElement=()=>({innerHTML:'',textContent:'',dataset:{},contains(){return false;},closest(){return {open:false};},focus(){},select(){},scrollIntoView(){},setAttribute(){},removeAttribute(){},classList:{add(){},remove(){},toggle(){}},addEventListener(){}});
const main=fakeElement();main.addEventListener=(name,fn)=>mainListeners[name]=fn;
const elements=new Map([['#main',main],['.skip-link',fakeElement()],['#notice',fakeElement()],['#route-content',fakeElement()]]);
globalThis.document={title:'',addEventListener(){},querySelector:selector=>{if(!elements.has(selector))elements.set(selector,fakeElement());return elements.get(selector);},querySelectorAll:()=>[]};
main.querySelectorAll=()=>[];
document.getElementById=id=>document.querySelector(`#${id}`);
globalThis.window={scrollTo(){},matchMedia:()=>({matches:false,addEventListener(){}}),addEventListener:(name,fn)=>listeners[name]=fn};
globalThis.location={hash:'#route'};
const {parseRoute,escapeHTML}=await import('../dist/app.js');
for(const id of [0,15,-1,100]) verify(parseRoute(`#stap/${id}`).page==='missing',`Reject step ${id}`);
for(const hash of ['#stap/01','#stap/1/nope','#stap/1/','#__proto__','#<script>','#stap/1?x=2','#stap/%31']) verify(parseRoute(hash).page==='missing',`Reject invalid route ${hash}`);
for(const hash of ['#seo/0','#seo/6','#seo/01','#seo/1/','#seo/x','#seo/1?x=1'])verify(parseRoute(hash).page==='missing',`Reject invalid SEO route ${hash}`);
verify(escapeHTML('<img src=x onerror="alert(1)">&\'')==='&lt;img src=x onerror=&quot;alert(1)&quot;&gt;&amp;&#39;','Dynamic text is escaped');
verify(parseRoute('').page==='route','Empty route opens the map');
const routeNames=['#route','#voorbeeld','#tools','#werkwijze','#opdrachten','#seo',...seoLessons.map(l=>`#seo/${l.id}`),...lessons.flatMap(l=>['uitleg','voorbeeld','opdracht','controle'].map(t=>`#stap/${l.id}/${t}`))];
const rendered=new Map();
for(const hash of routeNames) {
  location.hash=hash;listeners.hashchange();
  const html=main.innerHTML;rendered.set(hash,html);
  verify(document.title.includes('Vibe Lift'),`${hash}: page title uses the current brand`);
  verify(!/spos/i.test(html),`${hash}: no removed framework references in rendered content`);
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
    verify(html.includes('>Promptgenerator</button>'),`${hash}: generator has a clearly named tab`);
    verify(selected===parseRoute(hash).tab,`${hash}: panel and tab match`);
    verify((html.match(/class="side-step"/g)||[]).length===14,`${hash}: every step is reachable`);
    if(parseRoute(hash).tab!=='opdracht'){
      verify(html.includes('Voor deze stap staat een promptgenerator klaar.') && html.includes(`href="#stap/${parseRoute(hash).id}/opdracht">Open promptgenerator`),`${hash}: direct generator entry from the lesson`);
      verify(html.includes('Tools voor deze stap') && html.includes('Neem mee →'),`${hash}: tool assistance`);
      for(const [key] of lessonTools[parseRoute(hash).id].items){
        verify(html.includes(`href="${tools[key].url}"`),`${hash}: ${tools[key].name} opens directly`);
        verify(html.includes(`src="${tools[key].logo}"`),`${hash}: ${tools[key].name} has its real logo`);
      }
    }else{
      verify(html.includes('id="project-brief"') && html.includes('data-composer-copy='),`${hash}: project input and composed copy`);
      for(const key of stepPrompts[parseRoute(hash).id].main)verify(html.includes(`href="${tools[getPrompt(key).config.tools[0]].url}"`),`${hash}: primary destination tool`);
    }
  }
  if(hash.startsWith('#seo')){
    const seoId=parseRoute(hash).id;
    verify(html.includes(`data-generator-jump="s${seoId}"`) && html.includes('id="seo-generator-title"'),`${hash}: current SEO generator is directly reachable`);
    verify(html.includes(`open id="opdracht-s${seoId}"`),`${hash}: SEO generator starts expanded`);
    verify((html.match(/aria-current="step"/g)||[]).length===1,`${hash}: one active SEO lesson`);
    verify(html.includes('data-seo-copy=') && html.includes('Officiële uitleg bij deze les'),`${hash}: usable prompt and source help`);
    verify(html.includes('Controleer je resultaat') && html.includes('JOUW WERKBLAD'),`${hash}: settings example and review criteria`);
  }
}
verify((rendered.get('#route').match(/class="step-card /g)||[]).length===14,'Map contains every step');
verify((rendered.get('#route').match(/Promptgenerator inbegrepen/g)||[]).length===14,'Every route card identifies its generator');
verify((rendered.get('#opdrachten').match(/>Kopieer prompt<\/button>/g)||[]).length===47,'Every generator has an explicit copy prompt action');
verify((rendered.get('#opdrachten').match(/4 · Plak in je AI-tool/g)||[]).length===47,'Every generator explains where to use the copied prompt');
verify(!/open id="opdracht-s[1-5]"/.test(rendered.get('#opdrachten')),'SEO generators in the library remain collapsed until chosen');
verify((rendered.get('#opdrachten').match(/id="opdracht-\d+"/g)||[]).length===42,'Library contains all step prompts');
verify((rendered.get('#opdrachten').match(/id="opdracht-s\d+"/g)||[]).length===5,'Library also includes five SEO prompts');
verify(rendered.get('#stap/14/controle').includes('href="#seo">Volgende: je SEO-cursus'),'End of main course leads to SEO');
verify(rendered.get('#stap/7/uitleg').includes('Antigravity koppelen aan GitHub') && rendered.get('#stap/12/uitleg').includes('Van GitHub naar Railway'),'Repository and hosting walkthroughs in the actual lessons');
verify(rendered.get('#route').includes('Digitale gewichtloosheid.<br><span>Bouw zo ver als je kan denken.'),'Homepage leads with the current brand promise');
verify(rendered.get('#werkwijze').includes('Geef je bouwpartner de juiste context.'),'Method page provides actionable, independent guidance');
verify((rendered.get('#voorbeeld').match(/href="#stap\/\d+\/voorbeeld"/g)||[]).length===14,'Example links to all fourteen lessons');
// Copy success and denied-clipboard fallback exercise the production handler.
location.hash='#stap/1/opdracht';listeners.hashchange();
let copied='',selected=false;
Object.defineProperty(globalThis,'navigator',{configurable:true,value:{clipboard:{writeText:async t=>{copied=t;}}}});
const copyEvent={target:{closest:selector=>selector==='[data-composer-copy]'?{dataset:{composerCopy:'1'}}:null}};
await mainListeners.click(copyEvent);
verify(copied==='','Missing project input prevents an incomplete copy');
mainListeners.input({target:{id:'project-goal',dataset:{project:'goal'},value:'Een reserveringssite voor lokale workshops',removeAttribute(){}}});
verify(draftStore.state.project.goal==='Een reserveringssite voor lokale workshops','Typing updates the actual draft handler');
await mainListeners.click({target:{closest:selector=>selector==='[data-prompt-tool]'?{dataset:{promptTool:'1',tool:'claude'}}:null}});
verify(composePrompt('1').includes('Claude'),'Production tool handler changes the copy destination');
for(const f of getPrompt('1').config.fields)if(f.required)draftStore.field('1',f.key,'Mijn eigen informatie');
await mainListeners.click(copyEvent);
verify(copied===composePrompt('1') && copied.includes('Een reserveringssite voor lokale workshops'),'Copy includes the actual project input and full task');
verify(!/spos/i.test(copied),'Copied prompt does not require the removed framework');
navigator.clipboard.writeText=async()=>{throw new Error('Denied');};
document.querySelector('#prompt-text-1').select=()=>{selected=true;};
await mainListeners.click(copyEvent);
verify(selected,'Clipboard denial offers selectable text');
const seoCopyEvent={target:{closest:selector=>selector==='[data-composer-copy]'?{dataset:{composerCopy:'s4'}}:null}};
for(const f of getPrompt('s4').config.fields)if(f.required)draftStore.field('s4',f.key,'Eigen meetplan');
navigator.clipboard.writeText=async text=>{copied=text;};
await mainListeners.click(seoCopyEvent);
verify(copied===composePrompt('s4'),'GA4 copy includes the supplied measurement context');
selected=false;navigator.clipboard.writeText=async()=>{throw new Error('Denied');};
document.querySelector('#prompt-text-s4').select=()=>{selected=true;};
await mainListeners.click(seoCopyEvent);
verify(selected,'SEO copy denial offers selectable text');
// All generators exercise the actual copy handler with synthetic project inputs.
navigator.clipboard.writeText=async text=>{copied=text;};
for(const key of allPromptKeys){
  for(const f of getPrompt(key).config.fields)draftStore.field(key,f.key,key==='41'&&f.key==='publish'?commandOptions[1][0]:`Testinvoer ${key} ${f.key}`);
  copied='';
  await mainListeners.click({target:{closest:s=>s==='[data-composer-copy]'?{dataset:{composerCopy:key}}:null}});
  verify(copied===composePrompt(key),`${key}: actual copy handler copies the complete generated prompt`);
}
for(const lesson of seoLessons){
  const card=document.getElementById(`opdracht-s${lesson.id}`),heading=document.getElementById('seo-generator-title');
  let scrolled=false,focused=false;card.open=false;
  heading.scrollIntoView=()=>{scrolled=true;};heading.focus=()=>{focused=true;};
  const hashBefore=location.hash;
  await mainListeners.click({target:{closest:s=>s==='[data-generator-jump]'?{dataset:{generatorJump:`s${lesson.id}`}}:null}});
  verify(card.open&&scrolled&&focused&&location.hash===hashBefore,`SEO ${lesson.id}: shortcut opens the generator, moves focus and retains the lesson route`);
}
location.hash='#stap/6/opdracht';listeners.hashchange();
verify(main.innerHTML.includes('Een reserveringssite voor lokale workshops'),'Project input survives route changes');
await mainListeners.click({target:{closest:s=>s==='[data-draft-clear]'?{}:null}});
verify(document.querySelector('#draft-clear-confirm').hidden===false&&draftStore.state.project.goal!=='','Clear asks before deleting entered text');
await mainListeners.click({target:{closest:s=>s==='[data-draft-cancel]'?{}:null}});
verify(document.querySelector('#draft-clear-confirm').hidden===true&&draftStore.state.project.goal!=='','Cancel preserves input');
await mainListeners.click({target:{closest:s=>s==='[data-draft-confirm]'?{}:null}});
verify(draftStore.state.project.goal===''&&Object.keys(draftStore.state.prompts).length===0,'Confirmed clear removes project and step input');
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
for(const file of files) {
  verify(!/spos/i.test(file),`${file}: no removed framework name in public paths`);
  if(/\.(html|js|css|md|svg|json|txt)$/i.test(file)) verify(!/spos|truth contract/i.test(fs.readFileSync(path.join(output,file),'utf8')),`${file}: public source and downloads are free of framework references`);
}
const shell=fs.readFileSync(path.join(output,'index.html'),'utf8');
verify(shell.includes('<title>Vibe Lift — Digitale gewichtloosheid</title>'),'Static metadata uses the full brand and proposition');
verify((shell.match(/class="brand-vibe">Vibe/g)||[]).length===2,'Header and footer both use the Vibe Lift wordmark');
verify(shell.includes('id="air-field" aria-hidden="true"') && shell.includes('id="motion-toggle"'),'Decorative field and accessible pause control exist');
verify(source.startsWith('# Vibe Lift — Digitale gewichtloosheid'),'Download has the current brand');
verify(!/oorspronkelijke tekst|Originele opdracht|ongewijzigde kopie/i.test(rendered.get('#opdrachten')),'Library does not mislabel edited prompts as original');
verify(files.includes('index.html'),'Static entrypoint exists');
const totalBytes=files.reduce((sum,f)=>sum+fs.statSync(path.join(output,f)).size,0);
verify(totalBytes<5_000_000,'Published assets stay below the five megabyte initial budget');
for(const file of files.filter(f=>/\.(html|js|css)$/.test(f))) {
  const text=fs.readFileSync(path.join(output,file),'utf8');
  verify(!/localStorage|document\.cookie|XMLHttpRequest|fetch\(/.test(text),`${file}: no app tracking, durable learner state or backend calls`);
}
const manifest=JSON.parse(fs.readFileSync(path.join(root,'.openai/hosting.json'),'utf8').replace(/^\uFEFF/,''));
verify(manifest.project_id==='appgprj_6aa5374be46881918efdd7f0e0b517bd' && manifest.static.directory==='dist','Existing Sites registration and output directory retained');
const report={status:'PASS',generated_at:new Date().toISOString(),brand:'Vibe Lift',tagline:'Digitale gewichtloosheid',checks,rendered_routes:routeNames.length,lessons:14,step_prompts:42,total_copyable_prompts:47,seo_lessons:5,seo_prompts:5,tools:Object.keys(tools).length,public_framework_references:0,reader_edition_sha256:createHash('sha256').update(fs.readFileSync(path.join(output,'downloads/handboek.md'))).digest('hex'),published_files:files.length,published_bytes:totalBytes,browser_qa:'Not performed; these are source, data and in-memory renderer checks, not browser UI tests.',limitations:['No real novice usability study','No browser layout, keyboard, screen-reader or contrast certification','External tool availability may change','Private hosted access is enforced by Sites, not application JavaScript']};
fs.writeFileSync(path.join(root,'docs/validation.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
