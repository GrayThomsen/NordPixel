'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export function HomeContent() {
  const { dictionary } = useLanguage();
  const copy = dictionary.homePage;

  return (
    <div className="landing">
      <section className="landingHero">
        <div className="landingHeroGrid">
          <div className="landingHeroCopy">
            <h1 className="landingHeroTitle">{copy.eyebrow}</h1>
            <p className="landingHeroSubtitle">{copy.title}</p>
            <p className="landingLead">{copy.lead}</p>

            <ul className="landingProof" aria-label={copy.authorityTitle}>
              {copy.proofPoints.map((point) => (
                <li key={point.value} className="landingProofCard">
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </li>
              ))}
            </ul>

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
    </div>
  );
}
