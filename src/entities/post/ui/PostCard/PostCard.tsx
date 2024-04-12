import Link from "next/link";
import Image from "next/image";

import {
  StyledPostCard,
  ImageContainer,
  Content,
  SubContent,
  Title,
  Summary,
} from "./PostCard.styled";

type Props = {
  postNumber: string;
  title: string;
  summary: string;
  category: string;
  date: string;
};

export function PostCard({
  postNumber,
  title,
  summary,
  category,
  date,
}: Props) {
  return (
    <Link href={`/post/${postNumber}`}>
      <StyledPostCard>
        <ImageContainer>
          <Image
            alt="post thumbnail"
            sizes="400px"
            src={`https://doromo.s3.ap-northeast-2.amazonaws.com/posts/${postNumber}/thumbnail.webp`}
            fill
            style={{ objectFit: "cover" }}
          />
        </ImageContainer>
        <Content>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
          <SubContent>
            <span>{category}</span>
            <span>{date}</span>
          </SubContent>
        </Content>
      </StyledPostCard>
    </Link>
  );
}
