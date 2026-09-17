"use client";

import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Never leave story copy invisible if IntersectionObserver fails. */
function useRevealVisible(immediate: boolean, reduce: boolean | null) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.12,
    margin: "0px 0px -5% 0px",
  });
  const [failsafe, setFailsafe] = useState(false);

  useEffect(() => {
    if (immediate || reduce) return;
    const id = window.setTimeout(() => setFailsafe(true), 700);
    return () => window.clearTimeout(id);
  }, [immediate, reduce]);

  const visible = Boolean(reduce) || immediate || inView || failsafe;
  return { ref, visible };
}

/** Word-by-word mask reveal for headlines. */
export function TextReveal({
  text,
  className,
  as: Tag = "p",
  delay = 0,
  stagger = 0.028,
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
  const { ref, visible } = useRevealVisible(immediate, reduce);

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.08em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%", opacity: 0 }}
            animate={visible ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
            transition={{
              duration: 0.75,
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

/** Soft fade/slide for body copy. Supports `as="li"` for valid confession lists. */
export function ParagraphReveal({
  children,
  className,
  delay = 0,
  immediate = false,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const { ref, visible } = useRevealVisible(immediate, reduce);
  const MotionTag = motion[as] as ElementType;

  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}
