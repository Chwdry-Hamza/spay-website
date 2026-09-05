"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * The design export's page runtime, ported verbatim.
 *
 * Every page in spay-site/*.dc.html shipped the same `class Component extends
 * DCLogic` block: mobile nav, the header hairline that fades at the top of the
 * page, the `data-reveal` scroll-in, the `data-scene` choreography and the FAQ
 * accordion. It is all imperative DOM work against attributes the markup
 * carries (`data-reveal`, `data-scene`, `data-faq`, `data-r="hdr-*"`), so it
 * ports as one effect rather than as state in each section component.
 *
 * Re-runs on navigation: `pathname` is in the dependency list because a client
 * transition swaps the whole page body under a mounted effect.
 */
export default function SiteMotion({ motion = true }: { motion?: boolean }) {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: (() => void)[] = [];
    const on = <K extends keyof WindowEventMap>(
      target: Window | Document,
      type: K,
      fn: (e: WindowEventMap[K]) => void,
      opts?: AddEventListenerOptions,
    ) => {
      target.addEventListener(type, fn as EventListener, opts);
      cleanups.push(() => target.removeEventListener(type, fn as EventListener, opts));
    };

    // ── mobile nav ────────────────────────────────────────────────────
    const btn = document.querySelector<HTMLElement>('[data-r="hdr-toggle"]');
    const panel = document.querySelector<HTMLElement>('[data-r="hdr-panel"]');
    if (btn && panel) {
      const close = () => {
        delete panel.dataset.open;
        btn.setAttribute("aria-expanded", "false");
      };
      const onToggle = () => {
        if (panel.dataset.open) return close();
        panel.dataset.open = "1";
        btn.setAttribute("aria-expanded", "true");
      };
      const onPanelClick = (e: Event) => {
        if ((e.target as HTMLElement).closest("a")) close();
      };
      btn.addEventListener("click", onToggle);
      panel.addEventListener("click", onPanelClick);
      cleanups.push(() => {
        btn.removeEventListener("click", onToggle);
        panel.removeEventListener("click", onPanelClick);
        close();
      });
      on(window, "resize", () => {
        if (window.innerWidth > 1080) close();
      });
    }

    // ── header hairline: visible only at the very top of the page ─────
    const line = document.querySelector<HTMLElement>("[data-hdr-line]");
    if (line) {
      const sentinel = document.createElement("div");
      sentinel.setAttribute("data-hdr-sentinel", "");
      sentinel.style.cssText =
        "position:absolute;top:0;left:0;width:1px;height:6px;pointer-events:none;opacity:0";
      document.body.prepend(sentinel);
      const onScroll = () => {
        const y =
          window.scrollY || document.body.scrollTop || document.documentElement.scrollTop || 0;
        line.style.opacity = y <= 6 && sentinel.getBoundingClientRect().top > -6 ? "1" : "0";
      };
      on(window, "scroll", onScroll, { passive: true, capture: true });
      on(document, "scroll", onScroll, { passive: true, capture: true });
      onScroll();
      cleanups.push(() => sentinel.remove());
    }

    // ── FAQ accordion ─────────────────────────────────────────────────
    // Initialised before the motion opt-outs below: the accordion is
    // behaviour, not decoration, so it must work even with motion off.
    const faqItems = Array.from(document.querySelectorAll<HTMLElement>("[data-faq]"));
    if (faqItems.length) {
      const set = (item: HTMLElement, open: boolean) => {
        const answer = item.querySelector<HTMLElement>("[data-faq-a]");
        const icon = item.querySelector<HTMLElement>("[data-faq-i]");
        if (!answer) return;
        answer.style.transition = "height .3s ease, opacity .25s ease";
        answer.style.height = open ? `${answer.scrollHeight}px` : "0px";
        answer.style.opacity = open ? "1" : "0";
        if (icon) icon.style.transform = open ? "rotate(180deg)" : "none";
        item.dataset.open = open ? "1" : "";
      };
      faqItems.forEach((item, i) => set(item, i === 0));
      faqItems.forEach((item) => {
        const q = item.querySelector<HTMLElement>("[data-faq-q]");
        if (!q) return;
        const onClick = () => {
          const willOpen = !item.dataset.open;
          faqItems.forEach((other) => set(other, false));
          if (willOpen) set(item, true);
        };
        q.addEventListener("click", onClick);
        cleanups.push(() => q.removeEventListener("click", onClick));
      });
      on(window, "beforeprint", () => faqItems.forEach((item) => set(item, true)));
    }

    // ── scroll reveal ─────────────────────────────────────────────────
    const revealNodes = () => Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reveal = (n: HTMLElement) => {
      n.style.opacity = "1";
      n.style.transform = "none";
    };
    const showAll = () => revealNodes().forEach(reveal);
    on(window, "beforeprint", showAll);

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!motion || typeof IntersectionObserver === "undefined") {
      showAll();
      return () => cleanups.forEach((fn) => fn());
    }

    // `data-reveal="left"` means "slide in from the left edge", and the design
    // puts it on the elements that sit on the left. Under dir="rtl" the layout
    // is mirrored, so that same element now rests on the RIGHT — but translateX
    // is physical and does not mirror, so without this flip it would fly the
    // whole width of the screen to reach a place it is already next to. Flipping
    // the direction keeps the design's intent: every element enters from its own
    // side of the page, whichever side that turns out to be.
    const rtl = document.documentElement.getAttribute("dir") === "rtl";

    const offsetFor = (n: HTMLElement) => {
      const raw = n.dataset.reveal;
      if (raw !== "left" && raw !== "right") return "translateY(28px)";
      const d = rtl ? (raw === "left" ? "right" : "left") : raw;
      const box = n.getBoundingClientRect();
      const w = window.innerWidth || 1200;
      return d === "left"
        ? `translateX(${-(box.right + 80)}px)`
        : `translateX(${w - box.left + 80}px)`;
    };

    const vh = window.innerHeight || 800;
    const nodes = revealNodes();
    nodes.forEach((n, i) => {
      const box = n.getBoundingClientRect();
      const dir = n.dataset.reveal;
      const dur = dir === "left" || dir === "right" ? "1.05s" : ".7s";
      n.style.transition = `opacity ${dur} cubic-bezier(.22,.61,.36,1), transform ${dur} cubic-bezier(.22,.61,.36,1)`;
      n.style.willChange = "transform, opacity";
      n.style.opacity = "0";
      n.style.transform = offsetFor(n);
      // Anything already on screen animates in on a short stagger rather than
      // waiting for a scroll that may never come.
      if (box.top < vh * 0.95 && box.bottom > 0) {
        const t = setTimeout(() => reveal(n), 120 + i * 110);
        cleanups.push(() => clearTimeout(t));
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const t = setTimeout(() => reveal(el), i * 70);
          cleanups.push(() => clearTimeout(t));
          io.unobserve(el);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -6% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    cleanups.push(() => io.disconnect());

    // Safety net for nodes the observer misses (a section revealed by a layout
    // shift, an anchor jump past the viewport, …).
    const safety = setInterval(() => {
      const h = window.innerHeight || 800;
      revealNodes().forEach((n) => {
        if (n.style.opacity !== "0") return;
        if (n.getBoundingClientRect().top < h) reveal(n);
      });
    }, 600);
    cleanups.push(() => {
      clearInterval(safety);
      showAll();
    });

    // ── scene choreography (bar → block → card → items) ───────────────
    const EASE = "cubic-bezier(.16,.86,.24,1)";
    const scenes = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
    const parts = (s: HTMLElement) => ({
      // Mirrored under dir="rtl" for the same reason offsetFor is.
      dir: (s.dataset.dir === "right" ? 1 : -1) * (rtl ? -1 : 1),
      bar: s.querySelector<HTMLElement>("[data-geo-bar]"),
      block: s.querySelector<HTMLElement>("[data-geo-block]"),
      card: s.querySelector<HTMLElement>("[data-card]"),
      items: Array.from(s.querySelectorAll<HTMLElement>("[data-anim]")),
    });
    const settle = (s: HTMLElement) => {
      const p = parts(s);
      if (p.bar) p.bar.style.transform = "none";
      if (p.block) {
        p.block.style.clipPath = "none";
        p.block.style.opacity = "1";
      }
      if (p.card) {
        p.card.style.clipPath = "none";
        p.card.style.transform = "none";
        p.card.style.opacity = "1";
      }
      p.items.forEach((n) => {
        n.style.opacity = "1";
        n.style.transform = "none";
      });
    };
    const settleAll = () =>
      scenes.forEach((s) => {
        s.dataset.played = "1";
        settle(s);
      });
    on(window, "beforeprint", settleAll);

    if (reduced) {
      settleAll();
      return () => cleanups.forEach((fn) => fn());
    }

    scenes.forEach((s) => {
      const p = parts(s);
      if (p.bar) p.bar.style.transform = `translate3d(${p.dir < 0 ? "-100%" : "100%"},0,0)`;
      if (p.block) p.block.style.clipPath = "inset(0 0 100% 0)";
      if (p.card) {
        p.card.style.clipPath = "inset(100% 0 0 0)";
        p.card.style.transform = "translate3d(0,26px,0)";
      }
      p.items.forEach((n) => {
        n.style.opacity = "0";
        n.style.transform = `translate3d(${p.dir * -18}px,10px,0)`;
      });
    });

    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));
    const play = (s: HTMLElement) => {
      if (s.dataset.played) return;
      s.dataset.played = "1";
      const p = parts(s);
      if (p.bar) {
        p.bar.style.transition = `transform 1.05s ${EASE}`;
        requestAnimationFrame(() => {
          if (p.bar) p.bar.style.transform = "none";
        });
      }
      if (p.block) {
        p.block.style.transition = `clip-path .85s ${EASE}`;
        later(() => {
          p.block!.style.clipPath = "inset(0 0 0 0)";
        }, 520);
      }
      if (p.card) {
        p.card.style.transition = `clip-path 1s ${EASE}, transform 1.2s ${EASE}`;
        later(() => {
          p.card!.style.clipPath = "inset(0 0 0 0)";
          p.card!.style.transform = "none";
        }, 1120);
      }
      p.items.forEach((n, i) => {
        n.style.transition = `opacity .65s ease, transform .8s ${EASE}`;
        later(() => {
          n.style.opacity = "1";
          n.style.transform = "none";
        }, 1280 + i * 80);
      });
    };
    const sweep = () => {
      const h = window.innerHeight || 800;
      scenes.forEach((s) => {
        if (s.dataset.played) return;
        const box = s.getBoundingClientRect();
        // Scrolled past before it ever played: land it in its finished state.
        if (box.bottom <= 0) {
          s.dataset.played = "1";
          settle(s);
          return;
        }
        if (box.top < h * 0.88) play(s);
      });
    };
    sweep();
    on(window, "scroll", sweep, { passive: true });
    const sceneSafety = setInterval(sweep, 500);
    cleanups.push(() => {
      clearInterval(sceneSafety);
      timers.forEach(clearTimeout);
      settleAll();
    });

    return () => cleanups.forEach((fn) => fn());
  }, [motion, pathname]);

  return null;
}
