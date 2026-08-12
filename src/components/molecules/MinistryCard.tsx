import Image from "next/image";
import Link from "next/link";
import type { Ministry } from "@/constants/ministries";
import { Heading, Text } from "@/components/atoms/Typography";

type MinistryCardProps = {
  ministry: Ministry;
};

export function MinistryCard({ ministry }: MinistryCardProps) {
  return (
    <article className="group relative isolate overflow-hidden rounded-[var(--radius-lg)]">
      <div className="relative aspect-[4/5]">
        <Image
          src={ministry.image}
          alt=""
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <Heading level={3} as="h3" className="text-white">
          <Link href={ministry.href}>{ministry.title}</Link>
        </Heading>
        <Text className="mt-2 text-white/80" size="sm">
          {ministry.summary}
        </Text>
      </div>
    </article>
  );
}
