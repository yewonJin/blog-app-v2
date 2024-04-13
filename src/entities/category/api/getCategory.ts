"use server";

import { connectMongo } from "@/shared/lib";
import Category from "../model/category";

export const getCategory = async () => {
  "use server";
  await connectMongo();

  const categories = await Category.findAll();

  return categories;
};

export const getCategoryByName = async (categoryName: string) => {
  "use server";
  await connectMongo();

  const categories = await Category.findByName(categoryName);

  return categories;
};
