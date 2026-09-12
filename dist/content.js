export const phases = [
  {
    "id": 0,
    "name": "Begrijpen",
    "caption": "Maak je map, onderzoek en aanbod",
    "color": "peach",
    "symbol": "spark"
  },
  {
    "id": 1,
    "name": "Ontwerpen",
    "caption": "Werk pagina’s, teksten en ontwerp uit",
    "color": "lavender",
    "symbol": "layers"
  },
  {
    "id": 2,
    "name": "Bouwen",
    "caption": "Laat plannen, bouwen en starten",
    "color": "blue",
    "symbol": "box"
  },
  {
    "id": 3,
    "name": "Verbeteren",
    "caption": "Test de website en herstel fouten",
    "color": "mint",
    "symbol": "check"
  },
  {
    "id": 4,
    "name": "Lanceren",
    "caption": "Publiceer, verzamel reacties en verbeter",
    "color": "peach",
    "symbol": "arrow"
  }
];
export const lessons = [
  {
    "id": 1,
    "phase": 0,
    "title": "Maak je projectmap en beschrijf je idee",
    "short": "Projectmap & idee",
    "tagline": "Begin met één map voor al je werk.",
    "intro": "Maak eerst één projectmap voor al je bestanden. Laat daarna ChatGPT of Claude je idee uitwerken: voor wie is je website, welk probleem los je op en wat moet een bezoeker kunnen doen?",
    "goal": "Een ingerichte projectmap met een nagekeken projectbrief.",
    "input": "Je idee en een vaste plek op je computer voor het project.",
    "output": "02-plan/projectbrief.md",
    "sources": "P01–P03",
    "prompts": [
      1
    ],
    "actions": [
      [
        "Richt je projectmap in",
        "Volg eerst de mapinstructie hieronder. Laat Antigravity de submappen en START-HIER.md maken. Gebruik deze map bij alle volgende stappen."
      ],
      [
        "Schrijf drie dingen op",
        "Noteer wie je wilt helpen, wat voor die persoon nu lastig is en welke handeling je website mogelijk moet maken. Bijvoorbeeld: een bezoeker kiest een workshop en vraagt een plek aan."
      ],
      [
        "Laat ChatGPT of Claude de brief maken",
        "Open het tabblad Promptgenerator. Vul je idee en doelgroep in, kopieer de opdracht en plak die in één van deze tools. Voeg je notities toe. Vraag om een projectbrief van maximaal één pagina."
      ],
      [
        "Lees en bewaar de projectbrief",
        "Kloppen de doelgroep en het probleem? Staat er één duidelijke eerste taak? Laat fouten aanpassen. Bewaar de gekozen tekst als 02-plan/projectbrief.md en zet die bestandsnaam in START-HIER.md."
      ]
    ],
    "flow": [
      "Projectmap maken",
      "Idee beschrijven",
      "Brief bewaren"
    ],
    "example": {
      "title": "Een workshop boeken begint met duidelijkheid.",
      "text": "Studio Maan is een fictieve keramiekstudio. De eigenaar krijgt losse vragen over workshops via berichten. Geïnteresseerden weten niet welke data beschikbaar zijn.",
      "items": [
        [
          "Voor wie",
          "Beginners die een creatieve workshop willen volgen."
        ],
        [
          "Probleem",
          "Data, inhoud en aanmelding zijn verspreid over berichten."
        ],
        [
          "Eerste resultaat",
          "Een bezoeker kan een workshop vinden en een plek aanvragen."
        ],
        [
          "Nog niet",
          "Online betalen, een eigen account en een uitgebreide agenda."
        ]
      ]
    },
    "checks": [
      "De projectmap en START-HIER.md bestaan en je kunt ze terugvinden.",
      "De projectbrief beschrijft voor wie je bouwt en wat die persoon moet kunnen doen.",
      "Onzekere punten en ideeën voor later staan apart."
    ],
    "pitfall": "Meteen een mooie homepage laten maken. Keer eerst terug naar de gebruiker en de taak; anders ontwerp je een verpakking voor een onduidelijk idee.",
    "term": [
      "Projectbrief",
      "Een kort document met doelgroep, probleem, gewenste uitkomst en grenzen van de eerste versie."
    ]
  },
  {
    "id": 2,
    "phase": 0,
    "title": "Controleer of het probleem echt bestaat",
    "short": "Onderzoek",
    "tagline": "Controleer bronnen en praat met je doelgroep.",
    "intro": "Gebruik AI om bestaande oplossingen te vergelijken. Spreek ook zelf mensen uit je doelgroep. Zo voorkom je dat je een website bouwt op basis van alleen je eigen aannames.",
    "goal": "Een overzicht van wat je weet, met bronnen en open vragen.",
    "input": "02-plan/projectbrief.md en vragen over je doelgroep.",
    "output": "02-plan/onderzoek.md",
    "sources": "P04–P05",
    "prompts": [
      2
    ],
    "actions": [
      [
        "Maak je onderzoeksvragen",
        "Open ChatGPT of Claude, voeg projectbrief.md toe en vraag welke informatie nog ontbreekt. Kies vragen die je plan kunnen veranderen, zoals: hoe meldt iemand zich nu aan en wat gaat daarbij mis?"
      ],
      [
        "Laat bestaande oplossingen vergelijken",
        "Gebruik de AI-opdracht bij deze stap. Zet zoeken op internet aan; kies uitgebreid onderzoek alleen als je meerdere bronnen moet vergelijken. Vraag per aanbieder om dezelfde punten en een bronlink. Open de links en controleer de informatie."
      ],
      [
        "Spreek mensen uit je doelgroep",
        "Vraag naar de laatste keer dat zij dit probleem hadden. Wat deden ze, waar liepen ze vast en welke oplossing gebruikten ze? Noteer hun antwoorden, ook als ze je idee tegenspreken."
      ],
      [
        "Laat de uitkomsten ordenen",
        "Geef je echte notities aan dezelfde AI-tool. Vraag om drie lijsten: vastgesteld, nog onzeker en gevolgen voor het plan. Bewaar bronnen en notities in 01-bronnen en de nagekeken samenvatting als 02-plan/onderzoek.md."
      ]
    ],
    "flow": [
      "Vragen stellen",
      "Bronnen bekijken",
      "Mensen spreken",
      "Inzichten bewaren"
    ],
    "example": {
      "title": "Wat wil iemand weten vóór een aanvraag?",
      "text": "Onderzoeksopzet voor Studio Maan — dit zijn vragen, geen uitgevoerde interviews of bewezen uitkomsten.",
      "items": [
        [
          "Vraag aan bezoekers",
          "Denk aan de laatste workshop die je zocht. Hoe koos je en wat moest je nog navragen?"
        ],
        [
          "Vergelijking",
          "Bekijk of andere studio’s datum, prijs, duur en benodigde ervaring vóór de aanvraag tonen."
        ],
        [
          "Aanname",
          "Duidelijke data verminderen losse vragen. Nog te toetsen."
        ],
        [
          "Besluit na onderzoek",
          "Welke informatie krijgt voorrang op de workshoppagina?"
        ]
      ]
    },
    "checks": [
      "Iedere feitelijke conclusie heeft een herleidbare bron.",
      "Je hebt actief gezocht naar tegenbewijs.",
      "Je kunt aanwijzen welke vragen nog openstaan."
    ],
    "pitfall": "AI laten bevestigen dat je idee goed is. Vraag juist wanneer het idee niet werkt en welk bestaand alternatief al voldoende is.",
    "term": [
      "Aanname",
      "Iets waarvan je denkt dat het klopt, maar dat je nog moet controleren."
    ]
  },
  {
    "id": 3,
    "phase": 0,
    "title": "Schrijf je aanbod en probeer het uit",
    "short": "Aanbod testen",
    "tagline": "Laat mensen je aanbod uitleggen.",
    "intro": "Schrijf in gewone taal wat je aanbiedt. Laat mensen uit je doelgroep de tekst of een eenvoudige schets bekijken en controleer of ze begrijpen wat ze ermee kunnen doen.",
    "goal": "Een nagekeken aanbod en een besluit op basis van echte reacties.",
    "input": "02-plan/projectbrief.md en 02-plan/onderzoek.md.",
    "output": "02-plan/propositie.md + 02-plan/praktijktoets.md",
    "sources": "P06–P08",
    "prompts": [
      3,
      4
    ],
    "actions": [
      [
        "Laat je aanbod opschrijven",
        "Voeg je projectbrief en onderzoek toe aan ChatGPT of Claude. Gebruik de hoofdopdracht en vraag om een korte tekst: voor wie, welk resultaat en wat de eerste versie wel en nog niet doet."
      ],
      [
        "Kies wat je wilt controleren",
        "Kies één onzeker punt, bijvoorbeeld of “Vraag een plek aan” duidelijk maakt dat er nog geen definitieve reservering is. Schrijf vooraf op bij welke reacties je de tekst moet aanpassen."
      ],
      [
        "Laat echte mensen de tekst bekijken",
        "Vraag wat zij denken dat het aanbod inhoudt en wat er na de knop gebeurt. Help niet meteen als iemand twijfelt. Noteer de reactie en het punt waar de verwarring ontstaat."
      ],
      [
        "Beslis en sla op",
        "Laat de AI je echte reacties samenvatten. Bepaal zelf of je doorgaat, aanpast of stopt. Bewaar het aanbod in propositie.md en de opzet, reacties en beslissing in praktijktoets.md, beide in 02-plan."
      ]
    ],
    "flow": [
      "Belofte",
      "Praktijktoets",
      "Waarneming",
      "Besluit"
    ],
    "example": {
      "title": "“Jouw eerste keramiekworkshop, helder geregeld.”",
      "text": "Voorbeeldopzet: laat vijf potentiële bezoekers een eenvoudige workshopkaart bekijken en vertellen wat ze verwachten na “Vraag een plek aan”. Dit is een voorgestelde kleine toets, geen onderzoek dat iets zegt over de hele doelgroep.",
      "items": [
        [
          "Te toetsen",
          "Begrijpt de bezoeker dat een aanvraag nog geen definitieve reservering is?"
        ],
        [
          "Vooraf afgesproken",
          "Als meerdere deelnemers een gegarandeerde plek verwachten, herschrijven we de uitleg en toetsen we opnieuw."
        ],
        [
          "Vastleggen",
          "Letterlijke reacties, misverstanden en relevante verschillen tussen deelnemers."
        ],
        [
          "Besluit",
          "Pas invullen nadat de toets daadwerkelijk is uitgevoerd."
        ]
      ]
    },
    "checks": [
      "De belofte past bij wat je eerste versie kan waarmaken.",
      "Je hebt echte waarnemingen vastgelegd, ook negatieve.",
      "Het besluit volgt uit de toets en benoemt beperkingen."
    ],
    "pitfall": "Een enthousiast AI-antwoord of vijf beleefde complimenten als bewijs dat er vraag naar je aanbod is zien. Kijk naar begrip en werkelijk gedrag, en blijf duidelijk over de kleine steekproef.",
    "term": [
      "Propositie",
      "Je aanbod in gewone taal: voor wie het is, welke waarde het biedt en waarom iemand ervoor zou kiezen."
    ]
  },
  {
    "id": 4,
    "phase": 1,
    "title": "Schrijf de route van je bezoeker uit",
    "short": "Bezoekersroute",
    "tagline": "Beschrijf ook wat er na verzenden gebeurt.",
    "intro": "Beschrijf stap voor stap wat de bezoeker doet en wat de website daarna moet tonen of opslaan. Neem ook fouten en de afhandeling door de medewerker mee.",
    "goal": "Een route die je van begin tot eind kunt nalopen.",
    "input": "Je aanbod en de uitkomst van de praktijktoets in 02-plan.",
    "output": "02-plan/flows.md",
    "sources": "P09–P10",
    "prompts": [
      5
    ],
    "actions": [
      [
        "Geef de taak aan ChatGPT of Claude",
        "Voeg je aanbod toe. Vul bij de AI-opdracht de eerste gebruikerstaak in, bijvoorbeeld een workshopplek aanvragen. Vraag om een genummerde route in gewone taal."
      ],
      [
        "Controleer elke overgang",
        "Lees per stap: wat ziet de bezoeker, wat doet die en wat gebeurt er daarna? Laat AI de route ook als schema met pijlen tonen. Elke knop moet ergens naartoe leiden of iets uitvoeren."
      ],
      [
        "Voeg fouten toe",
        "Vraag wat er gebeurt bij een leeg veld, een volle datum en een storing. Beschrijf de melding en hoe iemand verder kan. Neem ook teruggaan en opnieuw proberen mee."
      ],
      [
        "Beschrijf wie het resultaat ontvangt",
        "Een aanvraag moet ergens aankomen. Leg vast waar de medewerker die terugvindt en wat die daarna doet. Bewaar de route, het schema en de foutgevallen als 02-plan/flows.md."
      ]
    ],
    "flow": [
      "Workshop bekijken",
      "Datum kiezen",
      "Plek aanvragen",
      "Ontvangst bevestigd"
    ],
    "example": {
      "title": "Van bezoeker naar ontvangen aanvraag.",
      "text": "De hoofdroute van Studio Maan eindigt niet bij de verzendknop. De studio moet de aanvraag daadwerkelijk kunnen terugvinden en opvolgen.",
      "items": [
        [
          "Normale route",
          "Een bezoeker kiest een workshop, vult naam en e-mail in en verstuurt de aanvraag."
        ],
        [
          "Uitkomst",
          "De aanvraag is ontvangen; de bezoeker leest wanneer de studio reageert."
        ],
        [
          "Uitzondering",
          "Bij een volle datum kiest de bezoeker een andere datum."
        ],
        [
          "Bij storing",
          "Geen succesmelding; ingevulde gegevens blijven waar mogelijk beschikbaar en opnieuw proberen is duidelijk."
        ]
      ]
    },
    "checks": [
      "Iedere pijl beschrijft een begrijpelijke overgang.",
      "Er zijn routes voor ongeldige invoer, geen resultaat en storing.",
      "De gebruiker én eigenaar kunnen de uitkomst controleren."
    ],
    "pitfall": "Alleen “homepage → formulier → succes” tekenen. Voeg toe wat er met de informatie gebeurt; zo voorkom je een mooie demo zonder echte werking.",
    "term": [
      "Flow",
      "Een schema van handelingen en reacties. Het laat zien hoe iemand van een beginpunt naar een resultaat komt."
    ]
  },
  {
    "id": 5,
    "phase": 1,
    "title": "Bepaal je pagina’s en schrijf de teksten",
    "short": "Pagina’s & teksten",
    "tagline": "Schrijf de echte tekst vóór je ontwerpt.",
    "intro": "Maak voor elke stap in de bezoekersroute duidelijk welke pagina nodig is. Schrijf meteen de echte tekst, inclusief knoppen, invulvelden en foutmeldingen.",
    "goal": "Een paginalijst met de teksten die je in Stitch gaat gebruiken.",
    "input": "02-plan/flows.md, je aanbod en je onderzoek.",
    "output": "02-plan/schermen.md + 02-plan/teksten.md + 02-plan/seo-plan.md",
    "sources": "P11–P12",
    "prompts": [
      6,
      25
    ],
    "actions": [
      [
        "Laat de benodigde schermen opsommen",
        "Voeg je bezoekersroute en aanbod toe aan ChatGPT of Claude. Gebruik de AI-opdracht. Vraag per scherm: naam, doel, informatie, hoofdknop en bestemming. Nummer de schermen, bijvoorbeeld SCH-01."
      ],
      [
        "Laat alle zichtbare tekst schrijven",
        "Vraag om koppen, uitleg, knoppen, veldnamen en meldingen bij laden, fouten en succes. Laat korte zinnen schrijven voor je doelgroep. Vervang verzonnen prijzen, data en beloften door je eigen informatie."
      ],
      [
        "Beschrijf welke vraag elke openbare pagina beantwoordt",
        "Maak met dezelfde AI een SEO-plan: per pagina de vraag van de bezoeker, het webadres, de paginatitel en een korte beschrijving voor zoekmachines. Gebruik zo nodig SEO-les 1."
      ],
      [
        "Lees de hele route na en sla op",
        "Doe alsof je de bezoeker bent. Heb je genoeg informatie om de volgende stap te zetten? Bewaar de paginalijst, teksten en het SEO-plan in 02-plan als schermen.md, teksten.md en seo-plan.md."
      ]
    ],
    "flow": [
      "Gebruikerstaak",
      "Schermenlijst",
      "Echte tekst",
      "Alle toestanden"
    ],
    "example": {
      "title": "Drie schermen. Eén begrijpelijke aanvraag.",
      "text": "Studio Maan begint klein. De schermenlijst legt vast wat op de pagina staat én wat na een handeling verandert.",
      "items": [
        [
          "SCH-01 · Workshop",
          "Wat je maakt, voor wie, duur, prijs en beschikbare data. Actie: “Kies je datum”."
        ],
        [
          "SCH-02 · Aanvragen",
          "Gekozen datum, naam, e-mail en uitleg over de opvolging. Actie: “Vraag een plek aan”."
        ],
        [
          "SCH-03 · Ontvangst",
          "“Je aanvraag is ontvangen. De studio laat je weten of je plek definitief is.”"
        ],
        [
          "Fouttekst",
          "“Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.”"
        ]
      ]
    },
    "checks": [
      "Alle schermen zijn aan een gebruikershandeling gekoppeld.",
      "Ook fout-, laad-, lege en succesmeldingen zijn beschreven waar van toepassing.",
      "Knopteksten vertellen wat er echt gebeurt."
    ],
    "pitfall": "Het ontwerp vullen met tijdelijke tekst zoals “Lorem ipsum”. Werk met echte inhoud; de lengte en betekenis bepalen mede het ontwerp.",
    "term": [
      "Schermtoestand",
      "Hoe een scherm eruitziet op een bepaald moment, bijvoorbeeld tijdens laden, bij een fout of na succes."
    ]
  },
  {
    "id": 6,
    "phase": 1,
    "title": "Maak het schermontwerp in Stitch",
    "short": "Ontwerpen in Stitch",
    "tagline": "Bewaar het gekozen ontwerp met de bijbehorende uitleg.",
    "intro": "Geef Stitch je schermenlijst en echte teksten. Laat eerst de belangrijkste route ontwerpen voor een computer en telefoon. Kies daarna één versie om te bouwen.",
    "goal": "Een gekozen ontwerp met bestanden en duidelijke ontwerpafspraken.",
    "input": "02-plan/schermen.md, teksten.md en voorbeelden van de gewenste stijl.",
    "output": "03-ontwerp/ met exports en ontwerpafspraken.md",
    "sources": "P13–P14",
    "prompts": [
      7,
      8
    ],
    "actions": [
      [
        "Maak je ontwerpopdracht klaar",
        "Open de Promptgenerator en plak je schermenlijst en teksten in de invulvelden. Beschrijf kleuren, uitstraling en voorbeelden die je passend vindt. Leg per voorbeeld uit wat je wilt overnemen."
      ],
      [
        "Plak de opdracht in Stitch",
        "Open Stitch via de toollink. Plak de volledige opdracht en voeg eventuele voorbeeldafbeeldingen toe. Vraag dezelfde route voor een breed scherm en een telefoon, ook bij fouten en na verzenden."
      ],
      [
        "Geef concrete feedback",
        "Bekijk of je de hoofdknop meteen vindt en of tekst en invulvelden goed leesbaar zijn. Vraag bijvoorbeeld: zet datum en prijs boven de aanvraagknop. Laat alleen de genoemde onderdelen aanpassen."
      ],
      [
        "Download en controleer je ontwerp",
        "Bewaar de aangeboden code-export en afbeeldingen in 03-ontwerp. Pak een ZIP-bestand daar uit. Is export niet beschikbaar, bewaar dan screenshots en de schermbeschrijving. Noteer kleuren, lettertypen en gekozen bestanden in ontwerpafspraken.md. Laat Antigravity later melden wat het daarvan echt kan lezen."
      ]
    ],
    "flow": [
      "Inhoud",
      "Visuele richting",
      "Schermontwerp",
      "Beoordeling"
    ],
    "example": {
      "title": "De rust van een keramiekatelier.",
      "text": "Voor Studio Maan kiezen we als voorbeeld warm wit, donkerbruine tekst en een zacht kleiaccent. Foto’s ondersteunen de keuze voor een workshop; informatie en knoppen blijven leidend.",
      "items": [
        [
          "Sfeer",
          "Warm, open en eenvoudig."
        ],
        [
          "Hoofdactie",
          "Eén herkenbare knopstijl voor de volgende stap."
        ],
        [
          "Mobiel",
          "Workshopinformatie eerst, datumkeuze daarna, zonder horizontaal scrollen."
        ],
        [
          "Gerichte feedback",
          "“Zet datum en prijs dichter bij de aanvraagknop; die informatie is nu te verspreid.”"
        ]
      ]
    },
    "checks": [
      "Het ontwerp gebruikt de afgesproken inhoud en functies.",
      "De hoofdactie is herkenbaar en de tekst leesbaar.",
      "Ontwerpbestanden en feedback hebben een herkenbare versie."
    ],
    "pitfall": "Een stijlreferentie volledig kopiëren of alleen op sfeer beoordelen. Neem bruikbare ontwerpprincipes over en toets ze aan je eigen inhoud en doelgroep.",
    "term": [
      "Component",
      "Een herbruikbaar onderdeel, zoals een knop, kaart of invoerveld, dat overal op dezelfde manier werkt."
    ]
  },
  {
    "id": 7,
    "phase": 2,
    "title": "Laat Antigravity eerst lezen en een plan maken",
    "short": "Lezen & bouwplan",
    "tagline": "Eerst bestanden lezen, dan het plan controleren.",
    "intro": "Open je bestaande projectmap in Antigravity. Laat eerst de documenten, het ontwerp en eventuele code analyseren. Controleer het bouwplan voordat je de eerste bouwopdracht geeft.",
    "goal": "Een nagekeken bouwplan, uitgelegde technische keuzes en een voorbereide werkomgeving.",
    "input": "De projectmap met START-HIER.md, je gekozen documenten en uitgepakte ontwerpbestanden.",
    "output": "04-bouw/bouwplan.md + 04-bouw/architectuur.md",
    "sources": "P15–P17",
    "prompts": [
      9,
      10,
      26
    ],
    "actions": [
      [
        "Controleer de map en de gekozen bestanden",
        "Open dezelfde projectmap als in stap 1. Controleer of alle uitkomsten van stap 1 tot en met 6 erin staan. Werk START-HIER.md bij: welke bestanden zijn nagekeken en welk ontwerp moet worden gebouwd?"
      ],
      [
        "Laat eerst lezen en analyseren",
        "Gebruik de eerste AI-opdracht van deze stap in Antigravity. Laat een lijst maken van gelezen bestanden, bestaande onderdelen, ontbrekende informatie en tegenstrijdigheden. Kan een export niet worden gelezen? Lever een leesbare versie aan voordat het betreffende onderdeel wordt gebouwd."
      ],
      [
        "Controleer het plan in gewone taal",
        "Vraag hoe de eerste bezoekersroute gaat werken, waar aanvragen aankomen en welke programma’s of diensten nodig zijn. Laat ook het SEO-plan meenemen. Begrijp je een keuze niet, laat die dan uitleggen voordat je het plan goedkeurt."
      ],
      [
        "Laat de werkomgeving klaarzetten",
        "Geef na je controle opdracht om alleen de afgesproken voorbereiding uit te voeren. Laat Antigravity de codeplek en startwijze vastleggen, bestaande code behouden en ontbrekende programma’s benoemen. Vraag welke kosten of toegang nodig zijn voordat je die zelf regelt."
      ],
      [
        "Koppel GitHub en leg het startpunt vast",
        "Volg de GitHub-uitleg hieronder en gebruik daarna de koppelopdracht. Spreek af welke bestanden naar GitHub mogen en wanneer Railway publiceert. Bewaar het plan en de technische uitleg in 04-bouw. Ga dan naar stap 8."
      ]
    ],
    "flow": [
      "Bestanden lezen",
      "Verschillen bespreken",
      "Plan controleren",
      "Bouw voorbereiden"
    ],
    "example": {
      "title": "Eerst begrijpen waar een aanvraag terechtkomt.",
      "text": "Voor Studio Maan moet de bouwer vastleggen hoe een formulier bij de studio aankomt. Een eventuele formulierdienst is een bewuste keuze met eigen instellingen en toegang.",
      "items": [
        [
          "Al aanwezig",
          "Projectbrief, schermteksten en goedgekeurd ontwerp."
        ],
        [
          "Te besluiten",
          "Via welke geschikte dienst of eigen server ontvangt de studio aanvragen?"
        ],
        [
          "Te beschrijven",
          "Welke gegevens gaan mee, wie kan ze lezen en wat gebeurt er bij een fout?"
        ],
        [
          "Eerste bouwstap",
          "Een lokaal startbare workshoproute met een expliciet testpad."
        ]
      ]
    },
    "checks": [
      "Antigravity heeft genoemd welke bestanden het heeft gelezen en welke nog niet.",
      "Je begrijpt de eerste bouwstap, de benodigde diensten en waar gegevens aankomen.",
      "Het nagekeken plan, de codeplek, startwijze en GitHub-afspraken staan in de projectmap."
    ],
    "pitfall": "Een bouwagent een heel platform laten verzinnen. Benoem bestaande onderdelen, kies alleen noodzakelijke techniek en laat nieuwe onderdelen onderbouwen.",
    "term": [
      "Architectuur",
      "Het overzicht van de onderdelen van je project, hoe ze samenwerken en welke afspraken daarbij gelden."
    ]
  },
  {
    "id": 8,
    "phase": 2,
    "title": "Laat één bezoekersroute helemaal werken",
    "short": "Eerste route bouwen",
    "tagline": "Controleer waar het resultaat aankomt.",
    "intro": "Geef Antigravity opdracht om de eerste route uit het nagekeken bouwplan te bouwen. Test daarna zelf of de handeling het bedoelde resultaat oplevert.",
    "goal": "Eén werkende route met vastgelegde testuitkomsten.",
    "input": "De projectmap met bouwplan, ontwerp en de afgesproken verwerking van gegevens.",
    "output": "Projectcode + 05-tests/bouwcontrole.md",
    "sources": "P19",
    "prompts": [
      11
    ],
    "actions": [
      [
        "Geef één bouwopdracht",
        "Open je project in Antigravity. Gebruik de AI-opdracht en benoem precies welke route het nu moet bouwen. Laat eerst de gekozen bestanden lezen en daarna de schermen, verwerking en meldingen verbinden volgens het plan."
      ],
      [
        "Laat de website openen",
        "Vraag Antigravity de website lokaal te starten en het echte browseradres te geven. Voer de route uit met herkenbare testgegevens. Controleer of de aanvraag op de afgesproken plek aankomt."
      ],
      [
        "Probeer ook een fout",
        "Laat een verplicht veld leeg en probeer een ongeldig e-mailadres. Vraag Antigravity een mislukte verzending te testen. Er mag dan geen melding verschijnen dat de aanvraag is ontvangen."
      ],
      [
        "Bewaar wat werkt en wat nog ontbreekt",
        "Laat de uitgevoerde controles, fouten en nog niet aangesloten onderdelen opschrijven in 05-tests/bouwcontrole.md. Laat een gecontroleerd tussenpunt opslaan volgens de GitHub-afspraak. Ga pas verder als je de eerste route zelf kunt doorlopen."
      ]
    ],
    "flow": [
      "Invoer",
      "Controle",
      "Verwerking",
      "Werkelijke uitkomst"
    ],
    "example": {
      "title": "De aanvraag gaat daadwerkelijk naar de studio.",
      "text": "Testvoorbeeld voor de te bouwen Studio Maan-site. De voorbeeldschermen in deze leeromgeving versturen zelf geen aanvragen.",
      "items": [
        [
          "Handeling",
          "Selecteer een datum en verstuur een aanvraag met testgegevens."
        ],
        [
          "Zichtbaar resultaat",
          "Na succesvolle verwerking verschijnt een ontvangstmelding."
        ],
        [
          "Controle eigenaar",
          "De studio vindt precies die aanvraag in de afgesproken omgeving terug."
        ],
        [
          "Foutscenario",
          "Bij een onderbroken verbinding blijft duidelijk dat ontvangst niet is bevestigd."
        ]
      ]
    },
    "checks": [
      "De volledige route is uitgevoerd met testgegevens.",
      "Het resultaat is controleerbaar op de juiste plek aangekomen.",
      "Fouten en nog nagebootste onderdelen zijn expliciet vastgelegd."
    ],
    "pitfall": "Een knop die een “Bedankt”-scherm opent al als werkend formulier beschouwen. Controleer de echte verwerking voordat je succes claimt.",
    "term": [
      "Frontend & backend",
      "De frontend is wat je bezoeker ziet en bedient. Een backend verwerkt bijvoorbeeld gegevens op een server. Niet iedere website heeft een eigen backend nodig."
    ]
  },
  {
    "id": 9,
    "phase": 2,
    "title": "Open en sluit je website zelf",
    "short": "Zelf starten",
    "tagline": "Probeer starten én stoppen zelf.",
    "intro": "Laat Antigravity een eenvoudig startbestand maken. Probeer daarna zelf je lokale website te openen, te stoppen en opnieuw te starten.",
    "goal": "De website zonder hulp starten en stoppen op je eigen computer.",
    "input": "Je werkende projectmap en de vastgelegde startwijze.",
    "output": "START_PROJECT.bat + 06-overdracht/startinstructie.md",
    "sources": "P16, P18",
    "prompts": [
      12,
      13
    ],
    "actions": [
      [
        "Vraag Antigravity om een startbestand",
        "Gebruik de AI-opdracht. Laat eerst de bestaande startwijze controleren. Op Windows laat je START_PROJECT.bat in de hoofdmap maken. Gebruik op een Mac of Linux de startwijze die past bij dat systeem."
      ],
      [
        "Start de website zelf",
        "Stop de eerdere testsessie volgens de uitleg van Antigravity. Dubbelklik op START_PROJECT.bat. Laat het venster open en open het adres dat het toont in je browser."
      ],
      [
        "Geef een foutmelding volledig door",
        "Start de website niet? Kopieer de foutmelding naar Antigravity. Laat controleren of een programma ontbreekt of het gebruikte adres al bezet is. Laat andere programma’s niet zomaar afsluiten."
      ],
      [
        "Stop en start opnieuw",
        "Volg de stopinstructie, bijvoorbeeld Ctrl+C in het startvenster. Open daarna het startbestand opnieuw en test dezelfde route. Bewaar de uitleg als 06-overdracht/startinstructie.md."
      ]
    ],
    "flow": [
      "Projectmap",
      "Starter openen",
      "Lokaal adres",
      "Stoppen & hervatten"
    ],
    "example": {
      "title": "Dubbelklikken, openen, testen.",
      "text": "Studio Maan krijgt een Windows-starter die het bestaande startcommando gebruikt. De werkelijke poort en programma’s hangen af van de gekozen techniek.",
      "items": [
        [
          "Starten",
          "Open START_PROJECT.bat in de projectmap."
        ],
        [
          "Openen",
          "Gebruik het lokale adres dat de starter daadwerkelijk toont."
        ],
        [
          "Controleren",
          "Dezelfde workshoproute is bereikbaar met dezelfde testinstellingen."
        ],
        [
          "Stoppen",
          "Volg de stopinstructie van het project; bijvoorbeeld Ctrl+C in het servervenster."
        ]
      ]
    },
    "checks": [
      "Je kunt starten zonder dat de agent iets voor je uitvoert.",
      "De starter meldt problemen begrijpelijk en bevat geen geheimen.",
      "Je hebt ook stoppen en opnieuw starten geprobeerd."
    ],
    "pitfall": "Een localhost-link als een live website delen. Die verwijst naar de computer van degene die de link opent; publicatie volgt bij stap 12.",
    "term": [
      "Lokaal / localhost",
      "De website draait op je eigen computer. Een lokale server maakt haar in je browser bereikbaar terwijl je eraan werkt."
    ]
  },
  {
    "id": 10,
    "phase": 3,
    "title": "Test je website en laat fouten herstellen",
    "short": "Testen & herstellen",
    "tagline": "Herhaal dezelfde handeling na herstel.",
    "intro": "Loop de bezoekersroute zelf na op een computer en telefoon. Beschrijf fouten zo precies dat Antigravity dezelfde handeling kan herhalen en herstellen.",
    "goal": "Een foutenlijst met controles na het herstel.",
    "input": "Een startbare website, testgegevens en de bezoekersroute.",
    "output": "05-tests/bevindingen.md",
    "sources": "P20–P21",
    "prompts": [
      14,
      15
    ],
    "actions": [
      [
        "Laat een korte testlijst maken",
        "Gebruik de eerste AI-opdracht in Antigravity. Laat voor elke taak het startpunt, de handelingen en het verwachte resultaat opschrijven. Laat ook vastleggen welke versie je test."
      ],
      [
        "Voer de taken zelf uit",
        "Probeer de normale route, lege velden, ongeldige invoer, teruggaan en dubbel klikken. Test op je telefoon of laat Antigravity eerst een telefoonformaat tonen. Controleer daarna waar het resultaat terechtkomt."
      ],
      [
        "Geef elke fout concreet door",
        "Gebruik de herstelopdracht. Noteer: wat klikte je, wat verwachtte je en wat gebeurde er? Voeg een screenshot zonder persoonsgegevens toe. Laat de melding bewaren in 05-tests/bevindingen.md, met open/opgelost en wie hem oppakt."
      ],
      [
        "Herhaal na herstel dezelfde handeling",
        "Laat Antigravity de oorzaak zoeken, herstellen en testen. Probeer de handeling daarna zelf opnieuw. Vraag alleen voor vaak herhaalde routes om een automatische Playwright-test. Sluit een fout pas als de hercontrole slaagt."
      ]
    ],
    "flow": [
      "Taak uitvoeren",
      "Afwijking vastleggen",
      "Gericht herstellen",
      "Opnieuw testen"
    ],
    "example": {
      "title": "“Er gebeurt niets” wordt een oplosbare bevinding.",
      "text": "Fictieve voorbeeldbevinding voor Studio Maan; geen gemeten fout in een bestaande website.",
      "items": [
        [
          "BEV-001 · Stappen",
          "Open het aanvraagformulier, laat e-mail leeg en kies “Vraag een plek aan”."
        ],
        [
          "Verwacht / werkelijk",
          "Verwacht: melding bij e-mail. Waargenomen in dit voorbeeld: geen zichtbare reactie."
        ],
        [
          "Eigenaar / status",
          "Bouwer / open. Ernst: hoog, omdat de bezoeker niet weet hoe verder."
        ],
        [
          "Hertest",
          "Herhaal na herstel dezelfde invoer; de melding is zichtbaar, begrijpelijk en bereikbaar met het toetsenbord."
        ]
      ]
    },
    "checks": [
      "Iemand anders kan je bevinding herhalen.",
      "Elke bevinding heeft een eigenaar en status.",
      "Een herstel is met dezelfde route opnieuw gecontroleerd."
    ],
    "pitfall": "Alleen “maak het beter” teruggeven. Beschrijf de handeling, de verwachting en de waarneming; daarmee kan de bouwer de oorzaak gericht vinden.",
    "term": [
      "Hertest",
      "Dezelfde handeling opnieuw uitvoeren nadat een fout is opgelost, om te zien of het herstel werkt."
    ]
  },
  {
    "id": 11,
    "phase": 3,
    "title": "Controleer of je website live mag",
    "short": "Controle vóór live",
    "tagline": "Controleer de versie die je gaat publiceren.",
    "intro": "Test de laatste versie van de hele website. Controleer werking, teksten en mobiel gebruik. Beslis daarna of deze versie gepubliceerd mag worden.",
    "goal": "Een duidelijke beslissing: live zetten of eerst fouten oplossen.",
    "input": "De laatste websiteversie, testuitkomsten, foutenlijst en handleiding.",
    "output": "05-tests/releasecheck.md",
    "sources": "P22",
    "prompts": [
      16,
      17,
      18,
      28
    ],
    "actions": [
      [
        "Laat de hele website controleren",
        "Gebruik de hoofdopdracht in Antigravity. Laat alle belangrijke routes nalopen, ook ontvangst van formulieren en toegang tot besloten pagina’s. Vraag per controle om wat is gedaan en wat de uitkomst was."
      ],
      [
        "Controleer teksten en bediening zelf",
        "Open elke pagina. Klopt de inhoud, begrijp je de knoppen en werkt de route op een telefoon? Probeer ook alleen het toetsenbord. Noteer ontbrekende uitleg en fouten in de bestaande foutenlijst."
      ],
      [
        "Laat vindbaarheid en eventuele meting controleren",
        "Geef Antigravity het SEO-plan. Laat paginatitels, openbare webadressen, sitemap en snelheid controleren. Gebruik PageSpeed Insights als de pagina openbaar bereikbaar is. Gebruik je Analytics, test dan ook weigeren, toestaan en één geslaagde aanvraag."
      ],
      [
        "Beslis of deze versie live mag",
        "Laat releasecheck.md in 05-tests maken met geslaagde controles, open fouten en niet uitgevoerde controles. Los fouten die de hoofdtaak blokkeren eerst op. Zet pas “mag live” bij de versie die je echt hebt nagekeken."
      ]
    ],
    "flow": [
      "Kernroutes",
      "Fouten & toegang",
      "Documentatie",
      "Vrijgavebesluit"
    ],
    "example": {
      "title": "Een ontvangstbelofte die de hele keten waarmaakt.",
      "text": "Voor Studio Maan controleer je zowel het mobiele formulier als de ontvangst en opvolging door de studio.",
      "items": [
        [
          "Kernroute",
          "Workshop kiezen → aanvraag versturen → ontvangst controleren."
        ],
        [
          "Aanvullend",
          "Toetsenbordbediening, kleine schermen, foutmeldingen en dubbel klikken."
        ],
        [
          "Blokkade",
          "Aanvragen raken kwijt of er wordt succes gemeld zonder ontvangst."
        ],
        [
          "Besluit",
          "Alleen goedkeuren voor publicatie als de afgesproken controles controleerbaar slagen en open beperkingen aanvaard zijn."
        ]
      ]
    },
    "checks": [
      "De actuele versie is getest, niet alleen een eerdere versie.",
      "Blokkerende fouten zijn opgelost en hertest.",
      "Documentatie, werking en bekende beperkingen komen overeen."
    ],
    "pitfall": "Een groen testresultaat als garantie zien. Noteer wat werkelijk is getest en wat niet; automatische controles vervangen geen volledige beoordeling.",
    "term": [
      "Release",
      "Een herkenbare versie die je gereedmaakt om te publiceren, met vastgelegde inhoud en controles."
    ]
  },
  {
    "id": 12,
    "phase": 4,
    "title": "Publiceer je website via Railway",
    "short": "Website live zetten",
    "tagline": "Test de website op het echte webadres.",
    "intro": "Laat Antigravity de goedgekeurde versie naar GitHub sturen. Publiceer die versie via Railway en test de website op het echte webadres.",
    "goal": "Een bereikbare website waarvan de belangrijkste route online is getest.",
    "input": "Een goedgekeurde releasecheck, GitHub-repository en Railway-account.",
    "output": "06-overdracht/release.md met het echte live-adres",
    "sources": "P23–P25",
    "prompts": [
      19,
      20
    ],
    "actions": [
      [
        "Controleer wat online mag",
        "Laat Antigravity afbeeldingen, links en publicatiebestanden nalopen. Spreek af wie de website mag zien. Laat controleren hoe die toegang is geregeld; een moeilijk te raden webadres is geen toegangsbeveiliging."
      ],
      [
        "Laat de goedgekeurde versie naar GitHub sturen",
        "Gebruik de eerste AI-opdracht. Vul de repositorylink, branch en publicatieafspraak in. Antigravity legt een versie vast en stuurt die naar GitHub. Open de teruggegeven versielink en controleer of het om jouw wijziging gaat."
      ],
      [
        "Publiceer met de Railway-uitleg hieronder",
        "Kies in Railway de juiste repository en branch. Laat Antigravity uitleggen welke instellingen jouw project nodig heeft. Wacht tot Railway meldt dat het publiceren is geslaagd en open daarna het getoonde webadres."
      ],
      [
        "Test online en bewaar de herstelafspraak",
        "Voer op het live-adres een testaanvraag uit en zoek de ontvangst op. Laat in 06-overdracht/release.md het adres, de versie, testuitkomst en uitleg voor terugzetten vastleggen. Deel de site nadat deze controle slaagt."
      ]
    ],
    "flow": [
      "Antigravity: commit",
      "GitHub: versie",
      "Railway: live",
      "Zelf controleren"
    ],
    "example": {
      "title": "Eerst bereikbaar, dan bewust delen.",
      "text": "Studio Maan kan eerst met een besloten groep controleren of de gepubliceerde aanvraagroute werkt. Openbare toegang is een aparte bewuste keuze.",
      "items": [
        [
          "Vóór publicatie",
          "Afbeeldingen, instellingen, toegangsrechten en ontvangst van aanvragen controleren."
        ],
        [
          "Na publicatie",
          "De echte live-URL openen en een herkenbare testaanvraag terugvinden."
        ],
        [
          "Herstelafspraak",
          "De eigenaar weet welke vorige versie werkt en wie deze kan terugzetten."
        ],
        [
          "Vastleggen",
          "Versie, datum, URL, testresultaat, toegang en open punten."
        ]
      ]
    },
    "checks": [
      "De publicatie meldt daadwerkelijk succes.",
      "Je hebt de belangrijkste bezoekersroute op de echte live-URL gecontroleerd.",
      "Toegang en de herstelroute zijn expliciet vastgelegd."
    ],
    "pitfall": "Alleen controleren of de homepage opent. Juist instellingen, formulierverwerking en toegangsrechten kunnen online anders werken dan lokaal.",
    "term": [
      "Hosting & deploy",
      "Hosting is de omgeving waar je website online draait. Deployen is het plaatsen van een bepaalde versie in die omgeving."
    ]
  },
  {
    "id": 13,
    "phase": 4,
    "title": "Laat de eerste mensen je website gebruiken",
    "short": "Eerste bezoekers",
    "tagline": "Vraag waar bezoekers vastlopen.",
    "intro": "Nodig een kleine groep uit je doelgroep uit. Vertel wat ze kunnen doen en vraag waar ze vastlopen. Gebruik hun reacties om je website te verbeteren.",
    "goal": "Een bruikbare uitnodiging en vastgelegde reacties van bezoekers.",
    "input": "Je geteste live-adres, doelgroep en actuele aanbod.",
    "output": "02-plan/introductieplan.md + 05-tests/leersignalen.md",
    "sources": "P26–P27",
    "prompts": [
      21,
      22
    ],
    "actions": [
      [
        "Kies wie je uitnodigt",
        "Kies een kleine groep die past bij je doelgroep en een kanaal waar je hen kunt bereiken. Schrijf op welke taak je hen wilt laten proberen."
      ],
      [
        "Laat Claude of ChatGPT de uitnodiging schrijven",
        "Gebruik de hoofdopdracht. Voeg het aanbod en wat nu echt werkt toe. Vraag een kort bericht met het juiste webadres, de gewenste handeling en een vraag om feedback. Lees het na en verstuur het zelf."
      ],
      [
        "Controleer de eerste ervaring",
        "Open de link uit je uitnodiging alsof je een nieuwe bezoeker bent. Kom je op de juiste pagina en kun je de beloofde handeling uitvoeren? Herstel fouten voordat je meer mensen uitnodigt."
      ],
      [
        "Verzamel en orden reacties",
        "Vraag wat iemand wilde doen, waar die vastliep en wat ontbrak. Laat dezelfde AI-tool de echte reacties groeperen. Bewaar het plan in 02-plan/introductieplan.md en de reacties in 05-tests/leersignalen.md. Gebruik Analytics alleen als je die al hebt ingericht."
      ]
    ],
    "flow": [
      "Passende doelgroep",
      "Eerlijke uitnodiging",
      "Eerste ervaring",
      "Leersignaal"
    ],
    "example": {
      "title": "Een kleine uitnodiging voor een echte workshop.",
      "text": "Concept voor Studio Maan. Dit is voorbeeldtekst; de leeromgeving verstuurt geen berichten.",
      "items": [
        [
          "Boodschap",
          "“We hebben onze workshopinformatie op één plek gezet. Bekijk een datum en vraag een plek aan. We bevestigen daarna persoonlijk.”"
        ],
        [
          "Kanaal",
          "Een passend bestaand kanaal van de studio, met toestemming waar nodig."
        ],
        [
          "Te leren",
          "Welke informatie missen bezoekers vóór ze een aanvraag doen?"
        ],
        [
          "Vervolg",
          "Bundel terugkerende vragen en kies de belangrijkste verbetering."
        ]
      ]
    },
    "checks": [
      "De uitnodiging belooft alleen bestaande werking.",
      "De link en eerste route zijn gecontroleerd.",
      "Je weet welke feedback je verzamelt en hoe je ermee beslist."
    ],
    "pitfall": "Grote aantallen bezoekers nastreven terwijl de eerste ervaring onduidelijk is. Leer eerst van een kleine groep en herstel de grootste obstakels.",
    "term": [
      "Leersignaal",
      "Een concrete waarneming die helpt beslissen wat je moet behouden, verbeteren of opnieuw onderzoeken."
    ]
  },
  {
    "id": 14,
    "phase": 4,
    "title": "Bewaar je werk en pak het later weer op",
    "short": "Bewaren & verdergaan",
    "tagline": "Bewaar wat de volgende sessie nodig heeft.",
    "intro": "Sluit elke sessie af met een korte overdracht in je projectmap. Laat Antigravity bij de volgende sessie eerst de actuele bestanden lezen voordat het verder werkt.",
    "goal": "Een bijgewerkte projectmap met een duidelijke volgende taak.",
    "input": "De projectmap, huidige website, testuitkomsten en reacties van bezoekers.",
    "output": "06-overdracht/overdracht.md + 06-overdracht/gebruikershandleiding.md",
    "sources": "P28",
    "prompts": [
      23,
      24,
      27
    ],
    "actions": [
      [
        "Laat de sessie samenvatten",
        "Gebruik de afsluitopdracht in Antigravity. Laat opschrijven wat is aangepast, welke controles zijn uitgevoerd en wat nog openstaat. Bewaar dit als 06-overdracht/overdracht.md en werk START-HIER.md bij."
      ],
      [
        "Controleer of het werk bewaard is",
        "Laat de gecontroleerde code volgens je GitHub-afspraak opslaan en controleer de versielink. Controleer ook of AI-antwoorden en ontwerpbestanden in je projectmap staan. Maak een back-up van die hele map; GitHub bevat alleen wat je ernaartoe hebt gestuurd."
      ],
      [
        "Laat de handleiding bijwerken",
        "Vraag Antigravity om de echte werking voor bezoeker en beheerder te beschrijven. Loop die uitleg zelf na. Bewaar haar als 06-overdracht/gebruikershandleiding.md."
      ],
      [
        "Begin de volgende sessie met lezen",
        "Open dezelfde projectmap. Gebruik de hervatopdracht en laat START-HIER.md, de overdracht en relevante bestanden lezen. Vraag een korte stand van zaken. Kies daarna één verbetering uit de echte fouten of feedback en geef daarvoor een opdracht."
      ]
    ],
    "flow": [
      "Leren",
      "Prioriteit kiezen",
      "Verbeteren",
      "Opnieuw controleren"
    ],
    "example": {
      "title": "Volgende keer weer verder waar je echt gebleven was.",
      "text": "Voorbeeld van een overdracht voor Studio Maan. De concrete versie en controles vul je in op basis van je eigen project.",
      "items": [
        [
          "Gereed",
          "De afgesproken aanvraagroute; verwijs naar versie en testbewijs."
        ],
        [
          "Open",
          "Bezoekers vragen mogelijk om informatie over groepsworkshops; eerst signalen verzamelen."
        ],
        [
          "Volgende actie",
          "De terugkerende vragen beoordelen en beslissen of een extra informatieblok nodig is."
        ],
        [
          "Startpunt",
          "Projectmap, startinstructie, live-URL, open bevindingen en verantwoordelijke."
        ]
      ]
    },
    "checks": [
      "Een nieuwe sessie kan starten zonder het verhaal te reconstrueren.",
      "De handleiding beschrijft de actuele werking.",
      "De volgende actie heeft een duidelijk doel en een eigenaar."
    ],
    "pitfall": "Alle projectkennis alleen in een chat laten staan. Bewaar besluiten, werking en open werk in het projectdossier, dicht bij de versie waarop ze betrekking hebben.",
    "term": [
      "Versiebeheer",
      "Een geschiedenis van wijzigingen waarmee je kunt zien wat is aangepast en naar een eerdere bronversie kunt teruggaan."
    ]
  }
];
