# Visual Architecture & Diagrams

Du kan tegne disse diagrammer under eksamen for at forklare systemet.

---

## 📐 Component Tree

```
AppLayout
│
├─ head
│  └─ LocalBusinessSchema
│
├─ body
│  ├─ LanguageProvider (Context)
│  │  └─ AppShell
│  │     ├─ SiteHeader
│  │     │  ├─ Logo + Brand
│  │     │  ├─ Navigation
│  │     │  ├─ LanguageSelector
│  │     │  └─ Cart Link
│  │     │
│  │     ├─ Route Content (dynamic)
│  │     │  ├─ HomeContent /
│  │     │  ├─ CoursesContent /courses
│  │     │  ├─ CoursesBookingContent /courses/booking
│  │     │  ├─ WebLab /editor
│  │     │  └─ ContactContent /contact
│  │     │
│  │     └─ SiteFooter
│  │        └─ Contact Info
│  │
│  └─ CookieConsent
```

---

## 🔄 Data Flow: Sprogvalg

```
┌─────────────────────────────────────────────────┐
│ Bruger Klikker "Dansk/English" Button            │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ LanguageSelector.tsx │
        │  setLocale('da')     │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────────┐
        │ LanguageContext.setLocale│
        │ → setState('da')         │
        │ → localStorage.setItem() │
        └──────────┬───────────────┘
                   │
                   ▼
        ┌──────────────────────────┐
        │ LanguageProvider re-render│
        │ value = { locale: 'da' } │
        └──────────┬───────────────┘
                   │
                   ▼
        ┌──────────────────────────┐
        │ Alle subscribers notified │
        │ (via useMemo cache bust)  │
        └──────────┬───────────────┘
                   │
                   ▼
        ┌──────────────────────────┐
        │ HomeContent re-renders   │
        │ const copy = mainLanguage│
        │         [locale].homePage│
        │                          │
        │ Tekster bliver dansk! ✓  │
        └──────────────────────────┘
```

---

## 🛒 Data Flow: Booking

```
┌─────────────────────────────────────────────────┐
│ 1. Bruger på /courses klicker                   │
│    "Tilføj til Kurv" for HTML/CSS kursus       │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
    ┌──────────────────────────────────┐
    │ CoursesContent.handleAddToCart()  │
    │ addSelectionToBookingCart(id)     │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────────────┐
    │ booking-storage.ts                        │
    │ function addSelectionToBookingCart()      │
    │ {                                         │
    │   const selection = readBookingSelection()│
    │   const next = {                          │
    │     ...selection,                         │
    │     [id]: (selection[id] ?? 0) + 1        │
    │   }                                       │
    │   writeBookingSelection(next)             │
    │ }                                         │
    └──────────┬───────────────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │ localStorage.setItem(              │
    │   'nordpixel-booking-cart',      │
    │   JSON.stringify({                │
    │     'focus-html-css': 1           │
    │   })                              │
    │ )                                 │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │ 2. Bruger navigerer til           │
    │    /courses/booking               │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────────────┐
    │ CoursesBookingContent.tsx                │
    │ useEffect(() => {                        │
    │   readBookingSelection() henter data     │
    │   setSelectedQuantities(data)            │
    │   HYDRATION KOMPLET ✓                    │
    │ }, [])                                   │
    └──────────┬───────────────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │ 3. Kurv vises med varer:          │
    │    - HTML/CSS: 1x kr. 5000        │
    │    - Total: kr. 5000              │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │ 4. Bruger udfylder form og klikker│
    │    "Send booking"                 │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────────────┐
    │ handleSubmit() → EmailJS.send()          │
    │ {                                        │
    │   to_email: 'booking@nordpixel.dk',     │
    │   from_name: form.name,                 │
    │   items: selectedQuantities,            │
    │   ... mere data                          │
    │ }                                        │
    └──────────┬───────────────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │ Email sendt ✓                     │
    │ Success besked vises              │
    └──────────────────────────────────┘
```

---

## 💾 WebLab File System

```
┌─────────────────────────────────────┐
│ WebLab Editor State                  │
├─────────────────────────────────────┤
│ activeFileId: 'file-1'              │
│ projects: LabProject[]              │
│ {                                   │
│   version: 2,                       │
│   mode: 'full',                     │
│   name: 'my-project',               │
│   updatedAt: '2026-06-18T...',      │
│   files: [                          │
│     {                               │
│       id: 'file-1',                │
│       name: 'index.html',           │
│       kind: 'html',                 │
│       content: '<!doctype html>...' │
│     },                              │
│     {                               │
│       id: 'file-2',                │
│       name: 'styles.css',           │
│       kind: 'css',                  │
│       content: 'body { ... }'       │
│     },                              │
│     {                               │
│       id: 'file-3',                │
│       name: 'script.js',            │
│       kind: 'js',                   │
│       content: ''                   │
│     }                               │
│   ]                                 │
│ }                                   │
└─────────────────────────────────────┘
        │
        ├─ Hvad brugeren laver
        │  (editor inputs)
        │
        ▼
┌─────────────────────────────────────┐
│ Auto-save til localStorage          │
│ STORAGE_KEY = 'nordpixel-weblab...' │
└─────────────────────────────────────┘
        │
        ├─ Overlever page refresh
        │
        ▼
┌─────────────────────────────────────┐
│ Næste gang bruger åbner WebLab      │
│ Projekter genindlæses fra localStorage
└─────────────────────────────────────┘
```

---

## 🎨 Context Provider Pattern

```
┌──────────────────────────────────────────────────┐
│ src/app/layout.tsx                               │
│                                                  │
│ <LanguageProvider>                               │
│   ├─ state: locale = 'da'                        │
│   ├─ function: setLocale(locale)                 │
│   ├─ value: { locale, setLocale }               │
│   │                                              │
│   └─ <LanguageContext.Provider value={value}>   │
│      │                                           │
│      ├─ <AppShell> (can use useLanguage)        │
│      │  ├─ <SiteHeader> (can use useLanguage)   │
│      │  ├─ <HomeContent> (can use useLanguage)  │
│      │  ├─ <CoursesContent>                     │
│      │  └─ <SiteFooter>                         │
│      │                                           │
│      └─ Alle børn har adgang til context        │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│ I en vilkårlig komponent:                        │
│                                                  │
│ export function MyComponent() {                  │
│   const { locale, setLocale } = useLanguage();  │
│   // Kan nu bruge locale og sætte nyt lingua    │
│ }                                                │
└──────────────────────────────────────────────────┘
```

---

## 📍 Metadata & SEO Flow

```
┌─────────────────────────────────────┐
│ layout.tsx metadata object          │
├─────────────────────────────────────┤
│ export const metadata: Metadata = { │
│   title: 'Siden Titel | Brand',    │
│   description: 'Meta beskrivelse',  │
│   robots: 'index, follow',          │
│   openGraph: { ... },               │
│   canonical: '/',                   │
│   other: { 'revisit-after': '7d' } │
│ }                                   │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│ Next.js genererer HTML <head>:      │
│                                     │
│ <title>Siden Titel | Brand</title>  │
│ <meta name="description" content=..>
│ <meta name="robots" content=..>     │
│ <meta property="og:title" content=..>
│ <link rel="canonical" href="/" />   │
│ <meta name="revisit-after" content=..>
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│ Google/Bing crawler scanner HTML    │
│ Indekserer siden baseret på data    │
│ → Side bliver synlig i søgeresultat │
└─────────────────────────────────────┘
```

---

## 🏗️ Styling Architecture

```
┌───────────────────────────────────┐
│ design-tokens.css                 │
│ (CSS Custom Properties)            │
├───────────────────────────────────┤
│ :root {                            │
│   --brand-navy: #0f1f22;          │
│   --font-heading: 'Tomorrow';     │
│   --space-md: 1rem;               │
│ }                                  │
└──────────┬────────────────────────┘
           │
           ├─ globals.css
           │  (Global styles)
           │
           ├─ Tailwind CSS
           │  (Utility classes)
           │
           └─ Component CSS
              (Custom styles)
                │
                ▼
        ┌──────────────────┐
        │ Komponenter      │
        │ får styles fra:  │
        │ - className=""   │
        │ - style={{}}     │
        │ - CSS modules    │
        └──────────────────┘
```

---

## 🔐 localStorage Structure

```
Browser localStorage
│
├─ 'nordpixel-locale'
│  └─ Value: 'da' eller 'en'
│
├─ 'nordpixel-booking-cart'
│  └─ Value: '{"focus-html-css":1,"track-beginner":2}'
│
├─ 'nordpixel-weblab-current'
│  └─ Value: '{version:2, mode:"full", files:[...]}'
│
├─ 'nordpixel-weblab-last-save'
│  └─ Value: '2026-06-18T12:30:45.123Z'
│
├─ 'nordpixel-weblab-is-dirty'
│  └─ Value: 'true' eller 'false'
│
└─ 'nordpixel-cookie-consent'
   └─ Value: 'necessary' eller 'all'
```

---

## 🔌 API Integration Points

```
┌─────────────────────────┐
│ CoursesBookingContent   │
│ handleSubmit()          │
└──────────┬──────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│ EmailJS.send({                      │
│   serviceID: 'service_...',         │
│   templateID: 'template_...',       │
│   userID: 'public_key_...',         │
│   templateParams: {                 │
│     to_email: 'booking@...',        │
│     from_name: form.name,           │
│     items: selectedQuantities,      │
│     total: totalPrice               │
│   }                                 │
│ })                                  │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│ EmailJS Cloud Service               │
│ → Sender email via SMTP             │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│ Email modtaget på booking@nordpixel │
│ med alle form data                  │
└─────────────────────────────────────┘
```

---

## 📋 Responsive Design Flow

```
┌─────────────────────────────────────┐
│ Content (Mobile First)              │
│ 1 kolonne, full width               │
└──────────┬──────────────────────────┘
           │
           ▼
    ┌──────────────────────────┐
    │ @media (min-width: 640px)│ ← Tablet
    │ 2 kolonner               │
    └──────────┬───────────────┘
               │
               ▼
        ┌──────────────────────────┐
        │ @media (min-width: 1024px)
        │ 3 kolonner              │
        │ Max-width container     │
        └──────────┬───────────────┘
                   │
                   ▼
        ┌──────────────────────────┐
        │ Desktop Layout           │
        │ Optimal for mouse/keyboard
        └──────────────────────────┘
```

---

## 🎓 Eksamen: Tegn Dette

Til eksamen, tegn disse 3 diagrams for at vise forståelse:

1. **Component Tree** (hvem renderes hvor?)
2. **Data Flow** (hvordan data bevæger sig?)
3. **localStorage Structure** (hvad gemmes hvor?)

Og forklar:
- Context provider pattern
- Why localhost storage for cart?
- What does hydration mean?
- How does SEO schema work?

Good luck! 🚀
