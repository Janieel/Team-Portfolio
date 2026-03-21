"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const usePanelScroll = (
  containerRef: React.RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      if (window.innerWidth < 640) {
        const panels = gsap.utils.toArray<HTMLElement>(
          ".panel",
          containerRef // ✅ scoped properly
        );

        panels.forEach((panel) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            pinSpacing: false,
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};