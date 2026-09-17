import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { atmospheres } from "@/constants/atmospheres";

type CtaSectionProps = {
  /** Full-bleed for landing; inset panel elsewhere. */
  bleed?: boolean;
};

export function CtaSection({ bleed = false }: CtaSectionProps) {
  const inner = (
    <>
      <Image
        src={atmospheres.nebula}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <Image
        src="/images/camp/camp-moment-01.jpg"
        alt=""
        fill
        className="object-cover object-[center_30%] opacity-40 mix-blend-luminosity"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <OutlineWord
        tone="light"
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] sm:text-[10rem]"
      >
        JOIN
      </OutlineWord>
      <StoryArrow
        tone="light"
        className="absolute left-8 top-16 hidden sm:block"
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <TextReveal
          as="h2"
          text="There is room for you here"
          className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        />
        <span id="cta-heading" className="sr-only">
          There is room for you here
        </span>
        <ParagraphReveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
            Whether you are new on campus or ready to serve, the Campus GEM
            family is waiting.
          </p>
        </ParagraphReveal>
        <ParagraphReveal
          delay={0.3}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button href="/contact" size="lg" variant="inverse">
            Get in touch
          </Button>
          <Button href="/give" size="lg" variant="ghost">
            Partner with us
          </Button>
        </ParagraphReveal>
      </div>
    </>
  );

  if (bleed) {
    return (
      <section
        className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
        aria-labelledby="cta-heading"
      >
        {inner}
      </section>
    );
  }

  return (
    <section
      className="container-wide py-16 sm:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="relative overflow-hidden rounded-3xl px-6 py-20 sm:px-10 sm:py-24">
        {inner}
      </div>
    </section>
  );
}
