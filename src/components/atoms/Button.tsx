import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-void hover:bg-gold-soft shadow-[var(--shadow-soft)]", secondary:
    "bg-surface-elevated text-ink border border-mist hover:border-gold/40", ghost:
    "bg-transparent text-ink border border-white/25 hover:border-gold/50 hover:text-gold-soft", outline:
    "bg-transparent text-ink border border-white/35 hover:bg-white/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]", md: "px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em]", lg: "px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em]",
};

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps | "href">;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children, className, variant = "primary", size = "md", ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-pill)] font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60", variantClasses[variant], sizeClasses[size], className, );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
