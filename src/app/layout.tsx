import type { Metadata } from 'next';
import { SiteHeader } from './components/SiteHeader';
import { LanguageProvider } from '../context/LanguageContext';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'NordPixel',
  description: 'Digital education, courses, workshops, and teaching materials from NordPixel.',
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
          <SiteHeader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}