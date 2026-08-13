import type { Metadata } from "next";
import Image from "next/image";
import { Heading, Text } from "@/components/atoms/Typography";
import { CtaBanner, Prose } from "@/components/molecules/PageBlocks";
import { SitePage } from "@/components/templates/SitePage";
import { activityPages } from "@/constants/pages";

const page = activityPages.bibleStudy;

export const metadata: Metadata = {
  title: "Bible Study",
  description: page.description,
};

export default function BibleStudyPage() {
  return (
    <SitePage
      title={page.title}
      eyebrow={page.eyebrow}
      description={page.description}
      image={page.image}
      imageClassName="object-[center_40%]"
      slideshow={false}
    >
      <div className="space-y-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[var(--radius-lg)] bg-surface">
            <Image
              src={page.contentImage}
              alt="Campus GEM Bible Study flyer — every Sunday, 7 PM GMT on Telegram"
              fill
              className="object-contain object-center p-2 sm:p-3"
              sizes="(max-width: 1024px) 100vw, 28rem"
              priority
            />
          </div>

          <Prose className="max-w-none">
            <Heading level={3} as="h2" className="text-ink">
              Weekly on Telegram
            </Heading>
            <Text size="lg">{page.body}</Text>
            <ul className="mt-8 space-y-4 text-ink-soft">
              <li className="border-t border-white/10 pt-4">
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  When
                </span>
                <span className="mt-1 block text-lg text-ink">
                  Every Sunday · 7:00 PM GMT
                </span>
              </li>
              <li className="border-t border-white/10 pt-4">
                <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  Where
                </span>
                <span className="mt-1 block text-lg text-ink">
                  Telegram · Campus GEM Ministries
                </span>
              </li>
            </ul>
          </Prose>
        </div>

        <CtaBanner
          title="Join Bible Study"
          description="Open Telegram and gather with us this Sunday at 7 PM GMT."
          primary={page.cta}
          secondary={{ href: "/daily-confession", label: "Daily confession" }}
        />
      </div>
    </SitePage>
  );
}
