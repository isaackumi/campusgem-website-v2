import Image from "next/image";
import Link from "next/link";
import type { Sermon } from "@/constants/sermons";
import { Heading, Text } from "@/components/atoms/Typography";

type SermonCardProps = {
  sermon: Sermon;
};

export function SermonCard({ sermon }: SermonCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-white/8 bg-surface shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={sermon.image}
          alt=""
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          {sermon.category}
        </p>
        <Heading level={3} as="h3" className="text-[1.35rem] text-ink">
          <Link href={sermon.href} className="transition-colors hover:text-gold-soft">
            {sermon.title}
          </Link>
        </Heading>
        <Text size="sm" className="text-ink-muted">
          {sermon.speaker} · {sermon.date}
        </Text>
      </div>
    </article>
  );
}
