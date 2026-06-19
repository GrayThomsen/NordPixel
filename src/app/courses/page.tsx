import type { Metadata } from 'next';
import { CoursesContent } from '../components/CoursesContent';

// SEO metadata for the public courses overview page.
export const metadata: Metadata = {
  title: 'Forløb i teknologiforståelse, web og AI | NordPixel',
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
  // Thin route wrapper: all UI/state logic lives in CoursesContent.
  return <CoursesContent />;
}
