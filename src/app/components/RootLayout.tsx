import { Outlet } from 'react-router';
import { ThemeProvider } from './ThemeProvider';
import { LanguageProvider } from './LanguageProvider';

export function RootLayout() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
    </ThemeProvider>
  );
}
