import { Category } from "@/entities/category";

export const getCateroies = async (): Promise<Category[]> => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/categories`)
  ).json();

  return result;
};

export const getCategoryByName = async (
  categoryName: string
): Promise<Category> => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/categories/${categoryName}`)
  ).json();

  // 이유는 모르겠고 타입이 배열인 값이 불러와짐
  return Array.isArray(result) ? result[0] : result;
};
