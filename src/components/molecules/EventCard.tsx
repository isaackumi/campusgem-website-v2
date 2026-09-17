import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "@/constants/events";
import { Button } from "@/components/atoms/Button";
import { Heading, Text } from "@/components/atoms/Typography";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group grid overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink/5 transition duration-300 hover:shadow-float md:grid-cols-[0.9fr_1.1fr]">
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
        <p className="eyebrow text-brand-600">{event.date}</p>
        <Heading level={3} as="h3" className="text-ink">
          <Link
            href={event.href}
            className="transition-colors duration-200 hover:text-brand-700"
          >
            {event.title}
          </Link>
        </Heading>
        <Text>{event.summary}</Text>
        <div className="mt-2 space-y-1 text-sm text-ink-soft">
          <p>{event.time}</p>
          <p>{event.location}</p>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {event.cta ? (
            event.cta.href.startsWith("http") ? (
              <a
                href={event.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {event.cta.label}
              </a>
            ) : (
              <Button href={event.cta.href} size="sm">
                {event.cta.label}
              </Button>
            )
          ) : null}
          <Link
            href={event.href}
            className="inline-flex text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Find out more
            <span aria-hidden className="ml-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
