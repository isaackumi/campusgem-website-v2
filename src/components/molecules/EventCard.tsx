import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "@/constants/events";
import { Heading, Text } from "@/components/atoms/Typography";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group grid overflow-hidden rounded-[var(--radius-lg)] border border-white/8 bg-surface shadow-[var(--shadow-soft)] transition duration-300 hover:border-gold/30 md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-48 overflow-hidden md:min-h-full">
        <Image
          src={event.image}
          alt=""
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {event.date}
        </p>
        <Heading level={3} as="h3" className="text-ink">
          <Link href={event.href} className="transition-colors hover:text-gold-soft">
            {event.title}
          </Link>
        </Heading>
        <Text className="text-ink-muted">{event.summary}</Text>
        <div className="mt-2 space-y-1 text-sm text-ink-muted">
          <p>{event.time}</p>
          <p>{event.location}</p>
        </div>
        <Link
          href={event.href}
          className="mt-3 inline-flex text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
        >
          Find out more
          <span aria-hidden className="ml-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
