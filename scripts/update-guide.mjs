import fs from 'node:fs';
import {tools,lessonTools,repositoryGuide} from '../dist/tools.js';
import {lessons} from '../dist/content.js';
import {seoLessons,seoInBuild} from '../dist/seo.js';

const file=new URL('../dist/downloads/handboek.md',import.meta.url);
const boundary='\n<!-- VIBE_LIFT_COURSE_SUPPLEMENT -->';
let original=fs.readFileSync(file,'utf8').split(boundary)[0].trimEnd();
const toolTable=['| Gereedschap | Waarvoor open je het? | Directe link |','|---|---|---|',...Object.values(tools).map(t=>`| ${t.name} | ${t.description} | [Open ${t.name}](${t.url}) · [Officiële uitleg](${t.docs}) |`)].join('\n');
original=original.replace(/\| Gereedschap \| Waarvoor open je het\? \| Directe link \|[\s\S]*?(?=\r?\n\r?\n)/,toolTable);
const lines=[boundary,'','# Vibe Lift · Tools en SEO','',
  'Deze aanvulling hoort bij lezerseditie 1.2. Gebruik Antigravity met toegang tot je GitHub-repository; de agent voert de technische versiehandelingen uit. Jij controleert de wijziging, de online versie en de vrijgave.','',
  '## Tools bij iedere stap',''];
for(const lesson of lessons){
  const guide=lessonTools[lesson.id];
  lines.push(`### Stap ${lesson.id} · ${lesson.title}`,'',guide.intro,'');
  for(const [key,use] of guide.items)lines.push(`- [${tools[key].name}](${tools[key].url}): ${use}`);
  lines.push('',`**Neem mee:** ${guide.handoff}`,'');
  if(seoInBuild[lesson.id])lines.push(`**SEO in deze stap:** ${seoInBuild[lesson.id]}`,'');
}
lines.push('## Antigravity, GitHub en Railway','');
repositoryGuide.forEach(([title,text],i)=>lines.push(`${i+1}. **${title}.** ${text}`));
lines.push('','[Antigravity: versiebeheer](https://antigravity.google/docs/features) · [Railway: publiceren](https://docs.railway.com/guides/vibe-coding-deploy)','','## Korte SEO-cursus','',
  'Voor je eigen openbare website. Deze besloten leeromgeving wordt hierdoor niet openbaar of gekoppeld aan Analytics. De voorbeelden zijn fictief; vervang .example-adressen, meet-ID’s en invulvelden door je eigen gegevens.','');
for(const lesson of seoLessons){
  lines.push(`### SEO-les ${lesson.id} · ${lesson.title}`,'',lesson.intro,'',`**Tools:** ${lesson.tools.map(key=>`[${tools[key].name}](${tools[key].url})`).join(' · ')}`,'',`**Begin met:** ${lesson.input}`,'');
  lesson.actions.forEach(([title,text],i)=>lines.push(`${i+1}. **${title}.** ${text}`));
  lines.push('',`**${lesson.settingsTitle}**`,'');
  lesson.settings.forEach(([name,value])=>lines.push(`- ${name}: ${value}`));
  lines.push('',lesson.example,'',`**Samenhang:** ${lesson.flow.join(' → ')}`,'',`**Neem mee:** ${lesson.output}`,'',`**SEO-opdracht ${lesson.id}**`,'','```text',lesson.prompt,'```','','**Controle**','');
  lesson.checks.forEach(check=>lines.push(`- ${check}`));
  lines.push('','**Officiële uitleg**','');
  lesson.sources.forEach(([title,url])=>lines.push(`- [${title}](${url})`));
  lines.push('');
}
lines.push('Documentatie geraadpleegd op 12 september 2026. Schermnamen en beschikbare functies kunnen per account, taal en versie verschillen.','');
fs.writeFileSync(file,original+'\n'+lines.join('\n'));
console.log('Tool guidance for 14 steps and 5 SEO lessons synchronized into reader edition.');
