# VIBE Lift — Digitale gewichtloosheid

## Analyse en besluit

Opdracht: de site merkmatig wijzigen naar **VIBE Lift** met **Digitale gewichtloosheid** als merkgedachte, en verwijzingen naar SPOS uit de volledige bezoekerservaring verwijderen. SPOS CORE en BUILD zijn gebruikt als interne uitvoeringsmethode; de site vereist dit framework niet van de lezer. Complexiteit M: bestaande architectuur en assets blijven bruikbaar.

De verwijzingen stonden in navigatie, de uitlegpagina, les 7, opdrachtcontext, oorspronkelijke promptteksten, de handboekdownload, paginatitels en CSS-/routernamen. Alleen het logo aanpassen of de uitlegpagina verbergen zou de opdracht onvolledig uitvoeren.

## Uitwerking

- Woordmerk **VIBE Lift** in header en footer, met dezelfde zwevende beeldtaal. De bestaande beelden bevatten geen tekst en passen bij het nieuwe merk.
- **Digitale gewichtloosheid** als hoofdboodschap en merkzin: ruimte voor het idee, overzicht in keuzes en een begrijpelijke volgende stap. Dit is positionering, geen gemeten prestatiebelofte.
- De route **#werkwijze** vervangt de voormalige frameworkpagina. De vijf praktische controlevragen blijven zelfstandig bruikbaar; installatie- en frameworkvereisten vervallen.
- Les 7 vraagt om projectafspraken en een werkende omgeving. Opdrachtcontext verwijst naar doel, bronnen en controles.
- De 28 opdrachten komen nu uit een bewerkte **VIBE Lift-lezerseditie 1.1**. Verwijzingen naar specialistische modules zijn vervangen door concrete taken en criteria, inclusief zes expliciete foutcategorieën in opdracht 26.
- De uitgebreide handboekdownload behoudt de processen, modellen en inhoudelijke verdieping. De branding en methodeverwijzingen zijn redactioneel aangepast. De download en UI worden daarom niet meer als ongewijzigde bron aangeduid.
- Het oorspronkelijke aangeleverde document buiten de publicatiemap blijft bewaard. Historische interne analysebestanden zijn geen bezoekerspagina's.

## Grenzen en risico's

De naam moet in browsermetadata, toegankelijke labels, home, footer, opdrachten en download overeenkomen. De publicatiecontrole scant alle tekstbestanden in `dist/` en alle 61 gerenderde inhoudsweergaven. Kopiëren gebruikt de daadwerkelijk aangepaste opdrachttekst. Alle 14 lessen, 28 opdrachten en interne routes blijven gecontroleerd.

De site behoudt zijn bestaande Sites-identiteit en besloten toegang. De titel is via de beschikbare metadatafunctie gewijzigd naar VIBE Lift. Deze functie wijzigt de bestaande URL niet. Het interne Sites-catalogusveld `description` wordt door deze tool niet aangeboden; het is geen meta-description in de website. De bezoekersgerichte HTML-description is wel aangepast.

Geen nieuw gebruikersonderzoek of visuele browsertest uitgevoerd. De bron- en rendercontroles zijn geen vervanging voor een visuele beoordeling op echte apparaten.
