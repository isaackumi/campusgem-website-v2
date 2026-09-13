import { defineArrayMember, defineField, defineType } from "sanity";

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
      description: "For year albums (e.g. 2025).",
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
      description: "For activity albums (Camp, Love Feast, etc.).",
      options: {
        list: [
          { title: "Eagles Camp", value: "camp" },
          { title: "Love Feasts", value: "love-feast" },
          { title: "Bible Study", value: "bible-study" },
          { title: "Mentoring Hub", value: "mentoring" },
          { title: "ICT Training", value: "ict" },
          { title: "Fun Fair", value: "funfair" },
          { title: "CGM Marriages", value: "marriages" },
          { title: "Hall of Fame", value: "hall-of-fame" },
          { title: "Other", value: "other" },
        ],
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
      description: "Lower numbers appear first. Year albums often use 0–N.",
      initialValue: 100,
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "photo",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              description: "Short description for accessibility.",
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "caption",
              alt: "alt",
              media: "image",
            },
            prepare({ title, alt, media }) {
              return {
                title: title || alt || "Photo",
                media,
              };
            },
          },
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
      media: "photos.0.image",
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