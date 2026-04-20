"use client";

import { useState } from "react";

type FlipCardProps = {
  frontSrc?: string;
  backSrc?: string;
  frontAlt?: string;
  backAlt?: string;
  className?: string;
};

export default function FlipCard({
  frontSrc = "/frontCard.png",
  backSrc = "/backCard.png",
  frontAlt = "Card front",
  backAlt = "Card back",
  className = "",
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const showBack = flipped !== hovered;

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
            transform: "translateY(12px)",
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
            transform: "rotateY(180deg) translateY(-4px) scale(1.04)",
          }}
        />
      </div>
    </div>
  );
}
