import type { ReactNode } from "react";
import { Container } from "@/components/atoms/Container";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { Heading, Text } from "@/components/atoms/Typography";
import { HeroBackdrop } from "@/components/molecules/HeroBackdrop";
import { Footer } from "@/components/organisms/Footer";
import { Navbar } from "@/components/organisms/Navbar";
import { cn } from "@/lib/cn";

type SitePageProps = {
  title: string;
  description: string;
  eyebrow?: string;
  /** Oversized outline watermark (story cue). Defaults from title. */
  outline?: string;
  image?: string;
  images?: readonly string[];
  slideshow?: boolean;
  imageClassName?: string;
  children: ReactNode;
  narrow?: boolean;
  /**
   * When true, children own their layout (StoryChapter bands).
   * Default wraps content in a site container.
   */
  bleed?: boolean;
};

function defaultOutline(title: string) {
  const word = title.trim().split(/\s+/)[0] ?? "Story";
  return word.replace(/[^A-Za-z0-9]/g, "").slice(0, 12).toUpperCase() || "STORY";
}

/**
 * Interior page shell — every route opens as a story chapter:
 * full-bleed atmospheric hero, outline watermark, then narrative body.
 */
export function SitePage({
  title,
  description,
  eyebrow,
  outline,
  image,
  images,
  slideshow = true,
  imageClassName,
  children,
  narrow = false,
  bleed = false,
}: SitePageProps) {
  const watermark = outline ?? defaultOutline(title);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="grain relative isolate flex min-h-[42vh] overflow-hidden text-white sm:min-h-[48vh] lg:min-h-[52vh]">
          <HeroBackdrop
            image={image}
            images={images}
            slideshow={slideshow}
            imageClassName={imageClassName}
          />

          <Container className="relative z-10 flex w-full flex-col justify-end pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20">
            {eyebrow ? (
              <p className="eyebrow mb-4 text-brand-200">{eyebrow}</p>
            ) : null}
            <Heading level={1} className="max-w-3xl text-white sm:text-6xl">
              {title}
            </Heading>
            <Text size="lg" className="mt-5 max-w-xl text-pretty text-white/80">
              {description}
            </Text>
          </Container>

          <OutlineWord
            tone="light"
            className="bottom-0 right-0 text-[18vw] sm:text-[12vw]"
          >
            {watermark}
          </OutlineWord>
        </section>

        {bleed ? (
          <div className="bg-white">{children}</div>
        ) : (
          <section className="bg-white pb-[var(--section-y)] pt-10 sm:pt-14">
            <Container className={cn(narrow && "max-w-2xl")}>{children}</Container>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
