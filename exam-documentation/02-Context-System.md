# Context System - Sprogvalg & Global State

## 🌍 Hvad gør Context?

Context API bruges til **sprogvalg (dansk/engelsk)** og gøres tilgængelig for hele appen uden prop drilling.

## 📍 Setup Diagram

```
LanguageProvider (layout.tsx)
    │
    ├─ LanguageContext.Provider
    │
    └─ value={{ locale, setLocale }}
        │
        ├→ Alle børn-komponenter
        └→ useLanguage() hook
```

## 🏗️ Implementering

### 1. LanguageContext.tsx

```typescript
type LanguageContextValue = {
  locale: Locale;                    // 'da' eller 'en'
  setLocale: (locale: Locale) => void;  // Skifter sprog
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
```

### 2. LanguageProvider (Wrapper)

```typescript
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('da');

  useEffect(() => {
    // Hent gemt sprog fra localStorage
    setLocaleState(getPreferredLocale());
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    // Gem valg i localStorage
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
```

### 3. useLanguage Hook

```typescript
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider.');
  }
  return context;
}
```

## 🔄 Flow: Bruger Skifter Sprog

```
1. Bruger klikker "Dansk" / "English" i LanguageSelector
    ↓
2. setLocale('en') kaldes
    ↓
3. localStorage.setItem('nordpixel-locale', 'en')
    ↓
4. useState setter 'en'
    ↓
5. Re-render alle komponenter der bruger useLanguage()
    ↓
6. Alle tekststrenge opdateres
```

## 📚 Sprogfiler Struktur

### languageConfig.ts
```typescript
type Locale = 'da' | 'en';

const LOCALE_STORAGE_KEY = 'nordpixel-locale';

export function getPreferredLocale(): Locale {
  if (typeof window === 'undefined') return 'da';

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === 'en') return 'en';
  
  // Browser preference eller default til dansk
  return navigator.language.startsWith('en') ? 'en' : 'da';
}
```

### Eksempel: mainLanguage.ts
```typescript
export const mainLanguage = {
  da: {
    homePage: {
      eyebrow: 'Digital teknologiforståelse for skoler',
      title: 'Teknologi i praksis: hjælp eleverne til at blive digitale skabere.',
      lead: 'NordPixel leverer en klar teknologiforståelse-løsning...',
      // ... mere indhold
    }
  },
  en: {
    homePage: {
      eyebrow: 'Digital technology literacy for schools',
      title: 'Technology in practice: help students become active digital creators.',
      lead: 'NordPixel delivers a clear technology literacy solution...',
      // ... mere indhold
    }
  }
};
```

## 🎯 Hvordan bruges det i komponenter?

### Eksempel 1: HomeContent.tsx
```typescript
export function HomeContent() {
  const { locale } = useLanguage();
  const copy = mainLanguage[locale].homePage;

  return (
    <h1>{copy.eyebrow}</h1>
    <p>{copy.title}</p>
  );
}
```

### Eksempel 2: LanguageSelector.tsx
```typescript
export function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <button onClick={() => setLocale('da')}>
      Dansk
    </button>
    <button onClick={() => setLocale('en')}>
      English
    </button>
  );
}
```

## 📦 Sprogfiler Oversigt

| Fil | Indhold |
|-----|---------|
| `mainLanguage.ts` | Forsidestekster |
| `courseLanguage.ts` | Kursustekster |
| `weblabLanguage.ts` | WebLab editor tekster |
| `contactLanguage.ts` | Kontaktformular tekster |
| `languageConfig.ts` | Konfiguration |

## 💾 localStorage Brug

```typescript
const LOCALE_STORAGE_KEY = 'nordpixel-locale';

// Gem
localStorage.setItem(LOCALE_STORAGE_KEY, 'en');

// Hent
const saved = localStorage.getItem(LOCALE_STORAGE_KEY);  // 'en' eller null
```

## ⚡ Performance Optimering

### useMemo
```typescript
const value = useMemo(
  () => ({
    locale,
    setLocale,
  }),
  [locale],  // Kun re-create når locale ændres
);
```

Dette forhindrer unødige re-renders af alle subscribers.

## 🔍 Fejlfinding

### Fejl: "useLanguage must be used inside LanguageProvider"
- Sikr at komponenten renderes indenfor `<LanguageProvider>`
- Typisk: Layout → LanguageProvider → alle komponenter

### Fejl: Sprog gemmes ikke
- Check localStorage i DevTools: `localStorage.getItem('nordpixel-locale')`
- Tillade cookies/localStorage i browser settings

## 📊 Eksamen Fokus

1. **Provider Pattern**: Hvordan wraps vi komponenter?
2. **Context Value**: Hvad indeholder `value` objektet?
3. **Hook Pattern**: Hvordan bruges `useLanguage()`?
4. **localStorage**: Hvor gemmes sproget?
5. **Re-render**: Hvornår sker re-render?
6. **Error Boundary**: Hvad hvis hook bruges uden provider?
