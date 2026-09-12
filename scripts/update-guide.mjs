import fs from 'node:fs';
import {tools,lessonTools,repositoryGuide} from '../dist/tools.js';
import {lessons} from '../dist/content.js';
import {seoLessons,seoInBuild} from '../dist/seo.js';
import {prompts} from '../dist/prompts.js';
import {stepPrompts} from '../dist/prompt-config.js';
import {projectSetup,projectFolders,projectSetupPrompt} from '../dist/project-guide.js';
import {templatePrompt,expectedResult} from '../dist/prompt-workbench.js';

const lines=['# Vibe Lift — Digitale gewichtloosheid','','**Bouw zo ver als je kan denken.**','','Lezerseditie 2.0 · 12 september 2026','','Digitale gewichtloosheid is de vrijheid om te bouwen wat je bedenkt. Hier begin je met één website. Gebruik ChatGPT of Claude voor je idee en teksten, Stitch voor het ontwerp en Antigravity voor het bouwen. Jij controleert het resultaat.','','## Zo gebruik je de route','','Begin met je projectmap en volg de veertien stappen. Lees de uitleg, bekijk zo nodig het fictieve voorbeeld van Studio Maan en gebruik de Promptgenerator op de site. Vul je gegevens in, klik op Kopieer prompt en plak de tekst in de aangegeven AI-tool. Voeg daar je bestanden toe. Controleer het antwoord en bewaar het voordat je doorgaat.','','ChatGPT en Claude zijn alternatieven: kies er één per taak. Je hoeft niet alle extra opdrachten of tools te gebruiken. Een prompt is de opdracht die je aan AI geeft. De site voert die niet zelf uit en bewaart geen projectbestanden. Invoer in de generator is tijdelijk.','','SEO-les 1 hoort bij je teksten en SEO-les 2 bij het bouwplan. Gebruik de overige SEO-lessen na publicatie, voor een openbare website. Analytics is optioneel.','','## Begin altijd met je projectmap',''];
const actions=items=>items.forEach(([title,text],i)=>lines.push(`${i+1}. **${title}.** ${text}`,''));
const bullets=items=>items.forEach(text=>lines.push(`- ${text}`));
actions(projectSetup);
lines.push('### Mapindeling','');bullets(projectFolders.map(([name,use])=>`**${name}** — ${use}`));
lines.push('','Een .md-bestand is een tekstbestand met eenvoudige opmaak (Markdown). Geen downloadknop in de AI-tool? Kopieer het antwoord naar Kladblok. Kies bij Opslaan als: Alle bestanden en gebruik de volledige naam, bijvoorbeeld projectbrief.md. Controleer dat er niet .txt achter staat.','','Bewaar oorspronkelijke AI-output met datum, tool en versie in 01-bronnen. Bewaar de nagekeken Markdown-versie direct in de projectroot en wijs die aan in START-HIER.md. Maak een back-up van de hele projectmap. Een project in ChatGPT of Claude is geen map op je computer.','','### Startopdracht voor Antigravity','','Open eerst je projectmap in Antigravity. Kopieer deze opdracht en plak hem daar.','','```text',projectSetupPrompt,'```','','[Antigravity: projecten en lokale mappen](https://antigravity.google/docs/projects/)');
for(const l of lessons){
  const guide=lessonTools[l.id];
  lines.push('',`## Stap ${l.id}: ${l.title}`,'',l.intro,'',`**Begin met:** ${l.input}`,'',`**Doel:** ${l.goal}`,'',`**Tools:** ${guide.intro}`,'');
  bullets(guide.items.map(([k,use])=>`[${tools[k].name}](${tools[k].url}): ${use}`));
  lines.push('','### Wat je doet','');actions(l.actions);
  if(seoInBuild[l.id])lines.push(`**Vindbaarheid:** ${seoInBuild[l.id]}`,'');
  lines.push(`**Bewaar:** ${l.output}`,'',guide.handoff,'','### Voorbeeld: Studio Maan (fictief)','',l.example.title,'',l.example.text,'');
  bullets(l.example.items.map(([title,text])=>`**${title}:** ${text}`));
  lines.push('','### Controleer voordat je verdergaat','');bullets(l.checks);
  lines.push('',`**Valkuil:** ${l.pitfall}`,'',`**Begrip — ${l.term[0]}:** ${l.term[1]}`,'');
  lines.push('**AI-opdrachten:** '+[...stepPrompts[l.id].main,...stepPrompts[l.id].extra].map(id=>`${String(id).padStart(2,'0')} (${stepPrompts[l.id].main.includes(id)?'hoofdopdracht':'alleen als nodig'})`).join(', ')+'. Zie de opdrachten achter in dit handboek.','');
}
lines.push('## Gereedschappen','');
for(const t of Object.values(tools))lines.push(`### ${t.name}`,'',t.description,'',`[Open ${t.name}](${t.url}) · [Officiële uitleg](${t.docs})`,'');
lines.push('## Antigravity koppelen aan GitHub','');actions(repositoryGuide);
lines.push('## Railway instellen','','1. Open Railway, meld je aan en kies New Project → Deploy from GitHub repo. Verleen toegang tot de bedoelde repository.','','2. Kies repository en branch. Laat Antigravity de projectmap en benodigde bouw- en startinstellingen controleren. Neem de echte projectinstellingen over.','','3. Zet geheime waarden bij Variables. Controleer kosten, toegang en wanneer Railway automatisch publiceert.','','4. Wacht op een geslaagde publicatie. Ga bij de dienst naar Settings → Networking en maak een adres of koppel je eigen domein. Gebruik alleen de DNS-waarden die Railway toont.','','5. Open het echte adres, test de belangrijkste route en zoek het resultaat op. Bewaar de versie en uitleg voor terugzetten in release.md in de projectroot. Een codeversie terugzetten herstelt niet vanzelf de database.','','[Railway: publiceren vanuit GitHub](https://docs.railway.com/guides/vibe-coding-deploy)','','## SEO-cursus','');
for(const l of seoLessons){
  lines.push(`### SEO-les ${l.id}: ${l.title}`,'',l.intro,'',`**Begin met:** ${l.input}`,'',`**Tools:** ${l.tools.map(k=>`[${tools[k].name}](${tools[k].url})`).join(', ')}`,'');actions(l.actions);
  lines.push(`**${l.settingsTitle}**`,'');bullets(l.settings.map(([a,b])=>`${a}: ${b}`));
  lines.push('',l.example,'',`**Bewaar:** ${l.output}`,'','**Controle:**','');bullets(l.checks);
  lines.push('','**Opdracht voor deze les:**','','``````text',templatePrompt(`s${l.id}`),'``````','','**Officiële uitleg:**','');bullets(l.sources.map(([title,url])=>`[${title}](${url})`));lines.push('');
}
lines.push('## Algemene AI-opdrachten','','Dit zijn dezelfde volledige prompts als in de Promptgenerator, met invulplaatsen voor je eigen informatie. Iedere opdracht levert één Markdown-document voor de projectroot. Voeg genoemde bestanden ook echt toe in de AI-tool of open je projectmap in Antigravity. Bij opdracht 41 is nog geen push toegestaan zolang je de publicatieafspraak niet in de generator hebt gekozen.','');
for(const p of prompts)lines.push(`### Opdracht ${String(p.id).padStart(2,'0')} — ${p.title}`,'','``````text',templatePrompt(p.id),'``````','',`**Resultaat:** ${expectedResult(p.id)}`,'');
lines.push('Menu’s en mogelijkheden kunnen per account, taal en versie verschillen. Volg de getoonde instellingen en gebruik de officiële uitleg bij de les. De voorbeelden van Studio Maan zijn fictief.','');
fs.writeFileSync(new URL('../dist/downloads/handboek.md',import.meta.url),lines.join('\n'));
console.log('Handbook regenerated from current lessons, tools, project guide, SEO and prompts.');
await import('./sync-prompts.mjs');
