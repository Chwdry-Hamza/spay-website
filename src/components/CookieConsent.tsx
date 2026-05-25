"use client";

import * as React from "react";
import Link from "next/link";
import { persistCookieConsent, useCookieConsent } from "@/hooks/useCookieConsent";

const COOKIE_DATA = {
  message:
    "We use cookies to improve your experience and analyze traffic. See our Privacy Policy.",
  acceptLabel: "Accept",
  declineLabel: "Decline",
  learnMoreUrl: "/privacy-policy",
};

export default function CookieConsent() {
  const consent = useCookieConsent();
  const data = COOKIE_DATA;
  const t = {
    message: "#A6AABE",
    ctaText: "#090e1c",
    ctaBg: "#46F1C5",
  };

  const [locallyDismissed, setLocallyDismissed] = React.useState(false);

  if (locallyDismissed) return null;
  if (consent !== "pending") return null;

  const handleDecision = (choice: "accepted" | "declined") => {
    persistCookieConsent(choice);
    setLocallyDismissed(true);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-8 z-[2147483647] mx-auto w-[calc(100%-32px)] max-w-[340px] md:max-w-[828px] lg:max-w-[1008px] xl:max-w-[1168px] rounded-3xl border px-6 py-6 shadow-2xl sm:px-10 sm:py-8"
      style={{
        background: "#090e1c",
        borderColor: "rgba(70, 241, 197, 0.3)",
        fontFamily: "var(--font-inter)",
      }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: t.message }}>
          {data.message}{" "}
          <Link
            href={data.learnMoreUrl}
            className="underline-offset-2 hover:underline"
            style={{ color: t.ctaBg }}
          >
            Learn more
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handleDecision("declined")}
            className="rounded-full border px-6 py-3 text-base font-medium transition-colors hover:bg-white/5"
            style={{ borderColor: t.message, color: t.message }}
          >
            {data.declineLabel}
          </button>
          <button
            type="button"
            onClick={() => handleDecision("accepted")}
            className="rounded-full px-6 py-3 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ background: t.ctaBg, color: t.ctaText }}
          >
            {data.acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
