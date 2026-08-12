"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Text } from "@/components/atoms/Typography";
import { siteConfig } from "@/constants/site";
import { easeOutExpo, fadeUp, imageReveal, stagger } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate min-h-svh overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : "hidden"}
        animate="visible"
        variants={reduce ? undefined : imageReveal}
      >
        <Image
          src="/images/hero.jpg"
          alt="Campus GEM community gathered in worship and fellowship"
          fill
          priority
          className="object-cover object-[70%_26%] sm:object-[74%_22%]"
          sizes="100vw"
        />
      </motion.div>

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
          className="relative z-10 w-full max-w-xl xl:max-w-2xl"
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
            className="mt-4 font-display text-[clamp(3.25rem,8.5vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.035em] text-balance text-white"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : fadeUp}
            transition={easeOutExpo}
            className="mt-5 max-w-lg font-display text-[clamp(1.3rem,2.4vw,1.75rem)] font-semibold leading-[1.28] tracking-[-0.02em] text-gold-soft sm:mt-6"
          >
            Raising leaders. Revealing Christ. Restoring purpose.
          </motion.p>

          <motion.div variants={reduce ? undefined : fadeUp} transition={easeOutExpo}>
            <Text className="mt-4 max-w-md text-pretty text-white/80" size="lg">
              A Christ-centered movement equipping students to learn, connect,
              and grow beyond campus walls.
            </Text>
          </motion.div>

          <motion.div
            variants={reduce ? undefined : fadeUp}
            transition={easeOutExpo}
            className="mt-7 flex flex-wrap gap-3 sm:mt-8"
          >
            <Button href="/give" size="lg">
              Donate
            </Button>
            <Button
              href="/about"
              size="lg"
              variant="outline"
              className="border-white/45 text-white hover:border-gold/55 hover:bg-white/5 hover:text-gold-soft"
            >
              Who we are
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
