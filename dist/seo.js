export const seoLessons = [
  {
    "id": 1,
    "short": "Zoekvraag & inhoud",
    "title": "Schrijf pagina’s die de zoekvraag beantwoorden",
    "intro": "Begin hiermee bij stap 5, vóór het ontwerpen. SEO betekent je website begrijpelijk en vindbaar maken voor zoekmachines. Kies per openbare pagina één vraag die je bezoeker beantwoord wil hebben.",
    "tools": [
      "chatgpt",
      "claude"
    ],
    "input": "Je doelgroep, aanbod, onderzoek en bestaande paginalijst.",
    "output": "seo-plan.md in de projectroot",
    "flow": [
      "Vraag van een bezoeker",
      "Passende pagina",
      "Duidelijk antwoord",
      "Logische volgende stap"
    ],
    "actions": [
      [
        "Geef je aanbod aan ChatGPT of Claude",
        "Voeg je projectbrief en onderzoek toe. Gebruik de promptgenerator hieronder. Vraag per pagina welke vraag de bezoeker heeft. Controleer de voorgestelde vragen met je gesprekken en zoekresultaten; AI kent jouw echte zoekcijfers niet vanzelf."
      ],
      [
        "Schrijf het antwoord op die vraag",
        "Laat dezelfde AI-tool een tekstvoorstel maken met je eigen gegevens, zoals wat je aanbiedt, voor wie, prijs en locatie. Lees alles na. Laat een duidelijke hoofdkop, tussenkoppen en volgende handeling opnemen."
      ],
      [
        "Maak een paginatitel en korte beschrijving",
        "Vraag een eigen titel en korte samenvatting per pagina. Die samenvatting heet een meta-beschrijving en kan in Google worden getoond. Google kan ook andere tekst kiezen. Gebruik het voorbeeld hiernaast als opzet."
      ],
      [
        "Bewaar het plan en geef het door",
        "Zet per pagina de zoekvraag, het webadres, titel, beschrijving, inhoud en links naar volgende pagina’s in seo-plan.md. Geef dit bestand bij stap 7 aan Antigravity. Werk een bestaand plan bij in plaats van een tweede te maken."
      ]
    ],
    "settingsTitle": "Voorbeeld · Studio Maan in een zoekresultaat",
    "settings": [
      [
        "Zoekvraag",
        "Keramiekworkshop voor beginners in Utrecht"
      ],
      [
        "Voorbeeld-URL",
        "https://studio-maan.example/keramiekworkshop"
      ],
      [
        "Paginatitel",
        "Keramiekworkshop voor beginners in Utrecht | Studio Maan"
      ],
      [
        "Meta-beschrijving",
        "Maak je eerste keramiek tijdens een workshop in Utrecht. Bekijk wat je leert, de data en de prijs. Vraag daarna een plek aan."
      ]
    ],
    "example": "Voor deze oefening ligt de fictieve studio in Utrecht. De zoeksamenvatting is een redactioneel voorbeeld, geen bestaand Google-resultaat of belofte over de weergave.",
    "checks": [
      "De pagina beantwoordt een concrete vraag met eigen, controleerbare inhoud.",
      "Titel, hoofdkop en volgende actie passen bij dezelfde bedoeling.",
      "De belangrijkste pagina’s zijn via gewone links bereikbaar."
    ],
    "prompt": "Werk de zoekvraag en inhoud van de opgegeven openbare pagina uit tot een SEO-plan. Baseer het plan op mijn aanbod en doelgroep en stem het af met de bestaande schermen en teksten.",
    "sources": [
      [
        "Google: SEO voor beginners",
        "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=nl"
      ],
      [
        "Google: samenvattingen in zoekresultaten",
        "https://developers.google.com/search/docs/appearance/snippet"
      ]
    ]
  },
  {
    "id": 2,
    "short": "Technische basis",
    "title": "Laat Antigravity de vindbaarheid meebouwen",
    "intro": "Gebruik deze les bij stap 7. Jij bepaalt welke pagina’s openbaar en vindbaar mogen zijn. Antigravity verwerkt dat in het bouwplan en controleert de technische instellingen.",
    "tools": [
      "antigravity",
      "pagespeed"
    ],
    "input": "seo-plan.md, de pagina’s die openbaar mogen worden en het bouwplan.",
    "output": "seo-bouwcontrole.md in de projectroot",
    "flow": [
      "SEO-plan",
      "Bouwafspraken",
      "Openbare pagina",
      "Technische controle"
    ],
    "actions": [
      [
        "Geef het SEO-plan aan Antigravity",
        "Open je projectmap en gebruik de promptgenerator hieronder. Laat eerst seo-plan.md lezen. Vraag per openbare pagina een eigen webadres dat je rechtstreeks kunt openen. Een wissel achter een # is onvoldoende voor afzonderlijke zoekpagina’s."
      ],
      [
        "Laat de pagina-instellingen invullen",
        "Vraag om een unieke titel en beschrijving per pagina. Laat ook het voorkeursadres instellen; dat heet canonical. Pagina’s die gevonden mogen worden moeten voor zoekmachines toegankelijk zijn. Privépagina’s blijven beveiligd."
      ],
      [
        "Laat de paginalijst en foutpagina controleren",
        "Vraag om sitemap.xml: een lijst met de openbare pagina-adressen. Laat ook robots.txt controleren; dat bestand geeft zoekmachines aanwijzingen maar beveiligt geen privégegevens. Vraag of een niet-bestaand adres een echte foutmelding met status 404 geeft."
      ],
      [
        "Controleer de snelheid en bewaar het rapport",
        "Open PageSpeed Insights, plak een openbaar pagina-adres en start de analyse. Geef de uitkomst aan Antigravity en vraag welke problemen eerst moeten worden opgelost. Voor een besloten testversie laat je een lokale controle doen. Bewaar echte uitkomsten en niet uitgevoerde controles in seo-bouwcontrole.md."
      ]
    ],
    "settingsTitle": "Laat deze begrippen uitleggen",
    "settings": [
      [
        "Paginatitel",
        "De naam van een pagina in het browsertabblad en mogelijk in Google."
      ],
      [
        "Canonical",
        "Het voorkeursadres van een pagina."
      ],
      [
        "Sitemap",
        "Een bestand met de openbare pagina’s die zoekmachines mogen vinden."
      ],
      [
        "Noindex",
        "Een instelling die vraagt een pagina niet in zoekresultaten op te nemen."
      ],
      [
        "404",
        "Het antwoord van de website als een pagina niet bestaat."
      ]
    ],
    "example": "Deze besloten leeromgeving wisselt lessen met #routes. Voor openbare landingspagina’s van jouw eigen project laat je Antigravity gewone pagina-URL’s en indexeerbare inhoud bouwen. Een besloten preview hoef je niet voor Google open te zetten.",
    "checks": [
      "Een openbare kernpagina opent rechtstreeks en de hoofdinhoud is uitleesbaar.",
      "Sitemap, canonical en indexatie-instellingen passen bij het echte live-domein.",
      "Mobiele werking, snelheid en de meetafspraak zijn gecontroleerd en vastgelegd."
    ],
    "prompt": "Bouw of herstel de afgesproken technische SEO-basis in de bestaande website. Controleer de huidige techniek en gebruik actuele officiële documentatie waar instellingen of gedrag onzeker zijn.",
    "sources": [
      [
        "Google: JavaScript en SEO",
        "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
      ],
      [
        "Google: robots.txt",
        "https://developers.google.com/search/docs/crawling-indexing/robots/intro"
      ],
      [
        "Google: een sitemap bouwen",
        "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"
      ],
      [
        "Google: PageSpeed Insights",
        "https://developers.google.com/speed/docs/insights/v5/about"
      ]
    ]
  },
  {
    "id": 3,
    "short": "Search Console",
    "title": "Voeg je website toe aan Search Console",
    "intro": "Doe dit na de livegang voor een openbare website. Search Console laat zien of Google je pagina’s kan vinden en opnemen in zoekresultaten. Je moet eerst aantonen dat je de website beheert.",
    "tools": [
      "searchconsole",
      "antigravity"
    ],
    "input": "Je openbare HTTPS-adres en toegang tot je domeininstellingen of websitebestanden.",
    "output": "search-console.md met de instellingen en controle-uitkomsten in de projectroot",
    "flow": [
      "Eigendom aantonen",
      "Sitemap indienen",
      "Pagina inspecteren",
      "Probleem herstellen"
    ],
    "actions": [
      [
        "Voeg je website toe",
        "Open Search Console en kies Property toevoegen. Met toegang tot de DNS-instellingen kies je Domein en vul je alleen het domein in. Zonder DNS-toegang kies je URL-prefix met het precieze HTTPS-adres dat je wilt volgen."
      ],
      [
        "Verifieer het eigendom",
        "Bij Domein: kopieer de aangeboden TXT-waarde en voeg die toe bij je domeinprovider. Laat bestaande records staan, sla op en kies Verifiëren in Search Console. Bij URL-prefix kun je bijvoorbeeld het aangeboden HTML-bestand of de meta-tag door Antigravity laten plaatsen. Bewaar het verificatiemiddel ook na goedkeuring. DNS zijn de adresinstellingen bij de partij waar je domeinnaam staat. Een TXT-record is daar een tekstregel. Neem de waarde van Google exact over."
      ],
      [
        "Dien de echte sitemap in",
        "Open Sitemaps, vul het adres van de door je bouwer gemaakte sitemap in en verstuur het. Open de sitemap zelf en controleer of de bedoelde live-URL’s erin staan. Herstel een ophaalfout; “verzonden” betekent niet dat alle pagina’s geïndexeerd zijn."
      ],
      [
        "Inspecteer een kernpagina",
        "Plak de volledige pagina-URL in URL-inspectie. Vergelijk de indexstatus met Live URL testen. Los blokkades of fouten op en vraag daarna zo nodig indexering aan. Bekijk later Pagina’s en Prestaties; nieuwe data verschijnt niet altijd direct. Bewaar de gekozen verificatiemethode, sitemap en echte uitkomsten in search-console.md."
      ]
    ],
    "settingsTitle": "Kies de verificatie die je kunt uitvoeren",
    "settings": [
      [
        "Domeinproperty",
        "studio-maan.example · alle protocollen en subdomeinen"
      ],
      [
        "Controle nodig",
        "DNS-toegang bij de domeinprovider"
      ],
      [
        "URL-prefix als alternatief",
        "https://studio-maan.example/ · alleen dit voorvoegsel"
      ],
      [
        "Na verificatie",
        "Sitemaps → echte sitemap-URL · URL-inspectie → kernpagina"
      ]
    ],
    "example": "De .example-adressen zijn invulvoorbeelden. Neem altijd de echte waarde uit jouw Search Console-scherm over. Bij deze besloten cursus is openbare Google-indexatie geen doel; je oefent dit op je eigen openbare website.",
    "checks": [
      "Search Console toont dat het eigendom is geverifieerd.",
      "De sitemap is opgehaald en bevat de juiste openbare URL’s.",
      "Je kunt de uitkomst van URL-inspectie uitleggen: live bereikbaar is niet hetzelfde als al geïndexeerd."
    ],
    "prompt": "Plaats het echte aangeleverde Google-verificatiebestand of de exacte meta-tag in de bedoelde website. Beperk deze opdracht tot plaatsing en controle; de gebruiker voltooit de verificatie zelf in Search Console.",
    "sources": [
      [
        "Google: site-eigendom verifiëren",
        "https://support.google.com/webmasters/answer/9008080?hl=nl"
      ],
      [
        "Google: sitemaps beheren",
        "https://support.google.com/webmasters/answer/7451001?hl=nl"
      ],
      [
        "Google: URL-inspectie",
        "https://support.google.com/webmasters/answer/9012289?hl=nl"
      ]
    ]
  },
  {
    "id": 4,
    "short": "Google Analytics",
    "title": "Stel bezoekersmeting in met Google Analytics",
    "intro": "Dit is optioneel. Google Analytics 4, afgekort GA4, laat zien wat bezoekers op je website doen. Gebruik het als je een concrete vraag hebt, bijvoorbeeld hoeveel bezoekers een aanvraag afronden. Richt eerst de meting en toestemming goed in.",
    "tools": [
      "analytics",
      "antigravity"
    ],
    "input": "Een meetdoel, je openbare website, Google-account en afspraken over gegevens en toestemming.",
    "output": "analytics.md in de projectroot",
    "flow": [
      "Meetdoel",
      "Property & webstream",
      "Toestemming & tag",
      "Echte testgebeurtenis"
    ],
    "actions": [
      [
        "Maak je website aan in Analytics",
        "Open Google Analytics en kies bij Beheerder: Maken → Property. Een property is de verzameling metingen voor je website. Vul naam, tijdzone en valuta in. Maak bij Gegevensstreams een Web-stream: de verbinding met je website. Vul je echte HTTPS-adres in en kopieer de G-ID."
      ],
      [
        "Kies welke handelingen je meet",
        "Noteer je meetdoel in analytics.md. Begin met paginaweergaven en één echt ontvangen aanvraag. Laat de aanvraag tellen als generate_lead; dat is de naam van die meetgebeurtenis. Een klik op Versturen is nog geen ontvangen aanvraag."
      ],
      [
        "Laat Antigravity de meting toevoegen",
        "Open je projectmap. Vul hieronder de echte G-ID en je meetdoel in. Laat Antigravity het meetplan lezen. Laat de Analytics-code pas laden nadat een bezoeker toestemming geeft, en laat weigeren en intrekken werken. Gebruik één installatie zodat je niet dubbel telt. Stuur geen namen of e-mailadressen mee."
      ],
      [
        "Controleer de meting zelf",
        "Open de live-site, geef toestemming en verstuur één testaanvraag. Kijk in Analytics bij Realtime; laat Antigravity zo nodig DebugView gebruiken voor details. Je verwacht één generate_lead na ontvangst. Test ook een fout en het weigeren of intrekken van toestemming. Laat het bewijs in analytics.md bewaren. Markeer generate_lead bij Gebeurtenissen als belangrijke gebeurtenis zodra het correct werkt."
      ]
    ],
    "settingsTitle": "Voorbeeldinstellingen · bespreek ze met je bouwer",
    "settings": [
      [
        "Property",
        "Studio Maan · website"
      ],
      [
        "Tijdzone / valuta",
        "Nederland / EUR, als dat bij je organisatie past"
      ],
      [
        "Google-tag",
        "G-… uit jouw webstream · één installatiepad"
      ],
      [
        "Belangrijke gebeurtenis",
        "generate_lead · alleen na bevestigde ontvangst"
      ],
      [
        "Toestemming",
        "Startkeuze: tag geblokkeerd vóór akkoord; intrekken blijft bereikbaar"
      ],
      [
        "Eigen testverkeer",
        "Optioneel filter voor intern verkeer: eerst in status Testen"
      ]
    ],
    "example": "Als dezelfde tag via de code én via Tag Manager laadt, kun je dubbel tellen. Kies één installatiepad. Een intern-verkeerfilter zet je pas actief nadat je hebt gecontroleerd wie het uitsluit; uitgesloten gegevens zijn later niet terug te halen.",
    "checks": [
      "De meet-ID hoort bij de juiste website en property.",
      "Eén echte testhandeling geeft één correct event; een fout geeft geen succes-event.",
      "Weigeren en intrekken zijn gecontroleerd; er gaan geen onbedoelde persoonsgegevens mee."
    ],
    "prompt": "Implementeer de afgesproken GA4-meting met de echte meet-ID in de bestaande website. Inspecteer eerst aanwezige tags en de meet- en toestemmingsafspraak; ontbreekt een essentiële keuze, laat de implementatie geblokkeerd totdat die is ingevuld.",
    "sources": [
      [
        "Google: GA4 instellen",
        "https://support.google.com/analytics/answer/9304153?hl=nl"
      ],
      [
        "Google: verbeterde meting",
        "https://support.google.com/analytics/answer/9216061?hl=nl"
      ],
      [
        "Google: belangrijke gebeurtenissen",
        "https://support.google.com/analytics/answer/12946393?hl=en"
      ],
      [
        "Google: toestemmingsmodus",
        "https://developers.google.com/tag-platform/security/concepts/consent-mode"
      ],
      [
        "Google: intern verkeer filteren",
        "https://support.google.com/analytics/answer/10104470?hl=nl"
      ]
    ]
  },
  {
    "id": 5,
    "short": "Meten & verbeteren",
    "title": "Gebruik cijfers en reacties voor één verbetering",
    "intro": "Bekijk welke pagina’s gevonden worden en waar bezoekers vastlopen. Vergelijk dezelfde soort perioden. Zijn er nog te weinig gegevens, verzamel dan eerst reacties en trek nog geen grote conclusies.",
    "tools": [
      "searchconsole",
      "analytics",
      "chatgpt",
      "antigravity"
    ],
    "input": "Geverifieerde Search Console-property, werkende Analytics-meting en voldoende eigen gegevens.",
    "output": "groeiplan.md met één volgende bouwopdracht in de projectroot",
    "flow": [
      "Vindbaarheid",
      "Bezoek",
      "Succesvolle actie",
      "Gerichte verbetering"
    ],
    "actions": [
      [
        "Bekijk hoe mensen je vinden",
        "Open in Search Console het rapport Prestaties. Kies de periode en noteer zoekvragen, pagina’s, vertoningen en klikken. Een vertoning betekent dat je pagina in een zoekresultaat is verschenen; een klik betekent dat iemand erop heeft geklikt."
      ],
      [
        "Bekijk wat bezoekers daarna doen",
        "Open Analytics als je het hebt ingericht. Bekijk de pagina’s waarop bezoekers binnenkomen en de gemeten aanvragen. Combineer dit met echte vragen en klachten. Aantallen in Analytics en Search Console kunnen verschillen door toestemming, meetwijze en vertraging."
      ],
      [
        "Laat ChatGPT of Claude de informatie ordenen",
        "Gebruik de promptgenerator en voeg de relevante exports en reacties toe. Vraag wat opvalt, wat onzeker is en welke ene verbetering het meeste onderzoek verdient. Laat AI geen ontbrekende cijfers invullen of oorzaken als bewezen presenteren. Bewaar het voorstel in groeiplan.md."
      ],
      [
        "Geef één wijziging aan Antigravity",
        "Beoordeel het voorstel en zet de gekozen taak in bouwplan.md. Laat Antigravity het plan en de meetnotitie eerst lezen. Laat de wijziging bouwen en testen volgens de eerdere stappen. Noteer wanneer je opnieuw kijkt en vergelijk dan een passende periode."
      ]
    ],
    "settingsTitle": "Optioneel: beide Google-tools koppelen",
    "settings": [
      [
        "Voorwaarde",
        "Je beheert dezelfde website in beide tools, bent Bewerker in Analytics en geverifieerd eigenaar in Search Console."
      ],
      [
        "Koppelen",
        "Analytics → Beheerder → Productkoppelingen → Search Console-koppelingen → Koppelen."
      ],
      [
        "Kies",
        "De juiste Search Console-property en de webstream van dezelfde website."
      ],
      [
        "Rapport ontbreekt",
        "Bekijk Rapporten → Bibliotheek en publiceer de Search Console-collectie als je daar rechten voor hebt."
      ],
      [
        "Alternatief",
        "Je kunt de rapporten ook los bekijken. Koppelen is niet nodig om één verbetering te kiezen."
      ]
    ],
    "example": "Voorbeeldbesluit zonder verzonnen cijfers: als echte feedback zegt dat beginners twijfelen over ervaring, verduidelijk je dat op de workshoppagina. Leg vast wat je verwacht en onderzoek later of de onduidelijkheid afneemt.",
    "checks": [
      "Je kunt echte zoekgegevens of gebruikersreacties aanwijzen achter je voorstel.",
      "Je houdt klikken, websitebezoek en werkelijk ontvangen aanvragen uit elkaar.",
      "De gekozen verbetering en het controlemoment staan in je bouwplan."
    ],
    "prompt": "Analyseer de aangeleverde Search Console- en Analytics-gegevens en echte gebruikersfeedback. Kies één onderbouwde volgende verbetering en neem een kopieerbare bouwopdracht voor Antigravity op in het Markdown-document. Voer zelf geen codewijzigingen uit.",
    "sources": [
      [
        "Google: Search Console koppelen aan Analytics",
        "https://support.google.com/analytics/answer/10737381?hl=nl"
      ],
      [
        "Google: rapport Prestaties",
        "https://support.google.com/webmasters/answer/7576553?hl=nl"
      ]
    ]
  }
];
export const seoInBuild = {
  "2": "Onderzoek ook welke vragen mensen in Google stellen. Bewaar aannames apart van echte zoekgegevens.",
  "5": "Bewaar de vraag van je bezoeker, het pagina-adres, de titel en beschrijving in seo-plan.md. SEO-les 1 helpt je hierbij.",
  "7": "Laat Antigravity seo-plan.md lezen. Neem vindbaarheid op in het bouwplan. Leg vast wat openbaar mag; bezoekersmeting is een aparte keuze.",
  "8": "Laat de afgesproken paginatitels, webadressen en vindbaarheid meebouwen. Voeg bezoekersmeting alleen toe als je die hebt afgesproken.",
  "11": "Laat de openbare pagina’s, snelheid en instellingen voor zoekmachines controleren. Heb je Analytics ingericht? Controleer dan ook de meting en toestemming.",
  "12": "Laat Antigravity het echte live-adres verwerken in de pagina-instellingen en sitemap. Gebruik daarna SEO-les 3 voor Search Console."
};
