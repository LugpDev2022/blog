import { defineCollection, z } from "astro:content";
import { techCategoryValues } from "../categories";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.enum(techCategoryValues),
  }),
});

export const collections = { blog };
