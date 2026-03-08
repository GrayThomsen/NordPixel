import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { updates, UpdatePost } from '@/assets/data/updates';

import { usePageTitle } from '@hooks/usePageTitle';

export const UpdateDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/updates" />;

  const post = updates.find((u) => u.id === id);
  if (!post) return <Navigate to="/updates" />;
  usePageTitle(post.title);

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl mb-2">{post.title}</h1>
        <p className="text-gray-400 text-sm mb-8">{post.date}</p>
        <p className="font-body text-lg">{post.excerpt}</p>
        {/* future full content here */}
      </section>
    </div>
  );
};