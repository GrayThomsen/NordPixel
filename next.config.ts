import type { NextConfig } from 'next';
import path from 'node:path';

export default function createNextConfig(): NextConfig {
  return {
    // Keep this workspace isolated from stale/previous .next artifacts.
    distDir: '.next-dev',
    devIndicators: false,
    webpack: (config, { dev }) => {
      if (dev) {
        config.cache = false;
        config.resolve = config.resolve ?? {};
        config.resolve.alias = {
          ...(config.resolve.alias ?? {}),
          'next/dist/next-devtools/userspace/app/segment-explorer-node.js': path.resolve(
            process.cwd(),
            'src/utils/next-devtools-segment-stub.tsx',
          ),
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