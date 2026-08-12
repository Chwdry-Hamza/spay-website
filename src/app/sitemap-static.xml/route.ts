import { buildUrlset, XML_HEADERS, type UrlNode } from '@/lib/sitemap';

// The hand-built static routes of this site, listed explicitly.
// (home, about, support, the blog index, + the four legal/policy pages.)
// `/blog` lives here because it's a hand-built route, not a CMS page, and is
// excluded from sitemap-pages.xml — so this is its single home in the sitemap.
const STATIC_PATHS: UrlNode[] = [
  { path: '/' },
  { path: '/about' },
  { path: '/support' },
  { path: '/blog' },
  { path: '/card-terms' },
  { path: '/e-sign-consent' },
  { path: '/privacy-policy' },
];

export const revalidate = 600;

export function GET() {
  return new Response(buildUrlset(STATIC_PATHS), { headers: XML_HEADERS });
}
