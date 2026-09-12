# Lift — Van idee naar live

Nederlandstalige interactieve leeromgeving voor iemand zonder programmeerachtergrond. Veertien vrij toegankelijke stappen in vijf fasen, één fictief voorbeeldproject, visuele flows en alle 28 oorspronkelijke AI-opdrachten uit het handboek.

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
- `dist/styles.css`: kleuren, typografie, responsive layout en beweging.
- `dist/prompts.js`: oorspronkelijke opdrachten. Opnieuw genereren vanuit het handboek met `python scripts/extract_prompts.py`.
- `dist/downloads/handboek.md`: ongewijzigde bron. Wijzig dit bestand niet als onderdeel van gewone lesredactie.
- `dist/assets/`: originele illustraties en favicon.

Iedere les moet de vaste inhoudsvelden blijven bevatten. Een opdracht-ID verwijst naar een bestaande oorspronkelijke opdracht; schrijf aanvullingen in de context in `app.js`, zodat de bronopdracht herkenbaar blijft.

## Controleren

```sh
node --check dist/app.js
node --check dist/content.js
node --check dist/prompts.js
node scripts/validate.mjs
```

De validator controleert bronintegriteit, volledige inhoud, routes, gerenderde HTML-strings en de interactiecontracten van de handlers. Hij schrijft `docs/validation.json`. Dit is geen browsertest of visuele beoordeling.

## Publicatie

Dit is een statische site. `dist/` bevat de daadwerkelijke bronbestanden die worden gepubliceerd; er is geen bundelstap. `.openai/hosting.json` koppelt deze map aan de bestaande Sites-site. Behoud die identiteit bij wijzigingen. Publiceer de gecontroleerde bron via de Sites-werkwijze en behoud de huidige toegang. De eerste versie wordt alleen voor de eigenaar gepubliceerd.

Geen appdatabase, accounts, analytics, AI-API of externe bibliotheken. Sites verzorgt de toegangslaag buiten deze applicatie. De site kopieert alleen op verzoek tekst naar het klembord; opdrachten en publicaties voor leerlingprojecten worden niet vanuit deze site uitgevoerd.

## Documentatie

- `PLAN_SPOS.md`: diepgaand analyse- en bouwplan.
- `docs/ARCHITECTUUR_SPOS.md`: onderbouwing, grenzen, risico's en verificatie.
- `docs/APPLICATION_USER_OPERATING_MODEL.md`: feitelijke werking en gebruikersflows.
- `docs/BRONMAPPING.md`: koppeling tussen lessen, procescodes en opdrachten.
- `docs/IMAGE_PROMPTS.md`: herkomst van de twee gegenereerde beelden.
- `docs/validation.json`: laatst uitgevoerde structurele controles.
