import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { ConstructionPopup } from '@components/ConstructionPopup';
import { SHOW_UNDER_CONSTRUCTION } from '@config/site';

export const Layout: React.FC = () => {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  const [showConstruction, setShowConstruction] = useState(false);

  useEffect(() => {
    try {
      const dismissed = !!localStorage.getItem('constructionDismissed');
      setShowConstruction(SHOW_UNDER_CONSTRUCTION && !dismissed);
    } catch (err) {
      setShowConstruction(SHOW_UNDER_CONSTRUCTION);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showConstruction && <ConstructionPopup onDismiss={() => setShowConstruction(false)} />}
      {/* Add padding-top to account for fixed header */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
