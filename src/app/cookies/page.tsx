"use client";

import { useLanguage } from '../components/LanguageProvider';

export default function CookiesPage() {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-white px-4 py-20 text-neutral-900 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl">{language === 'da' ? 'Cookiepolitik' : 'Cookie Policy'}</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'NordPixel bruger en lille mængde browserlagring til at huske præferencer som tema og sprog.' : 'NordPixel uses a small number of browser storage features to remember interface preferences such as theme and language.'}
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl">{language === 'da' ? 'Nødvendige præferencer' : 'Essential Preferences'}</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'Siden gemmer dit valgte sprog og tema lokalt i browseren, så brugerfladen er ens fra besøg til besøg.' : 'The site stores your selected language and theme locally in your browser so the interface remains consistent between visits.'}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{language === 'da' ? 'Kontrol' : 'Control'}</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {language === 'da' ? 'Du kan til enhver tid rydde browserlagring via dine browserindstillinger. Det nulstiller gemte brugerfladepræferencer.' : 'You can clear browser storage at any time through your browser settings. Doing so will reset saved interface preferences.'}
          </p>
        </section>
      </div>
    </div>
  );
}