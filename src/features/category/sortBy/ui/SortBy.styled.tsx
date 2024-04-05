"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

type SortByProps = {
  isSorted: boolean;
};

export const StyledSortBy = styled.div<SortByProps>`
  ${({ isSorted }) =>
    isSorted &&
    css`
      & > div {
        background-color: var(--primaryColor);

        &:hover {
          background-color: var(--primaryColor);
        }
      }

      & > div > div {
        color: var(--whiteColor);
      }
    `}
`;
