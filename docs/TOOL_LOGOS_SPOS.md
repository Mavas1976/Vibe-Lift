# SPOS-audit: echte tool-logo's

| Scope | Bewijslaag | Beperking |
|---|---|---|
| Identiteit van 12 tools in overzicht, toolroute, lessen en SEO | OBSERVED: tools.js, app.js, officiële bronpagina's en gedownloade assets | Geen algemene beoordeling van de leveranciers |
| Toolkeuze in 47 invulbare opdrachten | OBSERVED: prompt-workbench.js en gegenereerde HTML | De aparte mobiele taak controleert browserweergave |
| Logoherkomst, formaat, lokaal laden en toegankelijke namen | OBSERVED / COMPUTED: bronregister, bestandscontrole en renderer | Geen volledige WCAG- of juridische certificering |

SPOS CORE, Truth Contract, AUDIT en bestaande BUILD-werkwijze toegepast. Complexiteit M. De gebruiker vraagt om echte logo's; in dit bericht was geen losse logobijlage beschikbaar. De officiële productwebsites en hun eigen beeldbestanden zijn daarom gebruikt.

## Aanpak en falsificatie

De nulhypothese was dat echte logo's al aanwezig waren en alleen niet zichtbaar werden. Controle van assets en renderers ontkracht die hypothese: de catalogus bevatte `mark` en `tone`, met tekens zoals C, S, A en GH. De commentaarregel beschreef expliciet typografische badges. De promptkeuze toonde alleen productnamen. Namen en leverancierslinks waren wel correct aanwezig; het probleem was dus de visuele identificatie, niet ontbrekende toolinhoud.

## Bevindingen en aanpassingen

| ID | Ernst | Geobserveerd probleem | Aanpassing | Status |
|---|---|---|---|---|
| AUD-COR-001 | MIDDEN | Alle twaalf toolidentiteiten gebruikten vervangende letters/symbolen | Iedere tool verwijst naar een daadwerkelijk leverancierslogo | Opgelost |
| AUD-COR-002 | LAAG | De invulbare opdrachten hadden geen logo bij de AI-toolkeuze | Logo toegevoegd aan keuze-knoppen en vaste bestemming | Opgelost |
| AUD-DOC-001 | LAAG | Er was geen herkomstregistratie voor echte tool-logo's | Officiële bronpagina, asset-URL, downloadmoment, bestandsgrootte en SHA-256 vastgelegd | Opgelost |

Eén gedeelde renderer in `dist/tool-branding.js` wordt gebruikt door de bestaande pagina's en de promptwerkbank. De catalogus bevat nu `logo` in plaats van `mark` en `tone`. Logo's behouden hun oorspronkelijke bytes, kleuren en verhoudingen. Een wit vlak zorgt voor herkenbaarheid, ook in een geselecteerde donkere knop. Afbeeldingen worden maximaal 32 pixels groot weergegeven; kleine favicons worden niet onnodig uitvergroot.

De logo's staan lokaal bij de site. Er zijn geen externe logodiensten, runtime-downloads, nieuwe pakketten of nieuwe cookies toegevoegd. De twaalf logo-assets wegen gezamenlijk 89.698 bytes. Gewone vermeldingen van toolnamen in lopende tekst blijven tekst; het logo hoort bij de herkenbare toolkaart, linkbadge of keuze.

## Sterke punten

- De bestaande centrale toolcatalogus maakte een volledige vervanging mogelijk zonder kopieën van logo's per pagina.
- De tekstnaam blijft naast het logo staan, zodat kleur of beeldherkenning niet vereist is.
- Lege alt-tekst en `aria-hidden` voorkomen dubbele voorlezing van hetzelfde toolmerk.
- Bestaande navigatie, toolkeuze, gebruikersinvoer en kopiëren blijven werken volgens de uitgevoerde controles.

## Beoordeling binnen deze scope

De scores zijn ordinale auditbeoordelingen, geen gemeten kwaliteitspercentages.

| Dimensie | Na aanpassing | Grond / afbakening |
|---|---|---|
| Correctheid | 9/10 | Alle 12 toolassets aanwezig; alle 57 toolkeuzes in 47 prompts hebben een logo |
| Architectuur | 9/10 | Eén catalogus en één gedeelde renderer |
| Security | 9/10 binnen assetscope | Lokale afbeeldingspaden; SVG's zonder scripts, foreignObject of externe verwijzingen |
| Performance | 9/10 binnen assetscope | Circa 90 kB extra, vaste afmetingen en uitgesteld laden; geen snelheidsbenchmark |
| Kosten | N.v.t. | Geen betaalde service of nieuwe runtime-call |
| Data kwaliteit | 9/10 | Primaire herkomst per asset geregistreerd; originele bytes behouden |
| Compliance | Niet beoordeeld | Algemene merk-, privacy- en toegankelijkheidscompliance buiten deze logocorrectie |
| Observability | N.v.t. | Statische afbeeldingen; geen nieuwe backend |
| Documentatie | 9/10 | Deze audit plus machineleesbaar bronregister |
| Testbaarheid | 9/10 | Bestaande routecontrole uitgebreid met echte lokale logo-assets |

Geen open kritieke of hoge bevindingen binnen de onderzochte scope. Een totaalscore voor de hele site zou niet gerechtvaardigd zijn.

## Verificatie en grenzen

Uitgevoerd vóór overdracht aan de mobiele audit: 3.028 bron-/routecontroles, 368 promptcontroles, 12 bewegingscontroles en HTTP-controle van 39 bestanden. Daarnaast: PNG-signaturen, SVG-XML, afwezigheid van actieve/externe SVG-inhoud, toegankelijke markup en alle 57 toolkeuzes over de 47 promptkaarten. Resultaten staan in `logo-validation.json` en de bestaande validatierapporten. De negen PNG-logo's zijn tevens bekeken in een contactblad; de drie SVG's zijn structureel gecontroleerd.

De controles zoeken twee concrete tegenvoorbeelden: een vergeten renderer die nog initialen toont en een verkeerd, ontbrekend of onveilig beeldbestand. Beide zijn gericht gecontroleerd. Deze taak heeft geen browser-QA uitgevoerd. De gelijktijdige mobiele audit neemt de actuele logo's mee in haar visuele controle en publiceert de gezamenlijke versie.

Bronnen per logo: `tool-logo-sources.json`. Directe toegang tot chatgpt.com en claude.ai gaf 403; ChatGPT is daarom opgehaald via de officiële OpenAI-helpbron en Claude via claude.com. Dit is een bronroutebeperking, geen claim dat de producten onbeschikbaar zijn.
