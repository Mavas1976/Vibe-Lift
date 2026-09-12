import fs from 'node:fs';
import {prompts} from '../dist/prompts.js';
import {tools} from '../dist/tools.js';
import {stepPrompts} from '../dist/prompt-config.js';
import {allPromptKeys,getPrompt,composePrompt,normalizeDraft,projectFields} from '../dist/prompt-workbench.js';

const file=new URL('../dist/downloads/handboek.md',import.meta.url);
let handbook=fs.readFileSync(file,'utf8');
for(const p of prompts.filter(p=>p.id<=28)){
  const n=String(p.id).padStart(2,'0');
  const re=new RegExp('((?:\\*\\*|### )Opdracht '+n+' [^\\n]+\\n[\\s\\S]*?```text\\n)[\\s\\S]*?(\\n```)');
  if(!re.test(handbook))throw new Error(`Missing original section ${n}`);
  handbook=handbook.replace(re,(_all,before,after)=>before+p.text+after);
}
handbook=handbook.replace(/((?:\*\*|### )Opdracht 07 [—–-] )[^\n]+/g,'$1Ontwerp je schermen in Stitch**');
const marker='\n<!-- VIBE_LIFT_PERSONAL_PROMPTS -->';
handbook=handbook.split(marker)[0].trimEnd();
handbook+=marker+'\n\n# Je eigen AI-opdracht maken · editie 1.3\n\nDe website heeft 42 opdrachten bij de veertien stappen en vijf opdrachten bij de SEO-cursus. Vul je projectcontext en de benodigde stapinput in. De knop kopieert de volledige opdracht met jouw invoer. Kies de juiste AI-tool en voeg bestanden daar zelf toe. Instellingen blijven gewone instructies.\n\nJe invoer blijft alleen in hetzelfde tabblad en kan worden gewist. Bij geweigerde tabbladopslag blijft het geheugen bruikbaar zolang de pagina open is.\n\n[Alle actuele algemene opdrachten, toolkeuze en invulvelden](opdrachten.md).\n\n';
for(const [step,group] of Object.entries(stepPrompts))handbook+=`- Stap ${step}: ${[...group.main,...group.extra].map(id=>String(id).padStart(2,'0')).join(', ')}.\n`;
fs.writeFileSync(file,handbook);
const output=['# Vibe Lift — jouw opdrachten per stap','','Editie 1.3 · 42 opdrachten in de bouwroute en 5 bij SEO.','',
'Vul de blokken tussen vierkante haken in voordat je een opdracht gebruikt. De website doet dit voor je via de invulvelden. Voeg genoemde documenten zelf toe in de gekozen AI-tool. Voorbeelden zijn geen projectgegevens. Deze download bevat geen persoonlijke invoer.',''];
const orderedKeys=[...Object.values(stepPrompts).flatMap(s=>[...s.main,...s.extra]).map(String),...allPromptKeys.filter(k=>k.startsWith('s'))];
for(const key of orderedKeys){
  const p=getPrompt(key),state=normalizeDraft(null);
  for(const f of projectFields)state.project[f.key]=`[${f.label}]`;
  state.prompts[key]={tool:p.config.tools[0],fields:Object.fromEntries(p.config.fields.map(f=>[f.key,`[${f.label}${f.required?'':' — mag leeg blijven'}]`]))};
  output.push(`## ${p.home} · ${p.title}`,'',`**Gebruik in:** ${p.config.tools.map(t=>`[${tools[t].name}](${tools[t].url})`).join(' of ')}`,'',
  ...(p.config.when?[p.config.when,'']:[]),...(key==='41'?['Kies bij automatische publicatie: deze branch publiceert niet automatisch; publicatie is vrijgegeven; alleen lokaal bewaren en nog niet pushen; of eerst de publicatiegevolgen controleren en nog niet pushen.','']:[]),'```text',composePrompt(key,state),'```','');
}
fs.writeFileSync(new URL('../dist/downloads/opdrachten.md',import.meta.url),output.join('\n'));
console.log('42 step prompts and 5 SEO prompts synchronized to the handbook and download.');
