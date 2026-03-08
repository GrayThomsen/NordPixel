import React, { useState } from 'react';
import { teachingTopics, calculateTeachingPrice, Region } from '@/assets/data/teaching';
import { DenmarkMap } from '@components/DenmarkMap';

import { usePageTitle } from '@hooks/usePageTitle';

export const TeachingPage: React.FC = () => {
  usePageTitle('Teaching');
  const [selectedRegion, setSelectedRegion] = useState<Region>('nordsjaelland');

  return (
    <div className="min-h-screen bg-gradient-dark text-white">
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="font-heading text-5xl md:text-6xl mb-4">Teaching</h1>
        <p className="font-body text-lg text-gray-400 mb-8 max-w-2xl">
          I offer basic web development, game development and 3D workflow
          instruction around Denmark. Price varies by region (higher further
          from Helsingør).
        </p>

        {/* interactive map placeholder */}
        <DenmarkMap
          selected={selectedRegion}
          onSelect={(r) => setSelectedRegion(r)}
        />

        <p className="mb-12">
          Estimated starting price: <strong>{calculateTeachingPrice(selectedRegion)} kr</strong>
        </p>

        <h2 className="font-heading text-3xl mb-4">Topics I Teach</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {teachingTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};