import type { Locale } from './languageConfig';

// Centralized copy for courses list, cart prompt, and booking form in both locales.
export const courseLanguage: Record<Locale, {
  courses: {
    programsTitle: string;
    durationLabel: string;
    targetGroupLabel: string;
    subjectsLabel: string;
    timelineLabel: string;
    focusTitle: string;
    focusIntro: string;
  };
  coursesCartPrompt: {
    title: string;
    text: string;
    goToCart: string;
    continueBrowsing: string;
    close: string;
  };
  page: {
    filterTitle: string;
    filterSubjectLabel: string;
    filterSubjectPlaceholder: string;
    filterTargetLabel: string;
    filterAllTargets: string;
    filterTargetIndskoling: string;
    filterTargetMellemtrin: string;
    filterTargetUdskoling: string;
    filterTargetGymnasium: string;
    filterReset: string;
    filterTracksResult: string;
    filterFocusResult: string;
    filterNoResults: string;
    customTrackTitle: string;
    customTrackText: string;
    customTrackButton: string;
    bookingButton: string;
    bookingOpenCartButton: string;
    modalTitle: string;
    modalIntro: string;
    modalSelectionLabel: string;
    modalSelectionHint: string;
    modalContactLabel: string;
    bookingSummaryCountUnit: string;
    sectionTitle: string;
    sectionEmpty: string;
    quantityLabel: string;
    kindTrack: string;
    kindFocus: string;
    removeSelection: string;
    nameLabel: string;
    schoolLabel: string;
    eanLabel: string;
    eanPlaceholder: string;
    emailLabel: string;
    studentsLabel: string;
    studentsPlaceholder: string;
    classesLabel: string;
    classesPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    submitSendingLabel: string;
    closeLabel: string;
    selectError: string;
    sendError: string;
    configError: string;
    sendSuccess: string;
    sendSuccessNoAutoReply: string;
    cartPageTitle: string;
    cartPageIntro: string;
    cartPageReminder1: string;
    cartPageReminder2: string;
    cartPageReminder3: string;
    cartCatalogTitle: string;
    cartCatalogHint: string;
    cartSummaryTopTitle: string;
    cartSummaryTopHint: string;
    cartContactTitle: string;
    phoneLabel: string;
    phonePlaceholder: string;
    quantityIncrease: string;
    quantityDecrease: string;
    cartBackToCourses: string;
    uvmIntroTitle: string;
    uvmIntroText: string;
    pricingEstimatedLabel: string;
    pricingHourlyRateLabel: string;
    pricingEstimatedHoursLabel: string;
    pricingDeliveryModelText: string;
    pricingTransportNote: string;
    pricingEstimateDisclaimer: string;
    pricingBundleTitle: string;
    pricingBundleText: string;
    customTrackOfferLine: string;
    pricingByPlanningShort: string;
    bookingPricingTitle: string;
    bookingSubtotalLabel: string;
    bookingDiscountLabel: string;
    bookingTotalLabel: string;
    bookingDiscountTierText: string;
  };
}> = {
  da: {
    courses: {
      programsTitle: 'Vælg et forløb',
      durationLabel: 'Varighed',
      targetGroupLabel: 'Målgruppe',
      subjectsLabel: 'Læringsfokus',
      timelineLabel: 'Modulopdeling',
      focusTitle: 'Fokuskurser',
      focusIntro: 'Fritstående fordybelsesmoduler, som kan bruges alene eller sammen med et af forløbene.',
    },
    coursesCartPrompt: {
      title: 'Tilføjet til kurv',
      text: 'Vil du gå til kurven nu eller fortsætte med at kigge?',
      goToCart: 'Hop til kurv',
      continueBrowsing: 'Fortsæt med at kigge',
      close: 'Luk',
    },
    page: {
      filterTitle: 'Filtrér forløb',
      filterSubjectLabel: 'Søg på ord',
      filterSubjectPlaceholder: 'Skriv et emne, tema eller ord',
      filterTargetLabel: 'Målgruppe',
      filterAllTargets: 'Alle målgrupper',
      filterTargetIndskoling: 'Indskoling',
      filterTargetMellemtrin: 'Mellemtrin',
      filterTargetUdskoling: 'Udskoling',
      filterTargetGymnasium: 'Gymnasium',
      filterReset: 'Ryd filter',
      filterTracksResult: 'forløb',
      filterFocusResult: 'fokuskurser',
      filterNoResults: 'Ingen forløb matcher det valgte filter.',
      customTrackTitle: 'Dit eget forløb',
      customTrackText: 'Et skræddersyet forløb til jeres mål, klassetrin, tid og lokale rammer.',
      customTrackButton: 'Tilføj til booking',
      bookingButton: 'Tilføj til booking',
      bookingOpenCartButton: 'Tilføj til booking',
      modalTitle: 'Book forløb og kurser',
      modalIntro: 'Vælg de ønskede forløb/kurser og angiv antal.',
      modalSelectionLabel: 'Valgte tilbud',
      modalSelectionHint: 'Du kan vælge flere tilbud og justere antal direkte her.',
      modalContactLabel: 'Kontaktoplysninger',
      bookingSummaryCountUnit: 'valg',
      sectionTitle: 'Valg og antal',
      sectionEmpty: 'Vælg mindst ét tilbud i listen nedenfor.',
      quantityLabel: 'Antal hold/klasser',
      kindTrack: 'Forløb',
      kindFocus: 'Fokuskursus',
      removeSelection: 'Fjern',
      nameLabel: 'Navn',
      schoolLabel: 'Skole',
      eanLabel: 'EAN-nummer (valgfrit)',
      eanPlaceholder: 'Fx 5798000000000',
      emailLabel: 'Email',
      studentsLabel: 'Elevtal pr. hold (ca.)',
      studentsPlaceholder: 'Fx ca. 24',
      classesLabel: 'Antal klasser/hold',
      classesPlaceholder: 'Fx 1',
      messageLabel: 'Kommentar',
      messagePlaceholder: 'Skriv gerne klassetrin, ønsket periode og særlige ønsker.',
      submitLabel: 'Send bookingforespørgsel',
      submitSendingLabel: 'Sender...',
      closeLabel: 'Luk',
      selectError: 'Vælg mindst ét forløb eller kursus.',
      sendError: 'Kunne ikke sende bookingforespørgslen. Prøv igen om et øjeblik.',
      configError: 'Email er ikke sat korrekt op endnu. Kontakt administrator.',
      sendSuccess: 'Tak! Din bookingforespørgsel er sendt.',
      sendSuccessNoAutoReply: 'Bookingforespørgslen er sendt til NordPixel, men autosvar til kunden er ikke konfigureret endnu.',
      cartPageTitle: 'Bookingkurv',
      cartPageIntro: 'Vælg forløb, antal og kontaktoplysninger.',
      cartPageReminder1: '',
      cartPageReminder2: '',
      cartPageReminder3: '',
      cartCatalogTitle: 'Vælg forløb og kurser',
      cartCatalogHint: 'Du kan markere flere elementer og sætte antal pr. element.',
      cartSummaryTopTitle: 'Valgt til booking',
      cartSummaryTopHint: 'Oversigt over dine nuværende valg',
      cartContactTitle: 'Kontaktoplysninger',
      phoneLabel: 'Telefon',
      phonePlaceholder: 'Fx 20 30 40 50',
      quantityIncrease: 'Øg antal',
      quantityDecrease: 'Sænk antal',
      cartBackToCourses: 'Tilbage til forløb',
      uvmIntroTitle: 'Klar løsning til teknologiforståelse',
      uvmIntroText: 'Forløbene omsætter kravene i teknologiforståelse til konkret undervisning. Fokus er praktisk arbejde med digitale fænomener, kreativt design, programmering og kritisk undersøgelse. Samarbejdet er tydeligt i hverdagen: læreren rammesætter og støtter processen, mens eleverne undersøger, bygger, tester og forbedrer gennem eksperimenter, samarbejde og refleksion over teknologiens betydning.',
      pricingEstimatedLabel: 'Estimeret pris',
      pricingHourlyRateLabel: 'Kursuspris',
      pricingEstimatedHoursLabel: 'Leverance',
      pricingDeliveryModelText: 'Undervisningsformat og materialer tilpasses det valgte forløb og klassetrin.',
      pricingTransportNote: 'Transport er ikke inkluderet og afregnes efter lokation.',
      pricingEstimateDisclaimer: 'Pris vises som tilbudsestimat og endelig pris aftales i tilbud.',
      pricingBundleTitle: 'Mængderabat ved flere kurser',
      pricingBundleText: 'Rabat starter ved 3 bookinger. Endelig rabat aftales ved anmodning pr. mail.',
      customTrackOfferLine: 'Pris aftales ved planlægning.',
      pricingByPlanningShort: 'Pris aftales ved planlægning',
      bookingPricingTitle: 'Prisoverslag',
      bookingSubtotalLabel: 'Subtotal',
      bookingDiscountLabel: 'Rabat',
      bookingTotalLabel: 'Estimeret total',
      bookingDiscountTierText: 'Rabat aftales pr. mail',
    },
  },
  en: {
    courses: {
      programsTitle: 'Choose a Track',
      durationLabel: 'Duration',
      targetGroupLabel: 'Target Group',
      subjectsLabel: 'Learning Focus',
      timelineLabel: 'Module Breakdown',
      focusTitle: 'Focus Courses',
      focusIntro: 'Standalone deep-dive modules that can run on their own or alongside one of the main tracks.',
    },
    coursesCartPrompt: {
      title: 'Added to cart',
      text: 'Do you want to open the cart now or keep browsing?',
      goToCart: 'Go to cart',
      continueBrowsing: 'Keep browsing',
      close: 'Close',
    },
    page: {
      filterTitle: 'Filter Programs',
      filterSubjectLabel: 'Search by word',
      filterSubjectPlaceholder: 'Search by topic, theme, or word',
      filterTargetLabel: 'Target Group',
      filterAllTargets: 'All target groups',
      filterTargetIndskoling: 'Lower primary',
      filterTargetMellemtrin: 'Middle grades',
      filterTargetUdskoling: 'Lower secondary',
      filterTargetGymnasium: 'Upper secondary',
      filterReset: 'Clear filter',
      filterTracksResult: 'programs',
      filterFocusResult: 'focus courses',
      filterNoResults: 'No programs match the selected filter.',
      customTrackTitle: 'Your Own Program',
      customTrackText: 'Get a tailored program aligned with your goals, grade level, schedule, and local context.',
      customTrackButton: 'Add to booking',
      bookingButton: 'Add to Booking',
      bookingOpenCartButton: 'Add to Booking',
      modalTitle: 'Book Programs and Courses',
      modalIntro: 'Select the relevant programs or courses and set quantities.',
      modalSelectionLabel: 'Selected items',
      modalSelectionHint: 'You can choose multiple items and adjust quantities here.',
      modalContactLabel: 'Contact Information',
      bookingSummaryCountUnit: 'selections',
      sectionTitle: 'Selection and Quantity',
      sectionEmpty: 'Select at least one item below.',
      quantityLabel: 'Number of groups/classes',
      kindTrack: 'Program',
      kindFocus: 'Focus course',
      removeSelection: 'Remove',
      nameLabel: 'Name',
      schoolLabel: 'School',
      eanLabel: 'EAN number (optional)',
      eanPlaceholder: 'For example 5798000000000',
      emailLabel: 'Email',
      studentsLabel: 'Students per group (approx.)',
      studentsPlaceholder: 'For example approx. 24',
      classesLabel: 'Number of classes/groups',
      classesPlaceholder: 'For example 1',
      messageLabel: 'Notes',
      messagePlaceholder: 'Share grade level, preferred timing, and special requests.',
      submitLabel: 'Send booking request',
      submitSendingLabel: 'Sending...',
      closeLabel: 'Close',
      selectError: 'Select at least one program or course.',
      sendError: 'Could not send the booking request. Please try again shortly.',
      configError: 'Email is not configured yet. Please contact the site administrator.',
      sendSuccess: 'Thanks! Your booking request has been sent.',
      sendSuccessNoAutoReply: 'The booking request was sent to NordPixel, but customer auto-reply is not configured yet.',
      cartPageTitle: 'Booking Cart',
      cartPageIntro: 'Select items, quantities, and your contact details.',
      cartPageReminder1: 'EAN is optional.',
      cartPageReminder2: '',
      cartPageReminder3: '',
      cartCatalogTitle: 'Select programs and courses',
      cartCatalogHint: 'You can select multiple items and set a quantity for each item.',
      cartSummaryTopTitle: 'Current booking overview',
      cartSummaryTopHint: 'A quick overview of your selected items',
      cartContactTitle: 'Contact details',
      phoneLabel: 'Phone',
      phonePlaceholder: 'For example +45 20 30 40 50',
      quantityIncrease: 'Increase quantity',
      quantityDecrease: 'Decrease quantity',
      cartBackToCourses: 'Back to courses',
      uvmIntroTitle: 'Classroom-ready technology literacy solution',
      uvmIntroText: 'These programs translate technology literacy requirements into practical classroom delivery. The focus is on digital phenomena, creative design, coding, and critical inquiry. Collaboration is built into the flow: the teacher frames and supports the process while students investigate, build, test, and improve through experimentation, collaboration, and reflection on the impact of technology.',
      pricingEstimatedLabel: 'Estimated price',
      pricingHourlyRateLabel: 'Course price',
      pricingEstimatedHoursLabel: 'Delivery model',
      pricingDeliveryModelText: 'Delivery format and materials are adapted to the selected program and grade level.',
      pricingTransportNote: 'Transport is excluded and settled based on location.',
      pricingEstimateDisclaimer: 'Pricing is shown as an offer estimate; final price is confirmed in the quote.',
      pricingBundleTitle: 'Bundle discount for multiple courses',
      pricingBundleText: 'Discount starts at 3 bookings (a standard year group). Final discount is agreed on request by email.',
      customTrackOfferLine: 'Custom program: Pricing is agreed during planning.',
      pricingByPlanningShort: 'Pricing agreed during planning',
      bookingPricingTitle: 'Price estimate',
      bookingSubtotalLabel: 'Subtotal',
      bookingDiscountLabel: 'Discount',
      bookingTotalLabel: 'Estimated total',
      bookingDiscountTierText: 'Discount agreed by email',
    },
  },
};