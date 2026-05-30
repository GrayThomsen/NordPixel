export type Locale = 'da' | 'en';

export const LOCALE_STORAGE_KEY = 'nordpixel-locale';

export function isLocale(value: string | null): value is Locale {
  return value === 'da' || value === 'en';
}

export function getPreferredLocale(): Locale {
  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (isLocale(storedLocale)) {
    return storedLocale;
  }

  return window.navigator.language.toLowerCase().startsWith('da') ? 'da' : 'en';
}