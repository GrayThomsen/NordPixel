import type { NextConfig } from 'next';

export default function createNextConfig(): NextConfig {
  return {
    // Keep dev and production build artifacts isolated to avoid chunk/runtime conflicts.
    distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
    devIndicators: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
  };
}