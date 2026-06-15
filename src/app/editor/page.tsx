import type { Metadata } from 'next';
import { WebLab } from '../components/WebLab';

export const metadata: Metadata = {
  title: 'WebLab til HTML og CSS i undervisningen | NordPixel',
  description: 'WebLab er NordPixels browserbaserede rum til HTML og CSS, hvor elever kan bygge, teste og gemme egne projekter.',
  openGraph: {
    title: 'WebLab til HTML og CSS i undervisningen | NordPixel',
    description: 'Byg, test og gem elevprojekter i WebLab direkte i browseren.',
    type: 'website',
    url: '/editor',
  },
  alternates: {
    canonical: '/editor',
  },
};

export default function EditorPage() {
  return (
    <main className="editorPage">
      <WebLab />
    </main>
  );
}