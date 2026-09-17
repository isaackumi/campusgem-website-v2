import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import type { Ministry } from "@/constants/ministries";

export function MinistriesSection({ ministries }: { ministries: Ministry[] }) {
  const featured = ministries[0];
  const rest = ministries.slice(1);

  return (
    <section
      className="relative overflow-x-hidden bg-mist py-20 sm:py-28"
      aria-labelledby="ministries-heading"
    >
      <OutlineWord className="right-0 top-8 text-[14vw] lg:text-[7rem]">
        PATH
      </OutlineWord>

      <div className="container-wide relative z-10">
        <ParagraphReveal>
          <p className="eyebrow text-brand-600">Pathways</p>
        </ParagraphReveal>
        <TextReveal
          as="h2"
          text="Ways we grow together"
          className="font-display mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-5xl"
          delay={0.06}
        />
        <span id="ministries-heading" className="sr-only">
          Ways we grow together
        </span>
        <StoryArrow className="mt-5" />
        <ParagraphReveal delay={0.15}>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-soft">
            Camps, feasts, mentoring — doors into the Campus GEM family.
          </p>
        </ParagraphReveal>

        {featured ? (
          <ParagraphReveal delay={0.2} className="mt-12">
            <Link
              href={featured.href}
              className="group relative grid overflow-hidden rounded-3xl bg-ink text-white lg:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="relative min-h-[22rem] lg:min-h-[28rem]">
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/40" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="eyebrow text-brand-200">Featured</p>
                <h3 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/75">
                  {featured.summary}
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-brand-200 transition-colors group-hover:text-white">
                  Enter this chapter →
                </span>
              </div>
            </Link>
          </ParagraphReveal>
        ) : null}

        <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {rest.map((ministry, i) => (
            <ParagraphReveal key={ministry.id} delay={0.08 * i}>
              <Link
                href={ministry.href}
                className="group relative block overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={ministry.image}
                    alt=""
                    fill
                    className="object-cover brightness-[0.78] transition duration-700 group-hover:scale-[1.04] group-hover:brightness-[0.7]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-bold text-white">
                    {ministry.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/80">
                    {ministry.summary}
                  </p>
                </div>
              </Link>
            </ParagraphReveal>
          ))}
        </div>

        <ParagraphReveal delay={0.25} className="mt-10">
          <Button href="/ministries" variant="outline">
            All ministries
          </Button>
        </ParagraphReveal>
      </div>
    </section>
  );
}
