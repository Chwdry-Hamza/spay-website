import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/cms/Breadcrumbs';
import TiptapRenderer from '@/components/cms/TiptapRenderer';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import { getPageBySlug, getSeoSetting } from '@/lib/cms';
import { buildMetadataFromCMS } from '@/lib/cms-meta';
import { buildFromSchemaField, type Crumb } from '@/lib/structured-data';

/**
 * Slugs that already exist as hand-built static routes in this app. Next's
 * router already prefers those static segments over this dynamic one, but we
 * also notFound() here defensively so a CMS Page with a colliding slug can
 * never shadow a real static page.
 */
const STATIC_SLUGS = new Set([
  'about',
  'card-terms',
  'e-sign-consent',
  'privacy-policy',
  'prohibited-activities',
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

  const page = await getPageBySlug(toCmsSlug(slug));
  if (!page) notFound();

  const { nodes: schemaNodes, customRaw } = buildFromSchemaField(page.schema);
  const crumbs: Crumb[] = [
    { name: 'Home', url: '/' },
    { name: page.title, url: toCmsSlug(slug) },
  ];

  return (
    <main style={{ background: '#090e1c', minHeight: '100vh' }}>
      <AppHeader />

      {schemaNodes.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
      {customRaw && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: customRaw }}
        />
      )}

      <article className="mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-8 lg:px-16">
        <Breadcrumbs crumbs={crumbs} />
        <h1
          className="mt-6 mb-8 text-3xl font-bold leading-tight text-white md:text-5xl"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {page.title}
        </h1>
        <TiptapRenderer content={page.content} className="text-base md:text-lg" />
      </article>

      <Footer />
      <PerformanceScripts perf={page.performance} />
    </main>
  );
}
