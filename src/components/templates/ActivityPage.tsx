import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ImageGrid } from "@/components/molecules/PageBlocks";
import { ScriptureBand } from "@/components/molecules/ScriptureBand";
import { StoryBeats } from "@/components/molecules/StoryBeats";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";

type ActivityBeat = {
  title: string;
  body: string;
};

type ActivityPageProps = {
  title: string;
  eyebrow?: string;
  description: string;
  body: string;
  storyTitle?: string;
  scripture?: { verse: string; reference: string };
  beats?: readonly ActivityBeat[];
  closing?: string;
  image: string;
  contentImage?: string;
  imageClassName?: string;
  slideshow?: boolean;
  outline?: string;
  atmosphere?: string;
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  gallery?: string[];
  galleryAlt?: string;
  aside?: ReactNode;
};

export function ActivityPage({
  title,
  eyebrow = "Activities",
  description,
  body,
  storyTitle,
  scripture,
  beats,
  closing,
  image,
  contentImage,
  imageClassName,
  slideshow = true,
  outline,
  atmosphere = atmospheres.washA,
  cta,
  secondaryCta,
  gallery,
  galleryAlt,
  aside,
}: ActivityPageProps) {
  const sideImage = contentImage ?? image;
  const shortTitle = title.replace(/\s+\d{4}$/, "");
  const watermark =
    outline ??
    shortTitle
      .trim()
      .split(/\s+/)[0]
      ?.replace(/[^A-Za-z0-9]/g, "")
      .toUpperCase()
      .slice(0, 10) ??
    "CAMPUS";
  const chapterTitle = storyTitle ?? `Why ${shortTitle} matters`;

  return (
    <SitePage
      title={title}
      eyebrow={eyebrow}
      description={description}
      outline={watermark}
      image={image}
      imageClassName={imageClassName}
      slideshow={slideshow}
      bleed
    >
      <StoryChapter
        eyebrow="The chapter"
        title={chapterTitle}
        intro={body}
        outline={watermark}
        image={sideImage}
        imageAlt={title}
      >
        <div className="mb-4">
          <StoryArrow />
        </div>
        {cta ? (
          <div className="flex flex-wrap gap-3">
            <Button href={cta.href}>{cta.label}</Button>
            <Button
              href={secondaryCta?.href ?? "/contact"}
              variant="secondary"
            >
              {secondaryCta?.label ?? "Contact us"}
            </Button>
          </div>
        ) : null}
        {aside}
      </StoryChapter>

      {scripture ? (
        <ScriptureBand
          verse={scripture.verse}
          reference={scripture.reference}
        />
      ) : null}

      {beats?.length ? (
        <StoryChapter
          mist
          eyebrow="In this story"
          title="What this chapter holds"
          outline="HEART"
        >
          <StoryBeats beats={beats} />
        </StoryChapter>
      ) : null}

      <section className="relative overflow-x-hidden py-16 sm:py-20">
        <Image
          src={atmosphere}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-50/80" />
        <OutlineWord className="right-0 top-4 text-[12vw] lg:text-[6rem]">
          NEXT
        </OutlineWord>
        <StoryArrow
          flip
          className="absolute bottom-10 left-6 hidden lg:block"
        />
        <div className="container-wide relative z-10 max-w-2xl">
          <ParagraphReveal>
            <p className="eyebrow text-brand-700">Take a step</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text={`Join the ${shortTitle} story`}
            className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            delay={0.08}
          />
          <ParagraphReveal delay={0.18} className="mt-5">
            <p className="text-base leading-7 text-ink-soft">
              {closing ??
                "Whether you are new or returning, there is room for you in this chapter of Campus GEM life."}
            </p>
          </ParagraphReveal>
          {cta ? (
            <ParagraphReveal delay={0.28} className="mt-8 flex flex-wrap gap-3">
              <Button href={cta.href}>{cta.label}</Button>
              <Button href="/activities" variant="secondary">
                All activities
              </Button>
            </ParagraphReveal>
          ) : null}
        </div>
      </section>

      {gallery?.length ? (
        <StoryChapter
          mist
          eyebrow="Moments"
          title="Scenes from the journey"
          outline="MOMENTS"
          intro={`Photographs from ${shortTitle} — worship, friendship, and formation.`}
          fullWidthChildren
        >
          <ImageGrid images={[...gallery]} altPrefix={galleryAlt ?? title} />
        </StoryChapter>
      ) : null}

      <div className="pb-4">
        <CtaSection />
      </div>
    </SitePage>
  );
}
