# Mobiele audit — Vibe Lift

| Scope | Bewijsniveau | Grens |
|---|---|---|
| Actuele statische site in `site/dist`, 14 bouwstappen met 4 onderdelen, 5 SEO-lessen, overzicht en hulppagina's | OBSERVED: broncode en Chromium-browser | Ontwerpwerkmap `site-design` is geen publicatiebron |
| 320–1440 px, normale en 200% root-tekstgrootte, uitgeklapte opdrachten | COMPUTED: layoutmetingen in `mobile-validation.json` | Tekstvergroting is geen native browserzoom of apparaatcertificering |
| Aanraakbediening, menu, kopiëren, toetsenbord, verkorte viewport | OBSERVED: afzonderlijke browsercontext met synthetische invoer | Geen echte schermtoetsenborden, iOS/Safari of Android-hardware |

SPOS CORE + Truth Contract + AUDIT, met BUILD voor reparaties. Complexiteit M. De afzonderlijke logotaak leverde tegelijkertijd echte lokale tooliconen; de definitieve mobiele controle omvat deze geïntegreerde versie. Zie `TOOL_LOGOS_SPOS.md` voor de bijbehorende bronregistratie.

## Uitkomst en aanpak

Laatste voltooide browserrun: **PASS, 938 layoutgevallen, 15 interactiecontroles, geen JavaScript-runtimefouten** op 12 september 2026 om 13:13 UTC. De sitesource bevat inmiddels ook de nieuwe logo's en promptgenerator. De gelijktijdige teksttaak wijzigt nog inhoud; daarom is er vanuit deze mobiele taak niets gecommit of gepubliceerd. De definitieve gezamenlijke controle en publicatie zijn overgedragen aan de bestaande taak `Verbeter site-teksten en workflow` (01a095b7-b0cb-7521-9c4d-4e27846b0159). Het rapport moet na voltooiing van die wijzigingen opnieuw worden uitgevoerd.

De site had al responsive layouts. De oorspronkelijke stelling dat alles mobiel klaar was, hield bij vergrote tekst geen stand: navigatie en meerdere flex- en gridonderdelen staken buiten de beschikbare breedte. De bestaande code is uitgebreid, zonder een nieuw framework, netwerkdienst of gegevensmodel.

Nulhypothese: de bestaande mediaqueries vangen alle relevante mobiele situaties op. Daarom zijn eerst normale pagina's én uitgeklapte opdrachten onderzocht. Normale steekproeven hadden grotendeels geen overflow; 200% tekst liet wel concrete fouten zien. De conclusie blijft beperkt tot de uitgevoerde browsercontroles. Werkelijke apparaatprestaties en volledige toegankelijkheid zijn niet vastgesteld.

## Bevindingen en reparaties

| ID | Ernst | Bewijs vóór reparatie | Reparatie | Status |
|---|---|---|---|---|
| AUD-MOB-001 | MIDDEN | Bij 320 px en 200% root-tekst: totale scrollbreedte 429–562 px in de onderzochte pagina's; lesknoppen liepen tot 488 px | Flexonderdelen laten afbreken, gridkinderen `min-width:0`, lange tekst afbreken, tabknoppen wrappen, promptacties stapelen | Opgelost in geteste versie |
| AUD-MOB-002 | MIDDEN | Navigatieheader circa 180 px hoog op 320 px en circa 142 px op 390 px; bleef vaststaan tijdens scrollen | Inklapbare navigatie tot 950 px, header scrollt mee; opdrachtenlink blijft in het geopende menu | Opgelost in geteste versie |
| AUD-MOB-003 | LAAG | Navigatielinks 38 px hoog, weergaveknoppen en bewegingsknop 42 px, SEO-bronnen 40 px | Minimaal 44 px voor deze bediening; mobiele navigatie 48 px | Opgelost in geteste versie |
| AUD-MOB-004 | LAAG | Stapselectie op mobiel had 14 px tekst | 1rem tekst en 48 px hoogte | Gecontroleerd in bron en browser; mogelijk iOS-inzoomgedrag niet op hardware getest |
| AUD-MOB-005 | MIDDEN | Na tekstvergroting liep de desktopheader bij 1024 px ook buiten beeld | Navigatie mag wrappen; werkelijke headerhoogte bepaalt sidebarpositie en scrollafstand | Opgelost in geteste versie |

44 px is hier een gekozen bedieningsdoel; deze tabel claimt geen WCAG-certificering. De nieuwe menuvariant ondersteunt `aria-expanded`, een gekoppeld navigatie-element, Escape met focusterugkeer en herstel bij grotere vensters. Verborgen links komen niet in de toetsenbordvolgorde. Zonder JavaScript blijven de oorspronkelijke links zichtbaar en blijft het handboek beschikbaar.

## Sterke punten

- Viewportmetadata liet inzoomen al toe; formulieren in de opdrachtwerkbank hadden al labels en 1rem invoertekst.
- De veertien stappen blijven bereikbaar via zowel routekaart, lijst als stapselectie.
- Opdrachten worden lokaal samengesteld; deze aanpassing voegt geen gegevensoverdracht toe.
- Systeemvoorkeur voor minder beweging en expliciete pauzeknop waren aanwezig en zijn opnieuw gecontroleerd.
- Alle tooliconen blijven lokaal; ook hun geneste afbeeldingen vallen onder de bestaande knopeventafhandeling.

## Risicomatrix binnen deze scope

Ordinale beoordelingen, geen gemeten kwaliteitspercentages. Een totaalscore voor de hele site is niet gerechtvaardigd.

| Dimensie | Beoordeling na reparatie | Hoogste oorspronkelijke ernst | Onderbouwing / beperking |
|---|---|---|---|
| Correctheid / mobiele bediening | 9/10 | MIDDEN | Brede layoutmatrix en gerichte browserinteracties; fysieke apparaten ontbreken |
| Architectuur | 8/10 | LAAG | Bestaande renderers hergebruikt; gebundelde responsive correcties in één laatste stylesheet; oudere CSS-overrides blijven bestaan |
| Security | Geen brede score | Geen bevinding binnen wijziging | Geen nieuwe externe gegevensstromen; geen security-audit van de volledige applicatie |
| Performance | Niet gemeten | Onbekend | Geen veldmetingen of trage mobiele verbinding; alleen lokale laadtoegang en bestaande bewegingslogica gecontroleerd |
| Kosten | N.v.t. | N.v.t. | Geen nieuwe betaalde dienst of API |
| Datakwaliteit | 9/10 binnen opdrachtfunctie | Geen nieuwe bevinding | 368 bestaande promptcontroles plus daadwerkelijke touch-kopieertest |
| Compliance | Niet beoordeeld | Onbekend | Geen wettelijke of volledige toegankelijkheidsbeoordeling |
| Observability | N.v.t. voor backend | N.v.t. | Statische clientsite; runtimefouten worden wel in het testresultaat geregistreerd |
| Documentatie | 9/10 | LAAG | Audit, reproduceerbaar browserscript en rapport toegevoegd |
| Testbaarheid | 9/10 | LAAG | 67 routevarianten, 7 breedtes, 2 tekstgroottes; aanvullend aan bestaande bronchecks |

## Verificatie en resterende grenzen

`scripts/check-mobile.pw.js` wordt via de Playwright-tool uitgevoerd met de lokale server op poort 4173. Het script gebruikt een eigen schone context, wacht op de werkelijk gerenderde route, opent alle disclosurepanelen en meet zowel documentbreedte als overstekende elementen. Er zijn 938 layoutgevallen. Aanraakbediening draait afzonderlijk op 390 × 844 px, DPR 3. Het actuele resultaat en de afzonderlijke checks staan in `mobile-validation.json`.

De broncontrole staat in `validation.json`; de opdrachtcontroles in `prompt-validation.json`; beweging in `air-validation.json`; HTTP in `http-validation.json`. De bronchecker blijft terecht aangeven dat die specifieke checker geen browser-QA uitvoert. Deze mobiele audit levert het afzonderlijke browserbewijs.

Zelfcontrole: bevindingen zijn getoetst tegen bestaande mediaqueries, normale tekst en vergrote tekst. De eerste testharness las enkele toestanden vóór asynchrone browsergebeurtenissen; dit is gecorrigeerd door op de uiteindelijke DOM-toestand te wachten. Een herhaalrun trof eerder ingevulde, daardoor ingeklapte projectvelden; de definitieve harness gebruikt daarom een eigen schone context. Dit waren testharnessproblemen, geen vastgestelde productfouten.

De voorkeur voor minder beweging is in de browser geverifieerd bij het laden van de pagina. Tijdens het dynamisch wijzigen via Chromium-emulatie veranderde `matchMedia().matches` wel, maar arriveerde het change-event niet consequent bij de tijdens paginalaad geregistreerde listener. Een later aangemaakte controlelistener reageerde wel. Daarom geldt dit als een onbesliste grens van de dynamische emulatiecontrole, niet als bewijs dat de site op echte apparaten fout reageert. Het bestaande numerieke/lifecycle-testscript controleert de handler afzonderlijk. De korte-viewportcontrole gebruikt onmiddellijk centreren van het invoerveld; zij simuleert geen echt schermtoetsenbord.

Twee manieren waarop een te brede conclusie onjuist kan zijn: een echte mobiele browser kan anders renderen of anders reageren op het schermtoetsenbord; een apparaat met weinig rekenkracht of een trage verbinding kan slechter presteren. Dat bewijs ontbreekt. Advies vóór een claim 'volledig mobiel klaar': controleer één echte iPhone en Android-telefoon met menu, lange les, invoer, toolkeuze en kopiëren, plus een trage verbinding. Deze open verificatie beperkt de claim, zonder de uitgevoerde reparaties ongedaan te maken.
