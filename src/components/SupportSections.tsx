"use client";

import Link from "next/link";
import { resolveSupportContent, type SupportContent } from "@/lib/supportContent";
import { useEditablePreview } from "@/hooks/usePreview";

/**
 * Support ("Get in touch") page, rendered from CMS content. The card layout and
 * icons stay in code; the text/emails/phone/hours come from `content`. In the
 * CMS live-preview iframe (`?preview=1`) it listens for postMessage updates and
 * re-renders in real time (mirrors HomeSections / AboutSections).
 */

const accent = "#46F1C5";
const bodyColor = "#A6AABE";
const headingFont = { fontFamily: "var(--font-space-grotesk)" } as const;
const bodyFont = { fontFamily: "var(--font-inter)" } as const;
const cardStyle = {
  background: "linear-gradient(160deg, rgba(14,46,46,0.45) 0%, rgba(9,14,28,0.6) 100%)",
  border: "1px solid rgba(70,241,197,0.18)",
} as const;

const ICONS = [
  // Email
  <path key="m" d="M3 5h18v14H3zM3 7l9 6 9-6" />,
  // Phone
  <path key="p" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.7 12.7 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  // Clock
  <g key="c"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>,
];

function CardIcon({ i }: { i: number }) {
  return (
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
      style={{ background: "rgba(70,241,197,0.1)", border: `1px solid ${accent}` }}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[i] ?? ICONS[0]}
      </svg>
    </div>
  );
}

function CardInner({ card, i }: { card: { label: string; value: string; desc: string }; i: number }) {
  return (
    <>
      <CardIcon i={i} />
      <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: accent, ...bodyFont }} data-cms-field={`channels.cards.${i}.label`}>{card.label}</p>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2" style={headingFont} data-cms-field={`channels.cards.${i}.value`}>{card.value}</h3>
      <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: bodyColor, ...bodyFont }} data-cms-field={`channels.cards.${i}.desc`} data-cms-multiline>{card.desc}</p>
    </>
  );
}

export default function SupportSections({ initialContent }: { initialContent: SupportContent }) {
  const { content, rootRef } = useEditablePreview(initialContent, resolveSupportContent);

  const { header, channels, general } = content;
  const cards = channels.cards ?? [];
  const telHref = (v: string) => `tel:${v.replace(/[^\d+]/g, "")}`;

  return (
    <div ref={rootRef}>
    <section className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-1/2 top-32 -translate-x-1/2 w-[80%] h-[60%] blur-3xl"
          style={{ background: "radial-gradient(ellipse at center, rgba(70,241,197,0.10) 0%, rgba(14,46,46,0.4) 35%, transparent 75%)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 md:pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-4" style={{ color: accent, ...bodyFont }} data-cms-field="header.eyebrow">{header.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={headingFont}>
            <span className="text-white" data-cms-field="header.white">{header.white}</span>
            <span style={{ color: accent }} data-cms-field="header.accent">{header.accent}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: bodyColor, ...bodyFont }} data-cms-field="header.intro">{header.intro}</p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16">
          {cards.map((card, i) => {
            const cls = "group relative rounded-2xl p-6 md:p-7 transition-all duration-200 hover:-translate-y-1";
            if (i === 0) {
              return <a key={i} href={`mailto:${card.value}`} className={cls} style={cardStyle}><CardInner card={card} i={i} /></a>;
            }
            if (i === 1) {
              return <a key={i} href={telHref(card.value)} className={cls} style={cardStyle}><CardInner card={card} i={i} /></a>;
            }
            return <div key={i} className="relative rounded-2xl p-6 md:p-7" style={cardStyle}><CardInner card={card} i={i} /></div>;
          })}
        </div>

        {/* General inquiries */}
        <div
          className="rounded-2xl p-6 md:p-10 mb-10"
          style={{ background: "linear-gradient(135deg, rgba(70,241,197,0.06) 0%, rgba(14,46,46,0.4) 100%)", border: "1px solid rgba(70,241,197,0.12)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={headingFont}>
                <span data-cms-field="general.white">{general.white}</span>
                <span style={{ color: accent }} data-cms-field="general.accent">{general.accent}</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: bodyColor, ...bodyFont }} data-cms-field="general.body">{general.body}</p>
            </div>
            <div className="md:text-right">
              <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: accent, ...bodyFont }} data-cms-field="general.eyebrow">{general.eyebrow}</p>
              <a href={`mailto:${general.email}`} className="text-lg md:text-2xl font-bold text-white hover:opacity-80 transition-opacity inline-block" style={headingFont} data-cms-field="general.email">
                {general.email}
              </a>
            </div>
          </div>
        </div>

        {/* Legal links */}
        <p className="text-center text-sm" style={{ color: bodyColor, ...bodyFont }}>
          Looking for legal or compliance info? See our{" "}
          <Link href="/privacy-policy" className="hover:opacity-80 transition-opacity" style={{ color: accent }}>Privacy Policy</Link>,{" "}
          <Link href="/card-terms" className="hover:opacity-80 transition-opacity" style={{ color: accent }}>Card Terms</Link>, or{" "}
          <Link href="/prohibited-activities" className="hover:opacity-80 transition-opacity" style={{ color: accent }}>Prohibited Activities</Link>.
        </p>
      </div>
    </section>
    </div>
  );
}
