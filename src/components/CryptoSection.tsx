"use client";

import { useSectionData } from "@/preview/PreviewProvider";

type TitlePart = { text: string; color: string };
type CryptoData = {
  eyebrow: string;
  titleParts: TitlePart[];
  subtitle: string;
  mockupImage: string;
};

const CRYPTO_DEFAULTS: CryptoData = {
  eyebrow: "MANAGE CRYPTO",
  titleParts: [
    { text: "DEPOSIT AND INVEST WITH ", color: "#ffffff" },
    { text: "SPAY", color: "#46F1C5" },
  ],
  subtitle:
    "Purchase, spend, sell, and hold cryptocurrencies, all from the convenience of your device. Delve into the world of digital currencies effortlessly.",
  mockupImage: "/tabletMobile.png",
};

export default function CryptoSection() {
  const data = useSectionData<CryptoData>("crypto", CRYPTO_DEFAULTS);
  return (
    <section id="crypto" className="relative overflow-hidden" style={{ background: '#090e1c' }}>
      {/* Mobile + Tablet Layout */}
      <div className="lg:hidden relative z-10 w-full px-4 sm:px-8 md:px-12 pt-8 sm:pt-12 md:pt-16 pb-4 md:pb-6 text-center">
        {/* Header */}
        <p
          className="text-[10px] sm:text-xs md:text-sm uppercase mb-3 sm:mb-4"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
        >
          {data.eyebrow}
        </p>

        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {data.titleParts.map((p, i) => (
            <span key={i} style={{ color: p.color }}>{p.text}</span>
          ))}
        </h2>

        {/* Subtitle */}
        <p
          className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl md:max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
        >
          {data.subtitle}
        </p>

        {/* Phone Mockup - Mobile/Tablet with glow */}
        <div className="relative w-full flex justify-center items-center">
          <div
            className="absolute pointer-events-none"
            style={{
              width: '720px',
              height: '420px',
              maxWidth: '100%',
              background:
                'radial-gradient(ellipse 360px 280px at 50% 50%, #0e2e2e 0%, rgba(14,46,46,0.7) 30%, rgba(14,46,46,0.35) 55%, rgba(14,46,46,0.12) 75%, transparent 90%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, transparent 0%, black 18%, black 62%, transparent 82%)',
              maskImage:
                'linear-gradient(to bottom, transparent 0%, black 18%, black 62%, transparent 82%)',
            }}
          />
          <img
            src={data.mockupImage}
            alt="SPay trade mockup"
            className="relative w-80 sm:w-96 md:w-[28rem] h-auto object-contain"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center pt-16 lg:pt-24 pb-4 lg:pb-6">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex items-center justify-between gap-8">
            {/* Left - Text Content */}
            <div className="max-w-xl">
              <p
                className="text-[11px] lg:text-xs xl:text-sm uppercase mb-10 lg:mb-14 xl:mb-16"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE', letterSpacing: '6px' }}
              >
                MANAGE CRYPTO
              </p>
              <h2
                className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-10 lg:mb-14 xl:mb-16"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {data.titleParts.map((p, i) => (
                  <span key={i} style={{ color: p.color }}>{p.text}</span>
                ))}
              </h2>
              <p
                className="text-xs lg:text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, color: '#A6AABE' }}
              >
                {data.subtitle}
              </p>
            </div>

            {/* Right - Phone */}
            <div className="relative shrink-0 flex items-center justify-end ml-auto pl-8 lg:pl-16 xl:pl-24">
              <div
                className="absolute pointer-events-none top-1/2 -translate-y-1/2"
                style={{
                  left: '-120px',
                  right: '-600px',
                  height: '420px',
                  background:
                    'radial-gradient(ellipse 70% 55% at 45% 50%, rgba(14,46,46,0.9) 0%, rgba(14,46,46,0.55) 40%, rgba(14,46,46,0.25) 65%, rgba(14,46,46,0.08) 82%, transparent 100%)',
                  filter: 'blur(40px)',
                }}
              />
              <img
                src={data.mockupImage}
                alt="SPay trade mockup"
                className="relative w-[26rem] lg:w-[32rem] xl:w-[38rem] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
