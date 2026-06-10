/**
 * Renders the CMS-managed analytics (GA4 + GTM) for a page.
 *
 *   - GA4 (gtag.js)            from the `analytics.ga4Id` setting
 *   - Google Tag Manager       from the `analytics.gtmId` setting
 *
 * Per-page override via the page/post `performance` field:
 *   - perf.skipAnalytics      → skip GA4 + GTM
 *
 * Pass `perf={undefined}` on static pages (no per-page overrides). This is an
 * async server component that reads the `analytics` setting once per render
 * (cached). It is the SINGLE source of GA4/GTM on the site — the old
 * env-driven GoogleAnalytics component was removed so GA4 is managed entirely
 * from the CMS Analytics settings.
 */
import { getAnalyticsSetting, type CmsPerformance } from '@/lib/cms';
import ConsentedAnalytics from './ConsentedAnalytics';

export default async function PerformanceScripts({
  perf,
}: {
  perf?: CmsPerformance;
}) {
  const analytics = await getAnalyticsSetting();
  if (!analytics) return null;

  const skipAnalytics = perf?.skipAnalytics === true;

  const ga4Id = !skipAnalytics ? (analytics.ga4Id ?? '').trim() : '';
  const gtmId = !skipAnalytics ? (analytics.gtmId ?? '').trim() : '';

  // GA4 + GTM — loaded client-side only after cookie consent.
  return <ConsentedAnalytics ga4Id={ga4Id} gtmId={gtmId} />;
}
