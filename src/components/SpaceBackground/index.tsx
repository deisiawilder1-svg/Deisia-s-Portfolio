"use client";

import { useEffect } from "react";

const SpaceBackground = () => {
  useEffect(() => {
    const root = document.documentElement;
    const supportsPointer = window.matchMedia("(pointer: fine)");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frame = 0;

    if (!supportsPointer.matches || prefersReducedMotion.matches) return;

    const moveGlow = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty(
          "--space-pointer-x",
          `${(event.clientX / window.innerWidth) * 100}%`,
        );
        root.style.setProperty(
          "--space-pointer-y",
          `${(event.clientY / window.innerHeight) * 100}%`,
        );
      });
    };

    const resetGlow = () => {
      root.style.setProperty("--space-pointer-x", "50%");
      root.style.setProperty("--space-pointer-y", "36%");
    };

    window.addEventListener("pointermove", moveGlow, { passive: true });
    document.addEventListener("pointerleave", resetGlow);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", moveGlow);
      document.removeEventListener("pointerleave", resetGlow);
    };
  }, []);

  return null;
};

export default SpaceBackground;
