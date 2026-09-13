import type { GalleryAlbum } from "@/constants/media";
import { galleryAlbums as fallbackAlbums } from "@/constants/media";
import { activityPages as fallbackActivities } from "@/constants/pages";
import {
  confessionBenediction,
  confessionSections,
  giveContent,
  pastorContent,
} from "@/constants/pages";
import { siteConfig, aboutIntro, coreValues, mission, vision, trustProof } from "@/constants/site";
import type { PageKey } from "@/sanity/lib/lists";
import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  activityPageQuery,
  confessionQuery,
  galleryAlbumsQuery,
  givePageQuery,
  pastorQuery,
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
    const doc = await client.fetch(sitePageQuery, { pageKey });
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
    const doc = await client.fetch(activityPageQuery, { activityKey });
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
  };
  if (!isSanityConfigured) return fallback;
  try {
    const doc = await client.fetch(siteSettingsQuery);
    if (!doc) return fallback;
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
