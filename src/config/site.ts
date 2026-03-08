/**
 * Site configuration and constants
 */

export const SITE_NAME = 'NordPixel';
export const SITE_DESCRIPTION = 'Webdev with a third dimension';
export const SITE_URL = 'https://nordpixel.com';

/**
 * Status message configuration
 * Can be easily updated to show different messages
 */
export const STATUS_MESSAGE = {
  active: true,
  text: 'Open for commissions',
  bgColor: 'bg-accent-orange',
  textColor: 'text-black',
};

// Toggle to show the "Under Construction" overlay (set true to enable)
export const SHOW_UNDER_CONSTRUCTION = true;

/**
 * Social links
 */
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/emil-gray-thomsen-845a8b33b/',
  companyLinkedIn: 'https://www.linkedin.com/company/107025728/admin/dashboard/',
  github: 'https://github.com/your-profile',
};

/**
 * Navigation links
 */
export const NAV_LINKS = [
  { label: 'Web.dev', href: '/web' },
  { label: '3D.dev', href: '/3d' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Shop', href: '/shop' },
  { label: 'Updates', href: '/updates' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Performance configuration
 */
export const PERFORMANCE = {
  disableWGLOnMobile: true,
  maxGeometryComplexity: 50000,
};
