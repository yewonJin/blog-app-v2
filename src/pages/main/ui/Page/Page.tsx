import { CategoryList } from "@/widgets/CategoryList";
import { PostRecentList } from "@/widgets/PostRecentList";

export async function MainPage() {
  return (
    <>
      <CategoryList />
      <PostRecentList />
    </>
  );
}
