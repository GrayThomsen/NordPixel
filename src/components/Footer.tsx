import React from 'react';
import { SOCIAL_LINKS } from '@config/site';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark text-white py-12 border-t border-gradient-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - simplified: company info left, connect right */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          {/* Company Info */}
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <h3 className="font-heading text-xl mb-1">Nordpixel.dev</h3>
              <p className="font-body text-sm text-gray-300">
                Webdev with a third dimension
              </p>
            </div>
          </div>

          {/* Links (left) */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
            <div>
              <h4 className="font-heading text-base mb-3">Explore</h4>
              <div className="flex flex-col md:flex-row gap-4">
                <a href="/web" className="text-gray-300 hover:text-accent-orange transition-colors">
                  Web.dev
                </a>
                <a href="/3d" className="text-gray-300 hover:text-accent-orange transition-colors">
                  3D.dev
                </a>
                <a href="/teaching" className="text-gray-300 hover:text-accent-orange transition-colors">
                  Teaching
                </a>
                <a href="/shop" className="text-gray-300 hover:text-accent-orange transition-colors">
                  Shop
                </a>
                <a href="/updates" className="text-gray-300 hover:text-accent-orange transition-colors">
                  Updates
                </a>
              </div>
            </div>
            {/* Connect (moved to right) */}
          </div>
          <div className="flex flex-col items-start md:items-end">
            <h4 className="font-heading text-base mb-3">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 hover:bg-gradient-darker hover:text-accent-orange rounded-lg transition-colors text-gray-300"
                aria-label="LinkedIn - Emil Gray Thomsen"
                title="Emil Gray Thomsen (Personal LinkedIn)"
              >
                <svg className="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="hidden md:inline text-sm text-gray-300">Emil Gray Thomsen</span>
              </a>

              {SOCIAL_LINKS.companyLinkedIn && (
                <a
                  href={SOCIAL_LINKS.companyLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 hover:bg-gradient-darker hover:text-accent-orange rounded-lg transition-colors text-gray-300"
                  aria-label="LinkedIn - NordPixel (Company)"
                  title="NordPixel (Company LinkedIn)"
                >
                  <svg className="w-5 h-5 text-accent-orange" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-9 14h-2v-6h2v6zm-1-7.2a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zM20 18h-2.5v-3c0-1.5-2-1.4-2 0v3H13V9h2.4v1.2h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.6v4.8z" />
                  </svg>
                  <span className="hidden md:inline text-sm text-gray-300">NordPixel (Company)</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gradient-darker my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} NordPixel. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Designed & developed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
