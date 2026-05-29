'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { SITE_FOOTER } from '../../assets/site-footer';

export function ContactContent() {
  const { dictionary } = useLanguage();
  const copy = dictionary.contactPage;

  return (
    <main className="contactPage">
      <section className="contactPageHero">
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>

        <div className="contactPageProof" role="list" aria-label={copy.authorityTitle}>
          {copy.proofPoints.map((point) => (
            <article key={point.value} className="contactProof" role="listitem">
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contactPageGrid">
        <article className="contactCard">
          <h2>{copy.partnershipTitle}</h2>
          <ul className="contactCardList">
            {copy.partnershipPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="contactCardMethod">
            <h3>{copy.methodTitle}</h3>
            <ol>
              {copy.methodSteps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <aside className="contactCard contactCardCta">
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactIntro}</p>

          <dl className="contactCardDetails">
            <div>
              <dt>{copy.contactLabelEmail}</dt>
              <dd>
                <a href={`mailto:${SITE_FOOTER.contactEmail}`} target="_blank" rel="noopener noreferrer">
                  {SITE_FOOTER.contactEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt>{copy.contactLabelCvr}</dt>
              <dd>{SITE_FOOTER.cvrNumber}</dd>
            </div>
            <div>
              <dt>{copy.contactLabelLinkedin}</dt>
              <dd>
                <Link href={SITE_FOOTER.linkedinCompanyUrl} target="_blank" rel="noreferrer">
                  NordPixel
                </Link>
              </dd>
            </div>
          </dl>

          <div className="contactCardActions">
            <a className="contactAction" href={`mailto:${SITE_FOOTER.contactEmail}`} target="_blank" rel="noopener noreferrer">
              {copy.contactAction}
            </a>
          </div>
        </aside>
      </section>

      <section className="contactAuthority" aria-label={copy.authorityTitle}>
        <h2>{copy.authorityTitle}</h2>
        <div className="contactAuthorityGrid">
          {copy.authorityCards.map((card) => (
            <article key={card.title} className="contactAuthorityCard">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactPageClosing" aria-label={copy.contactTitle}>
        <p>{copy.closing}</p>
        <a href={`mailto:${SITE_FOOTER.contactEmail}`} target="_blank" rel="noopener noreferrer">
          {copy.contactAction}
        </a>
      </section>
    </main>
  );
}
