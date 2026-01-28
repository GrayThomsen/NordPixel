import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { StatusBanner } from '@components/StatusBanner';

export const Layout: React.FC = () => {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <StatusBanner />
      {/* Add padding-top to account for fixed header */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
