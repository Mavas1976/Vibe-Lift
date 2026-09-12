# SPOS-audit — herkenbare promptgenerator per AI-opdracht

| Scope | Bewijs en grens |
|---|---|
| Onderzocht | Routekaart, 14 stappen, vijf SEO-lessen, bibliotheek en gedeelde generator in `dist/app.js`, `dist/prompt-workbench.js`, `dist/prompt-config.js` en `dist/index.html`. |
| Uitvoering | SPOS Core, Truth Contract en primaire route Audit; complexiteit M. Bestaande generator hergebruikt. |
| Observaties | Broncode, gerenderde HTML en uitvoering van productiehandlers in de bestaande Node-harness. |
| Afleidingen | Duidelijkere naamgeving en directe ingangen kunnen de vindbaarheid verbeteren; geen gebruikersonderzoek uitgevoerd. |
| Buiten scope | Echte opdrachten bij AI-aanbieders, hun antwoorden, visuele browsercontrole en toegankelijkheidscertificering. |

Datum: 12 september 2026. Aanvulling op `PROMPT_INTEGRATIE_PLAN.md`.

De bestaande generator stelde al prompts samen met de projectcontext en stapinvoer. De audit onderzocht eerst of bestaande uitleg de gevraagde boodschap al dekte. De generatortab legde het invullen en kopiëren uit, maar de ingangen heetten “Opdracht” en “AI-opdrachten”. Daardoor ontbrak de expliciete herkenning als promptgenerator op het moment dat de gebruiker zijn stap kiest.

| ID | Severity | Bevinding en tegencontrole | Verbetering |
|---|---|---|---|
| AUD-DOC-001 | MIDDEN | De tab en hoofdingang gebruikten “Opdracht” en “AI-opdrachten”. De tekst binnen de tab verklaarde de werking wel; een volledig ontbrekende generator is dus ontkracht. | Tab “Promptgenerator”, hoofdingang “Promptgenerators”, uitleg van het woord prompt en duidelijke boodschap op de startpagina. |
| AUD-DOC-002 | MIDDEN | De uitleg verwees naar AI-tools, maar bood bij de stapintro geen directe generatoringang. Het wisselen naar de bestaande tab was mogelijk. | Zichtbare ingang bovenaan iedere stap en een verwijzing bij de tooluitleg; iedere routekaart vermeldt de generator. |
| AUD-DOC-003 | MIDDEN | SEO-opdrachten stonden onder de volledige lesinhoud, aanvankelijk dichtgeklapt. Ze waren aanwezig en werkten met dezelfde composer. | Directe knop bovenaan elke SEO-les; die opent de juiste generator, scrollt naar de invoer en verplaatst de focus zonder de route te veranderen. |
| AUD-DOC-004 | LAAG | “Kopieer mijn opdracht” en “Bekijk de volledige opdracht” legden minder expliciet de relatie met een gegenereerde prompt. De bestaande kopieerhandler kopieerde de samengestelde tekst al. | Vier herkenbare handelingen: AI-tool kiezen, invullen, “Kopieer prompt” en “Plak in je AI-tool”; voorbeeldweergave heet “Bekijk je gegenereerde prompt”. |

Alle vier bevindingen zijn verwerkt. Er wordt expliciet uitgelegd dat de prompt automatisch wordt samengesteld terwijl je typt en dat je de opdracht zelf in de gekozen AI-tool verstuurt.

Sterke punten: alle 47 bestaande prompts hebben project- en stapcontext; verplichte invoer wordt gecontroleerd; bij geweigerd klembord kan de volledige tekst handmatig worden gekopieerd. De passende AI-tool blijft per opdracht geselecteerd. Er is geen nieuwe AI-aanroep, accountkoppeling of opslagvorm toegevoegd.

| Dimensie | Beoordeling binnen deze scope | Hoogste oorspronkelijke severity |
|---|---|---|
| Correctheid | 9/10: samenstellen en kopiëren van alle 47 prompts via de productiehandler gecontroleerd in een harness; browserklembord niet opnieuw getest. | INFO |
| Architectuur | 9/10: één bestaande generator voor hoofdroute, bibliotheek en SEO behouden. | INFO |
| Documentatie | 9/10: zichtbare naamgeving en instructies consistent gemaakt; begrip bij beginners niet gemeten. | MIDDEN |
| Testbaarheid | 8/10: route-, invoer-, kopieer- en SEO-ingangcontroles; geen nieuwe visuele browsertest. | INFO |
| Security, performance, kosten, datakwaliteit, compliance, observability | Geen algemene score: geen volledige systeemaudit binnen deze gerichte UX-opdracht. Bestaande escaping-, opslag- en invoercontroles wel uitgevoerd. | Niet vastgesteld |

De scores zijn kwalitatieve auditbeoordelingen, geen gemeten kans of certificering. Geen totaalscore: zes dimensies zijn niet volledig onderzocht.

Verificatie: `scripts/validate.mjs` controleert 67 routevarianten, alle 47 kopieerhandlers, ontbrekende invoer, geweigerd klembord en de vijf SEO-ingangen. `scripts/check-prompt-workbench.mjs` controleert de inhoud van alle 47 prompts en opslaggedrag. `scripts/check-http.mjs` vergelijkt de aangeboden bestanden met de bron. De actuele rapporten staan in `validation.json`, `prompt-validation.json` en `http-validation.json`.

Falsificatie: iedere stap wordt ook buiten de generatortab gecontroleerd op een directe ingang; alle prompts worden via de daadwerkelijke handler gekopieerd om te voorkomen dat alleen de labels kloppen. De bibliotheekcontrole voorkomt dat de nieuwe SEO-weergave onbedoeld alle kaarten openzet.
