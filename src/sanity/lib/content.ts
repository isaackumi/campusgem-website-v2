import type { GalleryAlbum, HallOfFameEntry } from "@/constants/media";
import {
  galleryAlbums as fallbackAlbums,
  hallOfFameEntries as fallbackHallOfFame,
  marriageImages as fallbackMarriageImages,
} from "@/constants/media";
import type { EventItem } from "@/constants/events";
import { upcomingEvents as fallbackEvents } from "@/constants/events";
import type { Ministry } from "@/constants/ministries";
import { ministries as fallbackMinistries } from "@/constants/ministries";
import { activityPages as fallbackActivities } from "@/constants/pages";
import {
  confessionBenediction,
  confessionSections,
  giveContent,
  pastorContent,
} from "@/constants/pages";
import type { Sermon } from "@/constants/sermons";
import { featuredSermons as fallbackSermons } from "@/constants/sermons";
import type { SocialLink } from "@/constants/social";
import { socialLinks as fallbackSocialLinks } from "@/constants/social";
import { siteConfig, aboutIntro, coreValues, mission, vision, trustProof } from "@/constants/site";
import type { PageKey } from "@/sanity/lib/lists";
import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  activityPageQuery,
  activityPagesQuery,
  confessionQuery,
  eventsQuery,
  galleryAlbumsQuery,
  givePageQuery,
  hallOfFameQuery,
  marriagesPageQuery,
  ministriesQuery,
  pastorQuery,
  sermonsQuery,
  sitePageQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";

function imageUrl(source: unknown): string | undefined {
  if (!source) return undefined;
  try {
    return urlForImage(source as Parameters<typeof urlForImage>[0])
      .width(1600)
      .quality(80)
      .auto("format")
      .url();
  } catch {
    return undefined;
  }
}

export type ManagedSitePage = {
  title: string;
  eyebrow?: string;
  description: string;
  image?: string;
  slideshow: boolean;
  narrow: boolean;
  intro?: string;
  sections: Array<{ title: string; body: string }>;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export async function getGalleryAlbums(): Promise<GalleryAlbum[]> {
  if (!isSanityConfigured) return [...fallbackAlbums];
  try {
    const docs = await client.fetch<
      Array<{
        _id: string;
        title?: string | null;
        slug?: string | null;
        description?: string | null;
        photos?: Array<{ image?: unknown }> | null;
      }>
    >(galleryAlbumsQuery);
    const albums = (docs ?? [])
      .map((doc) => {
        const images =
          doc.photos
            ?.map((photo) => imageUrl(photo?.image))
            .filter((src): src is string => Boolean(src)) ?? [];
        if (!images.length) return null;
        return {
          id: doc.slug || doc._id,
          label: doc.title || "Album",
          description: doc.description || "",
          images,
        };
      })
      .filter(Boolean) as GalleryAlbum[];
    return albums.length ? albums : [...fallbackAlbums];
  } catch {
    return [...fallbackAlbums];
  }
}

export async function getSitePage(
  pageKey: PageKey,
  fallback: ManagedSitePage,
): Promise<ManagedSitePage> {
  if (!isSanityConfigured) return fallback;
  try {
    const doc = await client.fetch(sitePageQuery, {
      pageKey,
      docId: `page-${pageKey}`,
    });
    if (!doc) return fallback;
    return {
      title: doc.title || fallback.title,
      eyebrow: doc.eyebrow ?? fallback.eyebrow,
      description: doc.description || fallback.description,
      image: imageUrl(doc.heroImage) || fallback.image,
      slideshow: doc.slideshow ?? fallback.slideshow,
      narrow: doc.narrow ?? fallback.narrow,
      intro: doc.intro ?? fallback.intro,
      sections:
        doc.sections
          ?.filter((s: { title?: string; body?: string }) => s?.title && s?.body)
          .map((s: { title: string; body: string }) => ({
            title: s.title,
            body: s.body,
          })) || fallback.sections,
      primaryCta:
        doc.primaryCta?.label && doc.primaryCta?.href
          ? { label: doc.primaryCta.label, href: doc.primaryCta.href }
          : fallback.primaryCta,
      secondaryCta:
        doc.secondaryCta?.label && doc.secondaryCta?.href
          ? { label: doc.secondaryCta.label, href: doc.secondaryCta.href }
          : fallback.secondaryCta,
    };
  } catch {
    return fallback;
  }
}

const activityFallbackMap = {
  camp: fallbackActivities.camp,
  "love-feast": fallbackActivities.loveFeast,
  "bible-study": fallbackActivities.bibleStudy,
  mentoring: fallbackActivities.mentoring,
  ict: fallbackActivities.ict,
  funfair: fallbackActivities.funfair,
  marriages: fallbackActivities.marriages,
  "hall-of-fame": fallbackActivities.hallOfFame,
} as const;

export async function getActivityPage(activityKey: keyof typeof activityFallbackMap) {
  const fallback = activityFallbackMap[activityKey];
  const fallbackCta =
    "cta" in fallback ? fallback.cta : undefined;

  if (!isSanityConfigured) {
    return {
      ...fallback,
      cta: fallbackCta,
      slideshow: activityKey !== "bible-study",
    };
  }
  try {
    const doc = await client.fetch(activityPageQuery, {
      activityKey,
      docId: `activity-${activityKey}`,
    });
    if (!doc) {
      return {
        ...fallback,
        cta: fallbackCta,
        slideshow: activityKey !== "bible-study",
      };
    }
    return {
      title: doc.title || fallback.title,
      eyebrow: doc.eyebrow || fallback.eyebrow,
      description: doc.description || fallback.description,
      body: doc.body || fallback.body,
      image: imageUrl(doc.heroImage) || fallback.image,
      contentImage: imageUrl(doc.contentImage) || fallback.contentImage,
      cta:
        doc.ctaLabel && doc.ctaHref
          ? { label: doc.ctaLabel, href: doc.ctaHref }
          : fallbackCta,
      slideshow: doc.slideshow ?? activityKey !== "bible-study",
    };
  } catch {
    return {
      ...fallback,
      cta: fallbackCta,
      slideshow: activityKey !== "bible-study",
    };
  }
}

export async function getSiteSettings() {
  const fallback = {
    name: siteConfig.name,
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    email: siteConfig.email,
    phone: siteConfig.phone,
    phoneHref: siteConfig.phoneHref,
    address: siteConfig.address,
    hours: siteConfig.hours,
    vision,
    mission,
    coreValues: [...coreValues],
    aboutIntro,
    homeHeadline: [
      "Raising leaders.",
      "Revealing Christ.",
      "Restoring purpose.",
    ],
    homeSupport:
      "A Christ-centered movement equipping Youth to learn, connect, and grow beyond campus walls.",
    trustProof: [...trustProof],
    socialLinks: [...fallbackSocialLinks] as SocialLink[],
  };
  if (!isSanityConfigured) return fallback;
  try {
    const doc = await client.fetch(siteSettingsQuery);
    if (!doc) return fallback;
    const socialLinks: SocialLink[] = doc.socialLinks?.length
      ? doc.socialLinks
          .filter(
            (link: { label?: string; href?: string; platform?: string }) =>
              link?.label && link?.href && link?.platform,
          )
          .map(
            (link: {
              label: string;
              href: string;
              platform: SocialLink["platform"];
            }) => ({
              label: link.label,
              href: link.href,
              platform: link.platform,
            }),
          )
      : fallback.socialLinks;
    return {
      ...fallback,
      ...Object.fromEntries(
        Object.entries(doc).filter(([, value]) => value != null && value !== ""),
      ),
      coreValues: doc.coreValues?.length ? doc.coreValues : fallback.coreValues,
      trustProof: doc.trustProof?.length ? doc.trustProof : fallback.trustProof,
      homeHeadline: doc.homeHeadline?.length
        ? doc.homeHeadline
        : fallback.homeHeadline,
      socialLinks,
    };
  } catch {
    return fallback;
  }
}

export async function getConfessionContent(): Promise<{
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  image: string;
  sections: Array<{ title: string; lines: string[] }>;
  benediction: string;
}> {
  const fallback = {
    title: "Daily Confession",
    eyebrow: "Faith",
    description:
      "Declare God’s Word over your life, pleasant places, godly heritage, and divine favor.",
    intro:
      "Speak these aloud each day. Let faith rise as you agree with God’s promises for your life, family, and calling.",
    image: "/images/bible-confession-page.jpg",
    sections: confessionSections.map((s) => ({
      title: s.title,
      lines: [...s.lines],
    })),
    benediction: confessionBenediction,
  };
  if (!isSanityConfigured) return fallback;
  try {
    const doc = await client.fetch(confessionQuery);
    if (!doc) return fallback;
    return {
      title: doc.title || fallback.title,
      eyebrow: doc.eyebrow || fallback.eyebrow,
      description: doc.description || fallback.description,
      intro: doc.intro || fallback.intro,
      image: imageUrl(doc.heroImage) || fallback.image,
      sections: doc.sections?.length
        ? doc.sections.map((s: { title?: string; lines?: string[] }) => ({
            title: s.title || "",
            lines: s.lines || [],
          }))
        : fallback.sections,
      benediction: doc.benediction || fallback.benediction,
    };
  } catch {
    return fallback;
  }
}

export async function getPastorContent() {
  if (!isSanityConfigured) return pastorContent;
  try {
    const doc = await client.fetch(pastorQuery);
    if (!doc) return pastorContent;
    return {
      ...pastorContent,
      name: doc.name || pastorContent.name,
      preferredName: doc.preferredName || pastorContent.preferredName,
      title: doc.title || pastorContent.title,
      ministry: doc.ministry || pastorContent.ministry,
      church: doc.church || pastorContent.church,
      portrait: imageUrl(doc.portrait) || pastorContent.portrait,
      heroImage: imageUrl(doc.portrait) || pastorContent.heroImage,
      intro: doc.intro || pastorContent.intro,
      summary: doc.summary || pastorContent.summary,
      encounter: doc.encounter || pastorContent.encounter,
      calling: doc.calling || pastorContent.calling,
      quote: doc.quote || pastorContent.quote,
      timeline: doc.timeline?.length ? doc.timeline : pastorContent.timeline,
      focuses: doc.focuses?.length ? doc.focuses : pastorContent.focuses,
    };
  } catch {
    return pastorContent;
  }
}

export async function getGiveContent(): Promise<{
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  contentImage: string;
  intro: string;
  highlightTitle: string;
  highlight: string;
  focuses: Array<{ title: string; body: string }>;
  needyNote: string;
  howToGive: string;
}> {
  const fallback = {
    title: "Give",
    eyebrow: "Partnership",
    description: "Support camp meetings, academic help, and Youth in need.",
    image: "/images/camp/camp-moment-06.jpg",
    contentImage: "/images/camp/camp-moment-01.jpg",
    intro: giveContent.intro,
    highlightTitle: "Support our camp meetings",
    highlight: giveContent.highlight,
    focuses: [...giveContent.focuses],
    needyNote: giveContent.needyNote,
    howToGive:
      "Reach out and we will share current giving channels for your region. Include “Giving” in your subject line so we can respond quickly.",
  };
  if (!isSanityConfigured) return fallback;
  try {
    const doc = await client.fetch(givePageQuery);
    if (!doc) return fallback;
    return {
      title: doc.title || fallback.title,
      eyebrow: doc.eyebrow || fallback.eyebrow,
      description: doc.description || fallback.description,
      image: imageUrl(doc.heroImage) || fallback.image,
      contentImage: imageUrl(doc.contentImage) || fallback.contentImage,
      intro: doc.intro || fallback.intro,
      highlightTitle: doc.highlightTitle || fallback.highlightTitle,
      highlight: doc.highlight || fallback.highlight,
      focuses: doc.focuses?.length ? doc.focuses : fallback.focuses,
      needyNote: doc.needyNote || fallback.needyNote,
      howToGive: doc.howToGive || fallback.howToGive,
    };
  } catch {
    return fallback;
  }
}

export async function getHallOfFameContent(): Promise<{
  title: string;
  eyebrow: string;
  description: string;
  body: string;
  image: string;
  entries: HallOfFameEntry[];
}> {
  const fallback = {
    title: fallbackActivities.hallOfFame.title,
    eyebrow: fallbackActivities.hallOfFame.eyebrow,
    description: fallbackActivities.hallOfFame.description,
    body: fallbackActivities.hallOfFame.body,
    image: fallbackActivities.hallOfFame.image,
    entries: [...fallbackHallOfFame],
  };
  if (!isSanityConfigured) return fallback;
  try {
    const doc = await client.fetch(hallOfFameQuery);
    if (!doc) return fallback;
    const localById = new Map(fallbackHallOfFame.map((entry) => [entry.id, entry]));
    const entries: HallOfFameEntry[] = doc.entries?.length
      ? doc.entries
          .filter((entry: { name?: string }) => Boolean(entry?.name))
          .map(
            (
              entry: {
                entryId?: string;
                name: string;
                note?: string;
                portrait?: unknown;
              },
              index: number,
            ) => {
              const id = entry.entryId || `entry-${index}`;
              const local = localById.get(id);
              return {
                id,
                name: entry.name,
                note: entry.note || local?.note,
                src: imageUrl(entry.portrait) || local?.src || fallback.image,
              };
            },
          )
      : fallback.entries;
    return {
      title: doc.title || fallback.title,
      eyebrow: doc.eyebrow || fallback.eyebrow,
      description: doc.description || fallback.description,
      body: doc.body || fallback.body,
      image: imageUrl(doc.heroImage) || fallback.image,
      entries,
    };
  } catch {
    return fallback;
  }
}

export async function getMarriagesContent(): Promise<{
  title: string;
  eyebrow: string;
  description: string;
  body: string;
  image: string;
  contentImage: string;
  slideshow: boolean;
  photos: string[];
}> {
  const fallback = {
    title: fallbackActivities.marriages.title,
    eyebrow: fallbackActivities.marriages.eyebrow,
    description: fallbackActivities.marriages.description,
    body: fallbackActivities.marriages.body,
    image: fallbackActivities.marriages.image,
    contentImage: fallbackActivities.marriages.contentImage,
    slideshow: true,
    photos: [...fallbackMarriageImages],
  };
  if (!isSanityConfigured) return fallback;
  try {
    const doc = await client.fetch(marriagesPageQuery);
    if (!doc) return fallback;
    const photos =
      doc.photos
        ?.map((photo: { image?: unknown }) => imageUrl(photo?.image))
        .filter((src: string | undefined): src is string => Boolean(src)) ?? [];
    return {
      title: doc.title || fallback.title,
      eyebrow: doc.eyebrow || fallback.eyebrow,
      description: doc.description || fallback.description,
      body: doc.body || fallback.body,
      image: imageUrl(doc.heroImage) || fallback.image,
      contentImage: imageUrl(doc.contentImage) || fallback.contentImage,
      slideshow: doc.slideshow ?? true,
      photos: photos.length ? photos : fallback.photos,
    };
  } catch {
    return fallback;
  }
}

export async function getEvents(): Promise<EventItem[]> {
  if (!isSanityConfigured) return [...fallbackEvents];
  try {
    const docs = await client.fetch(eventsQuery);
    if (!docs?.length) return [...fallbackEvents];
    const localById = new Map(fallbackEvents.map((item) => [item.id, item]));
    return docs.map(
      (
        doc: {
          eventId?: string;
          title?: string;
          date?: string;
          time?: string;
          location?: string;
          summary?: string;
          href?: string;
          image?: unknown;
          ctaLabel?: string;
          ctaHref?: string;
        },
        index: number,
      ) => {
        const id = doc.eventId || `event-${index}`;
        const local = localById.get(id);
        const cta =
          doc.ctaLabel && doc.ctaHref
            ? { label: doc.ctaLabel, href: doc.ctaHref }
            : local?.cta;
        return {
          id,
          title: doc.title || local?.title || "Event",
          date: doc.date || local?.date || "",
          time: doc.time || local?.time || "",
          location: doc.location || local?.location || "",
          summary: doc.summary || local?.summary || "",
          href: doc.href || local?.href || "/events",
          image: imageUrl(doc.image) || local?.image || "/images/camp/camp-moment-01.jpg",
          ...(cta ? { cta } : {}),
        };
      },
    );
  } catch {
    return [...fallbackEvents];
  }
}

export async function getSermons(): Promise<Sermon[]> {
  if (!isSanityConfigured) return [...fallbackSermons];
  try {
    const docs = await client.fetch(sermonsQuery);
    if (!docs?.length) return [...fallbackSermons];
    const localById = new Map(fallbackSermons.map((item) => [item.id, item]));
    return docs.map(
      (
        doc: {
          sermonId?: string;
          title?: string;
          speaker?: string;
          category?: string;
          date?: string;
          href?: string;
          image?: unknown;
        },
        index: number,
      ) => {
        const id = doc.sermonId || `sermon-${index}`;
        const local = localById.get(id);
        return {
          id,
          title: doc.title || local?.title || "Sermon",
          speaker: doc.speaker || local?.speaker || "Campus GEM",
          category: doc.category || local?.category || "",
          date: doc.date || local?.date || "Recent",
          href: doc.href || local?.href || "/sermons",
          image:
            imageUrl(doc.image) ||
            local?.image ||
            "/images/bible-confession-page.jpg",
        };
      },
    );
  } catch {
    return [...fallbackSermons];
  }
}

export async function getMinistries(): Promise<Ministry[]> {
  if (!isSanityConfigured) return [...fallbackMinistries];
  try {
    const docs = await client.fetch(ministriesQuery);
    if (!docs?.length) return [...fallbackMinistries];
    const localById = new Map(fallbackMinistries.map((item) => [item.id, item]));
    return docs.map(
      (
        doc: {
          ministryId?: string;
          title?: string;
          summary?: string;
          href?: string;
          image?: unknown;
        },
        index: number,
      ) => {
        const id = doc.ministryId || `ministry-${index}`;
        const local = localById.get(id);
        return {
          id,
          title: doc.title || local?.title || "Ministry",
          summary: doc.summary || local?.summary || "",
          href: doc.href || local?.href || "/ministries",
          image:
            imageUrl(doc.image) || local?.image || "/images/camp/camp-moment-01.jpg",
        };
      },
    );
  } catch {
    return [...fallbackMinistries];
  }
}

const activityHrefByKey: Record<string, string> = {
  camp: "/camp",
  "love-feast": "/love-feast",
  "bible-study": "/bible-study",
  mentoring: "/mentoring-hub",
  ict: "/ict-training",
  funfair: "/funfair",
  marriages: "/cgem-marriages",
  "hall-of-fame": "/hall-of-fame",
};

export async function getActivityIndexItems(): Promise<
  Array<{ href: string; title: string; description: string }>
> {
  const fallback = Object.entries(activityHrefByKey).map(([key, href]) => {
    const page =
      activityFallbackMap[key as keyof typeof activityFallbackMap] ??
      fallbackActivities.camp;
    return {
      href,
      title: page.title,
      description: page.description,
    };
  });
  if (!isSanityConfigured) return fallback;
  try {
    const docs = await client.fetch(activityPagesQuery);
    if (!docs?.length) return fallback;
    return docs
      .filter((doc: { activityKey?: string }) =>
        Boolean(doc.activityKey && activityHrefByKey[doc.activityKey]),
      )
      .map(
        (doc: {
          activityKey: string;
          title?: string;
          description?: string;
        }) => {
          const href = activityHrefByKey[doc.activityKey];
          const local =
            activityFallbackMap[
              doc.activityKey as keyof typeof activityFallbackMap
            ];
          return {
            href,
            title: doc.title || local?.title || doc.activityKey,
            description: doc.description || local?.description || "",
          };
        },
      );
  } catch {
    return fallback;
  }
}
