import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { aboutIntro } from "@/constants/site";

const pillars = [
  {
    title: "Faith",
    body: "Christ-centered teaching that equips Youth for spiritual growth.",
  },
  {
    title: "Excellence",
    body: "Academic excellence pursued as worship and a witness on campus.",
  },
  {
    title: "Leadership",
    body: "Mentoring that raises strategic, transformational young leaders.",
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="story"
      className="relative overflow-x-hidden bg-white py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <OutlineWord className="left-1/2 top-6 -translate-x-1/2 text-center text-[14vw] lg:text-[8rem]">
        STORY
      </OutlineWord>

      <div className="container-wide relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <ParagraphReveal>
              <p className="eyebrow text-brand-600">Chapter one</p>
            </ParagraphReveal>
            <TextReveal
              as="h2"
              text="A ministry centred on Christ"
              className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-5xl"
              delay={0.06}
            />
            <span id="about-heading" className="sr-only">
              A ministry centred on Christ
            </span>
            <StoryArrow className="mt-5" />
            <ParagraphReveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
                {aboutIntro}
              </p>
            </ParagraphReveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {pillars.map((pillar, i) => (
                <ParagraphReveal key={pillar.title} delay={0.12 + i * 0.08}>
                  <p className="font-mono text-[11px] tracking-[0.28em] text-brand-600">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-bold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">
                    {pillar.body}
                  </p>
                </ParagraphReveal>
              ))}
            </div>

            <ParagraphReveal delay={0.4} className="mt-10">
              <Button href="/about">Read who we are</Button>
            </ParagraphReveal>
          </div>

          <ParagraphReveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-float sm:aspect-[5/6]">
              <Image
                src="/images/leader.jpg"
                alt="Campus GEM leadership and Youth"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </ParagraphReveal>
        </div>
      </div>
    </section>
  );
}
