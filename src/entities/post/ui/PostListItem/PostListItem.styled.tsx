"use client";

import styled from "@emotion/styled";

export const StyledPostListItem = styled.div`
  display: flex;
  gap: 1.5rem;
  background-color: var(--primaryFill);
  padding: 0.5rem 0.5rem;
  padding-right: 2rem;

  &:hover {
    background-color: var(--primaryHoverFill);
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 130px;
  aspect-ratio: 16/9;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.6rem;
  gap: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin: 0px;
`;

export const Summary = styled.p`
  color: var(--tertiaryText);
  font-size: 14px;
  margin: 0px;
`;

export const Date = styled.span`
  color: var(--tertiaryText);
  font-size: 14px;
`;
