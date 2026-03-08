/**
 * Course data for the shop page
 */

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
}

export const courses: Course[] = [
  {
    id: 'course-basic-webdev',
    title: 'Basic Web Development',
    description: 'HTML, CSS & JavaScript fundamentals for young learners.',
    price: 1200,
  },
  {
    id: 'course-ai-webdev',
    title: 'A.I. in Web Development',
    description: 'Intro to using AI tools and APIs in web projects.',
    price: 1500,
  },
  {
    id: 'course-seo-fundamentals',
    title: 'SEO Fundamentals',
    description: 'How to make websites searchable and performant.',
    price: 1000,
  },
];