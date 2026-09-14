import { defineArrayMember, defineField, defineType } from "sanity";
import { activityList, yearList } from "../lib/lists";

export const galleryAlbum = defineType({
  name: "galleryAlbum",
  title: "Gallery Album",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Shown as a filter tab, e.g. 2025 or Eagles Camp.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 64 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kind",
      title: "Album type",
      type: "string",
      options: {
        list: [
          { title: "Year", value: "year" },
          { title: "Activity", value: "activity" },
          { title: "Highlights", value: "highlights" },
        ],
        layout: "radio",
      },
      initialValue: "year",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      description: "Portal years shown on the live gallery (dropdown).",
      options: {
        list: yearList,
        layout: "dropdown",
      },
      hidden: ({ parent }) => parent?.kind !== "year",
      validation: (rule) =>
        rule.custom((value, context) => {
          const kind = (context.parent as { kind?: string } | undefined)?.kind;
          if (kind === "year" && (value === undefined || value === null)) {
            return "Year is required for year albums";
          }
          return true;
        }),
    }),
    defineField({
      name: "activity",
      title: "Activity",
      type: "string",
      description: "Pick an activity album.",
      options: {
        list: activityList,
        layout: "dropdown",
      },
      hidden: ({ parent }) => parent?.kind !== "activity",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 100,
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      description:
        "Extra photos for this album. The website already keeps the synced year photos — removing items here only removes Studio uploads, not the built-in gallery images. Drag several files at once, or use Add item.",
      options: {
        layout: "grid",
      },
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Sort order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
    {
      title: "Year (newest)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      kind: "kind",
      year: "year",
      media: "photos.0",
    },
    prepare({ title, kind, year, media }) {
      const subtitle =
        kind === "year" && year
          ? `Year · ${year}`
          : kind === "activity"
            ? "Activity"
            : kind === "highlights"
              ? "Highlights"
              : kind;
      return { title, subtitle, media };
    },
  },
});
