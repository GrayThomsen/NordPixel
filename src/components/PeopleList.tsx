import React, { useState } from 'react';
import { people as defaultPeople } from '../assets/data/people';

export const PeopleList: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [allOpen, setAllOpen] = useState(false);

  const toggle = (id: string) => {
    setExpanded((s) => ({ ...s, [id]: !s[id] }));
  };

  const toggleAll = () => {
    const next = !allOpen;
    setAllOpen(next);
    const map: Record<string, boolean> = {};
    defaultPeople.forEach((p) => (map[p.id] = next));
    setExpanded(map);
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-3xl text-white">People I&apos;ve Worked With</h2>
          <button onClick={toggleAll} className="text-sm text-accent-orange">{allOpen ? 'Collapse All' : 'Expand All'}</button>
        </div>

        <div className="space-y-3">
          {defaultPeople.map((p) => (
            <div key={p.id} className="bg-gradient-darker rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading text-lg text-white">{p.name}</div>
                  <div className="text-sm text-gray-300">{p.title} {p.company ? `· ${p.company}` : ''}</div>
                </div>
                <div className="flex items-center gap-3">
                  {p.linkedIn && (
                    <a href={p.linkedIn} target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-gradient-dark">
                      <svg className="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                  )}

                  <button onClick={() => toggle(p.id)} className="text-sm text-accent-orange">
                    {expanded[p.id] ? 'Collapse' : 'Expand'}
                  </button>
                </div>
              </div>

              {expanded[p.id] && (
                <div className="mt-3 text-sm text-gray-300">
                  {p.blurb}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};