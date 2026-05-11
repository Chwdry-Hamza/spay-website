"use client";

import * as React from "react";
import { useSectionVisible } from "./PreviewProvider";

/**
 * Wraps a section so that the CMS can hide it live via PREVIEW_VISIBILITY.
 * Outside preview mode (no `?preview=true`), this is a passthrough.
 */
export function PreviewVisible({
  id,
  fallback = true,
  children,
}: {
  id: string;
  fallback?: boolean;
  children: React.ReactNode;
}) {
  const visible = useSectionVisible(id, fallback);
  if (!visible) return null;
  return <>{children}</>;
}
