"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

type IndexProps = {
  isHighlighted: boolean;
  heading: number;
};

export const StyledPostIndex = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 50vh;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--secondaryFill);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  &:hover {
    overflow-y: scroll;

    ::-webkit-scrollbar-track {
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      background: #aaa;
      border-radius: 10px;
    }

    [data-theme="dark"] &::-webkit-scrollbar-thumb {
      background: #555;
      border-radius: 10px;
    }
  }
`;

export const PostIndexItem = styled.a<IndexProps>`
  font-size: 16px;
  color: var(--tertiaryText);

  &:hover {
    color: var(--primaryText);
  }

  ${({ heading }) => css`
    margin-left: ${heading === 1 || heading === 2 ? 0 : heading * 4}px;
  `}

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      color: var(--primaryWarning);
    `}
`;
