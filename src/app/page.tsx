import type { Metadata } from 'next';
import { HomeContent } from './components/HomeContent';
import { SITE_FOOTER } from '../assets/headerAndFooter/site-branding';

// Struktureret data for organisation og website til SEO.
const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://nordpixel.dev/#organization',
      name: 'NordPixel',
      url: 'https://nordpixel.dev',
      logo: 'https://nordpixel.dev/images/brand/black-logo.png',
      email: SITE_FOOTER.contactEmail,
      sameAs: [SITE_FOOTER.linkedinCompanyUrl, SITE_FOOTER.linkedinPersonalUrl],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nordpixel.dev/#website',
      url: 'https://nordpixel.dev',
      name: 'NordPixel',
      publisher: {
        '@id': 'https://nordpixel.dev/#organization',
      },
      inLanguage: 'da-DK',
    },
  ],
};

// Side-metadata til søgning, deling og canonical URL.
export const metadata: Metadata = {
  title: 'Digital teknologiforståelse for skoler',
  description: 'NordPixel tilbyder digital teknologiforståelse for skoler med praksisnære forløb, tydelig progression, WebLab og konkrete undervisningsmaterialer.',
  openGraph: {
    title: 'Digital teknologiforståelse for skoler | NordPixel',
    description: 'Praksisnære skoleforløb i digital teknologiforståelse, web og AI med tydelig progression og konkrete elevprodukter.',
    type: 'website',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD indlejres som script, så søgemaskiner kan læse dataene. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      {/* Primært sideindhold renderes her. */}
      <HomeContent />
    </>
  );
}