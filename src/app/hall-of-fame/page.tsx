import type { Metadata } from "next";
import { Text } from "@/components/atoms/Typography";
import { CtaBanner, Prose } from "@/components/molecules/PageBlocks";
import { HallOfFameExplorer } from "@/components/organisms/HallOfFameExplorer";
import { SitePage } from "@/components/templates/SitePage";
import { hallOfFameEntries } from "@/constants/media";
import { activityPages } from "@/constants/pages";

const page = activityPages.hallOfFame;

export const metadata: Metadata = {
  title: "Hall of Fame",
  description: page.description,
};

export default function HallOfFamePage() {
  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image}
    >
      <div className="space-y-12">
        <Prose>
          <Text size="lg">{page.body}</Text>
        </Prose>

        <div className="space-y-5">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">
              Portraits
            </p>
            <Text size="sm" muted>
              {hallOfFameEntries.length} honored
            </Text>
          </div>
          <HallOfFameExplorer entries={hallOfFameEntries} />
        </div>

        <CtaBanner
          title="Know someone who belongs here?"
          description="Share a graduate story with the Campus GEM family, or ask how to nominate someone."
          primary={{ href: "/contact", label: "Share a story" }}
          secondary={{ href: "/activities", label: "All activities" }}
        />
      </div>
    </SitePage>
  );
}
