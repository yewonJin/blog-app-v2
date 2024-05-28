import { Post } from "@/entities/post";

export const sortByRecentDate = (arr: Post[]) => {
  return arr.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
