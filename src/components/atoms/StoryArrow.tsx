import { cn } from "@/lib/cn";

type StoryArrowProps = {
  className?: string;
  /** Flip horizontally (point left). */
  flip?: boolean;
  /** Soft brand stroke for mist bands; light for dark sections. */
  tone?: "brand" | "ink" | "light";
};

/**
 * Hand-drawn dotted curve — editorial storytelling cue (YWAM / narrative sites).
 * Decorative only; hide from assistive tech.
 */
export function StoryArrow({
  className,
  flip = false,
  tone = "brand",
}: StoryArrowProps) {
  const stroke =
    tone === "light"
      ? "rgb(255 255 255 / 0.45)"
      : tone === "ink"
        ? "rgb(19 28 51 / 0.28)"
        : "rgb(29 93 224 / 0.55)";

  return (
    <svg
      aria-hidden
      viewBox="0 0 160 72"
      fill="none"
      className={cn(
        "pointer-events-none h-14 w-28 sm:h-16 sm:w-36",
        flip && "-scale-x-100",
        className,
      )}
    >
      <path
        d="M12 48c28-38 68-48 112-28"
        stroke={stroke}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeDasharray="2.5 5.5"
      />
      <path
        d="M112 14c6 4 12 10 16 18"
        stroke={stroke}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeDasharray="2.5 5.5"
      />
      <path
        d="M128 20c4 8 6 12 8 16-8-1-14-2-20-2"
        stroke={stroke}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
