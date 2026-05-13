"use client";

import { useSectionData, useSectionBackground } from "@/preview/PreviewProvider";
import { pickTextColors } from "@/preview/useSectionTextColor";

type TitlePart = { text: string; color: string };
type Partner = { name: string; icon: string };
type CollaborationsData = {
  titleParts: TitlePart[];
  partners: Partner[];
};

const COLLABORATIONS_DEFAULTS: CollaborationsData = {
  titleParts: [
    { text: "OUR ", color: "#ffffff" },
    { text: "COLLABORATIONS", color: "#46F1C5" },
  ],
  partners: [
    { name: "BitGo", icon: "₿" },
    { name: "FENIGE", icon: "◆" },
    { name: "INTERCOM", icon: "▦" },
    { name: "PLAID", icon: "▣" },
    { name: "QUICKO", icon: "◯" },
  ],
};

export default function CollaborationsSection() {
  const data = useSectionData<CollaborationsData>(
    "collaborations",
    COLLABORATIONS_DEFAULTS,
  );
  const cmsBg = useSectionBackground("collaborations");
  const t = pickTextColors(data, {
    body: "#ffffff",
    accent: "#46F1C5",
  });

  const partners = data.partners ?? [];

  return (
    <section className="relative pt-4 md:pt-12 pb-4 md:pb-8 overflow-hidden" style={{ background: cmsBg ?? "#090e1c" }}>
      {/* Subtle light streaks - Mobile (vertical) */}
      <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-64 -translate-x-1/2">
        <div
          className="absolute inset-0 transform -skew-x-3"
          style={{ background: "linear-gradient(to bottom, transparent, #0e2e2e, transparent)" }}
        />
        <div
          className="absolute inset-0 transform skew-x-2 translate-x-8"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(14,46,46,0.6), transparent)" }}
        />
      </div>

      {/* Subtle light streaks - Tablet/Desktop (horizontal) */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-64 -translate-y-1/2">
        <div
          className="absolute inset-0 transform -skew-y-3"
          style={{ background: "linear-gradient(to right, transparent, #0e2e2e, transparent)" }}
        />
        <div
          className="absolute inset-0 transform skew-y-2 translate-y-8"
          style={{ background: "linear-gradient(to right, transparent, rgba(14,46,46,0.6), transparent)" }}
        />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative z-10 w-full px-6">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {data.titleParts.map((p, i) => (
            <span key={i} style={{ color: p.color }}>{p.text}</span>
          ))}
        </h2>

        <div
          className="flex flex-col items-center gap-7 sm:gap-8 mb-14"
          style={{ color: t.body }}
        >
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-7 h-7 border-2 rounded-lg flex items-center justify-center"
                style={{ borderColor: t.accent, color: t.accent }}
              >
                <span className="text-sm font-bold leading-none">{p.icon}</span>
              </div>
              <span
                className="text-lg sm:text-xl font-bold tracking-tight"
                style={{ color: t.body }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative z-10 w-full max-w-380 mx-auto px-6 md:px-8">
        <h2
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-12 md:mb-14 lg:mb-20"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {data.titleParts.map((p, i) => (
            <span key={i} style={{ color: p.color }}>{p.text}</span>
          ))}
        </h2>

        <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-16 mb-16 md:mb-20 lg:mb-32 flex-wrap">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 md:gap-2" style={{ color: t.body }}>
              <div
                className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 border-2 rounded-lg flex items-center justify-center"
                style={{ borderColor: t.accent, color: t.accent }}
              >
                <span className="text-[10px] md:text-xs lg:text-sm font-bold leading-none">{p.icon}</span>
              </div>
              <span
                className="text-sm md:text-base lg:text-xl font-bold tracking-tight"
                style={{ color: t.body }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
