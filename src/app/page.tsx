import { getCategory } from "@/entities/category/api/getCategory";
import { getPost } from "@/entities/post/api/getPost";
import { CategoryList } from "@/widgets/CategoryList";
import { PostRecentList } from "@/widgets/PostRecentList";

export default async function Page() {
  const posts = await getPost();
  const categories = await getCategory();

  return (
    <>
      <CategoryList categories={JSON.parse(JSON.stringify(categories))} />
      <PostRecentList posts={JSON.parse(JSON.stringify(posts))} />
    </>
  );
}
