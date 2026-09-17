"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { campMoments } from "@/constants/media";
import { cn } from "@/lib/cn";

const SLIDE_MS = 5500;
const TRANSITION = {
  duration: 1.15,
  ease: [0.22, 1, 0.36, 1] as const,
};

type HeroBackdropProps = {
  /** Single static image when slideshow is off. */
  image?: string;
  /** Slides to rotate; defaults to camp moments. */
  images?: readonly string[];
  /** Rotate through camp (or custom) photos. Off for Bible pages. */
  slideshow?: boolean;
  imageClassName?: string;
};

export function HeroBackdrop({
  image,
  images,
  slideshow = true,
  imageClassName,
}: HeroBackdropProps) {
  const reduce = useReducedMotion();
  const slides =
    slideshow && !reduce
      ? [...(images?.length ? images : campMoments)]
      : [image ?? images?.[0] ?? campMoments[0]];

  const [index, setIndex] = useState(0);
  const active = slides[index % slides.length] ?? slides[0];

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="absolute inset-0" aria-hidden>
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={active}
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0, x: "8%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={reduce ? undefined : { opacity: 0, x: "-8%" }}
          transition={TRANSITION}
        >
          <Image
            src={active}
            alt=""
            fill
            className={cn("object-cover object-[center_28%]", imageClassName)}
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
    </div>
  );
}
