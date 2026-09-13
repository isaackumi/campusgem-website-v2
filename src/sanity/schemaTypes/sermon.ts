import { defineField, defineType } from "sanity";

export const sermon = defineType({
  name: "sermon",
  title: "Sermon",
  type: "document",
  fields: [
    defineField({
      name: "sermonId",
      title: "Sermon ID",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "speaker",
      title: "Speaker",
      type: "string",
      initialValue: "Campus GEM",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date label",
      type: "string",
      initialValue: "Recent",
    }),
    defineField({
      name: "href",
      title: "Link",
      type: "string",
      initialValue: "/sermons",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
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
    select: { title: "title", subtitle: "speaker", media: "image" },
  },
});
