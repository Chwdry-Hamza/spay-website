"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["payment", "transfer", "crypto", "earn"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile Bottom Nav - Always visible, constant on all pages */}
      <nav
        className="mobile-bottom-nav"
        style={{
          position: 'fixed',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2147483647,
          backgroundColor: 'transparent',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid rgba(63, 63, 70, 0.5)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          width: 'calc(100% - 32px)',
          maxWidth: '340px',
        }}
      >
        <div className="flex items-center justify-between px-5 py-3 w-full">
          <img src="/Spay.png" alt="SiCash" style={{ height: '3rem', width: 'auto' }} />
          <a
            href="https://apps.apple.com/app/sicash"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold px-5 py-2.5 rounded-lg text-xs transition-all hover:opacity-90"
            style={{
              background: "#04babf",
              color: "#0a2a23",
            }}
          >
            GET THE APP
          </a>
        </div>
      </nav>

      {/* Desktop Bottom Nav */}
      <div className="hidden md:flex fixed bottom-5 lg:bottom-6 xl:bottom-8 left-0 right-0 items-center justify-center gap-4 px-4 lg:px-6 z-50">
        <nav className="w-full max-w-[900px] lg:max-w-[1100px] xl:max-w-[1300px] bg-transparent backdrop-blur-md rounded-2xl px-4 py-3.5 lg:px-8 lg:py-5 xl:px-10 xl:py-6 flex items-center justify-between gap-3 lg:gap-4">
          {/* Logo — left margin aligns it vertically with the appbar SPay image */}
          <div className="shrink-0 ml-3 lg:ml-6 xl:ml-9">
            <Link href="/">
              <img src="/Spay.png" alt="SiCash" className="h-8 lg:h-9 xl:h-11 w-auto" style={{ transform: 'scale(1.0)', transformOrigin: 'left center' }} />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-6 lg:gap-8 xl:gap-14">
            <NavItem icon={<CardIcon />} label="How to pay" href="#payment" isActive={activeSection === "payment"} />
            <NavItem icon={<SendIcon />} label="Send" href="#transfer" isActive={activeSection === "transfer"} />
            <NavItem icon={<CryptoIcon />} label="Crypto" href="#crypto" isActive={activeSection === "crypto"} />
            <NavItem icon={<EarnIcon />} label="Earn" href="#earn" isActive={activeSection === "earn"} />
          </div>

          {/* CTA Button — matches HomeHero appbar GET SPAY APP style; right margin aligns it vertically with the appbar button */}
          <a
            href="https://apps.apple.com/app/sicash"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-semibold px-4 py-2.5 text-xs lg:px-7 lg:py-3 lg:text-sm xl:px-10 xl:py-4 xl:text-base rounded-xl transition-all hover:opacity-90 whitespace-nowrap mr-2 lg:mr-4 xl:mr-6"
            style={{
              background: "#04babf",
              color: "#0a2a23",
            }}
          >
            GET SPAY APP
          </a>
        </nav>
      </div>
    </>
  );
}

function NavItem({ icon, label, href, isActive }: { icon: React.ReactNode; label: string; href: string; isActive: boolean }) {
  return (
    <a href={href} className={`flex flex-col items-center gap-1.5 lg:gap-2 transition-colors cursor-pointer ${isActive ? "text-white" : "text-zinc-300 hover:text-white"}`}>
      <span className="w-7 h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8">{icon}</span>
      <span className={`text-sm lg:text-sm xl:text-base whitespace-nowrap ${isActive ? "font-bold" : "font-medium"}`}>{label}</span>
    </a>
  );
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function CryptoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  );
}

function EarnIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="8" width="7" height="12" rx="1" />
      <rect x="14" y="4" width="7" height="16" rx="1" />
    </svg>
  );
}

