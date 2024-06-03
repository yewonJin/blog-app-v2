import { CategoryPostList } from "@/widgets/CategoryPostList";
import { ScrollToTop } from "@/shared/ui";
import { Post, getPostByPostNumber, sortByRecentDate } from "@/entities/post";
import { getCategoryByName } from "@/entities/category";

export default async function Page({ params }: { params: { name: string } }) {
  const category = await getCategoryByName(params.name);
  const posts = await Promise.all(
    category.posts.map((item) => getPostByPostNumber(item))
  ).then((res) => sortByRecentDate(res as Post[]));

  return (
    <>
      <CategoryPostList posts={posts} categoryName={category.name} />
      <ScrollToTop />
    </>
  );
}
