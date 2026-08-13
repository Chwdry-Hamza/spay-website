'use client';

/**
 * A "get the app" button that points at the store for the visitor's device.
 *
 * The store is chosen on the server from the request User-Agent (see
 * StorePlatform), so the right URL is in the HTML from the first byte — no
 * flash, no JavaScript requirement, and crawlers see a real link.
 *
 * `appleHref` exists because the homepage's hero / join-us / bottom-nav CTA
 * URLs stay editable in the CMS; that value is used as the Apple side, with
 * the shared Play Store URL as the Android side.
 */
import React from 'react';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/appStore';
import { useStorePlatform } from './StorePlatform';

export default function GetAppLink({
  appleHref,
  playHref = PLAY_STORE_URL,
  className,
  style,
  children,
  ...rest
}: {
  /** Apple-side URL. Defaults to the shared App Store link. */
  appleHref?: string;
  /** Android-side URL. Defaults to the shared Play Store link. */
  playHref?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'style' | 'className'>) {
  const platform = useStorePlatform();
  const href = platform === 'android' ? playHref : appleHref || APP_STORE_URL;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </a>
  );
}
