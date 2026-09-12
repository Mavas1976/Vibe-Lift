// Versioned output contracts; shared by the composer, lessons and downloads.
export const promptContractVersion = '2.1.0';
const c=(file,role,inputs,sections,check)=>({file,title:file[0].toUpperCase()+file.slice(1,-3).replaceAll('-',' '),role,inputs,sections,check,additionalDocuments:[],scopedDocumentUpdates:false,artifacts:[]});
export const promptContracts = {
  1:c('projectbrief.md','productbegeleider',[],[
    ['Probleem en doelgroep','Beschrijf de huidige situatie, gebruiker en concrete behoefte op basis van de invoer.'],
    ['Eerste versie','Benoem de hoofdactie, wat binnen de scope valt en wat later komt.'],
    ['Acceptatie','Formuleer waarneembare voorwaarden voor een geslaagde eerste versie; verzin geen deadline.']
  ],'De hoofdactie en acceptatievoorwaarden sluiten aan op hetzelfde probleem; houd de brief binnen ongeveer één pagina.'),
  2:c('onderzoek.md','onderzoeker',['projectbrief.md'],[
    ['Onderzoeksvraag en methode','Noteer vragen, regio, gebruikte zoekopdrachten en beperkingen.'],
    ['Bewijs en alternatieven','Vergelijk oplossingen op dezelfde criteria; koppel conclusies aan bronlinks, brondata en raadpleegdatum. Neem tegenbewijs op.'],
    ['Praktijkonderzoek','Scheid aangeleverde reacties van webonderzoek; maak neutrale interviewvragen en benoem gevolgen voor het idee.']
  ],'Elke belangrijke conclusie is herleidbaar; geen verzonnen interviews, marktgetallen of zoekvolumes.'),
  3:c('propositie.md','propositie- en tekstschrijver',['projectbrief.md','onderzoek.md'],[
    ['Aanbod','Schrijf voor wie, welk probleem, welke uitkomst en waarom dit aanbod passend is.'],
    ['Scope en belofte','Maak inclusies, uitsluitingen en de onderbouwing van beloften expliciet.'],
    ['Keuze voor de eerste versie','Geef één bruikbare aanbodtekst en open beslissingen over bijvoorbeeld prijs.']
  ],'De belofte past binnen de gekozen scope en heeft bewijs of een zichtbare onzekerheidsmarkering.'),
  4:c('praktijktoets.md','gebruikersonderzoeker',['propositie.md','onderzoek.md'],[
    ['Te toetsen aanname','Kies één risicovolle aanname en formuleer wat haar zou weerleggen.'],
    ['Uitvoering en beslisregel','Beschrijf deelnemers, materiaal, neutrale vragen en vooraf de regel voor doorgaan of aanpassen.'],
    ['Reactieblad','Maak lege invulregels voor werkelijke waarnemingen; verwerk alleen al aangeleverde reacties als resultaat.']
  ],'Een geplande toets is nergens als uitgevoerd gepresenteerd; de beslisregel staat vast vóór de resultaten.'),
  5:c('flows.md','UX-ontwerper',['propositie.md','projectbrief.md'],[
    ['Hoofdroute','Geef per stap actor, startpunt, actie, invoer, verwerking en zichtbaar resultaat.'],
    ['Afwijkingen','Werk teruggaan, validatiefout, storing en ontbrekende toegang uit voor zover relevant.'],
    ['Overdracht','Toon een pijlschema met tekstuitleg, ontvanger van gegevens en de benodigde schermen.']
  ],'De route eindigt bij het echte gebruikersresultaat, inclusief ontvangst of verwerking achter de schermen.'),
  6:c('schermen.md','UX- en contentschrijver',['propositie.md','flows.md'],[
    ['Schermenlijst','Geef elk scherm een stabiel ID, doel, instap, hoofdactie en vervolg.'],
    ['Volledige schermteksten','Werk per ID koppen, inhoud, veldlabels, knoppen, laden, leegte, fout en succes uit, ook op mobiel.'],
    ['Openbare pagina’s en zoekvraag','Noteer per openbare pagina zoekvraag, URL, titel, beschrijving en interne links; markeer besloten schermen als niet bedoeld voor indexering.']
  ],'Elk routescherm heeft concrete tekst en toestanden; dit ene bestand vormt de inhoudelijke overdracht aan Stitch.'),
  7:c('ontwerp.md','interfaceontwerper',['schermen.md','flows.md'],[
    ['Schermen en toestanden','Koppel ontworpen desktop- en mobiele schermen aan de scherm-ID’s, inclusief laden, fout en succes.'],
    ['Ontwerpafspraken','Leg kleuren, typografie, afstanden, componenten en mobiel gedrag concreet vast.'],
    ['Overdracht aan de bouwer','Link naar werkelijk gemaakte exports in 03-ontwerp/ en beschrijf interacties, ontbrekende ontwerpen en beperkingen.']
  ],'Ontwerp en tekst volgen dezelfde scherm-ID’s; een visueel ontwerp of export geldt niet als geteste website.'),
  8:c('ontwerp.md','interfaceontwerper',['ontwerp.md','schermen.md'],[
    ['Schermen en toestanden','Behoud de scherm-ID’s en niet geraakte schermen; koppel elk feedbackpunt aan de aanpassing op desktop en mobiel.'],
    ['Ontwerpafspraken','Werk alleen geraakte afspraken bij; behoud geldige bestaande ontwerpbeslissingen.'],
    ['Overdracht aan de bouwer','Vermeld welke exports gelden, hun paden, wijzigingen en resterende punten; behoud de bruikbare interactiebeschrijvingen.']
  ],'Alle feedback is verwerkt of beargumenteerd open; inhoud en niet geraakte schermen zijn behouden.'),
  9:c('bouwplan.md','softwarearchitect',['projectbrief.md','propositie.md','flows.md','schermen.md','ontwerp.md','seo-plan.md'],[
    ['Gelezen project en besluiten','Registreer bestaande techniek, gekozen documenten, conflicten en herbruikbare onderdelen.'],
    ['Technische aanpak','Beschrijf componenten, gegevensstroom, rechten, codeplek, startwijze, diensten, kostenbasis, SEO en GitHub/publicatieafspraken.'],
    ['Kleine bouwstappen','Geef per stap scope, afhankelijkheden, acceptatiecontrole en herstelmogelijkheid; begin met één complete route.']
  ],'Het plan is uitvoerbaar vanuit de beschikbare bestanden; er is nog geen code gebouwd of software geïnstalleerd.'),
  10:c('routecontrole.md','ontwikkelaar en tester',['flows.md','bouwplan.md'],[
    ['Routekaart','Noteer echte instappunten en overgangen tussen website, demo en inloggen.'],
    ['Problemen en herstel','Koppel kapotte links en toegangsproblemen aan gerichte wijzigingen.'],
    ['Hercontrole','Leg per overgang verwacht resultaat, werkelijk resultaat en bewijs vast.']
  ],'Controleer zowel toegestane als geweigerde toegang; ontbrekende demo of login is geen opdracht om die te bouwen.'),
  11:c('bouwcontrole.md','ontwikkelaar',['bouwplan.md','schermen.md','ontwerp.md','flows.md','seo-plan.md'],[
    ['Gebouwde route','Noem de uitgevoerde bouwstap, gewijzigde bestanden en aangesloten onderdelen.'],
    ['Controles','Test succes, ongeldige invoer en mislukte verwerking met verwachte en werkelijke uitkomst.'],
    ['Lokaal gebruiken','Geef het echte lokale adres, startwijze en nog gesimuleerde of ontbrekende onderdelen.']
  ],'De hoofdactie komt aantoonbaar op de bedoelde plek aan; zonder uitvoering geen claim dat de route werkt.'),
  12:c('startinstructie.md','ontwikkelaar',['bouwplan.md'],[
    ['Vereisten en startbestand','Beschrijf de bestaande startwijze en het gemaakte of verbeterde START_PROJECT.bat, of passend OS-alternatief.'],
    ['Starten en stoppen','Geef eenvoudige handelingen, het werkelijk gemelde adres en uitleg bij fouten.'],
    ['Startcontrole','Noteer bewijs van starten, stoppen, opnieuw starten en afhandeling van een bezette poort.']
  ],'De starter stopt geen andere processen en bevat geen geheimen; een niet beschikbare OS-test blijft NIET GETEST.'),
  13:c('lokale-sessie.md','ontwikkelaar',['startinstructie.md'],[
    ['Startpoging','Noteer projectmap, gebruikte bestaande startwijze en uitkomst.'],
    ['Adres of fout','Geef het echte adres, of de concrete foutmelding met oorzaak voor zover vastgesteld.'],
    ['Volgende handeling','Beschrijf wat de gebruiker kan bekijken en hoe de eigen server wordt gestopt.']
  ],'Een genoemd adres is alleen als bereikbaar aangeduid na een echte controle; start geen tweede server als een passende al draait.'),
  14:c('testplan.md','testontwerper',['flows.md','bouwcontrole.md'],[
    ['Testcontext','Noteer versie, omgeving, route en veilige testgegevens.'],
    ['Testgevallen','Geef per test ID, beginconditie, handelingen en verwacht resultaat, inclusief foutpaden en mobiel.'],
    ['Invulblad','Laat werkelijke uitkomst en bewijs leeg met status NOG UIT TE VOEREN; verwijs voor echte bevindingen naar bevindingen.md.']
  ],'De gebruiker kan iedere test zelfstandig uitvoeren; voorbereiding overschrijft geen bestaande bevindingen.'),
  15:c('bevindingen.md','ontwikkelaar en foutonderzoeker',['testplan.md','bevindingen.md'],[
    ['Reproductie','Noteer handelingen, verwacht en werkelijk gedrag, versie en bewijs.'],
    ['Oorzaak en reparatie','Leg vast wat de oorzaak ondersteunt en welke gerichte wijziging is gemaakt.'],
    ['Hertest','Herhaal de oorspronkelijke test en relevante regressies; behoud eerdere bevindingen en werk hun status bij.']
  ],'Niet reproduceerbaar is geen opgelost probleem; de reparatie heeft een expliciete herteststatus.'),
  16:c('ux-controle.md','UX-ontwikkelaar',['schermen.md','ontwerp.md'],[
    ['Waargenomen problemen','Koppel onduidelijke tekst, knoppen, volgorde en herhaling aan concrete schermen.'],
    ['Aanpassingen','Beschrijf de uitgevoerde verbeteringen en behoud van stijl en functies.'],
    ['Controle','Leg leesbaarheid, toetsenbordgebruik en de hoofdroute op mobiel en desktop vast.']
  ],'Elke wijziging lost een beschreven gebruikersprobleem op zonder nieuwe functies toe te voegen.'),
  17:c('releasecheck.md','releasetester',['bouwplan.md','flows.md','testplan.md','bevindingen.md'],[
    ['Versie en scope','Identificeer exact welke versie, omgeving en routes zijn gecontroleerd.'],
    ['Testbewijs','Geef per controle verwacht/werkelijk resultaat, status en bewijs voor werking, fouten, rechten, mobiel, toetsenbord, SEO en afgesproken meting.'],
    ['Releaseadvies','Maak blockers, niet uitgevoerde kritieke tests, herstel en hertests zichtbaar; geef GO of NO-GO met reden en benodigde gebruikersbeslissing.']
  ],'Geen GO zolang kritieke controles falen of niet zijn uitgevoerd; een testadvies is geen toestemming om te publiceren.'),
  18:c('testinstructie.md','testontwikkelaar',['testplan.md','bouwplan.md'],[
    ['Teststarter','Leg bestaande testomgeving, vereisten, testgegevens en gemaakte starter vast.'],
    ['Uitvoering','Beschrijf starten, rapportlocaties in 05-tests/ en betekenis van foutcodes.'],
    ['Dekking en uitkomsten','Toon werkelijk uitgevoerde tests en benoem wat de starter niet controleert.']
  ],'Controleer dat een falende test een foutcode oplevert en niet als geslaagde run verschijnt.'),
  19:c('publicatiebestanden.md','releaseontwikkelaar',['releasecheck.md'],[
    ['Bestandsinventaris','Maak onderscheid tussen publiceerbare assets, private bronnen en lokale bestanden.'],
    ['Optimalisaties','Leg gewijzigde webafbeeldingen, behouden originelen en kwaliteit/linkcontrole vast.'],
    ['Publicatiecontrole','Noteer controle op gevoelige bestanden en geschiedenis; toon alleen gemaskeerde bevindingen en herstelacties.']
  ],'Geen geheimen in het rapport; herschrijf geen geschiedenis en verwijder geen originele bronnen met deze opdracht.'),
  20:c('release.md','deploymentbegeleider',['releasecheck.md','github-versie.md','bouwplan.md'],[
    ['Releasevoorwaarden','Controleer versie, branch, vrijgave en afgesproken toegang.'],
    ['Instellingen en uitvoering','Leg gebruikte actuele officiële Railway-bronnen, projectinstellingen en uitgevoerde versus nog handmatige stappen vast.'],
    ['Livecontrole en herstel','Geef echt adres, versie, rooktests en terugzetprocedure; onderscheid codeherstel van dataherstel.']
  ],'Publiceer alleen de vrijgegeven versie binnen de afgesproken toegang; zonder livecontrole blijft de status ongeverifieerd.'),
  21:c('introductieplan.md','contentschrijver',['propositie.md','release.md'],[
    ['Doelgroep en kanaal','Kies een passend kanaal en gewenste eerste handeling op basis van het aanbod.'],
    ['Conceptuitnodiging','Schrijf een kort bericht met alleen live werkende beloften en het aangeleverde adres.'],
    ['Feedback en opvolging','Geef een neutrale feedbackvraag en een manier om echte reacties vast te leggen.']
  ],'Het bericht blijft een concept dat de gebruiker zelf verstuurt; geen verzonnen resultaatclaims.'),
  22:c('leersignalen.md','gebruikersonderzoeker',['introductieplan.md','flows.md','release.md'],[
    ['Belofte en ervaring','Vergelijk per belofte het daadwerkelijke of aangeleverde verloop van de eerste ervaring.'],
    ['Frictie en bewijs','Koppel onduidelijke stappen aan pagina’s, waarnemingen of duidelijk gelabelde gebruikersreacties.'],
    ['Verbeterkeuze','Prioriteer concrete verbeteringen en beschrijf welke echte gebruikerscontrole volgt.']
  ],'Een inhoudsreview wordt niet gepresenteerd als uitgevoerd gebruikersonderzoek.'),
  23:c('overdracht.md','projectbeheerder',['START-HIER.md','bevindingen.md','release.md'],[
    ['Huidige stand','Noem gewijzigde bestanden en onderscheid lokale, GitHub- en liveversie.'],
    ['Controles en open werk','Registreer werkelijk uitgevoerde tests, fouten en apart te back-uppen bronnen.'],
    ['Volgende sessie','Geef één concrete volgende taak, benodigde input en acceptatievoorwaarde.']
  ],'Claim geen back-up, commit of publicatie zonder bewijs; pas alleen een reeds vastgelegde opslag- en publicatieafspraak toe.'),
  24:c('sessiestart.md','projectbeheerder',['overdracht.md','START-HIER.md','bevindingen.md'],[
    ['Vergelijking met huidige project','Vergelijk vorige overdracht en gekozen documenten met werkelijk aangetroffen bestanden.'],
    ['Hervatte taak','Beschrijf de opgedragen vervolgstap en eventuele noodzakelijke beslissing.'],
    ['Uitkomst','Registreer uitgevoerde wijziging, controles en volgende actie.']
  ],'Een oud AI-antwoord geldt niet als bewijs dat code nu werkt; gebruik de actuele projectversie.'),
  25:c('schermen.md','documentatiespecialist',['schermen.md'],[
    ['Schermenlijst','Behoud scherm-ID’s en koppel actuele pagina’s aan route, status en echte bronbestanden; onderscheid ontworpen, gebouwd en getest.'],
    ['Volledige schermteksten','Inventariseer menu, formulieren, dynamische tekst, aanwezige talen, fouten en bevestigingen zonder privédata; registreer verschillen met het ontwerp.'],
    ['Openbare pagina’s en zoekvraag','Werk de aanwezige openbare metadata en interne links bij; behoud geldige zoekvraagkeuzes, markeer besloten schermen en vermeld onbereikbare inhoud.']
  ],'Het resultaat vervangt de gekozen schermeninventaris zonder ongecontroleerde onderdelen als compleet te presenteren.'),
  26:c('architectuur.md','softwarearchitect',['bouwplan.md'],[
    ['Onderdelen en gegevensstroom','Leg echte componenten, opslag, koppelingen en toegangsgrenzen uit met bestandsverwijzingen.'],
    ['Bediening en beheer','Beschrijf starten, publiceren, SEO, meting, kostenbasis en foutafhandeling voor zover aanwezig.'],
    ['Schema en herstel','Geef een leesbaar schema met tekstuitleg en relevante herstelprocedures.']
  ],'Scheid plannen van bestaande werking en wijzig geen productcode.'),
  27:c('gebruikershandleiding.md','technisch schrijver',['schermen.md','release.md','startinstructie.md'],[
    ['Gebruikers en toegang','Beschrijf bedoelde lezers, vereisten en echte instappunten.'],
    ['Taken','Geef per taak handelingen, schermen, invoer, knoppen en zichtbaar resultaat.'],
    ['Problemen en hulp','Beschrijf foutoplossingen en wat niet kon worden getest.']
  ],'Elke beschreven functie bestaat in de gecontroleerde versie; de uitleg past bij de benoemde lezers.'),
  28:c('documentatiecheck.md','documentatieauditor',['schermen.md','architectuur.md','gebruikershandleiding.md'],[
    ['Vergelijkingsscope','Leg codeversie en gecontroleerde documenten vast.'],
    ['Afwijkingen en correcties','Controleer ontbrekende uitleg én uitleg over verdwenen functies; noteer bronlocaties en wijzigingen.'],
    ['Hercontrole','Noteer actuele koppelingen, leesbare schema’s en niet gecontroleerde onderdelen.']
  ],'Elke correctie is terug te voeren op de actuele website; nieuwe documentatie wordt geen bron voor haar eigen bevestiging.'),
  29:c('scope-eerste-versie.md','productanalist',['propositie.md','projectbrief.md'],[
    ['Functie-indeling','Deel bestaande of geplande functies in nu nodig, later en te beslissen.'],
    ['Afhankelijkheden','Leg gevolgen voor gebruikersroute, gegevens en toegang vast.'],
    ['Besluit en vervolg','Lever een kleine scopekeuze; registreer alleen afzonderlijk opgedragen codeaanpassingen en hun tests.']
  ],'Bij stap 3 blijft dit een scopebesluit; ruim bestaande code alleen op als die concrete wijziging is opgedragen.'),
  30:c('mobiele-controle.md','UX-tester en ontwikkelaar',['flows.md','ontwerp.md'],[
    ['Mobiele bevindingen','Controleer schermvolgorde, menu, knoppen, invoer, toetsenbord, teruggaan en fouten.'],
    ['Herstel','Leg gerichte aanpassingen en behoud van ingevulde data vast.'],
    ['Vergelijkende tests','Registreer mobiel/desktop en echt toestel versus nagebootst formaat.']
  ],'Claim alleen de geteste apparaten en formaten; de hoofdactie blijft bruikbaar met schermtoetsenbord.'),
  31:c('talencontrole.md','lokalisatietester',['schermen.md'],[
    ['Talen en dekking','Leg afgesproken talen, standaardtaal en onderzochte schermen vast.'],
    ['Vertaalherstel','Registreer ontbrekende teksten, correcties en relevante formaten.'],
    ['Routecontrole per taal','Test taalwisselen, teruggaan en belangrijkste route in elke afgesproken taal.']
  ],'Voeg geen talen toe en presenteer niet gecontroleerde vertalingen niet als goedgekeurd.'),
  32:c('gegevenscontrole.md','ontwikkelaar en datatester',['flows.md','bouwplan.md'],[
    ['Gegevensroute','Volg velden van invoer via verwerking en opslag naar weergave.'],
    ['Oorzaak en herstel','Vergelijk verwacht en werkelijk gedrag en noteer de gerichte reparatie.'],
    ['Randgevallen','Test lege waarden, onjuiste rechten, fouten en dubbel verzenden met veilige testdata.']
  ],'Een bevestigingsscherm alleen bewijst geen opslag; controleer ook de ontvangende kant.'),
  33:c('prestatieonderzoek.md','performanceonderzoeker',['bouwplan.md'],[
    ['Nulmeting','Noteer handeling, omgeving, meetmethode en omstandigheden.'],
    ['Oorzaak en verbetering','Onderbouw de vermoedelijke oorzaak en registreer de gerichte aanpassing.'],
    ['Nameting en kosten','Vergelijk dezelfde handeling onder vergelijkbare omstandigheden; geef kostenbron en rekenbasis.']
  ],'Geen winstclaim zonder vergelijkbare metingen; ontbrekende facturen of meetgegevens blijven onbekend.'),
  34:c('claimcontrole.md','inhoudsauditor',['propositie.md','release.md'],[
    ['Claims en bewijs','Koppel elke belofte aan bron, werkelijke functie en beoordeelde versie.'],
    ['Oordeel','Geef onderbouwd, deels onderbouwd of onvoldoende bewijs met reden.'],
    ['Tekstcorrecties','Geef eerlijke vervangende tekst en registreer alleen opgedragen wijzigingen.']
  ],'Marketingtekst bewijst haar eigen claim niet; ontbrekend bewijs is zichtbaar.'),
  35:c('overstapplan.md','migratiearchitect',['architectuur.md','schermen.md'],[
    ['Te behouden werking','Inventariseer inhoud, functies, data, URL’s en beheerhandelingen.'],
    ['Vergelijking en gaten','Vergelijk de nieuwe oplossing met actuele officiële bronnen, beperkingen en kostenbasis.'],
    ['Migratieaanpak','Plan volgorde, back-up, proefoverzetting, acceptatietests en terugzetten.']
  ],'Deze opdracht plant de overstap; zij voert geen migratie, datawijziging of publicatie uit.'),
  36:c('ai-functiecontrole.md','AI-testontwerper',['bouwplan.md'],[
    ['Contract van de functie','Leg invoer, verwachte output, bronnen en toegangsgrenzen vast.'],
    ['Testgevallen en resultaten','Test normaal gebruik, lege input, foutieve antwoorden, storing en instructies in bronmateriaal; registreer feitelijke uitkomsten.'],
    ['Herstel en hertest','Beschrijf gerichte correcties, nieuwe testuitkomst en meetbare tijd/kosten.']
  ],'Synthetische testdata is herkenbaar en komt niet als echte projectfeiten in het verslag.'),
  37:c('wijzigingsverslag.md','ontwikkelaar',['START-HIER.md'],[
    ['Wijzigingsscope','Inventariseer toepasselijke pagina’s, berichten, code en documentatie.'],
    ['Doorgevoerde wijzigingen','Koppel elke wijziging aan een bestand en behoud historische bronnen.'],
    ['Consistentiecontrole','Controleer oude/nieuwe verwijzingen en getroffen gebruikersroutes.']
  ],'Zoekresultaten alleen zijn geen bewijs dat alle bedoelde plekken correct zijn aangepast; controleer de concrete scope.'),
  38:c('seo-meetcontrole.md','SEO- en meetanalist',['seo-plan.md','release.md'],[
    ['Vindbaarheid','Controleer bereikbaarheid, inhoud, metadata, sitemap en indexeringsinstellingen.'],
    ['Bezoekersmeting','Onderzoek echte configuratie, dubbele events en toestemmingsgedrag.'],
    ['Verbetering','Kies een onderbouwd aandachtspunt; noteer eventuele opgedragen wijziging en controle.']
  ],'Technische bereikbaarheid, indexering en behaalde conversie blijven verschillende uitkomsten.'),
  39:c('opruimverslag.md','refactorontwikkelaar',['architectuur.md','START-HIER.md'],[
    ['Overlap en afhankelijkheden','Onderbouw per onderdeel waarom het dubbel of verouderd is.'],
    ['Opruiming','Beschrijf kleine opgedragen wijzigingen en behoud van gegevens en andermans werk.'],
    ['Regressiecontrole','Leg werking van getroffen routes en resterende risico’s vast.']
  ],'Geen verwijdering alleen op basis van een bestandsnaam; controleer daadwerkelijk gebruik en afhankelijkheden.'),
  40:c('koppeling.md','integratieontwikkelaar',['bouwplan.md','flows.md'],[
    ['Gegevenscontract','Beschrijf richting, velden, authenticatie en foutresponsen van de afgesproken koppeling.'],
    ['Implementatie en instellingen','Leg hergebruik, aangepaste onderdelen en configuratienamen zonder geheime waarden vast.'],
    ['Integratietests','Test succes, onjuiste toegang, storing en dubbel verzenden; onderscheid simulatie van echte aansluiting.']
  ],'Bij stap 7 eerst het contract vastleggen; alleen bouwen als het bouwplan deze concrete koppeling al toestaat.'),
  41:c('github-versie.md','ontwikkelaar',['releasecheck.md'],[
    ['Wijziging en controles','Leg bedoelde scope en werkelijk uitgevoerde controles vast.'],
    ['Opslagstatus','Geef exacte repository, branch, lokale commit-ID en alleen na echte push een gecontroleerde GitHub-versielink.'],
    ['Publicatiegevolgen','Beschrijf de gekozen afspraak, daadwerkelijk uitgevoerde acties en resterende vervolgstap.']
  ],'Een commit, push en livepublicatie zijn afzonderlijke statussen; onbekende publicatiegevolgen staan geen push toe.'),
  42:c('github-koppeling.md','ontwikkelaar',[],[
    ['Project en repository','Leg gecontroleerde projectroot, repository en huidige branch vast.'],
    ['Koppeling en toegang','Beschrijf hergebruik of gemaakte koppeling en welke toegangscontrole echt is uitgevoerd.'],
    ['Verder werken','Noem ontbrekende aanmelding of de concrete volgende bouwstap.']
  ],'Deze opdracht koppelt alleen: geen commit, push of publicatie en geen toegangstoken in chat of document.'),
  s1:c('seo-plan.md','SEO-contentschrijver',['propositie.md','onderzoek.md','schermen.md'],[
    ['Zoekvragen','Koppel de vraag van de doelgroep aan iedere openbare pagina en onderbouw of markeer de keuze.'],
    ['Pagina-inhoud','Geef per pagina URL, titel, beschrijving, hoofdkop, bruikbare inhoud en interne links.'],
    ['Controle en overdracht','Stem af met schermen.md en noteer wat de bouwer moet verwerken.']
  ],'Geen verzonnen zoekvolumes of rankingbelofte; pagina en volgende actie sluiten op dezelfde zoekvraag aan.'),
  s2:c('seo-bouwcontrole.md','SEO-ontwikkelaar',['seo-plan.md','bouwplan.md'],[
    ['SEO-inrichting','Leg bedoelde openbare/besloten pagina’s, metadata, canonical, robots en sitemap vast.'],
    ['Wijzigingen','Pas de afgesproken SEO-basis toe in de bestaande techniek en noteer bestanden.'],
    ['Controle','Test routes, metadata, links en indexeringsbedoeling; scheid lokale test van publieke bereikbaarheid.']
  ],'Een robots-instelling is geen toegangsbeveiliging en een correcte sitemap garandeert geen indexering.'),
  s3:c('search-console.md','verificatiebegeleider',['release.md'],[
    ['Methode en property','Noteer bedoelde website/property en het werkelijk aangeleverde HTML-bestand of de meta-tag.'],
    ['Plaatsing en controle','Leg exacte plaatsing, relevante URL en status van de bereikbaarheid vast; wijzig de verificatiewaarde niet.'],
    ['Handmatige verificatie','Beschrijf hoe de gebruiker in Search Console verifieert; registreer de Google-status alleen bij bewijs.']
  ],'Zonder echt verificatiemiddel blijft plaatsing geblokkeerd; DNS-verificatie hoort bij de instellingen en niet bij deze codeopdracht.'),
  s4:c('analytics.md','analyticsontwikkelaar',['release.md','bouwplan.md'],[
    ['Meetafspraak','Leg echte GA4-meet-ID, website, afgesproken events en succesdefinitie vast.'],
    ['Implementatie','Beschrijf één passende integratie in de bestaande techniek en de afgesproken toestemmingsafhandeling.'],
    ['Eventcontrole','Test één succesvolle verwerking, validatiefout, serverfout, dubbel verzenden en weigering; controleer werkelijk ontvangen events waar toegang bestaat.']
  ],'Een klik of mislukte aanvraag telt niet als succes; geen dubbele tags en geen persoonsgegevens in eventparameters.'),
  s5:c('groeiplan.md','data-analist',['seo-plan.md','release.md','analytics.md'],[
    ['Data en beperkingen','Leg bronnen, perioden, definities, filters en meetgaten vast.'],
    ['Analyse','Scheid vindbaarheid, bezoek en resultaat; toon berekeningen met bronwaarden en zoek alternatieve verklaringen.'],
    ['Eén volgende verbetering','Kies een aantoonbaar probleem en schrijf een afgebakende bouwopdracht met acceptatiecriteria en nameting.']
  ],'Bij onvoldoende gegevens lever je een meetplan met open vragen; geen verzonnen trend, oorzakelijk verband of codewijziging.')
};

// Primary report and necessary changes are separate, explicit outputs.
promptContracts[23].additionalDocuments=['START-HIER.md'];
promptContracts[28].additionalDocuments=['schermen.md','architectuur.md','gebruikershandleiding.md'];
for(const key of [28,37,39])promptContracts[key].scopedDocumentUpdates=true;
for(const key of [7,8])promptContracts[key].artifacts=['ontwerpschermen en beschikbare exports in 03-ontwerp/'];
for(const key of [10,11,12,15,16,18,19,30,31,32,33,36,37,39,40,'s2','s3','s4'])promptContracts[key].artifacts=['de opgedragen code- of inhoudswijzigingen','noodzakelijke tests en hun bijlagen'];
promptContracts[20].artifacts=['de vrijgegeven deployment en bewijs van de livecontrole'];
promptContracts[41].artifacts=['de bedoelde commit en alleen indien toegestaan de push'];
promptContracts[42].artifacts=['de gecontroleerde repositorykoppeling'];

const profileGroups={
  product:[1,3,5,6,21,25,27,29,'s1'],
  research:[2,4,22,33,35,'s5'],
  design:[7,8],
  build:[9,10,11,12,16,18,19,26,30,31,37,39,40,'s2','s4'],
  debug:[15,32],
  audit:[14,17,28,34,36,38],
  operations:[13,20,23,24,41,42,'s3']
};
const profileReasons={
  product:'Gebruikersprobleem, concrete inhoud en beperkte scope bepalen het resultaat.',
  research:'Conclusies vragen bronweging, tegenbewijs en een expliciete onzekerheidsstatus.',
  design:'Schermrelaties en haalbare overdracht zijn leidend; een ontwerp is geen implementatie.',
  build:'Technische verandering of voorbereiding vraagt relevante failure modes en regressiecontrole.',
  debug:'Reproductie en toetsing van oorzaken zijn noodzakelijk voordat herstel wordt geclaimd.',
  audit:'Het doel is een onderbouwd oordeel; bevindingen moeten eerst worden tegengesproken.',
  operations:'Bestemming, behoud van bestaand werk en bewijs van uitvoerstatus bepalen de overdracht.'
};
for(const [profile,keys] of Object.entries(profileGroups))for(const key of keys){
  const contract=promptContracts[key];
  if(!contract||contract.profile)throw new Error(`Ongeldige profieltoewijzing: ${key}`);
  Object.assign(contract,{profile,profileRationale:profileReasons[profile],complexity:[13,41,42].includes(key)?'S':'M',version:promptContractVersion});
}
export const setupContract={...c('START-HIER.md','projectbegeleider',[],[
  ['Projectdoel','Leg alleen het bekende projectdoel vast.'],['Huidige stap','Gebruik de vastgelegde stap of begin met de projectbrief.'],
  ['Gekozen documenten','Noem alleen werkelijk beschikbare bestanden met paden.'],['Werkafspraken','Leg projectroot, bronbehandeling en lees-eerst-afspraken vast.'],
  ['Open vragen','Markeer ontbrekende informatie en conflicten.'],['Volgende actie','Noem één concrete vervolghandeling.']
],'Controleer werkelijke paden en behoud van bestaande inhoud; zonder schrijftoegang geef je volledige tekst zonder opslagclaim.'),
  title:'Projectstart',profile:'operations',profileRationale:'De startopdracht richt alleen ontbrekende mappen en de projectindex in.',complexity:'S',version:promptContractVersion,
  artifacts:['alleen ontbrekende archiefmappen 01-bronnen, 03-ontwerp en 05-tests']
};
export const promptRegistry={...promptContracts,setup:setupContract};
