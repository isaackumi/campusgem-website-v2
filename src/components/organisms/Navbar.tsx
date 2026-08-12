"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { primaryNav, type NavItem } from "@/constants/navigation";
import {
  dropdownPanel, easeOutSoft, fadeUpSoft, staggerFast,
} from "@/lib/motion";
import { cn } from "@/lib/cn";

function isActive(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href || pathname.startsWith(`${item.href}/`)) return true;
  return Boolean(item.children?.some((child) => pathname === child.href));
}

const navLinkClass =
  "cursor-pointer whitespace-nowrap rounded-full px-3.5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200";

function DesktopDropdown({
  item, pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = isActive(pathname, item);
  const childCount = item.children?.length ?? 0;
  const broad = childCount >= 5;

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className={cn(
          navLinkClass, active ? "text-gold" : "text-ink-soft/90 hover:text-gold-soft", )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={cn(
          navLinkClass, "inline-flex items-center gap-1.5", active || open ? "text-gold" : "text-ink-soft/90 hover:text-gold-soft", )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        {item.label}
        <motion.svg
          viewBox="0 0 12 12"
          className="h-2.5 w-2.5 opacity-70"
          fill="currentColor"
          aria-hidden
          animate={{ rotate: open ? 180 : 0 }}
          transition={reduce ? { duration: 0 } : easeOutSoft}
        >
          <path d="M2.2 4.2 6 8l3.8-3.8-.9-.9L6 6.2 3.1 3.3l-.9.9Z" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="absolute left-1/2 top-full z-50 origin-top -translate-x-1/2 pt-3"
            initial={reduce ? false : "hidden"}
            animate="visible"
            exit="exit"
            variants={reduce ? undefined : dropdownPanel}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <div
              className={cn(
                "overflow-hidden rounded-[var(--radius-lg)] border border-white/12 bg-void p-2.5 shadow-[var(--shadow-lift)]", broad ? "w-[min(32rem,72vw)]" : "w-[min(20rem,78vw)]", )}
            >
              <div className="mb-1.5 border-b border-white/8 px-3 pb-2.5 pt-1">
                <Link
                  href={item.href}
                  className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold transition-colors duration-200 hover:text-gold-soft"
                  onClick={() => setOpen(false)}
                >
                  View all {item.label}
                </Link>
              </div>

              <motion.ul
                className={cn(
                  "gap-1", broad ? "grid grid-cols-2" : "flex flex-col", )}
                initial={reduce ? false : "hidden"}
                animate="visible"
                variants={reduce ? undefined : staggerFast}
              >
                {item.children.map((child) => {
                  const childActive = pathname === child.href;
                  return (
                    <motion.li
                      key={child.href}
                      variants={reduce ? undefined : fadeUpSoft}
                    >
                      <Link
                        href={child.href}
                        className={cn(
                          "block cursor-pointer rounded-[var(--radius-md)] px-3.5 py-3 text-[0.95rem] font-semibold leading-snug transition-colors duration-200", childActive
                            ? "bg-gold-tint text-gold"
                            : "text-ink-soft hover:bg-white/[0.06] hover:text-gold-soft", )}
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const menuId = useId();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      if (event.key === "Escape") {
        setOpen(false);
        setExpanded(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 isolate border-b transition-[background-color,border-color,box-shadow] duration-300", solid
          ? "border-white/10 bg-void shadow-[0_12px_40px_-24px_rgba(0,0,0,0.85)]"
          : "border-transparent bg-gradient-to-b from-void via-void/80 to-transparent", )}
    >
      <Container
        wide
        className="relative flex h-[4.25rem] items-center justify-between gap-4 lg:h-[5rem] lg:gap-6"
      >
        <Link
          href="/"
          className="relative z-20 shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-90"
          aria-label="Campus GEM Ministries home"
        >
          <BrandLogo markClassName="h-10 w-10 lg:h-11 lg:w-11" />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 z-10 hidden max-w-[min(56rem,60vw)] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 xl:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <DesktopDropdown
              key={`${item.label}-${pathname}`}
              item={item}
              pathname={pathname}
            />
          ))}
        </nav>

        <div className="relative z-20 flex items-center gap-2.5">
          <Button href="/give" size="sm" className="hidden px-5 sm:inline-flex">
            Donate
          </Button>

          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-ink transition duration-200 hover:border-gold/40 hover:text-gold xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Open"} menu</span>
            <span className="flex w-[1.05rem] flex-col gap-1.5" aria-hidden>
              <span
                className={cn(
                  "h-px w-full origin-center rounded-full bg-current transition", open && "translate-y-[7px] rotate-45", )}
              />
              <span
                className={cn(
                  "h-px w-full rounded-full bg-current transition", open && "opacity-0", )}
              />
              <span
                className={cn(
                  "h-px w-full origin-center rounded-full bg-current transition", open && "-translate-y-[7px] -rotate-45", )}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="max-h-[calc(100svh-4.25rem)] overflow-y-auto border-t border-white/10 bg-void xl:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={easeOutSoft}
          >
            <Container className="flex flex-col gap-1 py-5">
              {primaryNav.map((item) => {
                const active = isActive(pathname, item);
                const isOpen = expanded === item.label;

                if (!item.children?.length) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        "cursor-pointer rounded-[var(--radius-md)] px-3 py-3.5 text-base font-semibold transition-colors duration-200", active
                          ? "bg-white/5 text-gold"
                          : "text-ink hover:bg-white/5", )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div key={item.label} className="rounded-[var(--radius-md)]">
                    <button
                      type="button"
                      className={cn(
                        "flex w-full cursor-pointer items-center justify-between rounded-[var(--radius-md)] px-3 py-3.5 text-left text-base font-semibold", active ? "text-gold" : "text-ink", )}
                      aria-expanded={isOpen}
                      onClick={() =>
                        setExpanded((current) =>
                          current === item.label ? null : item.label, )
                      }
                    >
                      {item.label}
                      <motion.span
                        aria-hidden
                        className="text-ink-muted"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={reduce ? { duration: 0 } : easeOutSoft}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          className="overflow-hidden"
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={
                            reduce ? undefined : { height: 0, opacity: 0 }
                          }
                          transition={easeOutSoft}
                        >
                          <div className="mb-2 ml-2 space-y-1 border-l border-white/10 pl-3">
                            <Link
                              href={item.href}
                              className="block cursor-pointer rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-semibold text-gold"
                              onClick={() => setOpen(false)}
                            >
                              View all {item.label}
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block cursor-pointer rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-semibold transition-colors duration-200", pathname === child.href
                                    ? "bg-white/5 text-gold"
                                    : "text-ink-soft hover:text-gold-soft", )}
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
              <div className="mt-3 border-t border-white/10 pt-4 sm:hidden">
                <Button href="/give" className="w-full">
                  Donate
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
