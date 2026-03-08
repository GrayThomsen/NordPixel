import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { webProjects } from '@/assets/data/webProjects';
import { threeProjects } from '@/assets/data/threeProjects';
import { Project } from '@/assets/data/projects';

function findProject(id: string): Project | undefined {
  return (
    webProjects.find((p) => p.id === id) ||
    threeProjects.find((p) => p.id === id)
  );
}

import { usePageTitle } from '@hooks/usePageTitle';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/" />;

  const project = findProject(id);
  if (!project) {
    return <Navigate to="/404" />;
  }
  usePageTitle(project.title);

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="font-heading text-5xl mb-4">{project.title}</h1>
        <div className="mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <p className="font-body text-lg mb-6">{project.description}</p>
        {project.details && (
          <div className="space-y-4">
            <div>
              <h2 className="font-heading text-2xl mb-2">Challenge</h2>
              <p className="font-body">{project.details.challenge}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl mb-2">Solution</h2>
              <p className="font-body">{project.details.solution}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl mb-2">Results</h2>
              <p className="font-body">{project.details.results}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};