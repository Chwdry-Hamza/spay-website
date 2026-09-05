import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteShell from '@/components/site/SiteShell';
import { PageHero, PageBody } from '@/components/site/PageBands';
import Breadcrumbs from '@/components/cms/Breadcrumbs';
import TiptapRenderer from '@/components/cms/TiptapRenderer';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import CodeInjection from '@/components/cms/CodeInjection';
import { getPageBySlug, getSeoSetting, structuredDataOf } from '@/lib/cms';
import { getSiteChrome } from '@/lib/site/chrome';
import { buildMetadataFromCMS } from '@/lib/cms-meta';
import { buildFromSchemaField, type Crumb } from '@/lib/structured-data';
import { serializeJsonLd } from '@/lib/sanitize';

/**
 * Slugs this dynamic route must never serve. Most are hand-built static routes
 * — Next's router already prefers those static segments, but we notFound() here
 * defensively so a CMS Page with a colliding slug can never shadow a real page.
 *
 * 'support' is the exception: that page was retired, but the CMS still holds
 * the stub record it was auto-registered with, so without this entry the route
 * would render an empty page instead of a clean 404.
 */
const STATIC_SLUGS = new Set([
  'about',
  'card',
  'how-it-works',
  'contact',
  'card-terms',
  'privacy-policy',
  'support',
  'blog',
  'search',
]);

/** CMS Page slugs are stored with a leading slash (e.g. '/pricing'). */
const toCmsSlug = (slug: string) => `/${slug}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (STATIC_SLUGS.has(slug)) return {};
  const page = await getPageBySlug(toCmsSlug(slug));
  if (!page) return { title: 'Not found', robots: { index: false, follow: true } };
  const site = await getSeoSetting();
  return buildMetadataFromCMS({
    seo: page.seo,
    title: page.title,
    description: page.excerpt,
    path: toCmsSlug(slug),
    site,
    fallbackImage: page.featuredImage?.url,
  });
}

export default async function CmsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (STATIC_SLUGS.has(slug)) notFound();

  const [page, chrome] = await Promise.all([getPageBySlug(toCmsSlug(slug)), getSiteChrome()]);
  if (!page) notFound();

  const { nodes: schemaNodes, customRaw } = buildFromSchemaField(structuredDataOf(page));
  const crumbs: Crumb[] = [
    { name: 'Home', url: '/' },
    { name: page.title, url: toCmsSlug(slug) },
  ];

  return (
    <SiteShell
      chrome={chrome}
      active={`/${slug}/`}
      footerMarginTop="0"
      footerWatermarkLeft="48px"
    >
      <CodeInjection code={page.codeInjection} slots={['body']} />

      {schemaNodes.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(node) }}
        />
      ))}
      {customRaw && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(customRaw) }}
        />
      )}

      <PageHero title={page.title} intro={page.excerpt} above={<Breadcrumbs crumbs={crumbs} />} />

      <PageBody>
        <article>
          <TiptapRenderer content={page.content} className="text-base md:text-lg" />
        </article>
      </PageBody>

      <PerformanceScripts perf={page.performance} />
      <CodeInjection code={page.codeInjection} slots={['footer']} />
    </SiteShell>
  );
}
