"use client";

import { resolveAboutContent, type AboutContent } from "@/lib/aboutContent";
import { useEditablePreview } from "@/hooks/usePreview";

/**
 * About page body, rendered from CMS `sections` content. The design stays in
 * code; the text comes from `content`. In the CMS live-preview iframe
 * (`?preview=1`) it is edited inline — `useEditablePreview` streams updates,
 * handles the Edit toggle, and mounts the inline-edit runtime (mirrors
 * HomeSections). Fields are tagged with `data-cms-*`.
 */
export default function AboutSections({ initialContent }: { initialContent: AboutContent }) {
  const { content, rootRef } = useEditablePreview(initialContent, resolveAboutContent);

  const { hero, mission, vision, collaborations } = content;
  const partners = collaborations.partners ?? [];

  return (
    <div ref={rootRef}>
      {/* Intro */}
      <section className="min-h-fit md:min-h-screen relative overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] blur-3xl"
            style={{ background: "radial-gradient(ellipse at center, #0e2e2e 0%, #0e2e2e 30%, transparent 75%)" }}
          />
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div
              className="text-zinc-700/30 font-bold leading-none select-none tracking-tighter whitespace-nowrap text-center"
              style={{ fontSize: "clamp(10rem, 38vw, 32rem)" }}
            >
              {hero.headingAccent || "SPAY"}
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 md:pt-32 pb-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 md:mb-10"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-white" data-cms-field="hero.headingWhite">{hero.headingWhite}</span>{" "}
            <span style={{ color: "#46F1C5" }} data-cms-field="hero.headingAccent">{hero.headingAccent}</span>
          </h1>

          <div className="max-w-3xl">
            <p
              className="text-lg md:text-xl leading-relaxed whitespace-pre-line"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "#A6AABE" }}
              data-cms-field="hero.intro"
              data-cms-multiline
            >
              {hero.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative pb-8 md:pb-32" style={{ background: "#090e1c" }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            <div>
              <h2
                className="text-3xl md:text-5xl font-bold mb-4 md:mb-8"
                style={{ color: "#46F1C5", fontFamily: "var(--font-space-grotesk)" }}
                data-cms-field="mission.heading"
              >
                {mission.heading}
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "#A6AABE" }}
                data-cms-field="mission.body"
                data-cms-multiline
              >
                {mission.body}
              </p>
            </div>

            <div>
              <h2
                className="text-3xl md:text-5xl font-bold mb-4 md:mb-8"
                style={{ color: "#46F1C5", fontFamily: "var(--font-space-grotesk)" }}
                data-cms-field="vision.heading"
              >
                {vision.heading}
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed whitespace-pre-line"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "#A6AABE" }}
                data-cms-field="vision.body"
                data-cms-multiline
              >
                {vision.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <div style={{ background: "#090e1c" }}>
        <section className="relative py-8 md:py-24 overflow-hidden" style={{ background: "#090e1c" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-0 right-0 h-48 md:h-64 -translate-y-1/2 blur-2xl"
              style={{ background: "#0e2e2e" }}
            />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <h2
              className="text-3xl md:text-6xl font-bold text-center mb-6 md:mb-16"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span className="text-white" data-cms-field="collaborations.headingBefore">{collaborations.headingBefore}</span>
              <span style={{ color: "#46F1C5" }} data-cms-field="collaborations.headingHighlight">{collaborations.headingHighlight}</span>
            </h2>

            {partners.length > 0 && (
              <div className="overflow-hidden">
                <div className="flex animate-marquee gap-10 md:gap-20">
                  {[0, 1].map((dup) => (
                    <div key={dup} className="flex items-center gap-10 md:gap-20 shrink-0">
                      {partners.map((name, i) => (
                        <span
                          key={`${dup}-${i}`}
                          className="text-xl font-bold tracking-wider text-white/70 whitespace-nowrap"
                          data-cms-field={`collaborations.partners.${i}`}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
