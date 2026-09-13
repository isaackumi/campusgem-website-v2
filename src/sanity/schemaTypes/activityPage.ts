import { defineField, defineType } from "sanity";
import { activityList } from "../lib/lists";

export const activityPage = defineType({
  name: "activityPage",
  title: "Activity Page",
  type: "document",
  fields: [
    defineField({
      name: "activityKey",
      title: "Activity",
      type: "string",
      options: {
        list: activityList,
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "Activities",
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "About this activity",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero / backdrop image",
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
      name: "slideshow",
      title: "Use camp slideshow on hero",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      activityKey: "activityKey",
      media: "heroImage",
    },
    prepare({ title, activityKey, media }) {
      const activity = activityList.find((item) => item.value === activityKey);
      return {
        title: title || activity?.title || "Activity",
        subtitle: activity?.title || activityKey,
        media,
      };
    },
  },
});
