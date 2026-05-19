/**
 * Server-side fetcher for the published landing page from cms-backend.
 * Falls back to `null` (component defaults take over) if the API is down.
 */

import type { LayoutItem } from "@/preview/PreviewProvider";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";
const SLUG = process.env.CMS_PAGE_SLUG || "/";
const REVALIDATE = Number(process.env.CMS_REVALIDATE_SECONDS ?? 30);

export type PublishedLayoutItem = {
  instanceId: string;
  sectionKey: string;
  type: string;
  name?: string;
  data: Record<string, unknown>;
};

export type PublishedPage = {
  slug: string;
  title: string;
  seoTitle: string | null;
  seoDescription: string | null;
  seoKeywords: string | null;
  ogImage: string | null;
  noindex: boolean;
  version: number;
  publishedAt: string | null;
  layout: PublishedLayoutItem[];
};

export async function getPublishedPage(
  slug: string = SLUG,
): Promise<PublishedPage | null> {
  try {
    const res = await fetch(
      `${API_BASE}/api/v1/public/page/${encodeURIComponent(slug)}`,
      { next: { revalidate: REVALIDATE } },
    );
    if (!res.ok) return null;
    const body = (await res.json()) as
      | { ok: true; data: PublishedPage }
      | { ok: false; error: unknown };
    return body.ok ? body.data : null;
  } catch {
    return null;
  }
}

// ─── Content pages (About, Privacy Policy, Card Terms, etc.) ─────────────────
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type ContentBlock =
  | { id: string; type: "heading"; level: HeadingLevel; parts: { text: string; color?: string }[] }
  | { id: string; type: "paragraph"; text: string }
  | { id: string; type: "list"; ordered: boolean; items: string[] }
  | { id: string; type: "note"; text: string }
  | { id: string; type: "divider" }
  | {
      id: string;
      type: "table";
      rows: string[][];
      hasHeaderRow: boolean;
      caption?: string;
    };

export type PublishedContentPage = {
  slug: string;
  title: string;
  effectiveDate: string | null;
  lastUpdated: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  seoKeywords: string | null;
  ogImage: string | null;
  noindex: boolean;
  blocks: ContentBlock[];
  version: number;
  publishedAt: string | null;
  /** ISO timestamp Mongoose updates on every save — drives SEO `dateModified`. */
  updatedAt: string | null;
};

export async function getPublishedContentPage(
  slug: string,
): Promise<PublishedContentPage | null> {
  try {
    const res = await fetch(
      `${API_BASE}/api/v1/public/content-page/${encodeURIComponent(slug)}`,
      { next: { revalidate: REVALIDATE } },
    );
    if (!res.ok) return null;
    const body = (await res.json()) as
      | { ok: true; data: PublishedContentPage }
      | { ok: false; error: unknown };
    return body.ok ? body.data : null;
  } catch {
    return null;
  }
}

export type PublishedContentPageListItem = {
  slug: string;
  title: string;
  footerLabel: string | null;
  showInFooter: boolean;
};

/**
 * Look up an SEO redirect for `slug`. Returns the eventual target slug
 * + status code, or `null` if there's no redirect record.
 *
 * Used by `[slug]/page.tsx` as a fallback when `getPublishedContentPage`
 * returns null — keeps inbound links to old URLs working after a slug
 * rename. Redirects are stored as single-hop chains on the backend, so the
 * caller only needs one round-trip.
 */
export type RedirectTarget = {
  fromSlug: string;
  toSlug: string;
  statusCode: 301 | 308;
};

export async function getRedirectTarget(slug: string): Promise<RedirectTarget | null> {
  try {
    const res = await fetch(
      `${API_BASE}/api/v1/public/redirect/${encodeURIComponent(slug)}`,
      { next: { revalidate: REVALIDATE } },
    );
    if (!res.ok) return null;
    const body = (await res.json()) as
      | { ok: true; data: RedirectTarget }
      | { ok: false; error: unknown };
    return body.ok ? body.data : null;
  } catch {
    return null;
  }
}

export async function listPublishedContentPages(): Promise<PublishedContentPageListItem[]> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/public/content-pages`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return [];
    const body = (await res.json()) as
      | { ok: true; data: { pages: PublishedContentPageListItem[] } }
      | { ok: false; error: unknown };
    return body.ok ? body.data.pages : [];
  } catch {
    return [];
  }
}

/**
 * Digest the published layout into the shape PreviewProvider expects.
 *   - sectionsByKey: keyed by `instanceId` for every item so the dynamic
 *     home-page renderer can look up per-instance data. ALSO keyed by
 *     `sectionKey` (first-instance wins) so subpages that render hardcoded
 *     `<Footer />` still resolve.
 *   - publishedKeys: instanceIds of visible sections (the API only returns
 *     visible items). Used by `useSectionVisible` for the home page render.
 *   - layout: ordered list of layout items for the dynamic renderer.
 */
export function digestPublishedPage(page: PublishedPage | null): {
  sectionsByKey: Record<string, Record<string, unknown>>;
  publishedKeys: string[];
  layout: LayoutItem[];
} {
  if (!page?.layout) {
    return { sectionsByKey: {}, publishedKeys: [], layout: [] };
  }
  const sectionsByKey: Record<string, Record<string, unknown>> = {};
  const publishedKeys: string[] = [];
  const layout: LayoutItem[] = [];
  for (const item of page.layout) {
    sectionsByKey[item.instanceId] = item.data;
    // First instance wins for the sectionKey fallback used by subpages.
    if (!(item.sectionKey in sectionsByKey)) {
      sectionsByKey[item.sectionKey] = item.data;
    }
    publishedKeys.push(item.instanceId);
    layout.push({
      instanceId: item.instanceId,
      sectionKey: item.sectionKey,
      name: item.name,
    });
  }
  return { sectionsByKey, publishedKeys, layout };
}
