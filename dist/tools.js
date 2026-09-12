export const tools = {
  "chatgpt": {
    "name": "ChatGPT",
    "logo": "assets/tools/chatgpt.png",
    "kind": "AI · onderzoeken & uitwerken",
    "url": "https://chatgpt.com/",
    "docs": "https://help.openai.com/en/articles/10500283-deep-research",
    "description": "Orden je idee, analyseer documenten en onderzoek vragen. Gebruik Search of Deep research voor actuele bronnen, als jouw account die functie heeft."
  },
  "claude": {
    "name": "Claude",
    "logo": "assets/tools/claude.png",
    "kind": "AI · onderzoeken & schrijven",
    "url": "https://claude.ai/",
    "docs": "https://support.claude.com/en/articles/11088861-use-research-on-claude",
    "description": "Werk je projectbrief, onderzoek en teksten uit. Gebruik web search of Research voor bronnen; bekijk de beschikbaarheid in je account."
  },
  "stitch": {
    "name": "Stitch",
    "logo": "assets/tools/stitch.png",
    "kind": "AI · visueel ontwerpen",
    "url": "https://stitch.withgoogle.com/",
    "docs": "https://developers.googleblog.com/stitch-a-new-way-to-design-uis/",
    "description": "Vertaal je schermen en echte inhoud naar een visueel ontwerp. Verfijn het resultaat en geef de gekozen versie door aan je bouwer."
  },
  "antigravity": {
    "name": "Antigravity",
    "logo": "assets/tools/antigravity.png",
    "kind": "AI · bouwen & controleren",
    "url": "https://antigravity.google/",
    "docs": "https://antigravity.google/docs/features",
    "description": "Open je lokale projectmap. Laat eerst bestanden lezen en een plan maken. Geef daarna opdrachten om te bouwen, te testen en gecontroleerde versies op GitHub te bewaren."
  },
  "github": {
    "name": "GitHub",
    "logo": "assets/tools/github.svg",
    "kind": "Code bewaren · geen AI-bouwer",
    "url": "https://github.com/",
    "docs": "https://docs.github.com/en/get-started/using-github/hello-world",
    "description": "Bewaar hier de code en de versiegeschiedenis die je vanuit Antigravity verstuurt. Je lokale projectmap bevat daarnaast je onderzoek, AI-output en ontwerpen."
  },
  "railway": {
    "name": "Railway",
    "logo": "assets/tools/railway.png",
    "kind": "Hosting · online publiceren",
    "url": "https://railway.com/",
    "docs": "https://docs.railway.com/guides/vibe-coding-deploy",
    "description": "Laat een versie uit je GitHub-repository online draaien. Controleer vooraf instellingen, toegang, kosten en wanneer wijzigingen automatisch worden gepubliceerd."
  },
  "playwright": {
    "name": "Playwright",
    "logo": "assets/tools/playwright.svg",
    "kind": "Testhulp · door je bouwagent",
    "url": "https://playwright.dev/",
    "docs": "https://playwright.dev/docs/codegen",
    "description": "Laat Antigravity herhaalbare browsertests maken voor afgesproken gebruikersroutes. Jij kiest het verwachte resultaat en beoordeelt de uitkomst."
  },
  "pagespeed": {
    "name": "PageSpeed Insights",
    "logo": "assets/tools/pagespeed.png",
    "kind": "Controle · snelheid & mobiel",
    "url": "https://pagespeed.web.dev/",
    "docs": "https://developers.google.com/speed/docs/insights/v5/about",
    "description": "Plak een openbaar webadres en start de analyse van snelheid en mobiel gebruik. Geef het rapport aan Antigravity om concrete problemen te onderzoeken."
  },
  "searchconsole": {
    "name": "Search Console",
    "logo": "assets/tools/searchconsole.png",
    "kind": "Google · vindbaarheid",
    "url": "https://search.google.com/search-console/",
    "docs": "https://support.google.com/webmasters/answer/9008080?hl=nl",
    "description": "Bekijk of Google je pagina’s kan vinden en welke zoekvragen bezoekers opleveren. Volg SEO-les 3 om je website toe te voegen en je eigendom aan te tonen."
  },
  "analytics": {
    "name": "Google Analytics",
    "logo": "assets/tools/analytics.svg",
    "kind": "Google · gebruik meten",
    "url": "https://analytics.google.com/",
    "docs": "https://support.google.com/analytics/answer/9304153?hl=nl",
    "description": "Bekijk hoe bezoekers je website gebruiken. Spreek eerst af wat je wilt meten. Volg SEO-les 4 om Analytics in te richten en te controleren."
  },
  "node": {
    "name": "Node.js",
    "logo": "assets/tools/node.png",
    "kind": "Optioneel · programma om code uit te voeren",
    "url": "https://nodejs.org/en/download",
    "docs": "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
    "description": "Alleen nodig als de projecttechniek dat vraagt. Laat Antigravity vaststellen welke versie en startwijze passen; je hoeft geen code te schrijven."
  },
  "docker": {
    "name": "Docker",
    "logo": "assets/tools/docker.png",
    "kind": "Optioneel · lokale diensten",
    "url": "https://www.docker.com/products/docker-desktop/",
    "docs": "https://docs.docker.com/desktop/setup/install/windows-install/",
    "description": "Laat Antigravity controleren of dit programma nodig is. Docker kan de bijbehorende diensten in een afgescheiden omgeving draaien. Installeer het alleen als het bouwplan dat vraagt."
  }
};
export const lessonTools = {
  "1": {
    "intro": "Richt eerst je map in met Antigravity. Werk je idee daarna uit met ChatGPT óf Claude.",
    "items": [
      [
        "antigravity",
        "Open je lokale map en gebruik de startopdracht bij Uitleg om die in te richten."
      ],
      [
        "chatgpt",
        "Plak de ingevulde prompt en voeg je notities toe. Lees de projectbrief na."
      ],
      [
        "claude",
        "Alternatief voor ChatGPT: gebruik dezelfde opdracht en notities."
      ]
    ],
    "handoff": "Bewaar: projectbrief.md in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "2": {
    "intro": "Kies ChatGPT óf Claude en zet zoeken op internet aan. Spreek zelf je doelgroep.",
    "items": [
      [
        "claude",
        "Zet web search aan. Gebruik Research bij uitgebreidere vragen als je account dit aanbiedt. Controleer de bronlinks."
      ],
      [
        "chatgpt",
        "Alternatief: gebruik Search. Kies Deep research als je vraag meerdere bronnen en vergelijkingen vereist."
      ]
    ],
    "handoff": "Bewaar: onderzoek.md in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "3": {
    "intro": "Gebruik ChatGPT of Claude voor het aanbod. Jij voert de praktijktoets uit.",
    "items": [
      [
        "chatgpt",
        "Maak een korte belofte en interview- of testvragen op basis van je onderzoek."
      ],
      [
        "claude",
        "Alternatief: orden de echte reacties en benoem wat je wel en niet kunt concluderen."
      ]
    ],
    "handoff": "Bewaar: propositie.md + praktijktoets.md in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "4": {
    "intro": "Gebruik ChatGPT of Claude om handelingen en foutgevallen uit te schrijven.",
    "items": [
      [
        "chatgpt",
        "Schrijf de route uit en laat controleren wat na elke handeling gebeurt."
      ],
      [
        "claude",
        "Alternatief: gebruik dezelfde opdracht en documenten."
      ]
    ],
    "handoff": "Bewaar: flows.md in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "5": {
    "intro": "Gebruik ChatGPT of Claude voor pagina’s, echte teksten en het SEO-plan.",
    "items": [
      [
        "chatgpt",
        "Maak schermen.md met alle teksten en de SEO-basis met de hoofdopdracht."
      ],
      [
        "claude",
        "Alternatief: gebruik dezelfde input en controleer de teksten zelf."
      ]
    ],
    "handoff": "Bewaar: schermen.md met teksten en SEO-basis in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "6": {
    "intro": "Plak de ontwerpopdracht rechtstreeks in Stitch. Je hoeft die niet eerst door een andere AI te laten herschrijven.",
    "items": [
      [
        "stitch",
        "Maak het ontwerp voor computer en telefoon. Bewaar de gekozen exports in 03-ontwerp."
      ],
      [
        "antigravity",
        "Bij stap 7: lees de export en de ontwerpafspraken. Bouw nu nog niets."
      ]
    ],
    "handoff": "Bewaar: ontwerp.md in de projectroot; exports in 03-ontwerp/. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "7": {
    "intro": "Open dezelfde projectmap in Antigravity. Laat eerst lezen en plannen; regel daarna GitHub.",
    "items": [
      [
        "antigravity",
        "Lees START-HIER.md en de gekozen bestanden. Maak het bouwplan en leg uit wat ontbreekt."
      ],
      [
        "github",
        "Maak of kies de online map voor je code en versies. Geef Antigravity de repositorylink."
      ],
      [
        "railway",
        "Laat bij het plan controleren hoe jouw site hier kan draaien en wat daarvoor nodig is."
      ]
    ],
    "handoff": "Bewaar bouwplan.md en github-koppeling.md in de projectroot; architectuur.md is optioneel. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "8": {
    "intro": "Laat Antigravity één route bouwen. Controleer daarna zelf de werking.",
    "items": [
      [
        "antigravity",
        "Bouw volgens het gecontroleerde plan. Start de website en test succes én fouten."
      ],
      [
        "github",
        "Laat alleen de afgesproken bestanden en gecontroleerde versie hier bewaren."
      ]
    ],
    "handoff": "Bewaar: Projectcode + bouwcontrole.md in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "9": {
    "intro": "Laat Antigravity een startbestand maken. Probeer starten en stoppen zelf.",
    "items": [
      [
        "antigravity",
        "Maak een begrijpelijke starter op basis van de echte projectopzet. Leg fouten en het lokale adres uit."
      ],
      [
        "node",
        "Alleen als nodig: de omgeving die het JavaScript-project uitvoert. Laat installatie en versie controleren."
      ]
    ],
    "handoff": "Bewaar: START_PROJECT.bat + startinstructie.md in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "10": {
    "intro": "Jij test; Antigravity onderzoekt en herstelt de fouten die je doorgeeft.",
    "items": [
      [
        "antigravity",
        "Geef de stappen, verwachte uitkomst en foutmelding door. Laat repareren en opnieuw testen."
      ],
      [
        "playwright",
        "Laat Antigravity hiermee vaak gebruikte browserroutes automatisch testen. Je hoeft deze tool niet zelf te bedienen."
      ]
    ],
    "handoff": "Bewaar: testplan.md en na herstel bevindingen.md in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "11": {
    "intro": "Laat Antigravity de laatste versie controleren. Beslis daarna of de site live mag.",
    "items": [
      [
        "antigravity",
        "Controleer werking, teksten, toegang en de afgesproken vindbaarheid. Noteer ook wat niet is getest."
      ],
      [
        "playwright",
        "Laat Antigravity de afgesproken automatische tests herhalen op de laatste versie."
      ],
      [
        "pagespeed",
        "Plak een openbaar pagina-adres en start de analyse. Geef het rapport aan Antigravity."
      ]
    ],
    "handoff": "Bewaar: releasecheck.md in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "12": {
    "intro": "Antigravity bewaart de versie op GitHub. Railway publiceert die versie.",
    "items": [
      [
        "antigravity",
        "Laat de vrijgegeven versie committen en naar de afgesproken repository en branch sturen."
      ],
      [
        "github",
        "Controleer de laatste commit, gewijzigde bestanden en eventuele publicatiestatus."
      ],
      [
        "railway",
        "Koppel de repository, controleer instellingen en publiceer. Open de echte live-URL na een geslaagde deployment."
      ]
    ],
    "handoff": "Bewaar github-versie.md en release.md in de projectroot, met versiestatus en het echte live-adres. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "13": {
    "intro": "Laat Claude of ChatGPT een uitnodiging schrijven en echte reacties ordenen.",
    "items": [
      [
        "claude",
        "Schrijf een kort uitnodigingsbericht met de hoofdopdracht. Jij verstuurt het zelf."
      ],
      [
        "chatgpt",
        "Alternatief: maak het bericht of groepeer echte feedback."
      ],
      [
        "analytics",
        "Alleen als ingericht: bekijk of bezoekers de gewenste handeling afronden."
      ]
    ],
    "handoff": "Bewaar: introductieplan.md + leersignalen.md in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  },
  "14": {
    "intro": "Laat Antigravity de overdracht bijwerken. Begin de volgende sessie met dezelfde projectmap.",
    "items": [
      [
        "antigravity",
        "Werk overdracht en handleiding bij, leg de gecontroleerde versie vast en maak één volgende bouwtaak."
      ],
      [
        "github",
        "Controleer de online versielink; broncode alleen is geen back-up van formulieren of databases."
      ],
      [
        "searchconsole",
        "Gebruik echte zoekvragen en indexatieproblemen om een passende verbetering te kiezen."
      ]
    ],
    "handoff": "Bewaar: overdracht.md + gebruikershandleiding.md in de projectroot. Bewaar oorspronkelijke AI-output in 01-bronnen en werk START-HIER.md bij."
  }
};
export const repositoryGuide = [
  [
    "Kies je codebewaarplaats",
    "Maak op GitHub met New repository een online map voor de projectcode, of kies de bestaande repository. Kies wie de code mag zien en kopieer de repositorylink. De codebewaarplaats vervangt je lokale projectmap niet."
  ],
  [
    "Geef Antigravity toegang",
    "Open het juiste project in Antigravity en geef de repositorylink. Laat de agent controleren of die repository bereikbaar is en schrijven is toegestaan. Voltooi de aangeboden GitHub-aanmelding zelf; plak geen toegangstokens in een chat. De precieze aanmeldroute kan per installatie verschillen."
  ],
  [
    "Controleer de wijziging",
    "Vraag Antigravity om de gewijzigde bestanden, een korte uitleg en de testuitkomsten. Bekijk de wijzigingen in het versiebeheerpaneel. Spreek af wat naar GitHub mag. Houd privébronnen, geheime sleutels en onnodige grote originelen erbuiten; bewaar ze wel veilig in je eigen projectmap."
  ],
  [
    "Laat vastleggen en verzenden",
    "Geef Antigravity opdracht de gecontroleerde wijziging te committen en naar de afgesproken GitHub-branch te pushen. Commit betekent een versie vastleggen; push betekent die versie naar GitHub sturen. Je hoeft de commando’s niet zelf uit te voeren. Controleer de commitlink op GitHub."
  ],
  [
    "Spreek af wanneer iets live gaat",
    "Railway kan nieuwe commits op een gekoppelde branch automatisch publiceren. Kies bij de inrichting een aparte werkbranch of een bewuste vrijgavestap, zodat een tussentijdse wijziging niet onverwacht live komt. Je kunt automatische publicatie bij de dienstinstellingen uitschakelen met Disable en later bewust Deploy Latest Commit kiezen. Controleer repository, branch én publicatiestatus."
  ]
];
