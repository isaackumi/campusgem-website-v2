import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/atoms/Container";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { cn } from "@/lib/cn";

type StoryChapterProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  outline?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  mist?: boolean;
  className?: string;
  titleId?: string;
  align?: "left" | "center";
  /** Full-bleed children (gallery grids) sit outside the copy column. */
  fullWidthChildren?: boolean;
};

/**
 * One page chapter: outline watermark + eyebrow + headline + body/media.
 */
export function StoryChapter({
  eyebrow,
  title,
  intro,
  outline,
  children,
  image,
  imageAlt,
  reverse = false,
  mist = false,
  className,
  titleId,
  align = "left",
  fullWidthChildren = false,
}: StoryChapterProps) {
  const hasMedia = Boolean(image);

  return (
    <section
      className={cn(
        "relative overflow-x-hidden py-16 sm:py-24",
        mist ? "bg-mist" : "bg-white",
        className,
      )}
      aria-labelledby={titleId}
    >
      {outline ? (
        <OutlineWord
          className={cn(
            "left-1/2 top-6 -translate-x-1/2 text-center text-[14vw] lg:top-8 lg:text-[7.5rem]",
            align === "left" && "lg:left-8 lg:translate-x-0 lg:text-left",
          )}
        >
          {outline}
        </OutlineWord>
      ) : null}

      <Container wide className="relative z-10">
        {hasMedia ? (
          <div
            className={cn(
              "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
              reverse && "lg:[&>*:first-child]:order-2",
            )}
          >
            <ChapterCopy
              eyebrow={eyebrow}
              title={title}
              intro={intro}
              titleId={titleId}
              align={align}
            >
              {!fullWidthChildren ? children : null}
            </ChapterCopy>
            <ParagraphReveal delay={0.12}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-float sm:aspect-[5/6] lg:aspect-[4/5]">
                <Image
                  src={image!}
                  alt={imageAlt || title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ParagraphReveal>
          </div>
        ) : (
          <ChapterCopy
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            titleId={titleId}
            align={align}
          >
            {!fullWidthChildren ? children : null}
          </ChapterCopy>
        )}

        {fullWidthChildren && children ? (
          <div className="relative z-10 mt-12">{children}</div>
        ) : null}
      </Container>
    </section>
  );
}

function ChapterCopy({
  eyebrow,
  title,
  intro,
  children,
  titleId,
  align,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  titleId?: string;
  align: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? (
        <ParagraphReveal>
          <p className="eyebrow text-brand-600">{eyebrow}</p>
        </ParagraphReveal>
      ) : null}
      <TextReveal
        as="h2"
        text={title}
        className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-5xl"
        delay={0.06}
      />
      {titleId ? <span id={titleId} className="sr-only">{title}</span> : null}
      {intro ? (
        <ParagraphReveal delay={0.18}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-7 text-ink-soft",
              align === "center" && "mx-auto",
            )}
          >
            {intro}
          </p>
        </ParagraphReveal>
      ) : null}
      {children ? (
        <ParagraphReveal delay={0.28} className="mt-8">
          {children}
        </ParagraphReveal>
      ) : null}
    </div>
  );
}
