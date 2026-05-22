'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export function HomeContent() {
  const { dictionary } = useLanguage();

  return (
    <main className="landing">
      <section className="landing__hero">
        <p className="landing__eyebrow">{dictionary.home.eyebrow}</p>
        <h1>{dictionary.home.title}</h1>
        <p className="landing__lead">{dictionary.home.lead}</p>
        <div className="landing__actions">
          <Link href="/editor" className="landing__button landing__button--primary">
            {dictionary.home.ctaWeblab}
          </Link>
          <Link href="/courses" className="landing__button landing__button--ghost">
            {dictionary.home.ctaCourses}
          </Link>
        </div>
      </section>
    </main>
  );
}
