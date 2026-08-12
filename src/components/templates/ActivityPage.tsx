import { Heading, Text } from "@/components/atoms/Typography";
import {
  CtaBanner, ImageGrid, Prose, SplitContent,
} from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";

type ActivityPageProps = {
  title: string;
  eyebrow?: string;
  description: string;
  body: string;
  image: string;
  contentImage?: string;
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  gallery?: string[];
  galleryAlt?: string;
};

export function ActivityPage({
  title, eyebrow = "Activities", description, body, image, contentImage, cta, secondaryCta, gallery, galleryAlt,
}: ActivityPageProps) {
  const sideImage = contentImage ?? image;

  return (
    <SitePage
      title={title}
      eyebrow={eyebrow}
      description={description}
      image={image}
    >
      <div className="space-y-14">
        <SplitContent image={sideImage} imageAlt={title}>
          <Prose className="max-w-none">
            <Heading level={3} as="h2" className="text-ink">
              About this activity
            </Heading>
            <Text size="lg">{body}</Text>
          </Prose>
        </SplitContent>

        {cta ? (
          <CtaBanner
            title={`Join ${title}`}
            description="Take the next step with the Campus GEM family."
            primary={cta}
            secondary={
              secondaryCta ?? { href: "/contact", label: "Contact us" }
            }
          />
        ) : null}

        {gallery?.length ? (
          <div className="space-y-6">
            <Heading level={3} as="h2" className="text-ink">
              Moments
            </Heading>
            <ImageGrid images={[...gallery]} altPrefix={galleryAlt ?? title} />
          </div>
        ) : null}
      </div>
    </SitePage>
  );
}
