import { Post, getPostByPostNumber } from "@/entities/post";
import { getCategoryByName } from "@/entities/category";

export const getRelatedPosts = async (post: Post) => {
  const category = await getCategoryByName(post.category);

  const categoryPosts = await Promise.all(
    category.posts.map(async (postNumber: number) => {
      if (postNumber === post.postNumber) return null;

      const res = await getPostByPostNumber(postNumber);

      return res;
    })
  );

  const relatedPosts = categoryPosts.filter((x) => x) as unknown as Post[];

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
