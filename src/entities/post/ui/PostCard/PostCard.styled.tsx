"use client";

import styled from "@emotion/styled";

export const StyledPostCard = styled.div`
  background-color: var(--primaryFill);

  transition-duration: 300ms;
  &:hover {
    transform: translateY(-6px);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 5px 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Summary = styled.p`
  margin: 0px;
  font-size: 16px;
  color: var(--tertiaryText);
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const SubContent = styled.div`
  border-top: 1px solid var(--secondaryFill);
  padding-top: 0.6rem;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: var(--tertiaryText);
`;
