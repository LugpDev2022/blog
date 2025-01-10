import type { CollectionEntry } from "astro:content";
import { stringToDate } from "./stringToDate";

export const sortPostsByDate = (
  posts: CollectionEntry<"blog">[],
): CollectionEntry<"blog">[] => {
  posts.sort(
    (a, b) =>
      stringToDate(b.data.date).getTime() - stringToDate(a.data.date).getTime(),
  );

  return posts;
};
