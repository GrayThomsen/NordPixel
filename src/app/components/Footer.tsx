"use client";

import Link from 'next/link';
import { Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();
  const socialLinks = [
    { href: 'https://www.facebook.com/', icon: Facebook, label: 'Facebook' },
    { href: 'https://www.instagram.com/', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com/', icon: Twitter, label: 'X' },
  ];

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">{t('footer.about')}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {t('footer.aboutText')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="text-neutral-600 dark:text-neutral-400 hover:text-[#F5A623] transition-colors">{t('nav.courses')}</Link></li>
              <li><Link href="/teaching-materials" className="text-neutral-600 dark:text-neutral-400 hover:text-[#F5A623] transition-colors">{t('nav.teachingMaterials')}</Link></li>
              <li><Link href="/workshops" className="text-neutral-600 dark:text-neutral-400 hover:text-[#F5A623] transition-colors">{t('nav.workshops')}</Link></li>
              <li><Link href="/about#kontakt" className="text-neutral-600 dark:text-neutral-400 hover:text-[#F5A623] transition-colors">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:kontakt@nordpixel.dk" className="hover:text-[#F5A623] transition-colors">
                  kontakt@nordpixel.dk
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <Link href="/about#kontakt" className="hover:text-[#F5A623] transition-colors">
                  Danmark
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-3">
              {socialLinks.map((socialLink) => (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${socialLink.label}`}
                  className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-[#F5A623] hover:text-white transition-colors"
                >
                  <socialLink.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">CVR: XXXXXXXX</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <p>{t('footer.rights')}</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-[#F5A623] transition-colors">{t('footer.privacy')}</Link>
              <Link href="/terms" className="hover:text-[#F5A623] transition-colors">{t('footer.terms')}</Link>
              <Link href="/cookies" className="hover:text-[#F5A623] transition-colors">{t('footer.cookies')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
