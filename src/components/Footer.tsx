import React from 'react';
import { SOCIAL_LINKS } from '@config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl mb-3">NordPixel</h3>
            <p className="font-body text-sm text-gray-300">WebGL & 3D Design, Web Applications, and Frontend Development</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-primary-bright transition-colors">Home</a></li>
              <li><a href="/portfolio" className="text-gray-300 hover:text-primary-bright transition-colors">Portfolio</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-primary-bright transition-colors">About</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading text-base mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary-bright hover:text-primary-dark rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-muted my-8"></div>

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
