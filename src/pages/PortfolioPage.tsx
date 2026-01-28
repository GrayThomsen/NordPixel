import React from 'react';
import { projects } from '@/assets/data/projects';
import { Button } from '@components/Button';

export const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="font-heading text-5xl md:text-6xl text-primary-dark mb-4">
          Portfolio
        </h1>
        <p className="font-body text-lg text-primary-dark opacity-70 max-w-2xl">
          A showcase of my work in WebGL, 3D design, web applications, and frontend development.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <p className="text-primary-dark font-heading text-lg">{project.title}</p>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary-dark mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-primary-dark opacity-60 mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-light text-primary-dark text-xs rounded-full font-body"
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
