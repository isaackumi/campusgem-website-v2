import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/constants/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink/55 p-6 ring-1 ring-white/20 backdrop-blur-md transition duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:ring-brand-300/40 sm:p-7",
        className,
      )}
    >
      <span
        className="absolute inset-y-0 left-0 w-1 bg-brand-400 transition-[width] duration-300 group-hover:w-1.5"
        aria-hidden
      />

      <p className="pl-3 font-display text-[1.15rem] leading-relaxed tracking-tight text-white sm:text-xl">
        “{testimonial.quote}”
      </p>

      <footer className="mt-auto flex items-center gap-3 border-t border-white/15 pt-5 pl-3">
        <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-mist ring-2 ring-white/30">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover object-top"
            sizes="48px"
          />
        </span>
        <div>
          <cite className="font-display not-italic text-base font-semibold text-white">
            {testimonial.name}
          </cite>
          <p className="mt-0.5 text-sm text-brand-200">{testimonial.role}</p>
        </div>
      </footer>
    </blockquote>
  );
}
