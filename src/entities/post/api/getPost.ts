import { connectMongo } from "@/shared/api";
import Post from "../model/post";

export const getPost = async () => {
  "use server";
  await connectMongo();

  const posts = await Post.findRecentPostWithoutContent(9);

  return posts;
};
