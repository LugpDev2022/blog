export type TechCategory =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Next"
  | "DevOps"
  | "Node.js"
  | "Testing"
  | "Astro";

export const getIcon = (category: TechCategory): string => {
  switch (category) {
    case "JavaScript":
      return "ion:logo-javascript";
    case "TypeScript":
      return "devicon-plain:typescript";
    case "React":
      return "uil:react";
    case "Next":
      return "devicon-plain:nextjs";
    case "DevOps":
      return "gravity-ui:cloud-gear";
    case "Node.js":
      return "ion:logo-nodejs";
    case "Testing":
      return "qlementine-icons:test-16";
    case "Astro":
      return "devicon-plain:astro";
  }
};
