import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    thumbnail: z.string().optional(),
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
  }),
});

export const collections = {
  projects,
  links,
};