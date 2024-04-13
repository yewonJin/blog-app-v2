import { TPost } from "@/entities/post";
import { getPostByPostNumberWithoutContent } from "@/entities/post/api/getPost";
import { getCategoryByName } from "../api/getCategory";

export const getRelatedPosts = async (post: TPost) => {
  const category = await getCategoryByName(post.category);

  const categoryPosts = await Promise.all(
    category.posts.map(async (postNumber) => {
      if (postNumber === post.postNumber) return null;

      const res = await getPostByPostNumberWithoutContent(postNumber);

      return res;
    })
  );

  const relatedPosts = categoryPosts.filter((x) => x) as unknown as TPost[];

  return relatedPosts
    .map((item) => ({
      ...item,
      keywordCount:
        item.keyword?.reduce(
          (acc, cur) => (post.keyword.includes(cur) ? acc + 1 : acc),
          0
        ) || 0,
    }))
    .reverse()
    .sort((a, b) => b.keywordCount - a.keywordCount)
    .slice(0, 4);
};
