"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Word-by-word mask reveal for headlines. */
export function TextReveal({
  text,
  className,
  as: Tag = "p",
  delay = 0,
  stagger = 0.028,
  /** Play on mount (hero) — skip scroll observer. */
  immediate = false,
}: {
  text: string;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "span";
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.05,
    margin: "0px 0px -40px 0px",
  });
  const words = text.split(" ");
  const show = Boolean(reduce) || immediate || inView;

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom pb-[0.08em]"
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "110%", opacity: 0 }}
              animate={
                show ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }
              }
              transition={{
                duration: 0.65,
                delay: show ? delay + i * stagger : 0,
                ease,
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}

/** Soft fade/slide for body copy. */
export function ParagraphReveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.05,
    margin: "0px 0px -40px 0px",
  });
  const show = Boolean(reduce) || immediate || inView;

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, delay: show ? delay : 0, ease }}
    >
      {children}
    </motion.div>
  );
}
