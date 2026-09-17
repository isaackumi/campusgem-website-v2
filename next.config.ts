import type { NextConfig } from "next";

function r2RemotePatterns() {
  const publicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;
  const patterns: Array<{
    protocol: "https";
    hostname: string;
    pathname: string;
  }> = [
    {
      protocol: "https",
      hostname: "cdn.sanity.io",
      pathname: "/**",
    },
    // Cloudflare R2 managed public hostnames
    {
      protocol: "https",
      hostname: "**.r2.dev",
      pathname: "/**",
    },
  ];

  if (publicUrl) {
    try {
      const { hostname } = new URL(publicUrl);
      if (hostname && !hostname.endsWith(".r2.dev")) {
        patterns.push({
          protocol: "https",
          hostname,
          pathname: "/**",
        });
      }
    } catch {
      // ignore invalid env during build
    }
  }

  return patterns;
}

const nextConfig: NextConfig = {
  images: {
    // Default Next/Vercel optimizer — resizes + serves AVIF/WebP.
    // Custom R2 loader was bypassing this and serving full originals.
    remotePatterns: r2RemotePatterns(),
    formats: ["image/avif", "image/webp"],
    qualities: [65, 70, 75, 80],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
