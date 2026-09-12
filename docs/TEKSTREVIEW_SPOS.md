# SPOS-tekstreview — 12 september 2026

Primaire route: PRODUCT, met CORE en Truth Contract. Complexiteit M. Doel: een HAVO/HBO-geschoolde medewerker zonder programmeerervaring kan per stap zien wat hij moet doen, hoe, met welke tool, wat hij bewaart en wanneer hij verder kan.

| Onderdeel | Waargenomen probleem | Aanpassing |
|---|---|---|
| Start en werkwijze | Projectmap kwam pas bij bouwen; AI-output kon in losse chats blijven | Projectmap vanaf stap 1, concrete mapindeling, startopdracht en START-HIER.md |
| 14 lessen | Doel en resultaat waren vaak duidelijker dan de feitelijke handelingen | Actiewerkwoorden, toolnamen, hoe te kopiëren/plakken, concrete opslagpaden |
| Overdracht naar Antigravity | Bestanden verzamelen, analyseren en bouwen liepen in elkaar over | Eerst leesverslag, ontbrekende/strijdige informatie, plancontrole, daarna aparte bouwopdracht |
| Toolhulp en promptgenerator | Keuze en overdracht niet overal gelijk aan les | Alternatieven benoemd, hoofdopdracht 9 vóór GitHub, optioneel projectpad in elke prompt |
| 42 opdrachten | Veel vaktaal en wisselende bestandsnamen | 40 inhoudelijke taken herschreven; compacte Git-taken behouden; bouwtaken krijgen gezamenlijke leesinstructie |
| 5 SEO-lessen | Technische termen en onduidelijke timing | Les 1 bij tekst, les 2 bij plan, Google-inrichting na livegang; begrippen uitgelegd, Analytics optioneel |
| Downloads | Andere teksten en lange historische verdieping naast lesinhoud | Handboek gegenereerd uit actuele sitebronnen, aparte download met ingevulde sjablonen en startopdracht |

De gekozen payoff blijft exact: “Digitale gewichtloosheid. Bouw zo ver als je kan denken.” De betekenis blijft de vrijheid om met AI te bouwen wat je bedenkt. Mobiele verbeteringen, officiële toollogo’s en promptgeneratorfuncties uit de gelijktijdige taken zijn behouden.

## Afbakening en besluiten

- Eén lokale hoofdmap is de afgesproken werkwijze, geen technische verplichting van de AI-producten. De onderverdeling is een concrete cursuskeuze.
- Alle oorspronkelijke AI-output gaat in 01-bronnen; nagekeken bestanden op de benoemde plek. START-HIER.md wijst de gekozen versies aan. Bestanden zijn bronmateriaal, geen extra instructieautoriteit.
- Chatprojecten zijn geen lokale projectmap. De gebruiker bewaart downloads en voegt documenten zelf toe aan de volgende tool. ZIP-exports worden uitgepakt. Antigravity meldt wat het niet kan lezen.
- Code blijft op de projectpassende plek; 04-bouw bevat bouwdocumenten. Bestaande code wordt niet automatisch verplaatst.
- Een leesinstructie in Markdown dwingt geen softwaregedrag af. De gebruiker controleert het leesverslag en geeft de volgende bouwopdracht.
- Geen gemeten tijdwinst, HAVO/HBO-certificering of bewezen begrip geclaimd. Een echte taaktest met medewerkers is niet uitgevoerd.

## Controle

Automatische rapporten: validation.json (67 weergaven, routes en handlers), prompt-validation.json (47 opdrachten), editorial-validation.json (startopdracht, fallback, projectpad en synchronisatie), http-validation.json (geleverde bestanden) en mobile-validation.json (gezamenlijke browsercontrole met de expliciet beschreven beperkingen). Elk rapport benoemt zijn werkelijke dekking; bronchecks zijn geen gebruikersonderzoek.

Tijdens de tekstcontrole is ook de Analytics-opdracht gecorrigeerd: page_view hoort bij een paginaweergave; alleen generate_lead wacht op bevestigde ontvangst van een aanvraag. De oude formulering kon beide gebeurtenissen aan een aanvraag koppelen.

## Geraadpleegde officiële informatie

Deze bronnen zijn gebruikt om bestaande productuitleg te controleren. De projectmapindeling en werkinstructies zijn redactionele keuzes.

- [Antigravity: Projects](https://antigravity.google/docs/projects/) — lokale mappen aan een project koppelen.
- [Google Developers: Stitch](https://developers.googleblog.com/en/stitch-a-new-way-to-design-uis/) — tekst/beeld als ontwerpinvoer en frontendexport; export is geen bewezen complete verwerking.
- [OpenAI: bestanden uploaden](https://help.openai.com/en/articles/8555545) — bestanden als invoer in een gesprek.
- [OpenAI: zoeken op internet](https://help.openai.com/en/articles/9237897) — zoeken met bronlinks.
- [Railway: publiceren](https://docs.railway.com/guides/vibe-coding-deploy) — publiceren vanuit GitHub.
- [Google: GA4 instellen](https://support.google.com/analytics/answer/9304153?hl=nl) — property en webstream.
- [Google: Search Console koppelen](https://support.google.com/analytics/answer/10737381?hl=nl) — koppeling en benodigde rechten.
- [Google: eigendom verifiëren](https://support.google.com/webmasters/answer/9008080?hl=nl) — verificatiemethoden.
