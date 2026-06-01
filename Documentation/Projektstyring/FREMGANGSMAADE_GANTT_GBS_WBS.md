# Fremgangsmåde, Gantt, GBS og WBS

## Fremgangsmåde

Virksomheden havde allerede en hjemmeside, der i praksis fungerede som katalog og digitalt visitkort for skoler og undervisere, men uden tydelig anvendelse ud over præsentation. I starten arbejdede jeg ud fra en forventning om, at slutproduktet skulle være en klassisk læringsplatform i stil med Clio og Alinea, hvor elever og lærere kunne logge ind og arbejde med video- og tekstmaterialer direkte i undervisningen.

Med den antagelse valgte jeg at strukturere projektet efter Double Diamond-modellen. Jeg valgte modellen, fordi den gav en tydelig ramme mellem undersøgelse, problemdefinition, ideudvikling og implementering, og fordi den samtidig fungerede som en praktisk styringsmodel i min arbejdsproces.

Undervejs blev det tydeligt for mig, at processen ikke kunne gennemfores lineart. Selvom Double Diamond gav en klar overordnet struktur, arbejdede jeg re-iterativt i praksis med design thinking-tilgang. Jeg genbesogte derfor lobende både antagelser, indhold, funktioner og prioriteringer i takt med ny viden.

Projektet startede med en relativt klar ide om en læringsplatform, men undersogelserne viste hurtigt en mere kompleks problemstilling. Flere antagelser blev udfordret og revurderet, og processen bevagede sig frem og tilbage mellem faserne, efterhanden som data, feedback og testresultater blev analyseret.

Nedslag: Fremgangsmaden blev styret af en kombination af fast model og fleksibel iteration.

I de efterfolgende dele af dokumentationen gennemgik jeg arbejdet i Discover-, Define-, Develop- og Deliver-faserne, inklusive de metoder og værktojer, der blev anvendt i hver fase.

---

## Retroaktivt Gantt-overblik

Nedenstaende overblik var en retroaktiv samling af projektets tidsforlob baseret pa mine Gantt-kort og de faktiske milepaele i processen.

| Fase | Tidsrum (retroaktivt) | Primare aktiviteter | Leverancer |
|---|---|---|---|
| Opstart og rammesaetning | Uge 1 | Problemfelt, scope, planlaegning, afklaring af modelvalg | Projektretning, forelobig problemforstaelse |
| Discover | Uge 1-2 | Research, sporgeskema, kvalitative samtaler, empathy mapping | Indsigter om malgruppe, barrierer og behov |
| Define | Uge 2-3 | Syntese af fund, omformulering af kerneproblem, valg af retning | Revideret problemformulering, loesningsretning |
| Develop (iterationer) | Uge 3-6 | IA, UX, designsystem, WebLab, bookingflow, plakatspor, brugertest | Funktionsdygtig platform, WebLab, forbedrede brugerflow |
| Deliver | Uge 6-7 | Slutjusteringer, kvalitetssikring, validering, dokumentation | Endelig leverance og afsluttende dokumentation |
| Videreudviklingsforberedelse | Uge 7 | Prioritering af naeste spor (bl.a. foto/video) | Plan for efterfolgende iterationer |

Nedslag: Gantt-overblikket viste, at den storste tidsanvendelse la i iterative forbedringer og validering, ikke kun i implementering.

---

## Retroaktiv GBS (Goal Based Structure)

GBS'en nedenfor beskrev maelstrukturen bag projektet og hvordan delmal understottede hovedmalet.

### G0: Overordnet mal
Udvikle en mere anvendelig og professionel digital platform for NordPixel, der styrkede teknologiforstaelse for skoler gennem tydelig struktur, praktisk afprovning og handlingsklare brugerrejser.

### G1: Bruger- og vaerdimal
- G1.1: Oge malgruppens tillid til platformens faglige kvalitet.
- G1.2: Gore centrale handlinger lettere at finde og gennemfore.
- G1.3: Sanke adgangsbarrieren for arbejde med teknologiforstaelse.

### G2: Laerings- og didaktiske mal
- G2.1: Understotte learning by doing gennem WebLab.
- G2.2: Understotte undervisning med baade digitalt og fysisk materiale.
- G2.3: Skabe progression fra introduktion til konkret elevaktivitet.

### G3: Forretnings- og kommunikationsmal
- G3.1: Gore vaerdiforslaget tydeligt for skoleledere, laerere og samarbejdspartnere.
- G3.2: Understotte kontakt og booking med lav friktion.
- G3.3: Understotte skalering gennem konsistent design og struktur.

### G4: Kvalitetsmal
- G4.1: Konsistent visuelt og sprogligt udtryk pa tværs af platformen.
- G4.2: Bedre gennemforsel i kerneflow (forlob, booking, WebLab-opstart).
- G4.3: Beslutninger baseret pa test, ikke kun antagelser.

Nedslag: GBS'en gjorde det tydeligt, at mael for brugbarhed, laering og forretning skulle loeses samlet.

---

## Retroaktiv WBS (Work Breakdown Structure)

WBS'en nedenfor beskrev arbejdet som konkrete arbejdspakker, koblet til leverancer og output.

### WP1: Projektfundament og analyse
- WP1.1: Fastlaegge problemfelt, scope og succeskriterier.
- WP1.2: Gennemfore desk research pa teknologiforstaelse i skolekontekst.
- WP1.3: Planlaegge dataindsamling (sporgeskema + kvalitative input).
- Output: Analysegrundlag og forelobig retning.

### WP2: Discover-indsamling
- WP2.1: Udsende og indsamle sporgeskema.
- WP2.2: Gennemfore relevante samtaler/interviews.
- WP2.3: Udarbejde empathy map og samle centrale fund.
- Output: Brugerindsigter, behovsoversigt og barrierer.

### WP3: Define-syntese
- WP3.1: Syntese af kvantitative og kvalitative fund.
- WP3.2: Revurdere oprindelig platformantagelse.
- WP3.3: Formulere opdateret problem- og loesningsretning.
- Output: Revideret problemforstaelse og designretning.

### WP4: UX/IA og indholdsstruktur
- WP4.1: Kortlaegge kernebrugerrejser.
- WP4.2: Omstrukturere informationsarkitektur.
- WP4.3: Prioritere CTA'er og beslutningskritisk indhold.
- Output: Forbedret navigation og handlingsflow.

### WP5: Visuel retning og designsystem
- WP5.1: Definere konsistente UI-principper.
- WP5.2: Standardisere farver, typografi, spacing og komponentadfaerd.
- WP5.3: Forankre Gestalt- og hierarkiprincipper i UI.
- Output: Mere sammenhaengende og professionelt UI.

### WP6: Funktionsudvikling (WebLab og booking)
- WP6.1: Udvikle WebLab med fokus pa lav adgangsbarriere.
- WP6.2: Implementere local-first arbejdsflow.
- WP6.3: Forbedre bookingflow med tydeligere feedback.
- Output: Kernefunktioner med hoej anvendelighed.

### WP7: Supplerende laeringsmateriale
- WP7.1: Konceptualisere plakatspor.
- WP7.2: Udvikle plakater med didaktisk fokus.
- WP7.3: Koble plakatspor med digital oplevelse.
- Output: Fysisk laeringsstoette med visuel sammenhaeng.

### WP8: Validering og iteration
- WP8.1: Udforme usability testplan og user tasks.
- WP8.2: Afvikle testscript og dokumentere fund.
- WP8.3: Prioritere og implementere slutjusteringer.
- Output: Dokumenteret forbedring pa centrale flow.

### WP9: Deliver og dokumentation
- WP9.1: Endelig kvalitetssikring af leverancekriterier.
- WP9.2: Samle feedback og afrunding pa projektperioden.
- WP9.3: Dokumentere videreudviklingsspor (bl.a. foto/video).
- Output: Faerdig platform + afsluttende dokumentation.

Nedslag: WBS'en synliggjorde, at den storste vaerdi kom fra samspillet mellem udvikling, test og prioritering.

---

## Sammenhaeng mellem Gantt, GBS og WBS

For at holde retning i projektet brugte jeg de tre styringsperspektiver sammen:

- Gantt viste hvornar arbejdet blev gennemfort.
- GBS forklarede hvorfor arbejdet var vigtigt.
- WBS beskrev hvad der konkret blev lavet.

Denne kobling gjorde det lettere for mig at vurdere, om tid, ressourcer og prioriteringer faktisk pegede mod projektets overordnede mal.

Nedslag: Projektets kvalitet blev styrket, fordi planlaegning og udforelse blev koblet direkte til mal og evaluering.

---

## Kort afrunding

Fremgangsmaden udviklede sig fra en antagelsesbaseret start til en test- og dataunderstottet proces med tydelig iteration. Double Diamond gav mig en klar struktur, mens den retroaktive Gantt-, GBS- og WBS-gennemgang gjorde det muligt at dokumentere, hvordan projektet reelt blev styret og forbedret undervejs.

Nedslag: Jeg afsluttede med en dokumenteret proces, der bandt metode, udvikling og leverance sammen i en samlet projektfortaelling.
