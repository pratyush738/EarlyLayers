import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    record: z.number(),                    // 1, 2, 3 — the record number
    title: z.string(),
    subject: z.string(),                   // entity or theme under examination
    date: z.coerce.date(),
    status: z.enum(['published', 'drafting', 'research']),
    summary: z.string(),                   // one-paragraph findings summary for the index
    sources: z.number().optional(),        // count of primary sources read
    position: z.string().optional(),       // your thesis. Omit while status is not published.
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().optional(),
  }),
});

export const collections = { research, notes };
