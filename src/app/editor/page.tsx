import type { Metadata } from 'next';
import { EditorIntro } from '../components/EditorIntro';
import { WebLab } from '../components/WebLab';

export const metadata: Metadata = {
  title: 'WebLab',
  description: 'WebLab er NordPixels browserbaserede rum til HTML og CSS, hvor elever kan bygge, teste og gemme egne projekter.',
  openGraph: {
    title: 'WebLab | NordPixel',
    description: 'Byg, test og gem elevprojekter i WebLab direkte i browseren.',
    type: 'website',
    url: 'https://nordpixel.dev/editor',
  },
  alternates: {
    canonical: 'https://nordpixel.dev/editor',
  },
};

export default function EditorPage() {
  return (
    <main className="editorPage">
      <EditorIntro />
      <WebLab />
    </main>
  );
}