import { describe, it, expect } from "vitest";
import { handleSearchParams } from "../../src/lib/handleSearchParams";
import type { CollectionEntry, Render } from "astro:content";

describe("handleSearchParams", () => {
  const mockEntry = {
    id: "1",
    slug: "test-post",
    body: "",
    data: {
      title: "Test Post",
      description: "This is a test post",
      date: "2023-10-01",
      category: "Testing",
    },
  } as CollectionEntry<"blog">;

  it("should return true if no search query is provided", () => {
    const result = handleSearchParams(mockEntry, null);
    expect(result).toBe(true);
  });

  it("should return true if the title matches the search query", () => {
    const result = handleSearchParams(mockEntry, "test post");
    expect(result).toBe(true);
  });

  it("should return true if the description matches the search query", () => {
    const result = handleSearchParams(mockEntry, "this is a test post");
    expect(result).toBe(true);
  });

  it("should return true if the category matches the search query", () => {
    const result = handleSearchParams(mockEntry, "testing");
    expect(result).toBe(true);
  });

  it("should return false if the search query does not match any field", () => {
    const result = handleSearchParams(mockEntry, "nonexistent");
    expect(result).toBe(false);
  });
});
