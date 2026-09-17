"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FormEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import {
  activitiesNav,
  exploreNav,
  primaryNav,
  searchIndex,
} from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { easeOutSoft } from "@/lib/motion";
import { cn } from "@/lib/cn";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path d="M2.2 4.2 6 8l3.8-3.8-.9-.9L6 6.2 3.1 3.3l-.9.9Z" />
    </svg>
  );
}

function MenuPanel({
  items,
  onNavigate,
}: {
  items: Array<{ href: string; label: string; short?: string }>;
  onNavigate?: () => void;
}) {
  return (
    <div className="grid max-h-[min(70vh,36rem)] w-[min(36rem,calc(100vw-1.5rem))] grid-cols-1 gap-1 overflow-y-auto rounded-2xl bg-white p-4 shadow-float ring-1 ring-ink/5 sm:grid-cols-2 sm:p-5">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="group flex min-w-0 gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50"
        >
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-white">
            <GlobeIcon className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-snug text-ink">
              {item.label}
            </span>
            {item.short ? (
              <span className="mt-0.5 block text-[13px] leading-5 text-ink-soft">
                {item.short}
              </span>
            ) : null}
          </span>
        </Link>
      ))}
    </div>
  );
}

function ExploreSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 6);
    return searchIndex.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setExploreOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function go(href: string) {
    setOpen(false);
    setExploreOpen(false);
    setQuery("");
    router.push(href);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (results[0]) go(results[0].href);
  }

  return (
    <div ref={wrapRef} className="relative hidden w-full max-w-md lg:block">
      <div className="flex items-center rounded-full bg-mist ring-1 ring-ink/5">
        <div className="relative shrink-0">
          <button
            type="button"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold outline-none transition-colors",
              exploreOpen
                ? "bg-brand-50 text-brand-700"
                : "text-brand-600 hover:bg-brand-50",
            )}
            aria-expanded={exploreOpen}
            onClick={() => {
              setExploreOpen((v) => !v);
              setOpen(false);
            }}
          >
            <GlobeIcon className="h-4 w-4" />
            Explore
          </button>
          <AnimatePresence>
            {exploreOpen ? (
              <motion.div
                className="absolute left-0 z-50 pt-3"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={easeOutSoft}
              >
                <MenuPanel
                  items={exploreNav.map((i) => ({
                    href: i.href,
                    label: i.label,
                    short: i.short,
                  }))}
                  onNavigate={() => setExploreOpen(false)}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <span aria-hidden className="h-6 w-px shrink-0 bg-ink/10" />

        <form
          onSubmit={onSubmit}
          className="relative flex min-w-0 flex-1 items-center"
        >
          <SearchIcon className="pointer-events-none absolute left-3 h-4 w-4 text-ink-soft" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
              setExploreOpen(false);
            }}
            onFocus={() => {
              setOpen(true);
              setExploreOpen(false);
            }}
            placeholder={`Search ${siteConfig.name}`}
            aria-label={`Search ${siteConfig.name}`}
            className="w-full min-w-0 bg-transparent py-2.5 pl-9 pr-4 text-sm text-ink outline-none placeholder:text-ink-soft"
          />
        </form>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl bg-white shadow-float ring-1 ring-ink/5"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={easeOutSoft}
          >
            <ul className="max-h-72 overflow-auto py-2">
              {results.length === 0 ? (
                <li className="px-4 py-3 text-sm text-ink-soft">
                  No matches — try camp, give, or contact.
                </li>
              ) : (
                results.map((item) => (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => go(item.href)}
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-50"
                    >
                      <SearchIcon className="h-4 w-4 shrink-0 text-brand-500" />
                      <span className="font-medium text-ink">{item.label}</span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function ActivitiesPopover() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const active = activitiesNav.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
  );

  const clear = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  useEffect(() => () => clear(), []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
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

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => {
        clear();
        setOpen(true);
      }}
      onMouseLeave={() => {
        clear();
        closeTimer.current = setTimeout(() => setOpen(false), 120);
      }}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          open || active
            ? "bg-brand-50 text-brand-700"
            : "text-ink hover:text-brand-700",
        )}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Activities
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={reduce ? { duration: 0 } : easeOutSoft}
        >
          <ChevronIcon className="h-3.5 w-3.5" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="absolute right-0 z-50 pt-3"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={easeOutSoft}
          >
            <MenuPanel
              items={activitiesNav.map((i) => ({
                href: i.href,
                label: i.label,
                short: i.short,
              }))}
              onNavigate={() => setOpen(false)}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileQuery, setMobileQuery] = useState("");
  const reduce = useReducedMotion();
  const menuId = useId();

  const mobileResults = useMemo(() => {
    const q = mobileQuery.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q),
    );
  }, [mobileQuery]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/85 backdrop-blur-md">
      <Container
        wide
        className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 lg:gap-6"
      >
        <Link
          href="/"
          className="relative z-20 shrink-0"
          aria-label="Campus GEM Ministries home"
        >
          <BrandLogo compact />
        </Link>

        <div className="flex justify-center">
          <ExploreSearch />
        </div>

        <div className="flex items-center justify-end gap-1">
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {primaryNav.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink hover:text-brand-700",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <ActivitiesPopover />
            <Button href="/give" size="sm" className="ml-2 !py-2">
              Donate
            </Button>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-ink ring-1 ring-ink/10 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <span className="text-lg leading-none">×</span>
            ) : (
              <span className="flex w-4 flex-col gap-1" aria-hidden>
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
              </span>
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id={menuId}
            className="border-t border-ink/5 bg-white lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={easeOutSoft}
          >
            <Container className="flex flex-col gap-1 py-4">
              <form
                className="mb-3 flex items-center gap-2 rounded-full bg-mist px-3 ring-1 ring-ink/5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (mobileResults[0]) {
                    setMobileOpen(false);
                    router.push(mobileResults[0].href);
                  }
                }}
              >
                <SearchIcon className="h-4 w-4 text-ink-soft" />
                <input
                  type="search"
                  value={mobileQuery}
                  onChange={(e) => setMobileQuery(e.target.value)}
                  placeholder={`Search ${siteConfig.name}`}
                  className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-ink-soft"
                />
              </form>

              {mobileResults.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-ink-soft"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <p className="mt-2 px-3 pt-1 text-xs font-semibold uppercase tracking-wider text-ink-soft">
                Explore
              </p>
              {exploreNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <p className="mt-3 px-3 pt-1 text-xs font-semibold uppercase tracking-wider text-ink-soft">
                Activities
              </p>
              {activitiesNav.map((item) => (
                <Link
                  key={`activity-${item.href}`}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href="/give"
                className="mt-3 w-full"
                onClick={() => setMobileOpen(false)}
              >
                Donate
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
