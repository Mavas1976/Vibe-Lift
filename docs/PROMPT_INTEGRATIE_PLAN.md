# SPOS — invulbare opdrachten per ontwikkelstap

## Scope en besluit

Complexiteit L. Product als primaire route; Build en Prompt Engineering voor uitvoering.
Core en Truth Contract zijn in deze taak geladen. De bijgevoegde schermafbeelding en
bestaande broncode tonen dezelfde beperking: context staat buiten de gekopieerde tekst.
De huidige kaart gebruikt de toolverzameling van de hele les, waardoor GitHub of een
onderzoekstool ook bij een opdracht aan de bouwer kan verschijnen.

We breiden de bestaande statische site, lessen en kaarten uit. Geen nieuwe applicatie,
login of AI-koppeling. De 40 gegeneraliseerde prompts worden redactioneel geschikt gemaakt
voor de bestaande 14 stappen. Twee korte opdrachten bedienen repositorykoppeling en push.
De vijf bestaande SEO-opdrachten krijgen dezelfde invoer- en kopieerroute.

## Gebruikersroute

1. Open de tab Promptgenerator van de relevante stap.
2. Vul één keer projectnaam, doel en doelgroep in. Alleen het doel is bij vroege
   inhoudelijke opdrachten nodig; een concrete GitHub-opdracht vraagt geen volledig projectplan.
3. Kies uit uitsluitend passende AI-omgevingen. Onderzoek/schrijven: ChatGPT of Claude;
   ontwerpen: Stitch; bouwen, controles en versiehandelingen: Antigravity.
4. Geef de beperkte, taakspecifieke input. Labels en voorbeelden maken duidelijk wat nodig is.
5. Kopieer één complete opdracht: doel, rol, werkwijze, projectcontext en eigen stapinput.
6. Open zelf de gekozen tool, plak de opdracht en voeg daar eventuele bestanden toe.
7. Controleer het genoemde resultaat en neem het mee naar de volgende stap.

Basisafspraken worden automatisch opgenomen. Geen extra basisprompt die een beginner
eerst moet vinden. Ontwerpopdracht 07 instrueert Stitch rechtstreeks schermen te maken.
Publieke teksten blijven zonder verwijzing naar het interne framework.

## Begrijpelijkheid en grenzen

- Hoofdopdracht staat open; gerichte vervolgopdrachten staan gegroepeerd en dichtgeklapt.
- Normale instellingen blijven in de uitleg. Alleen concrete AI-werkzaamheden hebben een prompt.
- GitHub en Railway zijn bestemmingen, geen plakvak voor een bouwprompt.
- Push en livegang zijn aparte opdrachten. Push kan een bestaande automatische publicatie starten;
  dit wordt bij de push-input expliciet benoemd.
- Invoer blijft lokaal in hetzelfde tabblad; geen verzending naar een server.
  Opslagfalen geeft een zichtbare melding en valt terug op geheugen. Wissen is bereikbaar.
- Voorbeeldtekst is een placeholder en komt nooit automatisch in de gekopieerde prompt.
- Ontbrekende verplichte input geeft een melding bij het veld en focus op het eerste ontbrekende veld.
- Kopiëren gebruikt de getoonde samengestelde tekst. Bij geblokkeerd klembord blijft handmatig
  selecteren beschikbaar. Tool openen verzendt niets en claimt geen automatische bijlagen.

## Failure modes en controle

| Categorie | Risico | Controle |
|---|---|---|
| Invoer | Lege verplichte velden, te lange tekst, HTML | Lengtegrenzen, expliciete validatie, escaping bij rendering |
| State | Context verdwijnt bij stapwissel of opslag wordt geweigerd | Gedeelde tabbladdraft, veilige restore, geheugenfallback en wissen |
| Externe afhankelijkheid | Klembord geweigerd, tool beperkt beschikbaar | Selecteerbare tekst en gewone officiële links |
| Logica | Verkeerde tool of oude context wordt gekopieerd | Eén composer en schema voor UI, kopie en download; wijzigingshandlers |
| Gegevensintegriteit | Voorbeeldwaarden of niet-meegestuurde bestanden worden als echt behandeld | Lege defaultwaarden, expliciete bijlageninstructie, bronstatus |
| Gebruik | Alle 47 opdrachten overspoelen beginner | Stapgebonden selectie, hoofdtaak vooraan, optionele verdieping |

## Acceptatie

Alle 40 bronprompt-IDs zijn aan één hoofdstap gekoppeld. Repositorykoppeling en push
zijn uitvoerbare taalopdrachten. Alle vijf SEO-lessen gebruiken de composer; pure
accountinstellingen krijgen geen extra prompt. Vroege prompts kunnen met één idee
starten; een push vereist repository, branch en te bewaren wijziging.
Geen privébronarchief wordt naar de site gekopieerd.

De bestaande structurele controles worden aangepast op de nieuwe functionele contracten.
Aanvullend: invoerwijziging → exacte kopie; ontbrekende invoer; HTML-tekst; wijziging van tool;
stapwissel; herstel van tabbladdraft; klembord- en opslagfalen; wissen.
Geen browsertest of gebruikersonderzoek wordt geclaimd zonder daadwerkelijke uitvoering.

## Officiële bronnen geraadpleegd op 12 september 2026

- https://antigravity.google/docs/features — projecten, scoped toegang, versiebeheer en push.
- https://developers.googleblog.com/stitch-a-new-way-to-design-uis/ — ontwerp uit tekst en iteratie.
- https://support.claude.com/en/articles/11088861-use-research-on-claude — onderzoeksmogelijkheden.
- https://help.openai.com/en/articles/10169521-projects-in-chatgpt — projectcontext en bestanden.

De toolroutering is een ontwerpkeuze op basis van die capabilities. Beschikbaarheid
per account en toekomstige productwijzigingen blijven buiten de technische garantie.

## Oplevering en controle

Geïmplementeerd: 42 stapopdrachten en 5 SEO-opdrachten, passende toolkeuze, hergebruikte projectcontext, eigen stapvelden, complete kopie en uitklapbaar voorbeeld. Hoofdtaken komen eerst, extra taken zijn optioneel. Instellingen blijven gewone uitleg. GitHub-koppelen en pushen zijn compacte uitvoeropdrachten; een keuze voor alleen lokaal bewaren verwijdert de pushinstructie en past het verwachte resultaat aan.

De gezamenlijke versie bevat ook de afgestemde merk- en ontwerpverbeteringen uit DESIGN_SPOS.md. De bestaande social preview en eigenaarstoegang zijn behouden. Privébronarchieven en ingevoerde projectgegevens zitten niet in de publicatiemap.

Uitgevoerd op 12 september 2026: 2.650 bron-, route- en handlercontroles over 67 weergaven; 368 gerichte controles van de promptcomposer; 12 bewegingscontroles; 25 bestanden via HTTP byte-voor-byte vergeleken met de bron, plus ontbrekend bestand en geweigerde schrijfmethode. JavaScript-syntax en git diff --check slagen. Zie validation.json, prompt-validation.json en http-validation.json.

Dit onderbouwt de inhoud, samenstelling en afhandeling in code. Visuele browsercontrole, schermlezertest en een gebruikerstest met beginners zijn niet uitgevoerd; begrijpelijkheid is een ontwerpkeuze, geen gemeten gebruiksresultaat.
