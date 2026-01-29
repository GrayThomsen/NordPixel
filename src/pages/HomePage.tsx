import React from 'react';
import { Button } from '@components/Button';
import { PixelStarField } from '@components/PixelStarField';
import { ProjectGallery } from '@components/ProjectGallery';
import { PeopleList } from '@components/PeopleList';

export const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gradient-dark via-gradient-darker to-gradient-dark">
        {/* Pixel Star Field */}
        <PixelStarField />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-4">
            Welcome to <span className="text-accent-orange">NordPixel</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-300 opacity-90 mb-8 max-w-2xl mx-auto">
            WebGL & 3D Design, Web Applications, and Frontend Development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              View Portfolio
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Project gallery (horizontal scrolling) */}
      <ProjectGallery />

      {/* People list (expandable) */}
      <PeopleList />

      {/* Featured Projects Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl text-white mb-12 text-center">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Cards Placeholder */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group bg-gradient-darker rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-accent-orange border-opacity-20"
            >
              <div className="aspect-video bg-gradient-to-br from-gradient-darker to-gradient-dark flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <p className="text-accent-orange font-heading text-xl">Project {i}</p>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-white mb-2">Project Title</h3>
                <p className="font-body text-sm text-gray-300 mb-4">
                  Brief project description highlighting key technologies and achievements.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-accent-orange bg-opacity-20 text-accent-orange text-xs rounded-full font-body">
                    React
                  </span>
                  <span className="px-3 py-1 bg-accent-orange bg-opacity-20 text-accent-orange text-xs rounded-full font-body">
                    Three.js
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            View All Projects
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-dark text-white border-t border-accent-orange border-opacity-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Ready to collaborate?
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with cutting-edge web technologies and design.
          </p>
          <Button variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};
