import type { Metadata } from 'next';
import { CoursesContent } from '../components/CoursesContent';

export const metadata: Metadata = {
  title: 'Forløb i teknologiforståelse, web og AI',
  description: 'Se NordPixels forløb i teknologiforståelse, web og AI til skoler. Filtrer efter målgruppe og gå direkte til booking.',
  openGraph: {
    title: 'Forløb i teknologiforståelse, web og AI | NordPixel',
    description: 'Praktiske og skoleklare forløb i teknologiforståelse, web og AI.',
    type: 'website',
    url: '/courses',
  },
  alternates: {
    canonical: '/courses',
  },
};

export default function CoursesPage() {
  return <CoursesContent />;
}
