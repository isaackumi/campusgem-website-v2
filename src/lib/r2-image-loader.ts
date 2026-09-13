/**
 * Next.js custom image loader — serves `/images/*` from R2 when configured.
 * Falls back to local `public/` paths when `NEXT_PUBLIC_R2_PUBLIC_URL` is unset.
 */
export default function r2ImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  void width;
  void quality;

  if (/^https?:\/\//i.test(src) || src.startsWith("data:")) {
    return src;
  }

  const base = process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, "");
  const path = src.startsWith("/") ? src : `/${src}`;

  if (base) {
    return `${base}${path}`;
  }

  return path;
}
