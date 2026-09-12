# Vibe Lift — Digitale gewichtloosheid

Nederlandstalige interactieve leeromgeving voor iemand zonder programmeerachtergrond. Veertien vrij toegankelijke stappen in vijf fasen, één fictief voorbeeldproject, visuele flows en 28 bouwopdrachten, 12 tools met uitleg per stap en een aanvullende SEO-cursus van vijf lessen met vijf eigen opdrachten. De route gebruikt Antigravity met toegang tot GitHub; de cursist voert zelf geen Git-commando’s uit.

## Lokaal openen

Vereiste: Node.js, een ondersteunde LTS-versie. Er zijn geen npm-pakketten nodig.

Op Windows: open `START_PROJECT.bat`. Open daarna het adres dat het venster daadwerkelijk meldt. Het venster blijft open zolang je de website gebruikt. Stop de server met Ctrl+C. Een reeds bezette poort geeft een fout; er worden geen andere processen gestopt.

Vanaf een terminal in deze map:

```sh
node scripts/serve.mjs
```

De lokale server luistert alleen op `127.0.0.1:4173`. Dit lokale adres is geen openbare website. Open `index.html` niet rechtstreeks met `file://`: de modulebestanden worden via HTTP geladen.

## Inhoud aanpassen

- `dist/content.js`: lessen, fasen, begrippen en Studio Maan-voorbeelden.
- `dist/app.js`: weergaven, gereedschappen, opdrachtcontext en navigatie.
- `dist/styles.css` en `dist/lift.css`: basisstijl en huidige Vibe Lift-vormgeving.
- `dist/tools.js`: 12 tools, officiële links, toolgebruik per hoofdles en repositoryhandleiding.
- `dist/seo.js`: vijf SEO-lessen, instellingen, bronnen en SEO-bouwafspraken.
- `dist/air.js`: eigen decoratief deeltjesveld, cursorrespons en pauzeren.
- `dist/prompts.js`: opdrachten uit de actuele Vibe Lift-lezerseditie. Opnieuw genereren vanuit het handboek met `python scripts/extract_prompts.py`.
- `dist/downloads/handboek.md`: Vibe Lift-lezerseditie 1.2. Wijzig een opdracht in deze handleiding en genereer daarna `prompts.js` opnieuw. Het oorspronkelijke aangeleverde document wordt buiten de publicatiemap bewaard.
- `dist/assets/`: originele illustraties en favicon.

Iedere les moet de vaste inhoudsvelden blijven bevatten. Synchroniseer na wijzigingen in tool- of SEO-inhoud eerst met `node scripts/update-guide.mjs`. De automatisch beheerde aanvulling van het handboek is afgebakend met een vaste marker. Genereer daarna de 28 kernprompts opnieuw.

Een opdracht-ID verwijst naar een bestaande opdracht uit de lezerseditie; schrijf aanvullingen in de context in `app.js`, zodat context en kopieerbare opdracht herkenbaar gescheiden blijven.

## Controleren

```sh
node --check dist/app.js
node --check dist/content.js
node --check dist/prompts.js
node scripts/validate.mjs
node scripts/check-air.mjs
node scripts/check-http.mjs
```

Voor check-http moet de lokale server draaien. De bewegingscontrole test rekenlogica en lifecycle met een kleine harness, geen browserweergave.

De validator controleert bronintegriteit, volledige inhoud, routes, gerenderde HTML-strings en de interactiecontracten van de handlers. Hij schrijft `docs/validation.json`. Dit is geen browsertest of visuele beoordeling.

## Publicatie

Dit is een statische site. `dist/` bevat de daadwerkelijke bronbestanden die worden gepubliceerd; er is geen bundelstap. `.openai/hosting.json` koppelt deze map aan de bestaande Sites-site. Behoud die identiteit bij wijzigingen. Publiceer de gecontroleerde bron via de Sites-werkwijze en behoud de huidige toegang. De site blijft alleen voor de eigenaar gepubliceerd.

Geen appdatabase, accounts, analytics, AI-API of externe bibliotheken. Sites verzorgt de toegangslaag buiten deze applicatie. De site kopieert alleen op verzoek tekst naar het klembord; opdrachten en publicaties voor leerlingprojecten worden niet vanuit deze site uitgevoerd.

### Railway

Het bestand `Staticfile` in de repositoryroot laat Railpack deze site herkennen en wijst `dist/` aan als de map die Caddy moet serveren. Er is geen buildstap, `package.json` of `start.sh` nodig. Caddy gebruikt de poort uit Railway's `PORT`-variabele. De navigatie gebruikt URL-fragmenten (`#stap/1`), dus `index_fallback` blijft uit en ontbrekende bestanden geven een 404.

Gebruik in Railway de volgende instellingen:

- **Root Directory:** de repositoryroot (`/`), waar `Staticfile` naast `dist/` staat. Alleen als deze hele projectmap in een grotere repository staat, kies je die submap, bijvoorbeeld `/site`.
- **Builder:** Railpack.
- **Build Command** en **Start Command:** laat eventuele eigen overrides leeg; Railpack stelt de statische server in.
- **Variables:** verwijder een eventuele afwijkende `RAILPACK_STATIC_FILE_ROOT`-waarde, omdat die voorrang heeft op `Staticfile`.
- **Healthcheck Path:** `/health` als je een healthcheck wilt instellen.

Zet de gewijzigde bestanden op de gekoppelde GitHub-branch en laat Railway die nieuwe commit deployen. Opnieuw deployen van de oude commit bevat de reparatie niet. De fout `Railpack could not determine how to build the app` ontstond doordat alleen `dist/index.html` aanwezig was en Railpack geen statische root kon bepalen.

De Railway-publicatie gebruikt de toegangsinstellingen van Railway; de eigenaarstoegang van Sites geldt daar niet automatisch. `scripts/serve.mjs` is uitsluitend de lokale previewserver.

Bron: [Railpack — Static Sites](https://railpack.com/languages/staticfile/).

## Documentatie

- `docs/UITBREIDINGSPLAN.md`: analyse, eisen en afwegingen voor toolhulp, SEO en gewichtloosheid.
- `docs/BRONNEN_1_2.md`: gecontroleerde officiële documentatie en grenzen.
- `docs/HERO_PROMPT_1_2.md`: exacte prompt voor het vervangende hoofdbeeld.
- `docs/REBRANDING.md`: actuele merkkeuzes, verwijdering van bezoekersgerichte frameworkverwijzingen en controles.
- `PLAN_SPOS.md`: intern analyse- en bouwplan van de eerste oplevering.
- `docs/ARCHITECTUUR_SPOS.md`: onderbouwing, grenzen, risico's en verificatie.
- `docs/APPLICATION_USER_OPERATING_MODEL.md`: feitelijke werking en gebruikersflows.
- `docs/BRONMAPPING.md`: koppeling tussen lessen, procescodes en opdrachten.
- `docs/IMAGE_PROMPTS.md`: herkomst van de twee gegenereerde beelden.
- `docs/validation.json`: laatst uitgevoerde structurele controles.
