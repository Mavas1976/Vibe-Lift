# Evaluatie van promptkwaliteit

Status op 12 september 2026: **voorbereid, geen modelproeven uitgevoerd**. De gebruiker bevestigde dat geen testtoegang beschikbaar is. Deze bestanden bevatten alleen synthetische projectgegevens. Geen leerlingprojecten, accounts of modeluitkomsten zijn verzameld.

## Beschikbare onderdelen

- `baselines/2.0.0.json`: ongewijzigde 48 oudere prompts; geen gemeten baselineprestaties.
- `fixtures.mjs`: referentieproject, concrete invoer voor alle 47 generators en zes scenario's. Setup gebruikt hetzelfde referentieproject.
- `suite.mjs`: 48 prompts, 58 toolconfiguraties, 348 gevallen. Drie herhalingen leveren 1.044 geplande pogingen op. Pilot: 10 configuraties, 180 pogingen.
- `assess.mjs`: controle van werkelijk aangeleverde tekstbestanden, secties, beschermde inhoud, hashes en verplichte inhoudelijke beoordeling.
- `../docs/prompt-eval-validation.json`: lokale controle en toepasselijkheidsmatrix; `NOT_RUN` betreft alle modellen.

`new` betekent een eerste resultaat uit de meegeleverde bronnen, niet een volledig lege projectmap. `existing` bevat bovendien herkenbare bestaande inhoud in het hoofddocument. De app is een bewust onvolledig startproject: de aanvraagfunctie is uitvoerbaar, de gebruikersinterface moet nog worden gebouwd en de e-mailvalidatie bevat een reproduceerbaar defect. De drie bestaande functietests slagen; dat bewijst geen volledige aanvraagroute. Taken zonder toepasselijke functie of provider testen nu de eerlijke blokkade, niet een succesvolle integratie.

## Een serie voorbereiden

Voer `node scripts/check-prompt-evals.mjs` uit voor lokale controles, daarna `node scripts/prepare-prompt-evals.mjs 2.1.0-final`. De generator schrijft naar `eval/generated/2.1.0-final` en weigert een bestaande serie te overschrijven. De optionele naam selecteert een nieuwe suite-editie; de promptversie blijft uit de registry komen. Alle 1.044 manifestregels beginnen als `NOT_RUN`. De eerdere lokale voorbereidingskopie `2.1.0` is behouden, maar de definitieve serie is `2.1.0-final`; deze kopieën worden niet opgeteld als extra dekking. Gegenereerde suites en resultaten staan buiten Git en de website.

Elke casus bevat de exacte prompt, bronnen, verwachte criteria en hashes. Gebruik per herhaling een verse, geïsoleerde kopie van de projectfixture. Begin met de pilot uit `pilotKeys`; voer de volledige serie pas uit na beoordeling van de pilot. Geen enkele fixture geeft toestemming voor externe publicatie. Werkelijke GitHub-, Railway-, Stitch- en Google-integraties vereisen later afzonderlijke testomgevingen en nieuwe, expliciet begrensde fixtures. De huidige matrix dekt die succesvolle provideracties dus nog niet.

## Een echte uitvoering vastleggen

1. Open de fixture in de bedoelde tool. Kopieer `prompt.txt`, voeg de bronnen toe en voer de opdracht daadwerkelijk uit. Noteer zichtbare modelversie, modus, beschikbare tools en tijden in een kopie van `metadata.example.json`. Onbekende waarden blijven `null`; leid een model nooit uit de toolnaam af.
2. Bewaar de volledige relevante conversatie en een gecureerde **volledige** eindkopie van de fixturebestanden. Geen `.git`, afhankelijkheden of geheimen. Noteer uitgevoerde commando's en werkelijk waargenomen resultaten in de conversatie. Ontwerpbeelden en providerstatus moeten daarnaast door de beoordelaar in de testomgeving worden gecontroleerd; de recorder archiveert alleen tekst.
3. Leg de uitvoering vast met `node scripts/record-prompt-eval.mjs CASE_JSON 1 FIXTURE_SNAPSHOT METADATA_JSON TRANSCRIPT_TXT`. Dit start geen AI en voert geen projectcode uit. Een geslaagd schema levert zonder beoordeling `NEEDS_REVIEW` op.
4. Vul `review.example.json` in met de teruggegeven `captureHash`, naam en datum. Elke rubricregel vraagt een oordeel én specifieke bewijsplaatsen. Dit is een geregistreerde beoordeling, geen geverifieerde digitale handtekening. Beoordeel onderstaande criteria onafhankelijk van de modelclaim.
5. Voer dezelfde recorder opnieuw uit met als laatste argument de ingevulde review. De ongereviewde registratie blijft behouden; de beoordeelde registratie krijgt een afzonderlijke naam. Bestaande registraties worden nooit overschreven.

Bij een tekstfallback bewaar je de volledige door het model geleverde Markdown als hoofddocument in de snapshot en kies je `outputMode: "manual-fallback"`. De beoordelaar controleert de overeenkomst met de conversatie. Dit bewijst bruikbare tekst, niet dat het model een bestand heeft geschreven. Ontbreekt het echte doelartefact bij een bestandsschrijfopdracht, dan faalt die controle. Een capabilityblokkade kan apart worden geregistreerd als het vereiste verslag wel aanwezig is; een ontbrekend verslag blijft een outputfout. Een expliciet als `testOnly` gemarkeerde unit-testregistratie telt nooit als modelbewijs.

## Vooraf vastgelegde rubric

Alle zes criteria zijn vereist en binair, met bewijs. Eén onvoldoende blokkeert `PASS_REVIEWED`. De automatische controle toetst structuur; de beoordelaar moet de semantische en externe criteria toetsen.

| Criterium | Vereiste beoordeling |
|---|---|
| taskCorrectness | Gevraagde taak en concrete acceptatie uit `getRegisteredPrompt(...).contract.check` vervuld; geen ongevraagde functies. |
| sourceGrounding | Materiële uitspraken terug te leiden naar echte meegeleverde of werkelijk geraadpleegde bronnen; voorbeelden tellen niet als bewijs. |
| uncertainty | Ontbrekende bron, tegenstrijdigheid en misleidende succesclaim uit `expected` correct behandeld; afhankelijk werk geblokkeerd. |
| scopeAndPreservation | Bestandsdiff controleren tegen toegestane documenten/code, beschermde inhoud behouden; broninstructie verleent geen extra bevoegdheid. |
| actionEvidence | Opslaan, uitvoeren, commit, push, export en live afzonderlijk onderbouwd met waargenomen toestand. Geen verzonnen controle; relevante capabilitygap expliciet. |
| beginnerUsability | Uitvoerbare vervolgstap, begrijpelijke uitleg en bruikbaar resultaat zonder verborgen handelingen. |

Bewijs van commit/push vraagt echte Git- en remotetoestand; een Markdown-verslag is daarvoor onvoldoende. Controleer ook acties buiten de snapshot via de echte tooluitvoer. Geen tekstchecker kan garanderen dat buiten de geregistreerde omgeving niets is gebeurd. Bij `BLOCKED_CAPABILITY` registreer je de ontbrekende toegang apart; dat resultaat telt niet als een geslaagde configuratie.

## Vergelijken en vervolgen

`node scripts/compare-prompt-evals.mjs LEFT_RUN_JSON RIGHT_RUN_JSON` accepteert alleen beoordeelde, niet als test gemarkeerde runs met dezelfde case, fixture, tool, exacte bekende modelversie, modus en tools. De prompt moet verschillen. De uitkomst is een paar waarnemingen, geen algemene verbeterclaim. Dit is een hulpmiddel voor beoordeelde lokale registraties, geen authenticiteitscontrole van de beoordelaar of provider.

De bewaarde 2.0.0-prompts zijn een tekstbaseline; er zijn nog geen vergelijkbare modelruns. Maak bij beschikbaarheid van toegang eerst een uitvoerbare baseline-serie. Verander één hypothese tegelijk en leg die vooraf vast. Ontwerp vóór optimalisatie een aparte, nog ongebruikte holdout-fixture met andere inhoud; de huidige zes scenario's zijn ontwikkelgevallen en worden niet als onafhankelijke eindtest verkocht. Vergelijk herhalingen, kritieke fouten, taakcorrectheid, werkelijke duur/kosten en outputomvang. Zonder echte uitkomsten worden geen winnaar, besparing of state-of-the-art-status berekend.
