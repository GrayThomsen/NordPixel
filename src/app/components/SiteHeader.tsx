'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BOOKABLE_OPTIONS } from './courses/course-catalog';
import { BOOKING_CART_UPDATED_EVENT, getBookingCartCount } from './courses/booking-storage';

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, dictionary } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const allowedIds = BOOKABLE_OPTIONS.map((option) => option.id);
    const updateCount = () => setCartCount(getBookingCartCount(allowedIds));

    updateCount();
    window.addEventListener('storage', updateCount);
    window.addEventListener(BOOKING_CART_UPDATED_EVENT, updateCount as EventListener);

    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener(BOOKING_CART_UPDATED_EVENT, updateCount as EventListener);
    };
  }, []);

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
          {cartCount > 0 ? (
            <Link href="/courses/booking" className="site-header__cart" aria-label={`${dictionary.nav.courses} cart (${cartCount})`}>
              <ShoppingCart aria-hidden="true" />
              <span>{cartCount}</span>
            </Link>
          ) : null}

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
