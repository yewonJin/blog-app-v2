import Link from "next/link";

import { PostListItem, Post } from "@/entities/post";
import { Container, StyledRelatedPostList } from "./RelatedPostList.styled";

type Props = {
  posts: Post[];
};

export function RelatedPostList({ posts }: Props) {
  return (
    <Container>
      <StyledRelatedPostList>
        <h2 id="관련-포스트">관련 포스트</h2>
        {posts.length ? (
          posts.map((post) => (
            <Link key={post.postNumber} href={`/post/${post.postNumber}`}>
              <PostListItem post={post} />
            </Link>
          ))
        ) : (
          <p>관련 포스트가 없습니다.</p>
        )}
      </StyledRelatedPostList>
    </Container>
  );
}
