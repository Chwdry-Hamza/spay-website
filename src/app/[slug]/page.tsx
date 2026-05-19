import type { Metadata } from "next";
import { notFound, permanentRedirect, redirect } from "next/navigation";
import Footer from "@/components/Footer";
import { ContentBlocks } from "@/components/ContentBlocks";
import {
  getPublishedContentPage,
  getRedirectTarget,
  listPublishedContentPages,
  type ContentBlock,
} from "@/lib/cms";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const pages = await listPublishedContentPages();
  return pages.map((p) => ({ slug: p.slug }));
}

/**
 * Derive a short, plain-text snippet from the page blocks. Used as the
 * meta-description fallback when the editor didn't set one explicitly.
 */
function deriveDescription(blocks: ContentBlock[] | undefined): string | null {
  if (!blocks) return null;
  for (const b of blocks) {
    if (b.type === "paragraph" && b.text?.trim()) {
      const stripped = b.text
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\s+/g, " ")
        .trim();
      return stripped.length > 160 ? `${stripped.slice(0, 157)}…` : stripped;
    }
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPublishedContentPage(slug);
  if (!page) return { title: { absolute: "SPay" } };

  // The layout's title template appends " · SPay", so emit only the bare title.
  const title = page.seoTitle?.trim() || page.title;
  const description =
    page.seoDescription?.trim() ||
    deriveDescription(page.blocks) ||
    "SPay - Your financial companion";
  const images = page.ogImage ? [{ url: page.ogImage }] : undefined;
  const canonicalPath = `/${page.slug}`;

  // SEO freshness: emit `article:modified_time` (and `published_time` when we
  // know it) so Google has an explicit recency signal. We deliberately use the
  // auto-tracked `updatedAt`, not the editor-controlled `lastUpdated` string.
  const modifiedTime = page.updatedAt ?? page.publishedAt ?? undefined;
  const publishedTime = page.publishedAt ?? undefined;

  return {
    title,
    description,
    keywords: page.seoKeywords?.trim() || undefined,
    alternates: { canonical: canonicalPath },
    robots: page.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      type: "article",
      siteName: "SPay",
      images,
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description,
      images,
    },
  };
}

// Pin the formatter to UTC so the date string is identical on the server
// and in any reader's local timezone — otherwise a page rendered just after
// midnight UTC could read "May 14" from a server in UTC and "May 15" from a
// browser in UTC+5, causing a hydration warning on the <time> element.
const UPDATED_DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

function formatUpdated(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return UPDATED_DATE_FORMATTER.format(d);
}

export default async function ContentPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = await getPublishedContentPage(slug);
  if (!page) {
    // No live page at this slug — check for an SEO redirect record (e.g. the
    // page was renamed). If found, emit a 308 (or 307) so the old URL keeps
    // its inbound link equity. Falls through to notFound() otherwise.
    const target = await getRedirectTarget(slug);
    if (target) {
      const dest = `/${target.toSlug}`;
      if (target.statusCode === 301 || target.statusCode === 308) {
        permanentRedirect(dest);
      } else {
        redirect(dest);
      }
    }
    notFound();
  }

  // Prefer the editor's manual `lastUpdated` label if present (lets legal copy
  // pin a specific date); otherwise fall back to the auto-tracked `updatedAt`.
  const autoUpdated = formatUpdated(page.updatedAt);
  const displayLastUpdated = page.lastUpdated || autoUpdated;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.seoTitle?.trim() || page.title,
    description:
      page.seoDescription?.trim() ||
      deriveDescription(page.blocks) ||
      undefined,
    inLanguage: "en",
    datePublished: page.publishedAt ?? undefined,
    dateModified: page.updatedAt ?? page.publishedAt ?? undefined,
  };

  return (
    <main style={{ background: "#090e1c" }}>
      <section className="relative overflow-hidden pt-16 sm:pt-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 md:pt-24 pb-16">
          {(page.effectiveDate || displayLastUpdated) && (
            <p className="text-sm mb-10" style={{ color: "#46F1C5" }}>
              {page.effectiveDate && <>Effective Date: {page.effectiveDate}</>}
              {page.effectiveDate && displayLastUpdated && <> &middot; </>}
              {displayLastUpdated && (
                <>
                  Last Updated:{" "}
                  {page.updatedAt ? (
                    <time dateTime={page.updatedAt}>{displayLastUpdated}</time>
                  ) : (
                    displayLastUpdated
                  )}
                </>
              )}
            </p>
          )}
          <ContentBlocks blocks={page.blocks} />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </section>
      <Footer />
    </main>
  );
}
