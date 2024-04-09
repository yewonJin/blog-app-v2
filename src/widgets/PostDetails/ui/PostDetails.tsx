import Link from "next/link";

import { MemoizedMDViwer, PostIndex, TPost } from "@/entities/post";
import {
  Category,
  Date,
  Header,
  HeaderWrapper,
  IndexTitle,
  Nav,
  Main,
  Title,
  StyledPostDetails,
  IndexContainer,
  IndexFooter,
} from "./PostDetails.styled";
import { getDate } from "@/shared/lib";

export function PostDetails({ post }: { post: TPost }) {
  return (
    <StyledPostDetails>
      <Nav />
      <Main>
        <Header>
          <Title>{post.title}</Title>
          <HeaderWrapper>
            <Category>
              <Link href={`/category/${post.category}`}>{post.category}</Link>
            </Category>
            <Date>{getDate(post.date)}</Date>
          </HeaderWrapper>
        </Header>
        <MemoizedMDViwer markdown={post.content} />
      </Main>
      <Nav>
        <IndexContainer>
          <IndexTitle>목차</IndexTitle>
          <PostIndex markdown={post.content} />
          <IndexFooter href="#관련-포스팅">관련 포스팅</IndexFooter>
        </IndexContainer>
      </Nav>
    </StyledPostDetails>
  );
}
