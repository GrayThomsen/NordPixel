import type { Locale } from './languageConfig';

export const weblabLanguage: Record<Locale, {
  editorIntro: {
    title: string;
    text: string;
    hint: string;
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
    mobileBlockedLabel: string;
    mobileBlockedTitle: string;
    mobileBlockedText: string;
    mobileBlockedHint: string;
    learningTitle: string;
    learningLead: string;
    learningQuestion: string;
    learningTabLabel: string;
    learningDownload: string;
    learningFeedback: string;
    tutorialFileTypes: string;
    tutorialPreview: string;
    tutorialSemantic: string;
    tutorialSymbols: string;
    symbolGuideTitle: string;
    symbolGuideSymbolLabel: string;
    symbolGuideComboLabel: string;
    symbolGuideKeyLabel: string;
    symbolGuideShift: string;
    symbolGuideAltGr: string;
    statusTutorialDownload: string;
  };
}> = {
  da: {
    editorIntro: {
      title: 'WebLab i undervisningen',
      text: 'WebLab er et praktisk arbejdsrum til HTML og CSS, hvor du kan bygge, teste og gemme projekter direkte i browseren.',
      hint: 'Tip: Gem projektet som .nordpixel.json, så arbejdet kan hentes igen.',
    },
    weblab: {
      title: 'WebLab',
      lead: 'WebLab giver elever et praktisk arbejdsrum, hvor de bygger sider ved at forbinde filer, links og scripts.',
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
      mobileBlockedLabel: 'WebLab er ikke tilgængelig på mobil eller tablet i denne version.',
      mobileBlockedTitle: 'WebLab kræver en større skærm',
      mobileBlockedText: 'Editoren er midlertidigt låst på enheder under 1024 px for at sikre den fulde undervisningsoplevelse.',
      mobileBlockedHint: 'Åbn WebLab på laptop eller desktop for at bruge editor, preview og filhåndtering.',
      learningTitle: 'WebLab Learning',
      learningLead: 'Tag dit første skridt mod digital læring.',
      learningQuestion: 'Klik på det du ønsker at træne og importer filen direkte i WebLab.',
      learningTabLabel: 'Tutorial emner',
      learningDownload: 'Hent valgt tutorial',
      learningFeedback: 'Feedback',
      tutorialFileTypes: 'Filtyper & File Explorer',
      tutorialPreview: 'Preview',
      tutorialSemantic: 'Semantisk HTML og Meta',
      tutorialSymbols: 'Kodningssymboler',
      symbolGuideTitle: 'Kodningssymboler pa dansk tastatur',
      symbolGuideSymbolLabel: 'Tegn',
      symbolGuideComboLabel: 'Tastekombination',
      symbolGuideKeyLabel: 'Primar tast',
      symbolGuideShift: 'Shift',
      symbolGuideAltGr: 'AltGr',
      statusTutorialDownload: 'Tutorial klar til download.',
    },
  },
  en: {
    editorIntro: {
      title: 'WebLab for classroom work',
      text: 'WebLab is a hands-on HTML/CSS workspace where students can build, test, and store projects directly in the browser.',
      hint: 'Tip: Save as .nordpixel.json so the project can be imported again later.',
    },
    weblab: {
      title: 'WebLab',
      lead: 'WebLab gives students a practical workspace where they build pages by connecting files, links, and scripts.',
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
      mobileBlockedLabel: 'WebLab is unavailable on mobile and tablet in this version.',
      mobileBlockedTitle: 'WebLab requires a larger screen',
      mobileBlockedText: 'The editor is temporarily locked on devices below 1024 px to preserve the full classroom experience.',
      mobileBlockedHint: 'Open WebLab on a laptop or desktop to use editor, preview, and file management.',
      learningTitle: 'WebLab Learning',
      learningLead: 'Take your first step into digital learning.',
      learningQuestion: 'Choose what you want to practice and import the file directly in WebLab.',
      learningTabLabel: 'Tutorial topics',
      learningDownload: 'Download selected tutorial',
      learningFeedback: 'Feedback',
      tutorialFileTypes: 'File types & File Explorer',
      tutorialPreview: 'Preview',
      tutorialSemantic: 'Semantic HTML and Meta',
      tutorialSymbols: 'Coding symbols',
      symbolGuideTitle: 'Coding symbols on Danish keyboard',
      symbolGuideSymbolLabel: 'Symbol',
      symbolGuideComboLabel: 'Key combination',
      symbolGuideKeyLabel: 'Primary key',
      symbolGuideShift: 'Shift',
      symbolGuideAltGr: 'AltGr',
      statusTutorialDownload: 'Tutorial ready for download.',
    },
  },
};