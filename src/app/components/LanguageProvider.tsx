'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'da' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  da: {
    // Navigation
    'nav.home': 'Hjem',
    'nav.courses': 'Kurser',
    'nav.teachingMaterials': 'Undervisningsmaterialer',
    'nav.workshops': 'Workshops',
    'nav.about': 'Om & Kontakt',
    'nav.login': 'Log Ind',
    'nav.signup': 'Kom I Gang',
    'nav.dashboard': 'Mit Dashboard',
    'nav.allCourses': 'Alle Kurser',

    // Homepage
    'home.hero.badge': 'Styrker Digital Uddannelse',
    'home.hero.title1': 'Lær at Kode,',
    'home.hero.title2': 'Skab Digital Magi',
    'home.hero.subtitle': 'Lærer unge mennesker webudvikling, AI-færdigheder og digital kreativitet gennem moderne, tilgængelige kurser og workshops.',
    'home.hero.cta1': 'Udforsk Kurser',
    'home.hero.cta2': 'For Skoler',
    'home.hero.cta3': 'Book en Workshop',

    'home.features.title': 'Hvad Vi Tilbyder',
    'home.features.subtitle': 'Moderne digital uddannelse til skoler, lærere og elever',
    'home.feature1.title': 'Webudvikling & AI',
    'home.feature1.desc': 'Lær HTML, CSS, JavaScript, AI-færdigheder og moderne teknologier fra bunden.',
    'home.feature3.title': 'For Skoler',
    'home.feature3.desc': 'Omfattende undervisningsmaterialer og workshops skræddersyet til undervisere.',
    'home.feature4.title': 'Interaktiv Læring',
    'home.feature4.desc': 'Praktiske projekter, quizzer og virkelige anvendelser.',

    'home.courses.title': 'Udvalgte Kurser',
    'home.courses.subtitle': 'Start din læring i dag',
    'home.courses.viewAll': 'Se Alle Kurser',
    'home.courses.students': 'elever tilmeldt',

    'home.testimonials.title': 'Hvad Folk Siger',
    'home.testimonials.subtitle': 'Betroet af skoler og elever i hele Danmark',

    'home.cta.title': 'Klar til at Starte Læringen?',
    'home.cta.subtitle': 'Slut dig til tusindvis af elever, der allerede bygger deres digitale fremtid',
    'home.cta.button': 'Kom I Gang Gratis',

    'home.newsletter.title': 'Hold Dig Opdateret',
    'home.newsletter.subtitle': 'Få de nyeste kurser, workshops og uddannelsesressourcer leveret til din indbakke',
    'home.newsletter.placeholder': 'Indtast din email',
    'home.newsletter.button': 'Tilmeld',

    // Courses
    'courses.title': 'Udforsk Kurser',
    'courses.subtitle': 'Lær webudvikling, AI-færdigheder og digitale kompetencer i dit eget tempo',
    'courses.search': 'Søg kurser...',
    'courses.filters': 'Filtre',
    'courses.category': 'Kategori',
    'courses.difficulty': 'Sværhedsgrad',
    'courses.found': 'kurser fundet',
    'courses.beginner': 'Begynder',
    'courses.intermediate': 'Mellem',
    'courses.advanced': 'Avanceret',
    'courses.all': 'Alle',
    'courses.lessons': 'lektioner',

    // Difficulty levels
    'difficulty.beginner': 'Begynder',
    'difficulty.intermediate': 'Mellem',
    'difficulty.advanced': 'Avanceret',

    // Footer
    'footer.about': 'Om NordPixel',
    'footer.aboutText': 'Styrker unge mennesker med digitale færdigheder, AI-færdigheder og kreativ teknologiuddannelse.',
    'footer.quickLinks': 'Hurtige Links',
    'footer.contact': 'Kontakt',
    'footer.followUs': 'Følg Os',
    'footer.rights': '© 2026 NordPixel. Alle rettigheder forbeholdes.',
    'footer.privacy': 'Privatlivspolitik',
    'footer.terms': 'Servicevilkår',
    'footer.cookies': 'Cookie Politik',

    // Common
    'common.readMore': 'Læs Mere',
    'common.learnMore': 'Lær Mere',
    'common.getStarted': 'Kom I Gang',
    'common.download': 'Download',
    'common.submit': 'Send',
    'common.cancel': 'Annuller',
    'common.save': 'Gem',
    'common.edit': 'Rediger',
    'common.delete': 'Slet',
    'common.loading': 'Indlæser...',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.teachingMaterials': 'Teaching Materials',
    'nav.workshops': 'Workshops',
    'nav.about': 'About & Contact',
    'nav.login': 'Login',
    'nav.signup': 'Get Started',
    'nav.dashboard': 'My Dashboard',
    'nav.allCourses': 'All Courses',

    // Homepage
    'home.hero.badge': 'Empowering Digital Education',
    'home.hero.title1': 'Learn to Code,',
    'home.hero.title2': 'Create Digital Magic',
    'home.hero.subtitle': 'Teach young people web development, AI literacy, and digital creativity through modern, accessible courses and workshops.',
    'home.hero.cta1': 'Explore Courses',
    'home.hero.cta2': 'For Schools',
    'home.hero.cta3': 'Book a Workshop',

    'home.features.title': 'What We Offer',
    'home.features.subtitle': 'Modern digital education for schools, teachers, and students',
    'home.feature1.title': 'Web Development & AI',
    'home.feature1.desc': 'Learn HTML, CSS, JavaScript, AI literacy, and modern technologies from scratch.',
    'home.feature3.title': 'For Schools',
    'home.feature3.desc': 'Comprehensive teaching materials and workshops tailored for educators.',
    'home.feature4.title': 'Interactive Learning',
    'home.feature4.desc': 'Hands-on projects, quizzes, and real-world applications.',

    'home.courses.title': 'Featured Courses',
    'home.courses.subtitle': 'Start your learning journey today',
    'home.courses.viewAll': 'View All Courses',
    'home.courses.students': 'students enrolled',

    'home.testimonials.title': 'What People Say',
    'home.testimonials.subtitle': 'Trusted by schools and students across Denmark',

    'home.cta.title': 'Ready to Start Learning?',
    'home.cta.subtitle': 'Join thousands of students already building their digital future',
    'home.cta.button': 'Get Started Free',

    'home.newsletter.title': 'Stay Updated',
    'home.newsletter.subtitle': 'Get the latest courses, workshops, and educational resources delivered to your inbox',
    'home.newsletter.placeholder': 'Enter your email',
    'home.newsletter.button': 'Subscribe',

    // Courses
    'courses.title': 'Explore Courses',
    'courses.subtitle': 'Learn web development, AI literacy, and digital skills at your own pace',
    'courses.search': 'Search courses...',
    'courses.filters': 'Filters',
    'courses.category': 'Category',
    'courses.difficulty': 'Difficulty',
    'courses.found': 'courses found',
    'courses.beginner': 'Beginner',
    'courses.intermediate': 'Intermediate',
    'courses.advanced': 'Advanced',
    'courses.all': 'All',
    'courses.lessons': 'lessons',

    // Difficulty levels
    'difficulty.beginner': 'Beginner',
    'difficulty.intermediate': 'Intermediate',
    'difficulty.advanced': 'Advanced',

    // Footer
    'footer.about': 'About NordPixel',
    'footer.aboutText': 'Empowering young people with digital skills, AI literacy, and creative technology education.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': '© 2026 NordPixel. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',

    // Common
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.download': 'Download',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.loading': 'Loading...',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('da');

  useEffect(() => {
    const saved = window.localStorage.getItem('nordpixel-language') as Language | null;

    if (saved) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    window.localStorage.setItem('nordpixel-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
