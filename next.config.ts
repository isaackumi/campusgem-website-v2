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
    loader: "custom",
    loaderFile: "./src/lib/r2-image-loader.ts",
    remotePatterns: r2RemotePatterns(),
  },
};

export default nextConfig;
