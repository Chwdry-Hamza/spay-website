import { buildAnalyticsBootstrap } from '@/lib/analytics';
import ConsentUpdater from './ConsentUpdater';

/**
 * Google Consent Mode v2 loader for GA4 + GTM — rendered ONCE from the root
 * layout so both tags land in the <head> on every page (SEO team requirement:
 * GA4 + GTM in <head> site-wide).
 *
 *   - gtag.js library   → `<script async src>`; React 19 hoists it into <head>.
 *   - inline bootstrap   → next/script `beforeInteractive`, which Next injects
 *     into the initial HTML <head> and runs before hydration. It sets the
 *     Consent Mode default (denied), upgrades returning accepted visitors,
 *     configures GA4, and loads GTM via Google's STANDARD snippet (gtm.start
 *     then gtm.js — required for Tag Assistant / Preview to connect).
 *   - GTM <noscript>     → iframe fallback in the <body>.
 *
 * Because this lives in the layout (which never re-renders on client-side
 * navigation), the inline script is emitted once in the server HTML and never
 * re-created on the client, so it does NOT trigger React 19's "script tag in a
 * component" warning that a per-page inline script would.
 *
 * Consent flow: default DENIED before any tag fires; GA4 + GTM load on every
 * page in cookieless "ping" mode; ConsentUpdater upgrades to granted when the
 * visitor accepts the cookie banner.
 */
export default function ConsentedAnalytics({
  ga4Id,
  gtmId,
}: {
  ga4Id?: string;
  gtmId?: string;
}) {
  const ga4 = (ga4Id ?? '').trim();
  const gtm = (gtmId ?? '').trim();
  if (!ga4 && !gtm) return null;

  const init = buildAnalyticsBootstrap(ga4, gtm);

  return (
    <>
      {/* GA4 gtag.js + GTM gtm.js LIBRARIES — async src tags. React 19 hoists
          both into <head> on every page (SEO team requires GA4 + GTM in
          <head>). */}
      {ga4 && (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
        />
      )}
      {gtm && (
        <script
          async
          src={`https://www.googletagmanager.com/gtm.js?id=${gtm}`}
        />
      )}

      {/* Consent + dataLayer seed + gtm.start + GA4 config. Rendered from the
          layout, which never re-renders on client navigation, so this inline
          script is emitted once in the server HTML and never re-created on the
          client — no React 19 "script tag in a component" warning. It runs
          during HTML parse, before the async libraries execute, so the consent
          default and gtm.start are queued first. */}
      <script dangerouslySetInnerHTML={{ __html: init }} />

      {/* GTM <noscript> fallback. */}
      {gtm && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="gtm"
          />
        </noscript>
      )}

      <ConsentUpdater />
    </>
  );
}
