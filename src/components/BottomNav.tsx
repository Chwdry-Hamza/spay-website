"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useSectionData } from "@/preview/PreviewProvider";
import { pickTextColors } from "@/preview/useSectionTextColor";

type BottomNavItem = { label: string; icon: string; href: string };
type BottomNavData = { items: BottomNavItem[] };

const BOTTOM_NAV_DEFAULTS: BottomNavData = {
  items: [
    { label: "How to pay", icon: "card", href: "#payment" },
    { label: "Send", icon: "arrow-right", href: "#transfer" },
    { label: "Crypto", icon: "branch", href: "#crypto" },
    { label: "Earn", icon: "trend-up", href: "#earn" },
  ],
};

// Positional fallback icons used when the CMS item count <= 4.
// Items beyond position 4 fall back to CardIcon.
const NAV_ICON_BY_POSITION = [CardIcon, SendIcon, CryptoIcon, EarnIcon];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const data = useSectionData<BottomNavData>("bottomNav", BOTTOM_NAV_DEFAULTS);
  const t = pickTextColors(data, {
    tileLabel: "#d4d4d8",
    tileIcon: "#04babf",
    ctaText: "#0a2a23",
    ctaBg: "#04babf",
  });

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
              background: t.ctaBg,
              color: t.ctaText,
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
            {data.items.map((item, i) => {
              const IconComp = NAV_ICON_BY_POSITION[i] ?? CardIcon;
              const sectionId = item.href.replace(/^#/, "");
              return (
                <NavItem
                  key={`${item.href}-${i}`}
                  icon={<IconComp />}
                  label={item.label}
                  href={item.href}
                  isActive={activeSection === sectionId}
                  iconColor={t.tileIcon}
                  labelColor={t.tileLabel}
                />
              );
            })}
          </div>

          {/* CTA Button — matches HomeHero appbar GET SPAY APP style; right margin aligns it vertically with the appbar button */}
          <a
            href="https://apps.apple.com/app/sicash"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-semibold px-4 py-2.5 text-xs lg:px-7 lg:py-3 lg:text-sm xl:px-10 xl:py-4 xl:text-base rounded-xl transition-all hover:opacity-90 whitespace-nowrap mr-2 lg:mr-2 xl:mr-[34px] lg:ml-8 xl:ml-12"
            style={{
              background: t.ctaBg,
              color: t.ctaText,
            }}
          >
            GET SPAY APP
          </a>
        </nav>
      </div>
    </>
  );
}

function NavItem({
  icon,
  label,
  href,
  isActive,
  iconColor,
  labelColor,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  iconColor?: string;
  labelColor?: string;
}) {
  return (
    <a
      href={href}
      className="flex flex-col items-center gap-1.5 lg:gap-2 transition-colors cursor-pointer hover:opacity-90"
      style={{ color: labelColor }}
    >
      <span className="w-7 h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8" style={{ color: iconColor }}>
        {icon}
      </span>
      <span
        className={`text-sm lg:text-sm xl:text-base whitespace-nowrap ${isActive ? "font-bold" : "font-medium"}`}
      >
        {label}
      </span>
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

