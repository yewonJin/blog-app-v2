import { Category } from "../model/types";

export const getCategory = async (): Promise<Category[]> => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/api/category`)
  ).json();

  return result;
};

export const getCategoryByName = async (
  categoryName: string
): Promise<Category> => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/api/category?name=${categoryName}`)
  ).json();

  return result;
};
