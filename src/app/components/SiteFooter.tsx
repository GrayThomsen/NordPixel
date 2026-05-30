'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { componentLanguage } from '../../context/componentLanguage';
import { SITE_FOOTER } from '../../assets/headerAndFooter/site-branding';

export function SiteFooter() {
  const { locale } = useLanguage();
  const copy = componentLanguage[locale].footer;

  return (
    <footer className="siteFooter" aria-label="Site footer">
      <div className="siteFooterInner">
        <p className="siteFooterBrand">{SITE_FOOTER.brandName}</p>

        <div className="siteFooterDetails">
          <p>
            <span>{copy.email}:</span>{' '}
            <a href={`mailto:${SITE_FOOTER.contactEmail}`} target="_blank" rel="noopener noreferrer">
              {SITE_FOOTER.contactEmail}
            </a>
          </p>
          <p>
            <span>{copy.cvr}:</span> {SITE_FOOTER.cvrNumber}
          </p>
        </div>

        <nav className="siteFooterLinks" aria-label={copy.linkedIn}>
          <Link href={SITE_FOOTER.linkedinCompanyUrl} target="_blank" rel="noreferrer">
            {copy.companyLinkedIn}
          </Link>
          <Link href={SITE_FOOTER.linkedinPersonalUrl} target="_blank" rel="noreferrer">
            {copy.personalLinkedIn}
          </Link>
        </nav>
      </div>
    </footer>
  );
}