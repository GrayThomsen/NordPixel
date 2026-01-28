/**
 * Project data structure and sample projects
 * Replace with your actual project data
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  category: 'webgl' | '3d' | 'web' | 'frontend';
  featured: boolean;
  demoLink?: string;
  codeLink?: string;
  details?: {
    challenge: string;
    solution: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Interactive 3D Visualization',
    shortDescription: 'An immersive WebGL experience showcasing real-time 3D rendering.',
    description: 'Developed an interactive 3D visualization using Three.js and WebGL, featuring real-time rendering with advanced lighting and shadow techniques.',
    image: '/images/project-1.jpg',
    technologies: ['Three.js', 'WebGL', 'TypeScript', 'React'],
    category: 'webgl',
    featured: true,
    demoLink: '#',
    details: {
      challenge: 'Creating smooth, performant 3D interactions on web',
      solution: 'Implemented LOD (Level of Detail) techniques and optimized geometry',
      results: '60fps performance on desktop devices',
    },
  },
  {
    id: 'project-2',
    title: 'Responsive Web Application',
    shortDescription: 'A modern web app built with React and Tailwind CSS.',
    description: 'Built a fully responsive web application with smooth animations and optimized performance.',
    image: '/images/project-2.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    featured: false,
  },
  {
    id: 'project-3',
    title: '3D Product Showcase',
    shortDescription: 'Interactive 3D model viewer for product visualization.',
    description: 'Created an interactive 3D product showcase allowing users to rotate, zoom, and inspect models.',
    image: '/images/project-3.jpg',
    technologies: ['Three.js', 'Babylon.js', 'WebGL'],
    category: '3d',
    featured: true,
  },
];

/**
 * Get featured projects
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

/**
 * Get project by ID
 */
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter((project) => project.category === category);
};
