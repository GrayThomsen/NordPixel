import type { NextConfig } from 'next';

export default function createNextConfig(): NextConfig {
  return {
    // Hold build-artefakter for dev og produktion adskilt for at undgå chunk/runtime-konflikter.
    distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
    devIndicators: false,
    webpack: (config, { dev }) => {
      if (dev) {
        // Undgå periodiske Windows-problemer med fillåsning/cache-omdøbning i .next-dev/cache/webpack.
        config.cache = {
          type: 'memory',
        };
      }

      return config;
    },
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