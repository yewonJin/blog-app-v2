import Image from "next/image";
import { TPost } from "../../model/types";
import {
  StyledPostListItem,
  ImageContainer,
  Content,
  Title,
  Summary,
  Date,
} from "./PostListItem.styled";
import { getDate } from "@/shared/lib";

type Props = {
  post: TPost;
};

export function PostListItem({ post }: Props) {
  return (
    <StyledPostListItem>
      <ImageContainer>
        <Image
          alt="post thumbnail"
          sizes="400px"
          src={`https://doromobucket.s3.ap-northeast-2.amazonaws.com/posts/${post.postNumber}/thumbnail.webp`}
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
