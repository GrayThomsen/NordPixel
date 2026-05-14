import type { Metadata } from 'next';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'NordPixel',
  description: 'Digital education, courses, workshops, and teaching materials from NordPixel.',
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}