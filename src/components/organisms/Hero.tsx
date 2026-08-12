"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Heading, Text } from "@/components/atoms/Typography";
import { siteConfig } from "@/constants/site";
import { easeOutExpo, fadeUp, stagger } from "@/lib/motion";

function subscribe() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export function Hero() {
  const reduce = useReducedMotion();
  const ready = useIsClient();

  const staticContent = (
    <div className="max-w-3xl">
      <p className="mb-4 font-display text-[clamp(2.4rem,7vw,4.75rem)] leading-[0.95] tracking-[-0.03em] text-white">
        {siteConfig.name}
      </p>
      <Heading
        level={1}
        as="h1"
        className="max-w-2xl text-[clamp(1.7rem,3.8vw,2.75rem)] text-white/95"
      >
        Raising Christ-centered leaders for campus and beyond
      </Heading>
      <Text className="mt-5 max-w-xl text-white/78" size="lg">
        A youthful ministry where students learn, connect, and grow in faith,
        excellence, and purpose.
      </Text>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/about" size="lg">
          Who we are
        </Button>
        <Button href="/events" size="lg" variant="on-dark">
          Upcoming events
        </Button>
      </div>
    </div>
  );

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
      <Image
        src="/images/hero.jpg"
        alt="Campus GEM community gathered in worship and fellowship"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="hero-veil absolute inset-0" aria-hidden />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-32">
        {ready && !reduce ? (
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              transition={easeOutExpo}
              className="mb-4 font-display text-[clamp(2.4rem,7vw,4.75rem)] leading-[0.95] tracking-[-0.03em] text-white"
            >
              {siteConfig.name}
            </motion.p>
            <motion.div variants={fadeUp} transition={easeOutExpo}>
              <Heading
                level={1}
                as="h1"
                className="max-w-2xl text-[clamp(1.7rem,3.8vw,2.75rem)] text-white/95"
              >
                Raising Christ-centered leaders for campus and beyond
              </Heading>
            </motion.div>
            <motion.div variants={fadeUp} transition={easeOutExpo}>
              <Text className="mt-5 max-w-xl text-white/78" size="lg">
                A youthful ministry where students learn, connect, and grow in
                faith, excellence, and purpose.
              </Text>
            </motion.div>
            <motion.div
              variants={fadeUp}
              transition={easeOutExpo}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button href="/about" size="lg">
                Who we are
              </Button>
              <Button href="/events" size="lg" variant="on-dark">
                Upcoming events
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          staticContent
        )}
      </Container>
    </section>
  );
}
