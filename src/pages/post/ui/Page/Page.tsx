import { PostDetails } from "@/widgets/PostDetails";
import { getPostByPostNumber } from "@/entities/post/api/getPost";

type Props = {
  id: number;
};

export async function PostPage({ id }: Props) {
  const post = await getPostByPostNumber(id);

  return <PostDetails post={JSON.parse(JSON.stringify(post))} />;
}
