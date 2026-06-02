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
 * (cached). It runs ALONGSIDE the site's existing global GoogleAnalytics
 * component — both are intentionally allowed to coexist.
 */
import Script from 'next/script';
import { getAnalyticsSetting, type CmsPerformance } from '@/lib/cms';

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
      {/* ── GA4 (gtag.js) ── */}
      {ga4Id && (
        <>
          <Script
            id="spay-ga4-src"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="spay-ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('config', '${ga4Id}');`}
          </Script>
        </>
      )}

      {/* ── Google Tag Manager ── */}
      {gtmId && (
        <>
          <Script id="spay-gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="gtm"
            />
          </noscript>
        </>
      )}

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
