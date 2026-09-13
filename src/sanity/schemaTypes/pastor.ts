import { defineArrayMember, defineField, defineType } from "sanity";

export const pastor = defineType({
  name: "pastor",
  title: "Senior Pastor",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Full name" }),
    defineField({ name: "preferredName", type: "string", title: "Preferred name" }),
    defineField({ name: "title", type: "string", title: "Role title" }),
    defineField({ name: "ministry", type: "string", title: "Ministry" }),
    defineField({ name: "church", type: "string", title: "Church" }),
    defineField({
      name: "portrait",
      type: "image",
      title: "Portrait",
      options: { hotspot: true },
    }),
    defineField({ name: "intro", type: "text", title: "Intro", rows: 4 }),
    defineField({ name: "summary", type: "text", title: "Summary", rows: 4 }),
    defineField({ name: "encounter", type: "text", title: "Encounter story", rows: 4 }),
    defineField({ name: "calling", type: "text", title: "Calling", rows: 3 }),
    defineField({ name: "quote", type: "text", title: "Quote", rows: 2 }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "year", type: "string", title: "Year / label" }),
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
          ],
          preview: {
            select: { title: "title", subtitle: "year" },
          },
        }),
      ],
    }),
    defineField({
      name: "focuses",
      title: "Focus areas",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
          ],
          preview: {
            select: { title: "title", subtitle: "body" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "name", media: "portrait" },
    prepare({ title, media }) {
      return { title: title || "Senior Pastor", media };
    },
  },
});
