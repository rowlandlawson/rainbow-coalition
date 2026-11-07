"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo + Title identical to reference image */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Circular Rainbow Badge with white outline */}
            <div className="relative w-12 h-12 flex-shrink-0 rounded-full border-2 border-white/90 overflow-hidden shadow-md bg-[#0a2540]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Sky blue base */}
                <rect width="100" height="100" fill="#0d2b45" />

                {/* Rainbow concentric arcs */}
                {/* Arc 1: Red */}
                <circle
                  cx="50"
                  cy="58"
                  r="42"
                  fill="none"
                  stroke="#e8090e"
                  strokeWidth="6"
                />
                {/* Arc 2: Orange */}
                <circle
                  cx="50"
                  cy="58"
                  r="36"
                  fill="none"
                  stroke="#f77f00"
                  strokeWidth="6"
                />
                {/* Arc 3: Yellow */}
                <circle
                  cx="50"
                  cy="58"
                  r="30"
                  fill="none"
                  stroke="#f7d117"
                  strokeWidth="6"
                />
                {/* Arc 4: Green */}
                <circle
                  cx="50"
                  cy="58"
                  r="24"
                  fill="none"
                  stroke="#2a9d57"
                  strokeWidth="6"
                />
                {/* Arc 5: Blue */}
                <circle
                  cx="50"
                  cy="58"
                  r="18"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="6"
                />

                {/* River Waves mask & base */}
                <path
                  d="M0,58 Q25,50 50,58 T100,58 L100,100 L0,100 Z"
                  fill="#005691"
                />
                <path
                  d="M0,66 Q25,58 50,66 T100,66"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0,78 Q25,70 50,78 T100,78"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Vertical Divider Line */}
            <div className="w-[1.5px] h-8 bg-white/70 mx-0.5" />

            {/* Typography */}
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-white text-base sm:text-lg font-black tracking-tight drop-shadow-sm font-sans">
                Rainbow Coalition
              </span>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-normal drop-shadow-sm">
                Akuku-Toru Voter Guide
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#ballot"
              className="text-white/90 hover:text-white text-sm font-semibold transition-colors"
            >
              The 5 Ballots
            </a>
            <a
              href="#candidates"
              className="text-white/90 hover:text-white text-sm font-semibold transition-colors"
            >
              Candidates
            </a>
            <a
              href="#how-to-vote"
              className="text-white/90 hover:text-white text-sm font-semibold transition-colors"
            >
              Voting Guide
            </a>
            <a
              href="#ballot"
              className="inline-flex items-center gap-2 bg-[#f7d117] hover:bg-[#ffe115] text-[#1d1416] font-bold text-sm px-5 py-2.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <span>See My Ballot</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Icon (exactly 3 horizontal white bars as shown in image) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
          >
            <div className="w-7 flex flex-col gap-1.5 items-end">
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "w-7 rotate-45 translate-y-2" : "w-7"
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 w-7" : "w-7"
                }`}
              />
              <span
                className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "w-7 -rotate-45 -translate-y-2" : "w-7"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 rounded-2xl bg-[#120a0d]/95 backdrop-blur-xl border border-white/15 p-5 shadow-2xl flex flex-col gap-3">
          <a
            href="#ballot"
            onClick={() => setMenuOpen(false)}
            className="text-white text-base font-bold py-2 border-b border-white/10"
          >
            The 5 Ballots
          </a>
          <a
            href="#candidates"
            onClick={() => setMenuOpen(false)}
            className="text-white text-base font-bold py-2 border-b border-white/10"
          >
            Candidates Slate
          </a>
          <a
            href="#how-to-vote"
            onClick={() => setMenuOpen(false)}
            className="text-white text-base font-bold py-2 border-b border-white/10"
          >
            Voting Day Step-by-Step
          </a>
          <a
            href="#ballot"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-[#f7d117] text-[#1d1416] font-black text-sm py-3 rounded-full shadow-md"
          >
            <span>See My Ballot</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
