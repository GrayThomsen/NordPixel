import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'WebLab',
};

export default function DownloadsPage() {
  redirect('/editor');
}