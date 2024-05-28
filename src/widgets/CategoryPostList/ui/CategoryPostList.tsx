import Link from "next/link";

import { PostListItem, Post } from "@/entities/post";
import {
  Container,
  StyledRelatedPostList,
  Title,
} from "./CategoryPostList.styled";

type Props = {
  posts: Post[];
  categoryName: string;
};

export function CategoryPostList({ posts, categoryName }: Props) {
  return (
    <Container>
      <Title>{categoryName}</Title>
      <StyledRelatedPostList>
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
