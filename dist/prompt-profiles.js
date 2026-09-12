// Reusable task discipline. Examples are illustrative, never project evidence.
export const promptProfiles={
  product:{
    label:'Product en inhoud',
    instructions:'Verbind elke keuze aan het opgegeven gebruikersprobleem en de afgebakende eerste versie. Toets of het voorgestelde resultaat dat probleem werkelijk helpt oplossen. Scheid een voorstel van een vastgesteld besluit; voeg geen functies, prijs of resultaatbelofte zonder basis toe.',
    examples:[],
    exampleRationale:'Voor eenvoudige teksten en scopekeuzes volstaan de specifieke documentsecties; voeg alleen een vormvoorbeeld toe als de taak dat vraagt.'
  },
  research:{
    label:'Onderzoek en analyse',
    instructions:'Beoordeel bronnen per belangrijke conclusie op directheid, actualiteit en onafhankelijkheid. Noteer bronlocatie, relevante periode en raadpleegdatum waar toepasselijk. Herpublicaties van dezelfde bron tellen niet als onafhankelijke bevestiging. Zoek een alternatieve verklaring en tegenbewijs. Bij conflict: leg beide standpunten en hun bewijs vast, weeg hun kwaliteit en markeer een onbesliste uitkomst als [CONFLICT]. Een aangeleverde mening blijft een gebruikersmededeling totdat zij is bevestigd.',
    examples:[
      'ILLUSTRATIEF: conclusie | bronlocatie en periode | tegenbewijs | onderbouwde duiding. Gebruik alleen werkelijk onderzochte bronnen in de ingevulde rij.',
      'GRENSGEVAL: twee artikelen herhalen hetzelfde persbericht. Eén oorsprong, geen twee bevestigingen; de conclusie blijft [ONZEKER] zonder aanvullend bewijs.'
    ]
  },
  audit:{
    label:'Audit en vrijgaveadvies',
    instructions:'Begin met de nulhypothese dat het onderzochte onderdeel aan de afgesproken eisen voldoet. Probeer elke materiële bevinding vóór vaststelling te ontkrachten met tegenbewijs of een alternatieve verklaring. Registreer controle, bron of test, tegencontrole en conclusie. Zonder verifieerbaar bewijs blijft het een signaal of NIET GETEST. Geef ernst op basis van aantoonbare impact; maak kritieke ontbrekende controles zichtbaar en middel die niet weg. Weeg conflicterende bronnen op directheid, actualiteit en onafhankelijkheid.',
    examples:[
      'ILLUSTRATIEF: bevinding | eis | waargenomen gedrag | bewijs | poging tot weerlegging | impact | herstel en hertest. Vul uitsluitend echte waarnemingen in.',
      'GRENSGEVAL: een oud verslag noemt de login getest, maar de actuele versie is niet uitgevoerd. Status NIET GETEST; dit levert geen vrijgaveadvies GEREED op.'
    ]
  },
  build:{
    label:'Bouw en architectuur',
    instructions:'Beoordeel vóór toegestane uitvoering de relevante fouten bij invoer, gelijktijdig of dubbel gebruik, externe uitval, gegevensintegriteit, resource- of kostenlimieten en deployment/herstel. Benoem niet-toepasselijke categorieën kort met reden. Kies de kleinste wijziging binnen de scope; een planopdracht blijft een plan. Leg vóór een risicovolle wijziging een haalbaar herstelpad vast. Controleer de oorspronkelijke route en de getroffen regressies; rapporteer alleen werkelijk uitgevoerde controles.',
    examples:[
      'ILLUSTRATIEF: bouwstap | risico | maatregel | controle | herstelpad. De regel wordt ingevuld vanuit de echte projectbestanden en beschikbare testomgeving.',
      'GRENSGEVAL: de externe dienst is niet bereikbaar. Simulatie kan lokaal gedrag toetsen, maar de echte integratie blijft NIET GETEST en blokkeert afhankelijk werk.'
    ]
  },
  debug:{
    label:'Foutonderzoek',
    instructions:'Leg reproductie, verwacht en werkelijk gedrag vast. Onderzoek maximaal drie concrete oorzaakhypothesen en benoem welk bewijs iedere hypothese kan weerleggen. Maak één gerichte reparatie binnen de scope en controleer dezelfde reproductie plus relevante regressies. Behoud andermans werk en gegevens; beschrijf het herstelpad. Niet reproduceerbaar of niet getest is niet hetzelfde als opgelost.',
    examples:[
      'ILLUSTRATIEF: fout | reproductie | hypothese | ontkrachtende test | reparatie | herteststatus met bewijs.',
      'GRENSGEVAL: de fout verdwijnt na vernieuwen, maar de oorzaak is onbekend. Meld niet opgelost; leg vast wat reproduceerbaar is en welke waarneming nog nodig is.'
    ]
  },
  design:{
    label:'Ontwerp en overdracht',
    instructions:'Koppel elk ontwerp aan de gekozen scherm-ID’s, teksten en toestanden. Controleer de belangrijkste desktop- en mobiele route, inclusief fout en herstel. Scheid visueel voorstel van een werkende implementatie. Lever alleen assets of exports die echt zijn gemaakt. Als volledige Markdown-overdracht niet mogelijk is, geef de beschikbare tekst of export en meld precies welke overdracht ontbreekt; verzin geen bestand of succesvolle export.',
    examples:[
      'ILLUSTRATIEF: scherm-ID | toestand | inhoud | interactie | mobiele variant | bestaande exportlocatie.',
      'GRENSGEVAL: het ontwerpscherm bestaat, maar de tool biedt geen tekstexport. De ontwerpuitkomst kan beschikbaar zijn terwijl de Markdown-overdracht GEBLOKKEERD blijft.'
    ]
  },
  operations:{
    label:'Opslag, uitvoering en overdracht',
    instructions:'Controleer eerst bestemming, bestaande toestand en afgesproken scope. Behoud geldige bestanden en andermans werk. Maak onderscheid tussen voorgestelde inhoud, lokaal geschreven bestand, commit, push en livepublicatie. Registreer voor uitgevoerde acties het echte pad of de echte versie plus de controle erna. Een eerdere statusmelding bewijst de huidige toestand niet; ontbrekende toestemming of essentiële toegang blokkeert alleen het afhankelijke werk.',
    examples:[
      'ILLUSTRATIEF: actie | bestemming | toestemming of scopeafspraak | werkelijke status | bewijs | volgende handeling.',
      'GRENSGEVAL: de lokale commit bestaat maar de push mislukt. Noteer alleen lokaal bewaard, de fout en een gerichte vervolgstap; claim geen GitHub-versie of livepublicatie.'
    ]
  }
};

export function profileText(contract){
  const profile=promptProfiles[contract.profile];
  if(!profile)throw new Error(`Onbekend taakprofiel: ${contract.profile}`);
  return [`TAAKCONTROLE — ${profile.label}`,profile.instructions,
    ...(profile.examples.length?['Vormvoorbeelden — uitsluitend illustratief, geen projectbewijs:',...profile.examples]:[])
  ].join('\n\n');
}
