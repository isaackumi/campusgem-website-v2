import { defineArrayMember, defineField, defineType } from "sanity";
import { yearList } from "../lib/lists";

export const hallOfFame = defineType({
  name: "hallOfFame",
  title: "Hall of Fame",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      initialValue: "Hall of Fame",
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Activities",
    }),
    defineField({
      name: "description",
      title: "Hero description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Intro body",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "entries",
      title: "Honorees",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "hallOfFameEntry",
          fields: [
            defineField({
              name: "entryId",
              title: "Entry ID",
              type: "string",
              description:
                "Stable id (e.g. stella) used to match a default portrait if no image is uploaded.",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "note",
              title: "Note",
              type: "string",
              description: "Optional subtitle (degree, role, etc.).",
            }),
            defineField({
              name: "year",
              title: "Year",
              type: "number",
              description: "Graduation or honor year from the portal year list.",
              options: {
                list: yearList,
                layout: "dropdown",
              },
            }),
            defineField({
              name: "portrait",
              title: "Portrait",
              type: "image",
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: {
              title: "name",
              note: "note",
              year: "year",
              media: "portrait",
            },
            prepare({ title, note, year, media }) {
              const bits = [year ? String(year) : null, note].filter(Boolean);
              return {
                title: title || "Honoree",
                subtitle: bits.join(" · ") || undefined,
                media,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Hall of Fame" };
    },
  },
});
