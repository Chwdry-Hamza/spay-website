"use client";

import { useSyncExternalStore } from "react";

export const COOKIE_CONSENT_STORAGE_KEY = "spay-cookie-consent";
export const COOKIE_CONSENT_COOKIE_NAME = "spay_cookie_consent";
export const COOKIE_CONSENT_EVENT = "spay-consent-change";
const SSR_SENTINEL = "__ssr__";

export type ConsentChoice = "accepted" | "declined";
export type ConsentState = ConsentChoice | "pending" | "ssr";

function subscribe(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): string {
  try {
    return localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

function getServerSnapshot(): string {
  return SSR_SENTINEL;
}

export function useCookieConsent(): ConsentState {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (stored === SSR_SENTINEL) return "ssr";
  if (stored === "accepted" || stored === "declined") return stored;
  return "pending";
}

export function persistCookieConsent(choice: ConsentChoice) {
  const maxAge = 60 * 60 * 24 * 180;
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
  } catch {}
  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${choice}; path=/; max-age=${maxAge}; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: choice }));
}
