import type { Metadata } from 'next';
import { WebLab } from '../components/WebLab';

// SEO metadata for the browser-based WebLab experience.
export const metadata: Metadata = {
  title: 'WebLab til HTML, CSS og JavaScript i undervisningen | NordPixel',
  description: 'WebLab er NordPixels browserbaserede rum til HTML, CSS og JavaScript, hvor elever kan bygge, teste og gemme egne projekter.',
  openGraph: {
    title: 'WebLab til HTML, CSS og JavaScript i undervisningen | NordPixel',
    description: 'Byg, test og gem elevprojekter i WebLab direkte i browseren.',
    type: 'website',
    url: '/editor',
  },
  alternates: {
    canonical: '/editor',
  },
};

export default function EditorPage() {
  // WebLab is client-driven, this page only provides the route shell.
  return (
    <main className="editorPage">
      <WebLab />
    </main>
  );
}