import { defineArrayMember, defineField, defineType } from "sanity";

export const givePage = defineType({
  name: "givePage",
  title: "Give Page",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", initialValue: "Give" }),
    defineField({ name: "eyebrow", type: "string", title: "Eyebrow" }),
    defineField({ name: "description", type: "text", title: "Hero description", rows: 2 }),
    defineField({
      name: "heroImage",
      type: "image",
      title: "Hero image",
      options: { hotspot: true },
    }),
    defineField({ name: "intro", type: "text", title: "Intro", rows: 3 }),
    defineField({
      name: "contentImage",
      type: "image",
      title: "Split content image",
      options: { hotspot: true },
    }),
    defineField({ name: "highlightTitle", type: "string", title: "Priority title" }),
    defineField({ name: "highlight", type: "text", title: "Priority body", rows: 4 }),
    defineField({
      name: "focuses",
      title: "Where gifts go",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "body", type: "text", title: "Body", rows: 3 }),
          ],
        }),
      ],
    }),
    defineField({ name: "needyNote", type: "text", title: "Needy Youth note", rows: 3 }),
    defineField({ name: "howToGive", type: "text", title: "How to give", rows: 3 }),
  ],
  preview: {
    prepare() {
      return { title: "Give Page" };
    },
  },
});
