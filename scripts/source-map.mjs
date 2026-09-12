import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {lessons,phases} from '../dist/content.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const text=`# Bronmapping en redactionele keuzes

12 september 2026. De applicatie gebruikt één aangeleverd handboek. De voorbeelden zijn toegevoegd voor deze leeromgeving. Meerdere processen of broncodes binnen hetzelfde handboek gelden niet als onafhankelijke bronnen.

| Code | Bron | Gebruik | Bewijsgrens |
|---|---|---|---|
| S01 | Mijn_werkwijze_van_idee_tot_markt_SPOS.md v3.1 | Volledig gelezen; 14 stappen en 28 opdrachten, redactioneel aangepast voor de lezerseditie | Primaire bron voor de werkwijze in het document; historische uitvoeringen niet onafhankelijk bevestigd |
| S02 | Eerdere SPOS-analyse in ../analyse/SPOS_analyse_werkwijze_v3.1.md | Verbeterpunten voor zelfstandige beginnersroute | Analyse van S01; geen afzonderlijke empirische gebruikerstest |
| S03 | https://advey.ai/ | Visuele referentie, inhoud en screenshot bekeken op 12 september | IJsblauw, donkerblauw, ruime typografie, ronde knoppen, zachte schaduwen; geen commerciële claims overgenomen |
| S04 | Officiële leverancierslinks uit S01 | Gereedschappenpagina | In eerdere broncontrole geraadpleegd; kosten en functies kunnen wijzigen |
| S05 | Twee originele gegenereerde illustraties | Gewichtloze vliegtuig- en ontwerplagenvisual | Illustratief; generatie-instructies in IMAGE_PROMPTS.md |
| S06 | SPOS 4.7.0 lokale CORE/BUILD/RESEARCH/PRODUCT-instructies | Werkmethode en dossierstructuur | Instructiekader, geen bewijs van geleverde productkwaliteit |

De publicatiemap bevat nu de bewerkte VIBE Lift-lezerseditie 1.1. De oorspronkelijke bron buiten de publicatiemap heeft SHA256 b9d113362560d98decd21cc958815cc58022b4d2e1b542acbc409c9138d44072. De hash van de actuele lezerseditie staat in validation.json.

## Les naar bron

| Stap | Fase | Les | Procescodes in bron | Opdrachten | Concreet resultaat |
|---|---|---|---|---|---|
${lessons.map(l=>`| ${l.id} | ${phases[l.phase].name} | ${l.title} | ${l.sources} | ${l.prompts.map(n=>String(n).padStart(2,'0')).join(', ')} | ${l.output} |`).join('\n')}

## Wat redactioneel is toegevoegd

- Uitleg in gewone taal, concrete handelingen, doel/input/output, begrippen en visuele mini-flows.
- Het fictieve voorbeeld Studio Maan, met op iedere stap een ingevuld resultaat of testopzet. Er zijn geen echte interviews, aanvragen of resultaten voor deze studio.
- Praktische context vóór elke prompt, los van de kopieerbare opdrachttekst.
- De interne SPOS-methode is geen vereiste voor bezoekers. De werkwijzepagina en opdrachten beschrijven zelfstandige, concrete handelingen.
- Stap 3: een door AI ontworpen praktijktoets moet echt worden uitgevoerd voordat een besluit op waarnemingen kan rusten.
- Stap 7: omgeving en startpad moeten de bouw/testcyclus ondersteunen. Stap 9 maakt het starten begrijpelijk voor de eigenaar.
- Stap 10: bevindingen bevatten een eigenaar en een hertest naast handeling, verwachting, waarneming en status.
- Bronhistorie, niet-herhaalbare auditcijfers en interne onzekerheden zijn niet als reclame- of succesclaims gebruikt.

## Actualiteit en onderhoud

Werk lessen alleen bij op basis van de bedoelde bronversie. Houd de actuele opdracht zichtbaar gescheiden van uitleg of extra context. Genereer prompts.js na wijzigingen uit de lezerseditie. Voer de validator na inhoudswijzigingen opnieuw uit. Controleer externe links bij een relevante wijziging of gemelde fout; er is geen automatische monitor ingesteld.
`;
fs.writeFileSync(path.join(root,'docs/BRONMAPPING.md'),text);
console.log('Source mapping written for fourteen lessons.');
