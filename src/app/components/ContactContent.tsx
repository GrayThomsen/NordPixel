'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { contactLanguage } from '../../context/contactLanguage';
import { SITE_FOOTER } from '../../assets/headerAndFooter/site-branding';

type CopyTarget = 'email' | 'cvr' | 'linkedin';

export function ContactContent() {
  const { locale } = useLanguage();
  const copy = contactLanguage[locale].contactPage;
  const [copiedTarget, setCopiedTarget] = useState<CopyTarget | null>(null);
  const copyResetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyResetTimerRef.current) {
        window.clearTimeout(copyResetTimerRef.current);
      }
    };
  }, []);

  const resetCopiedTarget = () => {
    if (copyResetTimerRef.current) {
      window.clearTimeout(copyResetTimerRef.current);
    }

    copyResetTimerRef.current = window.setTimeout(() => {
      setCopiedTarget(null);
    }, 1400);
  };

  const copyToClipboard = async (value: string, target: CopyTarget) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }

      setCopiedTarget(target);
      resetCopiedTarget();
    } catch {
      setCopiedTarget(null);
    }
  };

  return (
    <div className="contactPage">
      <section className="contactPageHero">
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>

        <ul className="contactPageProof" aria-label={copy.authorityTitle}>
          {copy.proofPoints.map((point) => (
            <li key={point.value} className="contactProof">
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </li>
          ))}
        </ul>
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
            <div className="contactDetailCopy">
              <dt>{copy.contactLabelEmail}</dt>
              <dd className="contactDetailValue">
                <button
                  type="button"
                  className="contactDetailCopyRow"
                  onClick={() => copyToClipboard(SITE_FOOTER.contactEmail, 'email')}
                  aria-label={`${locale === 'da' ? 'Kopiér' : 'Copy'} ${copy.contactLabelEmail.toLowerCase()}`}
                  title={locale === 'da' ? 'Kopiér emailadresse' : 'Copy email address'}
                >
                  <span className="contactDetailCopyText">{SITE_FOOTER.contactEmail}</span>
                  {copiedTarget === 'email' ? <Check className="contactDetailIcon" aria-hidden="true" /> : <Copy className="contactDetailIcon" aria-hidden="true" />}
                </button>
              </dd>
              {copiedTarget === 'email' ? <span className="contactDetailFeedback">{locale === 'da' ? 'Kopieret til udklipsholder' : 'Copied to clipboard'}</span> : null}
            </div>
            <div className="contactDetailCopy">
              <dt>{copy.contactLabelCvr}</dt>
              <dd className="contactDetailValue">
                <button
                  type="button"
                  className="contactDetailCopyRow"
                  onClick={() => copyToClipboard(SITE_FOOTER.cvrNumber, 'cvr')}
                  aria-label={`${locale === 'da' ? 'Kopiér' : 'Copy'} ${copy.contactLabelCvr.toLowerCase()}`}
                  title={locale === 'da' ? 'Kopiér CVR-nummer' : 'Copy CVR number'}
                >
                  <span className="contactDetailCopyText">{SITE_FOOTER.cvrNumber}</span>
                  {copiedTarget === 'cvr' ? <Check className="contactDetailIcon" aria-hidden="true" /> : <Copy className="contactDetailIcon" aria-hidden="true" />}
                </button>
              </dd>
              {copiedTarget === 'cvr' ? <span className="contactDetailFeedback">{locale === 'da' ? 'Kopieret til udklipsholder' : 'Copied to clipboard'}</span> : null}
            </div>
            <div className="contactDetailCopy">
              <dt>{copy.contactLabelLinkedin}</dt>
              <dd className="contactDetailValue">
                <button
                  type="button"
                  className="contactDetailCopyRow"
                  onClick={() => copyToClipboard(SITE_FOOTER.linkedinCompanyUrl, 'linkedin')}
                  aria-label={`${locale === 'da' ? 'Kopiér' : 'Copy'} LinkedIn-link`}
                  title={locale === 'da' ? 'Kopiér LinkedIn-link' : 'Copy LinkedIn link'}
                >
                  <span className="contactDetailCopyText">NordPixel</span>
                  {copiedTarget === 'linkedin' ? <Check className="contactDetailIcon" aria-hidden="true" /> : <Copy className="contactDetailIcon" aria-hidden="true" />}
                </button>
              </dd>
              {copiedTarget === 'linkedin' ? <span className="contactDetailFeedback">{locale === 'da' ? 'Kopieret til udklipsholder' : 'Copied to clipboard'}</span> : null}
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
    </div>
  );
}
