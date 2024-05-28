import { Post } from "../model/types";

export const getPost = async (): Promise<Omit<Post, "content">[]> => {
  const result = await (await fetch(`${process.env.BASE_URL}/api/post`)).json();

  return result;
};

export const getPostByPostNumber = async (
  postNumber: number
): Promise<Post> => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/api/post?id=${postNumber}`)
  ).json();

  return result;
};

export const getPostByPostNumberWithoutContent = async (
  postNumber: number
): Promise<Omit<Post, "content">> => {
  const result = await (
    await fetch(
      `${process.env.BASE_URL}/api/post?id=${postNumber}&content=false`
    )
  ).json();

  return result;
};

export const getLastestPost = async (): Promise<number> => {
  const result = await (
    await fetch(`${process.env.BASE_URL}/api/post?postNumber=true`)
  ).json();

  return result;
};
