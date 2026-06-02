/**
 * Fire-and-forget 404 logger. Posts the missing URL to the CMS so editors can
 * see broken links / dead inbound URLs and create redirects. Never throws and
 * never blocks rendering — failures are swallowed.
 *
 * Called from the custom 404 page (server side), which reads the original path
 * from the `x-spay-original-path` header set by middleware.
 */
import { CMS_API_URL } from './cms';

export async function logMissingUrl(url: string): Promise<void> {
  if (!url) return;
  try {
    await fetch(`${CMS_API_URL}/api/logs-404/record`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
      cache: 'no-store',
      // Don't let a slow/unreachable CMS hold up the 404 response.
      signal: AbortSignal.timeout(2000),
    });
  } catch {
    // Intentionally ignored — logging a 404 must never break the 404 page.
  }
}
