import { sortPostsByDate } from "../../src/lib/sortPostsByDate";
import type { CollectionEntry } from "astro:content";
import { describe, it, expect } from "vitest";

describe("sortPostsByDate", () => {
  const mockPosts = [
    {
      id: "1",
      slug: "post-1",
      body: "",
      data: {
        title: "Post 1",
        description: "Description 1",
        date: "01/10/2023",
        category: "Astro",
      },
    },
    {
      id: "2",
      slug: "post-2",
      body: "",
      data: {
        title: "Post 2",
        description: "Description 2",
        date: "01/09/2023",
        category: "React",
      },
    },
    {
      id: "3",
      slug: "post-3",
      body: "",
      data: {
        title: "Post 3",
        description: "Description 3",
        date: "01/11/2023",
        category: "DevOps",
      },
    },
  ] as CollectionEntry<"blog">[];

  it("should sort posts by date in descending order", () => {
    const sortedPosts = sortPostsByDate(mockPosts);
    expect(sortedPosts[0].data.date).toBe("01/11/2023");
    expect(sortedPosts[1].data.date).toBe("01/10/2023");
    expect(sortedPosts[2].data.date).toBe("01/09/2023");
  });

  it("should handle an empty array", () => {
    const sortedPosts = sortPostsByDate([]);
    expect(sortedPosts).toEqual([]);
  });

  it("should handle a single post", () => {
    const singlePost = [mockPosts[0]];
    const sortedPosts = sortPostsByDate(singlePost);
    expect(sortedPosts).toEqual(singlePost);
  });
});
