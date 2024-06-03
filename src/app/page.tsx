import { CategoryList } from "@/widgets/CategoryList";
import { PostRecentList } from "@/widgets/PostRecentList";
import { getCateroies } from "@/entities/category";
import { getAllPosts } from "@/entities/post";

export default async function Page() {
  const posts = await getAllPosts();
  const categories = await getCateroies();

  return (
    <>
      <CategoryList categories={JSON.parse(JSON.stringify(categories))} />
      <PostRecentList posts={JSON.parse(JSON.stringify(posts))} />
    </>
  );
}
