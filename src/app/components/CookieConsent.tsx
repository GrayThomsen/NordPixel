'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CONSENT_KEY = 'nordpixel_cookie_consent';

type ConsentState = 'accepted' | 'necessary' | 'declined' | null;

export function CookieConsent() {
  const { dictionary } = useLanguage();
  const copy = dictionary.cookieConsent;
  const [consent, setConsent] = useState<ConsentState>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedConsent = window.localStorage.getItem(CONSENT_KEY) as ConsentState | null;
    if (savedConsent === 'accepted' || savedConsent === 'necessary' || savedConsent === 'declined') {
      setConsent(savedConsent);
    }
  }, []);

  const saveConsent = (nextConsent: ConsentState) => {
    if (!nextConsent) {
      return;
    }

    window.localStorage.setItem(CONSENT_KEY, nextConsent);
    setConsent(nextConsent);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {consent === 'accepted' ? (
        <>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-V135S892NR" strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', 'G-V135S892NR');`}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <section className="cookieConsent" aria-label={copy.title}>
          <div className="cookieConsentCopy">
            <h2>{copy.title}</h2>
            <p>{copy.text}</p>
          </div>
          <div className="cookieConsentActions">
            <button type="button" className="cookieConsentButton cookieConsentButtonNecessary" onClick={() => saveConsent('necessary')}>
              {copy.necessary}
            </button>
            <button type="button" className="cookieConsentButton cookieConsentButtonDecline" onClick={() => saveConsent('declined')}>
              {copy.decline}
            </button>
            <button type="button" className="cookieConsentButton cookieConsentButtonAccept" onClick={() => saveConsent('accepted')}>
              {copy.accept}
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}