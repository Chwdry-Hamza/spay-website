/**
 * Renders the CMS-managed analytics + custom scripts for a page.
 *
 *   - GA4 (gtag.js)            from the `analytics.ga4Id` setting
 *   - Google Tag Manager       from the `analytics.gtmId` setting
 *   - Custom header / body /   raw snippets from analytics.{header,body,footer}Script
 *     footer scripts           (e.g. Search Console meta, chat widgets)
 *
 * Per-page overrides via the page/post `performance` field:
 *   - perf.skipAnalytics      → skip GA4 + GTM
 *   - perf.skipCustomScripts  → skip the custom header/body/footer snippets
 *
 * NO Meta Pixel and NO Bing/Yandex/Pinterest verification — those features
 * were removed from the CMS and are intentionally absent here.
 *
 * Pass `perf={undefined}` on static pages (no per-page overrides). This is an
 * async server component that reads the `analytics` setting once per render
 * (cached). It is the SINGLE source of GA4/GTM on the site — the old
 * env-driven GoogleAnalytics component was removed so GA4 is managed entirely
 * from the CMS Analytics settings.
 */
import { getAnalyticsSetting, type CmsPerformance } from '@/lib/cms';
import ConsentedAnalytics from './ConsentedAnalytics';

/** Inject a raw HTML/script snippet exactly as authored in the CMS. */
function RawSnippet({ html, id }: { html: string; id: string }) {
  if (!html.trim()) return null;
  return <div id={id} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default async function PerformanceScripts({
  perf,
}: {
  perf?: CmsPerformance;
}) {
  const analytics = await getAnalyticsSetting();
  if (!analytics) return null;

  const skipAnalytics = perf?.skipAnalytics === true;
  const skipCustom = perf?.skipCustomScripts === true;

  const ga4Id = !skipAnalytics ? (analytics.ga4Id ?? '').trim() : '';
  const gtmId = !skipAnalytics ? (analytics.gtmId ?? '').trim() : '';

  return (
    <>
      {/* ── GA4 + GTM — loaded client-side only after cookie consent ── */}
      <ConsentedAnalytics ga4Id={ga4Id} gtmId={gtmId} />

      {/* ── Custom snippets ── */}
      {!skipCustom && (
        <>
          <RawSnippet id="spay-custom-header" html={analytics.headerScript ?? ''} />
          <RawSnippet id="spay-custom-body" html={analytics.bodyScript ?? ''} />
          <RawSnippet id="spay-custom-footer" html={analytics.footerScript ?? ''} />
        </>
      )}
    </>
  );
}
