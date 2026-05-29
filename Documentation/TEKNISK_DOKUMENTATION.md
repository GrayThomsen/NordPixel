# Teknisk dokumentation

GitHub-repositoriet for projektet kan findes her: https://github.com/GrayThomsen/NordPixel

Denne dokumentation beskriver den tekniske platform og de vigtigste kodevalg i NordPixel. Jeg har valgt at fremhæve de dele, der har størst betydning for projektets funktion og for den måde, siden understøtter undervisning, booking og praktisk webarbejde.

## WebLab og Monaco

Et af de vigtigste tekniske valg i projektet er WebLab, som er bygget som et browserbaseret arbejdsrum til HTML, CSS og JavaScript. Her bruger jeg Monaco-editoren, som også ligger bag Visual Studio Code, fordi den giver en mere professionel og undervisningsrelevant skriveoplevelse end en almindelig tekstboks. Det betyder, at eleverne får syntax highlighting, tydelig filstruktur og en editor, der føles tæt på det værktøj, mange møder i praksis.

I koden ligger WebLab i [src/app/components/WebLab.tsx](src/app/components/WebLab.tsx). Her har jeg valgt at strukturere projektet som flere filer i stedet for én samlet tekstblok, så det minder mere om et rigtigt webprojekt. Det gør det lettere at forstå sammenhængen mellem index.html, styles.css og script.js. Jeg har også lavet en preview-løsning, så ændringer kan ses med det samme i browseren, hvilket gør WebLab mere anvendeligt i en undervisningssituation.

Jeg har bevidst valgt lokal lagring i browseren til projekterne, så arbejdet ikke forsvinder, hvis siden lukkes ned. Det er en enkel og robust løsning, som passer godt til et skoleværktøj, hvor eleverne ofte arbejder på fælles eller skiftende enheder. Samtidig har jeg gjort det muligt at gemme og genindlæse projekter, og der er tænkt på både nye projekter og ældre gemte versioner. Det viser, at løsningen ikke bare er en demo, men et praktisk værktøj med fokus på læring og kontinuitet.

## Cookies og Google Analytics

På siden bruger jeg et cookie-samtykke, fordi jeg gerne vil være tydelig omkring dataindsamling og samtidig respektere brugerens valg. Det tekniske grundlag ligger i [src/app/components/CookieConsent.tsx](src/app/components/CookieConsent.tsx), og komponenten bliver indsat globalt i [src/app/layout.tsx](src/app/layout.tsx), så den gælder på hele sitet.

Jeg har valgt en simpel samtykkemodel med tre muligheder: nødvendige cookies, afvisning eller accept. Det betyder, at Google Analytics først bliver indlæst, når brugeren aktivt har accepteret det. Jeg bruger derfor ikke analytics som standard, men kun efter samtykke. Det er vigtigt i et projekt som dette, fordi det viser, at teknisk funktionalitet og privatlivshensyn er tænkt sammen fra start.

Samtykket bliver gemt i browserens localStorage, så brugeren ikke bliver spurgt igen hver gang. Det gør oplevelsen mere rolig og mindre forstyrrende. Når analytics bliver aktiveret, indsættes Google-tagget dynamisk med Next.js Script-komponenten, så tracking-scriptet kun hentes i den rigtige situation. For mig er det en god løsning, fordi den både er enkel at forstå og tydelig i forhold til ansvarlig datahåndtering.

## Forløb og indkøbskurv

Siden med forløb er bygget til at præsentere undervisningsforløb på en overskuelig måde og samtidig understøtte en bookingproces. Oversigten ligger i [src/app/components/CoursesContent.tsx](src/app/components/CoursesContent.tsx), mens selve kurv-logikken ligger i [src/app/components/courses/booking-storage.ts](src/app/components/courses/booking-storage.ts).

Jeg har valgt at strukturere forløbene som data i stedet for hårdkodet tekst, fordi det gør løsningen lettere at vedligeholde og udvide. Det passer godt til et projekt, hvor indholdet kan ændre sig over tid, og hvor flere forløb skal kunne præsenteres på samme måde. Derudover er der filtrering efter målgruppe, så brugeren hurtigt kan finde relevante forløb uden at skulle læse alt igennem først.

Indkøbskurven fungerer som en midlertidig samling af valgte forløb og fokusmoduler. Her bruger jeg localStorage, så valgene bevares, selv hvis brugeren skifter side eller kommer tilbage senere. Jeg har også valgt at validere data, når kurven læses ind, så kun tilladte kursus-id'er bliver brugt. Det gør løsningen mere robust og reducerer risikoen for ugyldige data.

Når et forløb lægges i kurven, vises der en lille bekræftelse, så brugeren får feedback på handlingen. Kurvoplevelsen er derfor ikke kun teknisk funktionel, men også designet til at give en tydelig og enkel brugerrejse. For mig er det en vigtig del af projektet, fordi bookingflowet skal føles let og overskueligt for skoler og lærere.

## EmailJS og bookingformularen

Selve bookingformularen er lavet med EmailJS, så formularen kan sende en mail direkte fra klienten uden at jeg behøver bygge en egen backend. Koden ligger i [src/app/components/CoursesBookingContent.tsx](src/app/components/CoursesBookingContent.tsx). Det er en praktisk løsning, fordi projektet dermed bliver lettere at hoste og vedligeholde, samtidig med at funktionaliteten stadig er professionel.

Jeg bruger miljøvariabler til EmailJS-konfigurationen, så service-id, template-id og public key ikke er skrevet direkte ind i komponenten. Det er en mere sikker og fleksibel løsning, fordi opsætningen kan ændres uden at ændre selve komponenten. Formularen samler også information om de valgte forløb, så mailen indeholder både kontaktoplysninger, valgte kurser og en prisoversigt.

Jeg har tilføjet status-håndtering til formularen, så brugeren får tydelig feedback, hvis der mangler en konfiguration, hvis der ikke er valgt noget i kurven, eller hvis afsendelsen fejler. Når mailen sendes korrekt, bliver kurven ryddet, og formularen nulstilles. Det gør flowet mere gennemført og viser, at booking ikke bare er en statisk formular, men en samlet proces med tydelig afslutning.

## Samlet vurdering

Jeg har valgt tekniske løsninger, der understøtter projektets mål om at være praktisk, undervisningsorienteret og let at arbejde med. WebLab giver eleverne et konkret arbejdsrum til webudvikling, cookie-løsningen viser ansvarlig håndtering af brugerdata, kurven gør booking mere struktureret, og EmailJS gør det muligt at afslutte processen uden en tung backend-løsning.

Det vigtigste for mig har været at bygge et system, som både er teknisk solidt og enkelt nok til at fungere i en skolekontekst. Derfor har jeg prioriteret løsninger, der er tydelige, vedligeholdelige og nemme at forstå for både brugere og undervisere.
