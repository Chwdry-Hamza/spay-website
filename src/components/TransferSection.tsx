"use client";

import { useSectionData, useSectionBackground } from "@/preview/PreviewProvider";
import { pickTextColors } from "@/preview/useSectionTextColor";
import { slotSizeOverride, slotTag } from "@/lib/headingTag";

type TitlePart = { text: string; color: string };
type TransferData = {
  eyebrow: string;
  titleParts: TitlePart[];
  style?: { headings?: Record<string, string> };
  subtitle: string;
  mockupImage: string;
};

const TRANSFER_DEFAULTS: TransferData = {
  eyebrow: "TRANSFERS WITHOUT BARRIERS",
  titleParts: [
    { text: "SEND ", color: "#ffffff" },
    { text: "CRYPTO", color: "#46F1C5" },
    { text: " EASILY,\nANYWHERE, TO ANYONE", color: "#ffffff" },
  ],
  subtitle:
    "Spend your crypto anywhere a card is accepted — our card and app make it as easy as using a regular bank card.",
  mockupImage: "/paymentMobile.png",
};

export default function TransferSection() {
  const data = useSectionData<TransferData>("transfer", TRANSFER_DEFAULTS);
  const cmsBg = useSectionBackground("transfer");
  const t = pickTextColors(data, { eyebrow: "#A6AABE", subtitle: "#A6AABE" });
  const fontFamily = 'var(--font-space-grotesk)';
  const HeadingTag = slotTag(data.style, "title", "h2");
  const titleSize = slotSizeOverride(data.style, "title");
  const EyebrowTag = slotTag(data.style, "eyebrow", "p");
  const SubtitleTag = slotTag(data.style, "subtitle", "p");

  return (
    <section
      id="transfer"
      className="relative pt-0 pb-4 md:pb-8 overflow-hidden"
      style={{ background: cmsBg ?? '#090e1c', fontFamily }}
    >
      {/* Mobile + Tablet glow behind phone */}
      <div
        className="lg:hidden absolute pointer-events-none"
        style={{
          left: '50%',
          bottom: '8%',
          transform: 'translateX(-50%)',
          width: '720px',
          height: '520px',
          maxWidth: '100%',
          background:
            'radial-gradient(ellipse 360px 380px at 50% 50%, #0e2e2e 0%, rgba(14,46,46,0.7) 30%, rgba(14,46,46,0.35) 55%, rgba(14,46,46,0.12) 75%, transparent 90%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
        }}
      />

      {/* Soft teal radial glow — tight behind the phone, no spill above/below */}
      <div
        className="hidden lg:block absolute pointer-events-none"
        style={{
          right: '-260px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '1800px',
          height: '700px',
          background:
            'radial-gradient(ellipse 950px 320px at 62% 50%, #0e2e2e 0%, #0e2e2e 24%, rgba(14,46,46,0.7) 45%, rgba(14,46,46,0.3) 65%, rgba(14,46,46,0.1) 82%, transparent 95%)',
        }}
      />

      {/* Mobile + Tablet Layout */}
      <div className="lg:hidden relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        {/* Header */}
        <EyebrowTag
          className="text-[10px] sm:text-xs md:text-sm uppercase mb-4 sm:mb-5 md:mb-6 text-center"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: t.eyebrow, letterSpacing: '6px' }}
        >
          {data.eyebrow}
        </EyebrowTag>

        {/* Main Heading */}
        <HeadingTag
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-5 md:mb-6 text-center whitespace-pre-line"
          style={{ fontFamily , ...titleSize }}
        >
          {data.titleParts.map((p, i) => (
            <span key={i} style={{ color: p.color }}>{p.text}</span>
          ))}
        </HeadingTag>

        {/* Subtitle */}
        {/*
        <p
          className="text-[11px] sm:text-xs md:text-base mb-6 sm:mb-8 md:mb-10 leading-relaxed text-center max-w-xl md:max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
        >
          Instantly transfer funds to Visa/MasterCard cards worldwide, SEPA bank accounts, and seamlessly send crypto assets with a single tap.
        </p>
        */}
        <SubtitleTag
          className="text-[11px] sm:text-xs md:text-base mb-6 sm:mb-8 md:mb-10 pb-2 leading-relaxed text-center max-w-xl md:max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: t.subtitle }}
        >
          {data.subtitle}
        </SubtitleTag>

        {/* Phone Mockup */}
        <div className="relative w-full flex justify-center">
          <img
            src={data.mockupImage}
            alt="SPay transfer mockup"
            className="relative w-64 sm:w-72 md:w-96 h-auto object-contain"
            style={{ transform: "scaleX(1) scaleY(1.05) translateY(20px)", transformOrigin: "center" }}
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-start justify-between gap-6">
          {/* Left Content */}
          <div className="max-w-md lg:max-w-lg xl:max-w-xl mt-6 lg:mt-8 xl:mt-10">
            <EyebrowTag
              className="text-[11px] lg:text-xs xl:text-sm uppercase mb-10 lg:mb-12 xl:mb-14"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: t.eyebrow, letterSpacing: '6px' }}
            >
              {data.eyebrow}
            </EyebrowTag>
            <HeadingTag
              className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5 lg:mb-7 xl:mb-9 whitespace-pre-line"
              style={{ fontFamily , ...titleSize }}
            >
              {data.titleParts.map((p, i) => (
                <span key={i} style={{ color: p.color }}>{p.text}</span>
              ))}
            </HeadingTag>
            {/*
            <p
              className="text-xs lg:text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
            >
              Instantly transfer funds to Visa/MasterCard cards worldwide, SEPA
              bank accounts, and seamlessly send crypto assets with a single tap.
            </p>
            */}
            <SubtitleTag
              className="text-xs lg:text-sm leading-relaxed pb-2"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: t.subtitle }}
            >
              {data.subtitle}
            </SubtitleTag>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative shrink-0 w-[320px] lg:w-[420px] xl:w-[500px] h-[420px] lg:h-[520px] xl:h-[580px] flex items-start justify-end ml-auto pl-2 lg:pl-4 xl:pl-6 translate-x-10 lg:translate-x-16 xl:translate-x-20">
            <img
              src={data.mockupImage}
              alt="SPay transfer mockup"
              className="w-72 lg:w-88 xl:w-96 h-auto object-contain"
              style={{ transform: "scaleY(1.05)", transformOrigin: "top right" }}
              />
          </div>
        </div>
      </div>
    </section>
  );
}
