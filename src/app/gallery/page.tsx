import type { Metadata } from "next";
import { Text } from "@/components/atoms/Typography";
import { CtaBanner, Prose } from "@/components/molecules/PageBlocks";
import { GalleryExplorer } from "@/components/organisms/GalleryExplorer";
import { SitePage } from "@/components/templates/SitePage";
import { galleryAlbums } from "@/constants/media";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Campus GEM gallery by year: camps, outreaches, and campus community life.",
};

export default function GalleryPage() {
  return (
    <SitePage
      title="Gallery"
      eyebrow="Moments"
      description="Browse Campus GEM memories by year, from early gatherings to recent camps."
      image="/images/gathering.jpg"
    >
      <div className="space-y-12">
        <Prose>
          <Text size="lg">
            A living archive of worship, friendship, and the journeys that shape
            leaders for Christ. Filter by year or open any photo for a closer look.
          </Text>
        </Prose>

        <GalleryExplorer albums={galleryAlbums} />

        <CtaBanner
          title="Be part of the next moment"
          description="Join an activity or reach out. We would love to welcome you."
          primary={{ href: "/activities", label: "Explore activities" }}
          secondary={{ href: "/contact", label: "Contact us" }}
        />
      </div>
    </SitePage>
  );
}
