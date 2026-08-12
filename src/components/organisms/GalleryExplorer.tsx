"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Heading, Text } from "@/components/atoms/Typography";
import type { GalleryAlbum } from "@/constants/media";
import { easeOutSoft, fadeUpSoft, staggerFast } from "@/lib/motion";
import { cn } from "@/lib/cn";

type GalleryExplorerProps = {
  albums: GalleryAlbum[];
};

type FilterId = "all" | string;

export function GalleryExplorer({ albums }: GalleryExplorerProps) {
  const [filter, setFilter] = useState<FilterId>("all");
  const [lightbox, setLightbox] = useState<{
    images: readonly string[];
    index: number;
    label: string;
  } | null>(null);
  const reduce = useReducedMotion();
  const tablistId = useId();

  const filters = useMemo(
    () => [
      {
        id: "all" as const,
        label: "All years",
        description: "Every season of Campus GEM life in one place.",
        count: albums.reduce((sum, album) => sum + album.images.length, 0),
      },
      ...albums.map((album) => ({
        id: album.id,
        label: album.label,
        description: album.description,
        count: album.images.length,
      })),
    ],
    [albums],
  );

  const active = filters.find((item) => item.id === filter) ?? filters[0];

  const visibleAlbums = useMemo(() => {
    if (filter === "all") return albums;
    return albums.filter((album) => album.id === filter);
  }, [albums, filter]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") {
        setLightbox((current) =>
          current
            ? {
                ...current,
                index: (current.index + 1) % current.images.length,
              }
            : current,
        );
      }
      if (event.key === "ArrowLeft") {
        setLightbox((current) =>
          current
            ? {
                ...current,
                index:
                  (current.index - 1 + current.images.length) %
                  current.images.length,
              }
            : current,
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
  }, [lightbox]);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div
          role="tablist"
          aria-label="Filter gallery by year"
          id={tablistId}
          className="flex flex-wrap gap-2 border-b border-white/10 pb-4"
        >
          {filters.map((item) => {
            const selected = item.id === filter;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                className={cn(
                  "cursor-pointer rounded-[var(--radius-sm)] px-3.5 py-2 text-sm font-semibold transition-colors duration-200",
                  selected
                    ? "bg-gold text-void"
                    : "border border-white/12 text-ink-soft hover:border-gold/40 hover:text-gold-soft",
                )}
                onClick={() => setFilter(item.id)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
                    return;
                  }
                  event.preventDefault();
                  const index = filters.findIndex((entry) => entry.id === item.id);
                  const next =
                    event.key === "ArrowRight"
                      ? filters[(index + 1) % filters.length]
                      : filters[(index - 1 + filters.length) % filters.length];
                  setFilter(next.id);
                }}
              >
                {item.label}
                <span className="ml-2 text-xs opacity-70">{item.count}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <Heading level={3} as="h2" className="text-ink">
              {active.label}
            </Heading>
            <Text className="mt-2 max-w-2xl" muted>
              {active.description}
            </Text>
          </div>
          <Text size="sm" muted>
            {active.count} {active.count === 1 ? "photo" : "photos"}
          </Text>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 8 }}
          transition={easeOutSoft}
          className="space-y-14"
        >
          {visibleAlbums.map((album) => (
            <section
              key={album.id}
              aria-labelledby={`gallery-year-${album.id}`}
              className="space-y-5"
            >
              {filter === "all" ? (
                <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-3">
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">
                      Year
                    </p>
                    <Heading
                      level={3}
                      as="h3"
                      id={`gallery-year-${album.id}`}
                      className="mt-1 text-ink"
                    >
                      {album.label}
                    </Heading>
                    <Text className="mt-1" muted size="sm">
                      {album.description}
                    </Text>
                  </div>
                  <Text size="sm" muted>
                    {album.images.length}
                  </Text>
                </div>
              ) : null}

              <motion.ul
                className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4"
                initial={reduce ? false : "hidden"}
                animate="visible"
                variants={reduce ? undefined : staggerFast}
              >
                {album.images.map((src, index) => (
                  <motion.li
                    key={src}
                    variants={reduce ? undefined : fadeUpSoft}
                  >
                    <button
                      type="button"
                      className="group relative aspect-square w-full cursor-pointer overflow-hidden rounded-[var(--radius-sm)] bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      onClick={() =>
                        setLightbox({
                          images: album.images,
                          index,
                          label: album.label,
                        })
                      }
                      aria-label={`Open ${album.label} photo ${index + 1}`}
                    >
                      <Image
                        src={src}
                        alt={`Campus GEM ${album.label} photo ${index + 1}`}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <span
                        className="pointer-events-none absolute inset-0 bg-void/0 transition duration-200 group-hover:bg-void/25"
                        aria-hidden
                      />
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </section>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-void/92 p-4 backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={easeOutSoft}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.label} photo viewer`}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 cursor-pointer rounded-[var(--radius-sm)] border border-white/15 px-3 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-gold/40 hover:text-gold"
              onClick={() => setLightbox(null)}
            >
              Close
            </button>

            <button
              type="button"
              className="absolute left-3 top-1/2 hidden -translate-y-1/2 cursor-pointer rounded-[var(--radius-sm)] border border-white/15 px-3 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-gold/40 hover:text-gold sm:inline-flex"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                setLightbox((current) =>
                  current
                    ? {
                        ...current,
                        index:
                          (current.index - 1 + current.images.length) %
                          current.images.length,
                      }
                    : current,
                );
              }}
            >
              Prev
            </button>

            <button
              type="button"
              className="absolute right-3 top-1/2 hidden -translate-y-1/2 cursor-pointer rounded-[var(--radius-sm)] border border-white/15 px-3 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-gold/40 hover:text-gold sm:inline-flex"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                setLightbox((current) =>
                  current
                    ? {
                        ...current,
                        index: (current.index + 1) % current.images.length,
                      }
                    : current,
                );
              }}
            >
              Next
            </button>

            <motion.div
              className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-[var(--radius-md)] bg-surface"
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              transition={easeOutSoft}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={lightbox.images[lightbox.index]}
                alt={`${lightbox.label} photo ${lightbox.index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 64rem"
                priority
              />
            </motion.div>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-medium text-ink-soft">
              {lightbox.label} · {lightbox.index + 1} / {lightbox.images.length}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
