/**
 * Single source of truth for this site's hand-built static brand pages.
 *
 * Used to register every page in the CMS up front (see src/instrumentation.ts)
 * so they all appear in the CMS for SEO editing immediately — without waiting
 * for a visitor to hit each one. The page BODIES live in React here; the CMS
 * records exist only to manage each page's SEO.
 *
 * Add a new static route here and it will auto-register on the next boot.
 */
export type StaticRoute = {
  /** CMS page slug — leading-slash path, matches the website route. */
  slug: string;
  /** Default title used when the CMS record is first created. */
  title: string;
  /** CMS template label. */
  template: string;
};

export const STATIC_ROUTES: StaticRoute[] = [
  { slug: '/', title: 'SPay - Your financial companion', template: 'Landing' },
  { slug: '/about', title: 'About', template: 'Content' },
  { slug: '/support', title: 'Support', template: 'Content' },
  { slug: '/card-terms', title: 'Card Terms', template: 'Legal' },
  { slug: '/e-sign-consent', title: 'E-Sign Consent', template: 'Legal' },
  { slug: '/privacy-policy', title: 'Privacy Policy', template: 'Legal' },
  { slug: '/prohibited-activities', title: 'Prohibited Activities', template: 'Legal' },
];
