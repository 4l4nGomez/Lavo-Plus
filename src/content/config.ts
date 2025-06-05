// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    bannerImage: z.string(),
    features: z.array(z.string()),
  }),
});

export const collections = {
  home: homeCollection,
};
