import type { Metadata } from 'next';
import { CoursesContent } from '../components/CoursesContent';

export const metadata: Metadata = {
  title: 'Forløb',
};

export default function CoursesPage() {
  return <CoursesContent />;
}
