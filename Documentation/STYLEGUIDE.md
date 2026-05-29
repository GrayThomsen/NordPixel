# NordPixel Styleguide

Denne styleguide beskriver den visuelle retning for NordPixel og fungerer som et praktisk referencepunkt for design, indhold og komponenter. Målet er at holde siden konsistent, undervisningsvenlig og tydelig i sit udtryk, så både hjemmeside, WebLab, forløb og bookingflade føles som en samlet platform.

## 1. Overordnet designretning

NordPixel skal fremstå som en professionel, skoleorienteret og teknisk kompetent platform. Udtrykket må gerne være varmt og menneskeligt, men det må ikke blive blødt eller generisk. Det visuelle sprog skal signalere, at projektet arbejder med digital dannelse, undervisning og praktisk webudvikling.

Det betyder, at designet skal være:
- tydeligt i hierarki og indhold
- roligt nok til undervisningsbrug
- moderne uden at blive trendbetonet
- teknisk nok til at understøtte WebLab og bookingflow
- konsekvent i farver, typografi og interaktioner

Der er allerede et visuelt grundlag i [THEME_GUIDE.md](THEME_GUIDE.md), [src/styles/design-tokens.css](src/styles/design-tokens.css) og [src/styles/globals.css](src/styles/globals.css). Styleguiden her samler retningen og gør den mere operationel.

## 2. Brand og tone

NordPixels brand skal føles kompetent, roligt og fokuseret. Sproget bør understøtte undervisning, planlægning og praktisk anvendelse. Det betyder, at al tekst på siden skal være direkte, forklarende og uden unødvendig pynt.

### Principper
- Skriv klart og konkret.
- Brug faglige ord, men forklar dem, når de er centrale for brugeren.
- Lad tone og layout signalere sikkerhed og overblik.
- Undgå overdrevent salgsagtige formuleringer.
- Brug en enkel og aktiv stil, især i CTA'er og formulartekster.

### Visuelt brand
- Orange er den primære accentfarve og skal bruges bevidst til handling, fokus og fremhævning.
- Mørk navy skal være det stabile fundament i header, navigation og tunge UI-flader.
- Lyse flader skal skabe luft i indhold og formulardele.
- Logo og brandnavn skal have høj genkendelighed og stå tydeligt i header og footer.

### Anbefalinger til filer
- [src/styles/globals.css](src/styles/globals.css) bør være den primære kilde for global brandadfærd.
- [src/app/components/SiteHeader.tsx](src/app/components/SiteHeader.tsx) og [src/app/components/SiteFooter.tsx](src/app/components/SiteFooter.tsx) bør bruges som faste brandbærere.
- [THEME_GUIDE.md](THEME_GUIDE.md) bør opdateres, hvis brandfarver eller fontvalg ændres.

## 3. Farver

Farvesystemet skal være semantisk, ikke dekorativt. Hver farve skal have en tydelig funktion.

### Primære farver
- Navy: bruges til struktur, header, stærke kontraster og primære tekstelementer.
- Orange: bruges til CTA'er, aktive elementer, fokus og markeringer.
- Lys baggrund: bruges til læsbarhed og adskillelse af indhold.

### Regler for brug
- Brug orange til handling, ikke som almindelig tekstfarve i brødtekst.
- Brug mørke baggrunde til navigation, hero-sektioner og markante introduktioner.
- Brug lyse paneler til indhold, formularer og oversigter.
- Brug farveændringer som signaler, ikke som pynt.

### Kontrast og tilgængelighed
- Tekst skal altid have høj læsbarhed mod baggrunden.
- CTA'er skal være tydelige både i normal, hover og aktiv tilstand.
- Fokusmarkeringer skal kunne ses uden at være aggressive.
- Farver må ikke alene bære betydning; ikonografi, labels og struktur skal understøtte dem.

### Anbefalinger til filer
- [src/styles/design-tokens.css](src/styles/design-tokens.css) bør være den primære kilde for semantiske farver.
- [src/styles/globals.css](src/styles/globals.css) bør bruge tokens konsekvent og undgå hårdkodede værdier, hvor det kan undgås.
- [THEME_GUIDE.md](THEME_GUIDE.md) bør fungere som den mere menneskelige oversigt over farvevalg.

## 4. Typografi

Typografi er en af de vigtigste dele af NordPixels udtryk, fordi siden skal fungere i en undervisningskontekst, hvor læsbarhed og hierarki er afgørende.

### Ønsket typografisk retning
- Overskrifter skal føles tydelige, tekniske og lidt karakterfulde.
- Brødtekst skal være let at læse i længere afsnit.
- Små labels og statuslinjer skal være diskrete, men stadig tydelige.
- Tekst skal altid støtte indholdets struktur.

### Regler
- Overskrifter skal have tydelig vægt og stærk hierarkisk adskillelse.
- Brødtekst skal være rolig og ikke for smal i linjeafstand.
- Små hjælpe- og statusbeskeder skal være konsekvente i størrelse og farve.
- Der skal være en klar forskel på headline-tekst og UI-tekst.

### Bemærkning om nuværende kode
Der er en lille inkonsistens i den nuværende dokumentation: [THEME_GUIDE.md](THEME_GUIDE.md) beskriver Tomorrow og IBM Plex Sans Hebrew, mens [src/styles/design-tokens.css](src/styles/design-tokens.css) og [src/styles/globals.css](src/styles/globals.css) arbejder med Google Sans Text i den globale base. Styleguiden bør derfor betragtes som retningsgivende for, hvilken typografisk retning projektet skal lande på.

### Anbefalinger til filer
- [src/styles/fonts.css](src/styles/fonts.css) bør bruges til den endelige fontopsætning.
- [src/styles/design-tokens.css](src/styles/design-tokens.css) bør afspejle de valgte fontprincipper.
- [THEME_GUIDE.md](THEME_GUIDE.md) bør opdateres, så dokumentationen matcher den faktiske implementering.

## 5. Layout og spacing

Layoutet skal være struktureret, luftigt og let at skimme. Brugeren skal hurtigt kunne forstå, hvor de er, og hvad næste handling er.

### Layoutprincipper
- Hver side skal have en tydelig hovedakse og et klart indholdshierarki.
- Sektioner skal være adskilte nok til at kunne læses hurtigt.
- Indholdet skal være pakket tæt nok til at føles samlet, men ikke så tæt at det bliver tungt.
- Paneler og kort skal skabe rytme i siden.

### Spacing-regler
- Brug ensartede afstande mellem sektioner og indholdsbokse.
- Hold marginer og padding konsekvente på tværs af sider.
- Brug ekstra luft omkring hero og store introduktioner.
- Formularfelter og handlingsknapper skal have klar separation.

### Anbefalinger til filer
- [src/styles/globals.css](src/styles/globals.css) bør samle de vigtigste spacing-mønstre.
- [src/app/components/AppShell.tsx](src/app/components/AppShell.tsx) bør sikre ensartet sideopsætning.
- [src/app/page.tsx](src/app/page.tsx), [src/app/courses/page.tsx](src/app/courses/page.tsx), [src/app/editor/page.tsx](src/app/editor/page.tsx) og [src/app/contact/page.tsx](src/app/contact/page.tsx) bør følge samme overordnede rytme.

## 6. Navigation og header

Headeren skal være en stabil navigationsramme, ikke et visuelt showpiece. Den skal hjælpe brugeren med at orientere sig hurtigt og fastholde brandidentiteten.

### Regler
- Navigationen skal være tydelig og have lav støj.
- Den aktive side skal markeres klart.
- Headeren skal holde sit udtryk konsekvent på tværs af sider.
- Mobilnavigation skal være let at forstå og bruge med én hånd.

### Designprincipper
- Brandnavnet og logoet skal stå tydeligt.
- Aktive links skal være let aflæselige uden at dominere for meget.
- Headerens baggrund skal understøtte siden, ikke konkurrere med indholdet.
- Sticky navigation må ikke føles tung eller forstyrrende.

### Anbefalinger til filer
- [src/app/components/SiteHeader.tsx](src/app/components/SiteHeader.tsx) er det vigtigste sted for navigationens struktur.
- [src/styles/globals.css](src/styles/globals.css) bør styre headerens visuelle regler og aktive states.

## 7. Knapper og links

Knapper og links er de vigtigste interaktionspunkter, så de skal være konsekvente og lette at aflæse.

### Regler for CTA'er
- Primære knapper skal være tydelige og have en klar visuel prioritet.
- Sekundære handlinger skal være mere afdæmpede, men stadig tydelige.
- Links skal se interaktive ud uden at ligne almindelig brødtekst.
- Hover og active states skal være konsekvente på tværs af komponenter.

### Interaktionsprincipper
- En klikbar flade skal føle sig klikbar.
- Hover skal give et lille løft, ikke et kraftigt spring.
- Fokus skal kunne ses tydeligt med tastatur.
- Destruktive handlinger skal skille sig klart ud fra primære handlinger.

### Anbefalinger til filer
- [src/styles/globals.css](src/styles/globals.css) bør definere grundregler for hover, active og fokus.
- [src/app/components/CoursesContent.tsx](src/app/components/CoursesContent.tsx) og [src/app/components/CoursesBookingContent.tsx](src/app/components/CoursesBookingContent.tsx) bør følge de samme CTA-principper.

## 8. Kort, paneler og sektioner

NordPixel bruger mange kort og paneler til at præsentere indhold, så komponenterne skal være let genkendelige og ensartede.

### Regler
- Et kort skal altid have en tydelig indre struktur.
- Overskrift, brødtekst og handling skal have konsekvent hierarki.
- Paneler må gerne være forskellige i størrelse, men ikke i sprog.
- Rammer og baggrunde skal støtte indholdet, ikke skjule det.

### Brugsmønstre
- Hero-sektioner skal samle det vigtigste først.
- Indholdskort skal bruges til oversigter og valg.
- Formularpaneler skal føles rolige og systematiske.
- Status- og infobokse skal være tydelige, men ikke råbe.

### Anbefalinger til filer
- [src/styles/globals.css](src/styles/globals.css) bør være kilde til kort-stilarter.
- [src/app/components/CoursesContent.tsx](src/app/components/CoursesContent.tsx) og [src/app/components/ContactContent.tsx](src/app/components/ContactContent.tsx) bør bruge samme kortlogik, hvor det er muligt.

## 9. Formularer og validering

Formularer skal føles hjælpsomme, ikke administrative. Brugeren skal vide, hvad der forventes, og få tydelig feedback, hvis noget mangler.

### Regler
- Label skal altid være synlig.
- Placeholder må kun supplere, ikke erstatte en label.
- Fejl og status skal være tydelige og lette at forstå.
- Felter skal være store nok til både desktop og mobil.

### Interaktionsprincipper
- Fokusstate skal være let at se.
- Inputfelter skal have tydelig grænse og læsbar tekst.
- Disabled states skal være forståelige, ikke bare grå.
- Succes- og fejlbeskeder skal være korte og konkrete.

### Anbefalinger til filer
- [src/app/components/CoursesBookingContent.tsx](src/app/components/CoursesBookingContent.tsx) er den vigtigste reference for formularadfærd.
- [src/styles/globals.css](src/styles/globals.css) bør samle input-, label- og feedback-styles.

## 10. Animation og bevægelse

Animation skal bruges sparsomt og funktionelt. Den skal understøtte overblik, feedback og ro, ikke underholde for enhver pris.

### Regler
- Animationer skal være korte og meningsfulde.
- Motion skal vise handling, tilstand eller overgang.
- Hover-bevægelse skal være lille og stabil.
- Brug `prefers-reduced-motion` som aktiv designregel, ikke kun som fallback.

### Hvor motion giver mening
- Cookie-bannerets indgang kan markere, at det er et vigtigt systemelement.
- Kurv- og bookingfeedback kan bekræfte brugerens handling.
- Hover og fokus kan hjælpe med at understrege klikbare elementer.
- Preview- og editorflowet kan bruge bevægelse til at indikere aktivt arbejde.

### Anbefalinger til filer
- [src/styles/globals.css](src/styles/globals.css) bør være den primære kilde til animationsregler.
- [src/app/components/CookieConsent.tsx](src/app/components/CookieConsent.tsx) og [src/app/components/CoursesContent.tsx](src/app/components/CoursesContent.tsx) bør bruge bevægelse med måde.

## 11. Billeder, logo og branding

Billeder og logo skal understøtte brandet og ikke fylde mere end indholdet. NordPixel skal føles som et uddannelses- og webprojekt, ikke som en billedtung markedsføringsside.

### Regler
- Logo skal bruges konsekvent i header og relevante brandsteder.
- Billeder skal have et klart formål.
- Hvis et billede ikke understøtter indholdet, skal det fjernes.
- Illustrationer og brandgrafik skal have et teknisk og rent udtryk.

### Anbefalinger
- Hold logo-variationer konsistente på tværs af lys og mørk baggrund.
- Brug billeder, der støtter undervisning, skabelse og teknologi.
- Undgå billeder, der føles generiske eller stock-agtige uden funktion.

### Anbefalinger til filer
- [src/app/components/SiteHeader.tsx](src/app/components/SiteHeader.tsx) bør fortsat styre logoens placering og brug.
- [src/assets/images/branding/](src/assets/images/branding/) bør holdes stramt organiseret.
- [THEME_GUIDE.md](THEME_GUIDE.md) bør afspejle, hvilke logo-varianter der bruges hvor.

## 12. Side-specifik anvendelse

Styleguiden skal omsættes forskelligt på de vigtigste sider, men med samme grundprincipper.

### Forsiden
- Skal være introducerende, rolig og tillidsvækkende.
- Skal tydeligt vise, hvad NordPixel er, og hvad brugeren kan gøre.
- Skal bruge hero, proof points og tydelige CTA'er.

### Forløbssiden
- Skal være overskuelig og informativ.
- Skal prioritere filtrering, struktur og tydelig pris-/kursusinformation.
- Skal gøre det let at vælge og gå videre til booking.

### WebLab
- Skal føles som et arbejdsrum.
- Skal være mere teknisk og mere funktionelt end resten af sitet.
- Skal prioritere editor, preview og tydelig projektstruktur.

### Kontakt og booking
- Skal være tillidsvækkende og præcis.
- Skal gøre næste skridt enkelt.
- Skal understøtte tydelig kommunikation frem for markedsføring.

### Anbefalinger til filer
- [src/app/page.tsx](src/app/page.tsx)
- [src/app/courses/page.tsx](src/app/courses/page.tsx)
- [src/app/editor/page.tsx](src/app/editor/page.tsx)
- [src/app/contact/page.tsx](src/app/contact/page.tsx)

## 13. Konkrete justeringer, jeg vil anbefale

Dette er de vigtigste steder, hvor den nuværende implementering bør bringes helt i sync med styleguiden.

1. Saml fontretningen ét sted.
- [THEME_GUIDE.md](THEME_GUIDE.md) nævner Tomorrow og IBM Plex Sans Hebrew.
- [src/styles/design-tokens.css](src/styles/design-tokens.css) bruger Google Sans Text i den globale base.
- Beslut én hovedretning, og lad dokumentation og kode pege samme vej.

2. Gør farvebrug mere semantisk.
- Bevar orange som accent og navysom fundament.
- Undgå nye hårdkodede farver i komponenter, hvis et token allerede findes.
- Flyt eventuelle gentagelser ind i tokens, når de optræder flere steder.

3. Hold kort og paneler ensartede.
- Formularer, kursusoversigter og infobokse bør dele samme spacing-logik.
- Brug samme type hjørner, rammer og skygger, hvor det er muligt.

4. Stram animationssproget op.
- Behold korte hover- og feedbackanimationer.
- Fjern bevægelse, der ikke hjælper brugeren.

5. Gør logo- og brandbrug helt konsekvent.
- Sørg for, at header, favicon og brandvariationer følger samme princip.
- Brug kun de logoer, der understøtter lys/mørk baggrund korrekt.

## 14. Hvad styleguiden skal sikre

Hvis styleguiden følges, skal resultatet være en side, der:
- føles som én samlet platform
- er let at aflæse for lærere og andre voksne brugere
- fungerer tydeligt på både desktop og mobil
- giver en professionel ramme om teknologiforståelse og webarbejde
- bevarer et klart og genkendeligt NordPixel-udtryk over tid

## 15. Kort opsummering

NordPixel skal være enkelt, tydeligt og teknisk solidt. Designet må gerne have karakter, men det skal altid støtte indhold, undervisning og brugervenlighed. Styleguiden her er tænkt som et praktisk arbejdsdokument, der kan bruges til at holde siden konsistent, både når der bygges nye sider og når eksisterende komponenter udvikles videre.
