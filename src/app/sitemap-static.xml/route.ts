import { buildUrlset, XML_HEADERS, type UrlNode } from '@/lib/sitemap';

// The hand-built static routes of this site, listed explicitly: home, the four
// brand pages, the blog index and the two legal pages.
// `/blog` lives here because it's a hand-built route, not a CMS page, and is
// excluded from sitemap-pages.xml — so this is its single home in the sitemap.
//
// Translated routes are listed too, each as its own URL — a language version is
// a separate page to a crawler. `/tr` is the Turkish homepage; add each new
// translation here as it ships (see src/i18n/locales.ts).
const STATIC_PATHS: UrlNode[] = [
  { path: '/' },
  { path: '/about' },
  { path: '/card' },
  { path: '/how-it-works' },
  { path: '/contact' },
  { path: '/blog' },
  { path: '/card-terms' },
  { path: '/privacy-policy' },
  { path: '/tr' },
  { path: '/tr/about' },
  { path: '/tr/card' },
  { path: '/tr/how-it-works' },
  { path: '/tr/contact' },
  { path: '/tr/blog' },
  { path: '/de' },
  { path: '/de/about' },
  { path: '/de/card' },
  { path: '/de/how-it-works' },
  { path: '/de/contact' },
  { path: '/de/blog' },
  { path: '/es' },
  { path: '/es/about' },
  { path: '/es/card' },
  { path: '/es/how-it-works' },
  { path: '/es/contact' },
  { path: '/es/blog' },
  { path: '/pl' },
  { path: '/pl/about' },
  { path: '/pl/card' },
  { path: '/pl/how-it-works' },
  { path: '/pl/contact' },
  { path: '/pl/blog' },
  { path: '/pt' },
  { path: '/pt/about' },
  { path: '/pt/card' },
  { path: '/pt/how-it-works' },
  { path: '/pt/contact' },
  { path: '/pt/blog' },
  { path: '/fr' },
  { path: '/fr/about' },
  { path: '/fr/card' },
  { path: '/fr/how-it-works' },
  { path: '/fr/contact' },
  { path: '/fr/blog' },
  { path: '/ar' },
  { path: '/ar/about' },
  { path: '/ar/card' },
  { path: '/ar/how-it-works' },
  { path: '/ar/contact' },
  { path: '/ar/blog' },
  { path: '/ur' },
  { path: '/ur/about' },
  { path: '/ur/card' },
  { path: '/ur/how-it-works' },
  { path: '/ur/contact' },
  { path: '/ur/blog' },
];

export const revalidate = 600;

export function GET() {
  return new Response(buildUrlset(STATIC_PATHS), { headers: XML_HEADERS });
}
