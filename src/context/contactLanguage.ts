import type { Locale } from './languageConfig';

export const contactLanguage: Record<Locale, {
  contactPage: {
    eyebrow: string;
    title: string;
    intro: string;
    proofPoints: ReadonlyArray<{ value: string; label: string }>;
    partnershipTitle: string;
    partnershipPoints: ReadonlyArray<string>;
    methodTitle: string;
    methodSteps: ReadonlyArray<{ title: string; text: string }>;
    contactTitle: string;
    contactIntro: string;
    contactAction: string;
    contactLabelEmail: string;
    contactLabelCvr: string;
    contactLabelLinkedin: string;
    authorityTitle: string;
    authorityCards: ReadonlyArray<{ title: string; text: string }>;
    closing: string;
  };
}> = {
  da: {
    contactPage: {
      eyebrow: 'NordPixel for skoler og uddannelse',
      title: 'Kontakt NordPixel og lær teamet bag at kende',
      intro:
        'Vi designer undervisningsforløb i digital kreativitet, web og AI, der fungerer i virkelige klasselokaler. NordPixel kombinerer tydelig didaktik, stærke materialer og en professionel leverancemodel, så skoler kan implementere forløbene med ro og høj kvalitet.',
      proofPoints: [
        { value: 'Klar struktur', label: 'Forløb med tydelig progression og konkrete mål' },
        { value: 'Skoleklar drift', label: 'Planlagt onboarding og afstemt med lærernes hverdag' },
        { value: 'Langsigtet værdi', label: 'Kompetenceløft for både elever og undervisere' },
      ],
      partnershipTitle: 'Hvorfor skoler vælger NordPixel',
      partnershipPoints: [
        'Vi oversætter komplekse teknologier til undervisning, der er fagligt stærk og let at anvende.',
        'Vi leverer forløb, materialer og kommunikation med høj professionalisme fra første dialog.',
        'Vi er tydelige på forventninger, tidsplan og læringsudbytte, så ledelse og lærere kan planlægge trygt.',
      ],
      methodTitle: 'Sådan arbejder vi',
      methodSteps: [
        {
          title: '1. Afklaring',
          text: 'Vi kortlægger målgruppe, faglig retning og rammer på jeres skole. Vi afklarer hvilke læringsmål I prioriterer, og hvordan forløbet bedst passer ind i jeres eksisterende planlægning. Vi gennemgår praktiske forhold som holdstørrelse, tidsramme og udstyr, så alle har realistiske forventninger. Vi samler beslutningerne i en tydelig ramme, der giver ro før opstart. Vi bruger afklaringen til at sikre, at didaktik og drift hænger sammen fra dag ét.',
        },
        {
          title: '2. Design',
          text: 'Vi tilpasser forløb og materialer, så de matcher jeres niveau og ambition. Indholdet struktureres i overskuelige moduler med progression, så elever og undervisere kan følge med uden unødig kompleksitet. Opgaver, eksempler og instruktioner justeres til den konkrete elevgruppe og de faglige mål I arbejder med. Vi kvalitetssikrer sprogtone og materialeflow, så det er let at bruge i klasselokalet. Resultatet er et forløb, der føles både fagligt skarpt og praktisk anvendeligt.',
        },
        {
          title: '3. Leverance',
          text: 'Vi gennemfører med tydelig opfølgning, så kvaliteten holder i praksis. Undervejs holder vi kommunikationen enkel og konkret, så lærere og ledelse altid ved, hvad næste skridt er. Vi samler løbende feedback og justerer, hvis noget skal fintrimmes i tempo eller format. Efter forløbet deler vi anbefalinger til videre arbejde, så værdien forankres i den daglige undervisning. På den måde får I ikke kun en god opstart, men også en stabil model for fortsættelse.',
        },
      ],
      contactTitle: 'Kontakt os direkte',
      contactIntro: 'Skriv til os for en uforpligtende afklaring af muligheder, pris og opstart.',
      contactAction: 'Skriv til NordPixel',
      contactLabelEmail: 'Email',
      contactLabelCvr: 'CVR',
      contactLabelLinkedin: 'LinkedIn',
      authorityTitle: 'Det I kan forvente af samarbejdet',
      authorityCards: [
        {
          title: 'Faglig troværdighed',
          text: 'Vi bygger undervisning med fokus på progression, relevans og høj didaktisk kvalitet.',
        },
        {
          title: 'Professionel kommunikation',
          text: 'I får klare beslutningspunkter, konkrete anbefalinger og hurtig opfølgning.',
        },
        {
          title: 'Skalerbar implementering',
          text: 'Forløb kan tilpasses enkelthold, årgange eller tværgående indsatser på skolen.',
        },
      ],
      closing:
        'NordPixel hjælper skoler med at gøre digital læring konkret, kreativ og implementerbar fra første undervisningsgang.',
    },
  },
  en: {
    contactPage: {
      eyebrow: 'NordPixel for schools and education',
      title: 'Contact NordPixel and meet the team',
      intro:
        'We design educational programs in digital creativity, web development, and AI that work in real classrooms. NordPixel combines clear pedagogy, strong materials, and a reliable delivery model, so schools can implement programs with confidence and high quality.',
      proofPoints: [
        { value: 'Clear structure', label: 'Programs with visible progression and concrete outcomes' },
        { value: 'Classroom-ready', label: 'Planned onboarding aligned with teachers and schedules' },
        { value: 'Long-term impact', label: 'Capability growth for both students and educators' },
      ],
      partnershipTitle: 'Why schools choose NordPixel',
      partnershipPoints: [
        'We translate complex technology into classroom learning that is both rigorous and practical.',
        'We deliver programs, materials, and communication with high professional standards from day one.',
        'We make expectations, timelines, and learning outcomes explicit so leadership and staff can plan confidently.',
      ],
      methodTitle: 'How we work',
      methodSteps: [
        {
          title: '1. Discovery',
          text: 'We map target groups, subject goals, and practical constraints with your team. We align priorities so the program supports both classroom reality and leadership expectations. We review timing, staffing, and available equipment to avoid friction during rollout. We document decisions in a clear starting framework that everyone can act on. This gives your school a calm and reliable foundation before implementation begins.',
        },
        {
          title: '2. Design',
          text: 'We adapt program structure and materials to your level and ambitions. Content is organized into focused modules with clear progression so teachers can apply it confidently. We tune tasks, examples, and instructions to your student profile and curriculum priorities. We also review wording and material flow to keep delivery practical in real schedules. The outcome is a program that is academically strong and operationally realistic.',
        },
        {
          title: '3. Delivery',
          text: 'We execute with clear follow-up to ensure quality in real teaching contexts. Throughout delivery we keep communication concise so staff always know what comes next. We gather feedback continuously and adjust pace or format where needed. After completion we share concrete recommendations that support long-term adoption. This ensures you get both a strong launch and a sustainable model going forward.',
        },
      ],
      contactTitle: 'Contact us directly',
      contactIntro: 'Reach out for a no-obligation conversation about scope, pricing, and launch.',
      contactAction: 'Email NordPixel',
      contactLabelEmail: 'Email',
      contactLabelCvr: 'CVR',
      contactLabelLinkedin: 'LinkedIn',
      authorityTitle: 'What you can expect from the collaboration',
      authorityCards: [
        {
          title: 'Educational authority',
          text: 'We build programs around progression, relevance, and robust pedagogical quality.',
        },
        {
          title: 'Professional communication',
          text: 'You get clear decisions, actionable recommendations, and fast follow-up.',
        },
        {
          title: 'Scalable implementation',
          text: 'Programs can be tailored for single classes, year groups, or school-wide initiatives.',
        },
      ],
      closing: 'NordPixel helps schools make digital learning concrete, creative, and truly implementable from the first lesson.',
    },
  },
};