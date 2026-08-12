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
          className="object-cover brightness-[0.72] transition duration-700 group-hover:scale-[1.04] group-hover:brightness-[0.64]"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        {/* Dark veil for WCAG contrast: --ink is light cream in this theme */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/25"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-void to-transparent"
          aria-hidden
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <Heading level={3} as="h3" className="text-white">
          <Link
            href={ministry.href}
            className="cursor-pointer transition-colors duration-200 hover:text-gold-soft"
          >
            {ministry.title}
          </Link>
        </Heading>
        <Text className="mt-2 text-white/85" size="sm">
          {ministry.summary}
        </Text>
      </div>
    </article>
  );
}
