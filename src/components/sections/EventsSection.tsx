import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import type { EventItem } from "@/constants/events";

export function EventsSection({ events }: { events: EventItem[] }) {
  const featured = events[0];
  const secondary = events[1];

  if (!featured) return null;

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="events-heading"
    >
      <div className="relative min-h-[70vh] overflow-hidden text-white sm:min-h-[75vh]">
        <Image
          src={featured.image}
          alt=""
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <OutlineWord
          tone="light"
          className="right-0 top-6 text-[16vw] lg:text-[8rem]"
        >
          NEXT
        </OutlineWord>
        <StoryArrow
          tone="light"
          flip
          className="absolute bottom-20 right-8 hidden lg:block"
        />

        <div className="container-wide relative z-10 flex min-h-[70vh] flex-col justify-end py-16 sm:min-h-[75vh] sm:py-20">
          <ParagraphReveal>
            <p className="eyebrow text-brand-200">Gather · {featured.date}</p>
          </ParagraphReveal>
          <TextReveal
            as="h2"
            text={featured.title}
            className="font-display mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl"
            delay={0.08}
          />
          <span id="events-heading" className="sr-only">
            {featured.title}
          </span>
          <ParagraphReveal delay={0.2}>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
              {featured.summary}
            </p>
          </ParagraphReveal>
          <ParagraphReveal delay={0.28} className="mt-8 flex flex-wrap gap-3">
            {featured.cta ? (
              <Button
                href={featured.cta.href}
                variant="inverse"
                {...(featured.cta.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {featured.cta.label}
              </Button>
            ) : null}
            <Button href={featured.href} variant="ghost">
              Camp details
            </Button>
            <Button href="/events" variant="ghost">
              All gatherings
            </Button>
          </ParagraphReveal>
        </div>
      </div>

      {secondary ? (
        <div className="bg-white py-12 sm:py-16">
          <div className="container-wide grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <ParagraphReveal>
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
                <Image
                  src={secondary.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ParagraphReveal>
            <div>
              <ParagraphReveal>
                <p className="eyebrow text-brand-600">{secondary.date}</p>
              </ParagraphReveal>
              <TextReveal
                as="h3"
                text={secondary.title}
                className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
                delay={0.06}
              />
              <ParagraphReveal delay={0.15}>
                <p className="mt-4 text-base leading-7 text-ink-soft">
                  {secondary.summary}
                </p>
              </ParagraphReveal>
              <ParagraphReveal delay={0.22} className="mt-6">
                <Button href={secondary.href}>Find out more</Button>
              </ParagraphReveal>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
