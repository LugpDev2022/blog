export const techCategoryValues = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "DevOps",
  "Nodejs",
  "Testing",
  "Astro",
  "Relatos",
] as const;

export type TechCategory = (typeof techCategoryValues)[number];
