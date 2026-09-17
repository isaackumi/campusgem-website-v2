/**
 * Resolve a site image path against Cloudflare R2 when configured.
 * Local fallback: `/images/...` from `public/images`.
 * R2 keys mirror that tree under `images/...`.
 *
 * Prefer relative `/images/...` with next/image (default optimizer).
 * Use `mediaUrl` only when you need an absolute R2 URL (e.g. OG tags,
 * non-Image tags, or remote-src through the optimizer).
 */
export function mediaUrl(src: string): string {
  if (!src) return src;
  if (/^https?:\/\//i.test(src) || src.startsWith("data:")) return src;

  const base = process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, "");
  const path = src.startsWith("/") ? src : `/${src}`;

  if (!base) return path;

  // `/images/foo.jpg` → `{public}/images/foo.jpg`
  return `${base}${path}`;
}

/** Public R2 origin without trailing slash, if configured. */
export function r2PublicOrigin(): string | undefined {
  const base = process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, "");
  return base || undefined;
}
