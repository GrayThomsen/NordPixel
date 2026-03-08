import React, { useRef } from 'react';
import { webProjects } from '@/assets/data/webProjects';
import { threeProjects } from '@/assets/data/threeProjects';
import { Project } from '@/assets/data/projects';

export const ProjectGallery: React.FC = () => {
  // combine and pick featured
  const allProjects: Project[] = [...webProjects, ...threeProjects];
  const projects = allProjects.filter((p) => p.featured);
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: -ref.current.clientWidth * 0.7, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: ref.current.clientWidth * 0.7, behavior: 'smooth' });
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-3xl text-white">Featured Projects</h2>
          <div className="flex gap-2">
            <button onClick={scrollLeft} aria-label="Scroll left" className="p-2 rounded bg-gradient-darker hover:bg-gradient-dark">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={scrollRight} aria-label="Scroll right" className="p-2 rounded bg-gradient-darker hover:bg-gradient-dark">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="overflow-x-auto no-scrollbar scroll-snap-x scroll-smooth -mx-4 px-4"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-6 items-stretch">
            {projects.map((p: Project) => (
              <article key={p.id} className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[420px] bg-gradient-dark rounded-lg overflow-hidden shadow-lg scroll-snap-align-start">
                <div className="h-40 bg-gray-800">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{p.shortDescription}</p>
                  <div className="flex items-center gap-3">
                    {p.demoLink && (
                      <a href={p.demoLink} className="text-accent-orange font-medium hover:underline">View Demo</a>
                    )}
                    {p.codeLink && (
                      <a href={p.codeLink} className="text-gray-300 hover:underline">Code</a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};