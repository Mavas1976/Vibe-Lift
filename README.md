# VIBE Lift — Digitale gewichtloosheid

Nederlandstalige interactieve leeromgeving voor iemand zonder programmeerachtergrond. Veertien vrij toegankelijke stappen in vijf fasen, één fictief voorbeeldproject, visuele flows en alle 28 AI-opdrachten uit de bewerkte lezerseditie uit het handboek.

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
- `dist/prompts.js`: opdrachten uit de actuele VIBE Lift-lezerseditie. Opnieuw genereren vanuit het handboek met `python scripts/extract_prompts.py`.
- `dist/downloads/handboek.md`: VIBE Lift-lezerseditie 1.1. Wijzig een opdracht in deze handleiding en genereer daarna `prompts.js` opnieuw. Het oorspronkelijke aangeleverde document wordt buiten de publicatiemap bewaard.
- `dist/assets/`: originele illustraties en favicon.

Iedere les moet de vaste inhoudsvelden blijven bevatten. Een opdracht-ID verwijst naar een bestaande opdracht uit de lezerseditie; schrijf aanvullingen in de context in `app.js`, zodat context en kopieerbare opdracht herkenbaar gescheiden blijven.

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

- `docs/REBRANDING.md`: actuele merkkeuzes, verwijdering van bezoekersgerichte frameworkverwijzingen en controles.
- `PLAN_SPOS.md`: intern analyse- en bouwplan van de eerste oplevering.
- `docs/ARCHITECTUUR_SPOS.md`: onderbouwing, grenzen, risico's en verificatie.
- `docs/APPLICATION_USER_OPERATING_MODEL.md`: feitelijke werking en gebruikersflows.
- `docs/BRONMAPPING.md`: koppeling tussen lessen, procescodes en opdrachten.
- `docs/IMAGE_PROMPTS.md`: herkomst van de twee gegenereerde beelden.
- `docs/validation.json`: laatst uitgevoerde structurele controles.
