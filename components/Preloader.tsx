"use client";

import { useEffect, useRef, useState } from "react";

// Critical assets to preload
const HERO_VIDEO =
  "https://res.cloudinary.com/drpwe6wjp/video/upload/v1793628266/gemini_generated_video_8231c361_fzsg97.mp4";

const KEY_IMAGES = [
  "https://res.cloudinary.com/drpwe6wjp/image/upload/v1793636265/tinubu-removebg-preview_kad87v.png",
  "https://res.cloudinary.com/drpwe6wjp/image/upload/v1793636264/chinda-nobg_zgyuvt.png",
];

const RAINBOW = ["#e8090e", "#f77f00", "#f7d117", "#2a9d57", "#2872d8"];

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const doneRef = useRef(false);

  useEffect(() => {
    let loadedCount = 0;
    const total = KEY_IMAGES.length + 1; // images + 1 video

    const checkFinished = () => {
      loadedCount++;
      if (loadedCount >= total) {
        finish();
      }
    };

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setTimeout(() => {
        setVisible(false);
        setTimeout(onDone, 500);
      }, 700);
    };

    // Preload top candidate images
    KEY_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = checkFinished;
      img.onerror = checkFinished;
      img.src = src;
    });

    // Preload mobile hero video
    const vid = document.createElement("video");
    vid.preload = "auto";
    vid.muted = true;
    vid.oncanplay = checkFinished;
    vid.onerror = checkFinished;
    vid.src = HERO_VIDEO;
    vid.load();

    // Fallback safety timer so the screen never gets stuck
    const safetyTimer = setTimeout(finish, 1600);

    return () => clearTimeout(safetyTimer);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a3820] transition-opacity duration-500 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex flex-col items-center text-center px-6">
        
        {/* Official Rainbow Coalition Badge */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/90 overflow-hidden shadow-2xl bg-[#0d2b45] mb-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" fill="#0d2b45" />

            {/* Rainbow Concentric Arcs */}
            <circle cx="50" cy="58" r="42" fill="none" stroke="#e8090e" strokeWidth="6" />
            <circle cx="50" cy="58" r="36" fill="none" stroke="#f77f00" strokeWidth="6" />
            <circle cx="50" cy="58" r="30" fill="none" stroke="#f7d117" strokeWidth="6" />
            <circle cx="50" cy="58" r="24" fill="none" stroke="#2a9d57" strokeWidth="6" />
            <circle cx="50" cy="58" r="18" fill="none" stroke="#38bdf8" strokeWidth="6" />

            {/* River Waves */}
            <path d="M0,58 Q25,50 50,58 T100,58 L100,100 L0,100 Z" fill="#005691" />
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

        {/* Brand Title */}
        <h1 className="text-white text-xl sm:text-2xl font-black tracking-tight leading-tight">
          Rainbow Coalition
        </h1>
        <p className="text-emerald-100/70 text-xs sm:text-sm font-semibold tracking-wide mt-1">
          Akuku-Toru Voter Guide
        </p>

        {/* Minimal realistic loading line */}
        <div className="mt-7 w-36 h-[3px] rounded-full bg-white/15 overflow-hidden">
          <div
            className="h-full rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"
            style={{
              background: `linear-gradient(90deg, ${RAINBOW.join(", ")})`,
            }}
          />
        </div>

      </div>
    </div>
  );
}
