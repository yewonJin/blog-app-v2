import { Post } from "../model/types";

export const sortByRecentDate = (arr: Post[]) => {
  return arr.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
