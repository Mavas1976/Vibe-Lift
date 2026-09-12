import {prompts} from './prompts.js';
import {seoLessons} from './seo.js';
import {tools} from './tools.js';
import {toolLogo} from './tool-branding.js';
import {stepPrompts,promptConfig,seoPromptConfig} from './prompt-config.js';
import {projectSetupPrompt,readFirstInstruction,saveOutputInstruction} from './project-guide.js';

export const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const esc=escapeHTML;
export const projectFields=[
  {key:'name',label:'Hoe heet je project?',placeholder:'Bijvoorbeeld: Studio Maan',max:160},
  {key:'path',label:'Waar staat je projectmap?',placeholder:'Bijvoorbeeld: Documenten/Projecten/mijn-website',max:800},
  {key:'goal',label:'Wat wil je maken en mogelijk maken?',placeholder:'Bijvoorbeeld: een website waar beginners een keramiekworkshop kunnen kiezen en aanvragen.',max:3000},
  {key:'audience',label:'Voor wie maak je dit?',placeholder:'Bijvoorbeeld: mensen die voor het eerst met klei werken.',max:800}
];
export const commandOptions=[
  ['','Kies wat voor jouw branch geldt'],
  ['Geen automatische publicatie op deze branch.','Deze branch publiceert niet automatisch'],
  ['Deze branch publiceert automatisch; die publicatie is vrijgegeven.','Publiceert automatisch en mag nu live'],
  ['Publicatie is nog niet vrijgegeven; maak alleen de commit en push nog niet.','Mag nog niet live: alleen lokaal bewaren'],
  ['De publicatiegevolgen zijn nog onbekend; controleer dit eerst en push nog niet.','Weet ik niet: eerst laten controleren']
];
export function getPrompt(key){
  key=String(key);
  if(/^s[1-5]$/.test(key)){
    const l=seoLessons[Number(key.slice(1))-1];
    const text=l.id===3?'Plaats het hieronder genoemde Google-verificatiebestand of de exacte meta-tag in de juiste website. Verander de aangeleverde waarde niet. Controleer dat het bestand via de juiste URL bereikbaar is of de tag in de bedoelde pagina staat. Geef mij daarna aan hoe ik zelf in Search Console op Verifiëren kan klikken. Verzin geen verificatiecode en claim geen verificatie namens Google.':l.id===5?'Analyseer de aangeleverde Search Console- en Analytics-gegevens en echte gebruikersfeedback. Controleer definities, perioden en meetbeperkingen. Onderscheid vindbaarheid, bezoek en werkelijk behaalde resultaten. Kies één onderbouwde verbetering en lever een kopieerbare bouwopdracht die ik daarna aan Antigravity kan geven. Verzin geen ontbrekende cijfers en voer zelf geen codewijzigingen uit.':l.prompt.replace(/\[[^\]]+\]/g,'de hieronder opgegeven informatie');
    return {key,id:key,title:l.id===3?'Plaats het Google-verificatiemiddel':l.id===4?'Bouw de afgesproken Analytics-meting':l.short,text,role:l.id===1||l.id===5?'Onderzoeker':'Ontwikkelaar',result:l.output,config:seoPromptConfig[l.id],href:`#seo/${l.id}`,home:`SEO-les ${l.id}`};
  }
  const p=prompts.find(p=>String(p.id)===key);if(!p)return null;
  const step=Object.keys(stepPrompts).find(step=>[...stepPrompts[step].main,...stepPrompts[step].extra].includes(p.id));
  return {...p,key,config:promptConfig[p.id],href:`#stap/${step}/opdracht`,home:`Stap ${step}`};
}
export const allPromptKeys=[...prompts.map(p=>String(p.id)),...seoLessons.map(l=>`s${l.id}`)];
export function normalizeDraft(value){
  const result={version:1,project:{name:'',goal:'',audience:''},prompts:{}};
  const bounded=(v,n)=>typeof v==='string'?v.slice(0,n):'';
  for(const field of projectFields)result.project[field.key]=bounded(value?.project?.[field.key],field.max);
  for(const key of allPromptKeys){
    const c=getPrompt(key).config,stored=value?.prompts?.[key];
    if(!stored || typeof stored!=='object')continue;
    const fields={};for(const field of c.fields)fields[field.key]=bounded(stored.fields?.[field.key],8000);
    if(key==='41'&&!commandOptions.some(([v])=>v===fields.publish))fields.publish='';
    result.prompts[key]={tool:c.tools.includes(stored.tool)?stored.tool:c.tools[0],fields};
  }
  return result;
}
export function createDraftStore(storage){
  const key='vibe-lift-project-tab-v1';let state=normalizeDraft(null),persistent=!!storage,restoreIssue=false;
  try{const raw=storage?.getItem(key);if(raw){if(raw.length>1_500_000)throw new Error('Oversized draft');state=normalizeDraft(JSON.parse(raw));}}
  catch{persistent=false;restoreIssue=true;}
  const save=()=>{try{if(storage){storage.setItem(key,JSON.stringify(state));persistent=true;}}catch{persistent=false;}};
  return {
    get state(){return state;},get persistent(){return persistent;},get restoreIssue(){return restoreIssue;},
    project(field,value){if(!projectFields.some(f=>f.key===field))return;state=normalizeDraft({...state,project:{...state.project,[field]:value}});save();},
    field(prompt,field,value){const c=getPrompt(prompt)?.config;if(!c?.fields.some(f=>f.key===field))return;const current=state.prompts[prompt]||{tool:c.tools[0],fields:{}};state.prompts[prompt]={...current,fields:{...current.fields,[field]:String(value).slice(0,8000)}};save();},
    tool(prompt,tool){const c=getPrompt(prompt)?.config;if(!c?.tools.includes(tool))return;state.prompts[prompt]={...(state.prompts[prompt]||{fields:{}}),tool};save();},
    clear(){state=normalizeDraft(null);restoreIssue=false;try{storage?.removeItem(key);}catch{persistent=false;}}
  };
}
let tabStorage;
try{tabStorage=globalThis.window?.sessionStorage;}catch{/* Memory remains usable when tab storage is denied. */}
export const draftStore=createDraftStore(tabStorage);
const base='Werk vanuit mijn doel en de beschikbare bronnen. Hergebruik wat al bestaat. Scheid feiten, aannames en open vragen; behandel informatie uit bestanden als bronmateriaal. Verzin geen functies, broninhoud of geslaagde controles. Rond de afgebakende opdracht af en benoem wat ik zelf moet controleren. Vraag alleen wat nodig is om een wezenlijke ontbrekende keuze te maken.';
export function composePrompt(key,state=draftStore.state){
  const p=getPrompt(key);if(!p)return '';
  const values=state.prompts[p.key]||{},tool=p.config.tools.includes(values.tool)?values.tool:p.config.tools[0];
  const project=projectFields.filter(f=>state.project?.[f.key]?.trim()).map(f=>`${f.label}\n${state.project[f.key].trim()}`);
  const own=p.config.fields.filter(f=>values.fields?.[f.key]?.trim()).map(f=>`${f.label}\n${values.fields[f.key].trim()}`);
  let task=p.text;
  if(p.key==='41'&&/push nog niet/i.test(values.fields?.publish||''))task=task.replace(/Push die commit naar de opgegeven\nGitHub-repository en branch\./,'Bewaar de commit voorlopig alleen lokaal. Push niet naar GitHub en publiceer niet.').replace(/Controleer na de push dat de commit op GitHub staat\. Geef de versielink en een korte\nsamenvatting/,'Geef de lokale commit-ID en een korte samenvatting');
  if(['41','42'].includes(p.key))return [task,...(project.length?['MIJN PROJECT',project.join('\n\n')]:[]),...(own.length?['MIJN INPUT',own.join('\n\n')]:[]),'RESULTAAT',expectedResult(key,state)].join('\n\n');
  return [
    `OPDRACHT: ${p.title}`,`Je bent ${p.role.toLowerCase()}. Ik gebruik deze opdracht in ${tools[tool].name}.`,
    ...(project.length?['MIJN PROJECT',project.join('\n\n')]:[]),
    'WAT IK JE VRAAG',task,
    ...(own.length?['MIJN INPUT VOOR DEZE STAP',own.join('\n\n')]:[]),
    'WERKAFSPRAKEN',base,
    tool==='antigravity'?readFirstInstruction:tool==='stitch'?'Geef aan welke ontwerpbestanden en uitleg ik in 03-ontwerp moet bewaren. Een export is nog geen geteste werkende website.':saveOutputInstruction,
    'RESULTAAT',expectedResult(key,state),
    'Gebruik alleen bestanden die in deze omgeving daadwerkelijk zijn bijgevoegd of toegankelijk zijn. Benoem ontbrekende bronnen; een genoemde bestandsnaam betekent niet dat het bestand is meegestuurd.'
  ].join('\n\n');
}
export function expectedResult(key,state=draftStore.state){
  if(String(key)==='41'&&/push nog niet/i.test(state.prompts['41']?.fields?.publish||''))return 'Een voorbereide lokale commit en een duidelijke vervolgstap. Er wordt nog niets naar GitHub gestuurd of gepubliceerd.';
  return getPrompt(key)?.result||'';
}
export function missingInput(key,state=draftStore.state){
  const p=getPrompt(key);if(!p)return [];
  const missing=[];
  if(p.config.needsGoal&&!state.project.goal.trim())missing.push({id:'project-goal',label:'Wat wil je maken en mogelijk maken?'});
  for(const f of p.config.fields)if(f.required&&!state.prompts[p.key]?.fields?.[f.key]?.trim())missing.push({id:`input-${p.key}-${f.key}`,label:f.label});
  return missing;
}
function storageMessage(){return draftStore.persistent?'Je invoer wordt tijdelijk in dit tabblad bewaard, ook na vernieuwen. Gebruik Invoer wissen als je klaar bent.':'Je invoer blijft tijdens het wisselen van stappen bewaard. Bewaren voor vernieuwen is niet beschikbaar; bij opnieuw laden vervalt je invoer.';}
export function projectMarkup(){return `<details class="project-brief" id="project-brief" ${draftStore.state.project.goal?'':'open'}><summary><span><span class="eyebrow">Eenmaal invullen · voor alle stappen</span><strong id="project-summary">${esc(draftStore.state.project.name||'Jouw project')}</strong></span><span class="project-edit">Invullen / wijzigen</span></summary><div class="project-brief-content"><p>Vertel kort wat je wilt maken. We nemen deze informatie automatisch mee in elke opdracht. Bij een gerichte bouwopdracht kun je dit overslaan.</p><div class="project-fields">${projectFields.map(f=>`<div class="draft-field ${f.key==='goal'?'wide':''}"><label for="project-${f.key}">${f.label}${f.key!=='goal'?' <span>optioneel</span>':''}</label>${f.key==='goal'?`<textarea id="project-${f.key}" data-project="${f.key}" rows="3" maxlength="${f.max}" placeholder="${esc(f.placeholder)}" aria-describedby="project-${f.key}-error">${esc(draftStore.state.project[f.key])}</textarea>`:`<input id="project-${f.key}" data-project="${f.key}" maxlength="${f.max}" placeholder="${esc(f.placeholder)}" value="${esc(draftStore.state.project[f.key])}" aria-describedby="project-${f.key}-error">`}<small class="field-error" id="project-${f.key}-error" hidden></small></div>`).join('')}</div><div class="draft-storage"><p><span id="draft-storage-message">${storageMessage()}</span> Dit is geen opslag van je projectbestanden. Bewaar AI-antwoorden zelf in je projectmap. Deze site verstuurt je invoer niet. Voeg hier geen wachtwoorden of geheime sleutels toe.</p><button class="text-link clear-draft" data-draft-clear>Invoer wissen</button></div><div id="draft-clear-confirm" class="draft-clear-confirm" hidden>Wil je alle project- en opdrachtinvoer in dit tabblad wissen? <button data-draft-confirm>Ja, wis mijn invoer</button><button data-draft-cancel>Behouden</button></div></div></details>`;}
const getFieldValue=(key,f)=>draftStore.state.prompts[key]?.fields?.[f]||'';
function fieldMarkup(key,f){
  const id=`input-${key}-${f.key}`,value=getFieldValue(key,f.key);
  const control=key==='41'&&f.key==='publish'?`<select id="${id}" data-prompt-field="${key}" data-field="${f.key}" aria-required="true" aria-describedby="${id}-help ${id}-error">${commandOptions.map(([v,l])=>`<option value="${esc(v)}" ${v===value?'selected':''}>${l}</option>`).join('')}</select>`:`<textarea id="${id}" data-prompt-field="${key}" data-field="${f.key}" rows="${f.key==='screens'||f.key==='brief'?4:2}" maxlength="8000" placeholder="${esc(f.placeholder)}" aria-required="${f.required}" aria-describedby="${id}-help ${id}-error">${esc(value)}</textarea>`;
  return `<div class="draft-field"><label for="${id}">${esc(f.label)} <span>${f.required?'nodig voor deze opdracht':'optioneel'}</span></label>${control}<small id="${id}-help">${esc(f.hint||'Gebruik je eigen informatie; de voorbeeldtekst wordt niet gekopieerd.')}</small><small class="field-error" id="${id}-error" hidden></small></div>`;
}
export function promptMarkup(key,open=false){
  const p=getPrompt(key),c=p.config,selected=draftStore.state.prompts[p.key]?.tool||c.tools[0],missing=missingInput(key);
  const copyId=p.key.startsWith('s')?`data-seo-copy="${p.key.slice(1)}"`:`data-copy="${p.key}"`;
  return `<details class="prompt-card composer-card" ${open?'open':''} id="opdracht-${p.key}"><summary><span class="prompt-id">${p.key.startsWith('s')?'SEO':String(p.id).padStart(2,'0')}</span><span class="composer-title"><span class="generator-label">Promptgenerator</span>${esc(p.title)}<small>${esc(c.when||'Gebruik de uitkomst van de vorige stap en voeg je eigen informatie toe.')}</small></span></summary><div class="prompt-content"><div class="composer-tool"><div><span class="eyebrow">1 · Kies je AI-tool</span><div class="tool-choice" role="group" aria-label="AI-tool voor ${esc(p.title)}">${c.tools.length>1?c.tools.map(t=>`<button data-prompt-tool="${p.key}" data-tool="${t}" aria-pressed="${selected===t}">${toolLogo(t)}${esc(tools[t].name)}</button>`).join(''):`<strong class="chosen-tool">${toolLogo(selected)}${tools[selected].name}</strong>`}</div></div><a data-tool-open="${p.key}" href="${tools[selected].url}" target="_blank" rel="noopener noreferrer">Open ${tools[selected].name} ↗</a></div><div class="composer-input"><span class="eyebrow">2 · Vul in · je prompt wordt automatisch gemaakt</span>${c.needsGoal?'<p class="project-reminder">Je projectidee bovenaan gaat automatisch mee.</p>':''}${c.fields.map(f=>fieldMarkup(p.key,f)).join('')}</div><div class="composer-result"><span class="eyebrow">Dit wil je terugkrijgen</span><p data-prompt-result="${p.key}">${esc(expectedResult(p.key))}</p></div><div class="composer-copy"><div><span class="eyebrow">3 · Kopieer je prompt</span><button class="copy-btn" data-composer-copy="${p.key}" ${copyId}>Kopieer prompt</button><small data-ready="${p.key}" ${missing.length?'':'class="ready"'}>${missing.length?`Vul nog ${missing.length} ${missing.length===1?'veld':'velden'} in.`:'Je prompt is klaar om te kopiëren, inclusief jouw input.'}</small></div><p><strong>4 · Plak in je AI-tool</strong><br>Plak je gekopieerde prompt in <span data-tool-name="${p.key}">${tools[selected].name}</span>. Voeg daar zelf je bestanden toe en verstuur hem.</p></div><details class="prompt-preview"><summary>Bekijk je gegenereerde prompt</summary><textarea class="prompt-text" data-preview="${p.key}" id="prompt-text-${p.key}" rows="10" readonly spellcheck="false" aria-label="Gegenereerde prompt: ${esc(p.title)}">${esc(composePrompt(p.key))}</textarea><p>Deze prompt wordt automatisch bijgewerkt terwijl je typt. De werkwijze, je projectcontext en je ingevulde antwoorden worden samen gekopieerd. Deze site voert de opdracht niet uit; dat doe je in je AI-tool.</p></details><p class="composer-home"><a href="${p.href}">${p.home} ↗</a></p></div></details>`;
}
export function lessonPromptMarkup(id){
  const s=stepPrompts[id];
  return `<h2 class="panel-heading">Promptgenerator voor deze stap</h2><p class="prompt-intro">Een prompt is de opdracht die je aan AI geeft. Deze generator maakt hem voor je: vul je project en stapinformatie in, klik op Kopieer prompt en plak de tekst direct in de aangegeven AI-tool. Je hoeft zelf geen prompt te schrijven.</p>${id===1?'<p class="method-note">Nog geen projectmap? Volg eerst <a href="#stap/1/uitleg">de mapinstructie bij Uitleg</a>. Kom daarna terug om je projectbrief te maken.</p>':''}${projectMarkup()}${s.main.map((key,i)=>promptMarkup(key,i===0)).join('')}${s.extra.length?`<details class="extra-prompts"><summary>Ook handig in deze stap <span>${s.extra.length} gerichte ${s.extra.length===1?'opdracht':'opdrachten'}</span></summary><p>Kies alleen wat je nu nodig hebt. Deze opdrachten zijn geen verplichte extra stappen.</p>${s.extra.map(key=>promptMarkup(key)).join('')}</details>`:''}`;
}
export function refreshPreviews(){
  document.querySelectorAll('[data-preview]').forEach(el=>{el.value=composePrompt(el.dataset.preview);});
  document.querySelectorAll('[data-ready]').forEach(el=>{const count=missingInput(el.dataset.ready).length;el.textContent=count?`Vul nog ${count} ${count===1?'veld':'velden'} in.`:'Je prompt is klaar om te kopiëren, inclusief jouw input.';el.classList.toggle('ready',!count);});
  document.querySelectorAll('[data-prompt-result]').forEach(el=>{el.textContent=expectedResult(el.dataset.promptResult);});
  const summary=document.querySelector('#project-summary');if(summary)summary.textContent=draftStore.state.project.name||'Jouw project';
  const message=document.querySelector('#draft-storage-message');if(message)message.textContent=storageMessage();
}
export function handleDraftInput(event){
  const el=event.target;
  if(el.dataset?.project)draftStore.project(el.dataset.project,el.value);
  else if(el.dataset?.promptField)draftStore.field(el.dataset.promptField,el.dataset.field,el.value);
  else return false;
  el.removeAttribute('aria-invalid');const error=document.querySelector(`#${el.id}-error`);if(error){error.hidden=true;error.textContent='';}
  refreshPreviews();return true;
}
export async function handlePromptClick(event,notify,rerender){
  if(event.target.closest('[data-project-setup-copy]')){
    try{if(!navigator.clipboard?.writeText)throw Error('Unavailable');await navigator.clipboard.writeText(projectSetupPrompt);notify('Startopdracht gekopieerd. Plak hem in Antigravity met je projectmap geopend.');}
    catch{const field=document.querySelector('#project-setup-prompt');if(field){field.focus();field.select();}notify('Kopiëren is geblokkeerd. Selecteer en kopieer de startopdracht hieronder zelf.');}
    return true;
  }
  const jump=event.target.closest('[data-generator-jump]');
  if(jump){
    const card=document.getElementById(`opdracht-${jump.dataset.generatorJump}`);
    if(card){card.open=true;const heading=document.getElementById('seo-generator-title');if(heading){heading.scrollIntoView({block:'start'});heading.focus({preventScroll:true});}}
    return true;
  }
  const tool=event.target.closest('[data-prompt-tool]');
  if(tool){
    const key=tool.dataset.promptTool;draftStore.tool(key,tool.dataset.tool);
    const selected=draftStore.state.prompts[key].tool;
    document.querySelectorAll(`[data-prompt-tool="${key}"]`).forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.tool===selected)));
    const link=document.querySelector(`[data-tool-open="${key}"]`);if(link){link.href=tools[selected].url;link.textContent=`Open ${tools[selected].name} ↗`;}
    document.querySelectorAll(`[data-tool-name="${key}"]`).forEach(el=>{el.textContent=tools[selected].name;});refreshPreviews();return true;
  }
  if(event.target.closest('[data-draft-clear]')){document.querySelector('#draft-clear-confirm').hidden=false;document.querySelector('[data-draft-confirm]')?.focus();return true;}
  if(event.target.closest('[data-draft-cancel]')){document.querySelector('#draft-clear-confirm').hidden=true;document.querySelector('[data-draft-clear]')?.focus();return true;}
  if(event.target.closest('[data-draft-confirm]')){draftStore.clear();rerender();notify('Je ingevulde project- en opdrachtgegevens zijn gewist.');return true;}
  const copy=event.target.closest('[data-composer-copy]');if(!copy)return false;
  const key=copy.dataset.composerCopy,missing=missingInput(key);
  if(missing.length){
    for(const field of missing){const el=document.querySelector(`#${field.id}`);if(!el)continue;el.setAttribute('aria-invalid','true');const error=document.querySelector(`#${field.id}-error`);if(error){error.textContent='Vul dit veld in om de opdracht compleet te maken.';error.hidden=false;}}
    const first=document.querySelector(`#${missing[0].id}`);const parent=first?.closest('details');if(parent)parent.open=true;first?.focus();
    notify(`Vul eerst in: ${missing[0].label}`);return true;
  }
  const text=composePrompt(key);
  try{if(!navigator.clipboard?.writeText)throw new Error('Unavailable');await navigator.clipboard.writeText(text);notify('Je prompt is gekopieerd, inclusief je eigen input. Plak hem in de gekozen AI-tool en verstuur hem daar.');}
  catch{const field=document.querySelector(`#prompt-text-${key}`);if(field){field.value=text;const preview=field.closest('details');if(preview)preview.open=true;field.focus();field.select();}notify('Kopiëren is geblokkeerd. De volledige tekst is geselecteerd; kopieer deze zelf.');}
  return true;
}
