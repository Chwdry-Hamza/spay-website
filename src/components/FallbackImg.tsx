'use client';

import * as React from 'react';

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  /** Current src — typically a CMS-set value (e.g. a Cloudinary URL). */
  src?: string;
  /** Bundled default shown if `src` is empty OR fails to load (e.g. the image
   *  was deleted from Cloudinary). Should be a committed asset in /public. */
  fallbackSrc: string;
};

/**
 * <img> that gracefully falls back to a bundled default.
 *
 * The landing page's images are CMS-editable: an editor can replace any image
 * with an uploaded (Cloudinary) one. If that remote image later 404s — e.g.
 * it's deleted from Cloudinary — this swaps to the original bundled default so
 * the page never shows a broken image. Empty/missing values use the default
 * immediately.
 */
export default function FallbackImg({ src, fallbackSrc, ...rest }: Props) {
  const initial = src && src.trim() ? src : fallbackSrc;
  const [current, setCurrent] = React.useState(initial);

  // Re-sync if the src prop changes (e.g. live CMS preview edits).
  React.useEffect(() => {
    setCurrent(src && src.trim() ? src : fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <img
      {...rest}
      src={current}
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
