'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { SITE_FOOTER } from '../../assets/site-footer';

export function SiteFooter() {
  const { dictionary } = useLanguage();

  return (
    <footer className="siteFooter" aria-label="Site footer">
      <div className="siteFooterInner">
        <p className="siteFooterBrand">{SITE_FOOTER.brandName}</p>

        <div className="siteFooterDetails">
          <p>
            <span>{dictionary.footer.email}:</span>{' '}
            <a href={`mailto:${SITE_FOOTER.contactEmail}`}>{SITE_FOOTER.contactEmail}</a>
          </p>
          <p>
            <span>{dictionary.footer.cvr}:</span> {SITE_FOOTER.cvrNumber}
          </p>
        </div>

        <nav className="siteFooterLinks" aria-label={dictionary.footer.linkedIn}>
          <Link href={SITE_FOOTER.linkedinCompanyUrl} target="_blank" rel="noreferrer">
            {dictionary.footer.companyLinkedIn}
          </Link>
          <Link href={SITE_FOOTER.linkedinPersonalUrl} target="_blank" rel="noreferrer">
            {dictionary.footer.personalLinkedIn}
          </Link>
        </nav>
      </div>
    </footer>
  );
}