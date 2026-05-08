import type { Metadata } from 'next';
import '../styles/index.css';
import { RootLayout as Providers } from './components/RootLayout';
import { Layout as SiteLayout } from './components/Layout';

export const metadata: Metadata = {
  title: 'NordPixel',
  description: 'Digital education, courses, workshops, and teaching materials from NordPixel.',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" suppressHydrationWarning>
      <body>
        <Providers>
          <SiteLayout>{children}</SiteLayout>
        </Providers>
      </body>
    </html>
  );
}