/**
 * Deprecated shim. GA4 + GTM are now rendered SITE-WIDE from the root layout
 * (see ConsentedAnalytics in app/layout.tsx) so both tags land in <head> on
 * every page. This component is kept as a no-op so the existing per-page mounts
 * (`<PerformanceScripts perf={...} />`) keep compiling without edits.
 *
 * Note: the previous per-page `performance.skipAnalytics` override no longer
 * applies — analytics is intentionally global now, per the requirement that
 * GA4/GTM load in <head> on every page.
 */
import type { CmsPerformance } from '@/lib/cms';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function PerformanceScripts(props: { perf?: CmsPerformance }) {
  return null;
}
