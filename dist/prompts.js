// Canonical task goals. Output contracts live in prompt-contracts.js.
export const prompts = [
  {
    "id": 1,
    "title": "Maak je projectbrief",
    "role": "projectbegeleider",
    "text": "Zet mijn idee om in een beknopte projectbrief waarmee ik de scope van mijn eerste website kan beoordelen. Ontwerp of bouw in deze stap nog niets.",
    "result": "Een projectbrief die je kunt nalezen en opslaan in de projectroot."
  },
  {
    "id": 2,
    "title": "Onderzoek je probleem met bronnen",
    "role": "projectbegeleider",
    "text": "Onderzoek mijn vragen voordat ik het aanbod vastleg. Zoek op internet als dat beschikbaar is en meld het als dat niet kan; toets ook verklaringen die mijn idee tegenspreken.",
    "result": "Een onderzoeksoverzicht met bronlinks, open vragen en interviewvragen."
  },
  {
    "id": 3,
    "title": "Schrijf een duidelijk aanbod",
    "role": "projectbegeleider",
    "text": "Vertaal mijn projectbrief en onderzoek naar één helder aanbod voor de eerste versie. Gebruik gewone taal voor de opgegeven doelgroep en kies geen prijs zonder aangeleverde basis.",
    "result": "Een korte aanbodtekst die past bij de eerste versie."
  },
  {
    "id": 4,
    "title": "Bereid een kleine praktijktoets voor",
    "role": "projectbegeleider",
    "text": "Bereid een kleine praktijktoets voor waarmee ik één onzekere aanname met echte gebruikers kan toetsen. Voer geen fictieve gesprekken op als onderzoeksresultaat.",
    "result": "Een testopzet en invulblad; reacties voeg je toe na de echte toets."
  },
  {
    "id": 5,
    "title": "Schrijf de bezoekersroute uit",
    "role": "projectbegeleider",
    "text": "Vertaal mijn aanbod naar één volledige bezoekersroute, van instap tot afgehandeld resultaat. Werk de noodzakelijke afhandeling door een medewerker mee uit.",
    "result": "Een bezoekersroute met foutgevallen en afhandeling door de medewerker."
  },
  {
    "id": 6,
    "title": "Maak je schermenlijst en teksten",
    "role": "projectbegeleider",
    "text": "Maak de inhoudelijke specificatie voor alle schermen in mijn bezoekersroute. Werk schermen, zichtbare teksten en de SEO-basis samen uit, zodat een ontwerper dezelfde inhoud kan gebruiken.",
    "result": "Een uitgewerkte schermenlijst met alle teksten en de SEO-basis in één document."
  },
  {
    "id": 7,
    "title": "Ontwerp je schermen in Stitch",
    "role": "projectbegeleider",
    "text": "Ontwerp in Stitch de opgegeven schermen voor desktop en mobiel met mijn gekozen teksten, route en stijl. Maak samenhangende schermen en de overdracht waarmee een bouwer de interacties kan implementeren.",
    "result": "Schermontwerpen, beschikbare exports en een Markdown-overdracht voor de bouwer."
  },
  {
    "id": 8,
    "title": "Verbeter het ontwerp in Stitch",
    "role": "projectbegeleider",
    "text": "Verbeter de bestaande Stitch-ontwerpen op basis van mijn concrete feedback. Behoud afgesproken functies en stijl; werk het bestaande ontwerpdocument bij als dat toegankelijk is.",
    "result": "Een aangepaste ontwerpversie met een korte lijst wijzigingen."
  },
  {
    "id": 9,
    "title": "Lees de projectmap en maak het bouwplan",
    "role": "bouwbegeleider",
    "text": "Maak vanuit de werkelijk beschikbare projectmap een uitvoerbaar bouwplan voor één eerste route. Neem seo-plan.md mee als dat beschikbaar is en leg de GitHub- en publicatieafspraak vast. Bouw of installeer nu nog niets; lever het plan ter beoordeling.",
    "result": "Een beoordeelbaar bouwplan met technische keuzes, kleine stappen en controles."
  },
  {
    "id": 10,
    "title": "Laat website, demo en inloggen aansluiten",
    "role": "bouwbegeleider",
    "text": "Onderzoek en herstel de opgegeven overgangen tussen een bestaande website, demo en inlogomgeving. Voer alleen de opgedragen correcties uit en toets daarna dezelfde route.",
    "result": "Een gecontroleerde route tussen de bestaande onderdelen."
  },
  {
    "id": 11,
    "title": "Bouw de eerste complete bezoekersroute",
    "role": "bouwbegeleider",
    "text": "Bouw de genoemde complete bezoekersroute uit het nagekeken bouwplan, met gekozen tekst en ontwerp. Bouw de afgesproken SEO-basis mee; voeg meting alleen toe als de meetafspraak en echte instellingen bekend zijn.",
    "result": "Een werkende route, lokaal adres en overzicht van uitgevoerde controles."
  },
  {
    "id": 12,
    "title": "Maak een eenvoudig startbestand",
    "role": "bouwbegeleider",
    "text": "Maak of verbeter een eenvoudig startbestand voor de bestaande website en het gebruikte besturingssysteem. Hergebruik de echte startwijze van het project en controleer het starten en stoppen.",
    "result": "Een getest startbestand met korte start- en stopinstructies."
  },
  {
    "id": 13,
    "title": "Open de huidige website lokaal",
    "role": "bouwbegeleider",
    "text": "Start de bestaande website volgens de startinstructie en maak haar lokaal beschikbaar. Onderzoek een eventuele startfout zonder andere programma’s of gegevens te wijzigen om die te omzeilen.",
    "result": "Een lokaal geopende website of een concrete uitleg van de startfout."
  },
  {
    "id": 14,
    "title": "Bereid mijn test voor",
    "role": "bouwbegeleider",
    "text": "Bereid een testsessie voor die ik zelf kan uitvoeren op de huidige projectversie. Maak veilige testgegevens en concrete testgevallen; voer deze gebruikerssessie nog niet namens mij uit.",
    "result": "Een testlijst die je zelf kunt uitvoeren."
  },
  {
    "id": 15,
    "title": "Herstel de fout die ik heb gevonden",
    "role": "bouwbegeleider",
    "text": "Reproduceer de fout uit mijn beschrijving, onderzoek de oorzaak en herstel het afgebakende probleem. Controleer de oorspronkelijke handeling opnieuw en neem relevante gevolgen voor andere onderdelen mee.",
    "result": "Een gerichte reparatie met hercontrole en bijgewerkte foutenlijst."
  },
  {
    "id": 16,
    "title": "Maak de pagina’s duidelijker",
    "role": "bouwbegeleider",
    "text": "Verbeter de duidelijkheid van de genoemde bestaande schermen op desktop en mobiel. Voer de opgedragen verbeteringen uit met behoud van functies en de gekozen stijl.",
    "result": "Duidelijkere schermen met behoud van de werking."
  },
  {
    "id": 17,
    "title": "Controleer de hele website vóór publicatie",
    "role": "bouwbegeleider",
    "text": "Beoordeel of de actuele website aan de afgesproken releasevoorwaarden voldoet. Test de complete route en relevante foutgevallen; herstel opgedragen blokkerende fouten en test opnieuw. Publiceer in deze opdracht niet.",
    "result": "Een releasecheck met echte testuitkomsten en nog op te lossen fouten."
  },
  {
    "id": 18,
    "title": "Maak een herhaalbare testopdracht",
    "role": "bouwbegeleider",
    "text": "Maak de afgesproken tests herhaalbaar met de bestaande testomgeving en een eenvoudige teststarter. Documenteer de echte dekking en rapporteer ook mislukte runs.",
    "result": "Een teststarter, uitleg en testresultaten in de projectroot."
  },
  {
    "id": 19,
    "title": "Maak de bestanden geschikt voor publicatie",
    "role": "bouwbegeleider",
    "text": "Maak de bedoelde websitebestanden geschikt voor publicatie. Behoud oorspronkelijke bronbestanden en controleer of publiceerbare inhoud gescheiden blijft van lokale of gevoelige informatie.",
    "result": "Geschikte webbestanden en een gecontroleerde publicatielijst."
  },
  {
    "id": 20,
    "title": "Zet de goedgekeurde versie op Railway",
    "role": "bouwbegeleider",
    "text": "Zet de goedgekeurde versie via de bestaande GitHub- en Railway-route live als versie, vrijgave en toegang zijn vastgesteld. Controleer de inrichting met actuele officiële documentatie en geef precieze handmatige stappen waar toegang ontbreekt.",
    "result": "Een geteste liveversie en release.md met adres en herstelafspraak."
  },
  {
    "id": 21,
    "title": "Maak een uitnodiging voor je eerste bezoekers",
    "role": "projectbegeleider",
    "text": "Bereid een passende uitnodiging voor mijn eerste bezoekers voor op basis van wat werkelijk live werkt. Ik kies de ontvangers en verstuur het bericht zelf.",
    "result": "Een kort introductieplan en een bericht dat je zelf kunt versturen."
  },
  {
    "id": 22,
    "title": "Controleer de eerste ervaring",
    "role": "projectbegeleider",
    "text": "Onderzoek of de belofte in mijn uitnodiging overeenkomt met de eerste ervaring van een nieuwe bezoeker. Gebruik aangeleverde inhoud of echt bekeken pagina’s en vertaal de gevonden verschillen naar verbeterpunten.",
    "result": "Een lijst met verschillen tussen belofte en werkelijke eerste ervaring."
  },
  {
    "id": 23,
    "title": "Bewaar je werk aan het einde van de sessie",
    "role": "bouwbegeleider",
    "text": "Rond de werksessie af met een bruikbare overdracht en actuele verwijzingen in START-HIER.md. Bewaar gecontroleerd werk alleen volgens de al vastgelegde GitHub- en publicatieafspraak; ontbreekt die, laat commit/push/publicatie als open actie staan.",
    "result": "Een bijgewerkte overdracht met opgeslagen werk en een volgende taak."
  },
  {
    "id": 24,
    "title": "Lees het project en hervat je werk",
    "role": "bouwbegeleider",
    "text": "Hervat mijn project door de vorige overdracht met de huidige bestanden te vergelijken. Voer alleen de concreet opgedragen vervolgtaak uit; ontbreekt daarvoor een wezenlijke keuze, leg die eerst voor.",
    "result": "De actuele stand van het project en een gecontroleerde vervolgstap."
  },
  {
    "id": 25,
    "title": "Leg de gebouwde pagina’s en teksten vast",
    "role": "bouwbegeleider",
    "text": "Werk de bestaande schermen- en tekstinventaris bij op basis van de huidige website. Leg de echte inhoud vast zonder productcode te veranderen en behoud geldige eerdere ontwerpbeslissingen.",
    "result": "Een actuele paginalijst en volledige tekstinventaris."
  },
  {
    "id": 26,
    "title": "Leg uit hoe de website technisch werkt",
    "role": "bouwbegeleider",
    "text": "Beschrijf in gewone taal hoe de huidige website technisch werkt. Baseer de uitleg op bestaande code en instellingen en wijzig met deze opdracht geen productcode.",
    "result": "Een technische uitleg die aansluit op de huidige bestanden."
  },
  {
    "id": 27,
    "title": "Schrijf de gebruikershandleiding",
    "role": "bouwbegeleider",
    "text": "Maak een bruikbare handleiding voor de opgegeven lezers op basis van de actuele website. Schrijf concrete handelingen die zij op de echte schermen kunnen uitvoeren.",
    "result": "Een handleiding waarmee bezoeker en beheerder de website kunnen gebruiken."
  },
  {
    "id": 28,
    "title": "Controleer of de handleiding nog klopt",
    "role": "bouwbegeleider",
    "text": "Controleer de actuele documentatie in twee richtingen: ontbreekt er uitleg over bestaande werking, en beschrijft de uitleg functies die niet bestaan? Corrigeer aantoonbare fouten en registreer de vergelijking.",
    "result": "Bijgewerkte documentatie en een overzicht van de uitgevoerde vergelijking."
  },
  {
    "id": 29,
    "title": "Beperk de website tot de eerste versie",
    "role": "bouwbegeleider",
    "text": "Baken de eerste versie af op basis van mijn aanbod. In deze vroege stap maak je een scopebesluit; pas een bestaande toepassing alleen aan als ik die concrete wijziging afzonderlijk heb opgedragen.",
    "result": "Een afgebakende eerste versie met onderbouwde keuzes en afhankelijkheden."
  },
  {
    "id": 30,
    "title": "Verbeter het gebruik op een telefoon",
    "role": "bouwbegeleider",
    "text": "Verbeter de opgegeven mobiele gebruikersroute binnen de bestaande stijl. Test de getroffen handelingen en vergelijk met desktop om regressies te vinden.",
    "result": "Verbeterde mobiele bediening met testuitkomsten."
  },
  {
    "id": 31,
    "title": "Controleer de talen van je website",
    "role": "bouwbegeleider",
    "text": "Controleer en herstel de bestaande website in de afgesproken talen. Neem alle zichtbare teksten en taalafhankelijke navigatie mee zonder nieuwe talen toe te voegen.",
    "result": "Een consistente website in de afgesproken talen."
  },
  {
    "id": 32,
    "title": "Controleer waar gegevens naartoe gaan",
    "role": "bouwbegeleider",
    "text": "Onderzoek waarom de opgegeven gegevens onderweg ontbreken of verkeerd verschijnen. Herstel het opgedragen probleem en test de gegevensstroom van invoer tot ontvangst en weergave.",
    "result": "Een gecontroleerde gegevensroute en gerichte reparaties."
  },
  {
    "id": 33,
    "title": "Onderzoek traagheid en kosten",
    "role": "bouwbegeleider",
    "text": "Onderzoek de opgegeven trage handeling en eventuele kosten met werkelijke metingen. Voer de opgedragen gerichte verbetering uit en vergelijk de uitkomsten onder dezelfde omstandigheden.",
    "result": "Een meting vóór en na herstel en een onderbouwde kostenuitleg."
  },
  {
    "id": 34,
    "title": "Controleer de beloften op je website",
    "role": "bouwbegeleider",
    "text": "Toets de aangeleverde productbeloften aan aantoonbare werking en bruikbare bronnen. Stel eerlijke tekstcorrecties op en pas alleen de opgedragen teksten aan.",
    "result": "Controleerbare beloften en concrete tekstcorrecties."
  },
  {
    "id": 35,
    "title": "Bereid een overstap naar andere software voor",
    "role": "bouwbegeleider",
    "text": "Bereid de gewenste overstap naar andere software voor. Onderzoek behoud van werking en beheer met actuele officiële informatie; voer de overstap in deze opdracht nog niet uit.",
    "result": "Een overstapplan met behoud van noodzakelijke werking."
  },
  {
    "id": 36,
    "title": "Controleer de AI-functie in je eigen product",
    "role": "bouwbegeleider",
    "text": "Controleer de genoemde AI-functie in het product tegen haar gewenste gedrag en toegangsgrenzen. Herstel alleen opgedragen fouten en toets ze opnieuw met dezelfde relevante gevallen.",
    "result": "Een testoverzicht voor de AI-functie met fouten en herstel."
  },
  {
    "id": 37,
    "title": "Voer één wijziging overal door",
    "role": "bouwbegeleider",
    "text": "Voer de concreet omschreven wijziging door op alle toepasselijke plekken in het project. Controleer samenhang en verwijzingen en houd oorspronkelijke historische bronnen intact.",
    "result": "De wijziging is op de bedoelde plekken doorgevoerd en gecontroleerd."
  },
  {
    "id": 38,
    "title": "Controleer vindbaarheid en bezoekersmeting",
    "role": "bouwbegeleider",
    "text": "Onderzoek vindbaarheid en bezoekersmeting van de bestaande website. Kies één onderbouwde verbetering en voer alleen de opgedragen aanpassingen uit.",
    "result": "Een SEO- en meetcontrole met concrete verbeterpunten."
  },
  {
    "id": 39,
    "title": "Ruim dubbele code en uitleg op",
    "role": "bouwbegeleider",
    "text": "Onderzoek dubbelingen in de genoemde code en uitleg. Voer onderbouwde, opgedragen opruiming in kleine wijzigingen uit en behoud gegevens, andermans werk en werkende gebruikersroutes.",
    "result": "Een overzichtelijker project met behoud van werking en informatie."
  },
  {
    "id": 40,
    "title": "Maak de afgesproken softwarekoppeling",
    "role": "bouwbegeleider",
    "text": "Werk de afgesproken koppeling tussen de genoemde systemen uit. Begin bij stap 7 met het gegevenscontract; bouw alleen als het nagekeken plan deze specifieke implementatie al toestaat.",
    "result": "Een gecontroleerde koppeling met uitleg voor gebruik en beheer."
  },
  {
    "id": 41,
    "title": "Bewaar je wijzigingen op GitHub",
    "role": "Ontwikkelaar",
    "result": "De bedoelde wijziging staat op de juiste GitHub-branch, met een controleerbare versielink.",
    "text": "Controleer de bedoelde wijzigingen, voer passende controles uit en neem alleen het opgegeven werk in de commit op. Behoud andermans wijzigingen, overschrijf geen geschiedenis en neem geen geheime waarden, lokale logs of onnodige grote bronbestanden mee. De publicatiekeuze hieronder bepaalt de toegestane vervolghandeling."
  },
  {
    "id": 42,
    "title": "Koppel je project aan GitHub",
    "role": "Ontwikkelaar",
    "result": "Je bouwer werkt in de juiste projectmap met de bedoelde repository.",
    "text": "Verbind de geopende projectmap met de exact opgegeven GitHub-repository. Controleer bestaande koppeling, branch en onopgeslagen wijzigingen en hergebruik een juiste koppeling. Laat de gebruiker de aanmelding afronden als toegang ontbreekt; vraag niet om tokens in de chat. Committen, pushen en publiceren horen bij een afzonderlijke opdracht."
  }
];
