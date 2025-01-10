export const techCategoryValues = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "DevOps",
  "Node.js",
  "Testing",
  "Astro",
  "Relatos",
] as const;

export type TechCategory = (typeof techCategoryValues)[number];
