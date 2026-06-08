"use client";

import { useState } from "react";

type FlipCardProps = {
  frontSrc?: string;
  backSrc?: string;
  frontAlt?: string;
  backAlt?: string;
  className?: string;
  /** Inline-edit mode: show both faces side-by-side so each is editable. */
  editMode?: boolean;
  frontFieldPath?: string;
  backFieldPath?: string;
};

export default function FlipCard({
  frontSrc = "/frontCard.png",
  backSrc = "/backCard.png",
  frontAlt = "Card front",
  backAlt = "Card back",
  className = "",
  editMode = false,
  frontFieldPath,
  backFieldPath,
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const showBack = flipped !== hovered;

  // In edit mode the hover/click flip would hide whichever face you reach for,
  // so lay both faces out flat — each is an editable image slot.
  if (editMode) {
    return (
      <div className={`grid grid-cols-2 gap-4 w-full max-w-2xl md:max-w-3xl ${className}`}>
        <div data-cms-field={frontFieldPath} data-cms-type="image" className="relative aspect-[1.6/1]">
          <img src={frontSrc} alt={frontAlt} className="w-full h-full object-cover drop-shadow-2xl" />
        </div>
        <div data-cms-field={backFieldPath} data-cms-type="image" className="relative aspect-[1.6/1]">
          <img src={backSrc} alt={backAlt} className="w-full h-full object-cover drop-shadow-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative w-full max-w-2xl md:max-w-3xl aspect-[1.5/1] cursor-pointer ${className}`}
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((v) => !v)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((v) => !v);
        }
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.03]"
        style={{
          transformStyle: "preserve-3d",
          transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <img
          src={frontSrc}
          alt={frontAlt}
          className="absolute inset-0 w-full h-full object-cover drop-shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            objectPosition: "center center",
            transformOrigin: "center center",
            transform: "rotateY(0deg) translateY(12px)",
          }}
        />
        <img
          src={backSrc}
          alt={backAlt}
          className="absolute inset-0 w-full h-full object-cover drop-shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            objectPosition: "center center",
            transformOrigin: "center center",
            transform: "rotateY(180deg) scale(1.05) translateY(-12px)",
          }}
        />
      </div>
    </div>
  );
}
