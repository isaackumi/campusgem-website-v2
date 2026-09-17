import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { atmospheres } from "@/constants/atmospheres";
import { testimonials } from "@/constants/testimonials";

/** Mid-page emotional pull — one face, one quote, no cards. */
export function StoryMomentSection() {
  const story =
    testimonials.find((t) => t.name === "Emmanuel Ntow") ?? testimonials[0];

  return (
    <section
      className="relative isolate min-h-[70vh] overflow-hidden py-24 text-white sm:min-h-[80vh] sm:py-32"
      aria-labelledby="moment-heading"
    >
      <Image
        src={atmospheres.nebula}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <Image
        src={story.image}
        alt=""
        fill
        className="object-cover object-[center_22%] opacity-50 mix-blend-luminosity sm:object-[center_18%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/65" aria-hidden />

      <OutlineWord
        tone="light"
        className="left-1/2 top-8 -translate-x-1/2 text-[16vw] lg:text-[9rem]"
      >
        BELONG
      </OutlineWord>

      <div className="container-wide relative z-10 flex min-h-[50vh] flex-col justify-center">
        <ParagraphReveal>
          <p className="eyebrow text-brand-200">From the family</p>
        </ParagraphReveal>
        <StoryArrow tone="light" className="mt-4" />
        <TextReveal
          as="h2"
          text={`“${story.quote}”`}
          className="font-display mt-6 max-w-4xl text-3xl font-bold leading-snug tracking-tight text-white sm:text-5xl lg:text-6xl"
          delay={0.1}
          stagger={0.035}
        />
        <span id="moment-heading" className="sr-only">
          {story.quote}
        </span>
        <ParagraphReveal delay={0.35} className="mt-8 flex items-center gap-4">
          <span className="relative size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-300/50">
            <Image
              src={story.image}
              alt=""
              fill
              className="object-cover object-top"
              sizes="56px"
            />
          </span>
          <span>
            <p className="text-sm font-semibold text-white/90">{story.name}</p>
            <p className="mt-1 text-sm text-white/55">{story.role}</p>
          </span>
        </ParagraphReveal>
      </div>
    </section>
  );
}
