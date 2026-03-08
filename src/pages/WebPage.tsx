import React from 'react';
import { webProjects } from '@/assets/data/webProjects';
import { Button } from '@components/Button';

import { usePageTitle } from '@hooks/usePageTitle';

export const WebPage: React.FC = () => {
  usePageTitle('Web.dev');
  return (
    <div className="min-h-screen bg-gradient-dark">
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
          Web.dev
        </h1>
        <p className="font-body text-lg text-gray-400 max-w-2xl mb-12">
          A showcase of my web‑development work (React, frontend apps, tooling).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-darker rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-accent-orange border-opacity-20"
            >
              <div className="aspect-video bg-gradient-to-br from-gradient-darker to-gradient-dark flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <p className="text-white font-heading text-lg">{project.title}</p>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-white mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-gray-400 mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent-orange bg-opacity-20 text-accent-orange text-xs rounded-full font-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};