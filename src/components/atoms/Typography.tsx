import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4;

const headingStyles: Record<HeadingLevel, string> = {
  1: "font-display text-[clamp(2.75rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em]",
  2: "font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.025em]",
  3: "font-display text-[clamp(1.4rem,2.4vw,1.85rem)] leading-snug tracking-[-0.02em]",
  4: "font-sans text-lg font-semibold tracking-[-0.01em]",
};

type HeadingProps = {
  children: ReactNode;
  level?: HeadingLevel;
  as?: ElementType;
  className?: string;
  id?: string;
};

export function Heading({
  children,
  level = 2,
  as,
  className,
  id,
}: HeadingProps) {
  const Tag = (as ?? `h${level}`) as ElementType;
  return (
    <Tag id={id} className={cn(headingStyles[level], className)}>
      {children}
    </Tag>
  );
}

type TextProps = {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  size?: "sm" | "md" | "lg";
  as?: ElementType;
};

const textSizes = {
  sm: "text-sm leading-relaxed",
  md: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed sm:text-xl",
};

export function Text({
  children,
  className,
  muted = false,
  size = "md",
  as: Tag = "p",
}: TextProps) {
  return (
    <Tag
      className={cn(
        textSizes[size],
        muted ? "text-ink-muted" : "text-ink-soft",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
