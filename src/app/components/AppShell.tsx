'use client';

import type { ReactNode } from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="appShell">
      <a href="#mainContent" className="skipToContent">Skip to main content</a>
      <SiteHeader />
      <main id="mainContent" className="appMain">{children}</main>
      <SiteFooter />
    </div>
  );
}