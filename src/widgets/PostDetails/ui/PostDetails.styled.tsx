"use client";

import styled from "@emotion/styled";

export const StyledPostDetails = styled.div`
  max-width: 800px;
  margin: 0px auto;

  @media (max-width: 900px) {
    padding: 0px 1rem;
    margin: 0px;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--secondaryFill);
`;

export const PostHeaderWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: end;
`;

export const PostTitle = styled.h1`
  font-size: 28px;
  line-height: 40px;
  font-weight: 600;
  margin: 0px;

  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

export const PostCategory = styled.span`
  font-size: 16px;
  color: var(--tertiaryText);
  margin-bottom: 4px;

  &:hover {
    color: var(--secondaryText);
  }
`;

export const PostDate = styled.div`
  font-size: 16px;
  color: var(--tertiaryText);
  display: flex;
  align-items: end;
  margin-bottom: 4px;
`;
