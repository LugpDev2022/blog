import type { CollectionEntry } from "astro:content";

// TODO: create a better search algorithm
export const handleSearchParams = (
  { data }: CollectionEntry<"blog">,
  queryValue: string | null,
): boolean => {
  // If no search query, return all posts
  if (!queryValue) {
    return true;
  }

  return (
    data.title.toLowerCase().includes(queryValue.toLowerCase()) ||
    data.description.toLowerCase().includes(queryValue.toLowerCase()) ||
    data.category.toLowerCase().includes(queryValue.toLowerCase())
  );
};
