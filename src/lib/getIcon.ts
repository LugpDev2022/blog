import type { TechCategory } from "../categories";

export const getIcon = (category: TechCategory): string => {
  switch (category) {
    case "JavaScript":
      return "devicon-plain:javascript";
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
    case "Relatos":
      return "gravity-ui:book";
  }
};
