'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export function HomeContent() {
  const { dictionary } = useLanguage();
  const copy = dictionary.homePage;
  const workspaceCopy = dictionary.editorIntro;

  return (
    <main className="landing">
      <section className="landingHero">
        <div className="landingHeroGrid">
          <div className="landingHeroCopy">
            <h1 className="landingHeroTitle">{copy.eyebrow}</h1>
            <p className="landingHeroSubtitle">{copy.title}</p>
            <p className="landingLead">{copy.lead}</p>

            <div className="landingProof" role="list" aria-label={copy.authorityTitle}>
              {copy.proofPoints.map((point) => (
                <article key={point.value} className="landingProofCard" role="listitem">
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </article>
              ))}
            </div>

            <div className="landingActions">
              <Link href="/courses" className="landingButton landingButtonPrimary">
                {copy.ctaCourses}
              </Link>
              <Link href="/editor" className="landingButton landingButtonGhost">
                {copy.ctaWeblab}
              </Link>
              <Link href="/contact" className="landingButton landingButtonGhost">
                {copy.ctaContact}
              </Link>
            </div>
            <section className="landingWeblabWorkspace" aria-label={workspaceCopy.title}>
              <h2>{workspaceCopy.title}</h2>
              <p>{workspaceCopy.text}</p>
              <p className="landingWeblabWorkspaceHint">{workspaceCopy.hint}</p>
            </section>
          </div>

        </div>
      </section>

      <section className="landingMethod" aria-label={copy.methodTitle}>
        <header className="landingMethodHeader">
          <h2>{copy.methodTitle}</h2>
          <p className="landingMethodLead">{copy.methodLead}</p>
        </header>

        <ol>
          {copy.methodSteps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>

        <div className="landingMethodCta">
          <p>{copy.closing}</p>
          <div className="landingMethodActions">
            <Link href="/contact" className="landingButton landingButtonGhost">
              {copy.ctaContact}
            </Link>
            <Link href="/courses" className="landingButton landingButtonPrimary">
              {copy.ctaCourses}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
