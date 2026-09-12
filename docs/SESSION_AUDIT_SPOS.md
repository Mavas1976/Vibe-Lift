# Sessie-invoer — SPOS audit en herstel

| Scope | Onderzoek | Bewijslaag |
|---|---|---|
| Vier projectvelden | Gedeeld tussen stappen, SEO en bibliotheek; vernieuwen | Observatie: code en browser |
| 81 opdrachtvelden in 47 generators | Tekst, selecties, afzonderlijke toolkeuzes, promptuitvoer | Observatie: browser en bestaande composertests |
| Sessiestore | Herstel, geweigerde opslag, wissen, schema en omvang | Observatie: code en gerichte tests |
| Open/dicht projectpaneel | Navigeren en vernieuwen | Observatie: browser |
| Andere tabbladen, apparaten, browserherstart | Geen uitbreiding naar permanente of gedeelde opslag | Afbakening; nieuw zelfstandig tabblad getest |
| Externe AI-tools en projectbestanden | Geen onderzoek naar hun eigen sessies/opslag | Buiten scope |

Datum: 12 september 2026. Complexiteit M. SPOS CORE + Truth Contract + AUDIT; BUILD voor herstel. De screenshot is bewijs van de interface, geen instructiebron. Bestaande opslag en audits zijn eerst onderzocht; er is geen tweede opslagmechanisme toegevoegd.

De nulhypothese dat gewone sessieopslag al werkt is bevestigd voor de onderzochte lokale versie: naam, projectdoel en staptekst bleven in de eerste browsertest behouden na navigatie en vernieuwen. Het door de gebruiker vermoede algemene verlies is niet gereproduceerd. De volgende concrete tekortkomingen zijn wel vastgesteld en hersteld.

| ID | Severity | Bevinding en bewijs vóór herstel | Herstel / effort |
|---|---|---|---|
| AUD-COR-001 | MIDDEN | `createDraftStore` noemde opslag beschikbaar op basis van `!!storage`, terwijl schrijven kon worden geweigerd. | Proefschrijfactie zonder projectdata; geheugenfallback en direct zichtbare melding. S |
| AUD-DATA-001 | MIDDEN | Herstel weigerde JSON boven 1.500.000 tekens; toegestane veldinhoud kan door JSON-escaping groter worden. | Limiet afgeleid van alle toegestane velden en maximale escaping; omvangtest met synthetische invoer. S |
| AUD-COR-002 | MIDDEN | `clear()` ving een fout bij verwijderen af; de klikhandler meldde toch dat alles gewist was. Oud opgeslagen materiaal kon terugkomen. | Lege draft schrijven als verwijderen faalt; bij dubbele weigering expliciet melden dat wissen onvolledig is. S |
| AUD-OBS-001 | LAAG | `restoreIssue` was niet zichtbaar; geldige JSON met een verkeerd schema werd stilzwijgend leeg genormaliseerd. | Versie-/structuurcontrole en herstelmelding, ook in gesloten paneel. Initiële toggle overschrijft mislukte herstelbron niet. S |
| AUD-UX-001 | LAAG | Open/dicht werd bij elke render afgeleid van het projectdoel. Bewaarstatus stond alleen binnen het paneel. | Open/dicht in dezelfde sessiedraft bewaren, plus zichtbare status en aantal ingevulde projectvelden. S |

Sterke punten: één centrale store, opslag uitsluitend in het tabblad, onmiddellijke opslag op invoer, gedeelde projectcontext, afzonderlijke antwoorden per opdracht, begrensde en geëscapete tekst, bevestiging voor wissen. Projectgegevens worden niet naar externe tools verstuurd; kopiëren blijft een gebruikersactie. Generators delen antwoorden met dezelfde opdracht-ID tussen bibliotheek en les, niet met andere opdrachten.

Onderstaande scores zijn kwalitatieve auditinschattingen voor deze beperkte scope na herstel, geen gemeten betrouwbaarheid of certificering.

| Dimensie | Score /10 | Hoogste oorspronkelijke severity | Onderbouwing / resterende grens |
|---|---|---|---|
| Correctheid | 9 | MIDDEN | Navigatie, refresh, keuzen en wissen getest; geen volledige browsermatrix |
| Architectuur | 9 | INFO | Bestaande store uitgebreid; geen tweede opslaglaag |
| Security | 8 | INFO | Begrensde invoer, HTML-escaping en bestaande trust boundaries behouden; geen volledige security-audit |
| Performance | 8 | INFO | Opslag en herstel begrensd; bestaande synchrone opslag behouden, geen benchmark |
| Kosten | N.v.t. | — | Geen betaalde API of backend toegevoegd |
| Datakwaliteit | 9 | MIDDEN | Legacy v1 blijft werken, schema en grote geldige drafts getest |
| Compliance | Niet beoordeeld | — | Geen juridische compliance-conclusie; geen extra gegevensverzameling |
| Observability | 9 | LAAG | Bewaar-/herstel-/wisstatus zichtbaar zonder invoer te loggen |
| Documentatie | 9 | LAAG | Sessiecontract en beperkingen bijgewerkt |
| Testbaarheid | 9 | INFO | Reproduceerbare store- en browserregressies toegevoegd |

Alle vijf bevindingen zijn hersteld. Geen totaalscore: niet-beoordeelde dimensies worden niet als nulrisico gerekend.

Verificatie: `check-session-storage.mjs` (8 scenario's), `check-session.pw.js` (29 checks, 81 opdrachtvelden plus 4 projectvelden), bestaande `check-prompt-workbench.mjs` (369 checks) en `validate.mjs` (3340 checks in de werkmap; 3337 in de geïsoleerde release zonder andere lopende promptwijzigingen). Zie de bijbehorende JSON-rapporten. De browsercontroles gebruiken geïsoleerde synthetische invoer en laten de gebruikerssessie ongemoeid. Een testfixture is gecorrigeerd omdat de normalisatie een ontbrekende publicatiekeuze terecht als leeg veld toevoegt; de productlogica is hiervoor niet veranderd.

Falsificatie: normale navigatie en refresh eerst vóór herstel gecontroleerd; daarna geweigerde opslag en onvolledig wissen bewust gesimuleerd. Een nieuw zelfstandig tabblad blijft leeg terwijl het oorspronkelijke is ingevuld. Terugkoppeling past binnen een mobiele viewport van 390 px. Dit is geen toegankelijkheidscertificering of volledige browser-/apparaatmatrix. De oorspronkelijke oorzaak op het scherm van de gebruiker is niet vastgesteld.

De sessie betekent hetzelfde tabblad op hetzelfde siteadres. Een ander adres, apparaat of zelfstandig nieuw tabblad deelt deze invoer niet. Browserherstel kan tabbladen met hun sessiedata terugzetten. Gebruik daarom expliciet Invoer wissen als de gegevens weg moeten. Bij volledig geweigerde browseropslag blijven wijzigingen alleen tijdens navigatie op de huidige geladen pagina behouden; vernieuwen kan die wijzigingen verliezen.
