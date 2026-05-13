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

/**
 * Digest the published layout into the shape PreviewProvider expects.
 *   - sectionsByKey: keyed by `instanceId` for every item so the dynamic
 *     home-page renderer can look up per-instance data. ALSO keyed by
 *     `sectionKey` (first-instance wins) so subpages that render hardcoded
 *     `<AppHeader />` / `<Footer />` still resolve.
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
