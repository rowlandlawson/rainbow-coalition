"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ElectionInformation from "@/components/ElectionInformation";
import CandidatesSection from "@/components/CandidatesSection";
import HowToVote from "@/components/HowToVote";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [ready, setReady] = useState(false);

  const marqueeItems = [
    "Know your candidates",
    "Check your ward & PU",
    "Carry your voter card (PVC)",
    "Akuku-Toru decides",
    "5 Ballots, One Winning Team",
    "Peaceful & Credible Elections",
  ];

  return (
    <>
      {/* Preloader — always mounted, fades out when assets are ready */}
      <Preloader onDone={() => setReady(true)} />

      {/* Page content — fades in after preloader exits */}
      <main
        className="min-h-screen bg-white transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0 }}
      >
        {/* Hero Section */}
        <Hero />

        {/* Marquee Strip */}
        <section className="relative overflow-hidden bg-[#f7d117] py-3.5 border-y-2 border-[#1d1416]/10 select-none">
          <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-8 text-[#1d1416] font-black text-xs sm:text-sm tracking-wider uppercase">
            {marqueeItems.concat(marqueeItems).map((text, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <span>{text}</span>
                <span className="w-2 h-2 rounded-full bg-[#e8090e]" />
              </div>
            ))}
          </div>
        </section>

        {/* Scroll anchor */}
        <div id="ballot" />

        {/* Election Information */}
        <ElectionInformation />

        {/* Candidates Section */}
        <CandidatesSection />

        {/* Voting Day Guide */}
        <HowToVote />

        {/* Footer */}
        <footer className="w-full bg-[#0a3820] text-white py-14 px-4 sm:px-6 lg:px-8 border-t-4 border-[#2a9d57]">
          <div className="mx-auto max-w-5xl text-center">
            {/* Rainbow Pill */}
            <div className="inline-flex h-2 w-20 rounded-full overflow-hidden mb-5 shadow-sm">
              <span className="flex-1 bg-[#e8090e]" />
              <span className="flex-1 bg-[#f77f00]" />
              <span className="flex-1 bg-[#f7d117]" />
              <span className="flex-1 bg-[#2a9d57]" />
              <span className="flex-1 bg-[#2872d8]" />
              <span className="flex-1 bg-[#7b3fe4]" />
            </div>

            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              Rainbow Coalition · Akuku-Toru Voter Guide
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-emerald-100/75 max-w-lg mx-auto font-medium">
              Confirm your polling unit, registration status, and permanent voter
              card (PVC) with the Independent National Electoral Commission (INEC)
              prior to election day.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-bold text-white/90">
              <a
                href="https://cvr.inecnigeria.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f7d117] transition-colors"
              >
                INEC Voter Portal ↗
              </a>
              <span className="text-emerald-300/40">•</span>
              <a href="#ballot" className="hover:text-[#f7d117] transition-colors">
                The 5 Ballots
              </a>
              <span className="text-emerald-300/40">•</span>
              <a
                href="#candidates"
                className="hover:text-[#f7d117] transition-colors"
              >
                Candidate Slate
              </a>
              <span className="text-emerald-300/40">•</span>
              <a
                href="#how-to-vote"
                className="hover:text-[#f7d117] transition-colors"
              >
                Voting Guide
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-500/20 text-[11px] text-emerald-200/50">
              © {new Date().getFullYear()} Rainbow Coalition. Built for the voters of
              Akuku-Toru LGA, Rivers State.
            </div>
          </div>
        </footer>

        <div id="inec-info" />
      </main>
    </>
  );
}
