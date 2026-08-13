"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Text } from "@/components/atoms/Typography";
import { campMoments } from "@/constants/media";
import { siteConfig } from "@/constants/site";
import { easeOutExpo, fadeUp, stagger } from "@/lib/motion";

const SLIDE_MS = 5500;
const SLIDE_TRANSITION = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Hero() {
  const reduce = useReducedMotion();
  const slides = [...campMoments];
  const [index, setIndex] = useState(0);
  const active = slides[index % slides.length] ?? slides[0];

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduce, slides.length]);

  return (
    <section
      className="relative isolate min-h-svh overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={reduce ? false : { opacity: 0, scale: 1.04, x: "4%" }}
            animate={{ opacity: 1, scale: 1, x: "0%" }}
            exit={reduce ? undefined : { opacity: 0, scale: 1.02, x: "-4%" }}
            transition={SLIDE_TRANSITION}
          >
            <Image
              src={active}
              alt=""
              fill
              priority={index === 0}
              className="object-cover object-[center_28%] sm:object-[center_26%]"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Soft left text scrub; keep faces luminous on the right */}
      <div
        className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,7,8,0.9)_0%,rgba(7,7,8,0.72)_32%,rgba(7,7,8,0.28)_56%,rgba(7,7,8,0.12)_76%,rgba(7,7,8,0.35)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,8,0.88)_0%,rgba(7,7,8,0.28)_26%,transparent_52%)]"
        aria-hidden
      />

      <Container
        wide
        className="relative flex min-h-svh items-end pb-14 pt-28 sm:pb-16 lg:items-center lg:pb-20 lg:pt-28"
      >
        <motion.div
          className="relative z-10 w-full max-w-2xl xl:max-w-3xl"
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={reduce ? undefined : stagger}
        >
          <motion.p
            variants={reduce ? undefined : fadeUp}
            transition={easeOutExpo}
            className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={reduce ? undefined : fadeUp}
            transition={easeOutExpo}
            className="mt-5 font-display text-[clamp(2.5rem,6.2vw,5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:mt-6"
          >
            Raising leaders.
            <span className="block">Revealing Christ.</span>
            <span className="block">Restoring purpose.</span>
          </motion.h1>

          <motion.div variants={reduce ? undefined : fadeUp} transition={easeOutExpo}>
            <Text className="mt-5 max-w-md text-pretty text-white/80 sm:mt-6" size="lg">
              A Christ-centered movement equipping students to learn, connect,
              and grow beyond campus walls.
            </Text>
          </motion.div>

          <motion.div
            variants={reduce ? undefined : fadeUp}
            transition={easeOutExpo}
            className="mt-7 flex flex-wrap gap-3 sm:mt-8"
          >
            <Button href="/contact" size="lg">
              Find your place
            </Button>
            <Button
              href="/give"
              size="lg"
              variant="outline"
              className="border-white/45 text-white hover:border-gold/55 hover:bg-white/5 hover:text-gold-soft"
            >
              Donate
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {slides.length > 1 && !reduce ? (
        <div
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 lg:bottom-8"
          aria-hidden
        >
          {slides.map((src, i) => (
            <span
              key={src}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-white/35"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
