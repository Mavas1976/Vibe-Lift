// Canonical public prompt texts. Sync downloads with node scripts/sync-prompts.mjs.
export const prompts = [
  {
    "id": 1,
    "title": "Van losse gedachte naar projectbrief",
    "role": "Productstrateeg",
    "text": "Werk vanuit het doel, gebruik de meegegeven bronnen en controleer de uitkomst. Zet mijn idee en de bijgevoegde informatie om in een heldere\nprojectbrief. Beschrijf doelgroep, probleem, huidige werkwijze, gewenste\nuitkomst, eerste scope en succescriteria. Scheid wat ik expliciet heb gezegd\nvan jouw aannames. Benoem tegenstrijdigheden en ontbrekende informatie.\nWerk uit wat al duidelijk is en stel alleen vragen die een wezenlijke keuze\nblokkeren. Lever een leesbaar Markdown-bestand op dat ik kan gebruiken bij\nonderzoek, ontwerp en bouw.\n\nMijn idee: zie mijn projectcontext\nBeschikbare bronnen: zie mijn meegegeven bronnen",
    "result": "Een afgebakende projectbrief met doelgroep, probleem, scope en open keuzes."
  },
  {
    "id": 2,
    "title": "Onderzoek met bewijs",
    "role": "Onderzoeker",
    "text": "Onderzoek het probleem en de markt voor mijn doelgroep en het beschreven probleem.\nGebruik actuele primaire bronnen waar mogelijk. Bekijk ook openbare\nhandleidingen, werkinstructies, release notes en echte schermbeelden.\nVergelijk doelgroep, proces, functies, beperkingen en aantoonbare verschillen.\nMaak zichtbaar wat bevestigd is, wat afgeleid is en wat onbekend blijft.\nVerzin geen schermen, klantenaantallen, prijzen of productmogelijkheden.\nGeef bij iedere belangrijke conclusie de bron en datum. Zoek tegenbewijs\nvoor mijn uitgangspunt. Eindig met de consequenties voor mijn propositie.\n\nGebruik webonderzoek met bronlinks waar beschikbaar, bijvoorbeeld in Claude of ChatGPT. Onderzoek ook de zoekvragen achter mogelijke openbare pagina’s. Scheid echte waarnemingen van aannames; verzin geen zoekvolumes.",
    "result": "Onderzoek met herleidbare bronnen en herkenbaar onderscheid tussen echte en gereconstrueerde schermen."
  },
  {
    "id": 3,
    "title": "Werk het aanbod uit",
    "role": "Propositiestrateeg",
    "text": "Gebruik de projectbrief en het onderzoek om een volledige propositie te maken.\nBeschrijf voor wie het aanbod bedoeld is, welk probleem het oplost, de\ngewenste uitkomst, de werking, het onderscheid en de grenzen. Maak een\nkorte kernboodschap en een uitgebreidere uitleg. Geef aan welk bewijs de\nbelofte ondersteunt en welk bewijs nog ontbreekt. Werk een eerste aanbod,\nlogische vervolgstap en mogelijke latere uitbreiding uit. Verzin geen\nresultaten, klanten, prijzen of garanties. Lever propositie.md op.",
    "result": "Een aanbod waarvan iedere feitelijke productbelofte is onderbouwd of als ambitie gemarkeerd."
  },
  {
    "id": 4,
    "title": "Toets de belangrijkste aanname",
    "role": "Productonderzoeker",
    "text": "Bepaal welke onbewezen aanname deze propositie het meest kwetsbaar maakt.\nOntwerp een kleine praktijktoets: met wie spreken we, wat laten we zien,\nwelke vraag of handeling testen we en welke uitkomst verandert onze keuze?\nMaak een gespreksleidraad en een eenvoudig resultatenoverzicht. Scheid\ninteresse in het idee van werkelijk gebruik of bereidheid om te betalen.",
    "result": "Een kleine toets met vooraf bepaalde besliscriteria; nog geen verzonnen klantresultaten."
  },
  {
    "id": 5,
    "title": "Maak processen en schema’s",
    "role": "Functioneel ontwerper",
    "text": "Vertaal de propositie naar gebruikersrollen en complete gebruikersroutes.\nBeschrijf per route het startpunt, doel, stappen, beslissingen, gegevens,\nrechten en eindresultaat. Neem teruggaan, annuleren, ontbrekende gegevens,\nfouten en herstel mee. Geef ieder proces een herkenbaar ID en teken waar\nnuttig een compact schema. Scheid de volledige productvisie van wat in de\neerste versie komt. Lever flows.md op en benoem open beslissingen.",
    "result": "Flows met start, einde, uitzonderingen, rechten en herkenbare IDs."
  },
  {
    "id": 6,
    "title": "Maak de scherminventaris",
    "role": "UX-ontwerper",
    "text": "Maak op basis van de propositie en flows een volledige scherminventaris.\nNeem pagina's, navigatie, formulieren, modals, drawers en overlays mee.\nBeschrijf per scherm: ID, doel, gebruikersrol, inhoud, acties, invoer,\nvalidatie, vervolgstappen en gedrag op mobiel. Werk relevante toestanden\nuit: laden, leeg, gevuld, fout, succes en onvoldoende rechten.\nKoppel schermen aan processen en maak zichtbaar wat nu wordt gebouwd,\nwat later komt en waar nog een beslissing nodig is. Lever schermen.md\nplus een dekkingsmatrix op. Laat geen proces zonder scherm of afhandeling.\n\nMaak voor openbare contentpagina’s ook seo-plan.md: de zoekvraag, gewone pagina-URL, unieke paginatitel, meta-beschrijving, hoofdkop, interne links en vervolgstap. Gebruik echte informatie uit het onderzoek.",
    "result": "Schermen en toestanden die aantoonbaar aansluiten op de flows."
  },
  {
    "id": 7,
    "title": "Ontwerp je schermen in Stitch",
    "role": "UX-ontwerper",
    "text": "Ontwerp de hieronder beschreven website of app met de meegegeven pagina's, teksten,\ngebruikersroute en stijlreferenties. Maak de echte schermontwerpen voor desktop en mobiel.\nGebruik één samenhangende stijl voor kleuren, typografie, afstanden, knoppen en formulieren.\nMaak de belangrijkste handeling op elk scherm herkenbaar. Werk ook relevante lege,\nlaad-, fout- en succesweergaven uit. Gebruik echte inhoud uit mijn input en behoud\nde gewenste functies. Verzin geen prijzen, testimonials, resultaten of keurmerken.\nMaak keuzes zichtbaar als nog informatie ontbreekt. Lever het ontwerp zodat ik de\nschermen kan beoordelen en daarna samen met de inhoud aan mijn bouwer kan geven.\nBeschrijf kort welke ontwerpafspraken ik moet meenemen.",
    "result": "Beoordeelbare schermen voor desktop en mobiel, plus de afspraken voor je bouwer."
  },
  {
    "id": 8,
    "title": "Stuur het ontwerp bij in Stitch",
    "role": "Productontwerper",
    "text": "Werk deze schermen verder uit binnen dezelfde visuele richting: de genoemde schermen.\nMaak de belangrijkste handeling per scherm direct herkenbaar. Verbeter\nleesbaarheid, hiërarchie, afstanden en de samenhang van knoppen en velden.\nHoud componenten consistent en werk de mobiele variant uit. Behoud de\ninhoud en functies uit de specificatie. Mijn concrete feedback: de feedback hieronder.",
    "result": "Concrete ontwerpverbeteringen binnen één samenhangende visuele richting."
  },
  {
    "id": 9,
    "title": "Lees eerst het project en maak het bouwplan",
    "role": "Softwarearchitect",
    "text": "Werk vanuit het doel, gebruik de meegegeven bronnen en controleer de uitkomst. Lees de projectbrief, propositie, flows, schermspecificaties,\nontwerpbestanden en bestaande code in deze projectmap. Maak een overzicht\nvan wat aanwezig is, ontbreekt of elkaar tegenspreekt. Onderzoek eerst wat\nje kunt uitbreiden, hergebruiken of aanpassen. Onderbouw nieuwe onderdelen.\nMaak daarna een bouwplan met kleine controleerbare stappen, afhankelijkheden\nen acceptatiecriteria. Verbind iedere stap aan de relevante scherm- en\nproces-ID's. Behoud bestaande werking. Schrijf besluiten en open punten weg\nin het projectdossier. Voer de afgesproken eerste bouwstap uit zodra de\nbenodigde keuzes duidelijk zijn. Werk vóór implementatie het toepasselijke\narchitectuurdossier uit met systeemonderdelen, gegevensstromen, rechten, fouten en herstel.\n\nWerk in Antigravity met de bedoelde GitHub-repository. Controleer eigenaar, repository, branch en lees-/schrijftoegang; laat mij zelf de aangeboden aanmelding afronden. Vraag geen toegangstoken in de chat. Laat de agent het technische versiebeheer uitvoeren en beschrijf hoe ik de wijziging en commitlink controleer. Spreek af welke branch Railway mag publiceren. Neem seo-plan.md op in het bouwplan: echte openbare URL’s, uitleesbare inhoud, title, meta-beschrijving, canonical, sitemap.xml, robots.txt, juiste 404/redirects, interne links, mobiel en lichte beelden. Houd besloten delen achter toegangscontrole. Plan GA4 met de juiste meet-ID en het afgesproken toestemmingsgedrag; tel succesvolle aanvragen alleen na bevestigde ontvangst en voorkom dubbele events. Leg per eis het acceptatiebewijs vast. Voer externe accountinstellingen alleen binnen de afgesproken opdracht uit.",
    "result": "Een plan dat begint bij de werkelijk aanwezige code en eindigt met een gecontroleerde eerste bouwstap."
  },
  {
    "id": 10,
    "title": "Verbind site, demo en portaal",
    "role": "Frontend- en integratieontwikkelaar",
    "text": "Controleer hoe de openbare site, demo en bestaande inlogomgeving op elkaar\naansluiten. Gebruik de aanwezige routes, talen, vormgeving en authenticatie.\nMaak de overgang voor een bezoeker logisch en herkenbaar. Controleer CTA's,\nterugkeerlinks, taalkeuze en de relevante informatiepagina's. Voeg alleen\nbestaande of expliciet gespecificeerde functies toe. Test de hele route van\nopenbare pagina tot de eerste bruikbare handeling na inloggen.",
    "result": "Een gecontroleerde route van openbare pagina naar de bedoelde producthandeling."
  },
  {
    "id": 11,
    "title": "Bouw de eerste werkende route",
    "role": "Fullstackontwikkelaar",
    "text": "Implementeer de eerste complete gebruikersroute uit het bouwplan: de hieronder beschreven gebruikersroute.\nWerk de benodigde schermen, validatie, rechten en gegevensverwerking uit.\nGebruik bestaande componenten en de vastgelegde ontwerpafspraken. Neem\nladen, lege resultaten, fouten en herstel mee waar ze relevant zijn.\nMaak testdata herkenbaar en vermeld iedere nog gesimuleerde koppeling.\nControleer de route van begin tot eind. Rapporteer wat werkt, wat is getest,\nwelke onderdelen nog ontbreken en hoe ik het resultaat zelf kan openen.\n\nBouw de afgesproken SEO-basis direct mee voor openbare pagina’s. Controleer echte URL’s, uitleesbare inhoud, metadata en interne links. Houd het meetplan aan: geen succes-event bij een fout en geen dubbele gebeurtenissen; respecteer de gekozen toestemming.",
    "result": "Een complete werkende gebruikersroute met bewijs en zichtbare resterende beperkingen."
  },
  {
    "id": 12,
    "title": "Maak de lokale starter",
    "role": "Ontwikkelaar voor de lokale omgeving",
    "text": "Werk vanuit het doel, gebruik de meegegeven bronnen en controleer de uitkomst. Maak dit project op mijn Windows-computer met één dubbelklik\nlokaal startbaar en zichtbaar in mijn browser. Inspecteer eerst de bestaande\nprojectstructuur, README, package scripts, lockfiles, omgevingsconfiguratie,\nbackend, eventuele Docker-opzet en het bestaande poortregister.\n\nMaak of verbeter start_local.bat in de hoofdmap. Hergebruik een bestaande\nstarter waar mogelijk. Laat die vanuit zijn eigen map werken, ook als het\npad spaties bevat. Gebruik de bij dit project horende tools en versies.\nGebruik zo nodig een duidelijk benoemd PowerShell-hulpscript.\n\nDe starter moet:\n1. Controleren welke vereisten en configuratie ontbreken en dat begrijpelijk\n   melden. Geheimen blijven buiten scripts, logs en de codebewaarplaats.\n2. Alleen de voor dit project benodigde diensten starten. Als Docker nodig\n   is, controleer beschikbaarheid en wacht begrensd op gereedheid.\n3. De afgesproken poorten gebruiken. Controleer bij een bezette poort of\n   daar dit project draait. Beëindig geen onbekende of andere processen.\n4. Backend en frontend in de juiste volgorde starten en met echte controles\n   vaststellen wanneer ze klaar zijn. Alleen een vaste wachttijd is niet genoeg.\n5. De juiste lokale URL openen zodra de toepassing beschikbaar is. Open bij\n   opnieuw starten geen dubbele servers. Maak hergebruik expliciet zichtbaar.\n6. Bij problemen de fout en de volgende herstelstap leesbaar tonen. Bewaar\n   bruikbare logs en voorkom dat een foutvenster direct verdwijnt.\n7. Een duidelijke stop- en herstartinstructie geven. Ruim alleen processen op\n   die aantoonbaar bij deze startsessie of dit project horen.\n\nLeg vast in LOKAAL_STARTEN.md: eenmalige installatie, configuratie zonder\ngeheime waarden, bestandslocatie, dubbelklikroute, browser-URL, testaccount\nof testdata indien nodig, stoppen, herstarten en veelvoorkomende problemen.\n\nControleer op Windows: eerste start, tweede start, stoppen en herstarten,\nontbrekende vereiste, bezette poort en een dienst die niet gereed komt.\nControleer daarnaast één echte gebruikershandeling in de geopende browser.\nGeef de werkelijk uitgevoerde controles en uitkomsten. Als je deze Windows-\nomgeving niet kunt bedienen, markeer die controles als NIET UITGEVOERD en\nlever concrete stappen waarmee ik ze zelf kan controleren.",
    "result": "Een bruikbare starter, begrensde foutafhandeling en werkelijk uitgevoerde Windows-controles."
  },
  {
    "id": 13,
    "title": "Laat mij het nu zien",
    "role": "Ontwikkelaar voor de lokale omgeving",
    "text": "Start de huidige versie via het opgeleverde lokale startbestand. Controleer\nwelk project op welke URL draait. Open de browser als je die toegang hebt\nen doorloop de hieronder beschreven gebruikersroute. Geef mij het exacte lokale adres, wat ik moet\nzien, welke handeling ik kan proberen en hoe ik stop. Claim alleen dat het\nwerkt als de start en de handeling daadwerkelijk zijn gecontroleerd.",
    "result": "De juiste lokale versie plus een echt gecontroleerde gebruikershandeling."
  },
  {
    "id": 14,
    "title": "Richt mijn testsessie in",
    "role": "Testautomatiseringsspecialist",
    "text": "Richt voor dit project een lokale browsersessie in waarin ik zelf een\ngebruikersroute kan doorlopen. Leg met passende hulpmiddelen de handelingen,\nrelevante fouten en timing vast. Gebruik waar passend Playwright, console-\nen netwerkregistratie. Controleer vooraf of de registratie werkt en waar\nde bestanden terechtkomen. Gebruik testdata en voorkom dat wachtwoorden,\nsessiesleutels of onnodige persoonsgegevens in gedeelde registraties belanden.\nLeg uit hoe ik de sessie start en stop en hoe jij de registratie terugvindt.",
    "result": "Een aantoonbaar werkende registratie van de afgesproken lokale testsessie."
  },
  {
    "id": 15,
    "title": "Onderzoek mijn zojuist doorlopen route",
    "role": "Debugger",
    "text": "Ik heb zojuist de hieronder beschreven route doorlopen. Dit viel mij op: zie mijn waarnemingen hieronder.\nBekijk de registratie van deze sessie en vergelijk die met de bedoelde flow.\nBenoem reproduceerbare problemen met bewijs, verwacht gedrag en werkelijk\ngedrag. Onderzoek de oorzaak in de relevante lagen. Herstel de problemen\nbinnen de afgesproken scope en herhaal daarna dezelfde route. Vermeld wat\nis opgelost, wat opnieuw is getest en wat nog niet kon worden vastgesteld.",
    "result": "Reproductie, oorzaak, herstel en hertest van dezelfde fout."
  },
  {
    "id": 16,
    "title": "Maak de interface rustiger en natuurlijker",
    "role": "Productontwerper en frontendontwikkelaar",
    "text": "Beoordeel systematisch de bestaande interface op hiërarchie, leesbaarheid, witruimte,\nknoppen, formulieren, navigatie, feedback en consistentie. Bekijk de echte\nschermen op mobiel en desktop. Leg per bevinding uit welk gebruikersprobleem\nje ziet. Maak een geprioriteerd verbeterplan en voer de afgesproken\nverbeteringen uit. Behoud de functies. Vergelijk voor en na en controleer\ndat de belangrijkste gebruikersroutes blijven werken.\n\nControleer ook de SEO-basis uit het bouwplan: indexeerbare openbare pagina’s, juiste canonical en sitemap, metadata, mobiel en snelheid. Controleer bij aanwezige meting echte events, ontdubbeling en accepteren, weigeren en intrekken van toestemming. Rapporteer controles die nog ontbreken.",
    "result": "Zichtbare verbeteringen met vergelijkbare voor- en na-beelden en behoud van werking."
  },
  {
    "id": 17,
    "title": "Test de hele keten",
    "role": "QA-engineer",
    "text": "Controleer de afgesproken release tegen de proces-, scherm- en\nacceptatiecriteria. Test de relevante rollen, normale routes, foutpaden,\nrechten en gegevensverwerking. Combineer browsercontroles met controles\nvan API en opslag waar die bestaan. Gebruik een passende reeks schermmaten.\nKoppel iedere bevinding en test aan een eis en versie. Scheid geslaagd,\ngefaald, geblokkeerd en niet getest. Een hoog aantal tests is geen bewijs\nvan volledige dekking. Los releaseblokkers op en hertest de gewijzigde routes.",
    "result": "Een testmatrix met echte uitkomsten voor browser, API en opslag waar aanwezig."
  },
  {
    "id": 18,
    "title": "Maak testen opnieuw uitvoerbaar",
    "role": "Testautomatiseringsspecialist",
    "text": "Maak of verbeter run_local_test.bat voor de afgesproken lokale controles.\nGebruik de bestaande testomgeving en voorkom verwarring met de ontwikkel-\nof productieomgeving. Controleer vereisten en testdata, geef duidelijke\nresultaten en een foutcode bij mislukking. Bewaar rapporten op een vaste plek.\nDocumenteer welke dekking het script wel en niet heeft en hoe ik het gebruik.",
    "result": "Een herhaalbare lokale testopdracht met betrouwbare exitcode en rapporten."
  },
  {
    "id": 19,
    "title": "Maak bestanden en media publicatieklaar",
    "role": "Ontwikkelaar voor webmedia en versiebeheer",
    "text": "Controleer in Antigravity welke bestanden gepubliceerd en in de\nGitHub-codeversie opgenomen worden.\nMaak passende webvarianten van afbeeldingen met behoud van de originelen.\nControleer afmetingen, bestandsgrootte, kwaliteit en werkende verwijzingen.\nHoud geheime configuratie, lokale logs, testauthenticatie en onnodige grote\nbronbestanden buiten commits. Controleer al gevolgde bestanden afzonderlijk;\nalleen uitsluitregels aanpassen verwijdert eerder opgeslagen inhoud niet.\nLever een overzicht van wijzigingen en resterende aandachtspunten.",
    "result": "Passende afgeleide mediabestanden en een gecontroleerde lijst van te publiceren bestanden."
  },
  {
    "id": 20,
    "title": "Publiceer de vrijgegeven versie op Railway",
    "role": "Release-engineer",
    "text": "Controleer de vrijgegeven versie van dit project en bereid de publicatie op de\nhieronder gekozen hostingomgeving voor. Gebruik de bestaande projectconfiguratie en\nactuele officiële documentatie. Controleer build, starten, variabelen, opslag en\nherstelmogelijkheid voor zover relevant. De versie moet eerst in de afgesproken\nGitHub-repository en branch staan. Benoem wat ik zelf in het hostingaccount moet instellen.\nPubliceer de bedoelde versie binnen de gegeven toegang en gekozen zichtbaarheid.\nControleer daarna de echte live-URL, kernroute, media, formulieren, SEO-instellingen\nen eventuele login. Meld welke versie is gepubliceerd, wat werkelijk is gecontroleerd\nen wat nog ontbreekt. Een succesvolle build bewijst niet dat de website bruikbaar is.",
    "result": "Een herleidbare versie op de gekozen omgeving, gecontroleerd via de echte live-URL."
  },
  {
    "id": 21,
    "title": "Maak het introductieplan",
    "role": "Marktintroductiestrateeg",
    "text": "Maak vanuit de propositie een concreet marktintroductieplan. Kies het eerste\nsegment, de boodschap, de geschikte kanalen, de contactroute en de eerste\nactivatiestap. Werk content, vindbaarheid, een eventuele demo en onboarding\nuit. Maak een haalbare actielijst met eigenaar, volgorde en meetpunt.\nScheid bereik, interesse, aanmelding, actief gebruik en betaald gebruik.\nGeef aan welke signalen aanleiding zijn om aanbod of doelgroep bij te stellen.\nBereid eventuele berichten voor; versturen gebeurt binnen expliciete opdracht.",
    "result": "Een uitvoerbaar introductieplan; daadwerkelijke marktresultaten blijven afzonderlijk te bewijzen."
  },
  {
    "id": 22,
    "title": "Controleer belofte en eerste ervaring",
    "role": "Productonderzoeker",
    "text": "Doorloop het traject van eerste kennismaking tot de eerste bruikbare uitkomst.\nVergelijk de belofte op de site met demo, aanmelding, onboarding en product.\nBenoem onduidelijke verwachtingen, onnodige stappen en ontbrekende uitleg.\nStel verbeteringen voor en bepaal welke gebeurtenissen we moeten meten om\nte zien waar mensen afhaken. Gebruik passende instellingen voor gegevens\nverzamelen en verifieer die bij de daadwerkelijke implementatie.",
    "result": "Een vergelijking van belofte, onboarding en eerste waarde met meetbare vervolgvragen."
  },
  {
    "id": 23,
    "title": "Sluit de werksessie af",
    "role": "Technisch projectleider",
    "text": "Werk het projectdossier bij. Leg vast wat is gewijzigd, welke versie geldt,\nwelke controles zijn uitgevoerd, wat nog blokkeert en wat de volgende\nconcrete stap is. Werk project_state.json en de relevante specificaties bij\nals die onderdeel zijn van deze opzet. Scheid gemeten tijd van schattingen.\nControleer of wijzigingen en noodzakelijke bestanden op de afgesproken\nmanier bewaard zijn. Controleer ook de wijzigingsimpact op alle teksten,\npagina’s, handleidingen, architectuur, contracten en Mermaid-schema’s. Werk\nde geraakte onderdelen bij en leg document- en codeversie samen vast.\nLaat geheimen buiten openbare statusinformatie.\n\nLaat Antigravity de gecontroleerde wijziging committen en naar de bedoelde GitHub-repository en branch sturen volgens de vrijgaveafspraak. Bewaar de online commitlink en houd bij welke versie werkelijk live staat.",
    "result": "Een hervatbare status met code-, document- en verificatieversie."
  },
  {
    "id": 24,
    "title": "Hervat een bestaand project",
    "role": "Technisch projectleider",
    "text": "Lees eerst de projectstatus, recente wijzigingen, open bevindingen en\nleidende documenten. Controleer die informatie tegen de aanwezige code\nen bestanden. Benoem verschillen. Hervat de eerstvolgende uitvoerbare\nstap binnen de afgesproken scope en controleer het resultaat. Schrijf\nnieuwe besluiten en de bijgewerkte status weer terug in het dossier.",
    "result": "Een gecontroleerde actuele stand en de volgende afgebakende uitvoerbare stap."
  },
  {
    "id": 25,
    "title": "Documenteer alle pagina’s en alle teksten",
    "role": "Technisch schrijver",
    "text": "Documenteer de volledige site in de huidige projectmap.\nLees eerst de bestaande documentatie en inventariseer alle routes,\nnavigatie, pagina's, gedeelde componenten, contentbestanden, vertalingen,\nformulieren en berichten. Neem relevante CMS-content mee als die toegankelijk\nis; registreer ontoegankelijke inhoud als ontbrekende onderzoeksdekking.\n\nMaak een volledig paginaregister en schrijf per pagina de daadwerkelijke\nteksten uit: metadata, koppen, secties, alinea's, links, CTA's, veldlabels,\nhulpteksten, validatiefouten, bevestigingen, lege toestanden en overige\nmeldingen. Neem header, footer, menu's, pop-ups, zijpanelen, alt-teksten en\nrelevante e-mail- en notificatietemplates mee. Leg alle aanwezige talen vast.\nDocumenteer dynamische teksten als template met variabelen en bron; kopieer\ngeen privégegevens van echte gebruikers naar het documentatiedossier.\n\nKoppel iedere tekst en pagina aan een stabiel ID, route en bronlocatie.\nScheid ontworpen, geïmplementeerd en gecontroleerd gedrag. Markeer concepten,\nplaceholders en ontbrekende inhoud. Gebruik herbruikbare tekstonderdelen\nmet één leidende bron en controleer de volledige samengestelde paginatekst.\nLever leesbare Markdown-bestanden en een dekkingsmatrix op. Alleen een lijst\npaginanamen of een samenvatting van teksten is niet voldoende.",
    "result": "Alle toepasselijke paginacontent en teksten, inclusief dynamische varianten en bronverwijzingen."
  },
  {
    "id": 26,
    "title": "Leg vast hoe je toepassing technisch werkt",
    "role": "Softwarearchitect",
    "text": "Beschrijf de architectuur en controleer de beschrijving tegen de aanwezige onderdelen. Onderzoek bestaande code, configuratie, gegevensschema's, routes,\nkoppelingen, documentatie en toegankelijke runtime. Breid het bestaande\ndossier uit. Beschrijf beoogde en aangetroffen architectuur afzonderlijk.\n\nWerk uit: systeemcontext, onderdelen en verantwoordelijkheden, frontend,\nbackend, gegevensopslag, bestandsopslag, interfaces, authenticatie, rechten,\ntrust boundaries, bedrijfsregels, omgevingen, configuratie, deployment,\nlogging, monitoring, prestaties, kosten, foutafhandeling, herstel en relevante\nafhankelijkheden. Documenteer API- en datacontracten, statussen, null-waarden,\ntime-outs, retrybeleid en bescherming tegen dubbele uitvoering waar relevant.\nLeg betekenisvolle besluiten vast met reden, alternatieven en gevolgen.\n\nMaak leesbare Mermaid-schema's voor de relevante systeem-, gegevens- en\nuitvoeringsrelaties. Koppel beschrijvingen en schema's aan concrete bronnen\nen versie. Controleer scheiding van verantwoordelijkheden, centrale afhandeling\nvan externe diensten en hergebruik van logica en configuratie. Onderzoek de\nvolgende foutcategorieën: ongeldige invoer, gelijktijdige handelingen, uitval\nvan externe diensten, gegevensintegriteit, limieten en publicatiefouten.\nKoppel risico's aan maatregelen en verificatie.\n\nMarkeer niet-toepasselijke onderwerpen met reden en onbekende onderdelen als\nonbekend. Verzin geen componenten, garanties, metingen of geslaagde controles.\nLever ARCHITECTURE.md met gekoppelde detaildocumenten, besluitenregister,\ndiagramregister en open punten. Benoem wat alleen is gelezen en wat werkelijk\nis uitgevoerd. Wijzig productcode alleen binnen een afzonderlijk gegeven\nbouw- of herstelopdracht.\n\nNeem voor openbare websites het SEO-plan en meetplan op in de architectuur: echte routes en uitleesbare inhoud, metadata, sitemap/canonical/robots, mobiel en prestaties, Analytics met toestemming en meetvalidatie. Beschrijf GitHub als codebewaarplaats, Antigravity als bouwagent en Railway als gekozen hostingroute wanneer die voor dit project zijn afgesproken. Voeg geen diensten toe die het project niet nodig heeft.",
    "result": "Architectuur en besluiten die onderscheid maken tussen ontwerp en aangetroffen werkelijkheid."
  },
  {
    "id": 27,
    "title": "Maak gebruikersdocumentatie en Mermaid-schema’s",
    "role": "Functioneel ontwerper en technisch schrijver",
    "text": "Maak of actualiseer\n/docs/APPLICATION_USER_OPERATING_MODEL.md en de bijbehorende gebruikers-\nen beheerdershandleidingen. Beschrijf de volledige toepasselijke werking:\nrollen, toegang, onboarding, dagelijkse taken, objecten, acties, formulieren,\ngegevens, statussen, berichten, instellingen en uitzonderingen.\nKoppel elke gebruikershandeling aan pagina, scherm, component en relevante\nAPI of gegevensopslag. Neem acceptatiecriteria en open productvragen op.\n\nMaak echte Mermaid-code voor navigatie, kernprocessen, toestanden,\ngegevensrelaties en technische interacties waar die bestaan. Geef ieder\nschema een ID, doel, status en bron. Houd schema's leesbaar en splits grote\nschema's op. Controleer syntax en gerenderde leesbaarheid als de omgeving\ndat ondersteunt. Markeer niet-uitgevoerde rendering expliciet.\nEen generiek voorbeeld mag niet als schema van de gebouwde site worden getoond.",
    "result": "Bruikbare gebruikers- en beheerinstructies met gecontroleerde diagrammen of expliciete renderbeperking."
  },
  {
    "id": 28,
    "title": "Controleer en synchroniseer documentatie bij oplevering",
    "role": "Documentatie-auditor",
    "text": "Beoordeel systematisch het dossier tegen de actuele siteversie. Begin bij de volledige\ninventaris van routes, teksten, talen, rollen, flows, onderdelen en koppelingen.\nVergelijk die met documentatie, Mermaid-schema's en testbewijs. Controleer ook\nomgekeerd of ieder beschreven onderdeel werkelijk bestaat of herkenbaar als\nontwerp of toekomstig onderdeel is gemarkeerd.\n\nWerk alle geraakte documentatie bij. Registreer afwijkingen met AUD-ID,\nbewijs, impact, prioriteit, eigenaar en hertest. Controleer verwijzingen en\nleesbaarheid. Leg documentversie, codeversie, omgeving, controledatum en niet\nonderzochte onderdelen vast. Geef per toepasselijk dossieronderdeel de status:\nVOLLEDIG, DEELS, ONTBREEKT of GEBLOKKEERD; motiveer N.V.T. afzonderlijk.\nMaak geen totaalscore die een ontbrekend essentieel onderdeel verbergt.\nLever de bijgewerkte bestanden en een documentatie-releasecheck op.",
    "result": "Een dossier dat in beide richtingen met de productversie is vergeleken."
  },
  {
    "id": 29,
    "title": "Beperk de eerste release tot de propositie",
    "role": "Productarchitect",
    "text": "Vergelijk de hieronder genoemde propositie met de volledige bestaande toepassing. Inventariseer functies,\npagina's, navigatie, rollen, koppelingen en gegevens. Geef elk onderdeel een bestemming:\nnodig voor de eerste release, noodzakelijke ondersteuning, latere uitbreiding of nader\nte beslissen. Onderbouw de keuze vanuit een concrete gebruikersbehoefte.\nMaak zichtbaar welke afhankelijkheden geraakt worden wanneer iets wordt uitgezet.\nBehoud toegang, gegevensintegriteit, foutafhandeling en andere noodzakelijke basisfuncties.\nMaak een uitvoerbaar verkleiningsplan. Voer de afgebakende wijzigingen uit wanneer\nde scope vaststaat. Behoud latere mogelijkheden op een onderhoudbare manier en verwijder\ngeen gegevens of grote functionaliteitsdelen zonder concrete opdracht.\nTest dat de gekozen kernroutes werken en dat uitgeschakelde onderdelen nergens meer\nals beschikbare mogelijkheid worden aangeboden. Lever scopematrix, wijzigingen en bewijs.",
    "result": "Een kleinere, samenhangende release met verklaarde afhankelijkheden en gecontroleerde kernroutes."
  },
  {
    "id": 30,
    "title": "Verfijn de mobiele ervaring na het algemene ontwerp",
    "role": "Mobiel productontwerper en frontendontwikkelaar",
    "text": "Het algemene ontwerp van de toepassing is vastgesteld. Gebruik het bestaande ontwerpsysteem\nen onderzoek nu de echte mobiele ervaring voor de hieronder genoemde rollen en belangrijkste taken.\nControleer inhoudsprioriteit, bereikbaarheid van acties, navigatie, aanraking, schermtoetsenbord,\nformulieren, uploads, tabellen, teruggaan, hervatten en foutafhandeling.\nBepaal per taak welke informatie direct nodig is en wat later kan verschijnen.\nWerk noodzakelijke wijzigingen daadwerkelijk uit in de toepassing. Maak geen tweede merkstijl\nen beschouw het verticaal stapelen van desktopblokken niet als voldoende bewijs van bruikbaarheid.\nBehoud invoer en voortgang bij relevante scherm- en navigatiewissels.\nDoorloop de kernroutes op afgesproken schermmaten en benoem of je een echt toestel of\nbrowseremulatie gebruikte. Lever voor/na-beelden, gewijzigde onderdelen, testresultaten en open punten.",
    "result": "Mobiele taken zijn daadwerkelijk doorlopen; desktop en bestaande ontwerpafspraken blijven gecontroleerd."
  },
  {
    "id": 31,
    "title": "Controleer en herstel alle talen",
    "role": "Internationaliseringsspecialist",
    "text": "Audit de volledige toepassing op de opgegeven ondersteunde talen en standaardtaal. Volg de bestaande\ntaalarchitectuur door pagina's, navigatie, formulieren, validatie, meldingen, e-mails,\ndynamische teksten, API-antwoorden en opgeslagen inhoud waar relevant.\nZoek naar ontbrekende vertalingen, gemengde talen, onbedoelde terugval en ruwe vertaalcodes.\nControleer datum-, getal- en valutaweergave en taalbehoud na inloggen en navigeren.\nHerstel de oorzaken in de bestaande vertaalbronnen en gedeelde componenten.\nBehoud de betekenis van goedgekeurde inhoud; leg onduidelijke vaktermen voor met context.\nTest elke ondersteunde taal op de kernroutes en op lange teksten en kleine schermen.\nLever een dekkingsmatrix, concrete correcties en bewezen resterende afwijkingen.",
    "result": "Taalkeuze en relevante teksten zijn consistent over de volledige onderzochte keten."
  },
  {
    "id": 32,
    "title": "Volg gegevens van bron tot scherm",
    "role": "Data-engineer en QA-engineer",
    "text": "Onderzoek de hieronder genoemde gegevensketen veld voor veld: bron of upload, extractie/invoer, transformatie,\nAPI-contract, opslag, berekening en uiteindelijke presentatie.\nMaak een traceerbaarheidsmatrix met veld, datatype, eenheid, bron, opslaglocatie,\ngebruikende functies, zichtbaarheid en vastgestelde afwijking.\nControleer volledigheid, duplicaten, herkomst, perioden, nul versus onbekend,\nafronding en gedrag na bewerken, herladen en cacheverversing.\nVergelijk handmatige invoer en automatische verwerking wanneer beide bestaan.\nGebruik overeengekomen testgevallen met bekende verwachtingen. Vul ontbrekende gegevens\nniet stilzwijgend aan en gebruik geen vaste voorbeeldwaarden als bewijs van een werkende koppeling.\nHerstel aangetoonde mapping- en verwerkingsfouten binnen scope en hertest de hele geraakte keten.\nLever matrix, oorzaken, wijzigingen en werkelijk gecontroleerde resultaten.",
    "result": "De herkomst en verwerking van ieder onderzocht veld zijn controleerbaar, inclusief ontbrekende gegevens."
  },
  {
    "id": 33,
    "title": "Verbeter snelheid en breng kosten in beeld",
    "role": "Performance-engineer",
    "text": "Onderzoek waarom de hieronder genoemde gebruikershandeling traag is. Reproduceer de handeling in de gekozen omgeving\nen meet de relevante stappen van invoer tot zichtbare uitkomst.\nMaak onderscheid tussen browser, netwerk, server, opslag, externe diensten en eventuele AI.\nRapporteer meetopzet, gegevensomvang, aantal waarnemingen en beperkingen.\nZoek de dominante oorzaak en vergelijk concrete verbeteringen op gebruikerswaarde,\ncorrectheid, beheerlast en kosten. Voer een passende wijziging uit en vergelijk onder\ndezelfde omstandigheden. Behoud foutafhandeling en inhoudelijke kwaliteit.\nBereken kosten alleen met bekende gebruikshoeveelheden en verifieerbare actuele tarieven;\ntoon anders een scenario met expliciete aannames. Meet ontbrekende waarden niet uit de lucht.\nLever de gevonden oorzaak, voor/na-metingen, afwegingen en resterende onzekerheid.",
    "result": "Een gemeten verbetering of een aantoonbare beperking; kosten zijn berekend of herkenbaar geraamd."
  },
  {
    "id": 34,
    "title": "Toets product- en beveiligingsclaims aan bewijs",
    "role": "Technisch auditor",
    "text": "Inventariseer materiële claims in de hieronder genoemde website, documentatie en verkoopmateriaal en vergelijk\ndie met de toegankelijke code, configuratie, contracten en uitvoeringsbewijzen.\nMaak per claim zichtbaar: exacte formulering, betekenis, benodigd bewijs, gevonden bewijs,\nonderzoekgrens en status ONDERBOUWD, DEELS, ONBEKEND of WEERSPROKEN.\nBesteed waar toepasselijk aandacht aan rechten, gegevensscheiding, encryptie, logging,\nherstel, gegevensbewaring en afhankelijkheid van externe diensten.\nEen configuratieregel of certificaat van een leverancier bewijst niet automatisch de\nwerking of naleving van het hele product. Raadpleeg actuele bevoegde bronnen voor normuitleg.\nLever concrete tekstcorrecties en een geprioriteerd herstelplan. Behoud betekenisvolle\nonzekerheid; verleen geen certificering of algemene productiegoedkeuring op basis van alleen code.",
    "result": "Iedere onderzochte claim heeft een herleidbare status en passende formulering."
  },
  {
    "id": 35,
    "title": "Beoordeel migratie naar een ander platform",
    "role": "Migratiearchitect",
    "text": "Onderzoek of de hieronder genoemde bestaande toepassing kan worden overgezet naar het opgegeven doelplatform.\nInventariseer eerst alle pagina's, interactieve functies, rollen, gegevens, koppelingen,\nbeheerwensen en deployment-afhankelijkheden. Vergelijk dit met de actuele officiële\nmogelijkheden van het doelplatform.\nBeoordeel per onderdeel: rechtstreeks overdraagbaar, ombouw nodig, externe dienst nodig\nof onvoldoende onderzocht. Leg uit wat een beheerder daarna zelf kan wijzigen en\nwaarvoor ontwikkeling nodig blijft. Maak onderscheid tussen een statische export,\neen ingebedde toepassing en een echte native implementatie.\nLever begrijpelijke opties met gevolgen voor werking, beheer, kosten, vindbaarheid,\ngegevensmigratie en terugkeer naar de oude oplossing. Geef een onderbouwd advies en\neen voorstel voor een beperkte proef. Voer de migratie pas uit binnen een concrete migratieopdracht.",
    "result": "Een onderbouwde keuze per functie, inclusief de toekomstige beheerervaring."
  },
  {
    "id": 36,
    "title": "Maak AI- en agentgedrag toetsbaar",
    "role": "AI-evaluatieontwerper",
    "text": "Onderzoek de bestaande AI-functies en testvoorzieningen voor de toepassing. Leg vast\nwelke invoer, instructies, modellen, tools, uitvoer en beslissingen bij elke functie horen.\nDefinieer controleerbare verwachtingen met passende referentiegevallen en bronmateriaal.\nToets afzonderlijk schema, feitelijke inhoud, volledigheid, onzekerheid, toolgebruik,\nfoutafhandeling, latency en kosten. Een geldig JSON-object bewijst geen juiste inhoud.\nNeem normale gevallen, ontbrekende of tegenstrijdige informatie, tooluitval en instructies\nin bronmateriaal mee. Instructies mogen geen mogelijkheden eisen die de agent niet heeft.\nBreid de bestaande testopzet uit met de kleinst bruikbare set en duidelijke rapportage.\nBewaar versie, dataset, feitelijke uitkomsten en menselijke beoordeling waar nodig.\nLever ontwerp, uitgevoerde controles en zichtbare beperkingen; vermeld welke evaluaties nog niet draaiden.",
    "result": "AI-kwaliteit is gekoppeld aan toetsbare gevallen en echte uitkomsten, niet aan alleen een eigen score."
  },
  {
    "id": 37,
    "title": "Voer een inhoudelijke wijziging overal consequent door",
    "role": "Productontwikkelaar",
    "text": "Verwerk deze wijziging in dit project: de hieronder genoemde oude situatie → gewenste situatie.\nInventariseer eerst waar de geraakte naam, tekst, waarde, regel of vormgeving voorkomt:\npagina's, gedeelde componenten, vertalingen, documenten, templates, tests en afgeleide bestanden.\nWerk vanuit de bestaande centrale bron. Verander betekenisvolle uitzonderingen alleen\nwanneer de opdracht daarop betrekking heeft. Behoud gegevens en bestaande werking.\nWerk toepasselijke documentatie en afgeleide bestanden bij. Controleer expliciet op oude\nvermeldingen en op onbedoelde vervanging van gelijknamige maar andere begrippen.\nLever gewijzigde locaties, gecontroleerde voorbeelden en eventuele open uitzonderingen.\nLeg de versie vast of publiceer alleen als die handeling onderdeel van de concrete opdracht is.",
    "result": "De wijziging is consistent verwerkt en gecontroleerd op achtergebleven of onbedoelde vervangingen."
  },
  {
    "id": 38,
    "title": "Richt vindbaarheid en gebruiksmeting in",
    "role": "SEO- en productanalysespecialist",
    "text": "Onderzoek de website en maak een uitvoerbaar plan voor vindbaarheid en gebruiksmeting.\nControleer toegankelijke routes, titels, beschrijvingen, indexeerbaarheid, interne links,\nsitemap, canonieke URLs en bruikbaarheid op mobiel. Pas alleen gestructureerde gegevens\ntoe die overeenkomen met zichtbare en onderbouwde inhoud.\nDefinieer de belangrijkste gebruikersacties vanuit de propositie en bepaal wat we moeten\nmeten om aanmelding, activatie en uitval te begrijpen.\nBeschrijf de inrichting van de hieronder genoemde zoekmachinebeheer en analytics, eigendomsverificatie,\nomgevingsscheiding en passende keuzes voor toestemming en gegevensminimalisatie.\nControleer actuele officiële documentatie voordat je instellingen implementeert.\nVoer de toegestane lokale wijzigingen uit en verifieer feitelijke gebeurtenissen en\nindexeerbaarheid waar toegang bestaat. Claim geen rankings, bezoekers of conversiewinst zonder meting.",
    "result": "Vindbaarheid en meting hebben een gecontroleerde configuratie of een concrete toegangsbeperking."
  },
  {
    "id": 39,
    "title": "Ruim de repository op met behoud van werking",
    "role": "Refactoring-engineer",
    "text": "Onderzoek de repository op dubbele logica, verouderde documentatie, ongebruikte onderdelen\nen onduidelijke verantwoordelijkheid. Stel eerst vast welke checkout en specificatie leidend zijn.\nMaak per kandidaat duidelijk: gebruik, afhankelijkheden, bewijs van overbodigheid,\nvoorgestelde wijziging en controle van behoud van gedrag.\nConsolideer overlap in bestaande componenten en leg grenzen en besluiten vast.\nAfwezigheid uit één zoekresultaat is geen bewijs dat een bestand ongebruikt is.\nWerk in kleine wijzigingen en respecteer lopend werk. Bewaar noodzakelijke geschiedenis\nen projectgegevens; grote verwijderingen vragen een concrete, afgebakende opdracht.\nVoer toepasselijke bestaande controles uit en werk verwijzingen en documentatie bij.\nLever een helder overzicht van opgeruimde onderdelen, bewijs en resterende onzekerheden.",
    "result": "De repository is aantoonbaar eenvoudiger terwijl relevante werking en informatie behouden blijven."
  },
  {
    "id": 40,
    "title": "Maak koppelingen bruikbaar en documenteer de API",
    "role": "API-architect en integratieontwikkelaar",
    "text": "Onderzoek hoe de opgegeven externe toepassing met onze toepassing moet koppelen voor het beschreven gebruikersdoel.\nInventariseer eerst bestaande endpoints, authenticatie, rechten, schema's en adapters.\nWerk bestaande mogelijkheden uit voordat je een nieuwe integratielaag maakt.\nDefinieer invoer en uitvoer, foutcodes, statusovergangen, versiebeleid en limieten.\nLeg voor schrijfhandelingen vast hoe dubbele verzoeken en retries worden afgehandeld.\nMaak expliciet welke API wij aanbieden en welke externe API wij gebruiken.\nImplementeer de afgesproken verbinding en publiceer passende specificaties en voorbeelden\nzonder geheime sleutels. Test de contracten en ten minste één complete toegestane integratieroute.\nMarkeer ontbrekende toegang en gesimuleerde diensten. Lever documentatie, voorbeeldverzoeken,\nwerkelijke testuitkomsten en de volgende stap voor een aansluitende ontwikkelaar.",
    "result": "Een aansluitende ontwikkelaar heeft concrete contracten en een aantoonbaar gecontroleerde route."
  },
  {
    "id": 41,
    "title": "Bewaar je wijzigingen op GitHub",
    "role": "Ontwikkelaar",
    "result": "De bedoelde wijziging staat op de juiste GitHub-branch, met een controleerbare versielink.",
    "text": "Controleer de wijzigingen in dit project. Voer de passende controles uit en maak\neen commit van alleen het hieronder omschreven werk. Push die commit naar de opgegeven\nGitHub-repository en branch. Neem geen geheime waarden, lokale logs of onnodige grote\nbronbestanden mee. Behoud andermans wijzigingen en overschrijf geen geschiedenis.\nRespecteer de onderstaande afspraak over automatische publicatie. Bij onbekende\npublicatiegevolgen: bereid de commit voor en vraag gericht wat nog moet worden besloten.\nControleer na de push dat de commit op GitHub staat. Geef de versielink en een korte\nsamenvatting van de wijziging en werkelijk uitgevoerde controles."
  },
  {
    "id": 42,
    "title": "Koppel je project aan GitHub",
    "role": "Ontwikkelaar",
    "result": "Je bouwer werkt in de juiste projectmap met de bedoelde repository.",
    "text": "Verbind de geopende projectmap met de hieronder opgegeven GitHub-repository.\nControleer eerst de bestaande koppeling, branch en onopgeslagen wijzigingen.\nHergebruik de juiste bestaande koppeling. Overschrijf geen bestaande bestanden of werk.\nLaat mij de aanmelding bij GitHub afronden als toegang ontbreekt; vraag niet om een\ntoegangstoken in de chat. Controleer de repository, huidige branch en toegang.\nLeg uit waar we verder werken. Deze opdracht koppelt het project; committen, pushen\nen publiceren volgen in een afzonderlijke opdracht."
  }
];
