'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { contactLanguage } from '../../context/contactLanguage';
import { SITE_FOOTER, SITE_HEADER } from '../../assets/headerAndFooter/site-branding';

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
    <div className="contactLanding">
      <section className="contactLandingHero">
        <div className="contactLandingHeroGrid">
          <div className="contactLandingCopy">
            <h1 className="contactLandingTitle">{copy.title}</h1>
            <p className="contactLandingLead">{copy.intro}</p>

            <div className="landingActions contactLandingActions">
              <a className="landingButton landingButtonPrimary" href={`mailto:${SITE_FOOTER.contactEmail}`} target="_blank" rel="noopener noreferrer">
                {copy.contactAction}
              </a>
              <Link className="landingButton landingButtonGhost" href="/courses">
                {locale === 'da' ? 'Se forløb' : 'See courses'}
              </Link>
            </div>
          </div>

          <aside className="contactLandingCard">
            <img
              className="contactCardLogo"
              src="/images/brand/black-logo.png"
              alt={SITE_HEADER.logoAlt}
              width={34}
              height={34}
              loading="lazy"
            />
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
          </aside>
        </div>
      </section>

      <section className="contactLandingTrust" aria-label={copy.authorityTitle}>
        <ul className="contactLandingProof" aria-label={copy.authorityTitle}>
          {copy.proofPoints.map((point) => (
            <li key={point.value} className="contactLandingProofCard">
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="contactLandingAuthority" aria-label={copy.authorityTitle}>
        <h2>{copy.authorityTitle}</h2>
        <div className="contactLandingAuthorityGrid">
          {copy.authorityCards.map((card) => (
            <article key={card.title} className="contactLandingAuthorityCard">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactLandingMethod" aria-label={copy.methodTitle}>
        <header className="contactLandingMethodHeader">
          <h2>{copy.methodTitle}</h2>
          <p className="contactLandingMethodLead">{copy.partnershipPoints[0]}</p>
        </header>

        <ol className="contactLandingMethodList">
          {copy.methodSteps.map((step) => (
            <li key={step.title} className="contactLandingMethodItem">
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>

        <div className="contactLandingMethodCta">
          <p>{copy.closing}</p>
          <div className="contactLandingMethodActions">
            <a className="landingButton landingButtonPrimary" href={`mailto:${SITE_FOOTER.contactEmail}`} target="_blank" rel="noopener noreferrer">
              {copy.contactAction}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
