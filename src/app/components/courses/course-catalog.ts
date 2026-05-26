import { type BookableOption, type FocusCourse, type ProgramTrack } from './course-types';

export const PROGRAM_TRACKS: ProgramTrack[] = [
  {
    id: 'designthinking-digital-produktionsforlob',
    title: {
      da: 'Designthinking & Digital Produktion',
      en: 'Design Thinking & Digital Production',
    },
    summary: {
      da: 'Eleverne arbejder med brugerundersøgelser, idéudvikling, visuel præsentation og konkret formidling i både print og digitale formater.',
      en: 'Students work with user research, idea development, visual presentation, and clear communication in both print and digital formats.',
    },
    subjectKey: 'design',
    targetKeys: ['mellemtrin', 'udskoling'],
    targetGroup: {
      da: 'Oplagt for 6. klasse og op.',
      en: 'Recommended for grade 6 and up.',
    },
    duration: {
      da: '3 moduler, ca. 6-8 lektioner i alt.',
      en: '3 modules, about 6-8 lessons in total.',
    },
    subjects: {
      da: 'Typisk dansk, engelsk, billedkunst og lignende fag.',
      en: 'Fits Danish, English, visual arts, and similar subjects.',
    },
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: {
      da: 'Elever samarbejder om et kreativt projekt i klasselokalet.',
      en: 'Students collaborating on a creative project in a classroom.',
    },
    timeline: [
      {
        module: { da: 'Modul 1', en: 'Module 1' },
        duration: { da: 'Kort opstart og fælles afsæt', en: 'Short kickoff and shared starting point' },
        focus: {
          da: 'Introduktion til designthinking, projektmål og observation af brugere.',
          en: 'Introduction to design thinking, project goals, and observing users.',
        },
        workload: {
          da: 'Lærer: introduktion og rammesætning. Elever: undersøger, noterer og samler inspiration.',
          en: 'Teacher: introduction and framing. Students: investigate, note findings, and collect inspiration.',
        },
        format: {
          da: 'Materialebaseret forløb uden krav om fysisk deltagelse.',
          en: 'Material-based track with no on-site requirement.',
        },
      },
      {
        module: { da: 'Modul 2', en: 'Module 2' },
        duration: { da: 'Fordybelse og produktion', en: 'Deepening and production' },
        focus: {
          da: 'Arbejdsflow i teams samt designvalg med fonte, størrelser og layout.',
          en: 'Team workflow plus design decisions with fonts, sizing, and layout.',
        },
        workload: {
          da: 'Lærer: løbende feedback og korte oplæg. Elever: udvikler idé, skitser og første udkast.',
          en: 'Teacher: ongoing feedback and short mini-lessons. Students: develop ideas, sketches, and first drafts.',
        },
        format: {
          da: 'Underviser leder arbejdet i klassen med NordPixel-materiale.',
          en: 'Teacher-led classroom flow using NordPixel material.',
        },
      },
      {
        module: { da: 'Modul 3', en: 'Module 3' },
        duration: { da: 'Afslutning og præsentation', en: 'Wrap-up and presentation' },
        focus: {
          da: 'Brugerfeedback, iteration og afslutning med dokumenteret proces.',
          en: 'User feedback, iteration, and wrap-up with a documented process.',
        },
        workload: {
          da: 'Lærer: sikrer opsamling og præsentation. Elever: færdiggør, præsenterer og reflekterer over resultatet.',
          en: 'Teacher: ensures recap and presentation. Students: finish, present, and reflect on the result.',
        },
        format: {
          da: 'Afrunding kan gennemføres fuldt lokalt på skolen.',
          en: 'The wrap-up can be delivered fully on-site at the school.',
        },
      },
    ],
  },
  {
    id: 'webdesign-forlob',
    title: {
      da: 'Webdesign',
      en: 'Web Design',
    },
    summary: {
      da: 'Et praktisk forløb hvor eleverne bygger egne hjemmesider i WebLab med HTML og CSS, og arbejder med både design og funktion.',
      en: 'Students learn to build simple websites in WebLab with HTML and CSS, combining structure, layout, and function.',
    },
    subjectKey: 'web',
    targetKeys: ['udskoling', 'gymnasium'],
    targetGroup: {
      da: 'Oplagt fra 7. klasse og op.',
      en: 'Recommended for grade 7 and up.',
    },
    duration: {
      da: '5 moduler, fordelt over forberedelse, workshop og efterbearbejdning.',
      en: '5 modules, split across preparation, workshop, and follow-up.',
    },
    subjects: {
      da: 'Velegnet i projektforløb på tværs af dansk, engelsk, samfundsfag og IT.',
      en: 'Well suited for project-based learning across language arts, social studies, and IT.',
    },
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: {
      da: 'Kodevisning på en bærbar computer under webundervisning.',
      en: 'Code editor on a laptop during a web learning session.',
    },
    timeline: [
      {
        module: { da: 'Modul 1', en: 'Module 1' },
        duration: { da: 'Forberedelse og struktur', en: 'Preparation and structure' },
        focus: {
          da: 'Ca. 2 lektioner med underviserstyret introduktionsmateriale i klassen.',
          en: 'About 2 lessons of teacher-led prep material in class.',
        },
        workload: {
          da: 'Lærerens rolle er at skabe tydelige rammer. Eleverne planlægger sider, indhold og visuel retning.',
          en: 'Teacher: establishes clear structure. Students: plan pages, content, and visual direction.',
        },
        format: {
          da: 'Forberedelse i klassen før workshop.',
          en: 'Classroom preparation before workshop day.',
        },
      },
      {
        module: { da: 'Modul 2', en: 'Module 2' },
        duration: { da: 'Workshop og fælles opstart', en: 'Workshop and shared kickoff' },
        focus: {
          da: 'Workshop med NordPixel i klassen og fælles opstart af egne sider.',
          en: 'NordPixel-led workshop and shared kick-off of student sites.',
        },
        workload: {
          da: 'Lærerens rolle er at koordinere og følge op. Eleverne bygger første struktur og arbejder med HTML/CSS i fællesskab.',
          en: 'Teacher: coordinates the class and follows up. Students: build the first structure and work together in HTML/CSS.',
        },
        format: {
          da: 'NP-format: workshop med underviser fra NordPixel.',
          en: 'NP format: workshop with a NordPixel instructor.',
        },
      },
      {
        module: { da: 'Modul 3', en: 'Module 3' },
        duration: { da: 'Byg, test og forbedr', en: 'Build, test, and improve' },
        focus: {
          da: 'Efterforløb hvor elever bygger, tester og forbedrer egne hjemmesider.',
          en: 'Follow-up where students build, test, and improve their own websites.',
        },
        workload: {
          da: 'Lærerens rolle er at give feedback og hjælpe med prioritering. Eleverne itererer, retter fejl og færdiggør projektet.',
          en: 'Teacher: gives feedback and helps prioritise. Students: iterate, fix issues, and finish the project.',
        },
        format: {
          da: 'Kan fortsætte lokalt med de udleverede materialer.',
          en: 'Can continue locally using the supplied material set.',
        },
      },
    ],
  },
  {
    id: 'kunstig-intelligens-forlob',
    title: {
      da: 'Kunstig Intelligens',
      en: 'Artificial Intelligence',
    },
    summary: {
      da: 'Et kort forløb om AI i elevernes hverdag, hvor de lærer at teste, vurdere og bruge teknologien ansvarligt.',
      en: 'A short track that gives students a basic understanding of artificial intelligence, prompt work, and responsible use.',
    },
    subjectKey: 'ai',
    targetKeys: ['mellemtrin', 'udskoling', 'gymnasium'],
    targetGroup: {
      da: 'Kan tilpasses mellemtrin og udskoling.',
      en: 'Can be adapted for middle grades, lower secondary, and upper secondary.',
    },
    duration: {
      da: '3 moduler, i alt ca. 8 lektioner.',
      en: '3 modules, roughly 8 lessons in total.',
    },
    subjects: {
      da: 'Kan kobles til dansk, samfundsfag, historie og teknologiforståelse.',
      en: 'Can connect to language arts, civics, history, and digital literacy.',
    },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    imageAlt: {
      da: 'Abstrakt visualisering af kunstig intelligens og netværk.',
      en: 'Abstract visualization of artificial intelligence and networks.',
    },
    timeline: [
      {
        module: { da: 'Modul 1', en: 'Module 1' },
        duration: { da: 'Introduktion og begreber', en: 'Introduction and core concepts' },
        focus: {
          da: 'Hvad AI er, hvor data kommer fra, og hvordan modeller lærer.',
          en: 'What AI is, where data comes from, and how models learn.',
        },
        workload: {
          da: 'Lærer: forklarer begreber og styrer klassesamtalen. Elever: undersøger eksempler og sorterer spørgsmål.',
          en: 'Teacher: explains concepts and guides the class discussion. Students: explore examples and sort questions.',
        },
        format: {
          da: 'Kan gennemføres uden fysisk deltagelse fra NordPixel.',
          en: 'Can be delivered without on-site NordPixel participation.',
        },
      },
      {
        module: { da: 'Modul 2', en: 'Module 2' },
        duration: { da: 'Promptarbejde og eksperimenter', en: 'Prompt work and experiments' },
        focus: {
          da: 'Promptforståelse: fra ide til tydelig instruktion og test af svar.',
          en: 'Prompt literacy: from idea to clear instruction and testing results.',
        },
        workload: {
          da: 'Lærer: sætter rammer for ansvarlig brug. Elever: formulerer prompts, tester output og vurderer kvalitet.',
          en: 'Teacher: sets the frame for responsible use. Students: write prompts, test output, and judge quality.',
        },
        format: {
          da: 'Live-session med NordPixel kan tilkobles efter behov.',
          en: 'A live NordPixel session can be added when needed.',
        },
      },
      {
        module: { da: 'Modul 3', en: 'Module 3' },
        duration: { da: 'Kritik, konsekvenser og refleksion', en: 'Critique, consequences, and reflection' },
        focus: {
          da: 'Kildekritik, bias, konsekvenser og ansvarlig anvendelse i skolearbejde.',
          en: 'Source criticism, bias, consequences, and responsible use in schoolwork.',
        },
        workload: {
          da: 'Lærer: samler op og kobler til faglige mål. Elever: præsenterer erfaringer og diskuterer etiske valg.',
          en: 'Teacher: wraps up and connects to learning goals. Students: present findings and discuss ethical choices.',
        },
        format: {
          da: 'Opsamling kan afvikles af underviser med klassemateriale.',
          en: 'Final reflection can be led by the classroom teacher.',
        },
      },
    ],
  },
];

export const FOCUS_COURSES: FocusCourse[] = [
  {
    id: 'html-css-udvidet',
    title: {
      da: 'HTML & CSS udvidet',
      en: 'Extended HTML & CSS',
    },
    description: {
      da: 'Tilkoblingsmodul der styrker elevernes arbejdsevne i webdesign. Kan gennemføres af klassens underviser eller med NordPixel i klassen.',
      en: 'Add-on module that strengthens student fluency in web design. Can be run by the classroom teacher or with NordPixel in class.',
    },
    targetKeys: ['mellemtrin', 'udskoling'],
    duration: {
      da: '1-2 moduler',
      en: '1-2 modules',
    },
    audience: {
      da: 'For elever, der allerede kan lidt HTML og CSS.',
      en: 'For students who already know a little HTML and CSS.',
    },
    bookingHint: {
      da: 'God som hurtig udvidelse til et eksisterende webforløb.',
      en: 'A good quick extension to an existing web track.',
    },
  },
  {
    id: 'javascript-workshop',
    title: {
      da: 'JavaScript workshop',
      en: 'JavaScript Workshop',
    },
    description: {
      da: 'En dags workshop med reel programmering for de større klasser. For elever med lyst til at gå et niveau dybere.',
      en: 'A full-day coding workshop for older students. Ideal for learners ready to go deeper.',
    },
    targetKeys: ['udskoling', 'gymnasium'],
    duration: {
      da: '1 workshopdag',
      en: '1 workshop day',
    },
    audience: {
      da: 'For elever, der vil prøve programmering i praksis.',
      en: 'For students who want to try coding in practice.',
    },
    bookingHint: {
      da: 'Kan bookes som selvstændig dag eller som del af et længere forløb.',
      en: 'Can be booked as a standalone day or as part of a longer track.',
    },
  },
  {
    id: 'generativ-ai',
    title: {
      da: 'Generativ AI',
      en: 'Generative AI',
    },
    description: {
      da: 'Hvad det er, hvordan det produceres, hvordan det genkendes, og hvilke konsekvenser det kan have i samfund og skole.',
      en: 'What it is, how it is generated, how to identify it, and the consequences it can have in school and society.',
    },
    targetKeys: ['mellemtrin', 'udskoling', 'gymnasium'],
    duration: {
      da: '1-3 moduler',
      en: '1-3 modules',
    },
    audience: {
      da: 'Passer til klasser, der arbejder med teknologi, etik og kildekritik.',
      en: 'For classes working with technology, ethics, and source criticism.',
    },
    bookingHint: {
      da: 'Kan kobles direkte til fag, hvor eleverne undersøger medier og svarmaskiner.',
      en: 'Can be integrated directly into subjects where students examine media, source use, and AI-generated responses.',
    },
  },
  {
    id: 'computationel-tankegang',
    title: {
      da: 'Computationel tankegang',
      en: 'Computational Thinking',
    },
    description: {
      da: 'Arbejdsmateriale til naturfag, matematik og fag med videnskabelige metoder. Fokus på fejl, systemer og hvordan apparater tænker.',
      en: 'Learning materials for science, mathematics, and inquiry-based subjects. Focus on debugging, systems thinking, and how digital systems process information.',
    },
    targetKeys: ['indskoling', 'mellemtrin'],
    duration: {
      da: '1-2 moduler',
      en: '1-2 modules',
    },
    audience: {
      da: 'For de yngre klasser og forløb med fokus på logik og struktur.',
      en: 'For younger classes and tracks with a focus on logic and structure.',
    },
    bookingHint: {
      da: 'Velegnet som kort faglig workshop eller som bro til andre forløb.',
      en: 'Well suited as a short workshop or as a bridge into other tracks.',
    },
  },
];

export const BOOKABLE_OPTIONS: BookableOption[] = [
  {
    id: 'mit-eget-forlob',
    title: {
      da: 'Mit eget forløb',
      en: 'My custom track',
    },
    kind: 'track',
  },
  ...PROGRAM_TRACKS.map((track) => ({
    id: track.id,
    title: track.title,
    kind: 'track' as const,
  })),
  ...FOCUS_COURSES.map((course) => ({
    id: course.id,
    title: course.title,
    kind: 'focus' as const,
  })),
];

export const BOOKING_EMAIL = 'thomsenwork@outlook.dk';
