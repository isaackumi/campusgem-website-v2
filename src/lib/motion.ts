import type { Transition, Variants } from "motion/react";

export const easeOutExpo: Transition = {
  duration: 0.7, ease: [0.22, 1, 0.36, 1],
};

export const easeOutSoft: Transition = {
  duration: 0.22, ease: [0.22, 1, 0.36, 1],
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: easeOutExpo },
};

export const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: easeOutSoft },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 }, visible: { opacity: 1, transition: { ...easeOutExpo, duration: 0.55 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1, transition: easeOutExpo },
};

export const slideIn: Variants = {
  hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: easeOutExpo },
};

export const stagger: Variants = {
  hidden: {}, visible: {
    transition: {
      staggerChildren: 0.1, delayChildren: 0.08, }, },
};

export const staggerFast: Variants = {
  hidden: {}, visible: {
    transition: {
      staggerChildren: 0.045, delayChildren: 0.04, }, },
};

export const dropdownPanel: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 }, visible: {
    opacity: 1, y: 0, scale: 1, transition: easeOutSoft, }, exit: {
    opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.16, ease: [0.4, 0, 1, 1] }, },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04 }, visible: {
    opacity: 1, scale: 1, transition: { ...easeOutExpo, duration: 0.9 }, },
};

export const viewportOnce = {
  once: true, amount: 0.25, margin: "0px 0px -8% 0px",
} as const;
