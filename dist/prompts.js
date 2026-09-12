// Canonical public tasks. Downloads are generated from these texts.
export const prompts = [
  {
    "id": 1,
    "title": "Maak je projectbrief",
    "role": "projectbegeleider",
    "text": "Schrijf op basis van mijn idee en notities een projectbrief van maximaal één pagina. Beschrijf: voor wie is de website, wat gaat nu lastig, wat moet de bezoeker kunnen doen en wanneer is de eerste versie klaar? Zet ideeën voor later apart. Benoem aannames en ontbrekende informatie. Verzin geen feiten. Lever 02-plan/projectbrief.md.",
    "result": "Een projectbrief die je kunt nalezen en opslaan in 02-plan."
  },
  {
    "id": 2,
    "title": "Onderzoek je probleem met bronnen",
    "role": "projectbegeleider",
    "text": "Lees mijn projectbrief en onderzoek de genoemde vragen. Gebruik zoeken op internet als dat beschikbaar is en meld het als dat niet kan. Vergelijk bestaande oplossingen op dezelfde punten. Geef per belangrijke conclusie een bronlink en datum. Controleer ook wat mijn idee tegenspreekt. Maak interviewvragen voor echte gebruikers; verzin geen gesprekken, cijfers of zoekvolumes. Orden mijn meegegeven reacties apart van je webonderzoek. Lever 02-plan/onderzoek.md met vastgesteld, nog onzeker en gevolgen voor het plan.",
    "result": "Een onderzoeksoverzicht met bronlinks, open vragen en interviewvragen."
  },
  {
    "id": 3,
    "title": "Schrijf een duidelijk aanbod",
    "role": "projectbegeleider",
    "text": "Gebruik mijn projectbrief en onderzoek. Schrijf een kort aanbod: voor wie, welk probleem, welke uitkomst en wat de eerste versie wel en nog niet doet. Gebruik gewone taal en beloof alleen wat ik kan onderbouwen. Zet ontbrekende prijzen of informatie als open vraag neer. Lever 02-plan/propositie.md.",
    "result": "Een korte aanbodtekst die past bij de eerste versie."
  },
  {
    "id": 4,
    "title": "Bereid een kleine praktijktoets voor",
    "role": "projectbegeleider",
    "text": "Kies met mijn input één belangrijke aanname die nog onzeker is. Schrijf op wie ik spreek, wat ik laat zien, wat ik vraag en bij welke uitkomst ik het plan aanpas. Maak een invulblad voor echte reacties. Vul geen verzonnen resultaten in. Verwerk aangeleverde reacties herkenbaar en benoem de beperkingen van een kleine groep. Lever 02-plan/praktijktoets.md.",
    "result": "Een testopzet en invulblad; reacties voeg je toe na de echte toets."
  },
  {
    "id": 5,
    "title": "Schrijf de bezoekersroute uit",
    "role": "projectbegeleider",
    "text": "Gebruik mijn aanbod en beschrijf één complete bezoekersroute. Noteer per stap: wat iemand ziet, doet, invult en terugkrijgt. Beschrijf ook waar de informatie wordt verwerkt en wie het resultaat ontvangt. Neem teruggaan, ongeldige invoer, ontbrekende toegang en een storing mee als die van toepassing zijn. Maak een eenvoudig schema met pijlen en leg het in gewone taal uit. Lever 02-plan/flows.md.",
    "result": "Een bezoekersroute met foutgevallen en afhandeling door de medewerker."
  },
  {
    "id": 6,
    "title": "Maak je schermenlijst en teksten",
    "role": "projectbegeleider",
    "text": "Gebruik mijn aanbod en bezoekersroute. Beschrijf elk nodig scherm met nummer, doel, inhoud, hoofdknop en vervolgstap. Schrijf alle zichtbare teksten: koppen, uitleg, veldnamen, knoppen en meldingen bij laden, fouten en succes. Gebruik gewone taal voor mijn doelgroep en werk mobiel gebruik uit. Verzin geen prijzen of beloften. Lever 02-plan/schermen.md en 02-plan/teksten.md. Maak voor openbare pagina’s ook 02-plan/seo-plan.md met zoekvraag, webadres, paginatitel, korte beschrijving en links naar volgende pagina’s.",
    "result": "Schermen.md, teksten.md en seo-plan.md in 02-plan."
  },
  {
    "id": 7,
    "title": "Ontwerp je schermen in Stitch",
    "role": "projectbegeleider",
    "text": "Maak de schermen uit mijn input voor een computer en telefoon. Gebruik mijn echte teksten, bezoekersroute en stijlvoorbeelden. Gebruik dezelfde kleuren, lettertypen, knoppen en invulvelden op alle schermen. Maak de hoofdactie duidelijk en werk ook laden, fouten en succes uit. Verzin geen prijzen, klantreacties of resultaten. Geef aan wat ontbreekt. Lever de ontwerpen en beschikbare exportbestanden, met een korte uitleg van de ontwerpafspraken voor mijn bouwer.",
    "result": "Schermontwerpen, beschikbare exports en ontwerpafspraken voor 03-ontwerp."
  },
  {
    "id": 8,
    "title": "Verbeter het ontwerp in Stitch",
    "role": "projectbegeleider",
    "text": "Pas de genoemde schermen aan op basis van mijn concrete feedback. Behoud de afgesproken inhoud, functies en stijl. Controleer leesbaarheid, de hoofdknop en het ontwerp voor de telefoon. Laat kort zien wat je hebt gewijzigd en welke nieuwe bestanden ik moet bewaren in 03-ontwerp.",
    "result": "Een aangepaste ontwerpversie met een korte lijst wijzigingen."
  },
  {
    "id": 9,
    "title": "Lees de projectmap en maak het bouwplan",
    "role": "bouwbegeleider",
    "text": "Lees START-HIER.md, de gekozen documenten in 02-plan, de ontwerpen in 03-ontwerp en eventuele bestaande code. Geef een overzicht van echt gelezen bestanden, ontbrekende informatie en tegenstrijdigheden. Hergebruik bestaande onderdelen. Leg uit hoe de eerste bezoekersroute werkt, waar gegevens aankomen en wie toegang krijgt. Neem seo-plan.md mee. Beschrijf benodigde programma’s, diensten, mogelijke kosten, codeplek en startwijze. Leg GitHub en de publicatieafspraak vast; voeg geen onnodige diensten toe. Maak 04-bouw/bouwplan.md en 04-bouw/architectuur.md met kleine stappen en per stap een controle. Bouw of installeer nu nog niets. Laat mij eerst het plan controleren.",
    "result": "Een leesverslag, bouwplan en technische uitleg; bouwen volgt na je controle."
  },
  {
    "id": 10,
    "title": "Laat website, demo en inloggen aansluiten",
    "role": "bouwbegeleider",
    "text": "Controleer de genoemde route tussen website, demo en inloggen. Beschrijf waar iemand binnenkomt, wat die ziet en hoe die verdergaat. Benoem kapotte links, ontbrekende uitleg en onjuiste toegang. Herstel de afgesproken onderdelen en test de route opnieuw. Noteer de uitkomst in 05-tests.",
    "result": "Een gecontroleerde route tussen de bestaande onderdelen."
  },
  {
    "id": 11,
    "title": "Bouw de eerste complete bezoekersroute",
    "role": "bouwbegeleider",
    "text": "Bouw alleen de genoemde route uit het nagekeken bouwplan. Gebruik de gekozen teksten en ontwerpen. Verbind schermen, invoer, verwerking en meldingen. Bouw de afgesproken SEO-basis mee. Voeg meting alleen toe als die is afgesproken en de instellingen bekend zijn. Start de site en test met testgegevens: één succes, ongeldige invoer en een mislukte verwerking. Controleer waar het resultaat aankomt. Benoem simulaties en niet aangesloten onderdelen. Bewaar controles in 05-tests/bouwcontrole.md en geef het echte lokale adres.",
    "result": "Een werkende route, lokaal adres en overzicht van uitgevoerde controles."
  },
  {
    "id": 12,
    "title": "Maak een eenvoudig startbestand",
    "role": "bouwbegeleider",
    "text": "Controleer eerst hoe dit project nu start en welke programma’s het nodig heeft. Maak of verbeter START_PROJECT.bat in de hoofdmap voor Windows. Gebruik de bestaande startwijze. Toon duidelijke fouten en het echte lokale adres. Stop geen andere processen en zet geen wachtwoorden in het bestand. Test starten, stoppen en opnieuw starten. Beschrijf het gebruik in 06-overdracht/startinstructie.md. Gebruik een passend alternatief als mijn computer geen Windows gebruikt.",
    "result": "Een getest startbestand met korte start- en stopinstructies."
  },
  {
    "id": 13,
    "title": "Open de huidige website lokaal",
    "role": "bouwbegeleider",
    "text": "Lees de startinstructie en controleer de projectmap. Start de bestaande website met de afgesproken werkwijze. Geef het echte lokale adres en hoe ik weer stop. Als starten mislukt, onderzoek de melding en leg uit wat nodig is. Verander geen andere programma’s of gegevens om dit te omzeilen.",
    "result": "Een lokaal geopende website of een concrete uitleg van de startfout."
  },
  {
    "id": 14,
    "title": "Bereid mijn test voor",
    "role": "bouwbegeleider",
    "text": "Lees de gekozen bezoekersroute en de huidige projectversie. Maak een korte testlijst met per taak het startpunt, handelingen en verwacht resultaat. Neem fouten en mobiel gebruik mee. Zet geschikte testgegevens klaar zonder echte persoonsgegevens. Bewaar de lijst in 05-tests/bevindingen.md en geef mij de volgorde om zelf te testen.",
    "result": "Een testlijst die je zelf kunt uitvoeren."
  },
  {
    "id": 15,
    "title": "Herstel de fout die ik heb gevonden",
    "role": "bouwbegeleider",
    "text": "Herhaal mijn handelingen en vergelijk het resultaat met mijn verwachting. Onderzoek de oorzaak voordat je iets wijzigt. Herstel de afgesproken fout en herhaal dezelfde test, ook waar de wijziging andere onderdelen kan raken. Werk 05-tests/bevindingen.md bij met oorzaak, herstel, testuitkomst en open punten. Geef aan wat ik zelf opnieuw moet proberen.",
    "result": "Een gerichte reparatie met hercontrole en bijgewerkte foutenlijst."
  },
  {
    "id": 16,
    "title": "Maak de pagina’s duidelijker",
    "role": "bouwbegeleider",
    "text": "Bekijk de huidige schermen voor een computer en telefoon. Zoek onduidelijke knoppen, kleine tekst, overbodige herhaling en verwarrende volgorde. Geef per probleem een concrete aanpassing en voer de afgesproken wijzigingen uit. Behoud de functies en stijl. Test de belangrijkste route opnieuw.",
    "result": "Duidelijkere schermen met behoud van de werking."
  },
  {
    "id": 17,
    "title": "Controleer de hele website vóór publicatie",
    "role": "bouwbegeleider",
    "text": "Controleer de actuele versie aan de hand van bezoekersroutes, teksten, ontwerp en bouwplan. Test normale handelingen, fouten, toegangsrechten en echte verwerking van gegevens. Controleer mobiel, toetsenbord en de afgesproken SEO-basis. Test Analytics alleen als het is ingericht, ook bij weigeren en mislukte aanvragen. Noteer per controle: geslaagd, mislukt of niet getest, met bewijs. Los afgesproken blokkerende fouten op en test opnieuw. Lever 05-tests/releasecheck.md met de versie, open punten en wat ik moet beoordelen voordat deze live mag.",
    "result": "Een releasecheck met echte testuitkomsten en nog op te lossen fouten."
  },
  {
    "id": 18,
    "title": "Maak een herhaalbare testopdracht",
    "role": "bouwbegeleider",
    "text": "Gebruik de bestaande testomgeving. Maak voor de afgesproken controles een eenvoudige teststarter, op Windows bijvoorbeeld run_local_test.bat. Controleer vereisten en testgegevens. Laat fouten duidelijk zien en geef bij een mislukte test ook een foutcode terug. Bewaar rapporten in 05-tests. Leg uit hoe ik de tests start en wat ze wel en niet controleren.",
    "result": "Een teststarter, uitleg en testresultaten in 05-tests."
  },
  {
    "id": 19,
    "title": "Maak de bestanden geschikt voor publicatie",
    "role": "bouwbegeleider",
    "text": "Controleer welke bestanden bij de website en in GitHub horen. Maak kleinere webversies van te grote afbeeldingen en behoud de originelen. Test kwaliteit en links. Houd geheime waarden, lokale logs en privébronnen buiten de publicatie. Controleer ook wat al in de versiegeschiedenis staat. Geef een lijst van aangepaste bestanden en open punten.",
    "result": "Geschikte webbestanden en een gecontroleerde publicatielijst."
  },
  {
    "id": 20,
    "title": "Zet de goedgekeurde versie op Railway",
    "role": "bouwbegeleider",
    "text": "Lees de releasecheck en controleer of de juiste versie op de afgesproken GitHub-branch staat. Controleer de bestaande Railway-inrichting met actuele officiële documentatie: projectmap, bouwen, starten, instellingen en opslag waar nodig. Leg precies uit wat ik zelf moet invullen en waar. Publiceer binnen de afgesproken toegang en controleer het echte live-adres, de bezoekersroute en ontvangst van testgegevens. Bewaar adres, versie, uitkomsten en uitleg om terug te zetten in 06-overdracht/release.md. Meld wat niet is gecontroleerd.",
    "result": "Een geteste liveversie en release.md met adres en herstelafspraak."
  },
  {
    "id": 21,
    "title": "Maak een uitnodiging voor je eerste bezoekers",
    "role": "projectbegeleider",
    "text": "Gebruik mijn aanbod en de functies die nu echt live werken. Maak een kort plan met doelgroep, geschikt kanaal, uitnodiging, gewenste handeling en feedbackvraag. Geef een conceptbericht met het echte webadres als ik dat heb aangeleverd. Verzin geen resultaten. Ik kies de ontvangers en verstuur het bericht zelf. Lever 02-plan/introductieplan.md.",
    "result": "Een kort introductieplan en een bericht dat je zelf kunt versturen."
  },
  {
    "id": 22,
    "title": "Controleer de eerste ervaring",
    "role": "projectbegeleider",
    "text": "Vergelijk de belofte uit mijn uitnodiging en website met de route die een nieuwe bezoeker doorloopt. Benoem ontbrekende uitleg, onnodige stappen en beloften die niet worden waargemaakt. Geef concrete verbeteringen. Gebruik alleen aangeleverde inhoud of werkelijk bekeken pagina’s en meld wat je niet kon controleren. Lever 05-tests/leersignalen.md.",
    "result": "Een lijst met verschillen tussen belofte en werkelijke eerste ervaring."
  },
  {
    "id": 23,
    "title": "Bewaar je werk aan het einde van de sessie",
    "role": "bouwbegeleider",
    "text": "Werk 06-overdracht/overdracht.md en START-HIER.md bij. Noteer gewijzigde bestanden, huidige versie, uitgevoerde controles, open fouten en één volgende taak. Werk de geraakte handleiding bij. Bewaar de gecontroleerde code volgens de afgesproken GitHub- en publicatieroute en controleer de versielink. Houd bij wat lokaal, op GitHub en live staat. Benoem welke bronnen of gegevens apart geback-upt moeten worden.",
    "result": "Een bijgewerkte overdracht met opgeslagen werk en een volgende taak."
  },
  {
    "id": 24,
    "title": "Lees het project en hervat je werk",
    "role": "bouwbegeleider",
    "text": "Lees eerst START-HIER.md, 06-overdracht/overdracht.md, open fouten en de gekozen documenten. Vergelijk die met de huidige code en bestanden. Geef een korte stand van zaken: gereed, open, verschillen en volgende taak. Als er geen nagekeken plan voor die taak is, leg het eerst voor. Voer daarna alleen de opgedragen wijziging uit en controleer de uitkomst. Werk de overdracht bij.",
    "result": "De actuele stand van het project en een gecontroleerde vervolgstap."
  },
  {
    "id": 25,
    "title": "Leg de gebouwde pagina’s en teksten vast",
    "role": "bouwbegeleider",
    "text": "Lees de bestaande documentatie en de huidige site. Leg alle pagina’s en zichtbare teksten vast, ook menu’s, formulieren, fouten en bevestigingen. Neem aanwezige talen en dynamische tekstvoorbeelden mee zonder privégegevens. Verwijs naar de echte pagina en het bronbestand. Benoem wat ontworpen, gebouwd of getest is en welke inhoud je niet kon lezen. Werk 02-plan/schermen.md en 02-plan/teksten.md bij.",
    "result": "Een actuele paginalijst en volledige tekstinventaris."
  },
  {
    "id": 26,
    "title": "Leg uit hoe de website technisch werkt",
    "role": "bouwbegeleider",
    "text": "Lees bestaande code, instellingen en documentatie. Beschrijf in gewone taal welke onderdelen bestaan, hoe ze samenwerken, waar gegevens worden verwerkt en wie toegang heeft. Neem starten, publiceren, kosten, fouten en herstel mee voor zover van toepassing. Beschrijf de afgesproken SEO- en meetinrichting. Voeg een leesbaar schema toe waar dat helpt. Verwijs naar bestanden en maak onderscheid tussen plannen en echte werking. Werk 04-bouw/architectuur.md bij; wijzig met deze opdracht geen productcode.",
    "result": "Een technische uitleg die aansluit op de huidige bestanden."
  },
  {
    "id": 27,
    "title": "Schrijf de gebruikershandleiding",
    "role": "bouwbegeleider",
    "text": "Bekijk de actuele website en de bestaande uitleg. Beschrijf voor bezoeker en beheerder de taken stap voor stap: waar openen, wat invullen, welke knop, welk resultaat en wat te doen bij een fout. Verbind uitleg aan echte schermen. Voeg eenvoudige schema’s toe als dat helpt en controleer of ze leesbaar zijn. Noteer wat je niet kon testen. Lever 06-overdracht/gebruikershandleiding.md.",
    "result": "Een handleiding waarmee bezoeker en beheerder de website kunnen gebruiken."
  },
  {
    "id": 28,
    "title": "Controleer of de handleiding nog klopt",
    "role": "bouwbegeleider",
    "text": "Vergelijk de huidige website met de paginalijst, teksten, technische uitleg, handleiding en schema’s. Controleer beide richtingen: mist er uitleg en beschrijft de uitleg iets dat niet meer bestaat? Werk fouten bij met verwijzing naar de huidige versie. Benoem ontoegankelijke of niet gecontroleerde onderdelen. Bewaar de uitkomst in 05-tests/documentatiecheck.md.",
    "result": "Bijgewerkte documentatie en een overzicht van de uitgevoerde vergelijking."
  },
  {
    "id": 29,
    "title": "Beperk de website tot de eerste versie",
    "role": "bouwbegeleider",
    "text": "Vergelijk het aanbod met de bestaande website. Deel functies in: nu nodig, later of nog te beslissen. Leg uit wat van elkaar afhankelijk is. Stel een klein wijzigingsplan voor. Voer alleen de afgesproken aanpassingen uit en behoud gegevens, toegang en foutafhandeling. Test daarna de gekozen bezoekersroutes.",
    "result": "Een kleinere eerste versie met gecontroleerde werking."
  },
  {
    "id": 30,
    "title": "Verbeter het gebruik op een telefoon",
    "role": "bouwbegeleider",
    "text": "Bekijk de huidige mobiele route. Controleer volgorde, tekst, knoppen, menu, invulvelden, schermtoetsenbord, teruggaan en fouten. Pas de afgesproken problemen aan binnen dezelfde stijl. Behoud ingevulde gegevens waar nodig. Test mobiel en computer en benoem of je een echt toestel of een nagebootst telefoonformaat gebruikte.",
    "result": "Verbeterde mobiele bediening met testuitkomsten."
  },
  {
    "id": 31,
    "title": "Controleer de talen van je website",
    "role": "bouwbegeleider",
    "text": "Controleer de opgegeven talen op alle pagina’s, knoppen, formulieren en meldingen. Herstel ontbrekende of onjuiste vertalingen. Controleer taalwisselen, teruggaan en de standaardtaal. Voeg geen nieuwe talen toe. Test de belangrijkste route in elke afgesproken taal.",
    "result": "Een consistente website in de afgesproken talen."
  },
  {
    "id": 32,
    "title": "Controleer waar gegevens naartoe gaan",
    "role": "bouwbegeleider",
    "text": "Volg de genoemde gegevens vanaf invoer tot verwerking, opslag en weergave. Vergelijk wat verwacht wordt met wat echt gebeurt. Controleer lege waarden, fouten, rechten en dubbel verzenden. Herstel het afgesproken probleem en test de hele route opnieuw. Gebruik testgegevens.",
    "result": "Een gecontroleerde gegevensroute en gerichte reparaties."
  },
  {
    "id": 33,
    "title": "Onderzoek traagheid en kosten",
    "role": "bouwbegeleider",
    "text": "Onderzoek de genoemde trage handeling. Meet eerst in de bedoelde omgeving en leg omstandigheden vast. Zoek de oorzaak en stel een gerichte verbetering voor. Voer de afgesproken wijziging uit en vergelijk daarna dezelfde handeling. Gebruik voor kosten echte instellingen, facturen of meetgegevens; benoem wat onbekend is.",
    "result": "Een meting vóór en na herstel en een onderbouwde kostenuitleg."
  },
  {
    "id": 34,
    "title": "Controleer de beloften op je website",
    "role": "bouwbegeleider",
    "text": "Vergelijk de meegegeven beloften met de huidige werking en beschikbare bronnen. Noteer per belofte wat die onderbouwt, wat ontbreekt en hoe de tekst eerlijker kan. Verzin geen bewijs, klanten, keurmerken of resultaten. Pas alleen de afgesproken teksten aan.",
    "result": "Controleerbare beloften en concrete tekstcorrecties."
  },
  {
    "id": 35,
    "title": "Bereid een overstap naar andere software voor",
    "role": "bouwbegeleider",
    "text": "Onderzoek de bestaande website en de gewenste nieuwe oplossing. Leg vast welke inhoud, functies, gegevens, webadressen en beheerhandelingen moeten blijven werken. Vergelijk met actuele officiële informatie van de nieuwe oplossing. Beschrijf beperkingen, kosten, testaanpak en terugzetten. Voer de overstap pas uit na een concrete opdracht.",
    "result": "Een overstapplan met behoud van noodzakelijke werking."
  },
  {
    "id": 36,
    "title": "Controleer de AI-functie in je eigen product",
    "role": "bouwbegeleider",
    "text": "Controleer alleen de genoemde AI-functie. Leg invoer, verwacht resultaat, bronnen en toegangsgrenzen vast. Test normale invoer, ontbrekende informatie, onjuiste antwoorden, storingen en misleidende instructies in bronmateriaal. Gebruik testgevallen en registreer echte resultaten, tijd en kosten waar meetbaar. Herstel afgesproken fouten en test opnieuw.",
    "result": "Een testoverzicht voor de AI-functie met fouten en herstel."
  },
  {
    "id": 37,
    "title": "Voer één wijziging overal door",
    "role": "bouwbegeleider",
    "text": "Zoek waar de genoemde wijziging van toepassing is in pagina’s, tekst, code, berichten, bestanden en uitleg. Maak een concrete lijst en pas de bedoelde onderdelen aan. Behoud historische bronnen waar die ongewijzigd moeten blijven. Controleer daarna de verwijzingen en gebruikersroutes.",
    "result": "De wijziging is op de bedoelde plekken doorgevoerd en gecontroleerd."
  },
  {
    "id": 38,
    "title": "Controleer vindbaarheid en bezoekersmeting",
    "role": "bouwbegeleider",
    "text": "Lees het SEO-plan en controleer de echte website: bereikbare pagina’s, inhoud, titels, sitemap en instellingen voor zoekmachines. Onderzoek de aanwezige bezoekersmeting, dubbele gebeurtenissen en toestemmingsgedrag. Gebruik werkelijke gegevens en meld ontbrekende toegang. Stel één gerichte verbetering voor en voer alleen de afgesproken wijzigingen uit.",
    "result": "Een SEO- en meetcontrole met concrete verbeterpunten."
  },
  {
    "id": 39,
    "title": "Ruim dubbele code en uitleg op",
    "role": "bouwbegeleider",
    "text": "Onderzoek bestaande code en documenten op overlap en verouderde onderdelen. Toon per voorstel waarom iets overbodig is en wat ervan afhankelijk is. Werk in kleine wijzigingen, behoud andermans werk en verwijder geen gegevens zonder concrete opdracht. Voer de afgesproken opruiming uit en controleer dat de gebruikersroutes blijven werken.",
    "result": "Een overzichtelijker project met behoud van werking en informatie."
  },
  {
    "id": 40,
    "title": "Maak de afgesproken softwarekoppeling",
    "role": "bouwbegeleider",
    "text": "Onderzoek de genoemde systemen en de bestaande koppeling. Beschrijf welke gegevens heen en terug gaan, wie toegang heeft en wat gebeurt bij fouten of dubbel verzenden. Hergebruik bestaande onderdelen. Bouw alleen de afgesproken verbinding, test met testgegevens en documenteer de instellingen zonder geheime sleutels. Meld ontbrekende toegang en gesimuleerde onderdelen.",
    "result": "Een gecontroleerde koppeling met uitleg voor gebruik en beheer."
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
