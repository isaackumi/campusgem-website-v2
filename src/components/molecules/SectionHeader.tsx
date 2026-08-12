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
};

export function SectionHeader({
  eyebrow, title, description, align = "left", className, light = true, titleId,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl", align === "center" && "mx-auto text-center", className, )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em]", light ? "text-gold" : "text-gold-deep", )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        level={2}
        id={titleId}
        className={cn(light ? "text-ink" : "text-void")}
      >
        {title}
      </Heading>
      {description ? (
        <Text
          size="lg"
          className={cn("mt-4", light ? "text-ink-muted" : "text-ink-soft")}
        >
          {description}
        </Text>
      ) : null}
    </div>
  );
}
