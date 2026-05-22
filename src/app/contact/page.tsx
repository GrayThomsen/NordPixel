import type { Metadata } from 'next';
import { ContactContent } from '../components/ContactContent';

export const metadata: Metadata = {
  title: 'Kontakt',
};

export default function ContactPage() {
  return <ContactContent />;
}
