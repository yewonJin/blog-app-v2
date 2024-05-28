import { CategoryList } from "@/widgets/CategoryList";
import { PostRecentList } from "@/widgets/PostRecentList";
import { getCategory } from "@/entities/category";
import { getPost } from "@/entities/post";

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
