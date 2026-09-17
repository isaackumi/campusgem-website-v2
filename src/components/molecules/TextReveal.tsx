"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

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
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.08em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={immediate ? { y: "110%", opacity: 0 } : { y: "110%", opacity: 0 }}
            animate={immediate ? { y: 0, opacity: 1 } : undefined}
            whileInView={immediate ? undefined : { y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
            transition={{
              duration: 0.65,
              delay: delay + i * stagger,
              ease,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
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

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
