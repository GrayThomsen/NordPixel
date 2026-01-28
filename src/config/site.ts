/**
 * Site configuration and constants
 */

export const SITE_NAME = 'NordPixel';
export const SITE_DESCRIPTION = 'WebGL & 3D Design, Web Applications, and Frontend Development';
export const SITE_URL = 'https://nordpixel.com';

/**
 * Status message configuration
 * Can be easily updated to show different messages
 */
export const STATUS_MESSAGE = {
  active: true,
  text: 'Open for commissions',
  bgColor: 'bg-primary-bright',
  textColor: 'text-primary-dark',
};

/**
 * Social links
 */
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/your-profile',
  github: 'https://github.com/your-profile',
};

/**
 * Navigation links
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Performance configuration
 */
export const PERFORMANCE = {
  disableWGLOnMobile: true,
  maxGeometryComplexity: 50000,
};
