import { NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from '@/pages/AboutPage';
import TeachingPage from '@/pages/TeachingPage';

const email = 'thomsenwork@outlook.dk';
const cvr = '45551695';

// Fælles side-layout med header, navigation og route-indhold.
export default function FoundationLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-dark to-gradient-darker text-slate-100">
      <header className="border-b border-slate-800/80 bg-gradient-dark/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <NavLink
            to="/"
            className="flex items-center transition-opacity hover:opacity-80"
            title="Hjem"
          >
            <img
              src="/nordpixel-white-on-black.svg"
              alt="NordPixel Development"
              className="h-12 md:h-14 w-auto"
            />
          </NavLink>

          <nav className="flex items-center gap-6 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `border-b-2 pb-2 text-lg font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'border-accent-orange text-accent-orange'
                    : 'border-transparent text-slate-300 hover:text-white'
                }`
              }
              end
            >
              Undervisning
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `border-b-2 pb-2 text-lg font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'border-accent-orange text-accent-orange'
                    : 'border-transparent text-slate-300 hover:text-white'
                }`
              }
            >
              Om os
            </NavLink>
          </nav>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10 md:px-8 md:py-14">
        <main>
          {/* Definerer hvilke komponenter der vises for hver URL. */}
          <Routes>
            <Route path="/" element={<TeachingPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Fallback: ukendte routes sendes til forsiden. */}
            <Route path="*" element={<TeachingPage />} />
          </Routes>
        </main>
      </div>

      <footer className="border-t border-slate-800/80 bg-slate-950/40">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-10 md:grid-cols-[1.2fr_0.8fr_0.9fr] md:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/nordpixel-white-on-black.svg"
                alt="NordPixel Development"
                className="h-10 w-auto"
              />
              <div>
                <p className="text-lg font-semibold text-slate-100">NordPixel Development</p>
                <p className="text-sm text-slate-400">Teknologiforståelse, web og digital undervisning</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              NordPixel udvikler praksisnære forløb, workshops og materialer, der gør teknologi mere forståelig og anvendelig
              for skoler, lærere og elever.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Kontakt</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href={`mailto:${email}`} className="transition-colors hover:text-white">
                  {email}
                </a>
              </li>
              <li>CVR: {cvr}</li>
              <li>Emil G. Thomsen</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Links</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <NavLink to="/" className="transition-colors hover:text-white">
                  Undervisning
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="transition-colors hover:text-white">
                  Om os
                </NavLink>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/pordpixel-development/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn · NordPixel Development
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/emil-gray-thomsen-845a8b33b/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn · Emil G. Thomsen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
