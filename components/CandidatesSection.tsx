"use client";

import React from "react";
import Link from "next/link";
import { offices } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function CandidatesSection() {
  return (
    <section id="candidates" className="relative w-full bg-white py-20 sm:py-28 border-t border-black/5">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* ── Header ── */}
        <ScrollReveal>
          <div className="mb-14 sm:mb-20">
            {/* Rainbow 6-color line */}
            <div className="flex h-[3px] w-14 rounded-full overflow-hidden mb-5">
              <span className="flex-1 bg-[#e8090e]" />
              <span className="flex-1 bg-[#f77f00]" />
              <span className="flex-1 bg-[#f7d117]" />
              <span className="flex-1 bg-[#2a9d57]" />
              <span className="flex-1 bg-[#2872d8]" />
              <span className="flex-1 bg-[#7b3fe4]" />
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-[#1d1416] leading-[1.05] tracking-tight">
              Our<br />
              <span className="text-[#e8090e]">Candidates</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6b5e61] font-medium max-w-md">
              8 endorsed candidates · 5 ballot levels · Akuku-Toru LGA
            </p>
          </div>
        </ScrollReveal>

        {/* ── Office Groups ── */}
        <div className="space-y-16 sm:space-y-24">
          {offices.map((office, officeIdx) => (
            <ScrollReveal key={office.key} delay={officeIdx * 50}>
              <div id={`ballot-${office.key}`}>

                {/* Office label row */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6">
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full text-white text-[11px] font-black flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: office.color }}
                  >
                    0{office.num}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1d1416] leading-tight">
                      {office.title}
                    </h3>
                    <p className="text-xs text-[#6b5e61] font-semibold mt-0.5">
                      {office.sub}
                    </p>
                  </div>
                  <div className="flex-1 h-px bg-black/10 ml-2" />
                </div>

                {/* Cards — 2-col on mobile/tablet, sleek clean modern */}
                <div
                  className={`grid gap-4 sm:gap-6 ${office.people.length === 1
                      ? "grid-cols-1 max-w-xs sm:max-w-sm"
                      : "grid-cols-2 max-w-xl sm:max-w-2xl"
                    }`}
                >
                  {office.people.map((candidate, cardIdx) => (
                    <ScrollReveal key={candidate.id} delay={cardIdx * 80} direction="up">
                      <Link
                        href={`/candidate/${candidate.id}`}
                        className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#161214] border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
                        style={{
                          aspectRatio: "3/4",
                          boxShadow: `0 4px 0 0 ${office.color}`,
                        }}
                      >
                        {/* Gradient backdrop tailored to candidate */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(175deg, #1d1416 0%, ${office.color}35 60%, #120d0f 100%)`,
                          }}
                        />

                        {/* Subtle colored backlight glow */}
                        <div
                          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-[50%] rounded-full blur-2xl opacity-25 transition-opacity duration-500 group-hover:opacity-45"
                          style={{ backgroundColor: office.color }}
                        />

                        {/* Candidate cutout photo */}
                        <img
                          src={candidate.photo}
                          alt={candidate.name}
                          loading={officeIdx === 0 ? "eager" : "lazy"}
                          className="absolute inset-0 w-full h-full object-contain object-bottom z-10 transition-transform duration-500 group-hover:scale-[1.03]"
                        />

                        {/* Smooth bottom gradient for high contrast readability */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 z-20 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

                        {/* Area pill — top left */}
                        <div className="absolute top-3 left-3 z-30">
                          <span
                            className="inline-block px-2.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider shadow-sm"
                            style={{ backgroundColor: office.color }}
                          >
                            {candidate.area}
                          </span>
                        </div>

                        {/* APC chip — top right */}
                        <div className="absolute top-3 right-3 z-30">
                          <span className="inline-block px-2.5 py-1 rounded-full bg-white/90 text-[#1d1416] text-[10px] font-black tracking-wider shadow-sm">
                            APC
                          </span>
                        </div>

                        {/* Name + CTA overlay at bottom */}
                        <div className="absolute inset-x-0 bottom-0 z-30 p-3.5 sm:p-4">
                          <p className="text-white font-black text-sm sm:text-base md:text-lg leading-tight line-clamp-2 drop-shadow">
                            {candidate.name}
                          </p>
                          <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/10">
                            <p className="text-white/60 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider truncate max-w-[65%]">
                              {candidate.role}
                            </p>
                            <span
                              className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-black uppercase tracking-wider flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                              style={{ color: office.color }}
                            >
                              View
                              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
