"use client";

import { useLanguage } from '../components/LanguageProvider';

export default function TermsPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white px-4 py-20 text-neutral-900 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl">{language === 'da' ? 'Servicevilkår' : 'Terms of Service'}</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'Disse vilkår beskriver de grundlæggende regler for brug af NordPixels kurser, downloads og workshopformularer.' : 'These terms describe the basic rules for using NordPixel courses, downloads, and workshop booking forms.'}
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl">{language === 'da' ? 'Undervisningsbrug' : 'Educational Use'}</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'NordPixels materialer stilles til rådighed til undervisningsbrug. Du må anvende og dele dem internt til undervisning, men du må ikke videresælge dem som dit eget produkt.' : 'NordPixel materials are provided for educational use. You may use and share them internally for teaching, but you may not resell them as your own product.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{language === 'da' ? 'Konti og adgang' : 'Accounts and Access'}</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'Hvis kontofunktioner indføres, er du ansvarlig for at holde dine loginoplysninger sikre og for den aktivitet, der sker via din konto.' : 'If account features are introduced, you are responsible for keeping your login details secure and for the activity associated with your account.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{language === 'da' ? 'Ændringer' : 'Changes'}</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'NordPixel kan løbende opdatere tjenester og materialer. Fortsat brug af siden betyder, at du accepterer de aktuelt offentliggjorte vilkår.' : 'NordPixel may update services and materials over time. Continued use of the site means you accept the current published terms.'}
          </p>
        </section>
      </div>
    </div>
  );
}