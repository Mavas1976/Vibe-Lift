# Uitvoering SPOS-promptverbeterplan

Datum: 12 september 2026. Promptcontract: **2.1.0**. Scope: 42 routeprompts, vijf SEO-prompts en één setup-opdracht. Status: lokale implementatie afgerond, modelvalidatie niet uitgevoerd. De gebruiker bevestigde dat geen testtoegang beschikbaar is.

## Resultaat per auditbevinding

| ID | Wijziging en bewijs | Restpunt |
|---|---|---|
| PE-001 | Concrete fixtures, hashes, opname van echte eindbestanden, verplichte review en configuratiegebonden vergelijking toegevoegd in `eval/` en de drie evaluatiescripts. | Alle echte modelruns staan NOT_RUN. Geen claim dat alle prompts state of the art zijn. |
| PE-002 | Download 41 is expliciet alleen lokaal; geen bewerkbare publicatiekeuze die botst met een pushverbod. Online blijven alleen exact toegestane keuzes een push genereren. Downloads opnieuw opgebouwd. | Geen GitHub-push uitgevoerd door een model in een testfixture. |
| PE-003 | Eén primair verslag met expliciete aanvullende documenten en taakgebonden code/assets. 23 mag START-HIER bijwerken; 28 mag gerichte documentcorrecties uitvoeren. | Werkelijk behoud door modellen wordt pas met bestaande-projectfixtures beoordeeld. |
| PE-004 | Zeven proportionele taakprofielen: product, onderzoek, audit, bouw, debug, ontwerp, uitvoering/overdracht. Bronweging, falsificatie, relevante failure modes, herstel en werkelijk uitvoerbewijs opgenomen waar toepasselijk. | Structurele dekking is geen empirisch bewijs van modelgedrag. |
| PE-005 | Gedeeld schermvoorbeeld vervangen door profielspecifieke vormvoorbeelden en grensgevallen. Producttaken hebben een expliciete rationale om geen extra voorbeeld toe te voegen. | Geen bewezen voordeel in kwaliteit, kosten of lengte. Compacte alternatieven pas vergelijken met echte proeven. |
| PE-006 | Setup opgenomen in dezelfde 48-registry met versie, profiel, schema, scope en hash in de evaluatierapportage. | Setupmodelproeven eveneens NOT_RUN. |

## Toepasselijkheid en architectuur

De bestaande composer en contractregistry zijn uitgebreid; er is geen tweede productiepromptbibliotheek. `dist/prompt-profiles.js` levert herbruikbare instructies. `promptRegistry` en de geregistreerde promptfuncties omvatten ook setup. De volledige 48-regelige toepasselijkheidsmatrix staat in `prompt-eval-validation.json`: per opdracht profiel, rationale, complexiteit, toolkeuzes en capabilitygap. De rationale verklaart waarom de betreffende taakfamilie leidend is; omvang S/M bepaalt niet of een externe actie is toegestaan.

De volgorde van de bestaande prompt is behouden. Bron- en scopegrenzen, eerlijke bestandsfallbacks en de exacte online publicatiekeuze blijven onderdeel van de composer. Er wordt geen verborgen redeneerketen gevraagd. Voorbeelden zijn expliciet illustratief en mogen niet als projectbewijs gelden. Publieke instructies blijven zelfstandig bruikbaar zonder kennis van SPOS.

De 48 download-/setupteksten tellen samen 249.962 JavaScript-tekeneenheden tegenover 213.552 in de tekstbaseline: ongeveer 17% meer. Dit is een omvangsmeting, geen token-, kosten- of kwaliteitsevaluatie. Extra instructies zijn dus niet zonder prijs in lengte toegevoegd; eventuele inkorting moet nog met echte modeluitkomsten worden beoordeeld.

## Evaluatie en harde grenzen

Er zijn 58 configuraties × zes gevallen = 348 concrete casussen voorbereid. Drie herhalingen geven 1.044 geplande pogingen. De pilot bevat tien configuraties en 180 pogingen. Deze aantallen zijn geen uitgevoerde modeltests. Het definitieve gegenereerde manifest staat lokaal onder `eval/generated/2.1.0-final`; de eerdere voorbereidingskopie blijft behouden en telt niet als extra dekking. Gegenereerde fixtures en resultaten zijn uitgesloten van Git en publicatie. De onveranderde tekstbaseline 2.0.0 staat wel in Git.

De fixtures bevatten echte synthetische Markdown-bestanden, een uitvoerbare minimale Node-app, een controleerbaar validatiedefect, bestaande inhoud en scenario's voor brongebrek, conflict, broninstructies en onterechte succesclaims. Een eerste resultaat gebruikt al beschikbare bronbestanden; dit is geen leeg project. Sommige taken hebben bewust geen toepasselijke functie of aangesloten provider. Daar kan alleen de correcte blokkade worden beoordeeld. Succesvolle integraties en een onafhankelijke holdout zijn nog niet voorbereid als uitvoerbare, geverifieerde provideromgeving.

De recorder leest uitsluitend een expliciet aangeleverde tekstsnapshot, weigert onveilige paden, symlinks, geheime bestandsnamen en overschrijven van eerder bewijs. Hij controleert outputbestand, koppen, beschermde inhoud, hashes, tool en tijdregistratie. Een modelzin “opgeslagen” levert geen geslaagd bestandsonderzoek op. Menselijke inhoudelijke review blijft verplicht en is aan de capturehash gekoppeld. Dit registreert een beoordeling, geen cryptografisch bewezen identiteit of gegarandeerd volledig actielog. Model en kosten mogen onbekend blijven.

Een handmatig opgeslagen tekstfallback is afzonderlijk gemarkeerd en bewijst geen schrijven door het model. Beeldexports, werkelijke Git-commits, remote toestand en providerwerking vragen aanvullende menselijke inspectie in de testomgeving. De vergelijker weigert expliciete unit-testresultaten, onbekende modellen en ongelijke configuraties en rapporteert alleen gepaarde waarnemingen. Geen automatische winnaar of algemene verbeterclaim.

## Verificatie

De twee concrete fixes zijn eerst afzonderlijk gecontroleerd met de bestaande contracttests. Daarna slagen de geïntegreerde contract-, generator-, route-, redactie- en lokale HTTP-controles. De HTTP-check vergelijkt alle 45 gepubliceerde bestanden byte voor byte met de lokale bron. De evaluatietests controleren alle 348 cases, hashes, velden en profielen, voeren de drie fixture-app-tests uit en reproduceren het bewust aangebrachte defect.

Ook de resultaatrecorder is daadwerkelijk uitgevoerd met expliciet als test gemarkeerde snapshots: ontbrekende output, verloren beschermde inhoud, verkeerde hashes, een ongeldige review, onveilige paden, onterechte succesclaims en overschrijven van eerdere registraties worden geweigerd. Synthetische assessor-tests tellen niet als modelproeven. Exacte aantallen staan in de JSON-validatierapporten naast dit document.

Deze taak voegt geen nieuwe visuele browsercertificatie, gebruikersonderzoek of test van ChatGPT, Claude, Stitch of Antigravity toe. De wijzigingen verbeteren aantoonbaar de instructiestructuur en reproduceerbaarheid van toekomstige beoordelingen. Of modellen er aantoonbaar betere resultaten mee leveren blijft open.

## Resterende uitvoering zodra toegang beschikbaar is

Maak begrensde testomgevingen voor de echte provideracties, voer de pilot met drie herhalingen uit en leg werkelijke resultaten vast volgens `eval/README.md`. Los harde fouten op vóór uitbreiding naar alle configuraties. Bereid een ongebruikte holdout voor en vergelijk daarna één hypothese tegelijk met dezelfde modelversie, omgeving en fixture. Tot die tijd is de eerlijke productclaim: verbeterde, lokaal gecontroleerde prompts met expliciete taakprofielen; modelwerking nog niet empirisch vastgesteld.
