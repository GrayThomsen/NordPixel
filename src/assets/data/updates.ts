/**
 * Simple update/blog post list
 */

export interface UpdatePost {
  id: string;
  title: string;
  date: string; // ISO format
  excerpt: string;
}

export const updates: UpdatePost[] = [
  {
    id: 'launch-site',
    title: 'Site Relaunch with New Structure',
    date: '2026-03-08',
    excerpt: 'The Nordpixel site has been restructured into Web.dev, 3D.dev, and Teaching sections.',
  },
  {
    id: 'teaching-map',
    title: 'Interactive Denmark Map Coming Soon',
    date: '2026-03-09',
    excerpt: 'A 3D map of Denmark will let you pick your region and see prices for lessons.',
  },
];