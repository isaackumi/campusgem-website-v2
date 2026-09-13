import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ministry name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site description (SEO)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone (display)",
      type: "string",
    }),
    defineField({
      name: "phoneHref",
      title: "Phone link",
      type: "string",
      description: "e.g. tel:+233205627670",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "string",
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "coreValues",
      title: "Core values",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "aboutIntro",
      title: "About intro",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "homeHeadline",
      title: "Home headline lines",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "Three short lines shown in the home hero.",
    }),
    defineField({
      name: "homeSupport",
      title: "Home supporting sentence",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "trustProof",
      title: "Trust proof items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "detail", type: "string", title: "Detail" }),
          ],
          preview: {
            select: { title: "label", subtitle: "detail" },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
