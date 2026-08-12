import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "ruby" | "lagoon" | "neutral" | "on-dark";
};

const tones = {
  ruby: "bg-ruby-soft text-ruby-deep",
  lagoon: "bg-[color-mix(in_srgb,var(--lagoon)_12%,white)] text-lagoon-deep",
  neutral: "bg-mist text-ink-soft",
  "on-dark": "bg-white/12 text-white/90 border border-white/20",
};

export function Badge({ children, className, tone = "ruby" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
