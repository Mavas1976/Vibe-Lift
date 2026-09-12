# Bronmapping en redactionele keuzes

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
| 1 | Begrijpen | Maak je idee concreet | P01–P03 | 01 | projectbrief.md |
| 2 | Begrijpen | Onderzoek het probleem | P04–P05 | 02 | onderzoek.md |
| 3 | Begrijpen | Scherp je aanbod aan | P06–P08 | 03, 04 | propositie.md + praktijktoets.md |
| 4 | Ontwerpen | Teken de gebruikersroute | P09–P10 | 05 | flows.md |
| 5 | Ontwerpen | Bepaal pagina’s en teksten | P11–P12 | 06, 25 | schermen.md + teksten.md |
| 6 | Ontwerpen | Geef je idee een gezicht | P13–P14 | 07, 08 | ontwerp/ + ontwerpafspraken.md |
| 7 | Bouwen | Zet de bouw goed klaar | P15–P17 | 09, 10, 26 | bouwplan.md + architectuur.md |
| 8 | Bouwen | Bouw één complete route | P19 | 11 | Een werkende route + controlebewijs |
| 9 | Bouwen | Start je project zelf | P16, P18 | 12, 13 | START_PROJECT.bat + startinstructie.md |
| 10 | Verbeteren | Test als een echte gebruiker | P20–P21 | 14, 15 | bevindingen.md |
| 11 | Verbeteren | Controleer de hele keten | P22 | 16, 17, 18, 28 | releasecheck.md + bijgewerkt dossier |
| 12 | Lanceren | Zet je website live | P23–P25 | 19, 20 | release.md + gecontroleerde live-URL |
| 13 | Lanceren | Nodig je eerste gebruikers uit | P26–P27 | 21, 22 | introductieplan.md + leersignalen.md |
| 14 | Lanceren | Blijf rustig doorbouwen | P28 | 23, 24, 27 | overdracht.md + gebruikershandleiding.md |

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
