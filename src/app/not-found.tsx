import { headers } from 'next/headers';
import { after } from 'next/server';
import Link from 'next/link';
import SiteShell from '@/components/site/SiteShell';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import { logMissingUrl } from '@/lib/log-404';
import { getSiteChrome } from '@/lib/site/chrome';
import { SITE } from '@/lib/site/palette';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

/**
 * Routes that ALWAYS resolve to a real page, so they can never be a genuine
 * 404. Next renders this not-found boundary as a fallback even on successful
 * pages (it uses the dynamic `headers()` API), which would otherwise record
 * valid routes — most notably the homepage "/" — as a miss on every visit.
 * We skip logging for these so the 404 log only contains real dead URLs.
 */
const ALWAYS_VALID = new Set([
  '/',
  '/about',
  '/blog',
  '/card',
  '/card-terms',
  '/contact',
  '/how-it-works',
  '/privacy-policy',
  '/search',
]);

function isAlwaysValid(path: string): boolean {
  const p = (path.split('?')[0] || '').replace(/\/+$/, '') || '/';
  return ALWAYS_VALID.has(p);
}

export default async function NotFound() {
  // Middleware forwards the originally-requested path here so we can log the
  // real dead URL (the not-found component otherwise only sees its own route).
  const h = await headers();
  const originalPath = h.get('x-spay-original-path') || '';

  // Fire-and-forget: record the miss AFTER the response is flushed so logging
  // never delays the 404 render. Skip always-valid routes so successful pages
  // (e.g. the homepage) aren't logged as 404s on every render.
  if (originalPath && !isAlwaysValid(originalPath)) {
    after(() => logMissingUrl(originalPath));
  }

  const chrome = await getSiteChrome();

  const BUTTON = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '999px',
    padding: '18px 38px',
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    transition: 'all .22s ease',
  } as const;

  return (
    <SiteShell chrome={chrome} active="" footerMarginTop="0" footerWatermarkLeft="48px">
      <section
        id="top"
        style={{
          background: SITE.band,
          padding: '140px 0 160px',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div
          data-reveal="up"
          style={{
            maxWidth: '1600px',
            padding: '0 72px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 'clamp(72px, 12vw, 160px)',
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: '-4px',
              color: SITE.brand,
            }}
          >
            404
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(28px, 3.4vw, 48px)',
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: '-1.4px',
              textTransform: 'uppercase',
              color: SITE.brandDeep,
            }}
          >
            This page doesn’t exist
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: '52ch',
              fontSize: '19px',
              lineHeight: 1.75,
              color: '#12464f',
              textWrap: 'pretty',
            }}
          >
            The link may be out of date, or the page may have moved. Try the homepage, or
            search the blog for what you were after.
          </p>
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <Link
              className="dc-h3"
              href="/"
              style={{ ...BUTTON, background: SITE.brand, color: SITE.surface }}
            >
              Back to home
            </Link>
            <Link
              className="dc-h4"
              href="/blog/"
              style={{ ...BUTTON, border: `1px solid ${SITE.brandDeep}`, color: SITE.brandDeep }}
            >
              Read the blog
            </Link>
          </div>
        </div>
      </section>
      <PerformanceScripts perf={undefined} />
    </SiteShell>
  );
}
