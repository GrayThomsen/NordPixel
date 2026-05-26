'use client';

import { useLanguage } from '../../context/LanguageContext';

export function EditorIntro() {
  const { dictionary } = useLanguage();
  const copy = dictionary.editorIntro;

  return (
    <section className="editorIntro" aria-label={copy.title}>
      <h1>{copy.title}</h1>
      <p>{copy.text}</p>
      <p className="editorIntroHint">{copy.hint}</p>
    </section>
  );
}
