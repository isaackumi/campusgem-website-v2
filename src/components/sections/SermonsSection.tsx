import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { SermonGrid } from "@/components/organisms/SermonGrid";
import type { Sermon } from "@/constants/sermons";

export function SermonsSection({ sermons }: { sermons: Sermon[] }) {
  return (
    <section className="relative overflow-hidden section-pad bg-white" aria-labelledby="sermons-heading">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Messages"
              title="Sermons & teachings"
              titleId="sermons-heading"
              outline="HEAR"
              description="Truth that meets real Youth life, worship, discipleship, and hope in Christ."
            />
            <Button
              href="/sermons"
              variant="outline"
              className="shrink-0 self-start md:self-auto"
            >
              Browse sermons
            </Button>
          </div>
        </Reveal>
        <Stagger>
          <StaggerItem>
            <SermonGrid sermons={sermons} />
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
