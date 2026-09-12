# SPOS-audit en verbetering van alle promptgenerators

| Scope | Onderzocht | Bewijsniveau |
|---|---|---|
| Actieve website | `dist/` in deze repository; 14 stappen, 42 routeopdrachten, 5 SEO-opdrachten en de startopdracht | Broncode en uitgevoerde contracttests |
| Samenstellen en kopiëren | Alle toegestane toolkeuzes, ingevulde en ontbrekende invoer, opslagfallback, kopieerhandler | Uitgevoerde Node-tests met nagebootst klembord |
| Lesuitleg en downloads | Lesresultaten, mapgids, beide volledige Markdown-downloads | Bronvergelijking en tests |
| Daadwerkelijke modelantwoorden | ChatGPT, Claude, Stitch en Antigravity | **NIET GETEST**; geen modeluitvoering of bestanden van deze tools onderzocht |
| Historische kopieën | `site-design`, losse bronbibliotheek en review/exportmappen buiten deze repository | Buiten scope: niet de actieve generatorbronnen |

Datum: 12 september 2026. Complexiteit: L. Primaire route: SPOS Prompt Engineering; secundair SPOS Audit, met Core 4.7.0 en Truth Contract. Prompteditie: 2.0.0. Dit is een code- en instructieaudit, geen certificering van modelgedrag.

## Uitkomst

Alle 47 generators hebben een expliciet contract voor één primair, volledig Markdown-document in de projectroot. De startopdracht maakt START-HIER.md. De contracten omvatten een passende rol, stapdoel, relevante eerdere documenten, drie specifieke inhoudssecties, bewijsdiscipline, blokkades en een eindcontrole. Bouw- en ontwerptaken blijven hun eigen werk doen en leggen dat vast in het document.

De interface noemt de bestandsnaam en de opslagactie. Bestandsbijlage, lokaal schrijven en handmatig opslaan zijn onderscheiden. De instructies verbieden een opslagclaim zonder daadwerkelijke schrijfactie. Dit kan modelnaleving niet afdwingen: vooral de feitelijke Markdown-mogelijkheden van Stitch blijven nog te toetsen.

## Bevindingen en falsificatie

De nulhypothese was dat de bestaande prompts met hun gedeelde instructies al een volledig, passend rootdocument opleverden. Daarom is niet alleen de losse prompt gecontroleerd, maar ook `composePrompt`, `expectedResult`, de mapgids en de downloads. Hieronder staat wat na die tegencontrole overeind bleef.

| ID | Ernst | Waarneming vóór herstel | Tegencontrole | Herstel |
|---|---|---|---|---|
| AUD-COR-001 | HOOG | 21 van de 42 routeopdrachten bevatten geen concrete .md-naam: 7, 8, 10, 13, 16, 18, 19, 29–42. | De gedeelde opslagzin verwees naar een “genoemde bestandsnaam” die bij deze opdrachten ontbrak; resultaatteksten boden niet steeds een naam. | Alle 47 krijgen een vaste rootbestandsnaam via `prompt-contracts.js`; ook GitHub en SEO. |
| AUD-COR-002 | HOOG | De andere 21 routeopdrachten verwezen naar `02-plan/` t/m `06-overdracht/`. | De mapgids bevestigde die submappen; dit was intern grotendeels consistent, maar strijdig met het huidige expliciete rootverzoek. | Actuele Markdown-resultaten naar de root; lessen, tooloverdracht en downloads aangepast. Oude bestanden blijven behouden en worden eerst geïdentificeerd. |
| AUD-DATA-003 | MIDDEN | Opdracht 14 liet testvoorbereiding in `bevindingen.md` schrijven; opdracht 15 werkte datzelfde bestand bij met echte fouten. | De oorspronkelijke prompt 14 onderscheidde gepland en uitgevoerd niet met afzonderlijke bestanden of status. | `testplan.md` voor voorbereiding; `bevindingen.md` voor echte bevindingen en hertests. |
| AUD-ARCH-004 | MIDDEN | Composer, basisteksten, mapgids en resultaten herhaalden lees-, bron- en opslagafspraken. GitHub 41/42 omzeilden het gedeelde blok. SEO 3/5 werden bovendien in `getPrompt` herschreven. | Sommige herhaling was contextueel nuttig, maar de tweede SEO-definitie en uitgezonderde GitHub-route maakten inhoudsdrift mogelijk. | Eén compositor met één outputblok; taakdoel en contract gescheiden; geen verborgen SEO-overschrijving. Geen automatische deduplicatie van gebruikersinvoer, omdat die inhoud kan verliezen. |
| AUD-DOC-005 | MIDDEN | Het handboek bevatte korte basisopdrachten terwijl de generator uitgebreidere opdrachten kopieerde. | De bestaande synchronisatie hield de basisversie actueel, maar nam het volledige outputcontract niet over. | Beide downloads gebruiken exact `templatePrompt` van de actieve composer. Omhullende codefences sluiten niet voortijdig door ingesloten invoerblokken. |
| AUD-SCOPE-006 | MIDDEN | Optionele opdracht 29 onder stap 3 en koppeling 40 onder stap 7 konden al tot bouwen/aanpassen leiden. | “Afgesproken” beperkte de scope enigszins, maar het onderscheid tussen vroeg besluit en latere uitvoering ontbrak. | Eerst scopebesluit respectievelijk gegevenscontract; uitvoering alleen bij een concrete, al nagekeken bouwopdracht. |
| AUD-SEC-007 | MIDDEN | Opdracht 41 verving pushtekst via exacte tekstregels en bood in een lege preview nog een pushinstructie. | De UI blokkeerde kopiëren bij lege verplichte invoer; dit beperkte de directe impact. De algemene download en preview bleven echter minder duidelijk. | Push alleen bij exact twee toegestane keuzewaarden; leeg, onbekend en vrije tekst blijven lokaal. Geen wijziging van toestemming door tekst in invoervelden. |
| AUD-TEST-008 | MIDDEN | Bestaande tests controleerden invoer, opslag en toolkeuze, maar niet per generator een rootdocument, secties of uitvoerstatus. | De oude tests waren waardevol, maar een PASS bewees de gevraagde documentoplevering niet. | Nieuwe contracttests, inhoudshashes en expliciete `model_execution: NOT_TESTED`. |

Impact van AUD-COR-001/002: [AFGELEID] een gebruiker kan een los chatantwoord of bestand op de verkeerde plek krijgen, waardoor de volgende stap onvoldoende context heeft. Dit risico is uit de instructies afgeleid, niet uit geobserveerde modelruns.

## Ontwerpkeuzes

- Taakdoelen blijven in `prompts.js` en `seo.js`; concrete outputcontracten staan centraal in `prompt-contracts.js`. De composer maakt de uiteindelijke prompt, inclusief rol en gekozen AI-tool.
- Eén primair document per opdracht voorkomt onduidelijke eindproducten. De scherminhoud en teksten staan samen in `schermen.md`; herzieningen gebruiken dezelfde bestandsnaam. Extra code, starters, exports en testbijlagen blijven mogelijk als de taak die vereist.
- De bronketen noemt relevante bestanden, maar gaat niet uit van automatische toegang. Ontbrekende essentiële informatie resulteert in een gedeeltelijk onderbouwd document met blokkade, geen verzonnen volledigheid.
- Invoer wordt letterlijk bewaard in dynamisch afgeschermde tekstblokken. De fence is langer dan een backtickreeks in de invoer. Dit voorkomt syntactisch uitbreken uit het blok, maar is geen technische garantie tegen prompt injection in een model.
- Algemene regels staan één keer in de samengestelde prompt. Stapgebonden acceptatiecriteria vormen een inhoudelijke controle, geen herdruk van het taakdoel.
- Er wordt geen SPOS-installatie vereist van de cursist; de relevante discipline staat zelfstandig in de gekopieerde tekst.

## Risico-overzicht en score

Scores zijn kwalitatieve ontwerpbeoordelingen van de huidige bron, geen gemeten succeskansen. Geen samengestelde eindscore: daarvoor ontbreekt uitvoeringsbewijs van de AI-antwoorden.

| Dimensie | Oordeel /10 | Hoogste oorspronkelijke ernst | Onderbouwing en resterende grens |
|---|---:|---|---|
| Correctheid | 8 | HOOG | Bestandsnaam, rootlocatie en inhoud zijn expliciet en structureel getest; modelnaleving onbekend. |
| Architectuur | 9 | MIDDEN | Eén composer voor UI en downloads; een contract per generator. |
| Security | 7 | MIDDEN | Invoergrenzen en exact begrensde publicatiekeuze; geen claim van gegarandeerde modelweerstand. |
| Performance | 8 | INFO | Lokale tekstcompositie; bestaande veldlimieten en opslaglimiet behouden. Geen runtimebenchmark. |
| Kosten | 8 | INFO | Website doet geen modelcalls. Prompts zijn langer door volledige documentinstructies; modelkosten niet gemeten. |
| Datakwaliteit | 8 | MIDDEN | Bronnen, conflicten en geplande versus echte tests onderscheiden. |
| Compliance | — | INFO | Geen juridische compliance-audit; alleen bronbehandeling en privacy in prompts beoordeeld. |
| Observability | 8 | MIDDEN | Versie, per-prompt hash en testresultaten vastgelegd; geen telemetry van modeluitvoering. |
| Documentatie | 9 | MIDDEN | Actieve lessen en beide downloads gebruiken dezelfde rootafspraken. |
| Testbaarheid | 8 | MIDDEN | Iedere generator en toolvariant is deterministisch testbaar; geen externe model- of gebruikerstest. |

Sterke bestaande punten die behouden zijn: tijdelijke lokale invoeropslag, geen versturen van projectdata, toolkeuze per opdracht, één thuisstap per ID, behoud van andermans wijzigingen en geen fictieve testresultaten.

## Verificatie en vervolg

Uitgevoerd: generatorcontracten met zes scenario’s per toegestane tool, normale kopieerhandler en geweigerd klembord voor alle prompts, ontbrekende verplichte velden, lege drafts, exacte pushkeuzes, unieke instructieparagrafen en zinnen, beide downloads en hoofddocumenten per les. De bestaande invoer-, redactie- en routevalidators blijven actief. De actuele aantallen en resultaten staan in de JSON-rapporten.

De twee belangrijkste falsificatiemogelijkheden blijven: een AI-tool kan ondanks de prompt het bestand niet leveren, en een model kan inhoudelijk verkeerde of herhaalde tekst genereren. De statische tests ontdekken dat niet. Voor empirische acceptatie: voer per tool twee normale en twee onvolledige/conflicterende gevallen plus een misleidende bron uit. Controleer het daadwerkelijke document op bestandsnaam, volledige inhoud, stapfit, bewijs, doublures en correcte opslagstatus. Herhaal representatieve prompts drie keer voordat stabiliteit wordt geclaimd.

Prioriteiten: (1) de expliciete outputcontracten behouden; (2) geen verkorte parallelle downloads invoeren; (3) de bronketen bij nieuwe stappen bijwerken; (4) echte modelruns uitvoeren vóór een claim dat alle tools betrouwbaar bestanden leveren; (5) mislukte modelgevallen als regressiecasus toevoegen.

## Matrix per generator

De onderstaande inventaris wordt uit de gecontroleerde contracten toegevoegd. Elke rij is inhoudelijk beoordeeld op de rol, het stapdoel, de benodigde input, het resultaat en de eindcontrole. `prompt-contract-validation.json` bewaart alle secties en acceptatiecriteria per rij.

<!-- CONTRACT_MATRIX -->

| Opdracht | Stap | Doel | Rootdocument | Contracttest | Modelrun |
|---|---|---|---|---|---|
| 1 | Stap 1 | Maak je projectbrief | projectbrief.md | PASS | NIET GETEST |
| 2 | Stap 2 | Onderzoek je probleem met bronnen | onderzoek.md | PASS | NIET GETEST |
| 3 | Stap 3 | Schrijf een duidelijk aanbod | propositie.md | PASS | NIET GETEST |
| 4 | Stap 3 | Bereid een kleine praktijktoets voor | praktijktoets.md | PASS | NIET GETEST |
| 5 | Stap 4 | Schrijf de bezoekersroute uit | flows.md | PASS | NIET GETEST |
| 6 | Stap 5 | Maak je schermenlijst en teksten | schermen.md | PASS | NIET GETEST |
| 7 | Stap 6 | Ontwerp je schermen in Stitch | ontwerp.md | PASS | NIET GETEST |
| 8 | Stap 6 | Verbeter het ontwerp in Stitch | ontwerp.md | PASS | NIET GETEST |
| 9 | Stap 7 | Lees de projectmap en maak het bouwplan | bouwplan.md | PASS | NIET GETEST |
| 10 | Stap 7 | Laat website, demo en inloggen aansluiten | routecontrole.md | PASS | NIET GETEST |
| 11 | Stap 8 | Bouw de eerste complete bezoekersroute | bouwcontrole.md | PASS | NIET GETEST |
| 12 | Stap 9 | Maak een eenvoudig startbestand | startinstructie.md | PASS | NIET GETEST |
| 13 | Stap 9 | Open de huidige website lokaal | lokale-sessie.md | PASS | NIET GETEST |
| 14 | Stap 10 | Bereid mijn test voor | testplan.md | PASS | NIET GETEST |
| 15 | Stap 10 | Herstel de fout die ik heb gevonden | bevindingen.md | PASS | NIET GETEST |
| 16 | Stap 11 | Maak de pagina’s duidelijker | ux-controle.md | PASS | NIET GETEST |
| 17 | Stap 11 | Controleer de hele website vóór publicatie | releasecheck.md | PASS | NIET GETEST |
| 18 | Stap 11 | Maak een herhaalbare testopdracht | testinstructie.md | PASS | NIET GETEST |
| 19 | Stap 12 | Maak de bestanden geschikt voor publicatie | publicatiebestanden.md | PASS | NIET GETEST |
| 20 | Stap 12 | Zet de goedgekeurde versie op Railway | release.md | PASS | NIET GETEST |
| 21 | Stap 13 | Maak een uitnodiging voor je eerste bezoekers | introductieplan.md | PASS | NIET GETEST |
| 22 | Stap 13 | Controleer de eerste ervaring | leersignalen.md | PASS | NIET GETEST |
| 23 | Stap 14 | Bewaar je werk aan het einde van de sessie | overdracht.md | PASS | NIET GETEST |
| 24 | Stap 14 | Lees het project en hervat je werk | sessiestart.md | PASS | NIET GETEST |
| 25 | Stap 5 | Leg de gebouwde pagina’s en teksten vast | schermen.md | PASS | NIET GETEST |
| 26 | Stap 7 | Leg uit hoe de website technisch werkt | architectuur.md | PASS | NIET GETEST |
| 27 | Stap 14 | Schrijf de gebruikershandleiding | gebruikershandleiding.md | PASS | NIET GETEST |
| 28 | Stap 11 | Controleer of de handleiding nog klopt | documentatiecheck.md | PASS | NIET GETEST |
| 29 | Stap 3 | Beperk de website tot de eerste versie | scope-eerste-versie.md | PASS | NIET GETEST |
| 30 | Stap 11 | Verbeter het gebruik op een telefoon | mobiele-controle.md | PASS | NIET GETEST |
| 31 | Stap 11 | Controleer de talen van je website | talencontrole.md | PASS | NIET GETEST |
| 32 | Stap 8 | Controleer waar gegevens naartoe gaan | gegevenscontrole.md | PASS | NIET GETEST |
| 33 | Stap 11 | Onderzoek traagheid en kosten | prestatieonderzoek.md | PASS | NIET GETEST |
| 34 | Stap 11 | Controleer de beloften op je website | claimcontrole.md | PASS | NIET GETEST |
| 35 | Stap 14 | Bereid een overstap naar andere software voor | overstapplan.md | PASS | NIET GETEST |
| 36 | Stap 8 | Controleer de AI-functie in je eigen product | ai-functiecontrole.md | PASS | NIET GETEST |
| 37 | Stap 14 | Voer één wijziging overal door | wijzigingsverslag.md | PASS | NIET GETEST |
| 38 | Stap 13 | Controleer vindbaarheid en bezoekersmeting | seo-meetcontrole.md | PASS | NIET GETEST |
| 39 | Stap 14 | Ruim dubbele code en uitleg op | opruimverslag.md | PASS | NIET GETEST |
| 40 | Stap 7 | Maak de afgesproken softwarekoppeling | koppeling.md | PASS | NIET GETEST |
| 41 | Stap 12 | Bewaar je wijzigingen op GitHub | github-versie.md | PASS | NIET GETEST |
| 42 | Stap 7 | Koppel je project aan GitHub | github-koppeling.md | PASS | NIET GETEST |
| s1 | SEO-les 1 | Zoekvraag & inhoud | seo-plan.md | PASS | NIET GETEST |
| s2 | SEO-les 2 | Technische basis | seo-bouwcontrole.md | PASS | NIET GETEST |
| s3 | SEO-les 3 | Plaats het Google-verificatiemiddel | search-console.md | PASS | NIET GETEST |
| s4 | SEO-les 4 | Bouw de afgesproken Analytics-meting | analytics.md | PASS | NIET GETEST |
| s5 | SEO-les 5 | Meten & verbeteren | groeiplan.md | PASS | NIET GETEST |
| Start | Voor stap 1 | Projectmap inrichten | START-HIER.md | PASS | NIET GETEST |
