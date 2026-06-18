# Vigtige Komponenter

## 🏗️ AppShell.tsx

**Formål**: Root layout wrapper  
**Ansvar**: Struktur for hele appen

```typescript
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="appShell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
```

**Vigtige punkter**:
- Wrapper omkring `<main>`
- Indeholder global header/footer
- Children bliver side-indhold

---

## 🎨 SiteHeader.tsx

**Formål**: Navigationsmenu + branding  
**Ansvar**: Navigation, sprogvalg, booking cart

```typescript
export function SiteHeader() {
  const { locale } = useLanguage();
  const [cartCount, setCartCount] = useState(0);

  const navItems = [
    { href: '/', label: copy.nav.home },
    { href: '/editor', label: copy.nav.weblab },
    { href: '/courses', label: copy.nav.courses },
    { href: '/contact', label: copy.nav.contact },
  ];

  return (
    <header className="siteHeader">
      <Link href={SITE_HEADER.brandHref} className="siteHeaderBrand">
        <img src={SITE_HEADER.logoSrc} alt={SITE_HEADER.logoAlt} />
        <span>{SITE_HEADER.brandName}</span>
      </Link>
      
      <nav className="siteNav">
        {navItems.map(item => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
      
      <LanguageSelector />
      
      <Link href={SITE_HEADER.bookingHref} className="siteHeaderCart">
        Kurv ({cartCount})
      </Link>
    </header>
  );
}
```

**Vigtige punkter**:
- Bruger `useLanguage()` for sprogvalg
- Viser kurv-antal
- Navigation til alle sider

---

## 🏠 HomeContent.tsx

**Formål**: Forside indhold  
**Ansvar**: Hero section, trust points, testimonials

**Vigtige elementer**:
1. **Hero Section**
   - Eyebrow (overskrift)
   - Titel
   - Call-to-action buttons

2. **Trust Section**
   - Trust points liste

3. **WebLab Showcase**
   - Hvad er WebLab?

4. **Testimonials**
   - Citater fra skoler

5. **Closing Section**
   - Opfordring til at kontakte

---

## 📚 CoursesContent.tsx

**Formål**: Kursusoversigt med filter  
**Ansvar**: Vis kurser, filter, "tilføj til kurv"

```typescript
export function CoursesContent() {
  const [targetFilter, setTargetFilter] = useState('all');
  
  // Filter kurser baseret på aldersgruppe
  const visibleTracks = PROGRAM_TRACKS.filter((track) => {
    const targetMatches = targetFilter === 'all' || 
                         track.targetKeys.includes(targetFilter);
    return targetMatches;
  });

  const handleAddToCart = (optionId: string) => {
    addSelectionToBookingCart(optionId, bookingOptionIds);
  };

  return (
    <section>
      <h1>Forløb</h1>
      
      {/* Filter buttons */}
      <div className="filters">
        {targetOptions.map(option => (
          <button 
            key={option.id}
            onClick={() => setTargetFilter(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
      
      {/* Kurser */}
      <div className="courses">
        {visibleTracks.map(track => (
          <div key={track.id} className="courseCard">
            <details>
              <summary>{track.title.da}</summary>
              <p>{track.description}</p>
              <button onClick={() => handleAddToCart(track.id)}>
                Tilføj til Kurv
              </button>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}
```

**Vigtige punkter**:
- Filter by aldersgruppe
- Collapsible course cards med `<details>`
- Plus/minus buttons for antal

---

## 🛒 CoursesBookingContent.tsx

**Formål**: Booking formular + kurv  
**Ansvar**: Form, prisberegning, email sending

**Vigtige elementer**:
1. **Kurv oversigt** (valgte kurser + pris)
2. **Formularfelter**:
   - Navn
   - Skole
   - EAN
   - Email
   - Telefon
   - Antal elever
   - Antal klasser
   - Besked

3. **Plus/Minus buttons** (ændrer antal)

4. **Send button** (sender email via EmailJS)

---

## 💻 WebLab.tsx

**Formål**: Monaco editor interface  
**Ansvar**: File management, editor, preview

**Vigtige elementer**:

1. **File Tabs**
   ```
   ┌─ index.html ─── styles.css ─── script.js ─┐
   │  [+] [del]                                 │
   └─────────────────────────────────────────────┘
   ```

2. **Editor Section**
   - Monaco editor (HTML/CSS/JS)
   - Syntax highlighting
   - Auto-completion

3. **Preview Section**
   - Live preview iframe

4. **Resizable Split**
   - Justérbar grænse mellem editor og preview

5. **Tutorial Panel**
   - Accordion med tutorials

---

## 🌐 LanguageSelector.tsx

**Formål**: Sprogvalg button  
**Ansvar**: Skift mellem dansk/engelsk

```typescript
export function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="languageSelector">
      <button 
        onClick={() => setLocale('da')}
        className={locale === 'da' ? 'active' : ''}
      >
        DA
      </button>
      <button 
        onClick={() => setLocale('en')}
        className={locale === 'en' ? 'active' : ''}
      >
        EN
      </button>
    </div>
  );
}
```

---

## 🎛️ CookieConsent.tsx

**Formål**: Cookie consent banner  
**Ansvar**: GDPR compliance, Google Analytics

```typescript
export function CookieConsent() {
  const [consent, setConsent] = useState<'necessary' | 'all' | null>(null);

  const saveConsent = (type: 'necessary' | 'all') => {
    localStorage.setItem('nordpixel-cookie-consent', type);
    setConsent(type);
    
    if (type === 'all') {
      // Indlæs Google Analytics
      loadGoogleAnalytics();
    }
  };

  return (
    <section className="cookieConsent">
      <h2>{copy.title}</h2>
      <p>{copy.text}</p>
      <button onClick={() => saveConsent('necessary')}>
        {copy.necessary}
      </button>
      <button onClick={() => saveConsent('all')}>
        {copy.all}
      </button>
    </section>
  );
}
```

---

## 📧 ContactContent.tsx

**Formål**: Kontaktformular  
**Ansvar**: Email kontakt til NordPixel

**Formularfelter**:
- Navn
- Email
- Telefonummer
- Emne
- Besked

---

## 🔐 LocalBusinessSchema.tsx

**Formål**: JSON-LD schema for SEO  
**Ansvar**: Struktureret data for Google

```typescript
export function LocalBusinessSchema() {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#local-business`,
    name: 'NordPixel',
    url: siteUrl,
    logo: `${siteUrl}/images/brand/black-logo.png`,
    email: SITE_FOOTER.contactEmail,
    areaServed: {
      '@type': 'Country',
      name: 'DK',
    },
    sameAs: [linkedIn_company_url, linkedIn_personal_url],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
    />
  );
}
```

---

## 📊 Komponenter Tree

```
AppLayout (layout.tsx)
├── LocalBusinessSchema
├── CookieConsent
├── LanguageProvider
└── AppShell
    ├── SiteHeader
    │   ├── Logo + Title
    │   ├── Navigation
    │   ├── LanguageSelector
    │   └── Cart Link
    ├── Route Content
    │   ├── HomeContent
    │   ├── CoursesContent
    │   ├── CoursesBookingContent
    │   ├── WebLab
    │   └── ContactContent
    └── SiteFooter
        └── Footer Info
```

---

## 🎯 Eksamen Tips

1. **AppShell**: Struktur for hele appen
2. **SiteHeader**: Global navigation
3. **WebLab**: Mest kompleks komponent
4. **CoursesContent**: Filter logic vigtig
5. **Booking**: Form validation vigtig
6. **LanguageSelector**: Context hook usages vigtig
