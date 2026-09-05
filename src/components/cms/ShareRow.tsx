'use client';

/**
 * Share controls for the post byline: copy-link, X, LinkedIn.
 *
 * `url` is the absolute canonical URL passed in from the server, not
 * `location.href` — that keeps the share targets free of any query string or
 * hash the visitor arrived with (utm tags, TOC anchors), which is what should
 * be shared and what the canonical points at.
 */
import { useState } from 'react';
import type { BlogStrings } from '@/i18n/blog';

const BTN =
  'grid size-9 place-items-center rounded-[9px] transition-colors';
const BTN_STYLE = {
  border: '1px solid rgba(255,255,255,0.09)',
  background: '#f3fbfa',
} as const;

function CopyIcon({ done }: { done: boolean }) {
  return done ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export default function ShareRow({
  url,
  title,
  strings,
}: {
  url: string;
  title: string;
  /** Blog furniture for the page's language. */
  strings: BlogStrings['post'];
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard blocked (insecure context / denied permission) — the X and
      // LinkedIn links still work, so there is nothing useful to report here.
    }
  };

  const x = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const li = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={copy}
        className={`${BTN} cursor-pointer hover:text-[#118EA3]`}
        style={{ ...BTN_STYLE, color: copied ? '#118EA3' : '#4a5560' }}
        aria-label={copied ? strings.copied : strings.copyLink}
        title={copied ? strings.copied : strings.copyLink}
      >
        <CopyIcon done={copied} />
      </button>

      <a
        href={x}
        target="_blank"
        rel="noopener noreferrer"
        className={`${BTN} hover:text-[#118EA3]`}
        style={{ ...BTN_STYLE, color: '#4a5560' }}
        aria-label={strings.shareX}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      <a
        href={li}
        target="_blank"
        rel="noopener noreferrer"
        className={`${BTN} hover:text-[#118EA3]`}
        style={{ ...BTN_STYLE, color: '#4a5560' }}
        aria-label={strings.shareLinkedIn}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13M7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0" />
        </svg>
      </a>
    </div>
  );
}
