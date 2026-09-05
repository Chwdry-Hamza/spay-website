/**
 * The closing call-to-action panel below the article body, and the compact
 * variant under the table-of-contents rail on desktop.
 *
 * Fixed copy on every post — it sits above the tags on all of them, so there
 * is nothing per-post to configure. Both app-store links come from the same
 * constants the rest of the site uses.
 */
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/appStore';
import GetAppLink from '@/components/GetAppLink';
import type { BlogStrings } from '@/i18n/blog';

/**
 * The site's button treatment — same teal, white ink, pill corners and
 * hover as the "GET SPAY APP" button in AppHeader, and as the buttons on
 * search, 404, pagination and the cookie banner. Keep these in step with
 * components/AppHeader.tsx if the brand button ever changes.
 */
const BTN_BG = '#118EA3';
const BTN_INK = '#ffffff';

// Pill corners, matching every other button in the design — the rest of the
// site is `border-radius: 999px`, so a rounded rectangle read as foreign here.
const BTN =
  'inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-[0.8px] transition-all hover:opacity-90';

export function PostCta({ strings }: { strings: BlogStrings['cta'] }) {
  return (
    <section
      data-reveal="up"
      className="mt-12 rounded-[20px] p-8 text-center"
      style={{
        background: '#f3fbfa',
        border: '1px solid #cfeae7',
              }}
    >
      <h2
        className="mb-3 text-[26px] font-bold text-[#0b1620]"
       
      >
        {strings.title}
      </h2>
      <p className="mx-auto mb-5 max-w-[52ch] leading-relaxed" style={{ color: '#4a5560' }}>
        {strings.body}
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={BTN}
          style={{ background: BTN_BG, color: BTN_INK }}
        >
          {strings.appStore}
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={BTN}
          style={{ color: BTN_BG, border: `1px solid ${BTN_BG}` }}
        >
          {strings.playStore}
        </a>
      </div>
    </section>
  );
}

export function RailCta({ strings }: { strings: BlogStrings['cta'] }) {
  return (
    <div
      className="mt-6 rounded-[14px] p-[18px]"
      style={{
        background: '#f3fbfa',
        border: '1px solid #cfeae7',
              }}
    >
      <p className="mb-3 text-[13.5px] leading-normal text-[#0b1620]">
        {strings.railBody}
      </p>
      <GetAppLink
        className={`${BTN} w-full px-3.5`}
        style={{ background: BTN_BG, color: BTN_INK }}
      >
        {strings.railButton}
      </GetAppLink>
    </div>
  );
}
