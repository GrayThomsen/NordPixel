/**
 * Shared project types and helper functions
 * Data for each category is stored in its own file (webProjects.ts, threeProjects.ts)
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

// helper functions can import from category files when needed

