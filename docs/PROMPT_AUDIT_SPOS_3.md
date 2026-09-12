# Audit: zijn alle promptgenerators aantoonbaar geavanceerd en SPOS-conform?

| Scope | Bewijs | Grens |
|---|---|---|
| Alle actieve generators | 42 stapopdrachten + 5 SEO-generators, samen 57 toegestane toolvarianten | Historische kopieën en exports zijn geen actieve generatorbron. |
| Aanvullende startopdracht | Eén vaste prompt, zichtbaar in de mapuitleg en werkwijze; samen 48 verschillende opdrachten | Geen 48e invulbare generator. |
| Beoordeelde versie | Promptcontract 2.0.0; snapshot van de werkmap op 12 september 2026, gebaseerd op HEAD `15a9a482c84e02ee396bc167f690a25a0201e963` plus toen aanwezige wijzigingen | Lokale bron, geen controle van de live Sites-publicatie. |
| Uitgevoerde controle | Alle doelen, rollen, invoervelden, bronketens, secties en acceptatiecriteria gelezen; bestaande tests opnieuw uitgevoerd; gerichte reproducties | Geen nieuwe browsercontrole of echte modelrun. |
| Methode | SPOS Core 4.7.0, Truth Contract, Audit als hoofdroute, Prompt Engineering als toetsingskader; complexiteit L | Het geïnstalleerde framework noemt zichzelf candidate, niet gecertificeerd. |

## Oordeel

**Nee: “allemaal state of the art” en “volledig SPOS-conform” zijn niet aangetoond.** De 47 generators hebben wel een sterke, systematische basis: specifieke rollen en doelen, broninstructies, afbakening, taakspecifieke documentsecties, onzekerheidsmarkeringen, eindcontroles en eerlijke opslagfallbacks. Alle opnieuw uitgevoerde technische tests slagen.

De juiste kwalificatie is: **op SPOS gebaseerde, technisch gecontroleerde promptgenerators, met nog ongetoetste effectiviteit in de doeltools en concrete verbeterpunten in instructies en downloads.** Er is geen vastgesteld defect in elke generator. Gemeenschappelijke ontbrekende evaluatie geldt wel voor alle 48 opdrachten.

“State of the art” is hier geen objectief keurmerk. Voor een toetsbaar oordeel zijn een expliciete baseline, actuele doeltools/modellen, representatieve taken en herhaalde metingen van daadwerkelijke uitkomsten nodig. Meer instructietekst of meer geslaagde stringcontroles bewijst geen betere AI-uitkomst. [Anthropic: agent-evaluatie](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), [Google: iteratief promptontwerp](https://ai.google.dev/gemini-api/docs/prompting-strategies).

## Bewijs en reproduceerbaarheid

Snapshot: `C:/dev/VIBE/analyse/promptaudit-bygi7t6g/`. `snapshot.json` bevat herkomst, Git-status en SHA-256 per bronbestand. `inventory.json` bevat voor elke generator de volledige taak, rol, velden, bronnen, outputsecties en acceptatiecriteria. `audit-probes.json` bewaart de aanvullende reproducties; `scripts/audit-probes.mjs` voert ze opnieuw uit. De rapporten in de snapshot zijn opnieuw gegenereerd, niet overgenomen als bewijs uit een eerdere audit.

| Opnieuw uitgevoerd in de snapshot | Uitkomst | Wat dit aantoont |
|---|---|---|
| `scripts/check-prompt-contracts.mjs` | PASS, 3.731 controles | 47 contracten, zes synthetische invoersoorten over alle 57 toolvarianten, kopieer- en foutafhandeling. |
| `scripts/check-prompt-workbench.mjs` | PASS, 369 controles | Invoer, vereiste velden, normalisatie, opslag, toolkeuze en samengestelde tekst. |
| `scripts/validate.mjs` | PASS, 3.337 controles, 67 weergaven | Bronintegriteit, routes, HTML-weergaven en productiehandlers in een nagebootste omgeving. |
| `scripts/check-editorial.mjs` | PASS, 99 controles | Onder meer startopdracht, klembordfallback, projectpad en documentconsistentie. |
| Aanvullende auditprobes | Twee aandachtspunten gereproduceerd | Verschil tussen offline/online GitHub-prompt en spanning in documentaantal. |

De zes scenario’s in de contracttest veranderen de invoer die in de prompt komt. Er wordt geen AI-antwoord op die scenario’s geproduceerd of beoordeeld. `model_execution: NOT_TESTED` is daarom terecht. De tests bewijzen niet dat een AI-tool een bestand schrijft, bewijs correct interpreteert of broninstructies weerstaat.

Tegencontrole: ook een grote draft met 81 velden en veel aanhalingstekens is opgeslagen en correct hersteld. Er is op basis van die test geen opslagbevinding. HTML-escaping en dynamisch langere Markdown-fences zijn aanwezig; een vermeende bewezen injectiekwetsbaarheid is dus niet vastgesteld. Modelweerstand blijft onbekend.

## Toetsing aan SPOS Prompt Engineering

| Onderdeel | Oordeel | Onderbouwing |
|---|---|---|
| Rol, doel, context en grenzen | Aanwezig bij 47/47 | Centrale composer plus specifieke contracten; context uit de projectvelden en gekozen documenten. |
| Concreet outputformaat | Aanwezig bij 47/47, met lokale ambiguïteit | Bestandsnaam, rootlocatie, drie specifieke secties, context en vervolg; zie PE-003. |
| Ontbrekende gegevens en conflicten | Aanwezig bij 47/47 | Stop afhankelijk werk, onderbouwde delen, GEBLOKKEERD, ONZEKER, CONFLICT en echte teststatus. |
| Goed voorbeeld plus grensgeval | Gedeeltelijk | Eén gedeeld voorbeeld van bewijsnotatie, geen taakspecifieke volledige vormvoorbeelden voor bijvoorbeeld releaseadvies of Git-status. Niet elke eenvoudige taak heeft zulke voorbeelden nodig. |
| Falsificatie en onafhankelijke bronweging | Gedeeltelijk | Onderzoek 2 noemt tegenbewijs en toets 4 weerlegging. Auditachtige 17, 28 en 34 missen een expliciete poging om een bevinding te ontkrachten voordat zij wordt vastgesteld. |
| Versiebeheer | Gedeeltelijk | Contractversie 2.0.0 en inhoudshashes bestaan; startopdracht valt buiten die registry. Geen gemeten model/configuratie/uitkomst per versie. |
| Evaluatie, herhaalbaarheid, optimalisatie | Niet aangetoond op modelniveau | Geen echte outputdatasets, 3–5 herhaalde modelruns, beoordeelde documenten of vergelijking van promptvarianten. |
| Strikte checklistvolgorde | Wijkt af | Doel staat vóór broncontext; ingevulde context na het outputcontract. Dit is een formele afwijking, geen bewezen kwaliteitsfout. Test effect voordat de volgorde alleen om het schema wordt gewijzigd. |

Het plaatsen van SPOS als naam in een prompt, of het volledig invoegen van het framework, is geen passende reparatie. De cursus kan zonder SPOS-installatie bruikbaar blijven. Leg per taak vast welke SPOS-capabilities relevant zijn en test hun gedrag. De huidige labels AANNAME/CONFLICT zijn begrijpelijke varianten; alleen labels vervangen door SPECULATIEF/CONTESTED is geen aangetoonde kwaliteitsverbetering.

## Bevindingen met tegencontrole

### PE-001 — HOOG voor de kwaliteitsclaim: geen empirisch bewijs voor alle doeltools

Bewijs: `scripts/check-prompt-contracts.mjs:14` en `:87` maken synthetische invoer en controleren tekst; de rapportage vermeldt NOT_TESTED. Geen daadwerkelijke modelantwoorden, toolacties of geschreven resultaten aangetroffen in de onderzochte testset. Dit betreft alle 47 generators en de startopdracht.

Tegencontrole: er zijn uitgebreide compositie-, kopieer- en routecontroles, plus eerdere mobiele controles. Die zijn waardevol en ontkrachten “niets getest”, maar meten niet het modelresultaat. Deze ernst betreft het onderbouwen van “allemaal state of the art”, niet een aangetoonde ernstige productiestoring.

Actie: baseline en echte, herhaalde tests per ondersteunde toolconfiguratie. Bij Stitch 7/8 apart vaststellen of ontwerpen én volledige Markdown-overdracht haalbaar zijn; de huidige eerlijke fallback is goed, maar nog geen werkzaam alternatief bewezen. Effort L.

### PE-002 — MIDDEN: downloadbare GitHub-opdracht kan de keuze niet opnieuw verwerken

Bewijs: `dist/prompt-workbench.js:65`, `:91` en `:117`. `templatePrompt('41')` gebruikt een placeholder als publicatiekeuze. Dat selecteert terecht de veilige niet-pushroute. In de reproductie is de placeholder in de gedownloade tekst vervangen door de exacte toegestane keuzewaarde. De tekst blijft expliciet “Push niet naar GitHub en publiceer niet” instrueren. De interactieve generator met dezelfde keuze instrueert wel pushen.

Tegencontrole: de interactieve generator staat push alleen bij de twee juiste keuzes toe. Geen ongeautoriseerde pushbug vastgesteld. Het probleem is beperkte functionaliteit en tegenstrijdige tekst in het ingevulde offline exemplaar, ondanks bytegelijke downloadtemplates.

Actie: maak in de download expliciet dat 41 een lokale bewaarprompt is en dat een push de interactieve generator vereist, of lever twee duidelijk benoemde, afzonderlijk geteste templates. Behoud de veilige standaard. Effort S.

### PE-003 — MIDDEN: primair verslag en overige documentwijzigingen onvoldoende onderscheiden

Bewijs: `dist/prompt-workbench.js:73` vraagt exact één volledig Markdown-document. Taak 23 verlangt daarnaast actuele verwijzingen in START-HIER.md; het eigen resultaat is overdracht.md. Taak 28 vraagt fouten in bestaande documentatie te corrigeren en tevens documentatiecheck.md op te leveren.

Tegencontrole: “één document” kan door een model als één nieuw hoofdresultaat worden gelezen. Bestaande inhoud gericht bijwerken wordt ook toegestaan. Daarom is dit een instructiespanning, geen geobserveerd modelfalen.

Actie: spreek van “één primair verslag” en definieer per taak welke bestaande documenten daarnaast gericht mogen worden bijgewerkt. Behoud de rootafspraak en verbied ongevraagde bijlagen of bronoverschrijvingen. Effort S/M.

### PE-004 — MIDDEN: SPOS-profielen zijn niet volledig per taak uitgewerkt

Bewijs: `dist/prompt-contracts.js` bevat rollen en acceptatiecriteria, maar geen expliciet route-/risicoprofiel. Onderzoek 2 heeft tegenbewijs; auditachtige 17, 28 en 34 noemen checks en bewijs, maar geen falsificatie vóór een finding of expliciete behandeling van afhankelijke bronnen. Het gedeelde bronconflictblok markeert tegenspraak, maar definieert geen weging op directheid, actualiteit en onafhankelijkheid.

Tegencontrole: brononderbouwing, onzekerheden, daadwerkelijke tests en gerichte hercontrole zijn aanwezig. “Geen waarheidsdiscipline” is dus onjuist. Niet iedere marketing- of startprompt behoeft het volledige auditprotocol.

Actie: compacte profielen voor onderzoek, audit, ontwerp, bouw/debug en overdracht. Koppel ze expliciet aan de 48 opdrachten; maak het profiel zwaarder waar bewijs en acties dat vragen. Effort M.

### PE-005 — LAAG: voorbeelden en omvang zijn nauwelijks taakspecifiek gekalibreerd

Bewijs: `dist/prompt-workbench.js:81` gebruikt bij alle 47 hetzelfde schermen.md-bewijsvoorbeeld. Templates tellen 3.962–5.059 tekens, mediaan 4.510; dit zijn tekens, geen tokens of kosten. Bijna dezelfde omvang geldt voor een lokale startsessie en een uitgebreide releasecontrole.

Tegencontrole: het vaste documentcontract is bewust nuttig en prompt 1 begrenst de projectbrief al. Geen bewijs dat de huidige lengte slechter presteert. Dit is optimalisatiewerk, geen reden om zomaar regels weg te halen.

Actie: korte vormvoorbeelden voor kritieke taakfamilies en een geteste compacte variant voor eenvoudige handelingen; behoud bron-, scope- en opslaggrenzen. Effort M.

### PE-006 — LAAG: startopdracht valt buiten de uniforme promptregistratie

Bewijs: `dist/project-guide.js:17` bevat een afzonderlijke vaste prompt zonder eigen promptversie in de gekopieerde tekst. Hij staat niet in `allPromptKeys` of de per-prompt hashmatrix. De startopdracht komt op twee pagina’s voor, maar is één prompt.

Tegencontrole: startopdracht en kopieerfallback worden wél getest in `check-editorial.mjs`; de prompt heeft een rol, doel, grenzen, output en onzekerheidsafhandeling. Niet ongetest of gebroken noemen.

Actie: registreer setup als apart type naast de 47 generators, met eigen contractversie, hash en dezelfde model-evaluatiestatus. Maak er geen extra verplicht invulformulier van. Effort S.

## Dimensies en prioriteiten

Scores zijn kwalitatieve auditbeoordelingen, geen gemeten betrouwbaarheid. Geen totaalscore en geen certificering.

| Dimensie | Score /10 | Hoogste ernst | Basis |
|---|---:|---|---|
| Correctheid | 7 | MIDDEN | Compositie werkt; offline 41 en documentinstructies vragen herstel; modelgedrag onbekend. |
| Architectuur | 8 | LAAG | Gedeelde composer en outputcontracten; setup nog afzonderlijk geregistreerd. |
| Security | 7 | MIDDEN | Bronafbakening, escaping, bewaarbeperkingen en pushkeuzes aanwezig; modelweerstand niet gemeten. |
| Performance | — | Niet vastgesteld | Tekstlengte gemeten, geen latency- of renderingbenchmark in deze audit. |
| Kosten | — | Niet vastgesteld | Geen AI-calls vanuit de site; geen daadwerkelijke modelkosten gemeten. |
| Datakwaliteit | 8 | MIDDEN | Herleidbaarheid en onbekend-status goed; bronweging en falsificatie onvolledig. |
| Compliance | — | Buiten scope | Geen juridische of certificeringsaudit. |
| Observability | 6 | MIDDEN | Testversies en hashes bestaan, geen registraties van modeluitkomsten. |
| Documentatie | 8 | MIDDEN | Rootdocumenten en downloads aangesloten; offline-keuzegedrag onvoldoende uitgelegd. |
| Testbaarheid | 7 | HOOG voor claim | Sterke deterministische basis, geen empirische suite. |

Eerst PE-002/003 herstellen, daarna de profielen en registry uitbreiden, vervolgens echte kwaliteit meten. Volledig stappenplan, acceptatievoorwaarden en kostenbewuste testomvang staan in `PROMPT_VERBETERPLAN_SPOS.md`.

## Externe toetsingsbronnen

- [Anthropic — Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents), gepubliceerd 9 januari 2026, geraadpleegd 12 september 2026: toets de uiteindelijke toestand, niet alleen wat een agent beweert; gebruik herhaalde pogingen en passende graders.
- [Google — Prompt design strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies), geraadpleegd 12 september 2026: duidelijke instructies, relevante context en voorbeelden; beoordeel varianten aan geobserveerde antwoorden.
- [OpenAI — Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices), geraadpleegd 12 september 2026: taakspecifieke datasets met normale, rand- en adversariële gevallen, menselijke kalibratie en voortdurende regressiecontrole.

Deze bronnen ondersteunen de toetsmethode. Geen ervan heeft deze specifieke Vibe Lift-prompts beoordeeld.

## Verificatie van deze audit

De eerdere audit `PROMPT_AUDIT_SPOS_2.md` is als context gebruikt, niet als zelfstandig uitvoeringsbewijs. Ontbrekende bestandsnamen en vaste submapuitvoer uit die audit zijn in deze snapshot al opgelost en niet opnieuw als open probleem opgevoerd. Alle 47 rijen plus setup zijn gecontroleerd; inhoudsclaims zijn van afleidingen onderscheiden. Er is geen bewijs van slechtere AI-antwoorden geconstrueerd uit tekstlengte of een checklistafwijking. Aanpassingen aan de website, promptimplementatie, Git-push en publicatie maken geen deel uit van deze auditopdracht.

## Matrix van alle opdrachten

Voor alle rijen: modeluitvoering **NIET GETEST**. PASS betekent compositie/contract/kopieercontrole; het is geen volledige SPOS-goedkeuring. PE-001, PE-004 en PE-005 worden op hun toepasselijkheid per taakfamilie meegenomen. De laatste kolom geeft extra concrete aandachtspunten.

| ID | Stap | Opdracht | Tool(s) | Hoofdbestand | Techniek | Extra aandacht |
|---|---|---|---|---|---|---|
| 1 | Stap 1 | Maak je projectbrief | chatgpt, claude | projectbrief.md | PASS | Taakprofiel en model-evaluatie |
| 2 | Stap 2 | Onderzoek je probleem met bronnen | claude, chatgpt | onderzoek.md | PASS | Taakprofiel en model-evaluatie |
| 3 | Stap 3 | Schrijf een duidelijk aanbod | chatgpt, claude | propositie.md | PASS | Taakprofiel en model-evaluatie |
| 4 | Stap 3 | Bereid een kleine praktijktoets voor | chatgpt, claude | praktijktoets.md | PASS | Taakprofiel en model-evaluatie |
| 5 | Stap 4 | Schrijf de bezoekersroute uit | chatgpt, claude | flows.md | PASS | Taakprofiel en model-evaluatie |
| 6 | Stap 5 | Maak je schermenlijst en teksten | chatgpt, claude | schermen.md | PASS | Taakprofiel en model-evaluatie |
| 7 | Stap 6 | Ontwerp je schermen in Stitch | stitch | ontwerp.md | PASS | PE-001: Stitch-overdracht empirisch toetsen |
| 8 | Stap 6 | Verbeter het ontwerp in Stitch | stitch | ontwerp.md | PASS | PE-001: Stitch-overdracht empirisch toetsen |
| 9 | Stap 7 | Lees de projectmap en maak het bouwplan | antigravity | bouwplan.md | PASS | Taakprofiel en model-evaluatie |
| 10 | Stap 7 | Laat website, demo en inloggen aansluiten | antigravity | routecontrole.md | PASS | Taakprofiel en model-evaluatie |
| 11 | Stap 8 | Bouw de eerste complete bezoekersroute | antigravity | bouwcontrole.md | PASS | Taakprofiel en model-evaluatie |
| 12 | Stap 9 | Maak een eenvoudig startbestand | antigravity | startinstructie.md | PASS | Taakprofiel en model-evaluatie |
| 13 | Stap 9 | Open de huidige website lokaal | antigravity | lokale-sessie.md | PASS | Taakprofiel en model-evaluatie |
| 14 | Stap 10 | Bereid mijn test voor | antigravity | testplan.md | PASS | Taakprofiel en model-evaluatie |
| 15 | Stap 10 | Herstel de fout die ik heb gevonden | antigravity | bevindingen.md | PASS | Taakprofiel en model-evaluatie |
| 16 | Stap 11 | Maak de pagina’s duidelijker | antigravity | ux-controle.md | PASS | Taakprofiel en model-evaluatie |
| 17 | Stap 11 | Controleer de hele website vóór publicatie | antigravity | releasecheck.md | PASS | PE-004: falsificatie bij audit |
| 18 | Stap 11 | Maak een herhaalbare testopdracht | antigravity | testinstructie.md | PASS | Taakprofiel en model-evaluatie |
| 19 | Stap 12 | Maak de bestanden geschikt voor publicatie | antigravity | publicatiebestanden.md | PASS | Taakprofiel en model-evaluatie |
| 20 | Stap 12 | Zet de goedgekeurde versie op Railway | antigravity | release.md | PASS | Taakprofiel en model-evaluatie |
| 21 | Stap 13 | Maak een uitnodiging voor je eerste bezoekers | claude, chatgpt | introductieplan.md | PASS | Taakprofiel en model-evaluatie |
| 22 | Stap 13 | Controleer de eerste ervaring | chatgpt, claude | leersignalen.md | PASS | Taakprofiel en model-evaluatie |
| 23 | Stap 14 | Bewaar je werk aan het einde van de sessie | antigravity | overdracht.md | PASS | PE-003: hoofdverslag plus START-HIER.md |
| 24 | Stap 14 | Lees het project en hervat je werk | antigravity | sessiestart.md | PASS | Taakprofiel en model-evaluatie |
| 25 | Stap 5 | Leg de gebouwde pagina’s en teksten vast | antigravity | schermen.md | PASS | Taakprofiel en model-evaluatie |
| 26 | Stap 7 | Leg uit hoe de website technisch werkt | antigravity | architectuur.md | PASS | Taakprofiel en model-evaluatie |
| 27 | Stap 14 | Schrijf de gebruikershandleiding | antigravity | gebruikershandleiding.md | PASS | Taakprofiel en model-evaluatie |
| 28 | Stap 11 | Controleer of de handleiding nog klopt | antigravity | documentatiecheck.md | PASS | PE-003/004: documentcorrecties en falsificatie |
| 29 | Stap 3 | Beperk de website tot de eerste versie | antigravity | scope-eerste-versie.md | PASS | Taakprofiel en model-evaluatie |
| 30 | Stap 11 | Verbeter het gebruik op een telefoon | antigravity | mobiele-controle.md | PASS | Taakprofiel en model-evaluatie |
| 31 | Stap 11 | Controleer de talen van je website | antigravity | talencontrole.md | PASS | Taakprofiel en model-evaluatie |
| 32 | Stap 8 | Controleer waar gegevens naartoe gaan | antigravity | gegevenscontrole.md | PASS | Taakprofiel en model-evaluatie |
| 33 | Stap 11 | Onderzoek traagheid en kosten | antigravity | prestatieonderzoek.md | PASS | Taakprofiel en model-evaluatie |
| 34 | Stap 11 | Controleer de beloften op je website | antigravity | claimcontrole.md | PASS | PE-004: falsificatie bij claimcontrole |
| 35 | Stap 14 | Bereid een overstap naar andere software voor | antigravity | overstapplan.md | PASS | Taakprofiel en model-evaluatie |
| 36 | Stap 8 | Controleer de AI-functie in je eigen product | antigravity | ai-functiecontrole.md | PASS | Taakprofiel en model-evaluatie |
| 37 | Stap 14 | Voer één wijziging overal door | antigravity | wijzigingsverslag.md | PASS | Taakprofiel en model-evaluatie |
| 38 | Stap 13 | Controleer vindbaarheid en bezoekersmeting | antigravity | seo-meetcontrole.md | PASS | Taakprofiel en model-evaluatie |
| 39 | Stap 14 | Ruim dubbele code en uitleg op | antigravity | opruimverslag.md | PASS | Taakprofiel en model-evaluatie |
| 40 | Stap 7 | Maak de afgesproken softwarekoppeling | antigravity | koppeling.md | PASS | Taakprofiel en model-evaluatie |
| 41 | Stap 12 | Bewaar je wijzigingen op GitHub | antigravity | github-versie.md | PASS | PE-002: offline keuze wijkt af |
| 42 | Stap 7 | Koppel je project aan GitHub | antigravity | github-koppeling.md | PASS | Taakprofiel en model-evaluatie |
| s1 | SEO-les 1 | Zoekvraag & inhoud | chatgpt, claude | seo-plan.md | PASS | Taakprofiel en model-evaluatie |
| s2 | SEO-les 2 | Technische basis | antigravity | seo-bouwcontrole.md | PASS | Taakprofiel en model-evaluatie |
| s3 | SEO-les 3 | Plaats het Google-verificatiemiddel | antigravity | search-console.md | PASS | Taakprofiel en model-evaluatie |
| s4 | SEO-les 4 | Bouw de afgesproken Analytics-meting | antigravity | analytics.md | PASS | Taakprofiel en model-evaluatie |
| s5 | SEO-les 5 | Meten & verbeteren | chatgpt, claude | groeiplan.md | PASS | Taakprofiel en model-evaluatie |
| setup | Start | Richt de projectmap in | antigravity | START-HIER.md | PASS (startcontrole) | PE-006: registry en versie |
