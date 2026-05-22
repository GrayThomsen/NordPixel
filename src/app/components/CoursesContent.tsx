'use client';

import Image from 'next/image';
import { Clock3, Layers3, Send, Users, X } from 'lucide-react';
import { useMemo, useState, type FormEvent } from 'react';
import { useLanguage } from '../../context/LanguageContext';

type LocalizedText = {
  da: string;
  en: string;
};

type TimelineStep = {
  module: LocalizedText;
  duration: LocalizedText;
  focus: LocalizedText;
  workload: LocalizedText;
  format: LocalizedText;
};

type ProgramTrack = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  subjectKey: string;
  targetKey: string;
  targetGroup: LocalizedText;
  duration: LocalizedText;
  subjects: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  timeline: TimelineStep[];
};

type FocusCourse = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  targetKeys: string[];
  duration: LocalizedText;
  audience: LocalizedText;
  bookingHint: LocalizedText;
};

type BookableOption = {
  id: string;
  title: LocalizedText;
  kind: 'track' | 'focus';
};

const PROGRAM_TRACKS: ProgramTrack[] = [
  {
    id: 'designthinking-digital-produktionsforlob',
    title: {
      da: 'Designthinking & Digital Produktion',
      en: 'Design Thinking & Digital Production',
    },
    summary: {
      da: 'Eleverne arbejder med brugerundersøgelser, idéudvikling, visuel præsentation og konkret formidling i både print og digitale formater.',
      en: 'Students work with user research, ide development, visual presentation, and clear communication in both print and digital formats.',
    },
    subjectKey: 'design',
    targetKey: 'grade6plus',
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
          en: 'Wrap-up can run fully local at the school.',
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
      da: 'Eleverne lærer at opbygge enkle hjemmesider i WebLab med HTML og CSS, hvor struktur, layout og funktion tænkes sammen.',
      en: 'Students learn to build simple websites in WebLab with HTML and CSS, combining structure, layout, and function.',
    },
    subjectKey: 'web',
    targetKey: 'grade7plus',
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
      en: 'Great for project-based work across language, social studies, and IT.',
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
          da: 'Lærer: gennemgang af mål og begreber. Elever: planlægger sider, indhold og visuel retning.',
          en: 'Teacher: reviews goals and concepts. Students: plan pages, content, and visual direction.',
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
          da: 'Lærer: koordinerer klassen og følger op. Elever: bygger første struktur og arbejder med HTML/CSS i fællesskab.',
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
          da: 'Lærer: giver feedback og hjælper med prioritering. Elever: itererer, retter fejl og færdiggør projektet.',
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
      da: 'Et kort forløb der giver eleverne en grundlæggende forståelse af kunstig intelligens, promptarbejde og ansvarlig anvendelse.',
      en: 'A short track that gives students a basic understanding of artificial intelligence, prompt work, and responsible use.',
    },
    subjectKey: 'ai',
    targetKey: 'middle-upper',
    targetGroup: {
      da: 'Kan tilpasses mellemtrin og udskoling.',
      en: 'Can be adapted for middle and upper grades.',
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
          en: 'Can run without physical NordPixel presence.',
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

const FOCUS_COURSES: FocusCourse[] = [
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
      en: 'Can be tied directly to subjects where students examine media and response tools.',
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
      en: 'Learning material for science, mathematics, and method-based subjects. Focus on errors, systems, and how devices think.',
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

const BOOKABLE_OPTIONS: BookableOption[] = [
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

const BOOKING_EMAIL = 'thomsenwork@outlook.dk';

export function CoursesContent() {
  const { dictionary, locale } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [subjectQuery, setSubjectQuery] = useState('');
  const [targetFilter, setTargetFilter] = useState('all');
  const [selectedQuantities, setSelectedQuantities] = useState<Record<string, number>>({});
  const [form, setForm] = useState({
    name: '',
    school: '',
    email: '',
    message: '',
  });
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'error'>('idle');

  const translate = (value: LocalizedText) => value[locale];
  const bookingOptions = useMemo(() => BOOKABLE_OPTIONS, []);
  const visibleTracks = useMemo(
    () =>
      PROGRAM_TRACKS.filter((track) => {
        const subjectMatches =
          !subjectQuery ||
          [track.title.da, track.title.en, track.summary.da, track.summary.en, track.subjects.da, track.subjects.en]
            .join(' ')
            .toLowerCase()
            .includes(subjectQuery.toLowerCase());
        const targetMatches = targetFilter === 'all' || track.targetKey === targetFilter;
        return subjectMatches && targetMatches;
      }),
    [subjectQuery, targetFilter],
  );

  const visibleFocusCourses = useMemo(
    () =>
      FOCUS_COURSES.filter((course) => {
        const searchSpace = [course.title.da, course.title.en, course.description.da, course.description.en, course.audience.da, course.audience.en, course.bookingHint.da, course.bookingHint.en]
          .join(' ')
          .toLowerCase();
        const subjectMatches = !subjectQuery || searchSpace.includes(subjectQuery.toLowerCase());
        const targetMatches = targetFilter === 'all' || course.targetKeys.includes(targetFilter);
        return subjectMatches && targetMatches;
      }),
    [subjectQuery, targetFilter],
  );

  const copy = {
    da: {
      filterTitle: 'Filtrér forløb',
      filterSubjectLabel: 'Søg på ord',
      filterSubjectPlaceholder: 'Skriv et emne, tema eller ord',
      filterTargetLabel: 'Målgruppe',
      filterAllSubjects: 'Alle fag',
      filterAllTargets: 'Alle målgrupper',
      filterTargetIndskoling: 'Indskoling',
      filterTargetMellemtrin: 'Mellemtrin',
      filterTargetUdskoling: 'Udskoling',
      filterTargetGymnasium: 'Gymnasium',
      filterReset: 'Ryd filter',
      filterTracksResult: 'forløb',
      filterFocusResult: 'fokuskurser',
      filterNoResults: 'Ingen forløb matcher det valgte filter.',
      bookingButton: 'Book forløb',
      modalTitle: 'Book forløb og kurser',
      modalIntro: 'Vælg de ønskede forløb/kurser og angiv antal.',
      modalSelectionLabel: 'Valgte tilbud',
      modalSelectionHint: 'Du kan vælge flere tilbud og justere antal direkte her.',
      modalContactLabel: 'Kontaktoplysninger',
      bookingSummaryCountUnit: 'valg',
      sectionTitle: 'Valg og antal',
      sectionEmpty: 'Vælg mindst ét tilbud i listen nedenfor.',
      quantityLabel: 'Antal',
      kindTrack: 'Forløb',
      kindFocus: 'Fokuskursus',
      removeSelection: 'Fjern',
      nameLabel: 'Navn',
      schoolLabel: 'Skole',
      emailLabel: 'Email',
      messageLabel: 'Kommentar',
      messagePlaceholder: 'Skriv gerne klassetrin, ønsket periode og særlige ønsker.',
      submitLabel: 'Send bookingforespørgsel',
      closeLabel: 'Luk',
      selectError: 'Vælg mindst ét forløb eller kursus.',
    },
    en: {
      filterTitle: 'Filter Tracks',
      filterSubjectLabel: 'Search by word',
      filterSubjectPlaceholder: 'Search by topic, theme, or word',
      filterTargetLabel: 'Target group',
      filterAllSubjects: 'All subjects',
      filterAllTargets: 'All target groups',
      filterTargetIndskoling: 'Lower primary',
      filterTargetMellemtrin: 'Middle grades',
      filterTargetUdskoling: 'Upper secondary',
      filterTargetGymnasium: 'Gymnasium',
      filterReset: 'Clear filter',
      filterTracksResult: 'tracks',
      filterFocusResult: 'focus courses',
      filterNoResults: 'No tracks match the selected filter.',
      bookingButton: 'Book Track',
      modalTitle: 'Book Tracks and Courses',
      modalIntro: 'Choose the requested tracks/courses and set quantities.',
      modalSelectionLabel: 'Selected items',
      modalSelectionHint: 'You can choose multiple items and adjust quantities here.',
      modalContactLabel: 'Contact information',
      bookingSummaryCountUnit: 'selections',
      sectionTitle: 'Selection and quantity',
      sectionEmpty: 'Select at least one item below.',
      quantityLabel: 'Quantity',
      kindTrack: 'Track',
      kindFocus: 'Focus Course',
      removeSelection: 'Remove',
      nameLabel: 'Name',
      schoolLabel: 'School',
      emailLabel: 'Email',
      messageLabel: 'Notes',
      messagePlaceholder: 'Share grade level, preferred timing, and special requests.',
      submitLabel: 'Send Booking Request',
      closeLabel: 'Close',
      selectError: 'Select at least one track or course.',
    },
  }[locale];

  const targetOptions = [
    { id: 'indskoling', label: copy.filterTargetIndskoling },
    { id: 'mellemtrin', label: copy.filterTargetMellemtrin },
    { id: 'udskoling', label: copy.filterTargetUdskoling },
    { id: 'gymnasium', label: copy.filterTargetGymnasium },
  ];

  const openBooking = (initialId: string) => {
    setBookingOpen(true);
    setBookingStatus('idle');
    setSelectedQuantities((prev) => ({
      ...prev,
      [initialId]: prev[initialId] ?? 1,
    }));
  };

  const toggleSelection = (optionId: string, selected: boolean) => {
    setBookingStatus('idle');
    setSelectedQuantities((prev) => {
      if (selected) {
        return { ...prev, [optionId]: prev[optionId] ?? 1 };
      }
      const next = { ...prev };
      delete next[optionId];
      return next;
    });
  };

  const updateQuantity = (optionId: string, value: string) => {
    const quantity = Number(value);
    if (!Number.isFinite(quantity) || quantity < 1) {
      return;
    }
    setSelectedQuantities((prev) => ({ ...prev, [optionId]: quantity }));
  };

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const selected = bookingOptions.filter((option) => selectedQuantities[option.id]);

    if (!selected.length) {
      setBookingStatus('error');
      return;
    }

    const chosenLines = selected
      .map((option) => {
        const kind = option.kind === 'track' ? copy.kindTrack : copy.kindFocus;
        return `${kind}: ${translate(option.title)} x${selectedQuantities[option.id]}`;
      })
      .join('\n');

    const body = [
      `${copy.nameLabel}: ${form.name || '-'}`,
      `${copy.schoolLabel}: ${form.school || '-'}`,
      `${copy.emailLabel}: ${form.email || '-'}`,
      '',
      `${copy.sectionTitle}:`,
      chosenLines,
      '',
      `${copy.messageLabel}:`,
      form.message || '-',
    ].join('\n');

    const subject = locale === 'da' ? 'Bookingforespørgsel - NordPixel' : 'Booking request - NordPixel';
    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setBookingOpen(false);
  };

  const selectedBookingItems = bookingOptions.filter((option) => selectedQuantities[option.id]);

  return (
    <main className="courses-page">
      <section className="courses-page__hero">
        <h1>{dictionary.courses.title}</h1>
        <p>{dictionary.courses.intro}</p>
      </section>

      <section className="courses-section" aria-label={copy.filterTitle}>
        <header className="courses-section__header">
          <div className="courses-filters__heading">
            <h2>{copy.filterTitle}</h2>
            <p>
              {visibleTracks.length} {copy.filterTracksResult} · {visibleFocusCourses.length} {copy.filterFocusResult}
            </p>
          </div>

          <div className="courses-filters">
            <label className="courses-filters__field">
              <span>{copy.filterSubjectLabel}</span>
              <input
                type="search"
                value={subjectQuery}
                onChange={(event) => setSubjectQuery(event.target.value)}
                placeholder={copy.filterSubjectPlaceholder}
              />
            </label>
            <label className="courses-filters__field">
              <span>{copy.filterTargetLabel}</span>
              <select value={targetFilter} onChange={(event) => setTargetFilter(event.target.value)}>
                <option value="all">{copy.filterAllTargets}</option>
                {targetOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <button type="button" className="courses-filters__reset" onClick={() => {
              setSubjectQuery('');
              setTargetFilter('all');
            }}>
              {copy.filterReset}
            </button>
          </div>
        </header>

        <div className="courses-timelines">
          {visibleTracks.length ? visibleTracks.map((track, index) => (
            <article key={track.id} className="timeline-track" aria-label={translate(track.title)}>
              <div className="timeline-track__content">
                <div className="timeline-track__heading-row">
                  <h3>{translate(track.title)}</h3>
                  <button type="button" className="timeline-track__book-button timeline-track__book-button--subtle" onClick={() => openBooking(track.id)}>
                    {copy.bookingButton}
                  </button>
                </div>
                <p className="timeline-track__summary">{translate(track.summary)}</p>

                <ul className="timeline-track__meta" aria-label={dictionary.courses.programsTitle}>
                  <li>
                    <Clock3 aria-hidden="true" />
                    <div>
                      <p>{dictionary.courses.durationLabel}</p>
                      <span>{translate(track.duration)}</span>
                    </div>
                  </li>
                  <li>
                    <Users aria-hidden="true" />
                    <div>
                      <p>{dictionary.courses.targetGroupLabel}</p>
                      <span>{translate(track.targetGroup)}</span>
                    </div>
                  </li>
                  <li>
                    <Layers3 aria-hidden="true" />
                    <div>
                      <p>{dictionary.courses.subjectsLabel}</p>
                      <span>{translate(track.subjects)}</span>
                    </div>
                  </li>
                </ul>

                <div className="timeline-track__timeline">
                  <p className="timeline-track__timeline-title">{dictionary.courses.timelineLabel}</p>
                  <ol>
                    {track.timeline.map((step) => (
                      <li key={`${track.id}-${translate(step.module)}`}>
                        <p>{translate(step.module)}</p>
                        <strong>{translate(step.duration)}</strong>
                        <span>{translate(step.focus)}</span>
                        <em>{translate(step.workload)}</em>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="timeline-track__actions">
                  <button type="button" className="timeline-track__book-button" onClick={() => openBooking(track.id)}>
                    {copy.bookingButton}
                  </button>
                </div>
              </div>

              <figure className="timeline-track__media">
                <Image
                  src={track.image}
                  alt={translate(track.imageAlt)}
                  fill
                  sizes="(max-width: 880px) 92vw, 38vw"
                  priority={index === 0}
                />
              </figure>
            </article>
          )) : (
            <div className="courses-filters__empty">
              <p>{copy.filterNoResults}</p>
              <button
                type="button"
                className="courses-filters__reset"
                onClick={() => {
                  setSubjectQuery('');
                  setTargetFilter('all');
                }}
              >
                {copy.filterReset}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="courses-section courses-section--focus" aria-label={dictionary.courses.focusTitle}>
        <header className="courses-section__header">
          <h2>{dictionary.courses.focusTitle}</h2>
          <p>{dictionary.courses.focusIntro}</p>
        </header>

        <div className="focus-grid">
          {visibleFocusCourses.length ? visibleFocusCourses.map((course) => (
            <article key={course.id} className="focus-item">
              <div className="focus-item__top">
                <h3>{translate(course.title)}</h3>
                <button type="button" className="timeline-track__book-button timeline-track__book-button--subtle" onClick={() => openBooking(course.id)}>
                  {copy.bookingButton}
                </button>
              </div>
              <p>{translate(course.description)}</p>
              <ul className="focus-item__meta">
                <li>
                  <span>{dictionary.courses.durationLabel}</span>
                  <strong>{translate(course.duration)}</strong>
                </li>
                <li>
                  <span>{dictionary.courses.targetGroupLabel}</span>
                  <strong>{translate(course.audience)}</strong>
                </li>
              </ul>
              <p className="focus-item__hint">{translate(course.bookingHint)}</p>
            </article>
          )) : (
            <div className="courses-filters__empty">
              <p>{copy.filterNoResults}</p>
              <button type="button" className="courses-filters__reset" onClick={() => {
                setSubjectQuery('');
                setTargetFilter('all');
              }}>
                {copy.filterReset}
              </button>
            </div>
          )}
        </div>
      </section>

      {bookingOpen ? (
        <div className="booking-modal" role="dialog" aria-modal="true" aria-label={copy.modalTitle}>
          <div className="booking-modal__backdrop" onClick={() => setBookingOpen(false)} />
          <div className="booking-modal__panel">
            <div className="booking-modal__header">
              <h2>{copy.modalTitle}</h2>
              <button type="button" className="booking-modal__close" onClick={() => setBookingOpen(false)} aria-label={copy.closeLabel}>
                <X aria-hidden="true" />
              </button>
            </div>
            <p className="booking-modal__intro">{copy.modalIntro}</p>

            <form className="booking-form" onSubmit={submitBooking}>
              <section className="booking-summary">
                <div className="booking-summary__header">
                  <div>
                    <p>{copy.modalSelectionLabel}</p>
                    <span>{copy.modalSelectionHint}</span>
                  </div>
                  <p className="booking-summary__count">{selectedBookingItems.length} {copy.bookingSummaryCountUnit}</p>
                </div>
                {selectedBookingItems.length ? (
                  <div className="booking-summary__chips">
                    {selectedBookingItems.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        className="booking-summary__chip"
                        onClick={() => toggleSelection(option.id, false)}
                      >
                        <span>{translate(option.title)}</span>
                        <strong>{selectedQuantities[option.id]}×</strong>
                        <em>{copy.removeSelection}</em>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="booking-summary__empty">{copy.sectionEmpty}</p>
                )}
              </section>

              <fieldset>
                <legend>{copy.sectionTitle}</legend>
                <div className="booking-options">
                  {bookingOptions.map((option) => {
                    const checked = Boolean(selectedQuantities[option.id]);
                    return (
                      <label key={option.id} className="booking-option">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={(event) => toggleSelection(option.id, event.target.checked)}
                        />
                        <span className="booking-option__title">{translate(option.title)}</span>
                        <span className="booking-option__kind">{option.kind === 'track' ? copy.kindTrack : copy.kindFocus}</span>
                        <input
                          type="number"
                          min={1}
                          value={checked ? selectedQuantities[option.id] : 1}
                          onChange={(event) => updateQuantity(option.id, event.target.value)}
                          disabled={!checked}
                          aria-label={`${copy.quantityLabel} ${translate(option.title)}`}
                        />
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <p className="booking-form__section-label">{copy.modalContactLabel}</p>
              <div className="booking-fields">
                <label>
                  <span>{copy.nameLabel}</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    required
                  />
                </label>
                <label>
                  <span>{copy.schoolLabel}</span>
                  <input
                    type="text"
                    value={form.school}
                    onChange={(event) => setForm((prev) => ({ ...prev, school: event.target.value }))}
                    required
                  />
                </label>
                <label>
                  <span>{copy.emailLabel}</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    required
                  />
                </label>
                <label>
                  <span>{copy.messageLabel}</span>
                  <textarea
                    value={form.message}
                    onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                    placeholder={copy.messagePlaceholder}
                    rows={3}
                  />
                </label>
              </div>

              {bookingStatus === 'error' ? <p className="booking-form__error">{copy.selectError}</p> : null}

              <button type="submit" className="booking-form__submit">
                <Send aria-hidden="true" />
                {copy.submitLabel}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </main>
  );
}
