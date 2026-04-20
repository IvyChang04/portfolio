import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {
  FULL_NAME,
  HEADLINE,
  LOCATION,
  BIO,
  NAV_ITEMS,
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL,
  RESUME_URL,
} from '../data/constants';

function LeftPane({ activeSection, onNavClick }) {
  return (
    <aside className="bg-stone-50 px-8 py-16 lg:px-12 lg:py-24 lg:w-5/12 lg:sticky lg:top-0 lg:h-screen flex flex-col">
      {/* Identity */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          {FULL_NAME}
        </h1>
        <p className="text-lg text-stone-500 mt-3 font-medium">{HEADLINE}</p>
        <p className="text-sm text-stone-400 mt-1">📍 {LOCATION}</p>
        <p className="text-stone-500 mt-6 leading-relaxed text-sm max-w-md">
          {BIO}
        </p>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex flex-col gap-1 mb-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className="flex items-center gap-4 py-2 group cursor-pointer text-left"
            >
              <span
                className={`block h-px transition-all duration-300 ${
                  isActive
                    ? 'w-16 bg-amber-700'
                    : 'w-8 bg-stone-300 group-hover:w-12 group-hover:bg-stone-500'
                }`}
              />
              <span
                className={`text-xs tracking-widest font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'text-slate-900'
                    : 'text-stone-400 group-hover:text-stone-600'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer: Social icons + Resume */}
      <div className="mt-8 lg:mt-0 flex items-center gap-6">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-stone-400 hover:text-slate-900 transition-colors duration-200 text-xl"
        >
          <FaGithub />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-stone-400 hover:text-slate-900 transition-colors duration-200 text-xl"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          aria-label="Email"
          className="text-stone-400 hover:text-slate-900 transition-colors duration-200 text-xl"
        >
          <HiOutlineMail />
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-xs tracking-wide text-stone-400 hover:text-slate-900 transition-colors duration-200 underline decoration-stone-300 underline-offset-4 hover:decoration-slate-900"
        >
          Resume
        </a>
      </div>
    </aside>
  );
}

export default LeftPane;
