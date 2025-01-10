import { techCategoryValues, type TechCategory } from "../categories";

export const validateCategory = (
  category: string,
): [TechCategory | null, Error | null] => {
  const lowerCaseCategories = techCategoryValues.map((category) =>
    category.toLowerCase(),
  );

  const categoryIndex = lowerCaseCategories.indexOf(category);

  if (categoryIndex < 0) {
    return [null, new Error("Category Not Found")];
  }

  return [techCategoryValues[categoryIndex], null];
};
