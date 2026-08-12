import Image from "next/image";
import { Heading, Text } from "@/components/atoms/Typography";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/constants/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <blockquote
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-surface-elevated/95 p-6 pl-7 shadow-[var(--shadow-soft)] transition-[border-color,transform] duration-300 motion-safe:hover:-translate-y-0.5 hover:border-gold/35 sm:p-7 sm:pl-8",
        className,
      )}
    >
      <span
        className="absolute inset-y-0 left-0 w-[3px] bg-gold/55 transition-[background-color,width] duration-300 group-hover:w-1 group-hover:bg-gold"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -top-2 left-6 font-display text-[4.25rem] leading-none text-gold/30 transition-colors duration-300 group-hover:text-gold/45 sm:left-7"
        aria-hidden
      >
        “
      </span>

      <Text className="relative mt-7 flex-1 text-pretty text-white/92" size="lg">
        <span className="italic leading-relaxed">{testimonial.quote}</span>
      </Text>

      <footer className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
        <span className="relative size-12 shrink-0 overflow-hidden rounded-full border border-gold/40 bg-void">
          <Image
            src={testimonial.image}
            alt=""
            fill
            className="object-cover object-top"
            sizes="48px"
          />
        </span>
        <div>
          <Heading level={4} as="cite" className="not-italic text-white">
            {testimonial.name}
          </Heading>
          <p className="mt-0.5 text-sm text-gold/85">{testimonial.role}</p>
        </div>
      </footer>
    </blockquote>
  );
}
