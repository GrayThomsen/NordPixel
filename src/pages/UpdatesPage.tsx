import React from 'react';
import { updates, UpdatePost } from '@/assets/data/updates';
import { Link } from 'react-router-dom';

import { usePageTitle } from '@hooks/usePageTitle';

export const UpdatesPage: React.FC = () => {
  usePageTitle('Updates');
  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl mb-6">Updates &amp; Blog</h1>
        <ul className="space-y-6">
          {updates.map((u: UpdatePost) => (
            <li key={u.id} className="border-b border-gradient-darker pb-4">
              <Link to={`/updates/${u.id}`} className="block">
                <h2 className="font-heading text-2xl hover:text-accent-orange">
                  {u.title}
                </h2>
                <p className="text-gray-400 text-sm mb-1">{u.date}</p>
                <p className="text-gray-300">{u.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};