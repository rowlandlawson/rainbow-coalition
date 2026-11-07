import React from "react";

export default function ElectionInformation() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 px-5 sm:px-6">
      {/* Decorative soft pastel circular glow on top-right (matching image) */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#fde4e4]/70 blur-2xl pointer-events-none -mr-16 -mt-16" />

      <div className="relative z-10 mx-auto max-w-md sm:max-w-xl">
        {/* Rainbow Accent Pill (Red, Orange, Yellow, Green, Blue) */}
        <div className="flex h-2 w-20 rounded-full overflow-hidden mb-6">
          <span className="flex-1 bg-[#e8090e]" />
          <span className="flex-1 bg-[#f77f00]" />
          <span className="flex-1 bg-[#f7d117]" />
          <span className="flex-1 bg-[#2a9d57]" />
          <span className="flex-1 bg-[#2872d8]" />
        </div>

        {/* Section Headline */}
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.98]">
          <span className="block text-[#0a1128]">Election</span>
          <span className="block text-[#d90429] mt-0.5">Information</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-[#334155] font-medium leading-snug">
          Get the key details you need for a smooth and informed voting process.
        </p>

        {/* The 4 Cards Stack (Exact Pattern from Reference Image) */}
        <div className="mt-8 space-y-4">

          {/* Card 1: 5 Votes to cast */}
          <div className="rounded-[22px] bg-[#fdebed] p-4 sm:p-5 flex items-center justify-between transition-transform duration-200 hover:scale-[1.01]">
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Red Circle Badge with Ballot Box SVG */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 w-[52px] h-[52px] rounded-full bg-[#d90429] flex items-center justify-center flex-shrink-0 shadow-sm text-white">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Ballot Box Body */}
                  <rect x="3" y="11" width="18" height="10" rx="1.5" fill="none" />
                  {/* Slot */}
                  <line x1="8" y1="14" x2="16" y2="14" strokeWidth={2.5} />
                  {/* White Ballot Paper Angled into slot */}
                  <path
                    d="M9 11V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7"
                    fill="white"
                    stroke="none"
                  />
                </svg>
              </div>

              {/* Thin Vertical Divider */}
              <div className="w-[1px] h-10 bg-slate-300/70" />

              {/* Text content */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-[#0f172a] leading-none">
                  5
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#475569] leading-tight mt-1">
                  Votes to cast <br />
                  on election day
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: 2 State Assembly Constituencies */}
          <div className="rounded-[22px] bg-[#fef8e7] p-4 sm:p-5 flex items-center justify-between transition-transform duration-200 hover:scale-[1.01]">
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Amber Circle Badge with Nigeria Map Silhouette */}
              <div className="w-[52px] h-[52px] rounded-full bg-[#f59e0b] flex items-center justify-center flex-shrink-0 shadow-sm p-3 text-white">
                <svg
                  className="w-full h-full fill-white"
                  viewBox="0 0 100 100"
                >
                  {/* Nigeria map shape */}
                  <path d="M22,34 Q28,26 40,27 Q52,20 66,24 Q80,26 84,36 Q87,46 84,58 Q80,68 74,75 Q65,82 54,80 Q45,86 32,84 Q22,80 18,70 Q14,60 16,48 Q18,38 22,34 Z" />
                </svg>
              </div>

              {/* Thin Vertical Divider */}
              <div className="w-[1px] h-10 bg-slate-300/70" />

              {/* Text content */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-[#0f172a] leading-none">
                  2
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#475569] leading-tight mt-1">
                  State Assembly <br />
                  Constituencies in Akuku-Toru
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: 1 Local Government: Akuku-Toru */}
          <div className="rounded-[22px] bg-[#edf4ff] p-4 sm:p-5 flex items-center justify-between transition-transform duration-200 hover:scale-[1.01]">
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Deep Navy Circle Badge with Classical Government Columns */}
              <div className="w-[52px] h-[52px] rounded-full bg-[#0c2340] flex items-center justify-center flex-shrink-0 shadow-sm p-3 text-white">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Roof pediment */}
                  <path d="M3 9l9-5 9 5" />
                  {/* Entablature */}
                  <line x1="4" y1="9" x2="20" y2="9" />
                  {/* 4 Columns */}
                  <line x1="6" y1="9" x2="6" y2="18" />
                  <line x1="10" y1="9" x2="10" y2="18" />
                  <line x1="14" y1="9" x2="14" y2="18" />
                  <line x1="18" y1="9" x2="18" y2="18" />
                  {/* Base steps */}
                  <line x1="3" y1="18" x2="21" y2="18" />
                  <line x1="2" y1="21" x2="22" y2="21" />
                </svg>
              </div>

              {/* Thin Vertical Divider */}
              <div className="w-[1px] h-10 bg-slate-300/70" />

              {/* Text content */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-[#0f172a] leading-none">
                  1
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#475569] leading-tight mt-1">
                  Local Government: <br />
                  Akuku-Toru
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
