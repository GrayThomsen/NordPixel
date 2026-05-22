'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, dictionary } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/', label: dictionary.nav.home },
    { href: '/editor', label: dictionary.nav.weblab },
    { href: '/courses', label: dictionary.nav.courses },
    { href: '/contact', label: dictionary.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="NordPixel frontpage">
          <Image
            src="/images/brand/black-logo.png"
            alt="NordPixel logo"
            width={42}
            height={42}
            priority
            className="site-header__brand-logo site-header__brand-logo--light"
          />
          <Image
            src="/images/brand/white-logo.png"
            alt="NordPixel logo"
            width={42}
            height={42}
            priority
            className="site-header__brand-logo site-header__brand-logo--dark"
          />
          <span>NordPixel.dev</span>
        </Link>

        <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__right">
          <div className="site-header__language" role="group" aria-label={dictionary.nav.language}>
            <button
              type="button"
              className={locale === 'da' ? 'is-active' : ''}
              onClick={() => setLocale('da')}
              aria-pressed={locale === 'da'}
            >
              DA
            </button>
            <button
              type="button"
              className={locale === 'en' ? 'is-active' : ''}
              onClick={() => setLocale('en')}
              aria-pressed={locale === 'en'}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className={isMenuOpen ? 'site-header__menu-button is-open' : 'site-header__menu-button'}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-site-nav"
          >
            Menu
          </button>
        </div>
      </div>

      <div id="mobile-site-nav" className={isMenuOpen ? 'site-header__mobile-nav is-open' : 'site-header__mobile-nav'}>
        <nav className="site-header__mobile-links" aria-label="Primary mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
