import { cn } from "@/lib/cn";

type DividerProps = {
  className?: string;
  accent?: boolean;
};

export function Divider({ className, accent = false }: DividerProps) {
  return (
    <div
      role="separator"
      className={cn(
        "h-px w-full",
        accent ? "gem-facet opacity-90" : "bg-mist",
        className,
      )}
    />
  );
}
