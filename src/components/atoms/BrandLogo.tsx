import Image from "next/image";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  compact?: boolean;
};

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-[0.25rem] bg-white", className, )}
    >
      <Image
        src="/images/logo.jpg"
        alt=""
        fill
        className="object-contain p-0.5"
        sizes="48px"
        priority
      />
    </span>
  );
}

export function BrandLogo({
  className, markClassName, showWordmark = true, compact = false,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark
        className={cn(
          compact ? "h-9 w-9" : "h-10 w-10 lg:h-11 lg:w-11", markClassName, )}
      />
      {showWordmark ? (
        <span className="flex min-w-0 flex-col justify-center">
          <span
            className={cn(
              "font-sans font-bold leading-none tracking-[-0.02em] text-ink", compact ? "text-[0.95rem]" : "text-[1.05rem] sm:text-[1.15rem]", )}
          >
            Campus GEM
          </span>
          <span
            className={cn(
              "mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-ink-muted", compact && "mt-0.5", )}
          >
            Ministries
          </span>
        </span>
      ) : null}
    </span>
  );
}
