# NordPixel - Arkitektur Overblik

## 📐 Høj-niveau struktur

```
src/
├── app/
│   ├── components/          # React komponenter
│   ├── layout.tsx           # Root layout (metadata, schema)
│   ├── page.tsx             # Forside
│   ├── courses/             # Kurs-sider
│   ├── editor/              # WebLab-editor
│   ├── contact/             # Kontakt-form
│   └── sitemap.ts           # SEO
├── context/                 # State management (React Context)
├── assets/                  # Branding, billeder, data
├── styles/                  # CSS, design tokens
└── types/                   # TypeScript definitioner
```

## 🔄 Data Flow

### 1. **Sprogvalg (Context)**
```
LanguageProvider (layout.tsx)
    ↓
    ├→ LanguageContext (useLanguage hook)
    ├→ localStorage (LOCALE_STORAGE_KEY)
    └→ Alle komponenter får locale prop
```

### 2. **Kursusdata**
```
course-catalog.ts (data)
    ↓
    ├→ CoursesContent.tsx (oversigt)
    ├→ CoursesBookingContent.tsx (booking)
    └→ booking-storage.ts (localStorage)
```

### 3. **WebLab Editor**
```
WebLab.tsx (monaco-editor)
    ↓
    ├→ Filer: HTML, CSS, JS
    ├→ localStorage (STORAGE_KEY)
    └→ Preview iframe
```

## 🏗️ Komponent Hierarki

```
AppLayout (layout.tsx)
├── LocalBusinessSchema (SEO)
├── CookieConsent
├── LanguageProvider
└── AppShell
    ├── SiteHeader (nav + sprogvalg)
    ├── Route Content
    │   ├── HomeContent
    │   ├── CoursesContent
    │   ├── CoursesBookingContent
    │   ├── WebLab
    │   └── ContactContent
    └── SiteFooter
```

## 🔑 Vigtige Filer til Eksamen

| Fil | Formål | Linjetal |
|-----|--------|---------|
| `WebLab.tsx` | Monaco editor + preview | ~500 |
| `LanguageContext.tsx` | Sprogvalg state | ~40 |
| `booking-storage.ts` | Kurv-persistence | ~60 |
| `CoursesBookingContent.tsx` | Booking form | ~200 |
| `course-catalog.ts` | Kursusdata | ~300 |
| `layout.tsx` | Metadata + SEO | ~55 |
| `LocalBusinessSchema.tsx` | SEO schema | ~30 |

## 📊 State Management Strategi

- **Context API** for globalt state (sprog)
- **localStorage** for persistent data (kurv, WebLab projekter)
- **Component State** for lokal UI (form inputs, filter)

## 🎯 Eksamen-fokus områder

1. **WebLab**: Monaco integration, file management, preview
2. **Context**: useLanguage hook, provider pattern
3. **Booking**: Cart management, localStorage, form handling
4. **SEO**: Metadata, JSON-LD schema
5. **Styling**: Design tokens, Tailwind, CSS custom properties
