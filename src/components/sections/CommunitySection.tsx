import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { testimonials } from "@/constants/testimonials";

export function CommunitySection() {
  return (
    <section
      className="relative isolate overflow-hidden py-20 sm:py-28"
      aria-labelledby="community-heading"
    >
      <Image
        src="/images/community.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/82" aria-hidden />
      <OutlineWord
        tone="light"
        className="right-0 top-6 text-[14vw] lg:text-[8rem]"
      >
        FAMILY
      </OutlineWord>

      <div className="container-wide relative z-10">
        <ParagraphReveal>
          <p className="eyebrow text-brand-200">Community</p>
        </ParagraphReveal>
        <TextReveal
          as="h2"
          text="Stories from the family"
          className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl"
          delay={0.08}
        />
        <span id="community-heading" className="sr-only">
          Stories from the family
        </span>
        <StoryArrow tone="light" className="mt-5" />
        <ParagraphReveal delay={0.2}>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/75">
            Young people discovering belonging, calling, and courage in Christ.
          </p>
        </ParagraphReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map((item, i) => (
            <ParagraphReveal key={item.id} delay={0.1 * i}>
              <TestimonialCard testimonial={item} />
            </ParagraphReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
