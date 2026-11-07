"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#0c0809]">
      {/* ========================================================
          BACKGROUND VIDEOS
          - Mobile (<768px): portrait video of ballot insertion
          - Desktop (>=768px): landscape 1080p video of ballot insertion
          ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        {/* Mobile Video (<768px) */}
        <video
          className="md:hidden absolute inset-0 w-full h-full object-cover object-bottom"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src="https://res.cloudinary.com/drpwe6wjp/video/upload/v1793628266/gemini_generated_video_8231c361_fzsg97.mp4"
            type="video/mp4"
          />
        </video>

        {/* Desktop Video (>=768px) */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source
            src="https://res.cloudinary.com/drpwe6wjp/video/upload/v1793628289/Voter_inserting_ballot_into_box_4ff3c239_1080p_xep3oa.mp4"
            type="video/mp4"
          />
        </video>

        {/* Clean Vignette & Contrast Gradients:
            Darker at the top for crisp text legibility,
            transparent at the bottom so the ballot box and hand are crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/85 md:to-transparent" />
      </div>

      {/* ========================================================
          HERO CONTENT (MOBILE FIRST - EXACTLY AS REFERENCE)
          ======================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 pt-28 sm:pt-36 md:pt-40 pb-16 my-auto flex flex-col items-start">

        {/* Small Rainbow Pill Accent Bar (6 Colors) */}
        <div
          className={`flex h-[5px] sm:h-[6px] w-20 sm:w-24 rounded-full overflow-hidden shadow-sm transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
        >
          <span className="flex-1 bg-[#e8090e]" />
          <span className="flex-1 bg-[#f77f00]" />
          <span className="flex-1 bg-[#f7d117]" />
          <span className="flex-1 bg-[#2a9d57]" />
          <span className="flex-1 bg-[#2872d8]" />
          <span className="flex-1 bg-[#7b3fe4]" />
        </div>

        {/* Main Headline */}
        <div
          className={`mt-6 sm:mt-8 flex flex-col transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <h1 className="text-white text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] drop-shadow-md">
            Know Your
          </h1>
          <h2 className="text-[#f7d117] text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mt-1 drop-shadow-md">
            Candidates
          </h2>
        </div>

        {/* Subtitle Lines */}
        <div
          className={`mt-4 sm:mt-6 text-white text-lg sm:text-2xl md:text-3xl font-medium leading-snug drop-shadow-md transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <p>Get the right information.</p>
          <p>Vote wisely.</p>
        </div>

        {/* Call to Action Button */}
        <div
          className={`mt-6 sm:mt-8 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <a
            href="#ballot"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#f7d117] hover:bg-[#ffe115] active:scale-95 text-[#1d1416] font-bold text-base sm:text-lg px-7 sm:px-8 py-3.5 sm:py-4 shadow-lg transition-all duration-200"
          >
            <span>See My Ballot</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 font-black">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Subtle bottom placeholder spacer to keep hero full-bleed and balance viewport */}
      <div className="relative z-10 w-full pb-4" />
    </section>
  );
}
