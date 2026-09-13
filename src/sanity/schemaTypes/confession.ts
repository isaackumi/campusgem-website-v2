import { defineArrayMember, defineField, defineType } from "sanity";

export const confession = defineType({
  name: "confession",
  title: "Daily Confession",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      initialValue: "Daily Confession",
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Hero description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "sections",
      title: "Confession sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "confessionSection",
          fields: [
            defineField({ name: "title", type: "string", title: "Section title" }),
            defineField({
              name: "lines",
              title: "Lines",
              type: "array",
              of: [defineArrayMember({ type: "text" })],
            }),
          ],
          preview: {
            select: { title: "title" },
          },
        }),
      ],
    }),
    defineField({
      name: "benediction",
      title: "Benediction",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Daily Confession" };
    },
  },
});
