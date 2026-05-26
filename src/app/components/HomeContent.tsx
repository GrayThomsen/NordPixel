'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const HOME_COPY = {
  da: {
    eyebrow: 'Praktisk valgfag i teknologiforståelse',
    title: 'Gør elever til aktive skabere i en digital hverdag.',
    lead:
      'NordPixel leverer en klar løsning til teknologiforståelse: mindre teori, mere skaben, undersøgelse og kritisk refleksion i klassen.',
    statusNote:
      'Udviklet til skoler, der vil have et praktisk og gennemførligt valgfagsforløb med tydelig progression.',
    proofPoints: [
      { value: 'Praktisk klogskab', label: 'Eleverne bygger, tester og forbedrer med teknologi i praksis' },
      { value: 'Plads til fejl', label: 'Fejl bruges aktivt som læring i kreative processer' },
      { value: 'For alle elevtyper', label: 'Inkluderende forløb med tydelig progression og rammer' },
    ],
    authorityTitle: 'Hvorfor lærere vælger NordPixel',
    authorityCards: [
      {
        title: 'Klar opstart uden overteori',
        text: 'Materialer og forløb er gjort enkle, så du hurtigt kan gå i gang uden at være specialist på forhånd.',
      },
      {
        title: 'Lærerens rolle er tydelig',
        text: 'Du faciliterer, rammesætter og støtter. Vi leverer struktur, så du kan fokusere på klassen.',
      },
      {
        title: 'Eleverne er aktive skabere',
        text: 'Eleverne undersøger digitale fænomener, bygger egne løsninger og diskuterer konsekvenser.',
      },
    ],
    methodTitle: 'Fra plan til stærk undervisning',
    methodSteps: [
      { title: '1. Vælg målgruppe', text: 'Start med den klasse, I vil løfte i 7.-9. og vælg et forløb, der passer til niveauet.' },
      { title: '2. Sammensæt forløb', text: 'Kombiner kerneforløb og fokusmoduler, så indhold passer til tid, udstyr og lokal kontekst.' },
      { title: '3. Gennemfør i praksis', text: 'Korte moduler, tydelige roller og konkrete elevprodukter giver fremdrift fra lektion til lektion.' },
    ],
    heroCardTitle: 'I undervisningen arbejder I med',
    heroCardPoints: ['Digitale fænomener fra elevernes hverdag', 'Kreativt design, kodning og undersøgelse', 'Kritisk refleksion over teknologiens betydning'],
    ctaWeblab: 'Åbn WebLab',
    ctaCourses: 'Se forløb',
    ctaContact: 'Kontakt os',
    closing: 'Klar til at planlægge et valgfagsforløb, hvor eleverne går fra brugere til skabere?',
  },
  en: {
    eyebrow: 'Practical technology literacy elective',
    title: 'Help students become active creators in a digital world.',
    lead:
      'NordPixel delivers a clear technology literacy solution: less theory, more creation, investigation, and critical reflection in class.',
    statusNote:
      'Built for schools that want a practical, classroom-ready elective with clear progression.',
    proofPoints: [
      { value: 'Practical agency', label: 'Students build, test, and improve digital ideas hands-on' },
      { value: 'Room for mistakes', label: 'Iteration and debugging are treated as core learning moments' },
      { value: 'Inclusive by design', label: 'Tracks are built to engage diverse learners and classrooms' },
    ],
    authorityTitle: 'Why teachers choose NordPixel',
    authorityCards: [
      {
        title: 'Fast start without overload',
        text: 'Teaching plans and materials are simplified so you can start quickly without being a specialist first.',
      },
      {
        title: 'Teacher role is explicit',
        text: 'You facilitate, frame, and guide. We provide structure so you can focus on student learning.',
      },
      {
        title: 'Students create, not only consume',
        text: 'Learners investigate digital phenomena, build solutions, and discuss social impact.',
      },
    ],
    methodTitle: 'From planning to strong classroom delivery',
    methodSteps: [
      { title: '1. Pick your target group', text: 'Start with the class level you want to support and choose a fitting track.' },
      { title: '2. Compose your program', text: 'Combine core tracks and focus modules to match time, equipment, and local needs.' },
      { title: '3. Deliver with momentum', text: 'Short modules, clear roles, and concrete student outputs keep progress visible.' },
    ],
    heroCardTitle: 'In class, you work with',
    heroCardPoints: ['Digital phenomena from students\' everyday lives', 'Creative design, coding, and investigation', 'Critical reflection on technology and society'],
    ctaWeblab: 'Open WebLab',
    ctaCourses: 'Explore Courses',
    ctaContact: 'Contact Us',
    closing: 'Ready to plan an elective where students move from users to creators?',
  },
} as const;

export function HomeContent() {
  const { locale } = useLanguage();
  const copy = HOME_COPY[locale];

  return (
    <main className="landing">
      <section className="landingHero">
        <div className="landingHeroGrid">
          <div className="landingHeroCopy">
            <p className="landingEyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="landingLead">{copy.lead}</p>
            <p className="landingStatusNote">{copy.statusNote}</p>

            <div className="landingProof" role="list" aria-label={copy.authorityTitle}>
              {copy.proofPoints.map((point) => (
                <article key={point.value} className="landingProofCard" role="listitem">
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </article>
              ))}
            </div>

            <div className="landingActions">
              <Link href="/courses" className="landingButton landingButtonPrimary">
                {copy.ctaCourses}
              </Link>
              <Link href="/editor" className="landingButton landingButtonGhost">
                {copy.ctaWeblab}
              </Link>
              <Link href="/contact" className="landingButton landingButtonGhost">
                {copy.ctaContact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="landingMethod" aria-label={copy.methodTitle}>
        <h2>{copy.methodTitle}</h2>
        <ol>
          {copy.methodSteps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
