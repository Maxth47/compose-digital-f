"use client";

import { useEffect, useRef } from "react";

// Global scroll handler that checks all registered elements synchronously
let elements: Set<HTMLElement> = new Set();
let listenerAttached = false;

function checkElements() {
  const viewportHeight = window.innerHeight;
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewportHeight + 50 && rect.bottom > -50) {
      el.dataset.visible = "true";
      elements.delete(el);
    }
  });
}

function onScroll() {
  checkElements();
}

function attachListener() {
  if (!listenerAttached) {
    window.addEventListener("scroll", onScroll, { passive: true });
    listenerAttached = true;
  }
}

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    attachListener();

    // Check immediately on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
      el.dataset.visible = "true";
    } else {
      elements.add(el);
    }

    return () => {
      elements.delete(el);
    };
  }, []);

  return ref;
}
