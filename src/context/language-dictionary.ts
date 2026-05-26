import { pageCopyByLocale } from './page-copy';

export type Locale = 'da' | 'en';

export type Dictionary = {
  nav: {
    home: string;
    weblab: string;
    courses: string;
    contact: string;
    language: string;
  };
  common: {
    danish: string;
    english: string;
  };
  home: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaWeblab: string;
    ctaCourses: string;
  };
  homePage: {
    eyebrow: string;
    title: string;
    lead: string;
    statusNote: string;
    proofPoints: ReadonlyArray<{ value: string; label: string }>;
    authorityTitle: string;
    authorityCards: ReadonlyArray<{ title: string; text: string }>;
    methodTitle: string;
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
  courses: {
    title: string;
    intro: string;
    programsTitle: string;
    programsIntro: string;
    durationLabel: string;
    targetGroupLabel: string;
    subjectsLabel: string;
    presenceLabel: string;
    timelineLabel: string;
    focusTitle: string;
    focusIntro: string;
    ctaTitle: string;
    ctaText: string;
    ctaBadge: string;
  };
  contact: {
    title: string;
    intro: string;
    contactTitle: string;
    contactPlaceholder: string;
    aboutTitle: string;
    aboutText: string;
  };
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
  editorIntro: {
    title: string;
    text: string;
    hint: string;
  };
  coursesCartPrompt: {
    title: string;
    text: string;
    goToCart: string;
    continueBrowsing: string;
    close: string;
  };
  footer: {
    email: string;
    cvr: string;
    linkedIn: string;
    companyLinkedIn: string;
    personalLinkedIn: string;
  };
  weblab: {
    title: string;
    lead: string;
    projectName: string;
    projectPlaceholder: string;
    newSite: string;
    save: string;
    import: string;
    lastUpdate: string;
    lastSave: string;
    notSavedYet: string;
    view: string;
    explorer: string;
    code: string;
    preview: string;
    explorerPanel: string;
    projectFiles: string;
    fileEditor: string;
    newFile: string;
    deleteFile: string;
    deletePrompt: string;
    yes: string;
    no: string;
    allHidden: string;
    showAllPanes: string;
    dialogConfirmNewSite: string;
    dialogTitleNewSite: string;
    dialogTextNewSite: string;
    confirm: string;
    cancel: string;
    recoveredHint: string;
    statusDraftAutosave: string;
    statusRecovered: string;
    statusRenameCancelled: string;
    statusKeepOneFile: string;
    statusStartedFresh: string;
    statusSaved: string;
    statusImportFailedInvalid: string;
    statusImportFailedRead: string;
    statusPopupBlocked: string;
    statusPreviewRefreshed: string;
    statusCreated: string;
    statusRenamed: string;
    statusDeleted: string;
    statusImported: string;
    refresh: string;
    fullPage: string;
    openTab: string;
    updatedToday: string;
    updatedAtDate: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  da: {
    nav: {
      home: 'Forside',
      weblab: 'WebLab',
      courses: 'Forløb',
      contact: 'Kontakt',
      language: 'Sprog',
    },
    common: {
      danish: 'Dansk',
      english: 'Engelsk',
    },
    home: {
      eyebrow: 'Digitalt læringsstudio',
      title: 'NordPixel giver elever et kreativt sted at kode, teste og lære web i praksis.',
      lead: 'WebLab er local-first og passer til undervisning i Danmark. Eleverne arbejder i browseren, og materialer kan deles direkte af undervisere.',
      ctaWeblab: 'Åbn WebLab',
      ctaCourses: 'Se forløb',
    },
    homePage: pageCopyByLocale.da.homePage,
    courses: {
      title: 'Forløb til skoler og klasser',
      intro: 'NordPixel leverer forløb i teknologiforståelse, der er praktiske, kreative og lette at gennemføre i undervisningen.',
      programsTitle: 'Vælg et forløb',
      programsIntro:
        'Hvert forløb har en enkel tidslinje, så lærere og elever kan se arbejdsrytme, mål og forventet udbytte fra start.',
      durationLabel: 'Varighed',
      targetGroupLabel: 'Målgruppe',
      subjectsLabel: 'Læringsfokus',
      presenceLabel: 'NordPixel-tilstedeværelse',
      timelineLabel: 'Modulopdeling',
      focusTitle: 'Fokuskurser',
      focusIntro:
        'Fritstående fordybelsesmoduler, som kan bruges alene eller sammen med et af forløbene.',
      ctaTitle: 'Næste skridt',
      ctaText:
        'Siden viser undervisningsindhold og struktur. Praktiske rammer og materialer aftales direkte med skolen.',
      ctaBadge: 'Planlægning og opstart aftales individuelt',
    },
    contact: {
      title: 'Kontakt og om os',
      intro: 'Kontaktoplysninger og CVR fremgår herunder.',
      contactTitle: 'Kontakt',
      contactPlaceholder: 'Email, telefon og CVR',
      aboutTitle: 'Om os',
      aboutText: 'NordPixel udvikler undervisning i digital kreativitet, web og AI for børn og unge.',
    },
    contactPage: pageCopyByLocale.da.contactPage,
    editorIntro: pageCopyByLocale.da.editorIntro,
    coursesCartPrompt: pageCopyByLocale.da.coursesCartPrompt,
    footer: {
      email: 'Email',
      cvr: 'CVR',
      linkedIn: 'LinkedIn',
      companyLinkedIn: 'LinkedIn · NordPixel',
      personalLinkedIn: 'LinkedIn · Emil G. Thomsen',
    },
    weblab: {
      title: 'WebLab',
      lead: 'WebLab giver elever en VS Code-lignende explorer, så de selv skal forbinde filer, links og scripts.',
      projectName: 'Projektnavn',
      projectPlaceholder: 'mit-projekt',
      newSite: 'Nyt site',
      save: 'Gem',
      import: 'Importer',
      lastUpdate: 'Sidst opdateret kl.',
      lastSave: 'Gemt',
      notSavedYet: 'Ikke gemt endnu',
      view: 'Visning',
      explorer: 'Explorer',
      code: 'Kode',
      preview: 'Preview',
      explorerPanel: 'Explorer',
      projectFiles: 'Projektfiler',
      fileEditor: 'editor',
      newFile: 'Ny fil',
      deleteFile: 'Slet',
      deletePrompt: 'Er du sikker?',
      yes: 'Ja',
      no: 'Nej',
      allHidden: 'Alle arbejdsområder er skjult.',
      showAllPanes: 'Vis alle paneler',
      dialogConfirmNewSite: 'Bekræft nyt site',
      dialogTitleNewSite: 'Start et nyt site?',
      dialogTextNewSite: 'Dette erstatter dine nuværende projektfiler i editoren.',
      confirm: 'Bekræft',
      cancel: 'Annuller',
      recoveredHint: 'WebLab har indlæst dit seneste ikke-gemte udkast fra lokal browserlagring på denne enhed.',
      statusDraftAutosave: 'Kladde-autosave er aktiv i denne browser.',
      statusRecovered: 'Kladdeprojekt gendannet.',
      statusRenameCancelled: 'Omdøbning annulleret. Angiv et filnavn.',
      statusKeepOneFile: 'Behold mindst én fil i projektet.',
      statusStartedFresh: 'Startede et nyt projekt. Gem når du er klar.',
      statusSaved: 'Gemt som .nordpixel.json',
      statusImportFailedInvalid: 'Import fejlede. Filen skal være et gyldigt .nordpixel.json projekt.',
      statusImportFailedRead: 'Import fejlede under læsning af filen.',
      statusPopupBlocked: 'Popup blev blokeret. Tillad popups for at åbne preview i ny fane.',
      statusPreviewRefreshed: 'Preview opdateret.',
      statusCreated: 'Oprettede',
      statusRenamed: 'Omdøbte til',
      statusDeleted: 'Slettede',
      statusImported: 'Importerede projekt',
      refresh: 'Opdater',
      fullPage: 'Fuld side',
      openTab: 'Åbn i ny fane',
      updatedToday: 'i dag',
      updatedAtDate: 'sidst opdateret kl.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      weblab: 'WebLab',
      courses: 'Courses',
      contact: 'Contact',
      language: 'Language',
    },
    common: {
      danish: 'Danish',
      english: 'English',
    },
    home: {
      eyebrow: 'Digital learning studio',
      title: 'NordPixel gives students a creative place to code, test, and learn the web hands-on.',
      lead: 'WebLab is local-first and classroom-ready. Students work directly in the browser while educators share resources and guidance in context.',
      ctaWeblab: 'Open WebLab',
      ctaCourses: 'Explore Courses',
    },
    homePage: pageCopyByLocale.en.homePage,
    courses: {
      title: 'Courses for Schools and Classrooms',
      intro: 'NordPixel delivers technology literacy tracks that are practical, creative, and easy to run in real classrooms.',
      programsTitle: 'Choose a Track',
      programsIntro:
        'Each track has a simple timeline so teachers and students can see pace, goals, and expected outcomes from day one.',
      durationLabel: 'Duration',
      targetGroupLabel: 'Target Group',
      subjectsLabel: 'Learning Focus',
      presenceLabel: 'NordPixel Presence',
      timelineLabel: 'Module Breakdown',
      focusTitle: 'Focus Courses',
      focusIntro:
        'Standalone deep-dive modules that can run on their own or alongside one of the main tracks.',
      ctaTitle: 'Next Step',
      ctaText:
        'This page presents learning content and structure. Practical setup and materials are agreed directly with the school.',
      ctaBadge: 'Planning and launch are arranged individually',
    },
    contact: {
      title: 'Contact and About Us',
      intro: 'Contact details and company registration are available below.',
      contactTitle: 'Contact',
      contactPlaceholder: 'Email, phone, and CVR',
      aboutTitle: 'About Us',
      aboutText: 'NordPixel builds educational experiences in digital creativity, web development, and AI for children and young learners.',
    },
    contactPage: pageCopyByLocale.en.contactPage,
    editorIntro: pageCopyByLocale.en.editorIntro,
    coursesCartPrompt: pageCopyByLocale.en.coursesCartPrompt,
    footer: {
      email: 'Email',
      cvr: 'CVR',
      linkedIn: 'LinkedIn',
      companyLinkedIn: 'LinkedIn · NordPixel',
      personalLinkedIn: 'LinkedIn · Emil G. Thomsen',
    },
    weblab: {
      title: 'WebLab',
      lead: 'WebLab gives students a VS Code-style workspace where they connect files, links, and scripts themselves.',
      projectName: 'Project name',
      projectPlaceholder: 'my-project',
      newSite: 'New site',
      save: 'Save',
      import: 'Import',
      lastUpdate: 'Last updated at',
      lastSave: 'Saved',
      notSavedYet: 'Not saved yet',
      view: 'View',
      explorer: 'Explorer',
      code: 'Code',
      preview: 'Preview',
      explorerPanel: 'Explorer',
      projectFiles: 'Project files',
      fileEditor: 'editor',
      newFile: 'New File',
      deleteFile: 'Delete',
      deletePrompt: 'Are you sure?',
      yes: 'Yes',
      no: 'No',
      allHidden: 'All work areas are hidden.',
      showAllPanes: 'Show all panes',
      dialogConfirmNewSite: 'Confirm new site',
      dialogTitleNewSite: 'Start a new site?',
      dialogTextNewSite: 'This will replace your current project files in the editor.',
      confirm: 'Confirm',
      cancel: 'Cancel',
      recoveredHint: 'WebLab loaded your latest unsaved draft from local browser storage on this device.',
      statusDraftAutosave: 'Draft autosave is active in this browser.',
      statusRecovered: 'Draft project recovered.',
      statusRenameCancelled: 'Rename cancelled. Please provide a file name.',
      statusKeepOneFile: 'Keep at least one file in the project.',
      statusStartedFresh: 'Started a fresh project. Save when you are ready.',
      statusSaved: 'Saved as .nordpixel.json',
      statusImportFailedInvalid: 'Import failed. File must be a valid .nordpixel.json project.',
      statusImportFailedRead: 'Import failed while reading the file.',
      statusPopupBlocked: 'Popup was blocked. Allow popups to open preview in a new tab.',
      statusPreviewRefreshed: 'Preview refreshed.',
      statusCreated: 'Created',
      statusRenamed: 'Renamed to',
      statusDeleted: 'Deleted',
      statusImported: 'Imported project',
      refresh: 'Refresh',
      fullPage: 'Full page',
      openTab: 'Open in new tab',
      updatedToday: 'today',
      updatedAtDate: 'last updated at',
    },
  },
};
