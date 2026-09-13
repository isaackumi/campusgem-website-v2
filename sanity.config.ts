"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

/** Public IDs — safe to ship; env vars override when present. */
const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "pi6d5m52";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "campusgem",
  title: "Campus GEM",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
