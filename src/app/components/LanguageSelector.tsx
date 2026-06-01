'use client';

import { type Locale } from '../../context/languageConfig';

type LanguageSelectorProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  className?: string;
  ariaLabel?: string;
};

export function LanguageSelector({ locale, setLocale, className, ariaLabel }: LanguageSelectorProps) {
  return (
    <div className={className} role="group" aria-label={ariaLabel ?? 'Language selector'}>
      <button
        type="button"
        className={locale === 'da' ? 'isActive' : ''}
        onClick={() => setLocale('da')}
        aria-pressed={locale === 'da'}
        aria-label="Dansk"
      >
        DA
      </button>
      <button
        type="button"
        className={locale === 'en' ? 'isActive' : ''}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
