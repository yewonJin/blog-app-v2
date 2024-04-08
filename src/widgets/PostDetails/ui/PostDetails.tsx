import Link from "next/link";

import { MemoizedMDViwer, PostIndex, TPost } from "@/entities/post";
import {
  PostCategory,
  PostDate,
  PostHeader,
  PostHeaderWrapper,
  PostIndexHeading,
  PostNav,
  PostMain,
  PostTitle,
  StyledPostDetails,
  PostIndexNav,
} from "./PostDetails.styled";

export function PostDetails({ post }: { post: TPost }) {
  return (
    <StyledPostDetails>
      <PostNav />
      <PostMain>
        <PostHeader>
          <PostTitle>{post.title}</PostTitle>
          <PostHeaderWrapper>
            <PostCategory>
              <Link href={`/category/${post.category}`}>{post.category}</Link>
            </PostCategory>
            <PostDate>
              {new Date(post.date).toISOString().split("T")[0]}
            </PostDate>
          </PostHeaderWrapper>
        </PostHeader>
        <MemoizedMDViwer markdown={post.content} />
      </PostMain>
      <PostNav>
        <PostIndexNav>
          <PostIndexHeading>목차</PostIndexHeading>
          <PostIndex markdown={post.content} />
        </PostIndexNav>
      </PostNav>
    </StyledPostDetails>
  );
}
