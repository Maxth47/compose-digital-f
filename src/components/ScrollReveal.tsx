"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CSSProperties, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.7,
  className = "",
  style = {},
}: ScrollRevealProps) {
  const ref = useScrollReveal();

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{
        ...style,
        "--sr-delay": `${delay}s`,
        "--sr-duration": `${duration}s`,
        "--sr-transform": translateMap[direction],
      } as CSSProperties}
    >
      {children}
    </div>
  );
}
