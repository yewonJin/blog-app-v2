"use server";

import { connectMongo } from "@/shared/lib";
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

export const getPostByPostNumberWithoutContent = async (postNumber: number) => {
  "use server";
  await connectMongo();

  const post = await Post.findByPostNumberWithoutContent(postNumber);

  return post[0];
};

export const getLastestPost = async () => {
  "use server";

  await connectMongo();

  const nextPostNumber = await Post.findLastestPost();

  return nextPostNumber[0].postNumber + 1;
};
