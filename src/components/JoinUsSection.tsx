"use client";

import Image from "next/image";
import { useSectionData, useSectionBackground } from "@/preview/PreviewProvider";
import { pickTextColors } from "@/preview/useSectionTextColor";

type TitlePart = { text: string; color: string };
type JoinUsData = {
  eyebrow: string;
  titleParts: TitlePart[];
  subtitle: string;
  ctaLabel: string;
  ctaUrl: string;
};

const JOIN_US_DEFAULTS: JoinUsData = {
  eyebrow: "JOIN US",
  titleParts: [
    { text: "TIME IS ", color: "#ffffff" },
    { text: "MONEY", color: "#46F1C5" },
  ],
  subtitle:
    "Say goodbye to juggling multiple apps and tools for your financial transactions. SPay is your one-stop solution for all your money needs.",
  ctaLabel: "GET SPAY APP",
  ctaUrl: "https://apps.apple.com/app/sicash",
};

export default function JoinUsSection() {
  const data = useSectionData<JoinUsData>("joinUs", JOIN_US_DEFAULTS);
  const cmsBg = useSectionBackground("joinUs");
  const t = pickTextColors(data, {
    eyebrow: "#A6AABE",
    subtitle: "#A6AABE",
    ctaText: "#0a2a23",
    ctaBg: "#04babf",
  });
  return (
    <section
      className="relative pt-16 md:pt-32 pb-24 md:pb-48 overflow-hidden"
      style={{ background: cmsBg ?? "#090e1c" }}
    >
      {/* Photo Grid Background */}
      <div
        className="absolute inset-y-0 left-0 right-0 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-4 gap-1"
        style={{ backgroundColor: "#090e1c" }}
      >
        {/* Row 1 */}
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        {/* Row 2 */}
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        {/* Row 3 */}
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
        <div className="h-64 rounded-lg overflow-hidden relative">
          <Image src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face" alt="" fill className="object-cover grayscale opacity-40" />
        </div>
      </div>


      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center py-24">
        <p
          className="text-[10px] sm:text-xs md:text-sm uppercase mb-4 sm:mb-6 md:mb-8"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            color: t.eyebrow,
            letterSpacing: "6px",
          }}
        >
          {data.eyebrow}
        </p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {data.titleParts.map((p, i) => (
            <span key={i} style={{ color: p.color }}>{p.text}</span>
          ))}
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            color: t.subtitle,
          }}
        >
          {data.subtitle}
        </p>
        <a
          href={data.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-semibold px-6 py-2.5 rounded-xl text-sm transition-all hover:opacity-90"
          style={{
            background: t.ctaBg,
            color: t.ctaText,
          }}
        >
          {data.ctaLabel}
        </a>
      </div>
    </section>
  );
}
