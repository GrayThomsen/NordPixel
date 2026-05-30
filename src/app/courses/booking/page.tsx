import type { Metadata } from 'next';
import { CoursesBookingContent } from '../../components/CoursesBookingContent';

export const metadata: Metadata = {
  title: 'Booking af skoleforløb',
  description: 'Book NordPixel-forløb og fokuskurser til jeres skole. Vælg forløb, antal og kontaktoplysninger i bookingkurven.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Booking af skoleforløb | NordPixel',
    description: 'Book forløb og fokuskurser i NordPixels bookingkurv.',
    type: 'website',
    url: '/courses/booking',
  },
  alternates: {
    canonical: '/courses/booking',
  },
};

type CoursesBookingPageProps = {
  searchParams?: Promise<{
    add?: string;
  }>;
};

export default async function CoursesBookingPage({ searchParams }: CoursesBookingPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const addId = typeof resolvedSearchParams?.add === 'string' ? resolvedSearchParams.add : undefined;
  return <CoursesBookingContent initialAddId={addId} />;
}
