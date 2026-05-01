"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const HIDDEN_PATHS = ["/about", "/card-terms", "/privacy-policy", "/prohibited-activities"];

export default function ConditionalBottomNav() {
  const pathname = usePathname();
  const consent = useCookieConsent();
  if (HIDDEN_PATHS.includes(pathname)) return null;
  if (consent !== "accepted" && consent !== "declined") return null;
  return <BottomNav />;
}
