import { useState } from 'react';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import '@/assets/styles/index.css';

const email = 'thomsenwork@outlook.dk';

function TeachingPage() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 2000);
    } catch {
      setCopyState('failed');
      window.setTimeout(() => setCopyState('idle'), 2000);
    }
  };

  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-accent-orange">NordPixel Development</p>
        <h1 className="text-4xl md:text-5xl">Teknologiforståelse for Folkeskolen</h1>
        <p className="max-w-3xl text-lg text-slate-300">
          Jeg udbyder undervisning og kurser i teknologiforståelse til folkeskolens udskoling – både for elever og lærere. 
          Samtidig uddanner jeg mig til multimediedesigner og web-udvikler på Erhvervsakademi København.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-700 bg-gradient-darker/70 p-6 md:p-8">
        <h2 className="mb-4 text-2xl">Om Undervisningen</h2>
        <p className="mb-6 text-slate-300">
          Jeg fokuserer på at gøre teknologi forståelig og tilgængelig for unge i folkeskolen. Min niche er netop det område, 
          som mange skoler mangler ekspertise i, men bliver bedt om at undervise mere i.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-accent-orange mb-2">Kurser for elever</h3>
            <p className="text-slate-300 text-sm">Interaktive introduktioner til teknologi, programmering og digital forståelse</p>
          </div>
          <div>
            <h3 className="font-semibold text-accent-orange mb-2">Undervisning for lærere</h3>
            <p className="text-slate-300 text-sm">Faglig løft og praktiske metoder til at undervise i teknologiforståelse</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-gradient-darker/70 p-6 md:p-8">
        <h2 className="mb-4 text-2xl">Kontakt & Booking</h2>
        <p className="mb-6 text-slate-300">Kontakt mig direkte for at booke kurser eller høre mere om muligheder</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center rounded-lg bg-accent-orange px-5 py-3 font-semibold text-black"
          >
            Send Email
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="rounded-lg border border-accent-orange px-5 py-3 font-semibold text-accent-orange"
          >
            Kopier Email
          </button>
        </div>
        <p className="mt-4 text-sm text-slate-300">
          {email}
          {copyState === 'copied' && <span className="ml-2 text-green-400">Kopieret</span>}
          {copyState === 'failed' && <span className="ml-2 text-red-400">Kunne ikke kopiere</span>}
        </p>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl">Om Mig</h1>
        <p className="max-w-3xl text-lg text-slate-300">
          Denne side udfyldes senere med mere om mig og min baggrund. 
          Lige nu fokuserer jeg på at hjælpe folkeskolerne med teknologiforståelse.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-700 bg-gradient-darker/70 p-6 md:p-8">
        <h2 className="mb-4 text-2xl">LinkedIn Profiler</h2>
        <ul className="space-y-3 text-lg">
          <li>
            <a
              href="https://www.linkedin.com/company/pordpixel-development/"
              target="_blank"
              rel="noreferrer"
            >
              NordPixel Development (Virksomhed)
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/emil-gray-thomsen-845a8b33b/"
              target="_blank"
              rel="noreferrer"
            >
              Emil Gray Thomsen (Personlig)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function FoundationLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-dark to-gradient-darker text-slate-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10 md:px-8 md:py-14">
        {/* Logo Header */}
        <NavLink 
          to="/" 
          className="flex items-center hover:opacity-80 transition-opacity"
          title="Hjem"
        >
          <img 
            src="/nordpixel-white-on-black.svg" 
            alt="NordPixel Development" 
            className="h-12 md:h-16 w-auto"
          />
        </NavLink>

        {/* Navigation */}
        <nav className="flex gap-4 text-sm md:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 ${isActive ? 'bg-accent-orange text-black' : 'border border-slate-600 text-slate-100'}`
            }
            end
          >
            Undervisning
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 ${isActive ? 'bg-accent-orange text-black' : 'border border-slate-600 text-slate-100'}`
            }
          >
            Om Mig
          </NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<TeachingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<TeachingPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <FoundationLayout />
    </Router>
  );
}

export default App;
