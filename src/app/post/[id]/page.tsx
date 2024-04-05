import { PostDetails } from "@/widgets/PostDetails";

export default async function Page({ params }: { params: { id: string } }) {
  return <PostDetails id={parseInt(params.id)} />;
}
