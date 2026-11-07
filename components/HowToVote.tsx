import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    num: "01",
    color: "#e8090e",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="8" y="6" width="32" height="38" rx="4" stroke="currentColor" strokeWidth="3" />
        <path d="M16 18h16M16 25h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="34" cy="34" r="8" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
        <path d="M31 34l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Get Your Voter Card",
    subtitle: "Have your PVC ready",
    body: "Your Permanent Voter Card (PVC) is your ticket to vote. Without it, you cannot be accredited at any polling unit. Collect yours from the nearest INEC office before election day.",
    cta: "Check INEC Portal",
    ctaHref: "https://cvr.inecnigeria.org",
  },
  {
    num: "02",
    color: "#2a9d57",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="3" />
        <path d="M24 10v2M24 28v2M14 20h-2M34 20h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 30c-8 0-14 4-14 8h28c0-4-6-8-14-8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="24" cy="20" r="4" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
    title: "Find Your Polling Unit",
    subtitle: "Know where to go",
    body: "Every registered voter is assigned to a specific polling unit. Use the INEC voter portal to look up your polling unit address in Akuku-Toru LGA before election day so you are not lost.",
    cta: "Find Polling Unit",
    ctaHref: "https://cvr.inecnigeria.org",
  },
  {
    num: "03",
    color: "#2872d8",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="10" y="8" width="28" height="34" rx="3" stroke="currentColor" strokeWidth="3" />
        <path d="M17 20l4 4 10-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 32h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <path d="M34 38l4 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "Mark Your 5 Ballots",
    subtitle: "Vote for each office",
    body: "You will receive 5 ballot papers — one for each office. Use the thumb-print ink to mark your choice clearly in the box beside your candidate. Then drop each ballot into the correct box.",
    cta: "See All Candidates",
    ctaHref: "#candidates",
  },
];

export default function HowToVote() {
  return (
    <section
      id="how-to-vote"
      className="relative w-full bg-white py-20 sm:py-28 border-t border-black/5 overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="mb-14 sm:mb-20">
            <div className="flex h-[3px] w-14 rounded-full overflow-hidden mb-5">
              <span className="flex-1 bg-[#e8090e]" />
              <span className="flex-1 bg-[#f77f00]" />
              <span className="flex-1 bg-[#f7d117]" />
              <span className="flex-1 bg-[#2a9d57]" />
              <span className="flex-1 bg-[#2872d8]" />
              <span className="flex-1 bg-[#7b3fe4]" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-[#1d1416] leading-[1.05] tracking-tight">
              Voting Day,<br />
              <span className="text-[#f77f00]">Step by Step</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6b5e61] font-medium max-w-sm">
              Everything you need to know before you walk into the polling unit.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps — responsive cards */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch">
          {steps.map((step, i) => (
            <ScrollReveal
              key={step.num}
              delay={i * 100}
              direction="up"
              className="flex-1"
            >
              <div className="group relative h-full flex flex-col rounded-3xl bg-[#faf7f2] border-2 border-black/5 p-6 sm:p-7 hover:border-black/15 hover:shadow-md transition-all duration-300 overflow-hidden">

                {/* Large watermark number */}
                <span
                  className="absolute right-4 top-2 text-[80px] font-black leading-none select-none pointer-events-none opacity-[0.05] text-[#1d1416]"
                  aria-hidden="true"
                >
                  {step.num}
                </span>

                {/* Icon circle */}
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: `${step.color}15`, color: step.color }}
                >
                  {step.icon}
                </div>

                {/* Step label */}
                <p
                  className="text-[10px] font-black uppercase tracking-[0.2em] mb-1"
                  style={{ color: step.color }}
                >
                  Step {step.num}
                </p>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-[#1d1416] leading-tight mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#6b5e61] uppercase tracking-wider mb-4">
                  {step.subtitle}
                </p>

                {/* Body */}
                <p className="text-sm text-[#4a3e42] leading-relaxed font-medium flex-1">
                  {step.body}
                </p>

                {/* CTA */}
                <a
                  href={step.ctaHref}
                  {...(step.ctaHref.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-opacity duration-200 hover:opacity-75"
                  style={{ color: step.color }}
                >
                  {step.cta}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                {/* Coloured bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl opacity-80"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* INEC reminder banner */}
        <ScrollReveal delay={350}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl bg-amber-50 border border-amber-200/80 px-6 py-5 shadow-sm">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <p className="text-sm text-amber-950 font-medium leading-relaxed">
              <span className="font-black text-amber-800">Important: </span>
              Confirm your polling unit and registration status at{" "}
              <a
                href="https://cvr.inecnigeria.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-2 text-amber-900 hover:text-amber-700 transition-colors"
              >
                cvr.inecnigeria.org
              </a>{" "}
              before election day. Carry your PVC — it is mandatory for accreditation.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
