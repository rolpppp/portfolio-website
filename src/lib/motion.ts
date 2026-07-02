import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

let initialized = false;
let lenis: Lenis | null = null;

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Registers GSAP/ScrollTrigger once and drives Lenis from gsap.ticker so
 * ScrollTrigger positions never drift from the smoothed scroll position.
 */
export function initMotion() {
  if (initialized) return { gsap, ScrollTrigger, lenis };
  initialized = true;

  gsap.registerPlugin(ScrollTrigger);

  if (!prefersReducedMotion()) {
    lenis = new Lenis({ autoRaf: false });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis?.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  return { gsap, ScrollTrigger, lenis };
}
