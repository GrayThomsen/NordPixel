import type { Metadata } from 'next';
import { ContactContent } from '../components/ContactContent';

export const metadata: Metadata = {
  title: 'Kontakt om skoleforløb i teknologiforståelse',
  description: 'Kontakt NordPixel for en uforpligtende dialog om forløb, opstart og samarbejde med jeres skole.',
  openGraph: {
    title: 'Kontakt om skoleforløb i teknologiforståelse | NordPixel',
    description: 'Tag kontakt til NordPixel om teknologiforståelse, web og AI i undervisningen.',
    type: 'website',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
