import fs from 'node:fs';
import {tools} from '../dist/tools.js';
import {stepPrompts} from '../dist/prompt-config.js';
import {projectSetupPrompt} from '../dist/project-guide.js';
import {allPromptKeys,getPrompt,templatePrompt} from '../dist/prompt-workbench.js';
import {promptContractVersion} from '../dist/prompt-contracts.js';
const output=['# Vibe Lift — jouw opdrachten per stap','',`Prompteditie ${promptContractVersion} · Startopdracht, 42 opdrachten in de bouwroute en 5 bij SEO.`,'','Vul de invulplaatsen in of gebruik de Promptgenerator op de website. Plak de volledige prompt in de aangegeven AI-tool en voeg de benodigde bronnen daar toe. Elke opdracht levert één primair .md-verslag dat je direct in de projectroot zet, naast START-HIER.md. De prompt noemt welke andere documenten, code of assets de taak daarnaast mag aanpassen. Deze download bevat geen persoonlijke invoer.','','## Eerst: je projectmap inrichten','','Open je lokale projectmap in Antigravity en plak deze startopdracht.','','``````text',projectSetupPrompt,'``````',''];
const orderedKeys=[...Object.values(stepPrompts).flatMap(s=>[...s.main,...s.extra]).map(String),...allPromptKeys.filter(k=>k.startsWith('s'))];
for(const key of orderedKeys){
  const p=getPrompt(key);
  output.push(`## ${p.home} · ${p.title}${key==='41'?' — download: alleen lokaal bewaren':''}`,'',`**Gebruik in:** ${p.config.tools.map(t=>`[${tools[t].name}](${tools[t].url})`).join(' of ')}`,'',...(p.config.when&&key!=='41'?[p.config.when,'']:[]),...(key==='41'?['Deze downloadprompt bewaart alleen lokaal. Gebruik generator 41 op de website en kies de publicatieafspraak om een prompt met toegestane push te maken.','']:[]),'``````text',templatePrompt(key),'``````','');
}
fs.writeFileSync(new URL('../dist/downloads/opdrachten.md',import.meta.url),output.join('\n'));
console.log('47 complete prompts synchronized from the shared composer.');
