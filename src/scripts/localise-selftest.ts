/**
 * Offline check that the website's substitution matches the CMS.
 *
 *   npm run i18n:selftest
 */
import { segmentHash, localiseSections } from '../lib/site/localiseSections';
import { localiseHref, localiseHrefs } from '../lib/site/localiseHrefs';
import { RTL_ARTWORK, localiseArtwork } from '../lib/site/rtlArtwork';
import { localisePrices, priceFor } from '../lib/site/localisePrices';
import { buildLocaleMetadata } from '../lib/site/localeMeta';
import { existsSync } from 'node:fs';

let failed = 0;
const check = (name: string, ok: boolean, detail = '') => {
  console.log(ok ? `  \x1b[32m✓\x1b[0m ${name}` : `  \x1b[31m✗ ${name}\x1b[0m${detail ? ' — ' + detail : ''}`);
  if (!ok) failed++;
};

// The hash MUST match the backend's. These are the values the CMS produced for
// the card page, read straight out of its API response.
check('hash matches the CMS for a known string',
  segmentHash('Three virtual Visa cards, issued in minutes') === 'eb519b537ca3599d',
  segmentHash('Three virtual Visa cards, issued in minutes'));

const EN = {
  hero: {
    title: 'Three virtual Visa cards, issued in minutes',
    image: { src: '/site/card-platinum-sm.png', alt: 'SPay Visa Platinum virtual card' },
    cta: { label: 'Get Platinum', href: 'https://apps.apple.com/x' },
  },
  tiers: [{ id: 'platinum', price: '$9.99', features: ['Higher spending limits'] }],
};

const map = {
  [segmentHash('Three virtual Visa cards, issued in minutes')]: 'اردو عنوان',
  [segmentHash('Get Platinum')]: 'اردو بٹن',
  [segmentHash('Higher spending limits')]: 'اردو خصوصیت',
};

const out = localiseSections(EN, map) as typeof EN;
check('replaces a heading', out.hero.title === 'اردو عنوان');
check('replaces a nested label', out.hero.cta.label === 'اردو بٹن');
check('replaces inside an array', out.tiers[0].features[0] === 'اردو خصوصیت');
check('leaves an href alone', out.hero.cta.href === 'https://apps.apple.com/x');
check('leaves an image path alone', out.hero.image.src === '/site/card-platinum-sm.png');
check('leaves an anchor id alone', out.tiers[0].id === 'platinum');
check('leaves a price alone', out.tiers[0].price === '$9.99');
check('leaves an untranslated string alone',
  out.hero.image.alt === 'SPay Visa Platinum virtual card');
check('does NOT mutate the source', EN.hero.title === 'Three virtual Visa cards, issued in minutes');
check('returns the input untouched when there is nothing to apply',
  localiseSections(EN, {}) === EN && localiseSections(EN, undefined) === EN);
check('shares branches it did not change', (localiseSections(EN, map) as typeof EN).hero.image === EN.hero.image);


// ── Links keep the reader in their language ───────────────────────────
console.log('\n  Links');
const L = (h: string) => localiseHref(h, 'ur');

check('prefixes a translated page', L('/card/') === '/ur/card/', L('/card/'));
check('adds the trailing slash the routes use', L('/card') === '/ur/card/', L('/card'));
check('keeps an anchor on the prefixed path',
  L('/about/#security') === '/ur/about/#security', L('/about/#security'));
check('prefixes the homepage anchor links in the footer',
  L('/#wallet') === '/ur/#wallet', L('/#wallet'));
check('prefixes the homepage itself', L('/') === '/ur/', L('/'));
check('prefixes the blog index', L('/blog/') === '/ur/blog/', L('/blog/'));
check('prefixes a blog post', L('/blog/crypto-wallet-with-card/') === '/ur/blog/crypto-wallet-with-card/');
check('prefixes a category listing',
  L('/blog/category/crypto-wallet/') === '/ur/blog/category/crypto-wallet/');

check('leaves a page this language does not publish',
  L('/privacy-policy/') === '/privacy-policy/', L('/privacy-policy/'));
check('leaves the card terms alone too', L('/card-terms/') === '/card-terms/');
check('leaves a bare anchor alone', L('#channels') === '#channels');
check('leaves an external link alone',
  L('https://x.com/Spay_card') === 'https://x.com/Spay_card');
check('leaves a protocol-relative link alone', L('//cdn.example.com/x') === '//cdn.example.com/x');
check('leaves mailto alone', L('mailto:support@spay.finance') === 'mailto:support@spay.finance');
check('leaves tel alone', L('tel:+971559476972') === 'tel:+971559476972');
check('leaves an empty href alone', L('') === '');
check('English is a no-op', localiseHref('/card/', 'en') === '/card/');
check('never double-prefixes', L(L('/card/')) === '/ur/card/', L(L('/card/')));

const CHROME = {
  header: { logo: { alt: 'SPay' }, nav: [{ label: 'Card', href: '/card/' }], cta: { label: 'Get', href: 'https://apps.apple.com/x' } },
  footer: { columns: [{ links: [{ label: 'Wallet', href: '/#wallet' }, { label: 'Privacy', href: '/privacy-policy/' }] }] },
};
const chrome = localiseHrefs(CHROME, 'ur') as typeof CHROME;
check('walks nested arrays of links', chrome.footer.columns[0].links[0].href === '/ur/#wallet');
check('leaves the untranslated page in the same column',
  chrome.footer.columns[0].links[1].href === '/privacy-policy/');
check('walks the nav', chrome.header.nav[0].href === '/ur/card/');
check('leaves the store link', chrome.header.cta.href === 'https://apps.apple.com/x');
check('does NOT rewrite a label that looks like a path',
  (localiseHrefs({ label: '/card/' }, 'ur') as any).label === '/card/');
check('does not mutate the source', CHROME.header.nav[0].href === '/card/');


// ── Directional artwork ───────────────────────────────────────────────
console.log('\n  Artwork');

// Both halves of every pair must be on disk. A rename that misses one would
// otherwise show as a broken image on two languages and nowhere else.
for (const [ltr, rtl] of Object.entries(RTL_ARTWORK)) {
  check(`${ltr} exists`, existsSync(`public${ltr}`));
  check(`${rtl} exists`, existsSync(`public${rtl}`));
}

const HERO = { hero: { image: { src: '/site/spay-hero-card.png', alt: 'SPay Visa card' } },
               logo: { src: '/site/spay-logo.svg', alt: 'SPay' } };

const rtlHero = localiseArtwork(HERO, 'ur') as typeof HERO;
check('swaps the hero for its mirrored twin',
  rtlHero.hero.image.src === '/site/spay-hero-card-rtl.png', rtlHero.hero.image.src);
check('leaves artwork that has no twin', rtlHero.logo.src === '/site/spay-logo.svg');
check('Arabic gets it too',
  (localiseArtwork(HERO, 'ar') as typeof HERO).hero.image.src === '/site/spay-hero-card-rtl.png');
check('English is untouched', localiseArtwork(HERO, 'en') === HERO);
check('a left-to-right language is untouched', localiseArtwork(HERO, 'tr') === HERO);
check('does not mutate the source', HERO.hero.image.src === '/site/spay-hero-card.png');
check('never swaps twice',
  (localiseArtwork(rtlHero, 'ur') as typeof HERO).hero.image.src === '/site/spay-hero-card-rtl.png');
check('does NOT rewrite a non-src key that holds the same path',
  (localiseArtwork({ note: '/site/spay-hero-card.png' }, 'ur') as any).note
    === '/site/spay-hero-card.png');


// ── Prices ────────────────────────────────────────────────────────────
console.log('\n  Prices');

check('English keeps the symbol first', priceFor('$9.99', 'en') === '$9.99');
check('Urdu keeps the English form', priceFor('$9.99', 'ur') === '$9.99');
check('German uses a comma and trails the symbol',
  priceFor('$9.99', 'de') === '9,99 $', priceFor('$9.99', 'de'));
check('French too', priceFor('$49.99', 'fr') === '49,99 $');
check('Arabic trails the symbol but keeps the dot',
  priceFor('$9.99', 'ar') === '9.99 $', priceFor('$9.99', 'ar'));
check('a whole number gains no decimals', priceFor('$99', 'de') === '99 $');
check('Arabic keeps Western digits', /^[0-9. $]+$/.test(priceFor('$19.99', 'ar')));
check('thousands separators survive', priceFor('$1,299.50', 'de') === '1,299,50 $');
check('anything that is not a plain amount is left alone',
  priceFor('Free', 'de') === 'Free' && priceFor('from $9', 'de') === 'from $9');
check('never reformats twice',
  priceFor(priceFor('$9.99', 'de'), 'de') === '9,99 $');

const TIERS = { tiers: [{ price: '$9.99', priceNote: 'One-time fee', name: 'Platinum' }] };
const de = localisePrices(TIERS, 'de') as typeof TIERS;
check('walks into an array of tiers', de.tiers[0].price === '9,99 $');
check('leaves the note beside it alone', de.tiers[0].priceNote === 'One-time fee');
check('does not mutate the source', TIERS.tiers[0].price === '$9.99');
check('English is a no-op', localisePrices(TIERS, 'en') === TIERS);
check('does NOT rewrite a non-price key holding an amount',
  (localisePrices({ label: '$9.99' }, 'de') as any).label === '$9.99');


// ── A page's own metadata is translated too ───────────────────────────
console.log('\n  Metadata');

// The body lives in `sections`, but the tab title and the search snippet live
// in `title` / `excerpt` / `seo` — separate fields on the document. They were
// being translated and then never read, so a CMS SEO title showed in English
// on all eight translated pages.
const META_PAGE = {
  _id: '1', slug: '/card', status: 'published' as const,
  title: 'Card',
  excerpt: 'Three cards, minutes apart',
  seo: { title: 'Virtual Cards', description: 'Spend stablecoins anywhere' },
  translation: {
    [segmentHash('Virtual Cards')]: 'ورچوئل کارڈز',
    [segmentHash('Spend stablecoins anywhere')]: 'کہیں بھی خرچ کریں',
  },
};

const meta = buildLocaleMetadata({
  locale: 'ur', path: '/card/',
  title: 'کارڈ — SPay', description: 'ہاتھ سے لکھی تفصیل',
  page: {
    ...META_PAGE,
    seo: localiseSections(META_PAGE.seo, META_PAGE.translation),
  } as any,
});
check('the CMS SEO title arrives translated',
  (meta.title as any)?.absolute === 'ورچوئل کارڈز', JSON.stringify(meta.title));
check('so does the description', meta.description === 'کہیں بھی خرچ کریں', String(meta.description));
check('and the social card follows it',
  (meta.openGraph as any)?.title === 'ورچوئل کارڈز');

// Precedence for the description: the CMS's SEO description, then the page's
// excerpt, then the hand-written one. The excerpt is the editor's own summary
// and is translated like any other field, so it outranks a fallback written
// before the CMS drove these pages.
const excerpted = buildLocaleMetadata({
  locale: 'ur', path: '/card/',
  title: 'کارڈ — SPay', description: 'ہاتھ سے لکھی تفصیل',
  page: {
    ...META_PAGE,
    seo: {},
    excerpt: localiseSections('Three cards, minutes apart', {
      [segmentHash('Three cards, minutes apart')]: 'تین کارڈ، منٹوں کے فرق سے',
    }),
  } as any,
});
check('an empty CMS SEO falls back to the translated excerpt',
  excerpted.description === 'تین کارڈ، منٹوں کے فرق سے', String(excerpted.description));
check('an empty CMS SEO still uses the hand-written title',
  (excerpted.title as any)?.absolute === 'کارڈ — SPay');

const blank = buildLocaleMetadata({
  locale: 'ur', path: '/card/',
  title: 'کارڈ — SPay', description: 'ہاتھ سے لکھی تفصیل',
  page: { ...META_PAGE, seo: {}, excerpt: '' } as any,
});
check('with nothing in the CMS, the hand-written pair is used',
  (blank.title as any)?.absolute === 'کارڈ — SPay'
    && blank.description === 'ہاتھ سے لکھی تفصیل');

const none = buildLocaleMetadata({
  locale: 'ur', path: '/card/', title: 'کارڈ — SPay', description: 'ہاتھ سے لکھی تفصیل',
});
check('an unreachable CMS still produces metadata',
  (none.title as any)?.absolute === 'کارڈ — SPay' && none.description === 'ہاتھ سے لکھی تفصیل');

console.log(failed === 0 ? '\n  \x1b[32mAll checks passed.\x1b[0m\n' : `\n  \x1b[31m${failed} failed.\x1b[0m\n`);
process.exit(failed === 0 ? 0 : 1);
