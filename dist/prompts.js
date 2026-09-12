export const prompts = [
  {
    "id": 1,
    "title": "Van losse gedachte naar projectbrief",
    "text": "Werk vanuit het doel, gebruik de meegegeven bronnen en controleer de uitkomst. Zet mijn idee en de bijgevoegde informatie om in een heldere\nprojectbrief. Beschrijf doelgroep, probleem, huidige werkwijze, gewenste\nuitkomst, eerste scope en succescriteria. Scheid wat ik expliciet heb gezegd\nvan jouw aannames. Benoem tegenstrijdigheden en ontbrekende informatie.\nWerk uit wat al duidelijk is en stel alleen vragen die een wezenlijke keuze\nblokkeren. Lever een leesbaar Markdown-bestand op dat ik kan gebruiken bij\nonderzoek, ontwerp en bouw.\n\nMijn idee: [beschrijving]\nBeschikbare bronnen: [bestanden]"
  },
  {
    "id": 2,
    "title": "Onderzoek met bewijs",
    "text": "Onderzoek het probleem en de markt voor [doelgroep/probleem].\nGebruik actuele primaire bronnen waar mogelijk. Bekijk ook openbare\nhandleidingen, werkinstructies, release notes en echte schermbeelden.\nVergelijk doelgroep, proces, functies, beperkingen en aantoonbare verschillen.\nMaak zichtbaar wat bevestigd is, wat afgeleid is en wat onbekend blijft.\nVerzin geen schermen, klantenaantallen, prijzen of productmogelijkheden.\nGeef bij iedere belangrijke conclusie de bron en datum. Zoek tegenbewijs\nvoor mijn uitgangspunt. Eindig met de consequenties voor mijn propositie."
  },
  {
    "id": 3,
    "title": "Werk het aanbod uit",
    "text": "Gebruik de projectbrief en het onderzoek om een volledige propositie te maken.\nBeschrijf voor wie het aanbod bedoeld is, welk probleem het oplost, de\ngewenste uitkomst, de werking, het onderscheid en de grenzen. Maak een\nkorte kernboodschap en een uitgebreidere uitleg. Geef aan welk bewijs de\nbelofte ondersteunt en welk bewijs nog ontbreekt. Werk een eerste aanbod,\nlogische vervolgstap en mogelijke latere uitbreiding uit. Verzin geen\nresultaten, klanten, prijzen of garanties. Lever propositie.md op."
  },
  {
    "id": 4,
    "title": "Toets de belangrijkste aanname",
    "text": "Bepaal welke onbewezen aanname deze propositie het meest kwetsbaar maakt.\nOntwerp een kleine praktijktoets: met wie spreken we, wat laten we zien,\nwelke vraag of handeling testen we en welke uitkomst verandert onze keuze?\nMaak een gespreksleidraad en een eenvoudig resultatenoverzicht. Scheid\ninteresse in het idee van werkelijk gebruik of bereidheid om te betalen."
  },
  {
    "id": 5,
    "title": "Maak processen en schema’s",
    "text": "Vertaal de propositie naar gebruikersrollen en complete gebruikersroutes.\nBeschrijf per route het startpunt, doel, stappen, beslissingen, gegevens,\nrechten en eindresultaat. Neem teruggaan, annuleren, ontbrekende gegevens,\nfouten en herstel mee. Geef ieder proces een herkenbaar ID en teken waar\nnuttig een compact schema. Scheid de volledige productvisie van wat in de\neerste versie komt. Lever flows.md op en benoem open beslissingen."
  },
  {
    "id": 6,
    "title": "Maak de scherminventaris",
    "text": "Maak op basis van de propositie en flows een volledige scherminventaris.\nNeem pagina's, navigatie, formulieren, modals, drawers en overlays mee.\nBeschrijf per scherm: ID, doel, gebruikersrol, inhoud, acties, invoer,\nvalidatie, vervolgstappen en gedrag op mobiel. Werk relevante toestanden\nuit: laden, leeg, gevuld, fout, succes en onvoldoende rechten.\nKoppel schermen aan processen en maak zichtbaar wat nu wordt gebouwd,\nwat later komt en waar nog een beslissing nodig is. Lever schermen.md\nplus een dekkingsmatrix op. Laat geen proces zonder scherm of afhandeling."
  },
  {
    "id": 7,
    "title": "Laat de Stitch-opdracht maken",
    "text": "Maak een complete kopieerbare opdracht voor Stitch op basis van de\nbijgevoegde propositie, flows en scherminventaris. Beschrijf doelgroep,\nuitstraling, inhoudshiërarchie, navigatie, componenten, kleuren, typografie,\nwitruimte en mobiel gedrag. Gebruik de bestaande merkafspraken als die\ner zijn. Markeer ontbrekende keuzes. Neem per scherm de belangrijkste\ninhoud, acties en toestanden mee. Verzin geen functies, integraties,\nprijzen, testimonials of complianceclaims. Lever de Stitch-prompt als\nbestand op en behoud de koppeling met de scherm-ID's."
  },
  {
    "id": 8,
    "title": "Stuur het ontwerp bij in Stitch",
    "text": "Werk deze schermen verder uit binnen dezelfde visuele richting: [scherm-ID's].\nMaak de belangrijkste handeling per scherm direct herkenbaar. Verbeter\nleesbaarheid, hiërarchie, afstanden en de samenhang van knoppen en velden.\nHoud componenten consistent en werk de mobiele variant uit. Behoud de\ninhoud en functies uit de specificatie. Mijn concrete feedback: [feedback]."
  },
  {
    "id": 9,
    "title": "Lees eerst het project en maak het bouwplan",
    "text": "Werk vanuit het doel, gebruik de meegegeven bronnen en controleer de uitkomst. Lees de projectbrief, propositie, flows, schermspecificaties,\nontwerpbestanden en bestaande code in deze projectmap. Maak een overzicht\nvan wat aanwezig is, ontbreekt of elkaar tegenspreekt. Onderzoek eerst wat\nje kunt uitbreiden, hergebruiken of aanpassen. Onderbouw nieuwe onderdelen.\nMaak daarna een bouwplan met kleine controleerbare stappen, afhankelijkheden\nen acceptatiecriteria. Verbind iedere stap aan de relevante scherm- en\nproces-ID's. Behoud bestaande werking. Schrijf besluiten en open punten weg\nin het projectdossier. Voer de afgesproken eerste bouwstap uit zodra de\nbenodigde keuzes duidelijk zijn. Werk vóór implementatie het toepasselijke\narchitectuurdossier uit volgens opdracht 26 en hoofdstuk 11."
  },
  {
    "id": 10,
    "title": "Verbind site, demo en portaal",
    "text": "Controleer hoe de openbare site, demo en bestaande inlogomgeving op elkaar\naansluiten. Gebruik de aanwezige routes, talen, vormgeving en authenticatie.\nMaak de overgang voor een bezoeker logisch en herkenbaar. Controleer CTA's,\nterugkeerlinks, taalkeuze en de relevante informatiepagina's. Voeg alleen\nbestaande of expliciet gespecificeerde functies toe. Test de hele route van\nopenbare pagina tot de eerste bruikbare handeling na inloggen."
  },
  {
    "id": 11,
    "title": "Bouw de eerste werkende route",
    "text": "Implementeer de eerste complete gebruikersroute uit het bouwplan: [route-ID].\nWerk de benodigde schermen, validatie, rechten en gegevensverwerking uit.\nGebruik bestaande componenten en de vastgelegde ontwerpafspraken. Neem\nladen, lege resultaten, fouten en herstel mee waar ze relevant zijn.\nMaak testdata herkenbaar en vermeld iedere nog gesimuleerde koppeling.\nControleer de route van begin tot eind. Rapporteer wat werkt, wat is getest,\nwelke onderdelen nog ontbreken en hoe ik het resultaat zelf kan openen."
  },
  {
    "id": 12,
    "title": "Maak de lokale starter",
    "text": "Werk vanuit het doel, gebruik de meegegeven bronnen en controleer de uitkomst. Maak dit project op mijn Windows-computer met één dubbelklik\nlokaal startbaar en zichtbaar in mijn browser. Inspecteer eerst de bestaande\nprojectstructuur, README, package scripts, lockfiles, omgevingsconfiguratie,\nbackend, eventuele Docker-opzet en het bestaande poortregister.\n\nMaak of verbeter start_local.bat in de hoofdmap. Hergebruik een bestaande\nstarter waar mogelijk. Laat die vanuit zijn eigen map werken, ook als het\npad spaties bevat. Gebruik de bij dit project horende tools en versies.\nGebruik zo nodig een duidelijk benoemd PowerShell-hulpscript.\n\nDe starter moet:\n1. Controleren welke vereisten en configuratie ontbreken en dat begrijpelijk\n   melden. Geheimen blijven buiten scripts, logs en Git.\n2. Alleen de voor dit project benodigde diensten starten. Als Docker nodig\n   is, controleer beschikbaarheid en wacht begrensd op gereedheid.\n3. De afgesproken poorten gebruiken. Controleer bij een bezette poort of\n   daar dit project draait. Beëindig geen onbekende of andere processen.\n4. Backend en frontend in de juiste volgorde starten en met echte controles\n   vaststellen wanneer ze klaar zijn. Alleen een vaste wachttijd is niet genoeg.\n5. De juiste lokale URL openen zodra de toepassing beschikbaar is. Open bij\n   opnieuw starten geen dubbele servers. Maak hergebruik expliciet zichtbaar.\n6. Bij problemen de fout en de volgende herstelstap leesbaar tonen. Bewaar\n   bruikbare logs en voorkom dat een foutvenster direct verdwijnt.\n7. Een duidelijke stop- en herstartinstructie geven. Ruim alleen processen op\n   die aantoonbaar bij deze startsessie of dit project horen.\n\nLeg vast in LOKAAL_STARTEN.md: eenmalige installatie, configuratie zonder\ngeheime waarden, bestandslocatie, dubbelklikroute, browser-URL, testaccount\nof testdata indien nodig, stoppen, herstarten en veelvoorkomende problemen.\n\nControleer op Windows: eerste start, tweede start, stoppen en herstarten,\nontbrekende vereiste, bezette poort en een dienst die niet gereed komt.\nControleer daarnaast één echte gebruikershandeling in de geopende browser.\nGeef de werkelijk uitgevoerde controles en uitkomsten. Als je deze Windows-\nomgeving niet kunt bedienen, markeer die controles als NIET UITGEVOERD en\nlever concrete stappen waarmee ik ze zelf kan controleren."
  },
  {
    "id": 13,
    "title": "Laat mij het nu zien",
    "text": "Start de huidige versie via het opgeleverde lokale startbestand. Controleer\nwelk project op welke URL draait. Open de browser als je die toegang hebt\nen doorloop [gebruikersroute]. Geef mij het exacte lokale adres, wat ik moet\nzien, welke handeling ik kan proberen en hoe ik stop. Claim alleen dat het\nwerkt als de start en de handeling daadwerkelijk zijn gecontroleerd."
  },
  {
    "id": 14,
    "title": "Richt mijn testsessie in",
    "text": "Richt voor dit project een lokale browsersessie in waarin ik zelf een\ngebruikersroute kan doorlopen. Leg met passende hulpmiddelen de handelingen,\nrelevante fouten en timing vast. Gebruik waar passend Playwright, console-\nen netwerkregistratie. Controleer vooraf of de registratie werkt en waar\nde bestanden terechtkomen. Gebruik testdata en voorkom dat wachtwoorden,\nsessiesleutels of onnodige persoonsgegevens in gedeelde registraties belanden.\nLeg uit hoe ik de sessie start en stop en hoe jij de registratie terugvindt."
  },
  {
    "id": 15,
    "title": "Onderzoek mijn zojuist doorlopen route",
    "text": "Ik heb zojuist [route] doorlopen. Dit viel mij op: [korte waarneming].\nBekijk de registratie van deze sessie en vergelijk die met de bedoelde flow.\nBenoem reproduceerbare problemen met bewijs, verwacht gedrag en werkelijk\ngedrag. Onderzoek de oorzaak in de relevante lagen. Herstel de problemen\nbinnen de afgesproken scope en herhaal daarna dezelfde route. Vermeld wat\nis opgelost, wat opnieuw is getest en wat nog niet kon worden vastgesteld."
  },
  {
    "id": 16,
    "title": "Maak de interface rustiger en natuurlijker",
    "text": "Beoordeel systematisch de bestaande interface op hiërarchie, leesbaarheid, witruimte,\nknoppen, formulieren, navigatie, feedback en consistentie. Bekijk de echte\nschermen op mobiel en desktop. Leg per bevinding uit welk gebruikersprobleem\nje ziet. Maak een geprioriteerd verbeterplan en voer de afgesproken\nverbeteringen uit. Behoud de functies. Vergelijk voor en na en controleer\ndat de belangrijkste gebruikersroutes blijven werken."
  },
  {
    "id": 17,
    "title": "Test de hele keten",
    "text": "Controleer de afgesproken release tegen de proces-, scherm- en\nacceptatiecriteria. Test de relevante rollen, normale routes, foutpaden,\nrechten en gegevensverwerking. Combineer browsercontroles met controles\nvan API en opslag waar die bestaan. Gebruik een passende reeks schermmaten.\nKoppel iedere bevinding en test aan een eis en versie. Scheid geslaagd,\ngefaald, geblokkeerd en niet getest. Een hoog aantal tests is geen bewijs\nvan volledige dekking. Los releaseblokkers op en hertest de gewijzigde routes."
  },
  {
    "id": 18,
    "title": "Maak testen opnieuw uitvoerbaar",
    "text": "Maak of verbeter run_local_test.bat voor de afgesproken lokale controles.\nGebruik de bestaande testomgeving en voorkom verwarring met de ontwikkel-\nof productieomgeving. Controleer vereisten en testdata, geef duidelijke\nresultaten en een foutcode bij mislukking. Bewaar rapporten op een vaste plek.\nDocumenteer welke dekking het script wel en niet heeft en hoe ik het gebruik."
  },
  {
    "id": 19,
    "title": "Maak bestanden en media publicatieklaar",
    "text": "Controleer welke bestanden gepubliceerd en in Git opgenomen worden.\nMaak passende webvarianten van afbeeldingen met behoud van de originelen.\nControleer afmetingen, bestandsgrootte, kwaliteit en werkende verwijzingen.\nHoud geheime configuratie, lokale logs, testauthenticatie en onnodige grote\nbronbestanden buiten commits. Controleer al gevolgde bestanden afzonderlijk;\nalleen .gitignore aanpassen verwijdert bestaande Git-inhoud niet.\nLever een overzicht van wijzigingen en resterende aandachtspunten."
  },
  {
    "id": 20,
    "title": "Leg de versie vast en publiceer",
    "text": "Controleer de wijzigingen, teststatus en doelomgeving voor deze release.\nLeg de afgesproken versie vast in Git en controleer de bedoelde remote.\nBereid publicatie voor op de gekozen hostingomgeving: [omgeving]. Gebruik\nde actuele projectconfiguratie en officiële documentatie. Controleer build,\nstartcommando, instellingen, gegevensopslag en herstelmogelijkheid voor zover\nrelevant. Publiceer binnen de gegeven opdracht en toegangsrechten. Controleer\ndaarna de echte live-URL, kernroutes, media, formulieren en eventuele login.\nRapporteer welke versie live staat en welke livecontroles werkelijk zijn gedaan."
  },
  {
    "id": 21,
    "title": "Maak het introductieplan",
    "text": "Maak vanuit de propositie een concreet marktintroductieplan. Kies het eerste\nsegment, de boodschap, de geschikte kanalen, de contactroute en de eerste\nactivatiestap. Werk content, vindbaarheid, een eventuele demo en onboarding\nuit. Maak een haalbare actielijst met eigenaar, volgorde en meetpunt.\nScheid bereik, interesse, aanmelding, actief gebruik en betaald gebruik.\nGeef aan welke signalen aanleiding zijn om aanbod of doelgroep bij te stellen.\nBereid eventuele berichten voor; versturen gebeurt binnen expliciete opdracht."
  },
  {
    "id": 22,
    "title": "Controleer belofte en eerste ervaring",
    "text": "Doorloop het traject van eerste kennismaking tot de eerste bruikbare uitkomst.\nVergelijk de belofte op de site met demo, aanmelding, onboarding en product.\nBenoem onduidelijke verwachtingen, onnodige stappen en ontbrekende uitleg.\nStel verbeteringen voor en bepaal welke gebeurtenissen we moeten meten om\nte zien waar mensen afhaken. Gebruik passende instellingen voor gegevens\nverzamelen en verifieer die bij de daadwerkelijke implementatie."
  },
  {
    "id": 23,
    "title": "Sluit de werksessie af",
    "text": "Werk het projectdossier bij. Leg vast wat is gewijzigd, welke versie geldt,\nwelke controles zijn uitgevoerd, wat nog blokkeert en wat de volgende\nconcrete stap is. Werk project_state.json en de relevante specificaties bij\nals die onderdeel zijn van deze opzet. Scheid gemeten tijd van schattingen.\nControleer of wijzigingen en noodzakelijke bestanden op de afgesproken\nmanier bewaard zijn. Controleer ook de wijzigingsimpact op alle teksten,\npagina’s, handleidingen, architectuur, contracten en Mermaid-schema’s. Werk\nde geraakte onderdelen bij en leg document- en codeversie samen vast.\nLaat geheimen buiten openbare statusinformatie."
  },
  {
    "id": 24,
    "title": "Hervat een bestaand project",
    "text": "Lees eerst de projectstatus, recente wijzigingen, open bevindingen en\nleidende documenten. Controleer die informatie tegen de aanwezige code\nen bestanden. Benoem verschillen. Hervat de eerstvolgende uitvoerbare\nstap binnen de afgesproken scope en controleer het resultaat. Schrijf\nnieuwe besluiten en de bijgewerkte status weer terug in het dossier."
  },
  {
    "id": 25,
    "title": "Documenteer alle pagina’s en alle teksten",
    "text": "Documenteer de volledige site in de huidige projectmap.\nLees eerst de bestaande documentatie en inventariseer alle routes,\nnavigatie, pagina's, gedeelde componenten, contentbestanden, vertalingen,\nformulieren en berichten. Neem relevante CMS-content mee als die toegankelijk\nis; registreer ontoegankelijke inhoud als ontbrekende onderzoeksdekking.\n\nMaak een volledig paginaregister en schrijf per pagina de daadwerkelijke\nteksten uit: metadata, koppen, secties, alinea's, links, CTA's, veldlabels,\nhulpteksten, validatiefouten, bevestigingen, lege toestanden en overige\nmeldingen. Neem header, footer, menu's, pop-ups, zijpanelen, alt-teksten en\nrelevante e-mail- en notificatietemplates mee. Leg alle aanwezige talen vast.\nDocumenteer dynamische teksten als template met variabelen en bron; kopieer\ngeen privégegevens van echte gebruikers naar het documentatiedossier.\n\nKoppel iedere tekst en pagina aan een stabiel ID, route en bronlocatie.\nScheid ontworpen, geïmplementeerd en gecontroleerd gedrag. Markeer concepten,\nplaceholders en ontbrekende inhoud. Gebruik herbruikbare tekstonderdelen\nmet één leidende bron en controleer de volledige samengestelde paginatekst.\nLever leesbare Markdown-bestanden en een dekkingsmatrix op. Alleen een lijst\npaginanamen of een samenvatting van teksten is niet voldoende."
  },
  {
    "id": 26,
    "title": "Documenteer de volledige architectuur van je project",
    "text": "Beschrijf de architectuur en controleer de beschrijving tegen de aanwezige onderdelen. Onderzoek bestaande code, configuratie, gegevensschema's, routes,\nkoppelingen, documentatie en toegankelijke runtime. Breid het bestaande\ndossier uit. Beschrijf beoogde en aangetroffen architectuur afzonderlijk.\n\nWerk uit: systeemcontext, onderdelen en verantwoordelijkheden, frontend,\nbackend, gegevensopslag, bestandsopslag, interfaces, authenticatie, rechten,\ntrust boundaries, bedrijfsregels, omgevingen, configuratie, deployment,\nlogging, monitoring, prestaties, kosten, foutafhandeling, herstel en relevante\nafhankelijkheden. Documenteer API- en datacontracten, statussen, null-waarden,\ntime-outs, retrybeleid en bescherming tegen dubbele uitvoering waar relevant.\nLeg betekenisvolle besluiten vast met reden, alternatieven en gevolgen.\n\nMaak leesbare Mermaid-schema's voor de relevante systeem-, gegevens- en\nuitvoeringsrelaties. Koppel beschrijvingen en schema's aan concrete bronnen\nen versie. Controleer scheiding van verantwoordelijkheden, centrale afhandeling\nvan externe diensten en hergebruik van logica en configuratie. Onderzoek de\nvolgende foutcategorieën: ongeldige invoer, gelijktijdige handelingen, uitval\nvan externe diensten, gegevensintegriteit, limieten en publicatiefouten.\nKoppel risico's aan maatregelen en verificatie.\n\nMarkeer niet-toepasselijke onderwerpen met reden en onbekende onderdelen als\nonbekend. Verzin geen componenten, garanties, metingen of geslaagde controles.\nLever ARCHITECTURE.md met gekoppelde detaildocumenten, besluitenregister,\ndiagramregister en open punten. Benoem wat alleen is gelezen en wat werkelijk\nis uitgevoerd. Wijzig productcode alleen binnen een afzonderlijk gegeven\nbouw- of herstelopdracht."
  },
  {
    "id": 27,
    "title": "Maak gebruikersdocumentatie en Mermaid-schema’s",
    "text": "Maak of actualiseer\n/docs/APPLICATION_USER_OPERATING_MODEL.md en de bijbehorende gebruikers-\nen beheerdershandleidingen. Beschrijf de volledige toepasselijke werking:\nrollen, toegang, onboarding, dagelijkse taken, objecten, acties, formulieren,\ngegevens, statussen, berichten, instellingen en uitzonderingen.\nKoppel elke gebruikershandeling aan pagina, scherm, component en relevante\nAPI of gegevensopslag. Neem acceptatiecriteria en open productvragen op.\n\nMaak echte Mermaid-code voor navigatie, kernprocessen, toestanden,\ngegevensrelaties en technische interacties waar die bestaan. Geef ieder\nschema een ID, doel, status en bron. Houd schema's leesbaar en splits grote\nschema's op. Controleer syntax en gerenderde leesbaarheid als de omgeving\ndat ondersteunt. Markeer niet-uitgevoerde rendering expliciet.\nEen generiek voorbeeld mag niet als schema van de gebouwde site worden getoond."
  },
  {
    "id": 28,
    "title": "Controleer en synchroniseer documentatie bij oplevering",
    "text": "Beoordeel systematisch het dossier tegen de actuele siteversie. Begin bij de volledige\ninventaris van routes, teksten, talen, rollen, flows, onderdelen en koppelingen.\nVergelijk die met documentatie, Mermaid-schema's en testbewijs. Controleer ook\nomgekeerd of ieder beschreven onderdeel werkelijk bestaat of herkenbaar als\nontwerp of toekomstig onderdeel is gemarkeerd.\n\nWerk alle geraakte documentatie bij. Registreer afwijkingen met AUD-ID,\nbewijs, impact, prioriteit, eigenaar en hertest. Controleer verwijzingen en\nleesbaarheid. Leg documentversie, codeversie, omgeving, controledatum en niet\nonderzochte onderdelen vast. Geef per toepasselijk dossieronderdeel de status:\nVOLLEDIG, DEELS, ONTBREEKT of GEBLOKKEERD; motiveer N.V.T. afzonderlijk.\nMaak geen totaalscore die een ontbrekend essentieel onderdeel verbergt.\nLever de bijgewerkte bestanden en een documentatie-releasecheck op."
  }
];
