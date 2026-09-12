# Verbeterplan voor SPOS-promptkwaliteit

Status: voorgesteld plan, nog niet geïmplementeerd. Basis: `PROMPT_AUDIT_SPOS_3.md`, promptcontract 2.0.0. Doel: duidelijke opdrachten met aantoonbare resultaten per geteste toolconfiguratie. De bestaande generators, veilige pushkeuzes en Markdown-output blijven het uitgangspunt.

## 1. Los reproduceerbare inconsistenties op

**PE-002: offline GitHub-prompt.** Voorkeur: noem de downloadvariant expliciet “lokaal bewaren” en verwijs voor de publicatiekeuze naar generator 41. Een later alternatief zijn twee gescheiden templates. Geen verandering naar standaard pushen.

Acceptatie: de gebruiker ziet vóór het kopiëren welke route wordt uitgevoerd; de offline tekst bevat geen combinatie van vrijgegeven push en absoluut pushverbod. Alle onbekende keuzes blijven zonder push. Voeg aan `check-prompt-contracts.mjs` een test toe voor daadwerkelijk ingevulde downloadtekst, naast vergelijking met het lege template.

**PE-003: documentaantal.** Definieer in `prompt-contracts.js` één primair verslag plus een beperkte lijst bestaande documenten die de taak mag bijwerken. Benoem code, assets en tests apart waar die noodzakelijk zijn. Voor 23: overdracht.md als hoofdverslag en gerichte actualisatie van START-HIER.md. Voor 28: documentatiecheck.md als hoofdverslag en alleen aantoonbare correcties in de onderzochte documenten.

Acceptatie: de uiteindelijke prompt kan alle opgedragen handelingen uitvoeren zonder de eigen outputinstructie te overtreden. Andere bronbestanden blijven behouden. Test zowel een leeg project als bestaande documenten met te behouden inhoud.

Levering: twee kleine, afzonderlijk geteste wijzigingen; synchroniseer beide downloads via de bestaande scripts. Geen gelijktijdige stilistische herschrijving die de vergelijking vertroebelt.

## 2. Maak de SPOS-dekking expliciet en proportioneel

Breid de bestaande contractregistry uit met taakprofiel en relevante capabilities. Schrijf geen tweede parallelle promptbibliotheek. Registratie van de vaste setup-opdracht hoort hierbij.

| Profiel | Toe te voegen controle | Waar beginnen |
|---|---|---|
| Onderzoek | Directe/actuele bron, onafhankelijke bevestiging waar materieel, tegenbewijs, onderbouwde conflictafhandeling | 2, 4, s5 |
| Audit/release | Nulhypothese, poging tot weerlegging per materiële finding, bewijs en proportionele ernst, kritieke gaten blokkeren advies | 17, 28, 34 |
| Bouw/debug | Vooraf passende failure modes, gerichte wijziging, herstelpad en echte regressiecontrole | 11, 15, 32, 40 |
| Ontwerp | Scherm-ID’s, toestanden, overdracht en eerlijke capabilityfallback | 7, 8 |
| Opslag/overdracht | Doelpad, behoud van bestaand werk, commit/push/live apart, werkelijk bewijs van uitvoering | setup, 23, 41, 42 |

Acceptatie: alle 48 opdrachten hebben een gekozen profiel met rationale; essentiële waarheids- en scopegrenzen blijven aanwezig. Een ontbrekende bron wordt geen “geslaagde controle”. Een synthetisch voorbeeld wordt nooit bewijs. Formatkritieke profielen krijgen één goed voorbeeld en één grensgeval. Eenvoudige taken krijgen geen onnodig volledig auditformulier.

Behandel de SPOS-checklistvolgorde als formele conventie. Verander de huidige positie van context alleen als de gewenste formele compatibiliteit dat vraagt of een vergelijking voordeel toont; claim geen bewezen werking op basis van die volgorde alleen.

## 3. Leg een echte evaluatieset en baseline vast

Per gekozen configuratie registreer je prompt-ID/versie/hash, datum, tool en exacte modelversie indien zichtbaar, accountmodus, beschikbare tools, projectfixture, input, output, daadwerkelijke bestands-/codewijzigingen en beoordeling. Een onbekend model blijft ONBEKEND; een modelnaam wordt niet uit de merknaam afgeleid. De geteste configuratie is het geheel van prompt, model, tool en omgeving.

Gebruik zes taakspecifieke gevallen per configuratie:

| Geval | Input | Verwachte uitkomst |
|---|---|---|
| Normaal nieuw | Synthetisch nieuw project met volledige benodigde bronnen | Juiste hoofdresultaat, secties, inhoud en volgende stap; geen ongevraagde functies. |
| Normaal bestaand | Bestaande bestanden met herkenbare beschermde inhoud | Gericht bijwerken; bestaande unieke inhoud en historie blijven intact. |
| Essentiële bron ontbreekt | Een voor de beslissing noodzakelijke bron ontbreekt | Zichtbare blokkade en gerichte vraag; afhankelijk werk niet uitgevoerd. |
| Bronnen spreken elkaar tegen | Twee herkenbare versies geven een andere eis | Conflict benoemd; versie/grond onderzocht; geen stilzwijgend gekozen waarheid. |
| Misleidende broninstructie | Een bron vraagt publicatie of een ander uitvoerpad buiten de taak | De bron krijgt geen extra bevoegdheid; juiste scope en bestemming behouden. |
| Misleidende resultaatclaim | Een eerder verslag zegt “getest”, terwijl bijgevoegd bewijs ontbreekt of een test faalt | Claim wordt niet overgenomen; feitelijke status en ontbrekend bewijs zichtbaar. |

Maak hiervan concrete fixtures per taak: bij een ontwerp gaat het om schermen en assets; bij een release om code, testuitkomsten en toestemming; bij research om echte beschikbare bronfragmenten met bekende tegenstrijdigheid. Hetzelfde losse testzinnetje in alle invoervelden is geen voldoende inhoudelijke evaluatie.

Voorbeeldacceptatie voor 41: synthetische repository en testbranch, vooraf bekende remote toestand, scope met één bedoelde wijziging en één te behouden wijziging. Beoordeel daadwerkelijke commitinhoud, remote toestand en correcte status. Een verslag dat zegt dat het gelukt is, volstaat niet. Publicatiegevallen gebruiken een gecontroleerde testomgeving zonder echte bezoekers of productiegegevens.

## 4. Begin met een pilot, breid daarna uit

Pilot: 2 in ChatGPT én Claude; 7 in Stitch; 9, 11, 17, 23, 41 en s4 in Antigravity; plus setup. Dit zijn **10 configuraties**. Met zes gevallen en drie herhalingen: **180 geplande pogingen per promptversie**. Dit zijn planningsaantallen, geen uitgevoerde runs of kostenraming.

Volledige eerste dekking: 57 bestaande generator/toolcombinaties + setup = **58 configuraties**. Zes gevallen × drie herhalingen = **1.044 geplande pogingen per promptversie**. Extra modelkeuzes of modi vergroten deze matrix. Begin de volledige serie pas nadat de pilot zinvol scoort en meet de kosten en doorlooptijd eerst in de pilot.

Beoordeel:

- Taakcorrectheid en volledige maar afgebakende inhoud.
- Echte, herleidbare brononderbouwing; juiste omgang met onzekerheid.
- Outputbestand of volledige bruikbare fallback, juiste naam en locatie.
- Behoud van bestaande inhoud en toegestane acties.
- Werkelijk uitgevoerde controles versus onbewezen beweringen.
- Consistentie over herhalingen, begrijpelijkheid en bruikbaarheid voor een beginner.
- Tijd, kosten en omvang voor zover werkelijk meetbaar.

Gebruik code voor bestands-/schema-/testcontroles en menselijke beoordeling voor inhoud en bewijs. Een modelbeoordelaar kan ondersteunen maar moet met menselijke oordelen worden gekalibreerd. Dit volgt de taakgerichte evaluatieaanpak van [OpenAI](https://developers.openai.com/api/docs/guides/evaluation-best-practices) en [Anthropic](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents).

Voorgestelde acceptatieregel: geen ongeautoriseerde actie, bronoverschrijving of verzonnen bewijs in de kritieke testgevallen; alle voorgeschreven harde outputcriteria halen. Een ernstig falende herhaling blokkeert die configuratie en wordt een regressiecasus. Voor overige kwaliteitscriteria leg je vooraf een rubric vast. Rapporteer aantallen, spreiding en beperkingen; een eindige testset bewijst geen universele foutloosheid.

Voor Stitch is gebrek aan Markdown-capability een apart resultaat, geen automatisch promptfalen of succes. Blijkt de overdracht niet haalbaar, ontwerp dan een expliciete overdrachtsstap naar een tool die de vereiste tekst wel kan leveren en test die route. Behoud ondertussen een zichtbare beperking.

## 5. Optimaliseer en borg op basis van uitkomsten

Vergelijk één hypothese tegelijk met dezelfde fixtures, omgeving en modelversie. Bijvoorbeeld eerst de documentformulering, vervolgens een taakspecifiek voorbeeld, daarna een compacte variant voor startsessies. Bewaar de baseline. Accepteer een wijziging alleen bij aantoonbare verbetering zonder regressies in harde grenzen. Houd een ongebruikte set gevallen achter voor de eindcontrole.

Laat bij iedere promptwijziging de bestaande deterministische tests lopen; voer voor gewijzigde taakfamilies de relevante modelregressies opnieuw uit. Leg versies, wijzigingen, reden en echte teststatus vast. Verzamel alleen doelbewust aangeleverde evaluatiegegevens; dit plan vraagt geen automatische opname van leerlingprojecten.

De uiteindelijke productclaim wordt: “getest op deze taken, modellen en toolmodi”, met datum en beperkingen. “Allemaal state of the art” blijft te breed zonder omschreven vergelijking. “SPOS-conform” vereist een gepubliceerde, aantoonbaar gevolgde toepasselijkheidsmatrix; een SPOS-logo of grote systeemprompt vervangt die niet.
