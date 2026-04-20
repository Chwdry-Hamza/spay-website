"use client";
import Link from "next/link";
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

export default function AppHeader() {
  const bp = useBreakpoint();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4"
      style={{
        background: "linear-gradient(to right, #090e1c 0%, #0e2e2e 100%)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
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
  );
}
