import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from '@/pages/AboutPage';
import TeachingPage from '@/pages/TeachingPage';

const email = 'thomsenwork@outlook.dk';
const cvr = '45551695';

// Fælles side-layout med header, navigation og route-indhold.
export default function FoundationLayout() {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gradient-dark to-gradient-darker text-slate-100">
        <header className="border-b border-slate-800/80 bg-gradient-dark/95 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
            <NavLink
              to="/"
              className="flex items-center transition-opacity hover:opacity-80"
              title="Hjem"
            >
              <img
                src="/nordpixel-white-on-black.svg"
                alt="NordPixel"
                className="h-10 w-auto sm:h-12 md:h-14"
              />
            </NavLink>

            <nav className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `inline-flex items-center justify-center rounded-full border px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? 'border-accent-orange bg-accent-orange/10 text-accent-orange'
                      : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
                  }`
                }
                end
              >
                Undervisning
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `inline-flex items-center justify-center rounded-full border px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? 'border-accent-orange bg-accent-orange/10 text-accent-orange'
                      : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
                  }`
                }
              >
                Om os
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="flex-1 px-2 pb-8 sm:px-4 md:px-6 md:pb-12">
          <div className="mx-auto w-full max-w-6xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-100 shadow-[0_24px_56px_rgba(0,0,0,0.32)]">
            <div className="flex flex-col gap-10 px-5 py-8 text-slate-900 sm:px-8 md:px-10 md:py-14">
              {/* Definerer hvilke komponenter der vises for hver URL. */}
              <Routes>
                <Route path="/" element={<TeachingPage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* Fallback: ukendte routes sendes til forsiden. */}
                <Route path="*" element={<TeachingPage />} />
              </Routes>
            </div>
          </div>
        </main>

      <footer className="border-t border-slate-800/80 bg-[#020b0e]">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)_minmax(0,0.9fr)]">
            <section className="space-y-4">
              <img
                src="/nordpixel-white-on-black.svg"
                alt="NordPixel"
                className="h-12 w-auto"
              />
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Praksisnære forløb i teknologiforståelse, web og digital undervisning til skoler, lærere og elever.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="rounded-full border border-slate-800 px-3 py-1.5">Folkeskole</span>
                <span className="rounded-full border border-slate-800 px-3 py-1.5">Workshops</span>
                <span className="rounded-full border border-slate-800 px-3 py-1.5">Webforløb</span>
              </div>
            </section>

            <section className="space-y-3">
              <h5 className="text-slate-500">Kontakt</h5>
              <div className="space-y-2.5 text-sm text-slate-300">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-left text-lg font-semibold text-accent-orange underline decoration-accent-orange/70 underline-offset-4 transition-opacity hover:opacity-85"
                  title="Klik for at kopiere email"
                >
                  {email}
                </button>
                <p className="text-xs text-slate-400">Klik på emailen for at kopiere den til udklipsholderen.</p>
                {copyState === 'copied' && <p className="text-xs text-green-400">Email kopieret.</p>}
                {copyState === 'failed' && <p className="text-xs text-red-400">Kunne ikke kopiere email.</p>}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Kontaktperson</p>
                  <p className="mt-0.5 text-base text-slate-100">Emil G. Thomsen</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">CVR</p>
                  <p className="mt-0.5 text-base text-slate-100">{cvr}</p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h5 className="text-slate-500">Navigation</h5>
              <nav className="grid gap-2.5 text-sm">
                <NavLink to="/" onClick={scrollToTop} className="text-slate-200 transition-colors hover:text-white">
                  Undervisning
                </NavLink>
                <NavLink to="/about" onClick={scrollToTop} className="text-slate-200 transition-colors hover:text-white">
                  Om os
                </NavLink>
                <a
                  href="https://www.linkedin.com/company/nordpixel-development/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-200 transition-colors hover:text-white"
                >
                  LinkedIn · NordPixel
                </a>
                <a
                  href="https://www.linkedin.com/in/emil-gray-thomsen-845a8b33b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-200 transition-colors hover:text-white"
                >
                  LinkedIn · Emil G. Thomsen
                </a>
              </nav>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
}
