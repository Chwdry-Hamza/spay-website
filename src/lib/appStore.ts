/**
 * The SPay app store links, and which one a given device should get.
 *
 * Every "get the app" button on the site resolves through here, so the two
 * URLs are defined once. The homepage's hero / join-us / bottom-nav buttons
 * keep their CMS-editable `ctaUrl` as the Apple side — see GetAppLink.
 */

export const APP_STORE_URL = 'https://apps.apple.com/us/app/spay/id6762744741';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.spay.wallet&hl=en';

export type Platform = 'apple' | 'android';

/**
 * Which store a device should be sent to.
 *
 *   iPhone, iPad, Mac  → Apple
 *   everything else    → Google Play
 *
 * Apple hardware goes to the App Store whether it is a phone or a desktop, so
 * the whole decision comes from the User-Agent and nothing else is needed.
 * That is also why an iPad needs no special handling: since iPadOS 13 Safari
 * reports a desktop `Macintosh` UA, and Macs and iPads both belong on Apple.
 *
 * Anything unrecognised falls to Apple, matching the SSR default.
 */
export function platformForDevice(ua: string | undefined | null): Platform {
  const s = (ua ?? '').toLowerCase();
  if (!s) return 'apple';

  // Android UAs also contain "linux", so this has to come first.
  if (s.includes('android')) return 'android';
  if (/iphone|ipod|ipad|macintosh|mac os/.test(s)) return 'apple';
  if (/windows|cros|linux/.test(s)) return 'android';
  return 'apple';
}

/** The store URL for a device, using the shared defaults. */
export function storeUrlForDevice(ua: string | undefined | null): string {
  return platformForDevice(ua) === 'android' ? PLAY_STORE_URL : APP_STORE_URL;
}
