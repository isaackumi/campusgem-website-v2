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
