import type { Metadata } from "next";
import { Text } from "@/components/atoms/Typography";
import { CtaBanner, Prose } from "@/components/molecules/PageBlocks";
import { EventGrid } from "@/components/organisms/EventGrid";
import { SitePage } from "@/components/templates/SitePage";
import { upcomingEvents } from "@/constants/events";

export const metadata: Metadata = {
  title: "Events", description: "Upcoming Campus GEM camps, gatherings, and moments to grow together.",
};

export default function EventsPage() {
  return (
    <SitePage
      title="Events"
      eyebrow="Gatherings"
      description="Camps, feasts, and seasonal meetings where we seek God together."
      image="/images/about.jpg"
    >
      <div className="space-y-10">
        <Prose>
          <Text size="lg">
            Mark your calendar and join us. Details for registration and venues
            are updated as each season approaches.
          </Text>
        </Prose>

        <EventGrid events={upcomingEvents} />

        <CtaBanner
          title="Want earlier updates?"
          description="Join our WhatsApp or Telegram channels for announcements."
          primary={{ href: "/contact", label: "Get connected" }}
          secondary={{ href: "/activities", label: "All activities" }}
        />
      </div>
    </SitePage>
  );
}
