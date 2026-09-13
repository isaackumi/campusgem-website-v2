import { defineQuery } from "next-sanity";

export const galleryAlbumsQuery = defineQuery(`
  *[_type == "galleryAlbum"] | order(sortOrder asc, year desc, title asc) {
    _id,
    title,
    "slug": slug.current,
    kind,
    year,
    activity,
    description,
    sortOrder,
    photos[] {
      _key,
      alt,
      caption,
      image
    }
  }
`);

export const sitePageQuery = defineQuery(`
  *[_type == "sitePage" && (pageKey == $pageKey || _id == $docId || _id == ("drafts." + $docId))][0] {
    pageKey,
    title,
    eyebrow,
    description,
    heroImage,
    slideshow,
    narrow,
    intro,
    sections[] { title, body },
    primaryCta { label, href },
    secondaryCta { label, href }
  }
`);

export const activityPageQuery = defineQuery(`
  *[_type == "activityPage" && (activityKey == $activityKey || _id == $docId || _id == ("drafts." + $docId))][0] {
    activityKey,
    title,
    eyebrow,
    description,
    body,
    heroImage,
    contentImage,
    ctaLabel,
    ctaHref,
    slideshow
  }
`);

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    name,
    tagline,
    description,
    email,
    phone,
    phoneHref,
    address,
    hours,
    vision,
    mission,
    coreValues,
    aboutIntro,
    homeHeadline,
    homeSupport,
    trustProof[] { label, detail }
  }
`);

export const confessionQuery = defineQuery(`
  *[_type == "confession" && _id == "confession"][0] {
    title,
    eyebrow,
    description,
    intro,
    heroImage,
    sections[] { title, lines },
    benediction
  }
`);

export const pastorQuery = defineQuery(`
  *[_type == "pastor" && _id == "pastor"][0] {
    name,
    preferredName,
    title,
    ministry,
    church,
    portrait,
    intro,
    summary,
    encounter,
    calling,
    quote,
    timeline[] { year, title, body },
    focuses[] { title, body }
  }
`);

export const givePageQuery = defineQuery(`
  *[_type == "givePage" && _id == "givePage"][0] {
    title,
    eyebrow,
    description,
    heroImage,
    intro,
    contentImage,
    highlightTitle,
    highlight,
    focuses[] { title, body },
    needyNote,
    howToGive
  }
`);

export const hallOfFameQuery = defineQuery(`
  *[_type == "hallOfFame" && _id == "hallOfFame"][0] {
    title,
    eyebrow,
    description,
    body,
    heroImage,
    entries[] {
      entryId,
      name,
      note,
      year,
      portrait
    }
  }
`);

export const marriagesPageQuery = defineQuery(`
  *[_type == "marriagesPage" && _id == "marriagesPage"][0] {
    title,
    eyebrow,
    description,
    body,
    heroImage,
    contentImage,
    slideshow,
    photos[] {
      _key,
      caption,
      year,
      image
    }
  }
`);
