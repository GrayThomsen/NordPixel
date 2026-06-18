# SEO Implementation

## 🔍 SEO Strategi

NordPixel bruger flere SEO-teknikker:
1. **Metadata tags** (title, description)
2. **JSON-LD struktureret data**
3. **robots.txt** og **sitemap.xml**
4. **OpenGraph** tags (social sharing)
5. **Canonical URLs**
6. **LocalBusiness Schema**

---

## 📄 Metadata Setup (layout.tsx)

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NordPixel - Teknologiforståelse, web og AI for skoler',
    template: '%s | NordPixel',  // Bruges på undersider
  },
  description: 'NordPixel leverer skoleklare forløb...',
  robots: 'index, follow',  // Fortæl Google at indeksere
  openGraph: {
    title: 'NordPixel - Teknologiforståelse, web og AI for skoler',
    description: 'Skoleklare forløb...',
    type: 'website',
    url: '/',
  },
  alternates: {
    canonical: '/',  // Definer canonical URL
  },
  icons: {
    icon: [/* favicon */],
    shortcut: '/images/brand/black-logo.png',
    apple: '/images/brand/black-logo.png',
  },
  other: {
    'revisit-after': '7 days',  // Crawl hint
  },
};
```

**Vigtige felter**:
- `robots`: Instruktioner for søgemaskiner
- `canonical`: Forhindrer duplicate content
- `openGraph`: For social media deling

---

## 🏢 LocalBusiness Schema (LocalBusinessSchema.tsx)

```typescript
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#local-business`,
  name: 'NordPixel',
  url: siteUrl,
  logo: `${siteUrl}/images/brand/black-logo.png`,
  email: 'thomsenwork@outlook.dk',
  areaServed: {
    '@type': 'Country',
    name: 'DK',
  },
  sameAs: [
    'https://www.linkedin.com/company/107025728/',
    'https://www.linkedin.com/in/emil-gray-thomsen-845a8b33b/',
  ],
  description: 'NordPixel tilbyder skoleklare forløb i teknologiforståelse, webudvikling og AI.',
};
```

**Effekt**: Google forstår at vi er en dansk virksomhed

---

## 🤖 robots.txt

```
User-agent: *
Allow: /, /courses, /contact, /editor
Disallow: /courses/booking

Sitemap: https://nordpixel.dev/sitemap.xml
Host: https://nordpixel.dev
```

**Forklaring**:
- Tillad indexering af alle sider UNDTAGEN /courses/booking
- Peg til sitemap for crawling

---

## 🗺️ sitemap.xml

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,  // Højeste prioritet
    },
    {
      url: `${siteUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/editor`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
```

**Prioriteter**:
- `/`: 1.0 (vigtigste)
- `/courses`: 0.9
- `/contact`: 0.7
- `/editor`: 0.7

---

## 📱 OpenGraph (Social Media)

```typescript
openGraph: {
  title: 'NordPixel - Teknologiforståelse, web og AI for skoler',
  description: 'Skoleklare forløb i teknologiforståelse...',
  type: 'website',
  url: '/',
}
```

**Gør**: Når nogen deler siden på Facebook/LinkedIn, bruges disse data

---

## 🔗 Canonical URLs

```typescript
alternates: {
  canonical: '/',  // Forside
}
```

**Formål**: Undgår duplicate content issues

**Eksempel på undersider**:
```typescript
// src/app/courses/page.tsx
export const metadata: Metadata = {
  alternates: {
    canonical: '/courses',
  },
};
```

---

## 📊 Page-level Metadata (Undersider)

### /courses/page.tsx
```typescript
export const metadata: Metadata = {
  title: 'Forløb og fokuskurser | NordPixel',
  description: 'Se alle våre skoleklare forløb og fokuskurser...',
  openGraph: {
    title: 'Forløb og fokuskurser | NordPixel',
    description: 'Se alle våre skoleklare forløb...',
    url: '/courses',
  },
  alternates: {
    canonical: '/courses',
  },
};
```

### /editor/page.tsx
```typescript
export const metadata: Metadata = {
  title: 'WebLab til HTML og CSS i undervisningen | NordPixel',
  description: 'WebLab er NordPixels browserbaserede rum...',
  openGraph: {
    title: 'WebLab til HTML og CSS i undervisningen | NordPixel',
    description: 'Byg, test og gem elevprojekter i WebLab...',
    url: '/editor',
  },
  alternates: {
    canonical: '/editor',
  },
};
```

---

## 🔗 Internal Linking Strategy

**Fra Homepage**:
- Link til /courses ("Se forløb")
- Link til /editor ("Åbn WebLab")
- Link til /contact ("Kontakt os")

**Fra Courses**:
- Link til /courses/booking ("Gå til booking")
- Link til /editor ("Prøv WebLab")

**Vigtig**: Anchor-tekster skal være beskrivende:
- ✅ Godt: "Se vores HTML og CSS kursus"
- ❌ Dårligt: "klik her"

---

## 📸 Image SEO

**Alt-attributes** (vigtige!):
```typescript
<img 
  src="/images/brand/logo.png"
  alt="NordPixel logo - digital teknologiforståelse for skoler"
/>
```

**Billede format**:
- Brug WebP hvor muligt (med fallback)
- Komprimer billeder
- Sæt `width` og `height` attributes

**Next.js Image Component**:
```typescript
import Image from 'next/image';

<Image
  src="/images/live/webdesignkursus1.avif"
  alt="Web design kursus billede"
  width={800}
  height={600}
  priority  // Vigtige billeder
/>
```

---

## ⚡ Performance SEO

### Core Web Vitals
1. **LCP** (Largest Contentful Paint): < 2.5s
2. **CLS** (Cumulative Layout Shift): < 0.1
3. **FID** (First Input Delay): < 100ms

### Optimering:
- Lazy-load ikke-kritiske billeder
- Minifier CSS/JS
- Brug CDN til statiske assets
- Reducer JavaScript bundle

---

## 📝 Heading Struktur

**Vigtig for SEO**:
```html
<!-- ✅ Korrekt struktur -->
<h1>NordPixel - Digital teknologiforståelse for skoler</h1>
<h2>Vores tilbud</h2>
<h3>HTML og CSS</h3>

<!-- ❌ Dårlig struktur -->
<h1>NordPixel</h1>
<h3>Vores tilbud</h3>  <!-- Spring H2 over -->
```

---

## 🔍 Keyword Strategy

**Target keywords for NordPixel**:
- "Teknologiforståelse for skoler"
- "Webudvikling undervisning"
- "AI kursus skoler"
- "HTML CSS for elever"
- "WebLab editor"

**Placering**:
- Title tag
- H1 heading
- First 100 ord på siden
- Meta description
- Interne links

---

## 📊 SEO Eksamen Fokus

1. **Metadata**: Hvad indeholder metadata objektet?
2. **JSON-LD**: Hvad gør LocalBusinessSchema?
3. **robots.txt**: Hvilke URLs er disallowed?
4. **Sitemap**: Hvad er prioriteter?
5. **OpenGraph**: Når bruges det?
6. **Canonical URLs**: Hvorfor vigtige?
7. **Alt-attributes**: Hvor bruges de?
8. **Heading Structure**: H1 → H2 → H3 progression vigtig?
