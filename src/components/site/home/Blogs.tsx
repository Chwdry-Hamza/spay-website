import Link from "next/link";
import type { CmsPost } from "@/lib/cms";
import type { Locale } from "@/i18n/locales";
import type { HomeContent } from "@/lib/site/home";
import PostCard from "../PostCard";
import { externalLinkProps } from "@/lib/site/externalLink";

/**
 * The Blogs band — the design's three cards, filled with live CMS posts.
 *
 * Renders nothing when the CMS has no published posts (or is unreachable), so
 * the homepage never shows placeholder articles that lead nowhere.
 */

/** Reveal direction by position, as the design drew it. */
const REVEALS = ["left", "up", "right"];

export default function Blogs({
  content,
  posts,
  locale,
  prefix = "",
}: {
  content: HomeContent["blogs"];
  posts: CmsPost[];
  /** The reader's language — the cards date themselves in it. */
  locale: Locale;
  /**
   * Locale URL prefix. Without it the cards on a translated homepage link
   * straight into the English blog, silently dropping the reader out of the
   * language they chose.
   */
  prefix?: string;
}) {
  if (!posts.length) return null;

  return (
    <section id="blogs" style={{ overflow: "hidden" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "112px 72px" }}>
        <div
          data-reveal="up"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "20px",
            margin: "0 0 48px",
          }}
        >
          <h2
            style={{
              margin: "0",
              fontSize: "clamp(38px, 4.4vw, 64px)",
              lineHeight: "1.02",
              fontWeight: "600",
              letterSpacing: "-2.2px",
              textTransform: "uppercase",
              color: "#118EA3",
            }}
            data-cms-field="home.blogs.title"
          >
            {content.title}
          </h2>
          <Link
            className="dc-h1"
            href={content.allHref}
            {...externalLinkProps(content.allHref)}
            data-cms-href="home.blogs.allHref"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: "#0b3c44",
            }}
          >
            {/* The label needs its own element: the link also holds the arrow
                svg, and the inline editor reads a tagged element's FULL text,
                child elements included — tagging the link would save the arrow
                into the label. */}
            <span data-cms-field="home.blogs.allLabel">{content.allLabel}</span>{" "}
            <svg
              data-r="arrow"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "32px",
          }}
        >
          {posts.map((post, i) => (
            <PostCard
          locale={locale}
              key={post._id}
              prefix={prefix}
              post={post}
              reveal={REVEALS[i % REVEALS.length]}
              readMoreLabel={content.readMoreLabel}
              readMoreCmsField="home.blogs.readMoreLabel"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
