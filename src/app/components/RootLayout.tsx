import { ThemeProvider } from './ThemeProvider';
import { LanguageProvider } from './LanguageProvider';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
