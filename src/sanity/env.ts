export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

/** Public project id — env override preferred, hard fallback for Vercel builds. */
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "pi6d5m52";

/** True when we have a usable project id. */
export const isSanityConfigured = Boolean(projectId);
