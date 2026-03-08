import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title ? `${title} – Nordpixel.dev` : 'Nordpixel.dev';
  }, [title]);
}
