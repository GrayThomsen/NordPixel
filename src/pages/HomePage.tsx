import React from 'react';
import { Button, PixelStarField } from '@components';

import { usePageTitle } from '@hooks/usePageTitle';

export const HomePage: React.FC = () => {
  usePageTitle('Home');
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gradient-dark via-gradient-darker to-gradient-dark">
        <PixelStarField />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-4">
            <span className="text-accent-orange">Nordpixel</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button as="a" href="/web" variant="primary" size="lg">
              Web.dev
            </Button>
            <Button as="a" href="/3d" variant="outline" size="lg">
              3D.dev
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
