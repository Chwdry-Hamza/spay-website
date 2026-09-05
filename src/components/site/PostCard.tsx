import type { CSSProperties } from "react";
import Link from "next/link";
import { categoryDisplayName, categorySlugOf, type CmsPost } from "@/lib/cms";
import { SITE } from "@/lib/site/palette";
import type { Locale } from "@/i18n/locales";
import { blogStrings, readTimeLabel } from "@/i18n/blog";
import { dateLocaleFor } from "@/lib/site/localeChrome";

/**
 * The design's blog card, used by the homepage Blogs band and by every post
 * listing (blog index, category, tag, related posts) so a card looks the same
 * wherever it appears.
 *
 * The homepage band is a verbatim port of the design export, so it renders
 * this card exactly as drawn — no excerpt. Listings turn the excerpt on, since
 * an index page is where the extra line earns its space.
 */

const CARD: CSSProperties = {
  minWidth: "0",
  display: "flex",
  flexDirection: "column",
  background: SITE.surface,
  border: `1px solid ${SITE.line}`,
  borderRadius: "15px",
  overflow: "hidden",
  transition: "transform .28s cubic-bezier(.22,.61,.36,1), box-shadow .28s ease",
};

const READ_MORE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "1.4px",
  textTransform: "uppercase",
  color: SITE.brand,
};

const ARROW = (
  <svg
              data-r="arrow"
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);

function formatDate(iso: string | null | undefined, locale: Locale): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  // `dateLocaleFor` keeps Western digits in Arabic and Urdu, matching every
  // other number on the page.
  return d.toLocaleDateString(dateLocaleFor(locale), {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * "Aug 19, 2026 · 7 min read", dropping whichever half is missing — in the
 * reader's language.
 *
 * Both halves used to be hardcoded English, so every card on all eight
 * translated sites said "Sep 3, 2026 · 3 min read" under an Urdu headline.
 */
function metaLine(post: CmsPost, locale: Locale): string {
  const t = blogStrings(locale);
  return [
    formatDate(post.publishedAt, locale),
    post.readTime ? readTimeLabel(t.post, post.readTime) : "",
  ]
    .filter(Boolean)
    .join(" · ");
}

export default function PostCard({
  post,
  locale,
  reveal,
  readMoreLabel = "Read more",
  readMoreCmsField,
  showExcerpt = false,
  linkCategory = false,
  prefix = "",
}: {
  post: CmsPost;
  /**
   * The reader's language. Required rather than defaulted: a card that quietly
   * falls back to English dates is exactly the bug this prop was added to fix,
   * and a required prop makes the compiler catch a missed call site.
   */
  locale: Locale;
  /**
   * Locale URL prefix. Both the card link and the category pill use it, so a
   * reader browsing in Urdu never lands on an English listing by accident.
   */
  prefix?: string;
  /** `data-reveal` direction; omitted outside the ported design pages. */
  reveal?: string;
  readMoreLabel?: string;
  /**
   * CMS path for the label, when this card sits on an editable page. The label
   * gets its own span because the link also holds the arrow svg, and the inline
   * editor reads a tagged element's full text.
   */
  readMoreCmsField?: string;
  showExcerpt?: boolean;
  /** Listings link the category pill to its landing page; the homepage does not. */
  linkCategory?: boolean;
}) {
  const href = `${prefix}/blog/${post.slug}/`;
  const category = categoryDisplayName(post);
  const categorySlug = categorySlugOf(post);

  const pill = (
    <span
      data-r="card-badge"
      style={{
        position: "absolute",
        top: "16px",
        left: "16px",
        background: "rgba(255,255,255,0.94)",
        color: SITE.brandMuted,
        fontSize: "11px",
        fontWeight: "700",
        letterSpacing: "1.6px",
        textTransform: "uppercase",
        padding: "8px 14px",
        borderRadius: "999px",
      }}
    >
      {linkCategory && categorySlug ? (
        <Link href={`${prefix}/blog/category/${categorySlug}/`} style={{ color: "inherit" }}>
          {category}
        </Link>
      ) : (
        category
      )}
    </span>
  );

  return (
    <article className="dc-h8" data-reveal={reveal} style={CARD}>
      <div
        style={{
          position: "relative",
          aspectRatio: "16/10",
          background: SITE.surfaceInset,
          overflow: "hidden",
        }}
      >
        {post.cover && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={post.cover}
            alt={post.coverMedia?.alt || post.title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )}
        {category && pill}
      </div>
      <div
        style={{
          padding: "26px 26px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flex: "1",
        }}
      >
        <h3
          style={{
            margin: "0",
            fontSize: "22px",
            lineHeight: "1.32",
            fontWeight: "700",
            letterSpacing: "-0.4px",
            color: SITE.ink,
            textWrap: "pretty",
          }}
        >
          {post.title}
        </h3>
        {showExcerpt && post.excerpt && (
          <p
            style={{
              margin: "0",
              fontSize: "16px",
              lineHeight: "1.7",
              color: SITE.body,
              textWrap: "pretty",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
            }}
          >
            {post.excerpt}
          </p>
        )}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            borderTop: `1px solid ${SITE.lineSoft}`,
            paddingTop: "18px",
          }}
        >
          <span style={{ fontSize: "13px", color: SITE.muted }}>{metaLine(post, locale)}</span>
          <Link className="dc-h9" href={href} style={READ_MORE}>
            <span data-cms-field={readMoreCmsField}>{readMoreLabel}</span> {ARROW}
          </Link>
        </div>
      </div>
    </article>
  );
}
