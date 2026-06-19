'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { componentLanguage } from '../../context/componentLanguage';
import { SITE_HEADER } from '../../assets/headerAndFooter/site-branding';
import { BOOKABLE_OPTIONS } from './courses/course-catalog';
import { BOOKING_CART_ATTENTION_EVENT, BOOKING_CART_UPDATED_EVENT, getBookingCartCount } from './courses/booking-storage';
import { LanguageSelector } from './LanguageSelector';

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();
  const copy = componentLanguage[locale];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isCartHighlighted, setIsCartHighlighted] = useState(false);
  const cartHighlightTimerRef = useRef<number | null>(null);
  const cartHighlightRafRef = useRef<number | null>(null);

  useEffect(() => {
    // Close mobile menu on route changes to avoid stale open state after navigation.
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Header cart badge only counts valid options from the shared booking catalog.
    const allowedIds = BOOKABLE_OPTIONS.map((option) => option.id);
    const updateCount = () => setCartCount(getBookingCartCount(allowedIds));
    const highlightCart = () => {
      // Reset previous highlight to ensure the animation replays.
      setIsCartHighlighted(false);
      if (cartHighlightRafRef.current) {
        window.cancelAnimationFrame(cartHighlightRafRef.current);
      }
      cartHighlightRafRef.current = window.requestAnimationFrame(() => {
        setIsCartHighlighted(true);
      });
      if (cartHighlightTimerRef.current) {
        window.clearTimeout(cartHighlightTimerRef.current);
      }
      cartHighlightTimerRef.current = window.setTimeout(() => {
        setIsCartHighlighted(false);
      }, 850);
    };

    updateCount();
    // Listen for both cross-tab storage updates and same-tab custom cart events.
    window.addEventListener('storage', updateCount);
    window.addEventListener(BOOKING_CART_UPDATED_EVENT, updateCount as EventListener);
    window.addEventListener(BOOKING_CART_ATTENTION_EVENT, highlightCart as EventListener);

    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener(BOOKING_CART_UPDATED_EVENT, updateCount as EventListener);
      window.removeEventListener(BOOKING_CART_ATTENTION_EVENT, highlightCart as EventListener);
      if (cartHighlightTimerRef.current) {
        window.clearTimeout(cartHighlightTimerRef.current);
      }
      if (cartHighlightRafRef.current) {
        window.cancelAnimationFrame(cartHighlightRafRef.current);
      }
    };
  }, []);

  const navItems = [
    { href: '/', label: copy.nav.home },
    { href: '/editor', label: copy.nav.weblab },
    { href: '/courses', label: copy.nav.courses },
    { href: '/contact', label: copy.nav.contact },
  ];
  const homeAriaLabel = locale === 'da' ? 'NordPixel forside' : 'NordPixel home';
  const cartAriaLabel =
    locale === 'da'
      ? cartCount > 0
        ? `Bookingkurv (${cartCount})`
        : 'Bookingkurv'
      : cartCount > 0
        ? `Booking cart (${cartCount})`
        : 'Booking cart';

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link href={SITE_HEADER.brandHref} className="siteHeaderBrand" aria-label={homeAriaLabel}>
          <Image
            src={SITE_HEADER.logoSrc}
            alt={SITE_HEADER.logoAlt}
            width={SITE_HEADER.logoWidth}
            height={SITE_HEADER.logoHeight}
            priority
            className="siteHeaderBrandLogo"
          />
          <span>{SITE_HEADER.brandName}</span>
        </Link>

        <nav className="siteHeaderNav siteHeaderNavDesktop" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="siteHeaderRight">
          <Link
            href={SITE_HEADER.bookingHref}
            className={`siteHeaderCart ${cartCount > 0 ? '' : 'isEmpty'} ${isCartHighlighted ? 'isHighlighted' : ''}`.trim()}
            aria-label={cartAriaLabel}
          >
            <ShoppingCart aria-hidden="true" />
            {cartCount > 0 ? <span>{cartCount}</span> : null}
          </Link>

          <LanguageSelector
            className="siteHeaderLanguage siteHeaderLanguageDesktop"
            ariaLabel={copy.nav.language}
            locale={locale}
            setLocale={setLocale}
          />
          <button
            type="button"
            className={isMenuOpen ? 'siteHeaderMenuButton isOpen' : 'siteHeaderMenuButton'}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobileSiteNav"
            aria-label={locale === 'da' ? 'Åbn menu' : 'Open menu'}
          >
            <span className="siteHeaderMenuIcon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="mobileSiteNav" className={isMenuOpen ? 'siteHeaderMobileNav isOpen' : 'siteHeaderMobileNav'}>
        <LanguageSelector
          className="siteHeaderLanguage siteHeaderMobileLanguage"
          ariaLabel={copy.nav.language}
          locale={locale}
          setLocale={setLocale}
        />
        <nav className="siteHeaderMobileLinks" aria-label="Primary mobile">
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
