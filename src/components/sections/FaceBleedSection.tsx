import Image from "next/image";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";

const FACES = [
  {
    src: "/images/camp/camp-moment-03.jpg",
    caption: "Friendship that forms calling",
  },
  {
    src: "/images/camp/camp-moment-01.jpg",
    caption: "Worship that marks a season",
  },
  {
    src: "/images/camp/camp-moment-08.jpg",
    caption: "Leaders rising on campus",
  },
] as const;

/** Full-bleed face strip — atmosphere between story chapters. */
export function FaceBleedSection() {
  return (
    <section
      className="relative overflow-hidden bg-ink py-6 sm:py-8"
      aria-label="Moments from Campus GEM life"
    >
      <OutlineWord
        tone="light"
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] lg:text-[9rem]"
      >
        LIFE
      </OutlineWord>

      <div className="relative z-10 mx-auto max-w-[100vw]">
        <div className="container-wide mb-6 flex items-end justify-between gap-4">
          <div>
            <ParagraphReveal>
              <p className="eyebrow text-brand-200">In the frame</p>
            </ParagraphReveal>
            <TextReveal
              as="h2"
              text="Faces of the journey"
              className="font-display mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl"
              delay={0.06}
            />
          </div>
          <StoryArrow tone="light" className="hidden sm:block" />
        </div>

        <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
          {FACES.map((face, i) => (
            <ParagraphReveal key={face.src} delay={0.08 * i}>
              <figure className="group relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
                <Image
                  src={face.src}
                  alt={face.caption}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-4 pt-16">
                  <p className="text-sm font-medium text-white/90">
                    {face.caption}
                  </p>
                </figcaption>
              </figure>
            </ParagraphReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
