import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "eventId",
      title: "Event ID",
      type: "string",
      description: "Stable id (e.g. eagles-camp-2026) for matching default images.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date label",
      type: "string",
      description: "e.g. December 2026 or Every Sunday",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "time",
      title: "Time / duration",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "Details link",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA label",
      type: "string",
    }),
    defineField({
      name: "ctaHref",
      title: "CTA link",
      type: "url",
      validation: (rule) =>
        rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto", "tel"] }),
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Sort order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "date", media: "image" },
  },
});
