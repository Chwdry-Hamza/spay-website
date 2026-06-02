import { headers } from 'next/headers';
import { after } from 'next/server';
import Link from 'next/link';
import AppHeader from '@/components/AppHeader';
import Footer from '@/components/Footer';
import { logMissingUrl } from '@/lib/log-404';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  // Middleware forwards the originally-requested path here so we can log the
  // real dead URL (the not-found component otherwise only sees its own route).
  const h = await headers();
  const originalPath = h.get('x-spay-original-path') || '';

  // Fire-and-forget: record the miss AFTER the response is flushed so logging
  // never delays the 404 render.
  if (originalPath) {
    after(() => logMissingUrl(originalPath));
  }

  return (
    <main
      style={{ background: '#090e1c', minHeight: '100vh' }}
      className="flex flex-col"
    >
      <AppHeader />
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-32 text-center">
        <p
          className="mb-4 text-6xl font-bold md:text-8xl"
          style={{ color: '#46F1C5', fontFamily: 'var(--font-space-grotesk)' }}
        >
          404
        </p>
        <h1
          className="mb-4 text-2xl font-bold text-white md:text-3xl"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          This page took a wrong turn
        </h1>
        <p
          className="mb-8 max-w-md text-base"
          style={{ color: '#A6AABE', fontFamily: 'var(--font-inter)' }}
        >
          The page you’re looking for doesn’t exist or may have moved. Let’s get
          you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#46F1C5', color: '#0a2a23' }}
          >
            Back to home
          </Link>
          <Link
            href="/blog"
            className="rounded-xl px-6 py-3 text-sm font-semibold transition-colors"
            style={{
              border: '1px solid rgba(70,241,197,0.35)',
              color: '#46F1C5',
            }}
          >
            Read the blog
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
