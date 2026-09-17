import { cn } from "@/lib/cn";

type OutlineWordProps = {
  children: string;
  className?: string;
  /** Soft stroke for light sections; light for dark/photo heroes. */
  tone?: "soft" | "ink" | "light";
};

const toneClass = {
  soft: "outline-soft",
  ink: "outline-ink",
  light: "outline-light",
} as const;

/**
 * Oversized stroked display word — editorial storytelling watermark.
 */
export function OutlineWord({
  children,
  className,
  tone = "soft",
}: OutlineWordProps) {
  return (
    <p
      aria-hidden
      className={cn(
        "font-display pointer-events-none absolute z-0 select-none font-bold leading-none tracking-tight",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </p>
  );
}
