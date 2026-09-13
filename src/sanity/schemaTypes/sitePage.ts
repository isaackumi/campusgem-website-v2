import { defineArrayMember, defineField, defineType } from "sanity";
import { pageList } from "../lib/lists";

export const sitePage = defineType({
  name: "sitePage",
  title: "Site Page",
  type: "document",
  fields: [
    defineField({
      name: "pageKey",
      title: "Page",
      type: "string",
      description: "Which website page this content controls.",
      options: {
        list: pageList,
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      description: "Used when slideshow is off, or as the first frame.",
    }),
    defineField({
      name: "slideshow",
      title: "Use camp photo slideshow",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "narrow",
      title: "Narrow content width",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "intro",
      title: "Intro paragraph",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "sections",
      title: "Content sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({
              name: "body",
              type: "text",
              title: "Body",
              rows: 4,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "body" },
          },
        }),
      ],
    }),
    defineField({
      name: "primaryCta",
      title: "Primary CTA",
      type: "object",
      fields: [
        defineField({ name: "label", type: "string", title: "Label" }),
        defineField({ name: "href", type: "string", title: "Link" }),
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary CTA",
      type: "object",
      fields: [
        defineField({ name: "label", type: "string", title: "Label" }),
        defineField({ name: "href", type: "string", title: "Link" }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      pageKey: "pageKey",
      media: "heroImage",
    },
    prepare({ title, pageKey, media }) {
      const page = pageList.find((item) => item.value === pageKey);
      return {
        title: title || page?.title || "Page",
        subtitle: page ? `${page.title} · ${pageKey}` : pageKey,
        media,
      };
    },
  },
});
