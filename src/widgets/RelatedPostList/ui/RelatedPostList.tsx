import { PostListItem, TPost } from "@/entities/post";
import { StyledRelatedPostList } from "./RelatedPostList.styled";
import Link from "next/link";

type Props = {
  posts: TPost[];
};

export function RelatedPostList({ posts }: Props) {
  return (
    <StyledRelatedPostList>
      <h2 id="관련-포스팅">관련 포스팅</h2>
      {posts.map((post) => (
        <Link key={post.postNumber} href={`/post/${post.postNumber}`}>
          <PostListItem post={post} />
        </Link>
      ))}
    </StyledRelatedPostList>
  );
}
