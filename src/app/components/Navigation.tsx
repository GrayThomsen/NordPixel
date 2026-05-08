"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun, Languages, Settings } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { Button } from './ui/Button';
import logoBlack from '../../imports/BlackLogoTrans.png';
import logoWhite from '../../imports/WhiteLogoTrans.png';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const desktopSettingsRef = useRef<HTMLDivElement>(null);
  const mobileSettingsRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideDesktop = desktopSettingsRef.current?.contains(target) ?? false;
      const clickedInsideMobile = mobileSettingsRef.current?.contains(target) ?? false;

      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setSettingsOpen(false);
      }
    };

    if (settingsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [settingsOpen]);

  const navLinks = [
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.teachingMaterials'), path: '/teaching-materials' },
    { name: t('nav.workshops'), path: '/workshops' },
    { name: t('nav.about'), path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={theme === 'dark' ? logoWhite : logoBlack}
              alt="NordPixel"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-neutral-100 dark:bg-neutral-800 text-[#F5A623]'
                    : 'hover:bg-neutral-50 dark:hover:bg-neutral-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative" ref={desktopSettingsRef}>
              <button
                onClick={() => setSettingsOpen(!settingsOpen)}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Settings"
              >
                <Settings className="w-5 h-5" />
              </button>
              {settingsOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 py-2">
                  <button
                    onClick={() => {
                      toggleTheme();
                      setSettingsOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-center gap-3"
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    <span>{theme === 'dark' ? 'Lys Tilstand' : 'Mørk Tilstand'}</span>
                  </button>
                  <div className="border-t border-neutral-200 dark:border-neutral-800 my-1"></div>
                  <button
                    onClick={() => {
                      setLanguage(language === 'da' ? 'en' : 'da');
                      setSettingsOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-center gap-3"
                  >
                    <Languages className="w-5 h-5" />
                    <span>{language === 'da' ? 'English' : 'Dansk'}</span>
                  </button>
                </div>
              )}
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link href="/login">
                {t('nav.login')}
              </Link>
            </Button>
            <Button asChild variant="primary" size="sm">
              <Link href="/signup">
                {t('nav.signup')}
              </Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <div className="relative" ref={mobileSettingsRef}>
              <button
                onClick={() => setSettingsOpen(!settingsOpen)}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Settings"
              >
                <Settings className="w-5 h-5" />
              </button>
              {settingsOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 py-2">
                  <button
                    onClick={() => {
                      toggleTheme();
                      setSettingsOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-center gap-3"
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    <span>{theme === 'dark' ? 'Lys Tilstand' : 'Mørk Tilstand'}</span>
                  </button>
                  <div className="border-t border-neutral-200 dark:border-neutral-800 my-1"></div>
                  <button
                    onClick={() => {
                      setLanguage(language === 'da' ? 'en' : 'da');
                      setSettingsOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-center gap-3"
                  >
                    <Languages className="w-5 h-5" />
                    <span>{language === 'da' ? 'English' : 'Dansk'}</span>
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors duration-200">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-neutral-100 dark:bg-neutral-800 text-[#F5A623]'
                    : 'hover:bg-neutral-50 dark:hover:bg-neutral-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
              <Button asChild variant="ghost" size="md" className="w-full">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  {t('nav.login')}
                </Link>
              </Button>
              <Button asChild variant="primary" size="md" className="w-full">
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  {t('nav.signup')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
