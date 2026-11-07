"use client";

import React from "react";
import Link from "next/link";
import { Candidate } from "@/lib/data";

interface CandidateCardProps {
  candidate: Candidate;
  officeColor: string;
}

export default function CandidateCard({
  candidate,
  officeColor,
}: CandidateCardProps) {
  return (
    <Link
      href={`/candidate/${candidate.id}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: `0 4px 0 0 ${officeColor}` }}
    >
      {/* Portrait */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "3/4" }}
      >
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, #1d1416 0%, ${officeColor}55 60%, #1d1416 100%)`,
          }}
        />

        {/* Subtle glow circle behind person */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: officeColor }}
        />

        {/* Photo */}
        <img
          src={candidate.photo}
          alt={candidate.name}
          loading="lazy"
          className="relative z-10 w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Top badges */}
        <div className="absolute top-3 left-3 z-20">
          <span
            className="px-2.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider"
            style={{ backgroundColor: officeColor }}
          >
            {candidate.area}
          </span>
        </div>

        {/* Bottom gradient + name overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#0e0a0b] via-[#0e0a0b]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 z-30 px-4 pb-4">
          <p className="text-white font-black text-base sm:text-lg leading-tight line-clamp-2 drop-shadow">
            {candidate.name}
          </p>
          <p className="text-white/60 text-[11px] font-semibold mt-0.5 uppercase tracking-wide">
            {candidate.role}
          </p>
        </div>
      </div>

      {/* CTA Bar */}
      <div
        className="flex items-center justify-between px-4 py-3 text-white text-xs font-black uppercase tracking-widest transition-opacity duration-200"
        style={{ backgroundColor: officeColor }}
      >
        <span>View Profile</span>
        <svg
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  );
}
