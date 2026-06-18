# Quick Reference Sheet

## 🔥 Copy-Paste Kode Eksempler

### Context Pattern

```typescript
// 1. Definer context type
type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

// 2. Opret context
const LanguageContext = createContext<LanguageContextValue | null>(null);

// 3. Opret provider
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('da');

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem('nordpixel-locale', next);
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// 4. Opret hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider.');
  }
  return context;
}

// 5. Brug i komponent
export function MyComponent() {
  const { locale, setLocale } = useLanguage();
  return <div>{locale}</div>;
}
```

---

### localStorage Pattern

```typescript
// Definér key
const STORAGE_KEY = 'my-app-data';

// Gem data
function saveData(data: any) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Hent data
function getData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

// Validér data
function sanitize(raw: unknown): SantizedType {
  if (!raw || typeof raw !== 'object') return {};
  // Validering her
  return validatedData;
}

// Lyt til ændringer
useEffect(() => {
  const handleStorageChange = () => {
    const data = getData();
    setData(data);
  };

  window.addEventListener('storage', handleStorageChange);
  return () => window.removeEventListener('storage', handleStorageChange);
}, []);
```

---

### JSON-LD Schema

```typescript
const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://example.com/#local-business',
  name: 'Company Name',
  url: 'https://example.com',
  logo: 'https://example.com/logo.png',
  email: 'contact@example.com',
  areaServed: {
    '@type': 'Country',
    name: 'DK',
  },
  sameAs: [
    'https://www.linkedin.com/company/...',
    'https://www.facebook.com/...',
  ],
};

export function SchemaComponent() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

### Metadata Setup

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Side titel | Site Navn',
  description: 'Meta description her',
  robots: 'index, follow',
  openGraph: {
    title: 'Side titel | Site Navn',
    description: 'Meta description her',
    type: 'website',
    url: 'https://example.com/page',
  },
  alternates: {
    canonical: '/page',
  },
  other: {
    'revisit-after': '7 days',
  },
};
```

---

### Design Tokens Template

```css
:root {
  /* Colors */
  --color-primary: #0f1f22;
  --color-accent: #ff8c42;
  --color-text: #1a1a1a;
  --color-bg: #ffffff;

  /* Typography */
  --font-heading: 'Tomorrow', sans-serif;
  --font-body: 'Google Sans', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
}

/* Usage */
.heading {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  color: var(--color-primary);
}

.button {
  padding: var(--space-md) var(--space-lg);
  background: var(--color-accent);
}
```

---

## 📋 Vigtige Begreber Definitioner

### **Context API**
Mekanisme i React til at dele data mellem komponenter uden prop drilling. Bruger `createContext()` + `Provider` + `Hook`.

### **Provider Pattern**
Design pattern hvor en komponent wraps børn og giver dem adgang til state gennem context.

### **useCallback Hook**
Memoisererer funktioner så de ikke re-creates hver render. Vigtig for performance.

### **useMemo Hook**
Cacher værdier og re-evalueres kun når dependencies ændres.

### **localStorage**
Browser API til permanent lagring af data. Overlever page refresh.

### **JSON-LD**
Javascript Object Notation for Linked Data - struktureret data format for søgemaskiner.

### **Schema.org**
Åbent standardformat til strukturerede data. Brugt af Google, Bing osv.

### **Hydration**
Process hvor client-side React tager over fra server-side rendered HTML.

### **Design Tokens**
Designvariabler (farver, fonts, spacing) centralt defineret og genbrugt.

### **Tailwind CSS**
Utility-first CSS framework med pre-built classes.

### **Next.js Metadata API**
Built-in system til at sætte page metadata (title, description, openGraph osv).

---

## 🎯 Typecheck Kommandoer

```bash
# Check TypeScript fejl
npm run type-check

# Check hele projektet
npm run build

# Run dev server
npm run dev

# Build for produktion
npm run build && npm run start
```

---

## 🔍 Console Debug Tips

```typescript
// Log context værdi
const context = useLanguage();
console.log('Current locale:', context.locale);

// Log localStorage
console.log(localStorage.getItem('nordpixel-booking-cart'));

// Ryd localStorage
localStorage.clear();

// Se alle localStorage keys
Object.keys(localStorage).forEach(key => {
  console.log(key, localStorage.getItem(key));
});

// Lyt til localStorage ændringer
window.addEventListener('storage', (e) => {
  console.log('Storage changed:', e.key, e.newValue);
});
```

---

## 📊 Data Type Cheatsheet

```typescript
// Booking Selection
type BookingSelection = Record<string, number>;
// { "course-id": 1, "another-id": 2 }

// Project File
type ProjectFile = {
  id: string;
  name: string;
  kind: 'html' | 'css' | 'js';
  content: string;
};

// Locale
type Locale = 'da' | 'en';

// Localized Text
type LocalizedText = {
  da: string;
  en: string;
};

// Course Option
type BookableOption = {
  id: string;
  title: LocalizedText;
  pricing: {
    basePrice: number;
    isByPlanning?: boolean;
  };
};
```

---

## ⚡ Performance Optimization Snippets

### Memoize Context Value
```typescript
const value = useMemo(
  () => ({ locale, setLocale }),
  [locale],  // Re-create kun når locale ændres
);
```

### Lazy Load Image
```typescript
import Image from 'next/image';

<Image
  src="/path/to/image.png"
  alt="Description"
  loading="lazy"  // Lazy load
  width={800}
  height={600}
/>
```

### Code Split Route
```typescript
import dynamic from 'next/dynamic';

const WebLab = dynamic(() => import('./WebLab'), {
  loading: () => <p>Loading...</p>,
});
```

---

## 🐛 Fejlfinding Checklist

| Problem | Solution |
|---------|----------|
| Context hook fejl | Sikr at komponenten er inside Provider |
| localStorage tom | Check browser settings tillader localStorage |
| Metadata virker ikke | Sikr `export const metadata` i layout/page file |
| Styling ikke vises | Check Tailwind config, CSS import ordre |
| WebLab crashes | Check Monaco setup, editor ref |
| Booking email sendes ikke | Check EmailJS keys, ratelimit |
| SEO schema vises ikke | Tjek JSON-LD format, valider på schema.org |

---

## 🎨 CSS Responsive Breakpoints

```css
/* Mobile First */
.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    width: 728px;
  }
}

@media (min-width: 1024px) {
  .container {
    width: 1000px;
  }
}
```

---

## 📝 Komponent Checklist Template

```typescript
export function MyComponent() {
  // 1. State
  const [data, setData] = useState<DataType>({});

  // 2. Effects
  useEffect(() => {
    // Load data
    loadData();
  }, []); // Dependencies

  // 3. Handlers
  const handleClick = () => {
    setData({...data});
  };

  // 4. Render
  return (
    <div>
      {/* JSX her */}
    </div>
  );
}
```

---

## 🚀 Deploy Checklist

- [ ] Slet console.logs
- [ ] Slet debug code
- [ ] Run TypeScript check (`npm run build`)
- [ ] Test på phone (responsive)
- [ ] Test alle formularer
- [ ] Test localStorage (private browsing)
- [ ] Check Core Web Vitals
- [ ] Valider JSON-LD på schema.org
- [ ] Tjek robots.txt og sitemap
- [ ] Test email sending (booking form)

---

**Last updated**: 2026-06-18  
**Version**: 1.0  
Print denne side eller gem som PDF til eksamen! 📚
