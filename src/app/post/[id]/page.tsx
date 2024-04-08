import { PostPage } from "@/pages/post";

export default async function Page({ params }: { params: { id: string } }) {
  return <PostPage id={parseInt(params.id)} />;
}
