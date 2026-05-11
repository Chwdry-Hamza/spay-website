"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { useIsPreview } from "@/preview/PreviewProvider";

const HIDDEN_PATHS = ["/about", "/card-terms", "/privacy-policy", "/prohibited-activities"];

export default function ConditionalBottomNav() {
  const pathname = usePathname();
  const consent = useCookieConsent();
  const isPreview = useIsPreview();
  if (HIDDEN_PATHS.includes(pathname)) return null;
  // In CMS preview always render so the user sees the same layout the live
  // site has. The cookie-consent gate only applies on the real site.
  if (!isPreview && consent !== "accepted" && consent !== "declined") return null;
  return <BottomNav />;
}
