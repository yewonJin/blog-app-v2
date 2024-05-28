import Image from "next/image";
import { Post } from "@/entities/post";
import { getDate } from "@/shared/lib";
import {
  StyledPostListItem,
  ImageContainer,
  Content,
  Title,
  Summary,
  Date,
} from "./PostListItem.styled";

type Props = {
  post: Post;
};

export function PostListItem({ post }: Props) {
  return (
    <StyledPostListItem>
      <ImageContainer>
        <Image
          alt="post thumbnail"
          sizes="400px"
          src={`https://doromo.s3.ap-northeast-2.amazonaws.com/posts/${post.postNumber}/thumbnail.webp`}
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageContainer>
      <Content>
        <Title>{post.title}</Title>
        <Summary>{post.summary}</Summary>
        <Date>{getDate(post.date)}</Date>
      </Content>
    </StyledPostListItem>
  );
}
