import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const project = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/project" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    cover: z.string().optional(),
    repository: z.url().optional(),
  }),
});

export const collections = { project };
