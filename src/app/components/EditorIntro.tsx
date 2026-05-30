'use client';

import { useLanguage } from '../../context/LanguageContext';
import { weblabLanguage } from '../../context/weblabLanguage';

export function EditorIntro() {
  const { locale } = useLanguage();
  const copy = weblabLanguage[locale].editorIntro;

  return (
    <section className="editorIntro" aria-label={copy.title}>
      <h1>{copy.title}</h1>
      <p>{copy.text}</p>
      <p className="editorIntroHint">{copy.hint}</p>
    </section>
  );
}
