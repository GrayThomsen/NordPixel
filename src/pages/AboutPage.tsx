import React from 'react';
import { Button } from '@components/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
          About Me
        </h1>
        <p className="font-body text-lg text-gray-300">
          Designer, Developer, and Creative Problem Solver
        </p>
      </section>

      {/* Bio Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="aspect-square bg-gradient-to-br from-accent-orange to-gradient-dark rounded-lg"></div>
        </div>
        <div>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Welcome
          </h2>
          <p className="font-body text-lg text-gray-300 mb-4 leading-relaxed">
            I'm a passionate designer and developer specializing in creating immersive digital experiences.
            With expertise in WebGL, 3D design, and modern web technologies, I craft solutions that blend
            aesthetics with functionality.
          </p>
          <p className="font-body text-lg text-gray-300 leading-relaxed">
            My journey combines technical proficiency with creative vision, ensuring every project
            tells a compelling story and delivers measurable results.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-darker rounded-lg mb-12">
        <h2 className="font-heading text-4xl text-white mb-12 text-center">
          Services & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'WebGL & 3D Design',
              description: 'Interactive 3D visualizations and immersive web experiences using Three.js and modern WebGL techniques.',
            },
            {
              title: 'Web Applications',
              description: 'Full-featured web applications with smooth interactions and optimized performance.',
            },
            {
              title: 'Frontend Development',
              description: 'Modern, responsive user interfaces built with React, TypeScript, and Tailwind CSS.',
            },
            {
              title: 'UI/UX Design',
              description: 'Clean, intuitive designs that prioritize user experience and accessibility.',
            },
          ].map((service, index) => (
            <div key={index} className="bg-gradient-dark p-8 rounded-lg border border-accent-orange border-opacity-20">
              <h3 className="font-heading text-xl text-accent-orange mb-3">
                {service.title}
              </h3>
              <p className="font-body text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto mb-12">
        <h2 className="font-heading text-3xl md:text-4xl text-white mb-8">
          Technical Stack
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              category: 'Frontend',
              skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
            },
            {
              category: '3D & Graphics',
              skills: ['Three.js', 'WebGL', 'Babylon.js', 'GLSL'],
            },
            {
              category: 'Tools & Others',
              skills: ['Git', 'Figma', 'Adobe Suite', 'Performance Optimization'],
            },
          ].map((skillGroup, index) => (
            <div key={index}>
              <h3 className="font-heading text-lg text-accent-orange mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.skills.map((skill) => (
                  <li key={skill} className="font-body text-gray-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CV Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-darker text-white p-12 rounded-lg text-center border border-accent-orange border-opacity-20">
          <h2 className="font-heading text-3xl mb-4">Download My CV</h2>
          <p className="font-body text-lg opacity-80 mb-8">
            Get a detailed overview of my experience, education, and achievements.
          </p>
          <Button variant="primary" size="lg">
            Download CV
          </Button>
        </div>
      </section>
    </div>
  );
};
