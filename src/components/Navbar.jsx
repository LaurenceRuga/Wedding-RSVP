import { useState } from "react";
import { Link } from "react-scroll";

const navLinkClass =
  "cursor-pointer text-white/80 hover:text-white text-xs tracking-widest uppercase font-sans transition-colors duration-300";

const sections = [
  { label: "Our Story", to: "our-story" },
  { label: "Timeline", to: "timeline" },
  { label: "Details", to: "details" },
  { label: "Dress Code", to: "dress-code" },
  { label: "RSVP", to: "rsvp" },
];

const scrollProps = {
  smooth: true,
  duration: 600,
  offset: -72,
  spy: true,
  activeClass: "text-white",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-700/30 bg-[#2C4A52]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <div className="select-none">
          <div className="font-serif text-lg text-white tracking-wide">J&nbsp;✦&nbsp;R</div>
          <div className="-mt-0.5 font-serif text-[11px] italic text-white/70">
            A Love Beyond the Sea
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {sections.map(({ label, to }) => (
            <Link key={to} to={to} {...scrollProps} className={navLinkClass}>
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-white/90 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-amber-700/30 bg-[#2C4A52] px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {sections.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                {...scrollProps}
                className={`${navLinkClass} py-2`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
