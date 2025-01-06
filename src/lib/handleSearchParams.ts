import type { CollectionKey } from "astro:content";

// TODO: create a better search algorithm
export const handleSearchParams = (
  { data }: CollectionKey,
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
