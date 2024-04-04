import { connectMongo } from "@/shared/api";
import Category from "../model/category";

export const getCategory = async () => {
  "use server";
  await connectMongo();

  const categories = await Category.findAll();

  return categories;
};
