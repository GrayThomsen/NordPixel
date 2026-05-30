'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { mainLanguage } from '../../context/mainLanguage';

export function HomeContent() {
  const { locale } = useLanguage();
  const copy = mainLanguage[locale].homePage;

  return (
    <div className="landing">
      <section className="landingHero">
        <div className="landingHeroGrid">
          <div className="landingHeroCopy">
            <h1 className="landingHeroTitle">{copy.eyebrow}</h1>
            <p className="landingHeroSubtitle">{copy.title}</p>
            <p className="landingLead">{copy.lead}</p>
            <p className="landingStatusNote">{copy.statusNote}</p>

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

          <aside className="landingHeroVisual" aria-label={copy.heroCardTitle}>
            <h2>{copy.heroCardTitle}</h2>
            <ul>
              {copy.heroCardPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="landingWeblabNote">{copy.weblabNote}</p>
          </aside>

        </div>
      </section>

      <section className="landingTrust" aria-label={copy.trustTitle}>
        <div className="landingTrustIntro">
          <h2>{copy.trustTitle}</h2>
        </div>
        <ul>
          {copy.trustPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="landingAuthority" aria-label={copy.authorityTitle}>
        <h2>{copy.authorityTitle}</h2>
        <div className="landingAuthorityGrid">
          {copy.authorityCards.map((card) => (
            <article key={card.title} className="landingAuthorityCard">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
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
