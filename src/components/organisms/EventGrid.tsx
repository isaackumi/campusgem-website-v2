import { EventCard } from "@/components/molecules/EventCard";
import type { EventItem } from "@/constants/events";

export function EventGrid({ events }: { events: EventItem[] }) {
  return (
    <div className="mt-10 grid gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
