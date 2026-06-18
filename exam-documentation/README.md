# Eksamen Dokumentation - Guide

## 📚 Dokumentation Index

| Dokument | Tema | For Hvem? |
|----------|------|-----------|
| [00-Architecture-Overview](00-Architecture-Overview.md) | Høj-niveau struktur | Start her! |
| [01-Monaco-WebLab](01-Monaco-WebLab.md) | Editor + file system | WebLab deep-dive |
| [02-Context-System](02-Context-System.md) | Sprogvalg + global state | Context API pattern |
| [03-Booking-System](03-Booking-System.md) | Kurv + booking form | Data persistence |
| [04-Key-Components](04-Key-Components.md) | Vigtige React komponenter | Komponent-oversigt |
| [05-SEO-Implementation](05-SEO-Implementation.md) | Metadata + schema | SEO teknikker |
| [06-Styling-System](06-Styling-System.md) | Design tokens + CSS | Styling arkitektur |

---

## 🎯 Læse Guide Efter Emne

### 💻 Hvis du skal forklare WebLab til eksamen:
1. Start: [Architecture Overview](00-Architecture-Overview.md) - Data flow del
2. Dybt: [Monaco WebLab](01-Monaco-WebLab.md) - Hele dokumentet
3. Styling: [Styling System](06-Styling-System.md) - Editor layout del

### 🌍 Hvis du skal forklare Sprogvalg:
1. Start: [Architecture Overview](00-Architecture-Overview.md) - Data flow del
2. Dybt: [Context System](02-Context-System.md) - Hele dokumentet
3. Implementering: [Key Components](04-Key-Components.md) - LanguageSelector del

### 🛒 Hvis du skal forklare Booking:
1. Start: [Booking System](03-Booking-System.md) - Hele dokumentet
2. Komponenter: [Key Components](04-Key-Components.md) - CoursesBookingContent del
3. Storage: [Booking System](03-Booking-System.md) - localStorage del

### 🔍 Hvis du skal forklare SEO:
1. Start: [SEO Implementation](05-SEO-Implementation.md) - Hele dokumentet
2. Komponenter: [Key Components](04-Key-Components.md) - LocalBusinessSchema del

### 🎨 Hvis du skal forklare Styling:
1. Start: [Styling System](06-Styling-System.md) - Hele dokumentet
2. Konfiguration: [Styling System](06-Styling-System.md) - Tailwind Config del

---

## ❓ Quick FAQ

### Q: Hvor gemmes kurv-data?
**A**: `localStorage['nordpixel-booking-cart']`  
Se: [Booking System](03-Booking-System.md#-localstorage-struktur)

### Q: Hvordan skifter bruger sprog?
**A**: Klikker button i LanguageSelector → `setLocale('en')` → localStorage + re-render  
Se: [Context System](02-Context-System.md#-flow-bruger-skifter-sprog)

### Q: Hvad gør LocalBusinessSchema?
**A**: Fortæller Google at vi er en dansk virksomhed  
Se: [SEO Implementation](05-SEO-Implementation.md#-localbusiness-schema)

### Q: Hvordan oprettes filer i WebLab?
**A**: Bruger klikker `+` knap → `makeUniqueFileName()` → ny ProjectFile  
Se: [Monaco WebLab](01-Monaco-WebLab.md#-fil-operationer)

### Q: Hvordan gemmes WebLab projekter?
**A**: Hver ændring auto-saves til `localStorage['nordpixel-weblab-current']`  
Se: [Monaco WebLab](01-Monaco-WebLab.md#-storage-og-persistence)

### Q: Hvor er design tokens defineret?
**A**: `src/styles/design-tokens.css`  
Se: [Styling System](06-Styling-System.md#-design-tokens)

### Q: Hvad er "hydration" i booking?
**A**: At læse localStorage data ved komponent mount  
Se: [Booking System](03-Booking-System.md#-hydration)

### Q: Hvordan virker context med re-renders?
**A**: useMemo optimerer - kun re-render når locale ændres  
Se: [Context System](02-Context-System.md#-performance-optimering)

---

## 🗂️ Fils Map til Eksamen

```
src/
├── app/
│   ├── components/
│   │   ├── WebLab.tsx ..................... Monaco editor (~500 linjer)
│   │   ├── CoursesContent.tsx ............ Kursoversigt + filter
│   │   ├── CoursesBookingContent.tsx .... Booking form
│   │   ├── LanguageSelector.tsx ......... Sprogvalg
│   │   ├── SiteHeader.tsx ............... Navigation + kurv
│   │   ├── HomeContent.tsx .............. Forside indhold
│   │   ├── LocalBusinessSchema.tsx ...... SEO schema
│   │   ├── AppShell.tsx ................. Root wrapper
│   │   └── courses/
│   │       ├── course-catalog.ts ........ Kursusdata
│   │       ├── booking-storage.ts ....... localStorage API
│   │       └── course-types.ts .......... TypeScript types
│   ├── layout.tsx ........................ Root layout + metadata
│   ├── page.tsx ......................... Forside
│   ├── sitemap.ts ....................... SEO sitemap
│   ├── robots.ts ........................ SEO robots
│   ├── editor/page.tsx .................. WebLab side
│   ├── courses/page.tsx ................. Kurser side
│   └── courses/booking/page.tsx ......... Booking side
├── context/
│   ├── LanguageContext.tsx ............. Sprogvalg provider
│   ├── languageConfig.ts ............... Konfiguration
│   ├── mainLanguage.ts ................. Forside tekster
│   ├── courseLanguage.ts ............... Kursus tekster
│   ├── weblabLanguage.ts ............... WebLab tekster
│   └── contactLanguage.ts .............. Kontakt tekster
└── styles/
    ├── design-tokens.css ............... CSS variabler
    ├── globals.css ..................... Globale styles
    ├── fonts.css ....................... Font imports
    └── tailwind.css .................... Tailwind imports
```

---

## 🎓 Eksamen Strategi

### Hvis du har 10 minutter:
1. Forklar Architecture Overview
2. Vis WebLab strukturen
3. Nævn Context use case

### Hvis du har 20 minutter:
1. Architecture + data flow
2. WebLab (monaco + files)
3. Context (provider pattern)
4. Booking (localStorage)

### Hvis du har 30 minutter:
1. Hele Architecture
2. WebLab (deep dive)
3. Context + useLanguage
4. Booking + EmailJS
5. SEO schema
6. Styling tokens

---

## 📊 Nøgle Eksamen Begreber

| Begreb | Fil | Kort Forklaring |
|--------|-----|-----------------|
| **Context** | LanguageContext.tsx | Global state uden prop drilling |
| **Provider** | LanguageProvider | Wrapper omkring app |
| **Hook** | useLanguage() | Tilgang til context value |
| **localStorage** | booking-storage.ts | Persistent data i browser |
| **Monaco** | WebLab.tsx | Code editor bibliotek |
| **Schema** | LocalBusinessSchema.tsx | JSON-LD for SEO |
| **Tokens** | design-tokens.css | CSS variabler |
| **Metadata** | layout.tsx | Next.js metadata API |
| **Sitemap** | sitemap.ts | XML for søgemaskiner |
| **Hydration** | CoursesBookingContent | Client-side data loading |

---

## 🔗 Vigtige Kodelinks

**Context Pattern**:
```typescript
// Definer context
const LanguageContext = createContext<LanguageContextValue | null>(null);

// Provider
<LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>

// Brug
const { locale, setLocale } = useLanguage();
```

**localStorage API**:
```typescript
// Gem
localStorage.setItem('key', JSON.stringify(data));

// Hent
const data = JSON.parse(localStorage.getItem('key'));

// Lyt
window.addEventListener('storage', () => { /* update */ });
```

**Next.js Metadata**:
```typescript
export const metadata: Metadata = {
  title: 'Siden titel',
  description: 'Meta description',
  robots: 'index, follow',
  openGraph: { /* ... */ },
  alternates: { canonical: '/' },
};
```

---

## ✅ Checklist Før Eksamen

- [ ] Læs Architecture Overview
- [ ] Forstå WebLab fil-system
- [ ] Forstå Context provider pattern
- [ ] Forstår localStorage flow
- [ ] Kan forklare booking form
- [ ] Kan forklare SEO schema
- [ ] Kan forklare design tokens
- [ ] Kan vise kode eksempler
- [ ] Kan tegne data flow diagram
- [ ] Kan gennemgå komponenter tree

---

## 🎬 Eksamen Presentation Tips

1. **Start med diagram**: Tegn arkitekturen
2. **Vis kode**: Copy-paste relevante linjer
3. **Forklar flow**: Hvordan data bevæger sig
4. **Nævn libraries**: Monaco, Tailwind, Next.js
5. **Tal om valg**: Hvorfor Context i stedet for Redux?
6. **Nævn forbedringer**: Hvad kunne være bedre?

Held og lykke med eksamen! 🚀
