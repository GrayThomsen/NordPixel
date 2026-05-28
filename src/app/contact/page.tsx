import type { Metadata } from 'next';
import { ContactContent } from '../components/ContactContent';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontakt NordPixel for en uforpligtende dialog om forløb, opstart og samarbejde med jeres skole.',
  openGraph: {
    title: 'Kontakt | NordPixel',
    description: 'Tag kontakt til NordPixel om teknologiforståelse, web og AI i undervisningen.',
    type: 'website',
    url: 'https://nordpixel.dev/contact',
  },
  alternates: {
    canonical: 'https://nordpixel.dev/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
