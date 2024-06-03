import { Post } from "@/entities/post";

export const getAllPosts = async (): Promise<Omit<Post, "content">[]> => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/posts/withoutContent`)
  ).json();

  return result;
};

export const getPostByPostNumber = async (
  postNumber: number
): Promise<Post> => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/posts/${postNumber}`)
  ).json();

  return result;
};

export const getNextPostNumber = async (): Promise<number> => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/posts/nextPostNumber`)
  ).json();

  return result;
};
