"use client";

import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { usePreviewEditMode } from "@/hooks/usePreview";
import type { HomeContent } from "@/lib/homeContent";

const HIDDEN_PATHS = ["/about", "/card-terms", "/privacy-policy"];

export default function ConditionalBottomNav({
  content,
}: {
  content?: HomeContent["bottomNav"];
}) {
  const pathname = usePathname();
  const consent = useCookieConsent();
  const { isPreview, editing } = usePreviewEditMode();
  // While editing in the preview, force the bar visible regardless of consent.
  const forceShow = isPreview && editing;
  if (HIDDEN_PATHS.includes(pathname)) return null;
  if (!forceShow && consent !== "accepted" && consent !== "declined") return null;
  return <BottomNav content={content} />;
}
