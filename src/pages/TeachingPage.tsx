import { ChangeEvent, FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';

// Kontaktmail, genbrugt på tværs af komponenten.
const email = 'thomsenwork@outlook.dk';

const studentCourses = [
  {
    title: 'HTML & CSS 1',
    grade: 'Fra 8. klasse',
    duration: '4 timer (inkl. pauser)',
    price: '1150,00 kr (ekskl. moms)',
    ctaLabel: 'Book kursus',
    description:
      'Lad eleverne prøve at lave deres egen statiske hjemmeside, hvor de ser, hvad der sker bag skærmen, når de bruger internettet.',
    outcome:
      'Efter 4 timer (inkl. pauser) har eleverne en basal forståelse af at kode deres egen hjemmeside og bruge det som værktøj i fremtidige projekter.',
  },
  {
    title: 'HTML & CSS 2',
    grade: 'Fra 8. klasse',
    duration: '4 timer (inkl. pauser)',
    price: '1150,00 kr (ekskl. moms)',
    ctaLabel: 'Book kursus',
    description:
      'Giver eleverne flere værktøjer til selvstændig benyttelse af HTML og CSS i skole- og privat arbejde ved brug af standard design- og udviklingsprincipper.',
    outcome:
      'Anbefales efter HTML & CSS 1. Efter 4 timer (inkl. pauser) har eleverne redskaberne til at producere egne hjemmesider til skoleprojekter og en bedre forståelse af den digitale verden bag skærmen.',
  },
  {
    title: 'JavaScript',
    grade: 'Fra 9. klasse',
    duration: '4 timer (inkl. pauser)',
    price: '1150,00 kr (ekskl. moms)',
    ctaLabel: 'Book kursus',
    description:
      'JavaScript er et centralt sprog på hjemmesider og et godt startpunkt for elever, der ønsker at lære programmering.',
    outcome:
      'Efter 4 timer (inkl. pauser) har eleverne en forståelse af, hvad programmering er, og kan bruge dokumentation til at skabe egne tråde og processer. Det anbefales at have arbejdet med HTML og CSS først.',
  },
];

type TeacherCourse = {
  title: string;
  duration: string;
  price: string;
  description: string;
  ctaLabel: string;
  isAvailable?: boolean;
  unavailableNote?: string;
  examples?: string[];
};

type BookingFormState = {
  name: string;
  email: string;
  school: string;
  phone: string;
  course: string;
  message: string;
};

type BookingFormErrors = Partial<Record<keyof BookingFormState, string>>;

const initialFormState: BookingFormState = {
  name: '',
  email: '',
  school: '',
  phone: '',
  course: '',
  message: '',
};

const teacherCourses: TeacherCourse[] = [
  {
    title: 'Klasseværelseskursus (lærere)',
    duration: '4 timer (inkl. pauser)',
    price: '1500,00 kr (ekskl. moms)',
    ctaLabel: 'Book kursus',
    description:
      'Et praksisnært forløb til lærerteam, der vil kunne arbejde mere trygt med teknologiforståelse og digitale metoder i egne fag.',
  },
  {
    title: 'Underviser-workshop',
    duration: '6 timer (inkl. pauser)',
    price: '2500,00 kr (ekskl. moms)',
    ctaLabel: 'Book workshop',
    description:
      'Et udvidet workshopformat med tid til både fælles gennemgang, konkret afprøvning og plan for, hvordan indholdet omsættes direkte i undervisningen.',
    examples: [
      'Digital manipulation (samfundsfag)',
      'Design af interaktive medier (HDS)',
      'Hvordan “tænker” lommeregneren (matematik)',
      'Kildekritik og AI (dansk/engelsk)',
      'Plakat- og printdesign (HDS)',
      'Large Project Workflow (projektarbejde)',
    ],
  },
  {
    title: 'Digitalt materiale',
    duration: 'N/A',
    price: '500,00 kr licens til skolen (ekskl. moms)',
    ctaLabel: 'Køb materiale',
    isAvailable: false,
    unavailableNote: 'Materialet er på vej og er ikke tilgængeligt endnu.',
    description:
      'PDF-materiale med opgaver, forklaringer, eksempler og kode-snippets, som kan bruges selvstændigt i klassen og som støtte før eller efter et kursusforløb.',
  },
];

// Forside med undervisningsindhold og kontaktsektion.
export default function TeachingPage() {
  // Status til UI-feedback efter forsøg på at kopiere email.
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  const [formState, setFormState] = useState<BookingFormState>(initialFormState);
  const [formErrors, setFormErrors] = useState<BookingFormErrors>({});
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent' | 'error' | 'config-missing'>('idle');

  // Kopierer email til clipboard og viser kort statusbesked.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState('copied');
      // Nulstil status efter 2 sekunder.
      window.setTimeout(() => setCopyState('idle'), 2000);
    } catch {
      setCopyState('failed');
      // Nulstil status efter 2 sekunder.
      window.setTimeout(() => setCopyState('idle'), 2000);
    }
  };

  const selectCourse = (courseTitle: string) => {
    setFormState((current) => ({
      ...current,
      course: courseTitle,
      message:
        current.message ||
        `Hej Emil,\n\nJeg vil gerne høre mere om "${courseTitle}" og mulighederne for booking.\n\n`,
    }));

    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
    setFormErrors((current) => ({ ...current, [name]: undefined }));

    if (submitState !== 'idle') {
      setSubmitState('idle');
    }
  };

  const validateBookingForm = () => {
    const errors: BookingFormErrors = {};

    if (!formState.name.trim()) {
      errors.name = 'Kontaktperson er påkrævet.';
    }

    if (!formState.email.trim()) {
      errors.email = 'Kontakt mail er påkrævet.';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email.trim())) {
      errors.email = 'Indtast en gyldig emailadresse.';
    }

    if (!formState.school.trim()) {
      errors.school = 'Organisation er påkrævet.';
    }

    if (!formState.course.trim()) {
      errors.course = 'Kursus/workshop er påkrævet.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateBookingForm()) {
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState('config-missing');
      return;
    }

    setSubmitState('sending');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formState.name.trim(),
          from_email: formState.email.trim(),
          school: formState.school.trim(),
          phone: formState.phone.trim(),
          course: formState.course.trim(),
          message: formState.message.trim(),
          to_email: email,
          reply_to: formState.email.trim(),
        },
        publicKey,
      );

      setSubmitState('sent');
      setFormState(initialFormState);
      setFormErrors({});
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-accent-orange">NordPixel Development</p>
        <h1 className="text-4xl md:text-5xl">Teknologiforståelse for Folkeskolen</h1>
        <p className="max-w-3xl text-lg text-slate-300">
          Kurser i webdesign og udvikling til udskolingen, hvor eleverne får hands-on erfaring med at bygge egne hjemmesider
          og forstå, hvad der sker bag skærmen i den digitale verden.
        </p>
      </header>

      <div>
        <h2 className="mb-4 text-2xl">Kurser for elever</h2>
        <p className="mb-6 text-slate-300">
          Alle elevkurser er planlagt som 4-timers forløb (inkl. pauser) med fokus på konkrete færdigheder, som kan bruges i
          skoleprojekter og videre læring.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {studentCourses.map((course) => (
            <article key={course.title} className="flex h-full flex-col rounded-xl border border-slate-600 p-5">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-accent-orange">{course.title}</h3>
                <p className="mb-3 mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
                  <span>{course.grade}</span>
                  <span aria-hidden="true" className="text-slate-400">|</span>
                  <span>{course.duration}</span>
                </p>
                <p className="mb-3 text-sm leading-relaxed text-slate-200">{course.description}</p>
                <p className="text-sm leading-relaxed text-slate-300">{course.outcome}</p>
              </div>
              <div className="mt-4 border-t border-slate-700 pt-4 text-sm text-slate-300">
                <p>Pris: {course.price}</p>
                <p>Inkluderer undervisning, materialer og forberedelse. Transport aftales separat.</p>
                <button
                  type="button"
                  onClick={() => selectCourse(course.title)}
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-accent-orange px-4 py-2 font-semibold text-black transition-opacity hover:opacity-90"
                >
                  {course.ctaLabel}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl">Kurser for lærere</h2>
        <p className="mb-4 text-slate-300">
          Forløb til lærerteam, der vil styrke teknologiforståelsen i egne fag og arbejde mere målrettet med elevernes digitale
          hverdag.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {teacherCourses.map((course) => (
            <article key={course.title} className="flex h-full flex-col rounded-xl border border-slate-600 p-5">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-accent-orange">{course.title}</h3>
                <p className="mb-3 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-200">{course.duration}</p>
                <p className="text-sm leading-relaxed text-slate-200">{course.description}</p>
                {course.examples && (
                  <div className="mt-4">
                    <p className="mb-2 text-sm font-semibold text-slate-200">Eksempler på workshop-temaer:</p>
                    <ul className="grid gap-2 text-sm text-slate-300 md:grid-cols-2">
                      {course.examples.map((example) => (
                        <li key={example}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="mt-4 border-t border-slate-700 pt-4 text-sm text-slate-300">
                <p>Pris: {course.price}</p>
                <p>Inkluderer undervisning, materialer og forberedelse. Transport aftales separat.</p>
                {course.isAvailable === false ? (
                  <div className="group relative mt-4 inline-flex">
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed items-center justify-center rounded-lg bg-slate-700 px-4 py-2 font-semibold text-slate-300"
                    >
                      {course.ctaLabel}
                    </button>
                    <span className="pointer-events-none absolute left-0 top-full z-10 mt-2 hidden w-56 rounded-lg border border-slate-600 bg-slate-950/95 px-3 py-2 text-xs leading-relaxed text-slate-200 shadow-lg group-hover:block">
                      {course.unavailableNote}
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => selectCourse(course.title)}
                    className="mt-4 inline-flex items-center justify-center rounded-lg bg-accent-orange px-4 py-2 font-semibold text-black transition-opacity hover:opacity-90"
                  >
                    {course.ctaLabel}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Skoler bruger forskellige computere og IT-begrænsninger. Derfor afstemmes format hurtigt, så forløbet passer til
          skolens rammer og elevernes adgang.
        </p>
      </div>

      <div>
        <h2 className="mb-4 text-2xl">Kontakt & Booking</h2>
        <p className="mb-6 text-slate-300">
          Kontakt mig direkte for booking af elevkurser eller workshops til lærere.
        </p>

        <form id="booking-form" onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-xl border border-slate-700 p-5">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Book en aftale</h3>
            <p className="text-sm text-slate-300">
              Udfyld formularen, så vender jeg tilbage med svar om pris, muligheder og næste skridt.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-200">
              <span>Kontaktperson *</span>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleFormChange}
                required
                className={`w-full rounded-lg border bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-colors ${
                  formErrors.name ? 'border-red-400 focus:border-red-400' : 'border-slate-600 focus:border-accent-orange'
                }`}
              />
              {formErrors.name && <p className="text-xs text-red-400">{formErrors.name}</p>}
            </label>

            <label className="space-y-2 text-sm text-slate-200">
              <span>Kontakt mail *</span>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleFormChange}
                required
                className={`w-full rounded-lg border bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-colors ${
                  formErrors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-600 focus:border-accent-orange'
                }`}
              />
              {formErrors.email && <p className="text-xs text-red-400">{formErrors.email}</p>}
            </label>

            <label className="space-y-2 text-sm text-slate-200">
              <span>Organisation *</span>
              <input
                type="text"
                name="school"
                value={formState.school}
                onChange={handleFormChange}
                required
                className={`w-full rounded-lg border bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-colors ${
                  formErrors.school ? 'border-red-400 focus:border-red-400' : 'border-slate-600 focus:border-accent-orange'
                }`}
              />
              {formErrors.school && <p className="text-xs text-red-400">{formErrors.school}</p>}
            </label>

            <label className="space-y-2 text-sm text-slate-200">
              <span>Telefon</span>
              <input
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleFormChange}
                className="w-full rounded-lg border border-slate-600 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-colors focus:border-accent-orange"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm text-slate-200">
            <span>Kursus/workshop *</span>
            <input
              type="text"
              name="course"
              value={formState.course}
              onChange={handleFormChange}
              required
              placeholder="Fx HTML & CSS 1 eller Underviser-workshop"
              className={`w-full rounded-lg border bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-colors ${
                formErrors.course ? 'border-red-400 focus:border-red-400' : 'border-slate-600 focus:border-accent-orange'
              }`}
            />
            {formErrors.course && <p className="text-xs text-red-400">{formErrors.course}</p>}
          </label>

          <label className="space-y-2 text-sm text-slate-200">
            <span>Besked (valgfri)</span>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleFormChange}
              rows={6}
              className="w-full rounded-lg border border-slate-600 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition-colors focus:border-accent-orange"
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={submitState === 'sending'}
              className="inline-flex items-center justify-center rounded-lg bg-accent-orange px-5 py-3 font-semibold text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitState === 'sending' ? 'Sender...' : 'Send bookingforespørgsel'}
            </button>
            <p className="text-sm text-slate-300">Svar sendes til {email}.</p>
          </div>

          {submitState === 'sent' && (
            <p className="text-sm text-green-400">Tak. Din forespørgsel er sendt, og jeg vender tilbage hurtigst muligt.</p>
          )}
          {submitState === 'error' && (
            <p className="text-sm text-red-400">Der opstod en fejl under afsendelse. Prøv igen eller skriv direkte til emailen nedenfor.</p>
          )}
          {submitState === 'config-missing' && (
            <p className="text-sm text-amber-400">
              Email-afsendelse er ikke konfigureret endnu. Tilføj EmailJS-nøglerne for at aktivere formularen.
            </p>
          )}
        </form>

        <div className="mt-8 border-t border-slate-700 pt-6">
          <p className="text-sm text-slate-300">Andre forespørgsler, skriv direkte til:</p>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-2 text-lg font-semibold text-accent-orange underline decoration-accent-orange/70 underline-offset-4 transition-opacity hover:opacity-85"
            title="Klik for at kopiere email"
          >
            {email}
          </button>
          <p className="mt-2 text-xs text-slate-400">Klik på emailen for at kopiere den til udklipsholderen.</p>
          {copyState === 'copied' && <p className="mt-2 text-sm text-green-400">Email kopieret.</p>}
          {copyState === 'failed' && <p className="mt-2 text-sm text-red-400">Kunne ikke kopiere email.</p>}
        </div>
      </div>
    </section>
  );
}
