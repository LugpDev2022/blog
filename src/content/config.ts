import { defineCollection, z } from "astro:content";

const techCategoryValues = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "DevOps",
  "Node.js",
  "Testing",
  "Astro",
] as const;

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.enum(techCategoryValues),
  }),
});

export const collections = { blog };
