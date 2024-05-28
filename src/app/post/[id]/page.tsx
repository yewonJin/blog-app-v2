import { PostDetails } from "@/widgets/PostDetails";
import { RelatedPostList } from "@/widgets/RelatedPostList";
import { getRelatedPosts } from "@/entities/category";
import { getLastestPost, getPostByPostNumber } from "@/entities/post";
import { ScrollToTop } from "@/shared/ui";

export async function generateStaticParams() {
  const postNumber = await getLastestPost();

  return Array.from({ length: postNumber - 1 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostByPostNumber(parseInt(params.id));
  const relatedPosts = await getRelatedPosts(post);

  return (
    <>
      <PostDetails post={JSON.parse(JSON.stringify(post))} />
      <RelatedPostList posts={JSON.parse(JSON.stringify(relatedPosts))} />
      <ScrollToTop />
    </>
  );
}
