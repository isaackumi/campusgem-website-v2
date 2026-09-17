import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Heading, Text } from "@/components/atoms/Typography";
import { cn } from "@/lib/cn";

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("prose-page max-w-prose space-y-4", className)}>
      {children}
    </div>
  );
}

export function ContentBlock({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-t border-ink/10 pt-6", className)}>
      <Heading level={3} as="h2" className="text-ink">
        {title}
      </Heading>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function SplitContent({
  image,
  imageAlt,
  children,
  reverse = false,
}: {
  image: string;
  imageAlt: string;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mist sm:aspect-[5/6] lg:aspect-[4/5]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col justify-center lg:min-h-[28rem]">{children}</div>
    </div>
  );
}

export function CtaBanner({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-brand-50 px-6 py-10 sm:px-10 sm:py-12">
      <Heading level={3} as="h2" className="text-ink">
        {title}
      </Heading>
      <Text className="mt-3 max-w-2xl" muted>
        {description}
      </Text>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button href={primary.href}>{primary.label}</Button>
        {secondary ? (
          <Button href={secondary.href} variant="secondary">
            {secondary.label}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export function LinkCards({
  items,
  tone = "light",
}: {
  items: Array<{ href: string; title: string; description?: string }>;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <ul
      className={
        dark
          ? "divide-y divide-white/15 border-y border-white/15"
          : "divide-y divide-ink/10 border-y border-ink/10"
      }
    >
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group flex items-baseline justify-between gap-6 py-5 transition-colors sm:py-6"
          >
            <span>
              <Heading
                level={4}
                as="h3"
                className={
                  dark
                    ? "font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-brand-200 sm:text-2xl"
                    : "font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand-700 sm:text-2xl"
                }
              >
                {item.title}
              </Heading>
              {item.description ? (
                <Text
                  size="sm"
                  className={
                    dark
                      ? "mt-1.5 max-w-xl text-white/70"
                      : "mt-1.5 max-w-xl"
                  }
                  muted={!dark}
                >
                  {item.description}
                </Text>
              ) : null}
            </span>
            <span
              aria-hidden
              className={
                dark
                  ? "shrink-0 font-display text-lg text-brand-200 transition-transform duration-200 group-hover:translate-x-1"
                  : "shrink-0 font-display text-lg text-brand-600 transition-transform duration-200 group-hover:translate-x-1"
              }
            >
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ImageGrid({
  images,
  altPrefix = "Campus GEM",
}: {
  images: string[];
  altPrefix?: string;
}) {
  if (!images.length) {
    return <Text muted>Photos for this gallery are coming soon.</Text>;
  }

  return (
    <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
      {images.map((src, index) => (
        <li
          key={src}
          className="relative aspect-square overflow-hidden rounded-xl"
        >
          <Image
            src={src}
            alt={`${altPrefix} photo ${index + 1}`}
            fill
            className="object-cover transition duration-500 hover:scale-[1.03]"
            sizes="(max-width: 768px) 50vw, 25vw"
            quality={65}
          />
        </li>
      ))}
    </ul>
  );
}
