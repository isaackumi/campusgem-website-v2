import { OutlineWord } from "@/components/atoms/OutlineWord";
import { Heading, Text } from "@/components/atoms/Typography";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
  titleId?: string;
  outline?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
  titleId,
  outline,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "relative max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {outline ? (
        <OutlineWord
          tone={light ? "light" : "soft"}
          className={cn(
            "left-0 top-[-0.35em] text-[clamp(3.5rem,10vw,6.5rem)]",
            align === "center" && "left-1/2 -translate-x-1/2",
          )}
        >
          {outline}
        </OutlineWord>
      ) : null}
      <div className="relative z-10">
        {eyebrow ? (
          <p
            className={cn(
              "eyebrow mb-3",
              light ? "text-brand-200" : "text-brand-600",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <Heading
          level={2}
          id={titleId}
          className={cn(light ? "text-white" : "text-ink")}
        >
          {title}
        </Heading>
        {description ? (
          <Text
            size="lg"
            className={cn(
              "mt-4",
              light ? "text-white/80" : "text-ink-soft",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </Text>
        ) : null}
      </div>
    </div>
  );
}
