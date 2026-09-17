import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { OutlineWord } from "@/components/atoms/OutlineWord";
import { StoryArrow } from "@/components/atoms/StoryArrow";
import { StoryChapter } from "@/components/molecules/StoryChapter";
import { ParagraphReveal, TextReveal } from "@/components/molecules/TextReveal";
import { CtaSection } from "@/components/sections/CtaSection";
import { SitePage } from "@/components/templates/SitePage";
import { atmospheres } from "@/constants/atmospheres";
import { getActivityPage } from "@/sanity/lib/content";

export const metadata: Metadata = {
  title: "Bible Study",
  description:
    "Every Sunday at 7:00 PM GMT on Telegram with Campus GEM Ministries.",
};

export default async function BibleStudyPage() {
  const page = await getActivityPage("bible-study");

  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow || "Word together"}
      description={page.description}
      image={page.image || atmospheres.nebula}
      imageClassName="object-[center_40%]"
      slideshow={false}
      outline="STUDY"
      bleed
    >
      <StoryChapter
        eyebrow="Weekly"
        title="Open the Word together"
        outline="OPEN"
        intro={page.body}
        mist
      >
        <div className="relative mb-2">
          <StoryArrow className="mb-3" />
        </div>
        <ul className="space-y-4 text-ink-soft">
          <li className="border-t border-ink/10 pt-4">
            <span className="eyebrow text-brand-600">When</span>
            <span className="mt-1 block text-lg text-ink">
              Every Sunday · 7:00 PM GMT
            </span>
          </li>
          <li className="border-t border-ink/10 pt-4">
            <span className="eyebrow text-brand-600">Where</span>
            <span className="mt-1 block text-lg text-ink">
              Telegram · Campus GEM Ministries
            </span>
          </li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={
              page.cta?.href ?? "https://t.me/campusgem"
            }
          >
            {page.cta?.label ?? "Join on Telegram"}
          </Button>
          <Button href="/daily-confession" variant="secondary">
            Daily confession
          </Button>
        </div>
      </StoryChapter>

      <section className="relative overflow-x-hidden bg-ink py-20 text-white sm:py-28">
        <Image
          src={atmospheres.nebula}
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <OutlineWord
          tone="light"
          className="left-1/2 top-6 -translate-x-1/2 text-[14vw] lg:text-[7rem]"
        >
          WORD
        </OutlineWord>
        <div className="container-wide relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ParagraphReveal>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/15">
              <Image
                src={page.contentImage || page.image}
                alt="Campus GEM Bible Study flyer — every Sunday, 7 PM GMT on Telegram"
                fill
                className="object-contain object-center p-3 sm:p-4"
                sizes="(max-width: 1024px) 100vw, 28rem"
                priority
              />
            </div>
          </ParagraphReveal>
          <div>
            <ParagraphReveal>
              <p className="eyebrow text-brand-200">This Sunday</p>
            </ParagraphReveal>
            <TextReveal
              as="h2"
              text="Gather from wherever you are"
              className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl"
              delay={0.08}
            />
            <ParagraphReveal delay={0.2} className="mt-5">
              <p className="max-w-md text-base leading-7 text-white/80">
                One channel, one Word, one Campus GEM family — online and on
                campus.
              </p>
            </ParagraphReveal>
            <ParagraphReveal delay={0.28} className="mt-8">
              <Button
                href={page.cta?.href ?? "https://t.me/campusgem"}
                variant="inverse"
              >
                Open Telegram
              </Button>
            </ParagraphReveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </SitePage>
  );
}
