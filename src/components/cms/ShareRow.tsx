'use client';

/**
 * The row beside the post byline: copy-link, then SPay's Facebook, TikTok and
 * Instagram profiles.
 *
 * The three social buttons are ordinary https profile links, and that is
 * deliberate — it is what makes them open the native app on a phone. iOS
 * Universal Links and Android App Links let each of these apps claim its own
 * domain, so the OS hands the tap to the installed app and falls back to the
 * website when it is not installed. Custom schemes (`instagram://`, `fb://`)
 * would skip that fallback and dead-end for anyone without the app.
 *
 * `url` is the absolute canonical URL passed in from the server, not
 * `location.href` — that keeps the copied link free of any query string or
 * hash the visitor arrived with (utm tags, TOC anchors), which is what should
 * be shared and what the canonical points at.
 */
import { useState } from 'react';

/** SPay's social profiles. An empty value renders the icon un-clickable. */
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61590269537086';
const TIKTOK_URL = 'https://www.tiktok.com/@spaycard';
const INSTAGRAM_URL = 'https://www.instagram.com/spay.card/';

const BTN = 'grid size-9 place-items-center rounded-[9px] transition-colors';
const BTN_STYLE = {
  border: '1px solid rgba(255,255,255,0.09)',
  background: 'rgba(70,241,197,0.04)',
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

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.6-1.62-.95-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03C3.22 21.75 1.8 19.57 1.59 17.23c-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * A social profile. Renders as a link once its URL is set, and as a plain
 * (non-clickable) icon while it is still empty.
 */
function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return (
      <span className={BTN} style={{ ...BTN_STYLE, color: '#A6AABE' }} aria-hidden>
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BTN} hover:text-[#46F1C5]`}
      style={{ ...BTN_STYLE, color: '#A6AABE' }}
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function ShareRow({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard blocked (insecure context / denied permission). Nothing
      // useful to tell the user — the visible URL is still selectable.
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={copy}
        className={`${BTN} cursor-pointer hover:text-[#46F1C5]`}
        style={{ ...BTN_STYLE, color: copied ? '#46F1C5' : '#A6AABE' }}
        aria-label={copied ? 'Link copied' : 'Copy link to this article'}
        title={copied ? 'Copied' : 'Copy link'}
      >
        <CopyIcon done={copied} />
      </button>

      <SocialIcon href={FACEBOOK_URL} label="SPay on Facebook">
        <FacebookIcon />
      </SocialIcon>

      <SocialIcon href={TIKTOK_URL} label="SPay on TikTok">
        <TikTokIcon />
      </SocialIcon>

      <SocialIcon href={INSTAGRAM_URL} label="SPay on Instagram">
        <InstagramIcon />
      </SocialIcon>
    </div>
  );
}
