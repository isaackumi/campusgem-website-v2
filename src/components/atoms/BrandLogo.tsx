import Image from "next/image";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  compact?: boolean;
  light?: boolean;
};

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-ink/5",
        className,
      )}
    >
      <Image
        src="/images/logo.jpg"
        alt=""
        fill
        className="object-contain p-0.5"
        sizes="40px"
        priority
      />
    </span>
  );
}

/** YWAM-style wordmark: display name + brand accent. */
export function BrandLogo({
  className,
  markClassName,
  showWordmark = true,
  compact = false,
  light = false,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark
        className={cn(compact ? "h-8 w-8" : "h-9 w-9", markClassName)}
      />
      {showWordmark ? (
        <span
          className={cn(
            "font-display font-bold tracking-tight",
            compact ? "text-base" : "text-lg sm:text-xl",
            light ? "text-white" : "text-ink",
          )}
        >
          Campus{" "}
          <span className={light ? "text-brand-200" : "text-brand-700"}>
            GEM
          </span>
        </span>
      ) : null}
    </span>
  );
}
