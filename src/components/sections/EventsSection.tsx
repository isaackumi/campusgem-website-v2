import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { EventGrid } from "@/components/organisms/EventGrid";
import { upcomingEvents } from "@/constants/events";

export function EventsSection() {
  return (
    <section className="section-pad bg-paper" aria-labelledby="events-heading">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Gather"
              title="Upcoming events"
              titleId="events-heading"
              description="Be part of camps, feasts, and gatherings that strengthen faith and community."
            />
            <Button
              href="/events"
              variant="ghost"
              className="shrink-0 self-start md:self-auto"
            >
              View all events
            </Button>
          </div>
        </Reveal>

        <Stagger>
          <StaggerItem>
            <EventGrid events={upcomingEvents.slice(0, 2)} />
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
