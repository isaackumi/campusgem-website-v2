import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4;

const headingStyles: Record<HeadingLevel, string> = {
  1: "font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl",
  2: "font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl",
  3: "font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl",
  4: "font-sans text-base font-semibold tracking-tight",
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
  sm: "text-sm leading-6",
  md: "text-base leading-7",
  lg: "text-base leading-7 sm:text-lg sm:leading-8",
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
        "font-sans text-pretty",
        textSizes[size],
        muted ? "text-ink-soft" : "text-ink-soft",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
