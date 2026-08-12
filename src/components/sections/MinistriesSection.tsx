import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { MinistryGrid } from "@/components/organisms/MinistryGrid";
import { ministries } from "@/constants/ministries";

export function MinistriesSection() {
  return (
    <section
      className="section-pad bg-ink text-white"
      aria-labelledby="ministries-heading"
    >
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Pathways"
              title="Ministries that form lives"
              titleId="ministries-heading"
              description="From camps to mentoring hubs, every pathway is designed to grow faith and leadership."
              light
            />
            <Button
              href="/ministries"
              variant="on-dark"
              className="shrink-0 self-start md:self-auto"
            >
              All ministries
            </Button>
          </div>
        </Reveal>
        <Stagger>
          <StaggerItem>
            <MinistryGrid ministries={ministries} />
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
