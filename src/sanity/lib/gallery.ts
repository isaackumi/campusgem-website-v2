import type { GalleryAlbum } from "@/constants/media";
import { galleryAlbums as fallbackAlbums } from "@/constants/media";
import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { galleryAlbumsQuery } from "@/sanity/lib/queries";

type SanityGalleryAlbum = {
  _id: string;
  title?: string | null;
  slug?: string | null;
  kind?: string | null;
  year?: number | null;
  activity?: string | null;
  description?: string | null;
  sortOrder?: number | null;
  photos?: Array<{
    _key?: string;
    alt?: string | null;
    caption?: string | null;
    image?: unknown;
  }> | null;
};

function mapAlbum(doc: SanityGalleryAlbum): GalleryAlbum | null {
  const images =
    doc.photos
      ?.map((photo) => {
        if (!photo?.image) return null;
        try {
          return urlForImage(photo.image as Parameters<typeof urlForImage>[0])
            .width(1600)
            .quality(80)
            .auto("format")
            .url();
        } catch {
          return null;
        }
      })
      .filter((src): src is string => Boolean(src)) ?? [];

  if (!images.length) return null;

  return {
    id: doc.slug || doc._id,
    label: doc.title || "Album",
    description: doc.description || "",
    images,
  };
}

/** Fetch gallery albums from Sanity, or fall back to local constants. */
export async function getGalleryAlbums(): Promise<GalleryAlbum[]> {
  if (!isSanityConfigured) {
    return [...fallbackAlbums];
  }

  try {
    const docs = await client.fetch<SanityGalleryAlbum[]>(galleryAlbumsQuery);
    const albums = (docs ?? [])
      .map(mapAlbum)
      .filter((album): album is GalleryAlbum => Boolean(album));

    if (!albums.length) {
      return [...fallbackAlbums];
    }

    return albums;
  } catch {
    return [...fallbackAlbums];
  }
}
