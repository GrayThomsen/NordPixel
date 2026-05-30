import type { Locale } from './languageConfig';

export const componentLanguage: Record<Locale, {
  nav: {
    home: string;
    weblab: string;
    courses: string;
    contact: string;
    language: string;
  };
  footer: {
    email: string;
    cvr: string;
    linkedIn: string;
    companyLinkedIn: string;
    personalLinkedIn: string;
  };
  cookieConsent: {
    title: string;
    text: string;
    accept: string;
    necessary: string;
    decline: string;
  };
}> = {
  da: {
    nav: {
      home: 'Forside',
      weblab: 'WebLab',
      courses: 'Forløb',
      contact: 'Kontakt',
      language: 'Sprog',
    },
    footer: {
      email: 'Email',
      cvr: 'CVR',
      linkedIn: 'LinkedIn',
      companyLinkedIn: 'LinkedIn · NordPixel',
      personalLinkedIn: 'LinkedIn · Emil G. Thomsen',
    },
    cookieConsent: {
      title: 'Cookies og statistik',
      text: 'Vi bruger Google Analytics til at forbedre hjemmesiden og give dig den bedst mulige brugeroplevelse. Du kan vælge kun nødvendige cookies eller acceptere statistik.',
      accept: 'Accepter',
      necessary: 'Kun nødvendige',
      decline: 'Afvis',
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
    footer: {
      email: 'Email',
      cvr: 'CVR',
      linkedIn: 'LinkedIn',
      companyLinkedIn: 'LinkedIn · NordPixel',
      personalLinkedIn: 'LinkedIn · Emil G. Thomsen',
    },
    cookieConsent: {
      title: 'Cookies and analytics',
      text: 'We use Google Analytics to improve the website and give you the best possible user experience. You can choose necessary-only cookies or accept analytics.',
      accept: 'Accept',
      necessary: 'Necessary only',
      decline: 'Decline',
    },
  },
};