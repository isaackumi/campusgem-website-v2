import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { Heading, Text } from "@/components/atoms/Typography";
import { cn } from "@/lib/cn";

export function Prose({
  children, className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("prose-page space-y-4 max-w-prose", className)}>
      {children}
    </div>
  );
}

export function ContentBlock({
  title, children, className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-t border-white/10 pt-6", className, )}
    >
      <Heading level={3} as="h2" className="text-ink">
        {title}
      </Heading>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function SplitContent({
  image, imageAlt, children, reverse = false,
}: {
  image: string;
  imageAlt: string;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16", reverse && "lg:[&>*:first-child]:order-2", )}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-surface sm:aspect-[5/6] lg:aspect-[4/5]">
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
  title, description, primary, secondary,
}: {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <div className="border-y border-white/10 py-10 sm:py-12">
      <Heading level={3} as="h2" className="text-ink">
        {title}
      </Heading>
      <Text className="mt-3 max-w-2xl" muted>
        {description}
      </Text>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button href={primary.href}>{primary.label}</Button>
        {secondary ? (
          <Button href={secondary.href} variant="outline">
            {secondary.label}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export function LinkCards({
  items,
}: {
  items: Array<{ href: string; title: string; description?: string }>;
}) {
  return (
    <ul className="grid gap-0 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.href} className="border-b border-white/10 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0">
          <Link
            href={item.href}
            className="group block h-full cursor-pointer px-1 py-7 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/[0.03] sm:px-5"
          >
            <Heading
              level={4}
              as="h3"
              className="font-display text-xl font-bold tracking-[-0.02em] text-ink transition-colors duration-200 group-hover:text-gold-soft"
            >
              {item.title}
            </Heading>
            {item.description ? (
              <Text size="sm" className="mt-2 max-w-sm" muted>
                {item.description}
              </Text>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ImageGrid({
  images, altPrefix = "Campus GEM",
}: {
  images: string[];
  altPrefix?: string;
}) {
  if (!images.length) {
    return (
      <Text muted>Photos for this gallery are coming soon.</Text>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4">
      {images.map((src, index) => (
        <li
          key={src}
          className="relative aspect-square overflow-hidden rounded-[var(--radius-sm)]"
        >
          <Image
            src={src}
            alt={`${altPrefix} photo ${index + 1}`}
            fill
            className="object-cover transition duration-500 hover:scale-[1.03]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </li>
      ))}
    </ul>
  );
}
