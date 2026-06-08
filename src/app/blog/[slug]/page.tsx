import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/cms/Breadcrumbs';
import TiptapRenderer from '@/components/cms/TiptapRenderer';
import PerformanceScripts from '@/components/cms/PerformanceScripts';
import {
  getPostBySlug,
  getSeoSetting,
  categoryDisplayName,
  categorySlugOf,
} from '@/lib/cms';
import { buildMetadataFromCMS } from '@/lib/cms-meta';
import {
  buildArticle,
  buildFromSchemaField,
  type Crumb,
} from '@/lib/structured-data';
import { serializeJsonLd } from '@/lib/sanitize';

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Not found', robots: { index: false, follow: true } };
  const site = await getSeoSetting();
  return buildMetadataFromCMS({
    seo: post.seo,
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    site,
    fallbackImage: post.cover,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const site = await getSeoSetting();
  const url = `/blog/${post.slug}`;
  const catName = categoryDisplayName(post);
  const catSlug = categorySlugOf(post);

  // Breadcrumbs: Home / Blog / [Category] / Title
  const crumbs: Crumb[] = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];
  if (catName && catSlug) {
    crumbs.push({ name: catName, url: `/blog/category/${catSlug}` });
  }
  crumbs.push({ name: post.title, url });

  // Structured data: Article (always) + any FAQ/Service/custom from `schema`.
  const article = buildArticle(post, {
    url,
    orgName: site?.organizationName || site?.siteName,
  });
  const { nodes: schemaNodes, customRaw } = buildFromSchemaField(post.schema);

  return (
    <main style={{ background: '#090e1c', minHeight: '100vh' }}>
      <AppHeader />

      <JsonLd data={article} />
      {schemaNodes.map((node, i) => (
        <JsonLd key={i} data={node} />
      ))}
      {customRaw && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(customRaw) }}
        />
      )}

      <article className="mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-8 lg:px-16">
        <Breadcrumbs crumbs={crumbs} />

        {catName && (
          <span
            className="mt-6 inline-block text-xs font-semibold uppercase tracking-wide"
            style={{ color: '#46F1C5', fontFamily: 'var(--font-geist-mono)' }}
          >
            {catName}
          </span>
        )}

        <h1
          className="mt-3 mb-4 text-3xl font-bold leading-tight text-white md:text-5xl"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          {post.title}
        </h1>

        <div className="mb-8" />

        <TiptapRenderer content={post.content} className="text-base md:text-lg" />

        {post.tags && post.tags.length > 0 && (
          <div
            className="mt-10 flex flex-wrap items-center gap-2 border-t pt-6"
            style={{ borderColor: 'rgba(70,241,197,0.15)' }}
          >
            <span
              className="text-sm"
              style={{ color: '#7A8194', fontFamily: 'var(--font-inter)' }}
            >
              Tags:
            </span>
            {post.tags.map((t) => (
              <Link
                key={t}
                href={`/blog/tag/${encodeURIComponent(t)}`}
                className="rounded-full px-3 py-1 text-xs transition-opacity hover:opacity-80"
                style={{
                  background: '#0e2e2e',
                  border: '1px solid rgba(70,241,197,0.25)',
                  color: '#46F1C5',
                  fontFamily: 'var(--font-geist-mono)',
                }}
              >
                #{t}
              </Link>
            ))}
          </div>
        )}
      </article>

      <Footer />
      <PerformanceScripts perf={post.performance} />
    </main>
  );
}
