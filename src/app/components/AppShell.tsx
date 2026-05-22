'use client';

import type { ReactNode } from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main className="app-main">{children}</main>
      <SiteFooter />
    </div>
  );
}