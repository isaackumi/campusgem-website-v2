import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "gold" | "soft" | "outline";
};

const tones = {
  gold: "bg-gold text-void", soft: "bg-gold-tint text-gold-soft border border-gold/25", outline: "bg-transparent text-gold border border-gold/30",
};

export function Badge({ children, className, tone = "soft" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-pill)] px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em]", tones[tone], className, )}
    >
      {children}
    </span>
  );
}
