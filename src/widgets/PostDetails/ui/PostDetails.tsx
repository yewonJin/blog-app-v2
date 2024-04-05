import Link from "next/link";

import { MDViewer } from "@/entities/post";
import {
  PostCategory,
  PostDate,
  PostHeader,
  PostHeaderWrapper,
  PostTitle,
  StyledPostDetails,
} from "./PostDetails.styled";
import { getPostByPostNumber } from "@/entities/post/api/getPost";

export async function PostDetails({ id }: { id: number }) {
  const post = await getPostByPostNumber(id);

  return (
    <StyledPostDetails>
      <PostHeader>
        <PostHeaderWrapper>
          <PostTitle>{post.title}</PostTitle>
          <PostCategory>
            <Link href={`/category/${post.category}`}>{post.category}</Link>
          </PostCategory>
        </PostHeaderWrapper>
        <PostDate>{post.date.toISOString().split("T")[0]}</PostDate>
      </PostHeader>
      <MDViewer markdown={post.content} />
    </StyledPostDetails>
  );
}
