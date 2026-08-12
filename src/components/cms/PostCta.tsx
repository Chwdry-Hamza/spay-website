/**
 * The closing call-to-action panel below the article body, and the compact
 * variant under the table-of-contents rail on desktop.
 *
 * Fixed copy on every post — it sits above the tags on all of them, so there
 * is nothing per-post to configure. Both app-store links come from the same
 * constants the rest of the site uses.
 */
const APP_STORE_URL = 'https://apps.apple.com/app/sicash';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.sicash';

/**
 * The site's button treatment — same teal, dark ink, rounded rectangle and
 * hover as the "GET SPAY APP" button in AppHeader, and as the buttons on
 * search, 404, pagination and the cookie banner. Keep these in step with
 * components/AppHeader.tsx if the brand button ever changes.
 */
const BTN_BG = '#04babf';
const BTN_INK = '#0a2a23';

const BTN =
  'inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-semibold uppercase transition-all hover:opacity-90';

export function PostCta() {
  return (
    <section
      className="mt-12 rounded-[20px] p-8 text-center"
      style={{
        background:
          'radial-gradient(140% 120% at 50% 0%, rgba(70,241,197,0.18), rgba(70,241,197,0.02) 62%), #0e2e2e',
        border: '1px solid rgba(70,241,197,0.28)',
        fontFamily: 'var(--font-inter)',
      }}
    >
      <h2
        className="mb-3 text-[26px] font-bold text-white"
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        One app, all your money
      </h2>
      <p className="mx-auto mb-5 max-w-[52ch] leading-relaxed" style={{ color: '#A6AABE' }}>
        Holding, sending, and spending crypto used to mean three apps and constant
        shuffling between them. SPay puts all three in one place, with your keys,
        your control, and one tap at the till.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={BTN}
          style={{ background: BTN_BG, color: BTN_INK }}
        >
          Download on the App Store
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={BTN}
          style={{ color: BTN_BG, border: `1px solid ${BTN_BG}` }}
        >
          Get it on Google Play
        </a>
      </div>
    </section>
  );
}

export function RailCta() {
  return (
    <div
      className="mt-6 rounded-[14px] p-[18px]"
      style={{
        background:
          'linear-gradient(160deg, rgba(70,241,197,0.14), rgba(70,241,197,0.03))',
        border: '1px solid rgba(70,241,197,0.28)',
        fontFamily: 'var(--font-inter)',
      }}
    >
      <p className="mb-3 text-[13.5px] leading-normal text-white">
        Hold, send and spend crypto from one self-custody app.
      </p>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${BTN} w-full px-3.5`}
        style={{ background: BTN_BG, color: BTN_INK }}
      >
        Get the app
      </a>
    </div>
  );
}
