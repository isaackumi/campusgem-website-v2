/**
 * Next.js custom image loader — serves `/images/*` from R2 when configured.
 * Falls back to local `public/` paths when `NEXT_PUBLIC_R2_PUBLIC_URL` is unset.
 *
 * Always appends `w` / `q` so Next.js custom-loader validation is satisfied
 * (R2 serves originals; query params are ignored by the CDN).
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
  const q = quality ?? 75;

  if (/^https?:\/\//i.test(src) || src.startsWith("data:")) {
    const sep = src.includes("?") ? "&" : "?";
    return `${src}${sep}w=${width}&q=${q}`;
  }

  const base = process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, "");
  const path = src.startsWith("/") ? src : `/${src}`;
  const url = base ? `${base}${path}` : path;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}w=${width}&q=${q}`;
}
