import type { CSSProperties, ReactNode } from "react";
import { SITE } from "@/lib/site/palette";

/**
 * The two bands every non-ported page is built from — the blog, search, legal
 * and CMS-page templates.
 *
 * They reproduce the design's own section rhythm — an uppercase brand-teal
 * title, then the content, both on the same 1600px / 72px measure — so these
 * templates sit in the same design as the ported pages without duplicating the
 * measurements in each of them. Both bands are white: the mint band the design
 * uses behind a hero was dropped here on request.
 *
 * `data-reveal` puts these bands on the same scroll-in as the ported pages —
 * SiteMotion animates any element carrying it, on every route.
 *
 * The hero keeps `id="top"`: the header logo and the active nav item link to
 * `#top`, and app/spay-site.css gives `#top` its own mobile padding.
 */

const WRAP: CSSProperties = {
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "0 72px",
};

export function PageHero({
  title,
  intro,
  above,
  children,
}: {
  title: string;
  intro?: string;
  /** Breadcrumbs or an eyebrow, shown above the title. */
  above?: ReactNode;
  /** Anything below the intro — a search bar, filter chips, a CTA row. */
  children?: ReactNode;
}) {
  return (
    <section
      id="top"
      data-r="page-head"
      style={{ padding: "88px 0 0", background: SITE.surface, overflow: "clip" }}
    >
      <div style={{ ...WRAP, display: "flex", flexDirection: "column", gap: "22px" }}>
        {above}
        <h1
          data-reveal="left"
          style={{
            margin: "0",
            maxWidth: "22ch",
            fontSize: "clamp(38px, 5vw, 72px)",
            lineHeight: "1.0",
            fontWeight: "600",
            letterSpacing: "-2.4px",
            textTransform: "uppercase",
            color: SITE.brand,
            textWrap: "balance",
          }}
        >
          {title}
        </h1>
        {intro && (
          <p
            data-reveal="left"
            style={{
              margin: "0",
              maxWidth: "62ch",
              fontSize: "19px",
              lineHeight: "1.75",
              color: SITE.body,
              textWrap: "pretty",
            }}
          >
            {intro}
          </p>
        )}
        {children ? <div data-reveal="up">{children}</div> : null}
      </div>
    </section>
  );
}

export function PageBody({
  children,
  background = SITE.surface,
}: {
  children: ReactNode;
  background?: string;
}) {
  return (
    <section style={{ padding: "56px 0 104px", background }}>
      <div style={WRAP}>{children}</div>
    </section>
  );
}
