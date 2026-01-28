import React from 'react';
import { Button } from '@components/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        <h1 className="font-heading text-6xl md:text-8xl text-primary-bright mb-4">404</h1>
        <h2 className="font-heading text-3xl md:text-4xl text-primary-dark mb-4">
          Page Not Found
        </h2>
        <p className="font-body text-lg text-primary-dark opacity-70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Button variant="primary" size="lg" as="a" href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
};
