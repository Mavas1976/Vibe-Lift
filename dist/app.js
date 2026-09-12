import {phases, lessons} from './content.js';
import {prompts} from './prompts.js';

const main = document.querySelector('#main');
const colors = {peach:'#f0d9c9',lavender:'#e3e0f1',blue:'#d8e5f6',mint:'#dcebe3'};
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
export const escapeHTML = (value) => String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const esc = escapeHTML;
const num = n => String(n).padStart(2,'0');
const nextArrow = '<span class="arrow-circle" aria-hidden="true">↗</span>';
const tabs = [{id:'uitleg',label:'Uitleg',icon:'book'},{id:'voorbeeld',label:'Voorbeeld',icon:'play'},{id:'opdracht',label:'Opdracht',icon:'code'},{id:'controle',label:'Controle',icon:'check'}];
let routeView = 'map';
let previousRoute = null;
let noticeTimer;

export function parseRoute(hash) {
  if (!hash || hash === '#' || hash === '#route' || hash === '#main') return {page:'route'};
  const lesson = /^#stap\/([1-9]|1[0-4])(?:\/(uitleg|voorbeeld|opdracht|controle))?$/.exec(hash);
  if(lesson) return {page:'lesson',id:Number(lesson[1]),tab:lesson[2] || 'uitleg'};
  const page = /^#(voorbeeld|tools|spos|opdrachten)$/.exec(hash);
  return page ? {page:page[1]} : {page:'missing'};
}

function phaseStyle(phaseId) {return `--phase-color:${colors[phases[phaseId].color]}`;}
function stepCard(lesson) {return `<a class="step-card ${lesson.id===1?'first':''}" href="#stap/${lesson.id}"><span class="step-number">${num(lesson.id)}</span><span class="step-card-text"><strong>${esc(lesson.short)}</strong><small>${esc(lesson.output.split(' + ')[0])}</small></span><span class="card-arrow" aria-hidden="true">↗</span></a>`;}
function routeMarkup() {
  if(routeView === 'list') return `<div class="route-list">${lessons.map(stepCard).join('')}</div>`;
  return `<div class="route-map" aria-label="Veertien stappen in vijf fasen">${phases.map((phase)=>`<section class="phase" style="${phaseStyle(phase.id)}"><div class="phase-heading"><div class="phase-symbol">${icon(phase.symbol)}</div><div class="phase-heading-label"><span>Fase ${num(phase.id+1)}</span><h3>${phase.name}</h3></div></div><div class="phase-list">${lessons.filter(l=>l.phase===phase.id).map(stepCard).join('')}</div><p class="phase-caption">${phase.caption}</p></section>`).join('')}</div>`;
}
function renderHome() {
  return `<section class="hero"><div class="wrap"><img class="hero-art" src="assets/lift-flight-hero.png" alt="" width="1536" height="1024" fetchpriority="high"><div class="hero-copy"><span class="pill"><span class="pill-dot"></span>Jouw eerste website begint hier</span><h1>Van een idee<br>naar iets <span>echts.</span></h1><p>Je hoeft geen programmeur te zijn om iets te bouwen. Wel te weten wat je volgende stap is. Ontdek hoe je met AI van een eerste gedachte naar een live website gaat.</p><div class="button-row"><a class="btn primary" href="#stap/1">Begin bij je idee ${nextArrow}</a><a class="text-link" href="#voorbeeld">Bekijk het voorbeeld ${icon('arrow')}</a></div><p class="hero-meta"><span>${icon('check')}Geen voorkennis nodig</span><span>${icon('map')}14 stappen, jouw tempo</span></p></div><div class="float-label">${icon('spark')}Geef je idee de ruimte.</div></div></section>
  <section class="route-section" id="route-overview"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Het pad van idee naar live</div><h2>Jij bepaalt waar je instapt.</h2><p>Volg de route of kies de stap die je nu nodig hebt.</p></div><div class="segmented" role="group" aria-label="Weergave van de stappen"><button data-view="map" aria-pressed="${routeView==='map'}">${icon('map')}Routekaart</button><button data-view="list" aria-pressed="${routeView==='list'}">${icon('list')}Lijst</button></div></div><div id="route-content">${routeMarkup()}</div><div class="route-foot"><p>${icon('info')}Elke stap bevat uitleg, een voorbeeld, een opdracht en een controle.</p><a class="text-link" href="#spos">Gebouwd op de SPOS-werkwijze ${icon('arrow')}</a></div></div></section>
  <section class="start-strip" aria-label="Hulp bij het beginnen"><article class="mini-feature"><span class="feature-symbol">${icon('layers')}</span><div><h3>Eén voorbeeld. De hele reis.</h3><p>Volg Studio Maan van een losse gedachte naar een website voor workshopaanvragen.</p><a class="text-link" href="#voorbeeld">Maak kennis met Studio Maan ${icon('arrow')}</a></div></article><article class="mini-feature"><span class="feature-symbol">${icon('code')}</span><div><h3>Je hoeft de juiste woorden niet te kennen.</h3><p>Bij iedere stap vind je een AI-opdracht en zie je welke informatie je moet meegeven.</p><a class="text-link" href="#opdrachten">Ontdek de 28 opdrachten ${icon('arrow')}</a></div></article></section>`;
}

function flow(lesson) {return `<figure class="mini-flow" style="margin-left:0;margin-right:0"><figcaption class="eyebrow">${lesson.id===4?'De route van Studio Maan':'Zo hangt deze stap samen'}</figcaption><div class="flow-track">${lesson.flow.map((item,i)=>`${i?'<span class="flow-connector" aria-hidden="true">→</span>':''}<span class="flow-node">${esc(item)}</span>`).join('')}</div></figure>`;}
function renderSidebar(id) {return `<aside class="lesson-sidebar"><a class="back-route" href="#route">${icon('back')}Naar de routekaart</a><nav aria-label="Alle stappen">${phases.map(p=>`<div class="side-phase"><p class="eyebrow">${num(p.id+1)} · ${p.name}</p>${lessons.filter(l=>l.phase===p.id).map(l=>`<a class="side-step" href="#stap/${l.id}" ${l.id===id?'aria-current="step"':''}><span>${num(l.id)}</span>${esc(l.short)}</a>`).join('')}</div>`).join('')}</nav><div class="side-bottom">Elke stap is vrij toegankelijk.<br>Ga terug, sla over, ontdek opnieuw.<br><a class="text-link" href="#opdrachten">Alle AI-opdrachten ↗</a></div></aside>`;}
function lessonExplanation(lesson) {return `<h2 class="panel-heading">Dit ga je doen.</h2><ol class="action-list">${lesson.actions.map(([title,text],i)=>`<li><span class="action-n" aria-hidden="true">${i+1}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></li>`).join('')}</ol>${flow(lesson)}<aside class="term-box">${icon('info')}<p><strong>${esc(lesson.term[0])}</strong><br>${esc(lesson.term[1])}</p></aside>`;}
function lessonExample(lesson) {return `<span class="example-note">${icon('spark')}Doorlopend fictief voorbeeld</span><article class="example-card"><div class="studio-brand"><span class="moon" aria-hidden="true"></span>Studio Maan</div><h3>${esc(lesson.example.title)}</h3><p>${esc(lesson.example.text)}</p><dl class="example-items">${lesson.example.items.map(([label,text])=>`<div><dt>${esc(label)}</dt><dd>${esc(text)}</dd></div>`).join('')}</dl></article>${flow(lesson)}<a class="text-link" href="#voorbeeld">Bekijk hoe het hele voorbeeld samenhangt ${icon('arrow')}</a>`;}

const promptNotes = {
  4:'De opdracht maakt een toetsplan. Voer de praktijktoets daarna echt uit en leg waarnemingen en het besluit vast.',
  7:'Laat deze opdracht eerst een ontwerpbrief maken. Gebruik de gemaakte brief vervolgens in Stitch of je gekozen ontwerptool.',
  8:'Gebruik alleen als je al een ontwerp hebt. Vervang [feedback] door concrete opmerkingen over dat ontwerp.',
  10:'Alleen van toepassing als site, demo of portaal daadwerkelijk bestaan of expliciet afgesproken zijn. Voor een simpele website kun je dit overslaan.',
  12:'Specifiek voor een Windows-project. De agent moet de echte bestaande startcommando’s controleren; de ontwikkelomgeving hoort al bij stap 7 te werken.',
  13:'Gebruik pas als de lokale startwijze en werkende route aanwezig zijn. Vraag om het werkelijk gebruikte lokale adres.',
  15:'Geef eerst je echte teststappen en waarnemingen mee. Zonder die informatie kan AI niet weten wat je hebt meegemaakt.',
  19:'Controleer de gekozen hostingomgeving en wat daar mee mag worden gepubliceerd. Deel geen geheime sleutels in een prompt.',
  20:'Noem de exacte versie, hostingomgeving en gewenste toegang. Controleer de afgeronde publicatie en de echte live-URL.',
  21:'Laat een concept en plan maken. Jij kiest de ontvangers en beslist over het daadwerkelijk versturen.',
  23:'Laat de feitelijke projectstaat vastleggen. Nog niet uitgevoerde controles blijven als open werk vermeld.',
  24:'Open eerst de bestaande projectmap. Laat de agent de actuele bestanden lezen, ook als er eerdere chatgeschiedenis is.',
  25:'Documenteer ook fouten, lege toestanden en bevestigingen. Markeer nog geplande schermen als gepland.',
  26:'Pas het dossier aan op het echte project. Voeg geen database, accounts of diensten toe alleen omdat een template ze noemt.',
  27:'Beschrijf de actuele werking en echte gebruikersrollen. Geplande functies horen duidelijk apart.',
  28:'Laat vaststellen wat daadwerkelijk is gecontroleerd. Een bijgewerkt document bewijst op zichzelf niet dat de software werkt.'
};
function promptContext(id) {
  const lesson = lessons.find(l=>l.prompts.includes(id));
  const environment = id === 8 ? 'Je ontwerptool, bij het bestaande ontwerp.' : id<=7 ? 'Een AI-gesprek met je projectdocumenten; bij onderzoek een omgeving met broncontrole.' : id===21 || id===22 ? 'Een AI-gesprek met je live-aanbod, doelgroep en projectdossier.' : 'Je AI-bouwomgeving, geopend in de juiste projectmap.';
  return {lesson,environment,input:lesson.input,note:promptNotes[id] || 'Controleer of SPOS-instructies in deze omgeving beschikbaar zijn. Geef ontbrekende informatie zelf mee en laat onzekerheden benoemen.'};
}
function promptCard(id, open=false) {
  const prompt = prompts.find(p=>p.id===id);
  const context = promptContext(id);
  return `<details class="prompt-card" ${open?'open':''}><summary><span class="prompt-id">${num(id)}</span><span>${esc(prompt.title)}</span></summary><div class="prompt-content"><div class="prompt-context"><p><strong>Waar gebruik je dit?</strong> ${esc(context.environment)}</p><p><strong>Geef eerst mee:</strong> ${esc(context.input)}</p><p><strong>Let op:</strong> ${esc(context.note)}</p></div><textarea class="prompt-text" rows="${Math.min(12,Math.max(5,prompt.text.split('\n').length))}" readonly aria-label="Opdracht ${num(id)}: ${esc(prompt.title)}" id="prompt-text-${id}" spellcheck="false">${esc(prompt.text)}</textarea><div class="prompt-actions"><button class="copy-btn" data-copy="${id}">${icon('copy')}Kopieer opdracht</button><small>Originele opdracht ${num(id)} · <a href="#stap/${context.lesson.id}/uitleg">stap ${context.lesson.id} ↗</a></small></div></div></details>`;
}
function lessonPrompts(lesson) {return `<h2 class="panel-heading">Geef je AI een helder vertrekpunt.</h2><p class="prompt-intro">Open de juiste omgeving, voeg de genoemde documenten toe en kopieer daarna de opdracht. Een prompt is een opdracht aan AI. De AI-uitkomst lees en controleer je zelf. <a class="text-link" href="#spos">Eerst weten hoe SPOS werkt? ↗</a></p>${lesson.prompts.map((id,i)=>promptCard(id,i===0)).join('')}<aside class="term-box">${icon('info')}<p>Deze site voert de opdracht niet uit. Alleen de oorspronkelijke opdracht wordt gekopieerd; de context hierboven voeg je zelf toe. Vervang eventuele tekst tussen [haakjes] door je eigen informatie.</p></aside>`;}
function lessonChecks(lesson) {return `<h2 class="panel-heading">Wanneer kun je verder?</h2><p class="prompt-intro">Gebruik deze punten om je eigen resultaat te beoordelen. “AI zegt dat het klaar is” is geen bewijs; wijs aan wat je hebt vastgelegd of zelf hebt gecontroleerd.</p><ul class="check-list">${lesson.checks.map(c=>`<li><span class="check-symbol">${icon('check')}</span><span>${esc(c)}</span></li>`).join('')}</ul><aside class="pitfall"><h3>Een veelgemaakte valkuil</h3><p>${esc(lesson.pitfall)}</p></aside><div class="output-card"><div class="eyebrow">Dit neem je mee</div><p>${esc(lesson.output)}</p><small>${esc(lesson.goal)}</small></div>`;}
function renderLesson(route) {
  const lesson = lessons[route.id-1];
  const phase = phases[lesson.phase];
  const panel = {uitleg:lessonExplanation,voorbeeld:lessonExample,opdracht:lessonPrompts,controle:lessonChecks}[route.tab](lesson);
  return `<div class="lesson-shell">${renderSidebar(lesson.id)}<article class="lesson-body" style="${phaseStyle(phase.id)}"><div class="mobile-step-nav"><a href="#route">← De route</a><select id="step-select" aria-label="Ga direct naar een andere stap">${phases.map(p=>`<optgroup label="${p.name}">${lessons.filter(l=>l.phase===p.id).map(l=>`<option value="${l.id}" ${l.id===lesson.id?'selected':''}>${num(l.id)} · ${esc(l.short)}</option>`).join('')}</optgroup>`).join('')}</select></div><div class="breadcrumb"><a href="#route">De route</a><span aria-hidden="true">/</span><span class="phase-pill">${phase.name}</span><span>Stap ${num(lesson.id)} van 14</span></div><h1>${esc(lesson.title)}</h1><p class="lesson-intro">${esc(lesson.intro)}</p><div class="lesson-contract"><div class="contract-item"><div class="eyebrow">${icon('folder')}Je begint met</div><p>${esc(lesson.input)}</p></div><div class="contract-item"><div class="eyebrow">${icon('flag')}Je werkt toe naar</div><p>${esc(lesson.goal)}</p></div></div><div class="lesson-tabs" role="tablist" aria-label="Onderdelen van stap ${lesson.id}">${tabs.map(t=>`<button role="tab" id="tab-${t.id}" data-tab="${t.id}" aria-selected="${t.id===route.tab}" aria-controls="lesson-panel" tabindex="${t.id===route.tab?0:-1}">${icon(t.icon)}${t.label}</button>`).join('')}</div><section id="lesson-panel" role="tabpanel" aria-labelledby="tab-${route.tab}" tabindex="0">${panel}</section><nav class="lesson-next" aria-label="Vorige en volgende stap">${lesson.id>1?`<a class="text-link" href="#stap/${lesson.id-1}">← Vorige stap</a>`:'<a class="text-link" href="#route">← De routekaart</a>'}${lesson.id<14?`<a class="btn primary" href="#stap/${lesson.id+1}">Volgende: ${esc(lessons[lesson.id].short)} ${nextArrow}</a>`:`<a class="btn primary" href="#route">Terug naar de route ${nextArrow}</a>`}</nav><p class="source-line">${esc(lesson.tagline)}<br>Handboek v3.1 · Stap ${lesson.id} · ${esc(lesson.sources)} · Opdracht ${lesson.prompts.map(num).join(', ')}. Studio Maan is een fictieve oefencasus.</p></article></div>`;
}

function pageHeading(eyebrow,title,text) {return `<header class="page-heading"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${text}</p></header>`;}
function renderExample() {return `<div class="page">${pageHeading('Het doorlopende voorbeeld','Een klein idee.<br>Een complete website.','Maak kennis met Studio Maan. Deze fictieve keramiekstudio maakt iedere stap tastbaar: van een eerste gedachte tot een gecontroleerde aanvraagroute. Je kunt hetzelfde denkwerk toepassen op je eigen project.')}<div class="example-layout"><div><section class="example-brief"><span class="example-note">Fictieve oefencasus</span><h2>Studio Maan</h2><p>Een kleine studio geeft keramiekworkshops. Informatie en vragen zitten nu verspreid over losse berichten. De eerste website moet bezoekers helpen een workshop te kiezen en een plek aan te vragen.</p><dl class="example-items section-gap"><div><dt>De gebruiker</dt><dd>Een beginner die een keramiekworkshop wil volgen.</dd></div><div><dt>Het eerste resultaat</dt><dd>Een aanvraag die de studio ontvangt en persoonlijk bevestigt.</dd></div><div><dt>Bewust klein</dt><dd>Geen betaling, ledenportaal of ingewikkeld boekingssysteem in de eerste versie.</dd></div></dl></section></div><div><div class="example-visual"><img class="layers-art" src="assets/lift-building-layers.png" alt="Zwevende witte en glazen ontwerplagen die samen een website verbeelden" width="1536" height="1024" loading="lazy"><p class="visual-caption">Een idee krijgt vorm, laag voor laag.</p></div><figure class="workshop-mock" style="margin-left:0;margin-right:0"><div class="mock-top"><i></i><i></i><i></i><span>VOORBEELDSCHERM · STUDIO MAAN</span></div><div class="mock-body"><div class="eyebrow">Even uit je hoofd. Iets in je handen.</div><h3>Je eerste keramiekworkshop.</h3><p>Ontdek klei, maak iets van jezelf en neem de tijd. Geen ervaring nodig.</p><div class="mock-date"><span>Zaterdag · 10.00 – 12.30</span><span>Voorbeelddatum</span></div><div class="mock-cta">Vraag een plek aan ↗</div></div><figcaption class="mock-caption">Illustratief scherm. Er worden geen aanvragen verstuurd.</figcaption></figure></div></div>${flow(lessons[3])}<section class="section-gap"><h2 class="editorial-title">Volg het voorbeeld door alle stappen.</h2><div class="example-timeline">${lessons.map(l=>`<a href="#stap/${l.id}/voorbeeld"><span class="step-number">${num(l.id)}</span>${esc(l.short)}<span class="jump" aria-hidden="true">↗</span></a>`).join('')}</div></section><div class="content-grid section-gap"><article class="info-card"><div class="eyebrow">De vertaalslag naar jouw project</div><h3>Houd de logica. Vervang de inhoud.</h3><p>Een workshopaanvraag kan in jouw project een offerteaanvraag, een inschrijving of een andere concrete taak zijn. Begin met één gebruiker en één aantoonbaar resultaat.</p><a class="text-link" href="#stap/1">Maak je eigen projectbrief ${icon('arrow')}</a></article><article class="info-card"><div class="eyebrow">Wat dit voorbeeld wel laat zien</div><h3>Beslissingen, geen verzonnen bewijs.</h3><p>De ingevulde voorbeelden laten zien wat je opschrijft en controleert. Interviews, aanvragen en tests zijn hier niet uitgevoerd voor een echte studio. In je eigen project verzamel je dat bewijs zelf.</p></article></div></div>`;}

const toolData = [
  ['Je ontwerp zichtbaar maken','Ontwerphulp','Het handboek gebruikt Stitch voor visuele schermontwerpen. Geef echte inhoud en de gewenste route mee en controleer de beschikbare exportmogelijkheden.','https://stitch.withgoogle.com/','Stitch','Stap 6 · Een ontwerp is nog geen werkende website'],
  ['Je AI-bouwomgeving','Van plan naar code','Het handboek draagt de bouw over aan Antigravity. Kies de omgeving die bij lokaal projectwerk past en laat de agent eerst de projectbestanden en afspraken controleren.','https://antigravity.google/','Antigravity','Stap 7–12 · Een andere passende bouwomgeving kan dezelfde rol vervullen'],
  ['Je project laten draaien','Alleen als je project dit nodig heeft','Node.js is een omgeving voor het uitvoeren van JavaScript buiten de browser. Laat je bouwer eerst vaststellen welke versie en startcommando’s jouw project nodig heeft.','https://nodejs.org/en/download','Node.js','Stap 7 · Installeer de vereisten van je project, niet alles uit een lijst'],
  ['Wijzigingen vastleggen','Versiebeheer','Git houdt een geschiedenis van wijzigingen bij. Laat de agent kleine, begrijpelijke versies vastleggen, zodat je weet wat is veranderd en kunt terugkijken.','https://git-scm.com/install/windows','Git voor Windows','Vanaf de bouw · Leg een gecontroleerde versie vast vóór publicatie'],
  ['Je code op afstand bewaren','Opslag & samenwerking','GitHub kan je Git-projectgeschiedenis op afstand bewaren. Spreek bewust af wie toegang heeft en welke bestanden gedeeld mogen worden.','https://docs.github.com/en/get-started/using-github/hello-world','GitHub-uitleg','Vanaf de bouw · Een bronrepository is op zichzelf geen live website'],
  ['Gebruikersroutes controleren','Testhulp','Playwright kan helpen browserhandelingen vast te leggen en tests opnieuw uit te voeren. Spreek eerst af wat je wilt controleren en welk resultaat je verwacht.','https://playwright.dev/docs/codegen','Playwright-uitleg','Stap 10–11 · Een opname alleen is nog geen geslaagde test'],
  ['Je website publiceren','Hosting uit het handboek','Het handboek gebruikt Railway als publicatieomgeving. De juiste hostingkeuze hangt af van jouw techniek, kosten en gewenste toegang. Laat die keuze vooraf uitleggen.','https://docs.railway.com/','Railway-documentatie','Stap 12 · Controleer de echte liveversie na publicatie'],
  ['Lokale diensten samen starten','Optioneel · Alleen bij containers','Docker Desktop kan nodig zijn als de gekozen projectopzet diensten in containers gebruikt. Een container verpakt een dienst met wat deze nodig heeft om te draaien.','https://docs.docker.com/desktop/setup/install/windows-install/','Docker voor Windows','Alleen op aanwijzing van je projectopzet · Niet nodig voor iedere website']
];
function renderTools() {return `<div class="page">${pageHeading('Een rustige gereedschapskist','Niet alles tegelijk.<br>Wel het juiste gereedschap.','Vibe coding betekent dat je met gewone taal en AI software laat bouwen. Jij blijft verantwoordelijk voor de richting en de controle. Begin met wat de huidige stap nodig heeft; je hoeft niet alle tools tegelijk te installeren.')}<div class="tool-grid">${toolData.map(([title,role,text,url,name,note])=>`<article class="tool-card"><span class="tool-role">${role}</span><h2>${title}</h2><p>${text}</p><a class="text-link" href="${url}" target="_blank" rel="noopener noreferrer">Open ${name} ${icon('external')}</a><small>${note}</small></article>`).join('')}</div><div class="spos-note"><strong>Controleer dit voordat je begint.</strong><br>Beschikbaarheid, abonnementen en exportfuncties kunnen veranderen. Bekijk de actuele voorwaarden bij de aanbieder. Geef je agent toegang tot de bedoelde projectmap en controleer apart of de SPOS-instructies aanwezig zijn. Wachtwoorden en geheime sleutels horen niet in gedeelde prompts of openbare bestanden.</div><div class="content-grid"><article class="info-card"><div class="eyebrow">Voor de bouw</div><h3>De runtime laat je project draaien.</h3><p>Een runtime is het programma dat je project uitvoert, bijvoorbeeld Node.js. Welke je nodig hebt, hangt af van de gekozen techniek. Laat in stap 7 de vereisten en bestaande startwijze vastleggen.</p><a class="text-link" href="#stap/7">Bereid de omgeving voor ${icon('arrow')}</a></article><article class="info-card"><div class="eyebrow">Voor publicatie</div><h3>Hosting geeft je website een adres.</h3><p>Kies een hostingomgeving die past bij de echte techniek en gewenste toegang. Laat de kosten, instellingen en herstelroute vooraf uitleggen. Controleer na publicatie de echte liveversie.</p><a class="text-link" href="#stap/12">Bekijk de livegang ${icon('arrow')}</a></article></div><section class="section-gap"><h2 class="editorial-title">Even vertalen naar gewone taal.</h2><dl class="glossary">${lessons.map(l=>`<div><dt>${esc(l.term[0])}</dt><dd>${esc(l.term[1])}</dd></div>`).join('')}</dl></section></div>`;}

function renderSPOS() {const questions=[['Wat proberen we op te lossen?','Maak gebruiker, probleem en beoogd resultaat concreet voordat je iets laat maken.'],['Waar baseren we dat op?','Scheid waarnemingen en bronnen van aannames. Laat AI onzekerheid expliciet benoemen.'],['Wat bestaat er al?','Onderzoek eerst wat je kunt uitbreiden, hergebruiken of aanpassen voordat je nieuwe onderdelen toevoegt.'],['Hoe weten we dat het werkt?','Spreek vooraf af wat je gaat controleren en bewaar het werkelijke resultaat van die controle.'],['Hoe kan iemand verantwoord verder?','Leg besluiten, de actuele werking, beperkingen, eigenaar en volgende stap vast in je projectdossier.']];return `<div class="page">${pageHeading('Het denkraam achter de route','SPOS geeft je<br>houvast onderweg.','SPOS is in dit handboek een werkwijze met instructies voor je AI-agent. Het helpt om eerst te begrijpen, keuzes te onderbouwen, zorgvuldig te bouwen en resultaten te controleren. Het neemt jouw beoordeling niet over.')}<section><h2 class="editorial-title">Vijf vragen die je steeds opnieuw stelt.</h2><ol class="spos-questions">${questions.map(([title,text],i)=>`<li><span class="action-n">${i+1}</span><div><h3>${title}</h3><p>${text}</p></div></li>`).join('')}</ol></section><section class="section-gap info-card"><div class="eyebrow">De controle vóór je eerste AI-opdracht</div><h2>“Gebruik SPOS” is pas bruikbaar als SPOS beschikbaar is.</h2><p>Alleen die woorden in een prompt zetten installeert niets. Controleer of je omgeving het SPOS-framework en de relevante instructies heeft. Gebruik de versie of installatie-instructie die je van de beheerder of maker hebt gekregen. Dit handboek geeft geen algemeen verifieerbare publieke installatielink.</p><ol class="action-list section-gap"><li><span class="action-n">1</span><div><h3>Controleer de huidige omgeving</h3><p>Vraag de agent welke SPOS-instructies hij daadwerkelijk kan lezen, welke versie of locatie hij vindt en welke route bij je taak past.</p></div></li><li><span class="action-n">2</span><div><h3>Los ontbrekende instructies zichtbaar op</h3><p>Vraag de beheerder om het juiste pakket of de toegestane instructies. Laat de agent niet doen alsof de volledige SPOS-route geladen is wanneer die ontbreekt.</p></div></li><li><span class="action-n">3</span><div><h3>Werk verder met duidelijke grenzen</h3><p>Je kunt de vijf vragen en deze leerroute gebruiken zolang het framework ontbreekt. Benoem dat als een gewone werkwijze op basis van de uitleg, zonder claim dat de volledige SPOS-instructies zijn toegepast.</p></div></li></ol></section><div class="spos-note"><strong>Jij houdt het overzicht.</strong><br>Een instructiekader garandeert geen foutloze AI-uitkomst. Vraag naar het gelezen bestand, de onderbouwing en het uitgevoerde bewijs. Controleer het resultaat dat voor jouw gebruiker telt.</div><div class="content-grid"><article class="info-card"><div class="eyebrow">Een kleine vaste projectmap</div><h3>Houd de context bij je project.</h3><p>Bewaar de projectbrief, onderzoek, aanbod, flows, schermteksten, ontwerp, bouwplan, tests en overdracht met herkenbare namen. De lessen laten zien welk document je bij iedere stap toevoegt.</p><a class="text-link" href="#stap/7">Bekijk de overdracht naar de bouw ${icon('arrow')}</a></article><article class="info-card"><div class="eyebrow">Verder lezen</div><h3>Het volledige handboek.</h3><p>Deze leeromgeving vertaalt het handboek naar veertien overzichtelijke stappen. Het oorspronkelijke document bevat de verdieping, procesbeschrijvingen, bronnen en alle opdrachten.</p><a class="text-link" href="downloads/handboek.md" download>Download handboek v3.1 ${icon('arrow')}</a></article></div></div>`;}

function renderPrompts() {return `<div class="page">${pageHeading('Je AI-opdrachten, op één plek','Een goede opdracht<br>geeft richting.','Alle 28 genummerde opdrachten uit het handboek, met hun oorspronkelijke tekst. Open een opdracht voor de benodigde context en de omgeving waarin je haar gebruikt. Je hoeft ze niet allemaal voor ieder project uit te voeren.')}<div class="library-help"><p><strong>Begin met context.</strong> Geef je documenten mee, controleer of SPOS beschikbaar is en vervang eventuele [invulvelden]. Beoordeel daarna de echte uitkomst.</p><a class="btn secondary" href="#spos">Hoe werkt SPOS? ↗</a></div>${phases.map(phase=>`<section class="library-group"><h2>${num(phase.id+1)} · ${phase.name}</h2><p>${phase.caption}</p>${lessons.filter(l=>l.phase===phase.id).flatMap(l=>l.prompts).sort((a,b)=>a-b).map(id=>promptCard(id)).join('')}</section>`).join('')}</div>`;}

function render() {
  const route = parseRoute(location.hash);
  const sameLesson = route.page==='lesson' && previousRoute?.page==='lesson' && route.id===previousRoute.id;
  const pages = {route:renderHome,lesson:()=>renderLesson(route),voorbeeld:renderExample,tools:renderTools,spos:renderSPOS,opdrachten:renderPrompts,missing:()=>`<section class="empty-state"><p class="eyebrow">Even opnieuw oriënteren</p><h1>Deze stap kunnen we niet vinden.</h1><p>De leerroute heeft veertien stappen. Kies in het overzicht waar je verder wilt.</p><a class="btn primary" href="#route">Naar de routekaart ${nextArrow}</a></section>`};
  main.innerHTML = pages[route.page]();
  const titles = {route:'Van idee naar live',voorbeeld:'Studio Maan — het voorbeeldproject',tools:'Gereedschappen',spos:'De SPOS-werkwijze',opdrachten:'28 AI-opdrachten',missing:'Pagina niet gevonden'};
  document.title = `${route.page==='lesson'?`Stap ${route.id} · ${lessons[route.id-1].title}`:titles[route.page]} — Lift`;
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
  const copyButton = event.target.closest('[data-copy]');
  if(copyButton) {
    const id=Number(copyButton.dataset.copy), text=prompts.find(p=>p.id===id)?.text;
    if(!text) return;
    try {
      if(!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      showNotice(`Opdracht ${num(id)} gekopieerd. Voeg je eigen context toe in je AI-omgeving.`);
    } catch {
      const field=document.querySelector(`#prompt-text-${id}`);
      if(field) {field.focus();field.select();}
      showNotice('Kopiëren is niet beschikbaar. De tekst is geselecteerd; kopieer deze zelf.');
    }
  }
});
main.addEventListener('change',event=>{if(event.target.id==='step-select'){const id=Number(event.target.value);if(id>=1 && id<=14)location.hash=`stap/${id}`;}});
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
window.addEventListener('hashchange',render);
render();
