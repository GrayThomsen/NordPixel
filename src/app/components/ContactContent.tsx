'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SITE_FOOTER } from '../../assets/site-footer';

export function ContactContent() {
  const { dictionary, locale } = useLanguage();
  const copy = dictionary.contactPage;
  const [copiedField, setCopiedField] = useState<'email' | 'cvr' | 'linkedin' | null>(null);

  const copyValueToClipboard = async (value: string, field: 'email' | 'cvr' | 'linkedin') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((current) => (current === field ? null : current));
      }, 1800);
    } catch {
      setCopiedField(null);
    }
  };

  const handleCopyKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    value: string,
    field: 'email' | 'cvr' | 'linkedin',
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      void copyValueToClipboard(value, field);
    }
  };

  const copyHint = locale === 'da' ? 'Klik for at kopiere' : 'Click to copy';
  const copiedHint = locale === 'da' ? 'Kopieret' : 'Copied';

  return (
    <main className="contactPage">
      <section className="contactPageHero">
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
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
            <div
              className="contactDetailCopy"
              role="button"
              tabIndex={0}
              onClick={() => {
                void copyValueToClipboard(SITE_FOOTER.contactEmail, 'email');
              }}
              onKeyDown={(event) => handleCopyKeyDown(event, SITE_FOOTER.contactEmail, 'email')}
              title={copiedField === 'email' ? copiedHint : copyHint}
              aria-label={`${copy.contactLabelEmail}: ${SITE_FOOTER.contactEmail}. ${copyHint}`}
            >
              <dt>{copy.contactLabelEmail}</dt>
              <dd>
                <span className="contactDetailValue">
                  {SITE_FOOTER.contactEmail}
                  {copiedField === 'email' ? <Check className="contactDetailIcon" aria-hidden="true" /> : <Copy className="contactDetailIcon" aria-hidden="true" />}
                </span>
              </dd>
              {copiedField === 'email' ? <span className="contactDetailFeedback">{copiedHint}</span> : null}
            </div>
            <div
              className="contactDetailCopy"
              role="button"
              tabIndex={0}
              onClick={() => {
                void copyValueToClipboard(SITE_FOOTER.cvrNumber, 'cvr');
              }}
              onKeyDown={(event) => handleCopyKeyDown(event, SITE_FOOTER.cvrNumber, 'cvr')}
              title={copiedField === 'cvr' ? copiedHint : copyHint}
              aria-label={`${copy.contactLabelCvr}: ${SITE_FOOTER.cvrNumber}. ${copyHint}`}
            >
              <dt>{copy.contactLabelCvr}</dt>
              <dd>
                <span className="contactDetailValue">
                  {SITE_FOOTER.cvrNumber}
                  {copiedField === 'cvr' ? <Check className="contactDetailIcon" aria-hidden="true" /> : <Copy className="contactDetailIcon" aria-hidden="true" />}
                </span>
              </dd>
              {copiedField === 'cvr' ? <span className="contactDetailFeedback">{copiedHint}</span> : null}
            </div>
            <div
              className="contactDetailCopy"
              role="button"
              tabIndex={0}
              onClick={() => {
                void copyValueToClipboard(SITE_FOOTER.linkedinCompanyUrl, 'linkedin');
              }}
              onKeyDown={(event) => handleCopyKeyDown(event, SITE_FOOTER.linkedinCompanyUrl, 'linkedin')}
              title={copiedField === 'linkedin' ? copiedHint : copyHint}
              aria-label={`${copy.contactLabelLinkedin}: NordPixel. ${copyHint}`}
            >
              <dt>{copy.contactLabelLinkedin}</dt>
              <dd>
                <span className="contactDetailValue">
                  NordPixel
                  {copiedField === 'linkedin' ? <Check className="contactDetailIcon" aria-hidden="true" /> : <Copy className="contactDetailIcon" aria-hidden="true" />}
                </span>
              </dd>
              {copiedField === 'linkedin' ? <span className="contactDetailFeedback">{copiedHint}</span> : null}
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
