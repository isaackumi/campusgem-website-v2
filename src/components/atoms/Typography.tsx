import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4;

const headingStyles: Record<HeadingLevel, string> = {
  1: "font-display text-[clamp(2.6rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-balance", 2: "font-display text-[clamp(1.85rem,3.5vw,2.85rem)] font-bold leading-[1.12] tracking-[-0.025em] text-balance", 3: "font-display text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em]", 4: "font-sans text-base font-bold tracking-[0.01em]",
};

type HeadingProps = {
  children: ReactNode;
  level?: HeadingLevel;
  as?: ElementType;
  className?: string;
  id?: string;
};

export function Heading({
  children, level = 2, as, className, id,
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
  sm: "text-[0.9375rem] font-medium leading-[1.65] tracking-[0.01em]", md: "text-base font-medium leading-[1.7] tracking-[0.01em]", lg: "text-[1.0625rem] font-medium leading-[1.75] tracking-[0.005em] sm:text-lg sm:leading-[1.75]",
};

export function Text({
  children, className, muted = false, size = "md", as: Tag = "p",
}: TextProps) {
  return (
    <Tag
      className={cn(
        "font-sans text-pretty", textSizes[size], muted ? "text-ink-muted" : "text-ink-soft", className, )}
    >
      {children}
    </Tag>
  );
}
