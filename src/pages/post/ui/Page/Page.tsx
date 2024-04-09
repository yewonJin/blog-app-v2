import { PostDetails } from "@/widgets/PostDetails";
import { getPostByPostNumber } from "@/entities/post/api/getPost";
import { RelatedPostList } from "@/widgets/RelatedPostList";
import { getRelatedPosts } from "@/entities/category";

type Props = {
  id: number;
};

export async function PostPage({ id }: Props) {
  const post = await getPostByPostNumber(id);
  const relatedPosts = await getRelatedPosts(post);

  return (
    <>
      <PostDetails post={JSON.parse(JSON.stringify(post))} />
      <RelatedPostList posts={JSON.parse(JSON.stringify(relatedPosts))} />
    </>
  );
}
