import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    thumbnail: image().optional(),
    categories: z.array(z.string()).optional(),
    project_bg_color: z.string().optional(),
    project_fg_color: z.string().optional(),
  }),
});

const links = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
  }),
});

const settings = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    footer: z.string(),
    dark_mode: z.boolean(),
    site_name: z.string(),
    site_description: z.string(),
    hero_img: image(),
    hero_content: z.array(z.object({
      title: z.string(),
      text: z.string(),
    })),
  }),
});

export const collections = {
  projects,
  links,
  settings,
};