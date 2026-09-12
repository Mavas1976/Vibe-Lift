import {methodMarkup} from './method.js';
import {phases, lessons} from './content.js';
import {prompts} from './prompts.js';
import {stepPrompts} from './prompt-config.js';
import {escapeHTML, projectMarkup, promptMarkup, lessonPromptMarkup, handleDraftInput, handleDraftToggle, handlePromptClick} from './prompt-workbench.js';
export {escapeHTML};
import {tools, lessonTools, repositoryGuide} from './tools.js';
import {seoLessons, seoInBuild} from './seo.js';
import {startAirField} from './air.js';
import {toolLogo} from './tool-branding.js';
import {projectSetup,projectFolders,projectSetupPrompt} from './project-guide.js';

const main = document.querySelector('#main');
const colors = {peach:'#f9dfd5',lavender:'#e9e9e5',blue:'#efefeb',mint:'#e9eddf'};
const paths = {
  arrow:'M5 12h14m-6-6 6 6-6 6', back:'M19 12H5m6-6-6 6 6 6',
  spark:'m12 3 2.8 6.2L21 12l-6.2 2.8L12 21l-2.8-6.2L3 12l6.2-2.8Z',
  layers:'m3 8 9-5 9 5-9 5Zm0 5 9 5 9-5M3 18l9 5 9-5',
  box:'m4 7 8-4 8 4v10l-8 4-8-4Zm0 0 8 5 8-5M12 12v9',
  check:'m5 12 4 4L19 6', list:'M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01',
  map:'M6 7h12M6 7v10h12M18 7v10M3 4h6v6H3Zm12 10h6v6h-6Z',
  book:'M12 5v15M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-4-1-7-2-10 1Z',
  play:'m8 5 11 7-11 7Z', code:'m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16',
  copy:'M9 9h11v12H9ZM5 16H3V3h12v2', info:'M12 10v7m0-11v.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
  folder:'M3 7V4h6l2 3h10v13H3Z',flag:'M5 21V3m0 1h13l-3 4 3 4H5',
  globe:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M3 12h18M12 3c5 6 5 12 0 18-5-6-5-12 0-18',
  external:'M14 3h7v7m0-7L10 14M10 4H3v17h17v-7',clock:'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0'
};
const icon = (name) => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name] || paths.arrow}"/></svg>`;
const esc = escapeHTML;
const num = n => String(n).padStart(2,'0');
const nextArrow = '<span class="arrow-circle" aria-hidden="true">↗</span>';
const tabs = [{id:'uitleg',label:'Uitleg',icon:'book'},{id:'voorbeeld',label:'Voorbeeld',icon:'play'},{id:'opdracht',label:'Promptgenerator',icon:'code'},{id:'controle',label:'Controle',icon:'check'}];
let routeView = 'map';
let previousRoute = null;
let noticeTimer;

export function parseRoute(hash) {
  if (!hash || hash === '#' || hash === '#route' || hash === '#main') return {page:'route'};
  const lesson = /^#stap\/([1-9]|1[0-4])(?:\/(uitleg|voorbeeld|opdracht|controle))?$/.exec(hash);
  if(lesson) return {page:'lesson',id:Number(lesson[1]),tab:lesson[2] || 'uitleg'};
  const seo = /^#seo(?:\/([1-5]))?$/.exec(hash);
  if(seo) return {page:'seo',id:Number(seo[1] || 1)};
  const page = /^#(voorbeeld|tools|werkwijze|opdrachten)$/.exec(hash);
  return page ? {page:page[1]} : {page:'missing'};
}

function phaseStyle(phaseId) {return `--phase-color:${colors[phases[phaseId].color]}`;}
function stepCard(lesson) {return `<a class="step-card ${lesson.id===1?'first':''}" href="#stap/${lesson.id}"><span class="step-number">${num(lesson.id)}</span><span class="step-card-text"><strong>${esc(lesson.short)}</strong><small>${esc(lesson.output.split(' + ')[0])}</small><span class="generator-badge">${icon('copy')} Promptgenerator inbegrepen</span></span><span class="card-arrow" aria-hidden="true">↗</span></a>`;}
function routeMarkup() {
  if(routeView === 'list') return `<div class="route-list">${lessons.map(stepCard).join('')}</div>`;
  return `<div class="route-map" aria-label="Veertien stappen in vijf fasen">${phases.map((phase)=>`<section class="phase" style="${phaseStyle(phase.id)}"><div class="phase-heading"><div class="phase-symbol">${icon(phase.symbol)}</div><div class="phase-heading-label"><span>Fase ${num(phase.id+1)}</span><h3>${phase.name}</h3></div></div><div class="phase-list">${lessons.filter(l=>l.phase===phase.id).map(stepCard).join('')}</div><p class="phase-caption">${phase.caption}</p></section>`).join('')}</div>`;
}
function renderHome() {
  return `<section class="hero"><div class="wrap"><div class="hero-copy"><span class="pill">AI CODING · VIBE CODING</span><h1>Digitale gewichtloosheid.<br><span>Bouw zo ver als je kan denken.</span></h1><p>Met AI kun je je ideeën uitwerken tot websites, apps en digitale tools. Begin hier met één website en één projectmap voor al je bestanden. Elke stap vertelt wat je doet, welke tool je gebruikt en wat je bewaart. De promptgenerator maakt de AI-opdracht voor je.</p><div class="button-row"><a class="btn primary" href="#stap/1">Begin met je projectmap ${nextArrow}</a><a class="text-link" href="#voorbeeld">Bekijk het voorbeeld ${icon('arrow')}</a></div><p class="hero-meta"><span>${icon('check')}Geen voorkennis nodig</span><span>${icon('map')}14 stappen + SEO-cursus</span></p></div><figure class="build-visual"><img src="assets/idea-to-live.svg" alt="Van idee via ontwerp naar live: drie oplopende bouwstappen" width="640" height="560" fetchpriority="high"><figcaption><span>JIJ HET IDEE.</span><span>AI HET GEREEDSCHAP.</span></figcaption></figure></div></section>
  <section class="route-section" id="route-overview"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Het pad van idee naar live</div><h2>Volg de stappen van begin tot eind.</h2><p>Nieuw project? Begin bij stap 1 met je projectmap. Heb je al werk? Controleer eerst je map en kies daarna de stap waar je verdergaat.</p></div><div class="segmented" role="group" aria-label="Weergave van de stappen"><button data-view="map" aria-pressed="${routeView==='map'}">${icon('map')}Routekaart</button><button data-view="list" aria-pressed="${routeView==='list'}">${icon('list')}Lijst</button></div></div><div id="route-content">${routeMarkup()}</div>${seoBanner()}<div class="route-foot"><p>${icon('info')}Elke stap bevat uitleg, een voorbeeld, een promptgenerator en een controle.</p><a class="text-link" href="#werkwijze">Ontdek de Vibe Lift-werkwijze ${icon('arrow')}</a></div></div></section>
  <section class="start-strip" aria-label="Hulp bij het beginnen"><article class="mini-feature"><span class="feature-symbol">${icon('layers')}</span><div><h3>Eén voorbeeld. De hele reis.</h3><p>Volg Studio Maan van een losse gedachte naar een website voor workshopaanvragen.</p><a class="text-link" href="#voorbeeld">Maak kennis met Studio Maan ${icon('arrow')}</a></div></article><article class="mini-feature"><span class="feature-symbol">${icon('code')}</span><div><h3>Jouw input erin. Een bruikbare prompt eruit.</h3><p>Bij elke AI-opdracht helpt de ingebouwde promptgenerator je op weg. Hij maakt automatisch een complete prompt met jouw projectgegevens. Kopieer die en plak hem direct in de aangegeven AI-tool.</p><a class="text-link" href="#opdrachten">Open de promptgenerators ${icon('arrow')}</a></div></article></section>`;
}

function flow(lesson) {return `<figure class="mini-flow" style="margin-left:0;margin-right:0"><figcaption class="eyebrow">${lesson.id===4?'De route van Studio Maan':'Zo hangt deze stap samen'}</figcaption><div class="flow-track">${lesson.flow.map((item,i)=>`${i?'<span class="flow-connector" aria-hidden="true">→</span>':''}<span class="flow-node">${esc(item)}</span>`).join('')}</div></figure>`;}
function renderSidebar(id) {return `<aside class="lesson-sidebar"><a class="back-route" href="#route">${icon('back')}Naar de routekaart</a><nav aria-label="Alle stappen">${phases.map(p=>`<div class="side-phase"><p class="eyebrow">${num(p.id+1)} · ${p.name}</p>${lessons.filter(l=>l.phase===p.id).map(l=>`<a class="side-step" href="#stap/${l.id}" ${l.id===id?'aria-current="step"':''}><span>${num(l.id)}</span>${esc(l.short)}</a>`).join('')}</div>`).join('')}</nav><a class="side-course" href="#seo">${icon('globe')} Na de route: SEO <span aria-hidden="true">↗</span></a><div class="side-bottom">Elke stap is vrij toegankelijk.<br>Controleer de uitkomst voordat je verdergaat.<br><a class="text-link" href="#opdrachten">Alle promptgenerators ↗</a></div></aside>`;}
function lessonExplanation(lesson) {return `<h2 class="panel-heading">Dit ga je doen.</h2><ol class="action-list">${lesson.actions.map(([title,text],i)=>`<li><span class="action-n" aria-hidden="true">${i+1}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></li>`).join('')}</ol>${flow(lesson)}${lesson.id===1?projectFolderMarkup():''}${lesson.id===7?repositoryMarkup():''}${lesson.id===12?railwayMarkup():''}<aside class="term-box">${icon('info')}<p><strong>${esc(lesson.term[0])}</strong><br>${esc(lesson.term[1])}</p></aside>`;}
function lessonExample(lesson) {return `<span class="example-note">${icon('spark')}Doorlopend fictief voorbeeld</span><article class="example-card"><div class="studio-brand"><span class="moon" aria-hidden="true"></span>Studio Maan</div><h3>${esc(lesson.example.title)}</h3><p>${esc(lesson.example.text)}</p><dl class="example-items">${lesson.example.items.map(([label,text])=>`<div><dt>${esc(label)}</dt><dd>${esc(text)}</dd></div>`).join('')}</dl></article>${flow(lesson)}<a class="text-link" href="#voorbeeld">Bekijk hoe het hele voorbeeld samenhangt ${icon('arrow')}</a>`;}

function promptCard(id,open=false){return promptMarkup(id,open);}
function lessonPrompts(lesson){return lessonPromptMarkup(lesson.id);}
function lessonChecks(lesson) {return `<h2 class="panel-heading">Wanneer kun je verder?</h2><p class="prompt-intro">Gebruik deze punten om je eigen resultaat te beoordelen. “AI zegt dat het klaar is” is geen bewijs; wijs aan wat je hebt vastgelegd of zelf hebt gecontroleerd.</p><ul class="check-list">${lesson.checks.map(c=>`<li><span class="check-symbol">${icon('check')}</span><span>${esc(c)}</span></li>`).join('')}</ul><aside class="pitfall"><h3>Een veelgemaakte valkuil</h3><p>${esc(lesson.pitfall)}</p></aside><div class="output-card"><div class="eyebrow">Dit neem je mee</div><p>${esc(lesson.output)}</p><small>${esc(lesson.goal)}</small></div>`;}
function renderLesson(route) {
  const lesson = lessons[route.id-1];
  const phase = phases[lesson.phase];
  const panel = {uitleg:lessonExplanation,voorbeeld:lessonExample,opdracht:lessonPrompts,controle:lessonChecks}[route.tab](lesson);
  return `<div class="lesson-shell">${renderSidebar(lesson.id)}<article class="lesson-body" style="${phaseStyle(phase.id)}"><div class="mobile-step-nav"><a href="#route">← De route</a><select id="step-select" aria-label="Ga direct naar een andere stap">${phases.map(p=>`<optgroup label="${p.name}">${lessons.filter(l=>l.phase===p.id).map(l=>`<option value="${l.id}" ${l.id===lesson.id?'selected':''}>${num(l.id)} · ${esc(l.short)}</option>`).join('')}</optgroup>`).join('')}</select></div><div class="breadcrumb"><a href="#route">De route</a><span aria-hidden="true">/</span><span class="phase-pill">${phase.name}</span><span>Stap ${num(lesson.id)} van 14</span></div><h1>${esc(lesson.title)}</h1><p class="lesson-intro">${esc(lesson.intro)}</p>${route.tab==='opdracht'?'':`<aside class="generator-callout"><div><strong>Voor deze stap staat een promptgenerator klaar.</strong><p>Vul je gegevens in. De generator maakt je prompt, die je direct kopieert en in je AI-tool plakt.</p></div><a class="btn primary" href="#stap/${lesson.id}/opdracht">Open promptgenerator ${icon('arrow')}</a></aside>`}<div class="lesson-contract"><div class="contract-item"><div class="eyebrow">${icon('folder')}Je begint met</div><p>${esc(lesson.input)}</p></div><div class="contract-item"><div class="eyebrow">${icon('flag')}Je werkt toe naar</div><p>${esc(lesson.goal)}</p></div></div>${route.tab==='opdracht'?'':lessonToolMarkup(lesson.id)}${seoInBuild[lesson.id]?`<aside class="seo-build-note">${icon('globe')}<div><strong>SEO hoort hier al bij</strong><p>${esc(seoInBuild[lesson.id])}</p><a class="text-link" href="#seo/2">Bekijk de SEO-bouwafspraken ↗</a></div></aside>`:''}<div class="lesson-tabs" role="tablist" aria-label="Onderdelen van stap ${lesson.id}">${tabs.map(t=>`<button role="tab" id="tab-${t.id}" data-tab="${t.id}" aria-selected="${t.id===route.tab}" aria-controls="lesson-panel" tabindex="${t.id===route.tab?0:-1}">${icon(t.icon)}${t.label}</button>`).join('')}</div><section id="lesson-panel" role="tabpanel" aria-labelledby="tab-${route.tab}" tabindex="0">${panel}</section><nav class="lesson-next" aria-label="Vorige en volgende stap">${lesson.id>1?`<a class="text-link" href="#stap/${lesson.id-1}">← Vorige stap</a>`:'<a class="text-link" href="#route">← De routekaart</a>'}${lesson.id<14?`<a class="btn primary" href="#stap/${lesson.id+1}">Volgende: ${esc(lessons[lesson.id].short)} ${nextArrow}</a>`:`<a class="btn primary" href="#seo">Volgende: je SEO-cursus ${nextArrow}</a>`}</nav><p class="source-line">${esc(lesson.tagline)}<br>Vibe Lift-handboek · editie 1.4 · Stap ${lesson.id} · ${esc(lesson.sources)} · Opdracht ${[...stepPrompts[lesson.id].main,...stepPrompts[lesson.id].extra].map(num).join(', ')}. Studio Maan is een fictieve oefencasus.</p></article></div>`;
}

function pageHeading(eyebrow,title,text) {return `<header class="page-heading"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${text}</p></header>`;}
function projectFolderMarkup(){return `<section class="project-folder-guide section-gap" aria-labelledby="project-folder-title"><h2 class="panel-heading" id="project-folder-title">Begin altijd met je projectmap</h2><p>Deze map is de vaste plek voor al je werk. ChatGPT, Claude en Stitch zetten hun uitkomsten niet vanzelf in deze lokale map. Sla ze daar na iedere stap zelf op.</p><ol class="action-list">${projectSetup.map(([title,text],i)=>`<li><span class="action-n">${i+1}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></li>`).join('')}</ol><h3>Zo deel je de map in</h3><dl class="glossary">${projectFolders.map(([name,use])=>`<div><dt><code>${esc(name)}</code></dt><dd>${esc(use)}</dd></div>`).join('')}</dl><p>Een .md-bestand is een tekstbestand met eenvoudige opmaak, ook wel Markdown genoemd. Bewaar je het via Kladblok, kies dan bij Opslaan als het type Alle bestanden en gebruik de volledige naam, bijvoorbeeld projectbrief.md. Controleer dat er niet ongemerkt .txt achter staat.</p><p>Gebruik herkenbare namen voor oorspronkelijke AI-output, bijvoorbeeld 2026-09-12-chatgpt-projectbrief-v1.md. Zet de nagekeken versie op de plek die de les noemt. Maak ook een back-up van je projectmap; alleen bewaren in een chat is onvoldoende.</p><div class="info-card"><h3>Startopdracht voor Antigravity</h3><p>Open eerst je lokale map in Antigravity. Kopieer deze opdracht en plak hem daar.</p><button class="copy-btn" data-project-setup-copy>Kopieer startopdracht</button><textarea class="prompt-text" id="project-setup-prompt" rows="10" readonly aria-label="Startopdracht voor de projectmap">${esc(projectSetupPrompt)}</textarea></div><p>Met een bestandsnaam of link alleen geef je een AI-tool nog geen toegang. Voeg de bestanden in die tool toe of open de lokale map. Vraag Antigravity aan het begin van elke sessie de actuele afspraken te lezen.</p><p><a class="text-link" href="https://antigravity.google/docs/projects/" target="_blank" rel="noopener noreferrer">Antigravity: projecten en lokale mappen ↗</a></p></section>`;}
function renderExample() {return `<div class="page">${pageHeading('Het doorlopende voorbeeld','Een klein idee.<br>Een complete website.','Maak kennis met Studio Maan. Deze fictieve keramiekstudio maakt iedere stap tastbaar: van een eerste gedachte tot een gecontroleerde aanvraagroute. Je kunt hetzelfde denkwerk toepassen op je eigen project.')}<div class="example-layout"><div><section class="example-brief"><span class="example-note">Fictieve oefencasus</span><h2>Studio Maan</h2><p>Een kleine studio geeft keramiekworkshops. Informatie en vragen zitten nu verspreid over losse berichten. De eerste website moet bezoekers helpen een workshop te kiezen en een plek aan te vragen.</p><dl class="example-items section-gap"><div><dt>De gebruiker</dt><dd>Een beginner die een keramiekworkshop wil volgen.</dd></div><div><dt>Het eerste resultaat</dt><dd>Een aanvraag die de studio ontvangt en persoonlijk bevestigt.</dd></div><div><dt>Bewust klein</dt><dd>Geen betaling, ledenportaal of ingewikkeld boekingssysteem in de eerste versie.</dd></div></dl></section></div><div><div class="example-visual"><img class="layers-art" src="assets/idea-to-live.svg" alt="Een idee groeit via een ontwerp uit tot een live website" width="640" height="560" loading="lazy"><p class="visual-caption">Een idee krijgt vorm, laag voor laag.</p></div><figure class="workshop-mock" style="margin-left:0;margin-right:0"><div class="mock-top"><i></i><i></i><i></i><span>VOORBEELDSCHERM · STUDIO MAAN</span></div><div class="mock-body"><div class="eyebrow">Even uit je hoofd. Iets in je handen.</div><h3>Je eerste keramiekworkshop.</h3><p>Ontdek klei, maak iets van jezelf en neem de tijd. Geen ervaring nodig.</p><div class="mock-date"><span>Zaterdag · 10.00 – 12.30</span><span>Voorbeelddatum</span></div><div class="mock-cta">Vraag een plek aan ↗</div></div><figcaption class="mock-caption">Illustratief scherm. Er worden geen aanvragen verstuurd.</figcaption></figure></div></div>${flow(lessons[3])}<section class="section-gap"><h2 class="editorial-title">Volg het voorbeeld door alle stappen.</h2><div class="example-timeline">${lessons.map(l=>`<a href="#stap/${l.id}/voorbeeld"><span class="step-number">${num(l.id)}</span>${esc(l.short)}<span class="jump" aria-hidden="true">↗</span></a>`).join('')}</div></section><div class="content-grid section-gap"><article class="info-card"><div class="eyebrow">De vertaalslag naar jouw project</div><h3>Houd de logica. Vervang de inhoud.</h3><p>Een workshopaanvraag kan in jouw project een offerteaanvraag, een inschrijving of een andere concrete taak zijn. Begin met één gebruiker en één aantoonbaar resultaat.</p><a class="text-link" href="#stap/1">Maak je eigen projectbrief ${icon('arrow')}</a></article><article class="info-card"><div class="eyebrow">Wat dit voorbeeld wel laat zien</div><h3>Beslissingen, geen verzonnen bewijs.</h3><p>De ingevulde voorbeelden laten zien wat je opschrijft en controleert. Interviews, aanvragen en tests zijn hier niet uitgevoerd voor een echte studio. In je eigen project verzamel je dat bewijs zelf.</p></article></div></div>`;}


function toolLinks(keys) {return `<div class="tool-links">${keys.map(key=>`<a href="${tools[key].url}" target="_blank" rel="noopener noreferrer">${toolLogo(key)}${esc(tools[key].name)} ${icon('external')}</a>`).join('')}</div>`;}
function lessonToolMarkup(id) {
  const guide=lessonTools[id];
  return `<section class="lesson-tools" aria-label="Tools voor deze stap"><div class="lesson-tools-heading"><h2>Je tools bij deze stap</h2><a href="#tools" class="text-link">Alle tools ↗</a></div><p>${esc(guide.intro)}</p><p class="tool-generator-help">Een opdracht aan AI geven? <a class="text-link" href="#stap/${id}/opdracht">Gebruik de promptgenerator van deze stap ↗</a> en plak de gekopieerde prompt in de aangegeven AI-tool.</p><div class="step-tools-grid">${guide.items.map(([key,use])=>`<a class="step-tool" href="${tools[key].url}" target="_blank" rel="noopener noreferrer">${toolLogo(key)}<span><strong>${esc(tools[key].name)} ${icon('external')}</strong><small>${esc(use)}</small></span></a>`).join('')}</div><p class="tool-handoff"><strong>Neem mee →</strong> ${esc(guide.handoff)}</p></section>`;
}
function repositoryMarkup(){return `<details class="workflow-guide"><summary>${icon('folder')} Antigravity koppelen aan GitHub · stap voor stap</summary><div class="workflow-content"><p class="workflow-intro">Je geeft opdrachten in gewone taal. Antigravity voert het technische versiebeheer uit; jij controleert de gekozen repository en het resultaat.</p><ol class="action-list">${repositoryGuide.map(([title,text],i)=>`<li><span class="action-n">${i+1}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></li>`).join('')}</ol><a class="text-link" href="https://antigravity.google/docs/features" target="_blank" rel="noopener noreferrer">Antigravity: wijzigingen bekijken, committen en pushen ↗</a></div></details>`;}
function railwayMarkup(){return `<details class="workflow-guide"><summary>${icon('globe')} Van GitHub naar Railway · stap voor stap</summary><div class="workflow-content"><ol class="action-list">${[
 ['Open Railway','Meld je aan en kies New Project → Deploy from GitHub repo. Verleen via de aangeboden GitHub-koppeling toegang tot de bedoelde repository.'],
 ['Controleer de bron','Kies de juiste repository en branch. Laat Antigravity de projectmap, build- en startinstellingen controleren. Niet iedere website heeft dezelfde instellingen.'],
 ['Zet de instellingen klaar','Vul benodigde geheime waarden in bij Variables, buiten je code. Controleer kosten, toegangsafspraken en de instelling voor automatische publicatie vóór je de dienst vrijgeeft.'],
 ['Maak je adres bereikbaar','Wacht op een geslaagde deployment. Gebruik bij de dienst Settings → Networking om een domein te genereren of een eigen domein te koppelen. Volg voor een eigen domein de werkelijk getoonde DNS-records.'],
 ['Controleer en bewaar','Open de echte URL en test de kernroute. Bewaar de GitHub-versie, Railway-deployment en herstelafspraak. Code terugzetten herstelt niet automatisch databasegegevens.']
 ].map(([title,text],i)=>`<li><span class="action-n">${i+1}</span><div><h3>${title}</h3><p>${text}</p></div></li>`).join('')}</ol><a class="text-link" href="https://docs.railway.com/guides/vibe-coding-deploy" target="_blank" rel="noopener noreferrer">Railway: officiële publicatiehandleiding ↗</a></div></details>`;}
function toolJourney(){return `<figure class="tool-journey"><figcaption class="eyebrow">Van eerste gedachte naar echte website</figcaption><div class="journey-track">${[
 ['chatgpt','Onderzoek','ChatGPT of Claude'],['stitch','Ontwerp','Schermen & stijl'],['antigravity','Bouw','Plan, code & tests'],['github','Bewaar','Gecontroleerde versie'],['railway','Publiceer','Live & controleren']
 ].map(([key,title,note],i)=>`${i?'<span class="journey-arrow" aria-hidden="true">→</span>':''}<a href="${tools[key].url}" target="_blank" rel="noopener noreferrer">${toolLogo(key)}<strong>${title}</strong><small>${note}</small></a>`).join('')}</div><p>Antigravity kan wijzigingen vastleggen en naar GitHub sturen. Railway kan de afgesproken branch publiceren. Jij hoeft geen Git-commando’s te typen.</p></figure>`;}
function renderTools() {return `<div class="page">${pageHeading('Gereedschap dat met je meegroeit','Jouw idee.<br>Een paar goede tools.','Begin met één onderzoekspartner, ontwerp in Stitch en bouw met Antigravity. GitHub bewaart je code, Railway brengt haar online. Bij iedere les zie je precies wat je met welke tool doet.')} ${toolJourney()}<div class="tool-grid">${Object.entries(tools).map(([key,t])=>`<article class="tool-card"><div class="tool-card-heading">${toolLogo(key)}<div><span class="tool-role">${esc(t.kind)}</span><h2>${esc(t.name)}</h2></div></div><p>${esc(t.description)}</p><div class="tool-card-actions"><a class="text-link" href="${t.url}" target="_blank" rel="noopener noreferrer">Open ${esc(t.name)} ${icon('external')}</a><a href="${t.docs}" target="_blank" rel="noopener noreferrer" class="tool-docs">Officiële uitleg ↗</a></div></article>`).join('')}</div>${repositoryMarkup()}${railwayMarkup()}<div class="method-note"><strong>Begin met wat je nu nodig hebt.</strong><br>ChatGPT en Claude zijn alternatieven. GitHub, Railway en de meettools hebben een andere rol; je hoeft ze niet allemaal tegelijk in te richten. Functies, abonnementen en schermnamen kunnen veranderen. Controleer de aanbieder en geef je bouwagent alleen de bedoelde projecttoegang.</div><section class="section-gap"><h2 class="editorial-title">Even vertalen naar gewone taal.</h2><dl class="glossary">${lessons.map(l=>`<div><dt>${esc(l.term[0])}</dt><dd>${esc(l.term[1])}</dd></div>`).join('')}</dl></section></div>`;}
function seoBanner(){return `<a class="seo-banner" href="#seo"><span class="seo-banner-icon">${icon('globe')}</span><span><span class="eyebrow">SEO · vóór en na je livegang</span><strong>Van live naar gevonden.</strong><small>SEO, Search Console en Google Analytics. Met instelstappen, voorbeelden en AI-opdrachten.</small></span><span class="arrow-circle" aria-hidden="true">↗</span></a>`;}
function seoPrompt(lesson,open=false){return promptMarkup(`s${lesson.id}`,open===true);}
function renderSEO(route){
 const l=seoLessons[route.id-1];
 return `<div class="page seo-page">${pageHeading('Vindbaarheid in Google · SEO-cursus','Van live<br>naar gevonden.','SEO betekent je website begrijpelijk en vindbaar maken voor zoekmachines. Gebruik les 1 bij je teksten en les 2 bij het bouwplan. Les 3 tot en met 5 gebruik je na publicatie, als je website openbaar is en je bezoekers wilt meten.')}<nav class="seo-nav" aria-label="SEO-lessen">${seoLessons.map(item=>`<a href="#seo/${item.id}" ${item.id===l.id?'aria-current="step"':''}><span>${num(item.id)}</span>${esc(item.short)}</a>`).join('')}</nav><article class="seo-lesson"><div class="seo-lesson-head"><span class="eyebrow">Les ${l.id} van 5</span><h2>${esc(l.title)}</h2><p>${esc(l.intro)}</p>${toolLinks(l.tools)}</div><aside class="generator-callout"><div><strong>Ook deze SEO-les heeft een promptgenerator.</strong><p>Vul de informatie voor deze les in, kopieer je prompt en plak hem in de aangegeven AI-tool. De instellingen loop je zelf na met de uitleg hieronder.</p></div><button class="btn primary" data-generator-jump="s${l.id}">Open promptgenerator ${icon('arrow')}</button></aside><div class="seo-layout"><section class="seo-actions"><h3 class="panel-heading">Zo pak je het aan</h3><ol class="action-list">${l.actions.map(([title,text],i)=>`<li><span class="action-n">${i+1}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></li>`).join('')}</ol></section><aside class="seo-settings"><div class="settings-bar"><span class="settings-light" aria-hidden="true"></span>JOUW WERKBLAD</div><h3>${esc(l.settingsTitle)}</h3>${l.id===1?`<div class="search-preview"><span>studio-maan.example › keramiekworkshop</span><strong>${esc(l.settings[2][1])}</strong><p>${esc(l.settings[3][1])}</p></div>`:''}<dl>${l.settings.map(([name,value])=>`<div><dt>${esc(name)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl><p class="settings-note">${esc(l.example)}</p></aside></div><figure class="mini-flow"><figcaption class="eyebrow">De samenhang</figcaption><div class="flow-track">${l.flow.map((item,i)=>`${i?'<span class="flow-connector" aria-hidden="true">→</span>':''}<span class="flow-node">${esc(item)}</span>`).join('')}</div></figure><div class="seo-contract"><p><strong>Begin met</strong>${esc(l.input)}</p><p><strong>Neem mee</strong>${esc(l.output)}</p></div><section class="seo-generator" aria-labelledby="seo-generator-title"><h3 class="panel-heading" id="seo-generator-title" tabindex="-1">Promptgenerator voor deze SEO-les</h3><p class="prompt-intro">Vul in → kopieer je prompt → plak in je AI-tool. Je prompt wordt automatisch samengesteld terwijl je typt.</p>${projectMarkup()}${seoPrompt(l,true)}</section><section class="seo-checks"><h3 class="panel-heading">Controleer je resultaat</h3><ul class="check-list">${l.checks.map(check=>`<li><span class="check-symbol">${icon('check')}</span><span>${esc(check)}</span></li>`).join('')}</ul></section><details class="seo-sources"><summary>Officiële uitleg bij deze les</summary><ul>${l.sources.map(([title,url])=>`<li><a href="${url}" target="_blank" rel="noopener noreferrer">${esc(title)} ↗</a></li>`).join('')}</ul><p>Documentatie geraadpleegd op 12 september 2026. Menu’s kunnen per taal, account en productversie verschillen.</p></details><nav class="lesson-next" aria-label="Vorige en volgende SEO-les"><a class="text-link" href="${l.id>1?`#seo/${l.id-1}`:'#stap/14'}">← ${l.id>1?'Vorige les':'Terug naar je bouwroute'}</a><a class="btn primary" href="${l.id<5?`#seo/${l.id+1}`:'#stap/14'}">${l.id<5?`Volgende: ${seoLessons[l.id].short}`:'Neem je verbetering mee'} ${nextArrow}</a></nav></article><p class="source-line">Deze cursus helpt je jouw eigen website in te richten. Vibe Lift koppelt geen Google-account en verzamelt geen Analytics-metingen van je bezoek.</p></div>`;
}

function renderMethod() { return methodMarkup(); }

function renderPrompts() {return `<div class="page">${pageHeading('Promptgenerators voor elke stap','Vul in. Kopieer.<br>Plak in je AI-tool.','Voor elke AI-opdracht in de route en SEO-cursus staat een promptgenerator klaar. Een prompt is de opdracht die je aan AI geeft. Vul je projectgegevens en de informatie voor je stap in: de generator stelt automatisch een complete prompt samen. Klik op Kopieer prompt en plak hem direct in de aangegeven AI-tool.')}${projectMarkup()}<div class="library-help"><p><strong>Begin bij je huidige stap.</strong> Je hoeft niet alle opdrachten te gebruiken. Dezelfde ingevulde context gaat mee wanneer je naar een andere stap gaat.</p><a class="btn secondary" href="#route">Kies mijn stap ↗</a></div>${phases.map(phase=>`<section class="library-group"><h2>${num(phase.id+1)} · ${phase.name}</h2>${lessons.filter(l=>l.phase===phase.id).map(l=>`<section class="library-step"><h3><a href="#stap/${l.id}/opdracht">Stap ${num(l.id)} · ${esc(l.short)} ↗</a></h3>${[...stepPrompts[l.id].main,...stepPrompts[l.id].extra].map(id=>promptCard(id)).join('')}</section>`).join('')}</section>`).join('')}<section class="library-group"><h2>Na de livegang · SEO</h2><p>De instellingen staan in de <a class="text-link" href="#seo">SEO-cursus</a>. Hier vind je de opdrachten voor onderzoek en codewijzigingen.</p>${seoLessons.map(seoPrompt).join('')}</section><p class="method-note">Je kunt de algemene opdrachten ook <a href="downloads/opdrachten.md" download>als bestand meenemen ↗</a>. Deze download bevat geen ingevulde projectgegevens.</p></div>`;}

function render() {
  const route = parseRoute(location.hash);
  const sameLesson = route.page==='lesson' && previousRoute?.page==='lesson' && route.id===previousRoute.id;
  const pages = {route:renderHome,seo:()=>renderSEO(route),lesson:()=>renderLesson(route),voorbeeld:renderExample,tools:renderTools,werkwijze:renderMethod,opdrachten:renderPrompts,missing:()=>`<section class="empty-state"><p class="eyebrow">Even opnieuw oriënteren</p><h1>Deze stap kunnen we niet vinden.</h1><p>De leerroute heeft veertien stappen. Kies in het overzicht waar je verder wilt.</p><a class="btn primary" href="#route">Naar de routekaart ${nextArrow}</a></section>`};
  main.innerHTML = pages[route.page]();
  const titles = {seo:`SEO · ${seoLessons[(route.id || 1)-1]?.short || ''}`,route:'Van projectmap naar live website',voorbeeld:'Studio Maan — het voorbeeldproject',tools:'Gereedschappen',werkwijze:'Onze werkwijze',opdrachten:'Promptgenerators voor jouw project',missing:'Pagina niet gevonden'};
  document.title = `${route.page==='lesson'?`Stap ${route.id} · ${lessons[route.id-1].title}`:titles[route.page]} — Vibe Lift`;
  const active = route.page==='lesson'?'route':route.page;
  document.querySelectorAll('.main-nav a').forEach(a=>{if(a.hash===`#${active}`)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  if(previousRoute) {
    if(sameLesson) document.querySelector(`#tab-${route.tab}`).focus({preventScroll:true});
    else {window.scrollTo({top:0,behavior:'instant'});main.focus({preventScroll:true});}
  }
  previousRoute = route;
}

main.addEventListener('click', async event=> {
  const viewButton = event.target.closest('[data-view]');
  if(viewButton) {
    routeView = viewButton.dataset.view;
    document.querySelector('#route-content').innerHTML = routeMarkup();
    main.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===routeView)));
    return;
  }
  const tabButton = event.target.closest('[data-tab]');
  if(tabButton) {const route=parseRoute(location.hash); location.hash=`stap/${route.id}/${tabButton.dataset.tab}`;return;}
  if(await handlePromptClick(event,showNotice,render))return;
});
main.addEventListener('input',handleDraftInput);
main.addEventListener('toggle',handleDraftToggle,true);
main.addEventListener('change',event=>{if(handleDraftInput(event))return;if(event.target.id==='step-select'){const id=Number(event.target.value);if(id>=1 && id<=14)location.hash=`stap/${id}`;}});
main.addEventListener('keydown',event=> {
  const tab=event.target.closest('[role=tab]');
  if(!tab || !['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;
  event.preventDefault();
  const index=tabs.findIndex(t=>t.id===tab.dataset.tab);
  const target=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
  const route=parseRoute(location.hash);
  location.hash=`stap/${route.id}/${tabs[target].id}`;
});
function showNotice(text) {const notice=document.querySelector('#notice');clearTimeout(noticeTimer);notice.textContent=text;notice.classList.add('visible');noticeTimer=setTimeout(()=>notice.classList.remove('visible'),6500);}
document.querySelector('.skip-link').addEventListener('click',event=>{event.preventDefault();main.focus();main.scrollIntoView({block:'start'});});
const menuToggle = document.querySelector('.menu-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');
const compactNavigation = window.matchMedia('(max-width: 950px)');
function closeMenu({restoreFocus=false} = {}) {
  menuToggle.setAttribute('aria-expanded','false');
  primaryNavigation.hidden = compactNavigation.matches;
  if(restoreFocus) menuToggle.focus({preventScroll:true});
}
function syncNavigation() {
  const focusWasInMenu = primaryNavigation.contains(document.activeElement);
  menuToggle.hidden = !compactNavigation.matches;
  closeMenu({restoreFocus:compactNavigation.matches && focusWasInMenu});
}
menuToggle.addEventListener('click',()=>{
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded',String(open));
  primaryNavigation.hidden = !open;
});
primaryNavigation.addEventListener('click',event=>{
  if(event.target.closest('a')) closeMenu({restoreFocus:compactNavigation.matches});
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && menuToggle.getAttribute('aria-expanded')==='true') {
    closeMenu({restoreFocus:true});
  }
});
document.addEventListener('click',event=>{
  if(!event.target.closest('.site-header')) closeMenu();
});
compactNavigation.addEventListener('change',syncNavigation);
syncNavigation();
if(window.ResizeObserver) {
  const headerSize = new ResizeObserver(entries=>{
    document.documentElement.style.setProperty('--header-height',`${entries[0].target.getBoundingClientRect().height}px`);
  });
  headerSize.observe(document.querySelector('.site-header'));
}
window.addEventListener('hashchange',()=>{closeMenu();render();});
render();

startAirField();
