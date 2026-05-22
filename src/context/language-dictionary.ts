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
  courses: {
    title: string;
    intro: string;
    trackOne: string;
    trackTwo: string;
    trackThree: string;
    placeholder: string;
  };
  contact: {
    title: string;
    intro: string;
    contactTitle: string;
    contactPlaceholder: string;
    aboutTitle: string;
    aboutText: string;
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
    courses: {
      title: 'Forløb',
      intro: 'Her kommer NordPixel forløb. Strukturen er klar, indholdet tilføjes i næste fase.',
      trackOne: 'Begynder: Web og HTML',
      trackTwo: 'Mellemtrin: CSS og design',
      trackThree: 'AI og digital forståelse',
      placeholder: 'Indhold kommer snart',
    },
    contact: {
      title: 'Kontakt og om os',
      intro: 'Kontaktoplysninger og CVR indsættes her fra nuværende NordPixel.dev footer i næste step.',
      contactTitle: 'Kontakt',
      contactPlaceholder: 'Placeholder: email, telefon og CVR',
      aboutTitle: 'Om os',
      aboutText: 'NordPixel udvikler undervisning i digital kreativitet, web og AI for børn og unge.',
    },
    weblab: {
      title: 'WebLab',
      lead: 'WebLab giver elever en VS Code-lignende explorer, så de selv skal forbinde filer, links og scripts.',
      projectName: 'Projektnavn',
      projectPlaceholder: 'mit-projekt',
      newSite: 'Nyt site',
      save: 'Gem',
      import: 'Importer',
      lastUpdate: 'Sidst opdateret',
      lastSave: 'Sidst gemt',
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
      statusRecovered: 'Gendannede dit seneste kladdeprojekt.',
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
      openTab: 'Åbn i fane',
      updatedToday: 'i dag',
      updatedAtDate: 'sidst opdateret kl.',
    },
  },
  en: {
    nav: {
      home: 'Frontpage',
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
      lead: 'WebLab is local-first and classroom-ready. Students work in the browser while resources are delivered directly by educators.',
      ctaWeblab: 'Open WebLab',
      ctaCourses: 'Open Courses',
    },
    courses: {
      title: 'Courses',
      intro: 'NordPixel course tracks will be listed here. The structure is ready and content will be added next.',
      trackOne: 'Beginner: Web and HTML',
      trackTwo: 'Intermediate: CSS and design',
      trackThree: 'AI and digital literacy',
      placeholder: 'Content coming soon',
    },
    contact: {
      title: 'Contact and about us',
      intro: 'Contact details and CVR will be inserted from the current NordPixel.dev footer in the next step.',
      contactTitle: 'Contact',
      contactPlaceholder: 'Placeholder: email, phone, and CVR',
      aboutTitle: 'About us',
      aboutText: 'NordPixel builds educational experiences in digital creativity, web development, and AI for children and young learners.',
    },
    weblab: {
      title: 'WebLab',
      lead: 'WebLab gives students a VS Code-style explorer so they must wire files, links, and scripts themselves.',
      projectName: 'Project name',
      projectPlaceholder: 'my-project',
      newSite: 'New site',
      save: 'Save',
      import: 'Import',
      lastUpdate: 'Last update',
      lastSave: 'Last save',
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
      statusRecovered: 'Recovered your latest draft project.',
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
      openTab: 'Open tab',
      updatedToday: 'today',
      updatedAtDate: 'last updated at',
    },
  },
};
