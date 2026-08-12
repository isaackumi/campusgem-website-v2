"use client";

import { motion, useReducedMotion } from "motion/react";
import { useSyncExternalStore, type ReactNode } from "react";
import {
  fadeIn, fadeUp, imageReveal, scaleIn, slideIn, stagger, viewportOnce,
} from "@/lib/motion";
import { cn } from "@/lib/cn";

type MotionKind = "fadeUp" | "fadeIn" | "scaleIn" | "slideIn" | "imageReveal";

const variants = {
  fadeUp, fadeIn, scaleIn, slideIn, imageReveal,
} as const;

function subscribe() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  kind?: MotionKind;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "header" | "footer";
};

export function Reveal({
  children, className, kind = "fadeUp", delay = 0, as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const ready = useIsClient();
  const Component = motion[as];

  if (!ready || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants[kind]}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
};

export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const reduce = useReducedMotion();
  const ready = useIsClient();
  const Component = motion[as];

  if (!ready || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children, className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ready = useIsClient();

  if (!ready || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
