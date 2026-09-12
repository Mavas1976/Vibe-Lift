import fs from 'node:fs';
import {tools} from '../dist/tools.js';
import {stepPrompts} from '../dist/prompt-config.js';
import {projectSetupPrompt} from '../dist/project-guide.js';
import {allPromptKeys,getPrompt,templatePrompt} from '../dist/prompt-workbench.js';
const output=['# Vibe Lift — jouw opdrachten per stap','','Prompteditie 2.0 · Startopdracht, 42 opdrachten in de bouwroute en 5 bij SEO.','','Vul de invulplaatsen in of gebruik de Promptgenerator op de website. Plak de volledige prompt in de aangegeven AI-tool en voeg de benodigde bronnen daar toe. Elke opdracht levert één volledig .md-document dat je direct in de projectroot zet, naast START-HIER.md. Ontwerpassets en testbijlagen mogen in hun eigen submappen. Deze download bevat geen persoonlijke invoer.','','## Eerst: je projectmap inrichten','','Open je lokale projectmap in Antigravity en plak deze startopdracht.','','``````text',projectSetupPrompt,'``````',''];
const orderedKeys=[...Object.values(stepPrompts).flatMap(s=>[...s.main,...s.extra]).map(String),...allPromptKeys.filter(k=>k.startsWith('s'))];
for(const key of orderedKeys){
  const p=getPrompt(key);
  output.push(`## ${p.home} · ${p.title}`,'',`**Gebruik in:** ${p.config.tools.map(t=>`[${tools[t].name}](${tools[t].url})`).join(' of ')}`,'',...(p.config.when?[p.config.when,'']:[]),...(key==='41'?['Deze algemene prompt blijft bij een lokale commit. Gebruik de generator en kies de publicatieafspraak om een prompt met toegestane push te maken.','']:[]),'``````text',templatePrompt(key),'``````','');
}
fs.writeFileSync(new URL('../dist/downloads/opdrachten.md',import.meta.url),output.join('\n'));
console.log('47 complete prompts synchronized from the shared composer.');
