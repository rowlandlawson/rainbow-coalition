"use client";

/**
 * ScrollReveal — wraps any child with an IntersectionObserver that
 * plays a pop-in (translate + scale + fade) animation when the element
 * enters the viewport. Respects prefers-reduced-motion.
 */

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra delay in ms (for stagger effects) */
  delay?: number;
  /** Translate direction: "up" (default), "left", "right" */
  direction?: "up" | "left" | "right";
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion — skip entirely
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const translateMap = {
      up: "translateY(28px)",
      left: "translateX(-28px)",
      right: "translateX(28px)",
    };

    // Initial hidden state
    el.style.opacity = "0";
    el.style.transform = `${translateMap[direction]} scale(0.97)`;
    el.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) translateX(0) scale(1)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

