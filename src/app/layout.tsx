import type { Metadata } from 'next';
import { AppShell } from './components/AppShell';
import { CookieConsent } from './components/CookieConsent';
import { LanguageProvider } from '../context/LanguageContext';
import '../styles/index.css';

export const metadata: Metadata = {
  title: {
    default: 'NordPixel',
    template: '%s | NordPixel',
  },
  description: 'NordPixel delivers classroom-ready programs in technology literacy, web development, and AI for schools.',
  openGraph: {
    title: 'NordPixel',
    description: 'Classroom-ready programs in technology literacy, web development, and AI for schools.',
    type: 'website',
    url: 'https://nordpixel.dev',
  },
  alternates: {
    canonical: 'https://nordpixel.dev',
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