"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>("desktop");

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return bp;
}

// export default function HomeHero() {
//   return (
//     <section className="relative min-h-fit md:min-h-screen bg-black overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-black" />

//       {/* Top-left diagonal green light rays */}
//       {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-[10%] -left-[20%] w-[70%] h-[50%] bg-linear-to-br from-[#76ea59]/20 via-transparent to-transparent transform -rotate-[30deg] blur-3xl"></div>
//         <div className="absolute top-[2%] -left-[10%] w-[50%] h-32 md:h-48 bg-linear-to-r from-transparent via-[#76ea59]/15 to-transparent transform -skew-y-[25deg] blur-2xl"></div>
//         <div className="absolute top-[8%] left-0 w-[40%] h-20 md:h-32 bg-linear-to-r from-transparent via-green-400/20 to-transparent transform -skew-y-[25deg] blur-xl"></div>
//         <div className="absolute top-[12%] left-[5%] w-[30%] h-12 md:h-20 bg-linear-to-r from-transparent via-green-300/10 to-transparent transform -skew-y-[25deg] blur-lg"></div>
//       </div> */}

// {/*
// <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//  <Image
//   src="/T.png"
//   alt="Decorative overlay top-left"
//   width={250}
//   height={250}
//   className="absolute top-0 left-0 w-[35%] opacity-40 object-contain"
//   priority
// />
// </div> */}

//       {/* Top Navigation */}
//       {/* <nav className="relative z-10 w-full max-w-380 mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
//         <Link href="/">
//           <img src="/Spay.png" alt="SiCash" style={{ height: '2rem', width: 'auto' ,transform:'scale(0.8)'}} />
//         </Link>
//         <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-sm md:text-base">
//           English
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>
//       </nav> */}

//       {/* Hero Content */}
//       <div className="relative z-10 w-full max-w-380 mx-auto px-4 md:px-8 pt-4 md:pt-20 pb-24 md:pb-32 flex flex-col md:flex-row items-center md:justify-between">
//         {/* Left Content */}
//         <div className="max-w-xl text-center md:text-left order-1 md:order-1">
//           <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3 md:mb-6">
//             THE MONEY APP
//           </h1>
//           <p className="text-lg md:text-xl text-zinc-400 mb-4 md:mb-10 italic md:not-italic">
//             Send, spend, earn money & crypto in one app
//           </p>
//           {/* Desktop button */}
//           <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-linear-to-b from-zinc-100 to-zinc-300 text-black font-semibold px-8 py-4 text-lg rounded-xl hover:from-white hover:to-zinc-200 transition-all">
//             GET SICASH APP
//           </a>
//         </div>

//         {/* Right Content - Phone & Cards Image */}
//         <div className="relative w-72 h-80 md:w-150 md:h-150 order-2 md:order-2 my-6 md:my-0 shrink-0">
//           {/* Green glow - centered behind image on mobile, top-left on desktop */}
//           {/* Green diagonal glow - stretched like phone shape */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-[10%] -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:-top-4 md:left-60 w-36 h- md:w-64 md:h-160 bg-[#76ea59]/50 rounded-full blur-3xl rotate-[30deg]" />
//           <Image
//             src="/Home 1Section1.png"
//             alt="SICASH App with Cards"
//             fill
//             className="object-contain relative z-10"
//             priority
//           />
//         </div>

//         {/* Mobile GET THE APP button - centered below mockup */}
//         <div className="order-3 md:hidden w-full flex justify-center mt-2">
//           <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="inline-block bg-linear-to-b from-zinc-300 to-zinc-500 text-zinc-900 font-bold px-8 py-2.5 text-sm tracking-wider rounded-lg">
//             GET THE APP
//           </a>
//         </div>
//       </div>

//     </section>
//   );
// }

// // Mobile Bottom Navigation Component - to be used in layout
// export function MobileBottomNav() {
//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 px-4 py-3 flex items-center justify-between md:hidden" style={{ zIndex: 9999 }}>
//       <Link href="/" className="text-white font-black text-xl tracking-tight">
//         SICASH
//       </Link>
//       <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-linear-to-b from-zinc-400 to-zinc-600 text-zinc-900 font-bold text-sm tracking-wider rounded">
//         GET THE APP
//       </a>
//     </div>
//   );
// }

// function CurrencyLabel({ icon, label, active, opacity }: { icon: string; label: string; active?: boolean; opacity?: string }) {
//   return (
//     <div className={`flex items-center gap-2 ${opacity || ''} ${active ? 'text-white' : 'text-zinc-400'}`}>
//       <span className="text-lg">{icon}</span>
//       <span className="text-sm font-medium">{label}</span>
//     </div>
//   );
// }

export default function HomeHero() {
  const bp = useBreakpoint();

  // ADAPTIVE: gradient direction follows the phone's position.
  // Desktop/Tablet → phone on right, teal glow flows right-then-down.
  // Mobile → phone stacked below text, teal glow drops to bottom.
  const sectionBackground =
    bp === "mobile"
      ? "linear-gradient(to bottom, #090e1c 0%, #0e2e2e 30%, #0e2e2e 75%, #090e1c 90%, #090e1c 100%)"
      : bp === "tablet"
      ? "linear-gradient(to bottom, #090e1c 0%, #0e2e2e 40%, #0e2e2e 60%, #090e1c 80%, #090e1c 100%)"
      : "linear-gradient(to bottom, transparent 0%, transparent 55%, #090e1c 100%), linear-gradient(to right, #090e1c 0%, #0e2e2e 100%)";

  const glowStyle =
    bp === "mobile"
      ? {
          left: 0,
          top: "45%",
          width: "100%",
          height: "40%",
          background:
            "radial-gradient(ellipse at 50% 50%, #0e2e2e 0%, transparent 70%)",
        }
      : {
          right: 0,
          top: 0,
          width: "50%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 70% 50%, #0e2e2e 0%, transparent 70%)",
        };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: sectionBackground }}
    >
      {/* Adaptive radial teal glow — repositions to follow the phone */}
      <div className="absolute pointer-events-none" style={glowStyle} />

      {/* Top Navigation — fixed/sticky, responsive sizing */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4"
        style={{
          background: "linear-gradient(to right, #090e1c 0%, #0e2e2e 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Nav layout — SPAY logo always left-aligned, CTA on the right */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <img
              src="/Spay.png"
              alt="SiCash"
              style={{
                height:
                  bp === "mobile"
                    ? "1.6rem"
                    : bp === "tablet"
                    ? "2rem"
                    : "2.2rem",
                width: "auto",
              }}
            />
          </Link>
          <a
            href="https://apps.apple.com/app/sicash"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold px-3 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-2.5 rounded-lg lg:rounded-xl text-xs sm:text-sm transition-all hover:opacity-90"
            style={{
              background: "#04babf",
              color: "#0a2a23",
            }}
          >
            {bp === "mobile" ? "GET APP" : "GET SPAY APP"}
          </a>
        </div>
      </nav>

      {/* Hero Content — ADAPTIVE layout structure */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 flex ${
          bp === "desktop"
            ? "flex-row items-center justify-between gap-10"
            : "flex-col items-center gap-8 sm:gap-12"
        }`}
      >
        {/* Left — Text (RESPONSIVE: fluid type + spacing).
            On mobile/tablet uses w-fit mx-auto so the heading wrapper width
            equals the heading text width — the same trick the nav uses to
            align SPAY above "THE". */}
        <div
          className={`${
            bp === "desktop"
              ? "max-w-lg text-left"
              : "w-fit max-w-full mx-auto text-left"
          }`}
        >
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-white">THE </span>
            <span style={{ color: "#46F1C5" }}>MONEY </span>
            <span className="text-white">APP</span>
          </h1>

          {/* ADAPTIVE: condense copy on mobile, full pitch on tablet/desktop */}
          {bp === "mobile" ? (
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
              Secure, fast, and rewarding crypto platform.
            </p>
          ) : (
            <p
              className={`text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 ${
                bp === "desktop" ? "max-w-sm" : "max-w-md mx-auto"
              }`}
            >
              Experience institutional-grade security with the agility of
              decentralized finance. Secure, fast, and rewarding crypto
              platform for the next generation.
            </p>
          )}

          <a
            href="https://apps.apple.com/app/sicash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl text-sm transition-all hover:opacity-90"
            style={{
              background: "#04babf",
              color: "#0a2a23",
            }}
          >
            GET THE APP
          </a>
        </div>

        {/* Right — Phone (RESPONSIVE: scales with breakpoint) */}
        <div
          className={`relative shrink-0 ${
            bp === "mobile"
              ? "w-64 h-[360px] mx-auto"
              : bp === "tablet"
              ? "w-80 h-[460px] mx-auto"
              : "w-[460px] h-[560px]"
          }`}
        >
          <Image
            src="/heroSectionPhone.svg"
            alt="SiCash App with Cards"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
