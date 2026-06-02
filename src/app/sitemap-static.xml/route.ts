import { buildUrlset, XML_HEADERS, type UrlNode } from '@/lib/sitemap';

// The hand-built static brand pages of this site, listed explicitly.
// (Confirmed set: home, about, support, + the four legal/policy pages.)
const STATIC_PATHS: UrlNode[] = [
  { path: '/' },
  { path: '/about' },
  { path: '/support' },
  { path: '/card-terms' },
  { path: '/e-sign-consent' },
  { path: '/privacy-policy' },
  { path: '/prohibited-activities' },
];

export const revalidate = 600;

export function GET() {
  return new Response(buildUrlset(STATIC_PATHS), { headers: XML_HEADERS });
}
