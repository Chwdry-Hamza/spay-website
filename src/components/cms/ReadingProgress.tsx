'use client';

/**
 * Thin accent bar across the very top of the viewport showing how far down the
 * document the reader is. Sits above the fixed AppHeader (z-60 vs z-50) so the
 * two don't fight.
 *
 * Width is written straight to the DOM node in the scroll handler rather than
 * held in React state — this fires on every scroll frame, and re-rendering a
 * component 60×/second to move one bar is waste we can skip.
 */
import { useEffect, useRef } from 'react';

export default function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full w-0"
        style={{
          background: '#46F1C5',
          boxShadow: '0 0 12px rgba(70,241,197,0.7)',
        }}
      />
    </div>
  );
}
