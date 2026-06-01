# Dokumentation af proces, iterationer og beslutninger

Dette dokument beskriver arbejdsprocessen i NordPixel-projektet, de vigtigste iterationer undervejs og de centrale beslutninger, der er truffet i projektforløbet.

## 1. Formål med dokumentationen

Formålet er at dokumentere:
- hvordan projektet har udviklet sig trin for trin
- hvilke større skift der er sket i den tekniske retning
- hvorfor bestemte beslutninger blev taget
- hvordan den tidligere version af main er bevaret, så udviklingen kan vises

## 2. Overordnet proces

Projektet har udviklet sig i tre hovedfaser:
1. Et tidligt fundament på main med branding, layout og grundlæggende sideindhold.
2. En større videreudvikling på HovedOpgave-branchen med Next.js app-arkitektur, WebLab, forløb, bookingflow og LanguageSelector.
3. Et samlet løft, hvor HovedOpgave blev merged ind i main med unrelated histories, efterfulgt af oprydning og deployment-tilpasning.

Det store løft skete i commiten 707ebaf med beskeden: Merge HovedOpgave into main (allow unrelated histories).

## 3. Iterationer og milepæle

## 3.1 Tidlig main-fase (fundament og visuel retning)

Centrale commits i den tidlige fase:
- cf888e1 MajorBrandingAddition
- 93ae691 Revamp layout, typography and colors
- 546a252 Extract layout and add Teaching/About pages
- 1775772 Update TeachingPage.tsx

Karakteristika i denne fase:
- fokus på branding, layout og informationsstruktur
- tidlig opbygning af sider og visuel identitet
- hurtige iterationer på indhold og præsentation

## 3.2 HovedOpgave-fase (funktionel udvidelse)

Centrale commits på HovedOpgave:
- 830bb9d Migrate project to Next.js (app router)
- a2ac0c2 Add editor and downloads pages and WebLab
- 1928a3a Add course booking UI, EmailJS and deps cleanup
- e416fb0 Add localized content, booking tab and UI styles
- 0ae785f Add pricing, cart UX, and LanguageSelector dictionary updates
- 710acfc Refine homepage/contact UX and add cookie consent-gated analytics

Karakteristika i denne fase:
- skifte til Next.js app router
- introduktion af WebLab med browsernær læringsoplevelse
- opbygning af forløbssider, kurv og bookingformular
- LanguageSelector og tydeligere struktur for dansk/engelsk indhold
- samtykkestyret analytics

## 3.3 Integrationsfase på main (sammenlægning og stabilisering)

Centrale commits efter merge:
- 707ebaf Merge HovedOpgave into main (allow unrelated histories)
- cc2ffcc Remove legacy Vite files after unrelated-history merge
- c3f5b8d Remove legacy Vite config to fix Next/Vercel typecheck
- 8d65c03 Set Vercel output directory for Next.js build

Karakteristika i denne fase:
- teknisk konsolidering efter branch-sammenlægning
- fjernelse af legacy-filer fra tidligere setup
- tilpasning til stabil build/deployment på Vercel

## 4. Centrale beslutninger i forløbet

## 4.1 Skift i platform

Beslutning:
- at samle projektet omkring Next.js app router i stedet for det tidligere setup.

Begrundelse:
- bedre struktur for sider, metadata og skalering
- mere robust ramme for WebLab, forløb, booking og LanguageSelector

Konsekvens:
- hurtigere videreudvikling af features
- behov for oprydning efter merge (legacy Vite-filer)

## 4.2 Local-first WebLab

Beslutning:
- at gøre WebLab browsernært og local-first med lagring i localStorage.

Begrundelse:
- bedre egnet til undervisningskontekst
- lavere kompleksitet end serverlagring i første version

Konsekvens:
- elever/lærere kan gemme lokalt og fortsætte arbejdet
- tydelig afhængighed af browsermiljø

## 4.3 Bookingflow med kurv

Beslutning:
- at bruge en enkel kurvmodel baseret på localStorage og tydelig brugerfeedback.

Begrundelse:
- lav teknisk friktion
- let at forstå for brugere i skolekontekst

Konsekvens:
- stabil og hurtig bookingoplevelse
- kræver validering af localStorage-data (som er implementeret)

## 4.4 EmailJS til formularafsendelse

Beslutning:
- at sende booking via EmailJS fra klienten i stedet for at bygge backend i første omgang.

Begrundelse:
- hurtigere implementering
- færre driftskrav i projektfasen

Konsekvens:
- enkel drift og hurtig levering
- afhængighed af korrekt miljøvariabelopsætning

## 4.5 Cookie-samtykke før analytics

Beslutning:
- at indlæse Google Analytics betinget efter aktiv accept.

Begrundelse:
- bedre privatlivshensyn
- tydelig samtykkelogik

Konsekvens:
- mere ansvarlig datahåndtering
- analytics-data afhænger af samtykkegrad

## 5. Dokumentation af det store branch-skifte

Ja, den gamle main er bevaret som en separat branch og kan vises.

Oprettet branch:
- legacy-main-pre-hovedopgave

Branchens referencepunkt:
- commit 1775772 (main lige før det store merge fra HovedOpgave)

Remote branch:
- origin/legacy-main-pre-hovedopgave

Det betyder, at man nu kan demonstrere forskellen mellem:
- tidligere main-fundament
- nuværende main efter integrationsløftet

## 6. Sådan vises forskellen i praksis

Eksempler på nyttige kommandoer:

```bash
git checkout legacy-main-pre-hovedopgave
git checkout main
git log --oneline --graph --decorate --all
git diff legacy-main-pre-hovedopgave..main -- src/
```

## 7. Konklusion

Projektet har gennemgået en tydelig iterativ udvikling fra et visuelt og indholdsmæssigt fundament til en mere moden platform med WebLab, forløb, kurv, booking og samtykkestyret analytics. Den store integration fra HovedOpgave til main har været et markant vendepunkt, og den tidligere main er nu bevaret som separat branch, så processen kan dokumenteres og vises transparent i opgaven.
