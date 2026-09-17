import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "gold" | "soft" | "outline";
};

const tones = {
  gold: "bg-brand-600 text-white",
  soft: "bg-brand-50 text-brand-700 ring-1 ring-brand-100",
  outline: "bg-transparent text-brand-700 ring-1 ring-brand-200",
};

export function Badge({ children, className, tone = "soft" }: BadgeProps) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center rounded-lg px-3 py-1.5",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
