import type { Locale } from './languageConfig';

export const mainLanguage: Record<Locale, {
  homePage: {
    eyebrow: string;
    title: string;
    lead: string;
    statusNote: string;
    proofPoints: ReadonlyArray<{ value: string; label: string }>;
    authorityTitle: string;
    authorityCards: ReadonlyArray<{ title: string; text: string }>;
    methodTitle: string;
    methodLead: string;
    methodSteps: ReadonlyArray<{ title: string; text: string }>;
    heroCardTitle: string;
    heroCardPoints: ReadonlyArray<string>;
    trustTitle: string;
    trustPoints: ReadonlyArray<string>;
    ctaWeblab: string;
    ctaCourses: string;
    ctaContact: string;
    weblabNote: string;
    closing: string;
  };
}> = {
  da: {
    homePage: {
      eyebrow: 'Digital teknologiforståelse for skoler',
      title: 'Digital teknologiforståelse for elever og lærere i den danske folkeskole.',
      lead:
        'Praktiske forløb, der gør det nemt for dig som lærer at skabe inkluderende undervisning, hvor alle elever kan deltage, udvikle sig og skabe med teknologi.',
      statusNote:
        'Digital teknologiforståelse for skoler bliver omsat til praktiske og gennemførlige forløb med tydelig progression, klare materialer og en struktur, der fungerer i virkelige klasselokaler.',
      proofPoints: [
        {
          value: 'Praksisnær kompetenceudvikling',
          label: 'Dine elever udvikler, afprøver og forbedrer digitale løsninger i virkelige læringssituationer.',
        },
        {
          value: 'Reflekteret læring gennem iteration',
          label: 'Fejl og justeringer bruges aktivt, så eleverne opbygger mod og faglig styrke i processen.',
        },
        {
          value: 'Inkluderende didaktisk progression',
          label: 'Tydelige trin giver plads til forskellige elevforudsætninger og styrker fællesskabet i klassen.',
        },
      ],
      authorityTitle: 'Hvorfor lærere vælger NordPixel',
      authorityCards: [
        {
          title: 'Klar opstart uden overteori',
          text: 'Materialer og forløb er gjort enkle, så du hurtigt kan gå i gang uden at være specialist på forhånd.',
        },
        {
          title: 'Lærerens rolle er tydelig',
          text: 'Du faciliterer, rammesætter og støtter. Vi leverer struktur, så du kan fokusere på klassen.',
        },
        {
          title: 'Eleverne er aktive skabere',
          text: 'Eleverne undersøger digitale fænomener, bygger egne løsninger og diskuterer konsekvenser.',
        },
      ],
      methodTitle: 'Fra plan til stærk undervisning',
      methodLead:
        'En enkel, praksisnær struktur gør det let at komme i gang og sikrer progression i teknologiforståelse.',
      methodSteps: [
        {
          title: '1. Vælg målgruppe',
          text: 'Start med den klasse, I vil løfte i 7.-9. og vælg et forløb, der passer til niveauet.',
        },
        {
          title: '2. Sammensæt forløb',
          text: 'Kombiner kerneforløb og fokusmoduler, så indhold passer til tid, udstyr og lokal kontekst.',
        },
        {
          title: '3. Gennemfør i praksis',
          text: 'Korte moduler, tydelige roller og konkrete elevprodukter giver fremdrift fra lektion til lektion.',
        },
      ],
      heroCardTitle: 'I undervisningen arbejder I med',
      heroCardPoints: [
        'Digitale fænomener fra elevernes hverdag',
        'Kreativt design, kodning og undersøgelse',
        'Kritisk refleksion over teknologiens betydning',
      ],
      trustTitle: 'Det får I med i samarbejdet',
      trustPoints: [
        'Klar opstart med tydelige roller for lærere og elever.',
        'Gennemarbejdede materialer, der kan bruges direkte i undervisningen.',
        'Struktureret forløb med progression fra modul til modul.',
      ],
      ctaWeblab: 'Åbn WebLab',
      ctaCourses: 'Se forløb',
      ctaContact: 'Kontakt os',
      weblabNote: 'WebLab er et praktisk øverum til HTML/CSS i browseren. Projekter gemmes lokalt på enheden.',
      closing: 'Klar til at planlægge et valgfagsforløb, hvor eleverne går fra brugere til skabere?',
    },
  },
  en: {
    homePage: {
      eyebrow: 'Digital technology literacy for schools',
      title: 'Digital technology literacy for students and teachers in real classrooms.',
      lead:
        'Practical tracks that make it easier for you as a teacher to run inclusive lessons where every student can participate, grow, and create with technology.',
      statusNote:
        'Digital technology literacy for schools is translated into practical, classroom-ready programs with clear progression, strong teaching materials, and a structure that works in real classrooms.',
      proofPoints: [
        {
          value: 'Practice-based competence development',
          label: 'Students develop, test, and improve digital solutions in authentic classroom contexts.',
        },
        {
          value: 'Reflective learning through iteration',
          label: 'Mistakes and revisions are used as a learning resource to build confidence and problem-solving capacity.',
        },
        {
          value: 'Inclusive pedagogical progression',
          label: 'Clear stages support diverse learners while helping the whole class progress together.',
        },
      ],
      authorityTitle: 'Why teachers choose NordPixel',
      authorityCards: [
        {
          title: 'Fast start without overload',
          text: 'Teaching plans and materials are simplified so you can start quickly without being a specialist first.',
        },
        {
          title: 'Teacher role is explicit',
          text: 'You facilitate, frame, and guide. We provide structure so you can focus on student learning.',
        },
        {
          title: 'Students create, not only consume',
          text: 'Learners investigate digital phenomena, build solutions, and discuss social impact.',
        },
      ],
      methodTitle: 'From planning to strong classroom delivery',
      methodLead:
        'A simple, classroom-ready structure makes it easy to start and maintain clear progression in technology literacy.',
      methodSteps: [
        { title: '1. Pick your target group', text: 'Start with the class level you want to support and choose a fitting track.' },
        { title: '2. Compose your program', text: 'Combine core tracks and focus modules to match time, equipment, and local needs.' },
        { title: '3. Deliver with momentum', text: 'Short modules, clear roles, and concrete student outputs keep progress visible.' },
      ],
      heroCardTitle: 'In class, you work with',
      heroCardPoints: [
        "Digital phenomena from students' everyday lives",
        'Creative design, coding, and investigation',
        'Critical reflection on technology and society',
      ],
      trustTitle: 'What you get in the collaboration',
      trustPoints: [
        'A clear launch with explicit teacher and student roles.',
        'Ready-to-use teaching materials built for real classrooms.',
        'Structured programs with visible progression across modules.',
      ],
      ctaWeblab: 'Open WebLab',
      ctaCourses: 'Explore Courses',
      ctaContact: 'Contact Us',
      weblabNote: 'WebLab is a hands-on HTML/CSS workspace in the browser. Projects are stored locally on the device.',
      closing: 'Ready to plan an elective where students move from users to creators?',
    },
  },
};