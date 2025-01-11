import { techCategoryValues, type TechCategory } from "../categories";

export const validateCategory = (
  category: string,
): [TechCategory | null, Error | null] => {
  const lowerCaseCategories = techCategoryValues.map((techCategory) =>
    techCategory.toLowerCase(),
  );

  const categoryIndex = lowerCaseCategories.indexOf(category.toLowerCase());

  if (categoryIndex < 0) {
    return [null, new Error("Category Not Found")];
  }

  return [techCategoryValues[categoryIndex], null];
};
