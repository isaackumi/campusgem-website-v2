"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Text } from "@/components/atoms/Typography";
import type { HallOfFameEntry } from "@/constants/media";
import { easeOutSoft, fadeUpSoft, staggerFast } from "@/lib/motion";
import { cn } from "@/lib/cn";

type HallOfFameExplorerProps = {
  entries: HallOfFameEntry[];
};

export function HallOfFameExplorer({ entries }: HallOfFameExplorerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const active = activeIndex === null ? null : entries[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % entries.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + entries.length) % entries.length,
        );
      }
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, entries.length]);

  if (!entries.length) {
    return <Text muted>Portraits for the Hall of Fame are coming soon.</Text>;
  }

  return (
    <>
      <motion.ul
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={reduce ? undefined : staggerFast}
      >
        {entries.map((entry, index) => (
          <motion.li
            key={entry.id}
            variants={reduce ? undefined : fadeUpSoft}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-white/10 bg-surface text-left transition-[border-color,transform] duration-300",
                "motion-safe:hover:-translate-y-0.5 hover:border-gold/40",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
              )}
              aria-label={`Open portrait of ${entry.name}`}
            >
              <span className="relative aspect-[3/4] w-full overflow-hidden bg-void">
                <Image
                  src={entry.src}
                  alt={entry.name}
                  fill
                  className="object-cover object-top transition duration-500 motion-safe:group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-void/80 via-void/10 to-transparent opacity-90 transition duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </span>
              <span className="absolute inset-x-0 bottom-0 space-y-0.5 p-3 sm:p-4">
                <span className="block font-sans text-sm font-bold text-white sm:text-base">
                  {entry.name}
                </span>
                {entry.note ? (
                  <span className="block text-[0.7rem] font-medium leading-snug text-gold/90 sm:text-xs">
                    {entry.note}
                  </span>
                ) : null}
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <AnimatePresence>
        {active && activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-void/94 p-4 backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={easeOutSoft}
            role="dialog"
            aria-modal="true"
            aria-label={`Portrait of ${active.name}`}
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 cursor-pointer rounded-sm border border-white/15 px-3 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-gold/40 hover:text-gold"
              onClick={() => setActiveIndex(null)}
            >
              Close
            </button>

            <button
              type="button"
              className="absolute left-3 top-1/2 hidden -translate-y-1/2 cursor-pointer rounded-sm border border-white/15 px-3 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-gold/40 hover:text-gold sm:inline-flex"
              aria-label="Previous portrait"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex(
                  (activeIndex - 1 + entries.length) % entries.length,
                );
              }}
            >
              Prev
            </button>

            <button
              type="button"
              className="absolute right-3 top-1/2 hidden -translate-y-1/2 cursor-pointer rounded-sm border border-white/15 px-3 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-gold/40 hover:text-gold sm:inline-flex"
              aria-label="Next portrait"
              onClick={(event) => {
                event.stopPropagation();
                setActiveIndex((activeIndex + 1) % entries.length);
              }}
            >
              Next
            </button>

            <motion.div
              className="relative flex max-h-[min(88svh,52rem)] w-full max-w-3xl flex-col overflow-hidden rounded-md bg-surface"
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              transition={easeOutSoft}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[3/4] w-full max-h-[min(72svh,44rem)] bg-void sm:aspect-auto sm:h-[min(72svh,44rem)]">
                <Image
                  src={active.src}
                  alt={active.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 48rem"
                  priority
                />
              </div>
              <div className="border-t border-white/10 px-4 py-3 sm:px-5">
                <p className="font-sans text-base font-bold text-ink">
                  {active.name}
                </p>
                {active.note ? (
                  <p className="mt-1 text-sm text-gold/90">{active.note}</p>
                ) : null}
                <p className="mt-1 text-xs font-medium text-ink-muted">
                  {activeIndex + 1} / {entries.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
