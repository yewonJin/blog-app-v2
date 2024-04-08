import { getPostByPostNumber } from "@/entities/post/api/getPost";
import { PostDetails } from "@/widgets/PostDetails";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPostByPostNumber(parseInt(params.id));

  return <PostDetails post={JSON.parse(JSON.stringify(post))} />;
}
