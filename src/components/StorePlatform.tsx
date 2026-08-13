'use client';

/**
 * Carries the visitor's store platform, decided on the server from the
 * request's User-Agent, down to every "get the app" button.
 *
 * Server-decided rather than detected on mount: the correct store URL is then
 * already in the HTML, so the link is right for crawlers, right with
 * JavaScript disabled, and never changes under a user mid-click. The
 * User-Agent settles every case on its own — Apple hardware to the App Store,
 * everything else to Play — so nothing is re-checked in the browser.
 *
 * This is a client module purely so client components (AppHeader, HomeHero,
 * BottomNav) can read the value through context; the value itself always
 * comes from the server, in app/layout.tsx.
 */
import React from 'react';
import type { Platform } from '@/lib/appStore';

const StorePlatformContext = React.createContext<Platform>('apple');

export function StorePlatformProvider({
  platform,
  children,
}: {
  platform: Platform;
  children: React.ReactNode;
}) {
  return (
    <StorePlatformContext.Provider value={platform}>
      {children}
    </StorePlatformContext.Provider>
  );
}

export function useStorePlatform(): Platform {
  return React.useContext(StorePlatformContext);
}
