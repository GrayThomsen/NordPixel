import { SITE_FOOTER } from '../../assets/headerAndFooter/site-branding';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://nordpixel.dev');

// Struktureret data for lokal virksomhed til SEO.
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
  sameAs: [SITE_FOOTER.linkedinCompanyUrl, SITE_FOOTER.linkedinPersonalUrl],
  description: 'NordPixel tilbyder skoleklare forløb i teknologiforståelse, webudvikling og AI.',
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
    />
  );
}
