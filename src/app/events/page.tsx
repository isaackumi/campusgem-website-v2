import type { Metadata } from "next";
import { Text } from "@/components/atoms/Typography";
import { CtaBanner, Prose } from "@/components/molecules/PageBlocks";
import { EventGrid } from "@/components/organisms/EventGrid";
import { SitePage } from "@/components/templates/SitePage";
import { getEvents, getSitePage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Campus GEM camps, gatherings, and moments to grow together.",
};

export default async function EventsPage() {
  const [page, events] = await Promise.all([
    getSitePage("events", {
      title: "Events",
      eyebrow: "Gatherings",
      description:
        "Camps, feasts, and seasonal meetings where we seek God together.",
      image: "/images/camp/camp-moment-06.jpg",
      slideshow: true,
      narrow: false,
      intro:
        "Mark your calendar and join us. Details for registration and venues are updated as each season approaches.",
      sections: [],
      primaryCta: { href: "/contact", label: "Get connected" },
      secondaryCta: { href: "/activities", label: "All activities" },
    }),
    getEvents(),
  ]);

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image}
      slideshow={page.slideshow}
    >
      <div className="space-y-10">
        <Prose>
          <Text size="lg">
            {page.intro ||
              "Mark your calendar and join us. Details for registration and venues are updated as each season approaches."}
          </Text>
        </Prose>

        <EventGrid events={events} />

        <CtaBanner
          title="Want earlier updates?"
          description="Join our WhatsApp or Telegram channels for announcements."
          primary={page.primaryCta ?? { href: "/contact", label: "Get connected" }}
          secondary={
            page.secondaryCta ?? { href: "/activities", label: "All activities" }
          }
        />
      </div>
    </SitePage>
  );
}
