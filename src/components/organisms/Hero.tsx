"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";

const HERO_FACES = [
  "/images/camp/camp-moment-06.jpg",
  "/images/camp/camp-moment-03.jpg",
  "/images/camp/camp-moment-01.jpg",
  "/images/camp/camp-moment-05.jpg",
  "/images/community.jpg",
] as const;

const SLIDE_MS = 7500;
const SLIDE_TRANSITION = {
  duration: 1.5,
  ease: [0.22, 1, 0.36, 1] as const,
};

/**
 * Story-first hero: brand signal, one emotional hook, faces, one CTA group.
 */
export function Hero({
  support = "A Christ-centered family where Youth belong, grow, and carry the flame beyond campus walls.",
}: {
  tagline?: string;
  headline?: string[];
  support?: string;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const active = HERO_FACES[index % HERO_FACES.length] ?? HERO_FACES[0];

  useEffect(() => {
    if (reduce || HERO_FACES.length < 2) return;
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const elapsed = now - started;
      setProgress(Math.min(1, elapsed / SLIDE_MS));
      if (elapsed >= SLIDE_MS) {
        setIndex((current) => (current + 1) % HERO_FACES.length);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [index, reduce]);

  return (
    <section
      className="grain relative flex min-h-[100svh] items-end overflow-hidden sm:items-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={SLIDE_TRANSITION}
          >
            <div className={`absolute inset-0 ${reduce ? "" : "ken-burns"}`}>
              <Image
                src={active}
                alt=""
                fill
                priority={index === 0}
                className="object-cover object-[center_24%] sm:object-[center_28%]"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hero-veil absolute inset-0" aria-hidden />

      <OutlineWord
        tone="light"
        className="bottom-0 right-0 text-[22vw] sm:text-[14vw]"
      >
        GEM
      </OutlineWord>

      <div className="container-wide relative z-10 w-full pb-28 pt-32 sm:pb-32 sm:pt-36">
        <div className="max-w-3xl">
          <ParagraphReveal immediate>
            <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Campus <span className="text-brand-300">GEM</span>
            </p>
          </ParagraphReveal>

          <StoryArrow tone="light" className="mt-5" />

          <TextReveal
            as="h1"
            text="You were made for more than the noise."
            className="font-display mt-5 text-[2.35rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            delay={0.12}
            stagger={0.045}
            immediate
          />
          <span id="hero-heading" className="sr-only">
            You were made for more than the noise.
          </span>

          <ParagraphReveal delay={0.45} immediate>
            <p className="mt-6 max-w-md text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {support}
            </p>
          </ParagraphReveal>

          <ParagraphReveal
            delay={0.58}
            immediate
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="/contact" size="lg">
              Find your place
            </Button>
            <Button href="/about" size="lg" variant="ghost">
              Our story
            </Button>
          </ParagraphReveal>
        </div>
      </div>

      {!reduce && HERO_FACES.length > 1 ? (
        <div
          className="absolute bottom-8 left-1/2 z-10 flex w-[min(16rem,70vw)] -translate-x-1/2 flex-col items-center gap-3"
          aria-hidden
        >
          <div className="flex w-full gap-1.5">
            {HERO_FACES.map((src, i) => (
              <span
                key={src}
                className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-white/25"
              >
                <span
                  className="absolute inset-y-0 left-0 bg-brand-300 transition-[width] duration-100 ease-linear"
                  style={{
                    width:
                      i < index
                        ? "100%"
                        : i === index
                          ? `${progress * 100}%`
                          : "0%",
                  }}
                />
              </span>
            ))}
          </div>
          <a
            href="#story"
            className="eyebrow text-[10px] tracking-[0.32em] text-white/55 transition-colors hover:text-white"
          >
            Scroll into the story
          </a>
        </div>
      ) : null}
    </section>
  );
}
