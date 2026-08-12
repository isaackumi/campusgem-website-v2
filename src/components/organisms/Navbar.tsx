"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { primaryNav } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-mist/80 bg-paper/92 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link
          href="/"
          className="relative z-10 flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/30">
            <Image
              src="/images/logo.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </span>
          <span
            className={cn(
              "font-display text-xl tracking-tight sm:text-2xl",
              solid ? "text-ink" : "text-white",
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                solid
                  ? "text-ink-soft hover:text-ruby"
                  : "text-white/85 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/give" size="sm" variant={solid ? "primary" : "on-dark"}>
            Give
          </Button>
        </nav>

        <button
          type="button"
          className={cn(
            "relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] lg:hidden",
            solid ? "text-ink" : "text-white",
          )}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Open"} menu</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-current transition",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-current transition",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-current transition",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="border-t border-mist bg-paper lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <Container className="flex flex-col gap-1 py-5">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[var(--radius-md)] px-3 py-3 text-base font-medium text-ink hover:bg-mist/70"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button href="/give" className="w-full">
                  Give
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
