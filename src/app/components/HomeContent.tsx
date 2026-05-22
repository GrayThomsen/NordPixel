'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const HOME_COPY = {
  da: {
    eyebrow: 'Digital læring med professionel leverance',
    title: 'NordPixel gør digital læring konkret for skoler, lærere og elever.',
    lead:
      'Vi udvikler og leverer undervisningsforløb i web, kreativ teknologi og AI med tydelig progression, stærke materialer og en implementering, der fungerer i praksis.',
    proofPoints: [
      { value: 'Skoleklar', label: 'Designet til virkelige klasselokaler og planlægning' },
      { value: 'Didaktisk stærk', label: 'Klar faglig retning og tydelige læringsmål' },
      { value: 'Leveringssikker', label: 'Professionel opstart, afvikling og opfølgning' },
    ],
    authorityTitle: 'Hvorfor NordPixel',
    authorityCards: [
      {
        title: 'Undervisning med retning',
        text: 'Forløb bygges med progression, så eleverne løfter sig trin for trin med tydelige mål.',
      },
      {
        title: 'Struktur der skaber ro',
        text: 'Undervisere får klare rammer og materialer, så implementering bliver enkel og stabil.',
      },
      {
        title: 'Kvalitet der kan mærkes',
        text: 'Vi kombinerer kreativitet og faglighed, så eleverne arbejder meningsfuldt med teknologi.',
      },
    ],
    methodTitle: 'Sådan skaber vi effekt',
    methodSteps: [
      { title: 'Afklaring', text: 'Målgruppe, ambition og rammer defineres sammen med skolen.' },
      { title: 'Tilpasning', text: 'Indhold og materialer justeres, så de matcher undervisningens kontekst.' },
      { title: 'Gennemførsel', text: 'Forløbet leveres med tydelig opfølgning og konkret læringsudbytte.' },
    ],
    ctaWeblab: 'Åbn WebLab',
    ctaCourses: 'Se forløb',
    ctaContact: 'Kontakt os',
    closing: 'Vil I løfte digital læring med en partner, der leverer med både faglig tyngde og driftsmæssig kvalitet?',
  },
  en: {
    eyebrow: 'Digital learning with professional delivery',
    title: 'NordPixel makes digital learning concrete for schools, teachers, and students.',
    lead:
      'We design and deliver educational programs in web, creative technology, and AI with clear progression, strong materials, and implementation that works in real classrooms.',
    proofPoints: [
      { value: 'Classroom-ready', label: 'Built for real teaching schedules and school realities' },
      { value: 'Pedagogically strong', label: 'Clear educational direction and measurable outcomes' },
      { value: 'Reliable delivery', label: 'Professional onboarding, execution, and follow-up' },
    ],
    authorityTitle: 'Why NordPixel',
    authorityCards: [
      {
        title: 'Teaching with direction',
        text: 'Programs are built around progression so students improve step by step with clear goals.',
      },
      {
        title: 'Structure that creates confidence',
        text: 'Educators get practical frameworks and materials that make implementation smooth and stable.',
      },
      {
        title: 'Quality with impact',
        text: 'We combine creativity and rigor so students engage meaningfully with technology.',
      },
    ],
    methodTitle: 'How we create impact',
    methodSteps: [
      { title: 'Discovery', text: 'We define goals, target groups, and practical constraints with your school.' },
      { title: 'Adaptation', text: 'We tailor content and materials to your educational context and ambition.' },
      { title: 'Delivery', text: 'We execute with clear follow-up and tangible learning outcomes.' },
    ],
    ctaWeblab: 'Open WebLab',
    ctaCourses: 'Explore Courses',
    ctaContact: 'Contact Us',
    closing:
      'Ready to elevate digital learning with a partner that combines educational authority and reliable execution?',
  },
} as const;

export function HomeContent() {
  const { locale } = useLanguage();
  const copy = HOME_COPY[locale];

  return (
    <main className="landing">
      <section className="landing__hero">
        <p className="landing__eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="landing__lead">{copy.lead}</p>

        <div className="landing__proof" role="list" aria-label={copy.authorityTitle}>
          {copy.proofPoints.map((point) => (
            <article key={point.value} className="landing__proof-card" role="listitem">
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </article>
          ))}
        </div>

        <div className="landing__actions">
          <Link href="/editor" className="landing__button landing__button--primary">
            {copy.ctaWeblab}
          </Link>
          <Link href="/courses" className="landing__button landing__button--ghost">
            {copy.ctaCourses}
          </Link>
          <Link href="/contact" className="landing__button landing__button--ghost">
            {copy.ctaContact}
          </Link>
        </div>
      </section>

      <section className="landing__authority" aria-label={copy.authorityTitle}>
        <h2>{copy.authorityTitle}</h2>
        <div className="landing__authority-grid">
          {copy.authorityCards.map((card) => (
            <article key={card.title} className="landing__authority-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing__method" aria-label={copy.methodTitle}>
        <h2>{copy.methodTitle}</h2>
        <ol>
          {copy.methodSteps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="landing__closing" aria-label={copy.ctaContact}>
        <p>{copy.closing}</p>
        <div className="landing__closing-actions">
          <Link href="/courses" className="landing__button landing__button--primary">
            {copy.ctaCourses}
          </Link>
          <Link href="/contact" className="landing__button landing__button--ghost">
            {copy.ctaContact}
          </Link>
        </div>
      </section>
    </main>
  );
}
