import { connectMongo } from "@/shared/api";
import Post from "../model/post";

export const getPost = async () => {
  "use server";
  await connectMongo();

  const posts = await Post.findAllWithoutContent();

  return posts;
};

export const getPostByPostNumber = async (postNumber: number) => {
  "use server";
  await connectMongo();

  const post = await Post.findByPostNumber(postNumber);

  return post[0];
};
