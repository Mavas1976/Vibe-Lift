// One explicit home per prompt. Extra prompts stay optional within that step.
export const stepPrompts = {
  1:{main:[1],extra:[]},2:{main:[2],extra:[]},3:{main:[3],extra:[4,29]},
  4:{main:[5],extra:[]},5:{main:[6],extra:[25]},6:{main:[7],extra:[8]},
  7:{main:[9,42],extra:[26,10,40]},8:{main:[11],extra:[32,36]},
  9:{main:[12],extra:[13]},10:{main:[14,15],extra:[]},
  11:{main:[17],extra:[16,30,31,33,34,18,28]},12:{main:[41,20],extra:[19]},
  13:{main:[21],extra:[22,38]},14:{main:[23],extra:[24,27,35,37,39]}
};
const f=(key,label,placeholder,required=true,hint='')=>({key,label,placeholder,required,hint});
const brief=f('brief','Wat moet de AI hiervoor weten?','Plak de relevante uitkomst van de vorige stap of je eigen aantekeningen.',true,'Noem bestanden die je straks zelf aan het gesprek toevoegt.');
const scope=f('scope','Welk onderdeel wil je aanpakken?','Bijvoorbeeld: het aanvraagformulier en de bevestiging erna.');
const files=f('files','Welke informatie neem je mee?','Bijvoorbeeld: projectbrief.md, schermenlijst en mijn eigen notities.',false,'Bestanden worden hier niet geüpload. Voeg ze zelf toe in de gekozen AI-tool.');
const route=f('route','Welke route moet de gebruiker kunnen doorlopen?','Bijvoorbeeld: workshop kiezen → gegevens invullen → aanvraag ontvangen.');
export const promptConfig = {
  1:{tools:['chatgpt','claude'],needsGoal:true,when:'Richt eerst je projectmap in via Uitleg. Werk daarna hier je idee uit.',fields:[files]},
  2:{tools:['claude','chatgpt'],needsGoal:true,when:'Onderzoek voordat je een aanbod of ontwerp vastlegt.',fields:[f('question','Wat wil je onderzoeken?','Bijvoorbeeld: hoe kleine sportclubs nu nieuwe leden inschrijven.'),f('market','Welke markt of regio?','Bijvoorbeeld: Nederland; lokale sportverenigingen.',false),files]},
  3:{tools:['chatgpt','claude'],needsGoal:true,when:'Gebruik de uitkomsten van je onderzoek.',fields:[brief]},
  4:{tools:['chatgpt','claude'],when:'Als je eerst wilt toetsen of mensen je aanbod nodig hebben.',fields:[f('assumption','Welke aanname wil je toetsen?','Bijvoorbeeld: leden willen zich zelfstandig online inschrijven.'),brief]},
  5:{tools:['chatgpt','claude'],needsGoal:true,when:'Vertaal je aanbod naar een route die iemand echt doorloopt.',fields:[route,brief]},
  6:{tools:['chatgpt','claude'],needsGoal:true,when:'Maak de inhoud klaar voordat je in Stitch gaat ontwerpen.',fields:[route,f('content','Welke inhoud en pagina’s heb je al?','Plak je aanbod, noodzakelijke informatie en eventuele paginalijst.')]},
  7:{tools:['stitch'],needsGoal:true,when:'Plak deze opdracht rechtstreeks in Stitch om schermen te laten maken.',fields:[f('screens','Welke schermen en teksten moet Stitch ontwerpen?','Plak je schermenlijst met inhoud, knoppen en de gebruikersroute.'),f('style','Welke uitstraling wil je?','Bijvoorbeeld: rustig en warm; donkerblauw, veel witruimte. Voeg eventueel referentielinks toe.',false)]},
  8:{tools:['stitch'],when:'Als je al een ontwerp in Stitch hebt en het wilt verbeteren.',fields:[f('screens','Welke schermen wil je aanpassen?','Bijvoorbeeld: de homepage en het mobiele aanvraagformulier.'),f('feedback','Wat moet anders?','Bijvoorbeeld: plaats prijs en datum dichter bij de knop.')]},
  9:{tools:['antigravity'],when:'Open je projectmap en leg eerst de bouwstappen vast.',fields:[files,f('first','Wat wil je als eerste laten werken?','Bijvoorbeeld: één aanvraag kunnen insturen en ontvangen.')]},
  10:{tools:['antigravity'],when:'Alleen als je site ook een demo of inlogomgeving heeft.',fields:[f('routes','Welke onderdelen moeten aansluiten?','Noem de site, demo, inlogroute en wat de gebruiker moet bereiken.')]},
  11:{tools:['antigravity'],when:'Laat één afgesproken route van begin tot einde bouwen.',fields:[route,files]},
  12:{tools:['antigravity'],when:'Laat de bouwer je Windows-starter maken of verbeteren.',fields:[f('start','Hoe start je het project nu?','Bijvoorbeeld: nog niet bekend; of noem het huidige startbestand.',false)]},
  13:{tools:['antigravity'],when:'Als je starter bestaat en je de huidige versie wilt openen.',fields:[route]},
  14:{tools:['antigravity'],when:'Vóór je zelf gaat klikken: laat de testsessie voorbereiden.',fields:[route]},
  15:{tools:['antigravity'],when:'Ná je eigen test: beschrijf wat er misging.',fields:[f('steps','Welke stappen heb je uitgevoerd?','Bijvoorbeeld: formulier geopend, e-mail leeg gelaten, op Versturen geklikt.'),f('expected','Wat verwachtte je en wat gebeurde er?','Bijvoorbeeld: ik verwachtte een foutmelding, maar er gebeurde niets.'),files]},
  16:{tools:['antigravity'],when:'Als de werking er is maar het ontwerp nog onrustig voelt.',fields:[scope,f('feedback','Wat voelt nu onduidelijk of onrustig?','Bijvoorbeeld: te veel knoppen en verschillende afstanden.') ]},
  17:{tools:['antigravity'],when:'Controleer de hele route vóór je een versie vrijgeeft.',fields:[route,f('acceptance','Wanneer is het resultaat goed?','Bijvoorbeeld: de aanvraag wordt één keer ontvangen, ook bij dubbel klikken.'),files]},
  18:{tools:['antigravity'],when:'Als je dezelfde controles vaker wilt uitvoeren.',fields:[f('tests','Welke controles moeten herhaalbaar worden?','Noem de gebruikersroutes of bestaande tests.') ]},
  19:{tools:['antigravity'],when:'Als afbeeldingen of bronbestanden nog te groot zijn.',fields:[f('media','Welke bestanden zijn voor de website bedoeld?','Noem de map of bestanden en waar ze gebruikt worden.') ]},
  20:{tools:['antigravity'],when:'Nadat de juiste versie op GitHub staat. Railway stel je zelf in waar nodig.',fields:[f('hosting','Waar moet deze versie live komen?','Bijvoorbeeld: mijn Railway-project; repositorylink en branch erbij.'),f('access','Wie mag de site zien?','Bijvoorbeeld: openbaar; of alleen de afgesproken proefgebruikers.'),f('url','Wat is het gewenste webadres?','Bijvoorbeeld: mijn eigen domein, of een nieuw Railway-adres.',false)]},
  21:{tools:['claude','chatgpt'],needsGoal:true,when:'Maak een plan voor je eerste echte gebruikers.',fields:[f('offer','Wat werkt nu en wat wil je aanbieden?','Beschrijf het actuele aanbod, de doelgroep en de gewenste eerste actie.'),files]},
  22:{tools:['chatgpt','claude'],when:'Controleer of je belofte aansluit op de eerste ervaring.',fields:[f('journey','Wat ziet en doet een nieuwe bezoeker?','Geef de site, aanbodtekst en aanmeldroute mee.'),files]},
  23:{tools:['antigravity'],when:'Aan het einde van je werksessie.',fields:[f('next','Wat wil je hierna doen?','Noem je volgende doel, of laat de bouwer een concrete vervolgstap voorstellen.',false)]},
  24:{tools:['antigravity'],when:'Als je een bestaand project opnieuw oppakt.',fields:[f('resume','Waar wil je mee verder?','Noem je huidige vraag of het openstaande werk.'),files]},
  25:{tools:['antigravity'],when:'Voor een bestaande site: leg de daadwerkelijk gebouwde inhoud vast.',fields:[files]},
  26:{tools:['antigravity'],when:'Als je wilt vastleggen hoe je project technisch samenhangt.',fields:[files]},
  27:{tools:['antigravity'],when:'Als een ander je toepassing moet kunnen gebruiken of beheren.',fields:[f('readers','Voor wie schrijf je de uitleg?','Bijvoorbeeld: beheerder van de club en nieuwe leden.'),files]},
  28:{tools:['antigravity'],when:'Controleer of uitleg en schema’s nog bij de huidige versie passen.',fields:[files]},
  29:{tools:['antigravity'],when:'Als een bestaande toepassing te veel bevat voor je eerste release.',fields:[f('release','Wat hoort in je eerste versie?','Beschrijf het gekozen aanbod, de belangrijkste route en wat later mag.')]},
  30:{tools:['antigravity'],when:'Na het algemene ontwerp: maak de ervaring ook op mobiel logisch.',fields:[route,f('mobile','Waar loop je op mobiel tegenaan?','Bijvoorbeeld: toetsenbord bedekt de knop of tabellen zijn te breed.',false)]},
  31:{tools:['antigravity'],when:'Alleen als je toepassing meerdere talen ondersteunt.',fields:[f('languages','Welke talen en welke standaardtaal?','Bijvoorbeeld: Nederlands en Engels; standaard Nederlands.')]},
  32:{tools:['antigravity'],when:'Als gegevens onderweg ontbreken of verkeerd worden getoond.',fields:[f('data','Welke gegevens wil je volgen?','Bijvoorbeeld: formulierinvoer → opslag → bevestiging → beheerpagina.')]},
  33:{tools:['antigravity'],when:'Als een concrete handeling traag is of kosten onduidelijk zijn.',fields:[f('slow','Welke handeling is traag?','Beschrijf de handeling, omgeving en wat je waarneemt.'),f('budget','Heb je een doel of kostenbudget?','Bijvoorbeeld: kosten per aanvraag inzichtelijk maken.',false)]},
  34:{tools:['antigravity'],when:'Als je wilt controleren welke productclaims je kunt onderbouwen.',fields:[f('claims','Welke claims wil je controleren?','Plak de beloftes uit je site of verkooptekst.'),files]},
  35:{tools:['antigravity'],when:'Als je een bestaande site naar een andere oplossing wilt overzetten.',fields:[f('platform','Naar welke oplossing wil je overstappen?','Bijvoorbeeld: WordPress.'),f('keep','Wat moet blijven werken en wie gaat beheren?','Noem formulieren, accounts, koppelingen en wat de beheerder zelf moet kunnen.')]},
  36:{tools:['antigravity'],when:'Alleen als je product zelf AI-functies heeft.',fields:[f('ai','Welke AI-functie wil je controleren?','Beschrijf invoer, gewenste uitkomst en bekende problemen.'),files]},
  37:{tools:['antigravity'],when:'Voor een wijziging die op meerdere plekken moet doorwerken.',fields:[f('change','Wat verandert er precies?','Bijvoorbeeld: de naam wordt Clubstart; pas die ook in e-mails en uitleg aan.')]},
  38:{tools:['antigravity'],when:'Als je een bestaand project op vindbaarheid en meting wilt nalopen.',fields:[f('site','Welke website en welke belangrijkste actie?','Geef je webadres en bijvoorbeeld aanvraag, inschrijving of aankoop.')]},
  39:{tools:['antigravity'],when:'Als code of documenten dubbel of onoverzichtelijk worden.',fields:[scope,files]},
  40:{tools:['antigravity'],when:'Alleen als je toepassing met andere software moet samenwerken.',fields:[f('connection','Welke systemen moeten wat uitwisselen?','Bijvoorbeeld: ons portaal biedt een API voor aanvragen uit een CRM.')]},
  41:{tools:['antigravity'],when:'Laat gecontroleerde wijzigingen naar GitHub sturen.',fields:[f('repo','Wat is de GitHub-repository?','Plak de exacte repositorylink.'),f('branch','Naar welke branch?','Neem de afgesproken branchnaam over.'),f('work','Welke wijziging mag worden opgeslagen?','Bijvoorbeeld: het gecontroleerde aanvraagformulier.'),f('publish','Wat gebeurt er na een push?','Kies de publicatieafspraak.',true,'Railway kan deze branch automatisch publiceren.' )]},
  42:{tools:['antigravity'],when:'Eerst een repository kiezen en aanmelden; daarna laat je de bouwer koppelen.',fields:[f('repo','Wat is de GitHub-repository?','Plak de exacte repositorylink.') ]}
};
export const seoPromptConfig={
  1:{tools:['chatgpt','claude'],needsGoal:true,fields:[f('page','Welke pagina en zoekvraag?','Beschrijf het onderwerp, je aanbod en de vraag van je bezoeker.')]},
  2:{tools:['antigravity'],fields:[f('site','Wat is de website of projectmap?','Geef het webadres of open de bedoelde projectmap.'),files]},
  3:{tools:['antigravity'],fields:[f('verification','Welk verificatiebestand of welke meta-tag geeft Google?','Plak de echte meta-tag, of noem het HTML-bestand dat je zelf aan Antigravity toevoegt.')],when:'Alleen voor het plaatsen van een HTML-bestand of meta-tag. Bij DNS-verificatie volg je de gewone instelstappen hierboven.'},
  4:{tools:['antigravity'],fields:[f('site','Wat is je website?','Het echte HTTPS-adres.'),f('measurement','Wat is je GA4-meet-ID?','Neem de echte G-ID uit je webstream over.'),f('success','Welke handeling telt als een geslaagde aanvraag?','Bijvoorbeeld: een aanvraag die de server heeft ontvangen.')],when:'Maak zelf de property en webstream. Laat daarna deze opdracht de websitecode aanpassen.'},
  5:{tools:['chatgpt','claude'],fields:[f('period','Welke perioden vergelijk je?','Bijvoorbeeld: de afgelopen vier weken met de vier weken ervoor.'),f('evidence','Welke cijfers en feedback heb je?','Plak je relevante gegevens, of noem de exports die je toevoegt.') ]}
};
