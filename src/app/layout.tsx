import type { Metadata } from 'next';
import { AppShell } from './components/AppShell';
import { CookieConsent } from './components/CookieConsent';
import { LanguageProvider } from '../context/LanguageContext';
import '../styles/index.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://nordpixel.dev');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NordPixel - Teknologiforståelse, web og AI for skoler',
    template: '%s | NordPixel',
  },
  description: 'NordPixel leverer skoleklare forløb i teknologiforståelse, webudvikling og AI med tydelig struktur, materialer og booking for skoler.',
  openGraph: {
    title: 'NordPixel - Teknologiforståelse, web og AI for skoler',
    description: 'Skoleklare forløb i teknologiforståelse, webudvikling og AI med tydelig struktur, materialer og booking for skoler.',
    type: 'website',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/brand/black-logo.png', media: '(prefers-color-scheme: light)' },
      { url: '/images/brand/white-logo.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/images/brand/black-logo.png',
    apple: '/images/brand/black-logo.png',
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className="light" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <CookieConsent />
          <AppShell>{children}</AppShell>
        </LanguageProvider>
      </body>
    </html>
  );
}