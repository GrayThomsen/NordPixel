import type { Metadata } from 'next';
import { WebLab } from '../components/WebLab';

export const metadata: Metadata = {
  title: 'WebLab',
};

export default function EditorPage() {
  return (
    <main className="editor-page">
      <WebLab />
    </main>
  );
}