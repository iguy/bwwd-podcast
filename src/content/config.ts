import { defineCollection, z } from 'astro:content';

const podcast = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    episodeNumber: z.number(),
    pubDate: z.string(),
    durationSeconds: z.number(),
    audioUrl: z.string().url(),
    imageUrl: z.string().url(),
    transcriptUrl: z.string().url().optional(),
    keywords: z.array(z.string()),
    needsReview: z.boolean().optional(),
  }),
});

export const collections = { podcast };
