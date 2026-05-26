'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { SITE_FOOTER } from '../../assets/site-footer';

const CONTACT_COPY = {
  da: {
    eyebrow: 'NordPixel for skoler og uddannelse',
    title: 'Kontakt NordPixel og lær teamet bag',
    intro:
      'Vi designer undervisningsforløb i digital kreativitet, web og AI, som fungerer i virkelige klasselokaler. NordPixel kombinerer tydelig didaktik, stærke materialer og en professionel leverancemodel, så skoler kan implementere med ro og kvalitet.',
    proofPoints: [
      { value: 'Klar struktur', label: 'Forløb med tydelig progression og konkrete mål' },
      { value: 'Skoleklar drift', label: 'Planlagt onboarding og afstemt med lærernes hverdag' },
      { value: 'Langsigtet værdi', label: 'Kompetenceløft for både elever og undervisere' },
    ],
    partnershipTitle: 'Hvorfor skoler vælger NordPixel',
    partnershipPoints: [
      'Vi oversætter komplekse teknologier til undervisning, der er fagligt stærk og let at anvende.',
      'Vi leverer forløb, materialer og kommunikation med høj professionalisme fra første dialog.',
      'Vi er tydelige på forventninger, tidsplan og læringsudbytte, så ledelse og lærere kan planlægge trygt.',
    ],
    methodTitle: 'Sådan arbejder vi',
    methodSteps: [
      { title: '1. Afklaring', text: 'Vi kortlægger målgruppe, faglig retning og rammer på jeres skole.' },
      { title: '2. Design', text: 'Vi tilpasser forløb og materialer, så de matcher jeres niveau og ambition.' },
      { title: '3. Leverance', text: 'Vi gennemfører med tydelig opfølgning, så kvaliteten holder i praksis.' },
    ],
    contactTitle: 'Kontakt os direkte',
    contactIntro: 'Skriv til os for en uforpligtende afklaring af muligheder, pris og opstart.',
    contactAction: 'Skriv til NordPixel',
    contactLabelEmail: 'Email',
    contactLabelCvr: 'CVR',
    contactLabelLinkedin: 'LinkedIn',
    authorityTitle: 'Det I kan forvente af samarbejdet',
    authorityCards: [
      {
        title: 'Faglig troværdighed',
        text: 'Vi bygger undervisning med fokus på progression, relevans og høj didaktisk kvalitet.',
      },
      {
        title: 'Professionel kommunikation',
        text: 'I får klare beslutningspunkter, konkrete anbefalinger og hurtig opfølgning.',
      },
      {
        title: 'Skalerbar implementering',
        text: 'Forløb kan tilpasses enkelthold, årgange eller tværgående indsatser på skolen.',
      },
    ],
    coursesLink: 'Se vores forløb',
  },
  en: {
    eyebrow: 'NordPixel for schools and education',
    title: 'Contact NordPixel and meet the team',
    intro:
      'We design educational programs in digital creativity, web development, and AI that work in real classrooms. NordPixel combines clear pedagogy, strong materials, and reliable delivery so schools can implement with confidence.',
    proofPoints: [
      { value: 'Clear structure', label: 'Programs with visible progression and concrete outcomes' },
      { value: 'Classroom-ready', label: 'Planned onboarding aligned with teachers and schedules' },
      { value: 'Long-term impact', label: 'Capability growth for both students and educators' },
    ],
    partnershipTitle: 'Why schools choose NordPixel',
    partnershipPoints: [
      'We translate complex technology into classroom learning that is both rigorous and practical.',
      'We deliver programs, materials, and communication with high professional standards from day one.',
      'We make expectations, timelines, and learning outcomes explicit so leadership and staff can plan confidently.',
    ],
    methodTitle: 'How we work',
    methodSteps: [
      { title: '1. Discovery', text: 'We map target groups, subject goals, and practical constraints with your team.' },
      { title: '2. Design', text: 'We adapt program structure and materials to your level and ambitions.' },
      { title: '3. Delivery', text: 'We execute with clear follow-up to ensure quality in real teaching contexts.' },
    ],
    contactTitle: 'Contact us directly',
    contactIntro: 'Reach out for a no-obligation conversation about scope, pricing, and launch.',
    contactAction: 'Email NordPixel',
    contactLabelEmail: 'Email',
    contactLabelCvr: 'CVR',
    contactLabelLinkedin: 'LinkedIn',
    authorityTitle: 'What you can expect from the collaboration',
    authorityCards: [
      {
        title: 'Educational authority',
        text: 'We build programs around progression, relevance, and robust pedagogical quality.',
      },
      {
        title: 'Professional communication',
        text: 'You get clear decisions, actionable recommendations, and fast follow-up.',
      },
      {
        title: 'Scalable implementation',
        text: 'Programs can be tailored for single classes, year groups, or school-wide initiatives.',
      },
    ],
    coursesLink: 'Explore our programs',
  },
} as const;

export function ContactContent() {
  const { locale } = useLanguage();
  const copy = CONTACT_COPY[locale];

  return (
    <main className="contactPage">
      <section className="contactPageHero">
        <span className="contactPageEyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>

        <div className="contactPageProof" role="list" aria-label={copy.authorityTitle}>
          {copy.proofPoints.map((point) => (
            <article key={point.value} className="contactProof" role="listitem">
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contactPageGrid">
        <article className="contactCard">
          <h2>{copy.partnershipTitle}</h2>
          <ul className="contactCardList">
            {copy.partnershipPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="contactCardMethod">
            <h3>{copy.methodTitle}</h3>
            <ol>
              {copy.methodSteps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <aside className="contactCard contactCardCta">
          <h2>{copy.contactTitle}</h2>
          <p>{copy.contactIntro}</p>

          <dl className="contactCardDetails">
            <div>
              <dt>{copy.contactLabelEmail}</dt>
              <dd>
                <a href={`mailto:${SITE_FOOTER.contactEmail}`}>{SITE_FOOTER.contactEmail}</a>
              </dd>
            </div>
            <div>
              <dt>{copy.contactLabelCvr}</dt>
              <dd>{SITE_FOOTER.cvrNumber}</dd>
            </div>
            <div>
              <dt>{copy.contactLabelLinkedin}</dt>
              <dd>
                <Link href={SITE_FOOTER.linkedinCompanyUrl} target="_blank" rel="noreferrer">
                  NordPixel
                </Link>
              </dd>
            </div>
          </dl>

          <div className="contactCardActions">
            <a className="contactAction" href={`mailto:${SITE_FOOTER.contactEmail}`}>
              {copy.contactAction}
            </a>
            <Link className="contactAction contactActionSecondary" href="/courses">
              {copy.coursesLink}
            </Link>
          </div>
        </aside>
      </section>

      <section className="contactAuthority" aria-label={copy.authorityTitle}>
        <h2>{copy.authorityTitle}</h2>
        <div className="contactAuthorityGrid">
          {copy.authorityCards.map((card) => (
            <article key={card.title} className="contactAuthorityCard">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactPageClosing" aria-label={copy.contactTitle}>
        <p>
          {locale === 'da'
            ? 'NordPixel hjælper skoler med at gøre digital læring konkret, kreativ og implementerbar fra første undervisningsgang.'
            : 'NordPixel helps schools make digital learning concrete, creative, and truly implementable from the first lesson.'}
        </p>
        <a href={`mailto:${SITE_FOOTER.contactEmail}`}>{copy.contactAction}</a>
      </section>
    </main>
  );
}
