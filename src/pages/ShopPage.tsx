import React from 'react';
import { courses, Course } from '@/assets/data/courses';
import { Button } from '@components/Button';

import { usePageTitle } from '@hooks/usePageTitle';

export const ShopPage: React.FC = () => {
  usePageTitle('Shop');
  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="font-heading text-5xl mb-6">Courses &amp; Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c: Course) => (
            <div
              key={c.id}
              className="bg-gradient-darker p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="font-heading text-2xl mb-2">{c.title}</h2>
                <p className="font-body text-gray-300 mb-4">{c.description}</p>
              </div>
              <div className="mt-4">
                <span className="font-heading text-xl">
                  {c.price} kr
                </span>
                <Button variant="primary" size="md" className="w-full mt-4">
                  Buy now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};