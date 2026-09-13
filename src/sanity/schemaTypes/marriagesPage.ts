import { defineArrayMember, defineField, defineType } from "sanity";
import { yearList } from "../lib/lists";

/** CGM Marriages page + photo set (controlled separately from activity copy). */
export const marriagesPage = defineType({
  name: "marriagesPage",
  title: "CGM Marriages",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      initialValue: "CGM Marriages",
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
      rows: 2,
    }),
    defineField({
      name: "body",
      title: "About",
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
      name: "contentImage",
      title: "Side / content image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "slideshow",
      title: "Use camp slideshow on hero",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "photos",
      title: "Marriage photos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "marriagePhoto",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
            defineField({
              name: "year",
              title: "Year",
              type: "number",
              options: {
                list: yearList,
                layout: "dropdown",
              },
            }),
          ],
          preview: {
            select: {
              title: "caption",
              year: "year",
              media: "image",
            },
            prepare({ title, year, media }) {
              return {
                title: title || (year ? `Wedding · ${year}` : "Marriage photo"),
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
      return { title: "CGM Marriages" };
    },
  },
});
