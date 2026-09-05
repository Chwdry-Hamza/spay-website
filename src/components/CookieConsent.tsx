"use client";

import * as React from "react";
import Link from "next/link";
import { persistCookieConsent, useCookieConsent } from "@/hooks/useCookieConsent";
import { usePreviewEditMode, usePreviewSlice } from "@/hooks/usePreview";
import { SITE } from "@/lib/site/palette";
import { HOME_CONTENT_DEFAULTS, type HomeContent } from "@/lib/homeContent";
import type { ConsentStrings } from "@/i18n/consent";

export default function CookieConsent({
  content,
  strings,
}: {
  content?: HomeContent["cookieConsent"];
  /**
   * Translated copy for this page's language.
   *
   * When present it wins over `content`, which is the CMS's English. The CMS
   * fields stay wired up underneath so an editor can still reword the English
   * banner and watch it change in the live preview — that only ever happens on
   * an English URL, where `strings` is the English set anyway.
   */
  strings?: ConsentStrings;
}) {
  const consent = useCookieConsent();
  const { isPreview, editing } = usePreviewEditMode();
  // Live in preview; server-resolved value (or defaults) everywhere else.
  const cms = usePreviewSlice("cookieConsent", content ?? HOME_CONTENT_DEFAULTS.cookieConsent);
  // The link target always comes from the CMS: the privacy policy is
  // English-only, so there is nothing to translate about where it points.
  const data = strings
    ? {
        message: strings.message,
        acceptLabel: strings.accept,
        declineLabel: strings.decline,
        learnMoreUrl: cms.learnMoreUrl,
      }
    : cms;
  const t = {
    message: SITE.body,
    ctaText: SITE.surface,
    ctaBg: SITE.brand,
  };

  const [locallyDismissed, setLocallyDismissed] = React.useState(false);

  // While editing in the preview, force the banner visible (above the bottom
  // nav) so it can be edited regardless of the stored consent state.
  const forceShow = isPreview && editing;
  if (!forceShow) {
    if (locallyDismissed) return null;
    if (consent !== "pending") return null;
  }

  const handleDecision = (choice: "accepted" | "declined") => {
    if (forceShow) return; // editing — don't dismiss the banner
    persistCookieConsent(choice);
    setLocallyDismissed(true);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={strings?.label ?? "Cookie consent"}
      className="fixed inset-x-0 bottom-4 md:bottom-5 lg:bottom-6 xl:bottom-8 z-[2147483647] mx-auto w-[calc(100%-32px)] max-w-[340px] md:max-w-[828px] lg:max-w-[1008px] xl:max-w-[1168px] rounded-3xl border px-6 py-6 shadow-2xl sm:px-10 sm:py-8"
      style={{
        background: SITE.surface,
        borderColor: SITE.line,
        boxShadow: "0 22px 46px rgba(11,60,68,0.18)",
        // Lift above the bottom nav while both are force-shown for editing.
        ...(forceShow ? { bottom: "120px" } : {}),
      }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: t.message }}>
          <span data-cms-field="cookieConsent.message">{data.message}</span>{" "}
          <Link
            href={data.learnMoreUrl}
            data-cms-href="cookieConsent.learnMoreUrl"
            className="underline-offset-2 hover:underline"
            style={{ color: t.ctaBg }}
          >
            {strings?.learnMore ?? "Learn more"}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handleDecision("declined")}
            data-cms-field="cookieConsent.declineLabel"
            className="rounded-full border px-6 py-3 text-base font-medium transition-colors hover:bg-white/5"
            style={{ borderColor: t.message, color: t.message }}
          >
            {data.declineLabel}
          </button>
          <button
            type="button"
            onClick={() => handleDecision("accepted")}
            data-cms-field="cookieConsent.acceptLabel"
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
