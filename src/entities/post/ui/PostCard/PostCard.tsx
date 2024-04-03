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
  imageUrl?: string;
};

export function PostCard({
  postNumber,
  title,
  summary,
  category,
  date,
  imageUrl,
}: Props) {
  return (
    <Link href={`/post/${postNumber}`}>
      <StyledPostCard>
        <ImageContainer>
          {imageUrl && <Image alt="post thumbnail" src={imageUrl} fill />}
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
