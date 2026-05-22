'use client';

import { useLanguage } from '../../context/LanguageContext';

export function ContactContent() {
  const { dictionary } = useLanguage();

  return (
    <main className="contact-page">
      <section className="contact-page__hero">
        <h1>{dictionary.contact.title}</h1>
        <p>{dictionary.contact.intro}</p>
      </section>

      <section className="contact-page__grid">
        <article className="contact-card">
          <h2>{dictionary.contact.contactTitle}</h2>
          <p>{dictionary.contact.contactPlaceholder}</p>
        </article>
        <article className="contact-card">
          <h2>{dictionary.contact.aboutTitle}</h2>
          <p>{dictionary.contact.aboutText}</p>
        </article>
      </section>
    </main>
  );
}
