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
            <h1>{copy.title}</h1>
            <p className="landingEyebrow">{copy.eyebrow}</p>
            <p className="landingLead">{copy.lead}</p>
            <p className="landingStatusNote">{copy.statusNote}</p>

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

      <section className="landingTrust" aria-label={copy.trustTitle}>
        <h2>{copy.trustTitle}</h2>
        <ul>
          {copy.trustPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="landingMethod" aria-label={copy.methodTitle}>
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
    </main>
  );
}
