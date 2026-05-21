import type { Metadata } from 'next';
import Link from 'next/link';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'NordPixel',
  description: 'Digital education, courses, workshops, and teaching materials from NordPixel.',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" suppressHydrationWarning>
      <body>
        <header className="site-header">
          <div className="site-header__inner">
            <Link href="/" className="site-header__brand">
              NordPixel
            </Link>
            <nav className="site-header__nav" aria-label="Primary">
              <Link href="/">Home</Link>
              <Link href="/editor">Editor</Link>
              <Link href="/downloads">Downloads</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}