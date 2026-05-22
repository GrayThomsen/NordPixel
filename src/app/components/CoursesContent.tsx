'use client';

import { useLanguage } from '../../context/LanguageContext';

export function CoursesContent() {
  const { dictionary } = useLanguage();

  return (
    <main className="courses-page">
      <section className="courses-page__hero">
        <h1>{dictionary.courses.title}</h1>
        <p>{dictionary.courses.intro}</p>
      </section>

      <section className="courses-page__grid" aria-label={dictionary.courses.title}>
        <article className="courses-card">
          <h2>{dictionary.courses.trackOne}</h2>
          <p>{dictionary.courses.placeholder}</p>
        </article>
        <article className="courses-card">
          <h2>{dictionary.courses.trackTwo}</h2>
          <p>{dictionary.courses.placeholder}</p>
        </article>
        <article className="courses-card">
          <h2>{dictionary.courses.trackThree}</h2>
          <p>{dictionary.courses.placeholder}</p>
        </article>
      </section>
    </main>
  );
}
