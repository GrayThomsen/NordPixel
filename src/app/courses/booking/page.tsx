import { CoursesBookingContent } from '../../components/CoursesBookingContent';

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
