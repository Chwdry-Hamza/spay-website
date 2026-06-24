'use client';

import * as React from 'react';
import type { CmsCodeInjection } from '@/lib/cms';

/**
 * Renders the per-page / per-post custom code injection (header / body / footer)
 * authored in the CMS — raw, admin-authored HTML/JS dropped in verbatim
 * (tracking pixels, chat widgets, verification meta, A/B-test tags, etc.).
 *
 * Slot placement:
 *   header → relocated into <head> on the client (see HeadInjection)
 *   body   → rendered at the top of the page <body>
 *   footer → rendered at the end of the page <body>
 *
 * Why <script> needs special handling: tags written through innerHTML /
 * dangerouslySetInnerHTML are parsed but NEVER executed by the browser. So we
 * always re-create <script> nodes into fresh elements, which DO execute (covers
 * both inline and `src=` scripts).
 *
 * The HTML is intentionally NOT sanitized: only authenticated CMS users author
 * it, and stripping <script> would defeat the entire feature.
 */

/** Re-create every <script> under `root` so the browser actually runs it. */
function activateScripts(root: HTMLElement): void {
  const scripts = Array.from(root.querySelectorAll('script'));
  for (const old of scripts) {
    const fresh = document.createElement('script');
    for (const attr of Array.from(old.attributes)) {
      fresh.setAttribute(attr.name, attr.value);
    }
    fresh.text = old.textContent ?? '';
    old.replaceWith(fresh);
  }
}

/** body / footer: render in place inside the <body>. */
function RawHtmlBlock({ html }: { html: string }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) activateScripts(ref.current);
  }, []);

  if (!html?.trim()) return null;

  return (
    <div
      ref={ref}
      // The markup is server-rendered as-is; React never diffs its contents.
      suppressHydrationWarning
      style={{ display: 'contents' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/**
 * header: relocate the snippet into <head>.
 *
 * Next's App Router (and React) own the server-rendered <head>, so a raw inline
 * blob — especially <script> — can't be placed into the SSR head. We parse the
 * blob on mount and append its nodes to document.head: <meta>/<link> land in
 * <head>, and <script> tags are re-created so they execute. Tagged with
 * data-spay-ci and removed on unmount so client-side navigation between pages
 * never accumulates duplicates.
 *
 * Note: this runs after hydration, so the tags are present in the live DOM
 * <head> but not in the very first SSR HTML payload. That's fine for analytics,
 * pixels, chat, and JS-rendering crawlers (Googlebot/Bingbot render the page).
 * For verification <meta> that must be in the raw HTML <head>, prefer the CMS's
 * dedicated SEO/verification fields.
 */
function HeadInjection({ html }: { html: string }) {
  React.useEffect(() => {
    if (!html?.trim()) return;

    const tpl = document.createElement('template');
    tpl.innerHTML = html;

    const added: Node[] = [];
    tpl.content.childNodes.forEach((node) => {
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      const el = node as HTMLElement;

      let toAdd: HTMLElement;
      if (el.tagName === 'SCRIPT') {
        // Re-create so the browser executes it (cloned <script> does not run).
        const fresh = document.createElement('script');
        for (const attr of Array.from(el.attributes)) {
          fresh.setAttribute(attr.name, attr.value);
        }
        fresh.text = el.textContent ?? '';
        toAdd = fresh;
      } else {
        toAdd = el.cloneNode(true) as HTMLElement;
      }

      toAdd.setAttribute('data-spay-ci', 'head');
      document.head.appendChild(toAdd);
      added.push(toAdd);
    });

    return () => {
      for (const n of added) n.parentNode?.removeChild(n);
    };
  }, [html]);

  return null;
}

type Slot = 'header' | 'body' | 'footer';

/**
 * Render the requested slots from a page/post `codeInjection` object.
 *   - mount `slots={['header', 'body']}` near the top of the page
 *   - mount `slots={['footer']}` at the very end of the page
 */
export default function CodeInjection({
  code,
  slots,
}: {
  code?: CmsCodeInjection | null;
  slots: Slot[];
}) {
  if (!code) return null;
  return (
    <>
      {slots.includes('header') && <HeadInjection html={code.header ?? ''} />}
      {slots.includes('body') && <RawHtmlBlock html={code.body ?? ''} />}
      {slots.includes('footer') && <RawHtmlBlock html={code.footer ?? ''} />}
    </>
  );
}
