import { CourseDetailPage } from '../../pages/CourseDetailPage';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <CourseDetailPage courseId={id} />;
}