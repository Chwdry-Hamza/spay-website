"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "spay-cookie-consent";
const COOKIE_NAME = "spay_cookie_consent";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;
const SSR_SENTINEL = "__ssr__";

type Choice = "accepted" | "declined";

function subscribe(callback: () => void) {
  window.addEventListener("spay-consent-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("spay-consent-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

function getServerSnapshot(): string {
  return SSR_SENTINEL;
}

function persistChoice(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {}
  document.cookie = `${COOKIE_NAME}=${choice}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("spay-consent-change", { detail: choice }));
}

export default function CookieConsent() {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (stored === SSR_SENTINEL) return null;
  if (stored === "accepted" || stored === "declined") return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-20 md:bottom-4 z-[100] mx-auto w-[calc(100%-1rem)] max-w-3xl rounded-2xl border px-4 py-4 shadow-2xl sm:px-6"
      style={{
        background: "#090e1c",
        borderColor: "rgba(70, 241, 197, 0.3)",
        fontFamily: "var(--font-inter)",
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-sm leading-relaxed" style={{ color: "#A6AABE" }}>
          We use cookies to improve your experience and analyze traffic. See
          our{" "}
          <Link
            href="/privacy-policy"
            className="underline-offset-2 hover:underline"
            style={{ color: "#46F1C5" }}
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => persistChoice("declined")}
            className="rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5"
            style={{ borderColor: "#A6AABE", color: "#A6AABE" }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => persistChoice("accepted")}
            className="rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#46F1C5", color: "#090e1c" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
