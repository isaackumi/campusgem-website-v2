import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  wide?: boolean;
};

export function Container({
  children, className, as: Tag = "div", wide = false,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8", wide ? "max-w-[var(--container-wide)]" : "max-w-[var(--container)]", className, )}
    >
      {children}
    </Tag>
  );
}
