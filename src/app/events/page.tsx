import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/templates/PlaceholderPage";
import { EventGrid } from "@/components/organisms/EventGrid";
import { upcomingEvents } from "@/constants/events";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <PlaceholderPage
      title="Events"
      description="Camps, gatherings, and moments to grow together."
    >
      <EventGrid events={upcomingEvents} />
    </PlaceholderPage>
  );
}
