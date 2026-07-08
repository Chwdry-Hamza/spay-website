/**
 * Cookie-consent storage keys — plain module (NO 'use client') so these
 * constants can be imported from BOTH server and client code.
 *
 * Importing a value from a 'use client' module into a Server Component does
 * not give you the value — it gives a client-reference stub. Interpolating
 * that stub into a server-rendered inline script produces broken JS, which is
 * exactly what silently killed the GA4 bootstrap. Keep these here.
 */
export const COOKIE_CONSENT_STORAGE_KEY = 'spay-cookie-consent';
export const COOKIE_CONSENT_COOKIE_NAME = 'spay_cookie_consent';
export const COOKIE_CONSENT_EVENT = 'spay-consent-change';
