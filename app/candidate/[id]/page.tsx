import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { offices, Candidate, Office } from "@/lib/data";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Find candidate and their parent office
function getCandidateData(id: string): { candidate: Candidate; office: Office } | null {
  for (const office of offices) {
    const candidate = office.people.find((p) => p.id === id);
    if (candidate) {
      return { candidate, office };
    }
  }
  return null;
}

// Generate static params for all candidates
export async function generateStaticParams() {
  const params: { id: string }[] = [];
  for (const office of offices) {
    for (const candidate of office.people) {
      params.push({ id: candidate.id });
    }
  }
  return params;
}

// Dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = getCandidateData(resolvedParams.id);
  if (!data) return { title: "Candidate Not Found" };

  return {
    title: `${data.candidate.name} · ${data.candidate.role} · Rainbow Coalition`,
    description: data.candidate.bio,
  };
}

export default async function CandidatePage({ params }: PageProps) {
  const resolvedParams = await params;
  const data = getCandidateData(resolvedParams.id);

  if (!data) {
    notFound();
  }

  const { candidate, office } = data;

  // Role text calculation based on spec
  const roleText =
    office.key === "assembly"
      ? `State House of Assembly, ${candidate.area}`
      : candidate.area || office.title;

  return (
    <main className="min-h-screen bg-[#faf7f2] pb-20">
      {/* ========================================================
          COLOURED PROFILE HEADER
          ======================================================== */}
      <section
        className="relative w-full pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden shadow-lg"
        style={{ backgroundColor: office.color }}
      >
        {/* Large Faded Rainbow Arcs in the background */}
        <div className="absolute right-0 top-0 w-96 sm:w-[600px] h-96 sm:h-[600px] opacity-15 pointer-events-none -mr-20 -mt-20">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white" strokeWidth="3">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="38" />
            <circle cx="50" cy="50" r="31" />
            <circle cx="50" cy="50" r="24" />
            <circle cx="50" cy="50" r="17" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Back to my ballot pill */}
          <Link
            href="/#candidates"
            className="inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all shadow-sm active:scale-95"
          >
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span>Back to My Ballot</span>
          </Link>

          {/* Profile Hero Layout */}
          <div className="mt-8 flex flex-col md:flex-row items-center md:items-end gap-6 sm:gap-10">
            {/* Big Portrait (4:5, White Border, Offset Shadow) */}
            <div className="relative w-56 sm:w-64 md:w-72 aspect-[4/5] rounded-3xl overflow-hidden bg-white/10 border-4 border-white shadow-[8px_8px_0_#1d1416] flex-shrink-0 flex items-end justify-center">
              <img
                src={candidate.photo}
                alt={candidate.name}
                className="w-full h-[95%] object-contain object-bottom drop-shadow-md"
              />
            </div>

            {/* Candidate Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                <span className="px-3.5 py-1 rounded-full bg-white text-[#1d1416] font-black text-xs uppercase tracking-wider shadow-sm">
                  {candidate.party}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20">
                  Ballot #{office.num}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {candidate.name}
              </h1>

              <div className="mt-2 text-white/90 text-sm sm:text-base font-semibold">
                Candidate for {roleText}
              </div>

              <div className="mt-1 text-white/70 text-xs sm:text-sm font-medium">
                Rainbow Coalition Endorsed Slate · Akuku-Toru LGA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PROFILE CONTENT GRID
          ======================================================== */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: About / Biography */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border-2 border-[#1d1416] shadow-[6px_6px_0_#1d1416]">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: office.color }}
              />
              <h3 className="text-xl font-black text-[#1d1416]">
                About Candidate
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#4a3e42] leading-relaxed font-medium">
              {candidate.bio}
            </p>
          </div>

          {/* Card 2: Vision (Dark panel with big yellow quote mark) */}
          <div className="relative rounded-3xl bg-[#1d1416] text-white p-6 sm:p-8 border-2 border-[#1d1416] shadow-[6px_6px_0_#f7d117] overflow-hidden flex flex-col justify-between">
            {/* Big Yellow Quote Mark */}
            <div
              className="absolute right-4 top-2 text-[#f7d117] text-8xl font-serif font-black leading-none opacity-40 select-none pointer-events-none"
              aria-hidden="true"
            >
              “
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f7d117]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#f7d117]">
                  The Vision
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                {candidate.vision}
              </h3>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-white/60">
              Prioritizing the people of Akuku-Toru & Rivers State
            </div>
          </div>

          {/* Card 3: Mission */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border-2 border-[#1d1416] shadow-[6px_6px_0_#1d1416]">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: office.color }}
              />
              <h3 className="text-xl font-black text-[#1d1416]">
                Our Mission & Action Plan
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#4a3e42] leading-relaxed font-medium">
              {candidate.mission}
            </p>
          </div>

          {/* Card 4: Where to Vote in Akuku-Toru */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border-2 border-[#1d1416] shadow-[6px_6px_0_#1d1416]">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: office.color }}
              />
              <h3 className="text-xl font-black text-[#1d1416]">
                Where to Vote
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#4a3e42] leading-relaxed font-medium">
              Cast your vote for this ticket at your registered polling unit in
              Akuku-Toru LGA, Rivers State on election day. Remember to carry your
              Permanent Voter Card (PVC).
            </p>
            <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#6b5e61]">
              <span>Official INEC Polling Unit</span>
              <a
                href="https://cvr.inecnigeria.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8090e] hover:underline"
              >
                Locate Polling Unit →
              </a>
            </div>
          </div>

        </div>

        {/* Past Projects & Track Record */}
        {candidate.projects && candidate.projects.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: office.color }}
              />
              <h3 className="text-2xl font-black text-[#1d1416]">
                Key Initiatives & Track Record
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {candidate.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-5 sm:p-6 border-2 border-[#1d1416] shadow-[4px_4px_0_#1d1416] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-white text-[11px] font-black"
                        style={{ backgroundColor: office.color }}
                      >
                        {proj.year}
                      </span>
                      <span className="text-xs font-bold text-[#6b5e61]">
                        Initiative #{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-black text-[#1d1416]">
                      {proj.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-[#4a3e42] font-medium leading-relaxed">
                    {proj.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA to return to ballot */}
        <div className="mt-14 text-center">
          <Link
            href="/#candidates"
            className="inline-flex items-center gap-3 rounded-full bg-[#1d1416] px-8 py-4 text-base font-black text-white hover:bg-black transition-all shadow-[6px_6px_0_#f7d117] active:scale-95"
          >
            <span>Back to All 5 Ballots</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

