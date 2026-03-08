/**
 * 3D projects data file
 */
import { Project } from './projects';

export const threeProjects: Project[] = [
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
    id: 'project-3',
    title: '3D Product Showcase',
    shortDescription: 'Interactive 3D model viewer for product visualization.',
    description: 'Created an interactive 3D product showcase allowing users to rotate, zoom, and inspect models.',
    image: '/images/project-3.jpg',
    technologies: ['Three.js', 'Babylon.js', 'WebGL'],
    category: '3d',
    featured: true,
  },
  // Add other 3D projects here
];
