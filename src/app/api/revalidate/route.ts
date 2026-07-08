import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * On-demand revalidation endpoint hit by the Spay CMS backend whenever content
 * changes (post/page/category/redirect/sitemap). The backend posts:
 *
 *   POST /api/revalidate
 *   x-spay-secret: <shared secret>
 *   { "paths": ["/blog", "/blog/my-post", "/sitemap.xml", ...] }
 *
 * Without this route the backend's revalidate calls 404, so edits (e.g. a newly
 * selected featured image) only appear after the time-based ISR window expires.
 */
export async function POST(req: Request) {
  const secret = process.env.WEBSITE_REVALIDATE_SECRET;
  if (secret && req.headers.get('x-spay-secret') !== secret) {
    return NextResponse.json({ ok: false, error: 'invalid secret' }, { status: 401 });
  }

  let paths: unknown;
  try {
    ({ paths } = await req.json());
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid JSON body' }, { status: 400 });
  }

  if (!Array.isArray(paths) || paths.some((p) => typeof p !== 'string')) {
    return NextResponse.json({ ok: false, error: '`paths` must be string[]' }, { status: 400 });
  }

  const revalidated: string[] = [];
  for (const path of paths as string[]) {
    // "layout:<path>" revalidates the layout scope — every route under that
    // path. The backend sends "layout:/" for site-wide settings (SEO defaults,
    // analytics, code injection), which render on every page via the root
    // layout, so a plain page-level purge of '/' would leave the rest of the
    // site stale until its ISR window expires.
    if (path.startsWith('layout:')) {
      const layoutPath = path.slice('layout:'.length) || '/';
      revalidatePath(layoutPath, 'layout');
      revalidated.push(path);
      continue;
    }
    // `trailingSlash: true` in next.config means the canonical cache key carries
    // a trailing slash — revalidate both spellings so the match never misses.
    const noSlash = path.replace(/\/+$/, '') || '/';
    const withSlash = noSlash === '/' ? '/' : `${noSlash}/`;
    revalidatePath(noSlash);
    if (withSlash !== noSlash) revalidatePath(withSlash);
    revalidated.push(path);
  }

  return NextResponse.json({ ok: true, revalidated });
}
