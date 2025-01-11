import { validateCategory } from "../../src/lib/validateCategory";
import { techCategoryValues } from "../../src/categories";

describe("validateCategory", () => {
  it("should return the category and no error for a valid category", () => {
    const [category, error] = validateCategory("javascript");
    expect(category).toBe(techCategoryValues[0]);
    expect(error).toBeNull();
  });

  it("should return null and an error for an invalid category", () => {
    const [category, error] = validateCategory("invalidCategory");
    expect(category).toBeNull();
    expect(error).toEqual(new Error("Category Not Found"));
  });

  it("should be case insensitive", () => {
    const [category, error] = validateCategory("javAsCripT");
    expect(category).toBe(techCategoryValues[0]);
    expect(error).toBeNull();
  });
});
