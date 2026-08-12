import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { SermonGrid } from "@/components/organisms/SermonGrid";
import { featuredSermons } from "@/constants/sermons";

export function SermonsSection() {
  return (
    <section className="section-pad bg-paper" aria-labelledby="sermons-heading">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Messages"
              title="Sermons & teachings"
              titleId="sermons-heading"
              description="Truth that meets real student life—worship, discipleship, and hope in Christ."
            />
            <Button
              href="/sermons"
              variant="ghost"
              className="shrink-0 self-start md:self-auto"
            >
              Browse sermons
            </Button>
          </div>
        </Reveal>
        <Stagger>
          <StaggerItem>
            <SermonGrid sermons={featuredSermons} />
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
