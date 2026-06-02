/**
 * Next.js instrumentation — runs once when the server boots.
 *
 * Eagerly registers EVERY static brand route in the CMS (from STATIC_ROUTES)
 * so all pages show up in the CMS immediately, without waiting for a visitor
 * to hit each page first. Registration is idempotent on the backend
 * ($setOnInsert), so it never overwrites SEO an editor has already set.
 */
export async function register() {
  // Only run in the Node.js server runtime (not edge/middleware).
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;

  const [{ STATIC_ROUTES }, { ensurePageRegistered }] = await Promise.all([
    import('./lib/static-routes'),
    import('./lib/cms'),
  ]);

  const results = await Promise.allSettled(
    STATIC_ROUTES.map((r) => ensurePageRegistered(r.slug, r.title, r.template)),
  );

  const failed = results.filter((r) => r.status === 'rejected').length;
  if (failed > 0) {
    // ensurePageRegistered already swallows its own errors, so this is rare —
    // most likely the CMS API was unreachable at boot. Pages will still
    // self-register on first visit as a fallback.
    console.warn(
      `[spay] page auto-registration: ${STATIC_ROUTES.length - failed}/${STATIC_ROUTES.length} ok`,
    );
  }
}
