'use client';

import Script from 'next/script';
import { useCookieConsent } from '@/hooks/useCookieConsent';

/**
 * Consent-gated GA4 + GTM loader (client-side).
 *
 * The IDs come from the CMS `analytics` setting (resolved server-side in
 * PerformanceScripts) and are passed in as props. The tracking scripts are only
 * injected once the visitor has clicked "Accept" on the cookie banner, so no
 * analytics fire before consent (GDPR/EU).
 *
 * Note: this only gates GA4 + GTM. The custom header/body/footer snippets stay
 * server-rendered in PerformanceScripts because they may be functional (chat
 * widgets, etc.), not analytics.
 */
export default function ConsentedAnalytics({
  ga4Id,
  gtmId,
}: {
  ga4Id?: string;
  gtmId?: string;
}) {
  const consent = useCookieConsent();
  // 'ssr' (during SSR/hydration), 'pending', and 'declined' all render nothing —
  // matching server + first client render, so there's no hydration mismatch.
  if (consent !== 'accepted') return null;

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
    </>
  );
}
