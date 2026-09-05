/**
 * JSON-LD (schema.org) builders for the Spay website.
 *
 * Each builder returns a plain object you render via:
 *   <script type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
 *
 * Article / FAQ / Service mirror the CMS `schema` field on Pages & Posts;
 * Organization mirrors the `organization` setting; Breadcrumb is built from
 * the page's own trail. `customJsonLd` (raw string) is rendered verbatim by
 * the page, not through these helpers.
 */
import {
  SITE_URL,
  type CmsFaqItem,
  type CmsPost,
  type CmsStructuredData,
  type OrganizationSetting,
} from './cms';
import { resolveAuthor } from './author';

type Json = Record<string, unknown>;

/** Absolute URL from a path or already-absolute URL. */
export function abs(pathOrUrl: string): string {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

// ─── Organization ──────────────────────────────────────────────────

/**
 * `inLanguage` says which language the TEXT in this node is written in.
 *
 * Without it a crawler seeing the same Organization node on nine URLs has no
 * way to tell that the descriptions differ on purpose. It is a BCP-47 tag —
 * the same value as `<html lang>` — not the Open Graph underscore form.
 */
export function buildOrganization(
  org: OrganizationSetting | null,
  inLanguage?: string,
): Json {
  const o = org ?? {};
  const node: Json = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: o.name || 'Spay',
    url: o.url || SITE_URL,
    ...(inLanguage ? { inLanguage } : {}),
  };
  if (o.legalName) node.legalName = o.legalName;
  if (o.logo) node.logo = abs(o.logo);
  if (o.description) node.description = o.description;
  if (o.sameAs && o.sameAs.length) {
    node.sameAs = o.sameAs.filter(Boolean);
  }
  if (o.contactPoint && (o.contactPoint.telephone || o.contactPoint.email)) {
    node.contactPoint = {
      '@type': 'ContactPoint',
      contactType: o.contactPoint.contactType || 'customer service',
      ...(o.contactPoint.telephone
        ? { telephone: o.contactPoint.telephone }
        : {}),
      ...(o.contactPoint.email ? { email: o.contactPoint.email } : {}),
    };
  }
  return node;
}

// ─── Article ───────────────────────────────────────────────────────

export function buildArticle(
  post: CmsPost,
  opts: { url: string; orgName?: string },
): Json {
  const node: Json = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.seo?.title || post.title,
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(opts.url) },
  };
  const description = post.seo?.description || post.excerpt;
  if (description) node.description = description;
  if (post.cover) node.image = [abs(post.cover)];
  if (post.publishedAt) node.datePublished = post.publishedAt;
  if (post.updatedAt) node.dateModified = post.updatedAt;
  // Never emit the raw `authorName` — the CMS stores the creating admin's login
  // email there. resolveAuthor swaps that for the editorial byline, which is the
  // publication rather than a person, so the node type follows suit.
  const author = resolveAuthor(post.authorName);
  node.author = {
    '@type': author.isPerson ? 'Person' : 'Organization',
    name: author.name,
  };
  if (opts.orgName) {
    node.publisher = { '@type': 'Organization', name: opts.orgName };
  }
  return node;
}

// ─── FAQ ───────────────────────────────────────────────────────────

/** FAQPage from an explicit list — posts merge several sources, see lib/post-faq. */
export function buildFaqFromItems(items: CmsFaqItem[]): Json | null {
  const faq = items.filter((f) => f.q && f.a);
  if (!faq.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function buildFaq(schema: CmsStructuredData | undefined): Json | null {
  return buildFaqFromItems(schema?.faq ?? []);
}

// ─── Service ───────────────────────────────────────────────────────

export function buildService(
  schema: CmsStructuredData | undefined,
): Json | null {
  const s = schema?.service;
  if (!s || !s.name) return null;
  const node: Json = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
  };
  if (s.description) node.description = s.description;
  if (s.serviceType) node.serviceType = s.serviceType;
  if (s.areaServed) node.areaServed = s.areaServed;
  if (s.priceRange) {
    node.offers = { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', price: s.priceRange } };
  }
  return node;
}

// ─── Breadcrumbs ───────────────────────────────────────────────────

export type Crumb = { name: string; url: string };

export function buildBreadcrumbList(crumbs: Crumb[]): Json | null {
  if (!crumbs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.url),
    })),
  };
}

/**
 * Build the structured-data nodes declared by a Page/Post `schema` field.
 * Returns an array of JSON-LD objects (Article handled separately by the
 * caller since it needs post-specific data). `customJsonLd` is returned as a
 * raw string the caller can inject as-is.
 */
export function buildFromSchemaField(
  schema: CmsStructuredData | undefined,
): { nodes: Json[]; customRaw: string | null } {
  const nodes: Json[] = [];
  let customRaw: string | null = null;
  if (!schema) return { nodes, customRaw };

  if (schema.type === 'faq') {
    const f = buildFaq(schema);
    if (f) nodes.push(f);
  } else if (schema.type === 'service') {
    const s = buildService(schema);
    if (s) nodes.push(s);
  } else if (schema.type === 'custom') {
    customRaw = schema.customJsonLd?.trim() || null;
  }
  return { nodes, customRaw };
}
