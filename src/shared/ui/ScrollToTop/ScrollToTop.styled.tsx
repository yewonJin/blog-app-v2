"use client";

import styled from "@emotion/styled";

export const StyledScrollToTop = styled.div`
  position: fixed;
  right: 6vw;
  bottom: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  background-color: var(--primaryFill);

  &:hover {
    background-color: var(--primaryHoverFill);
    cursor: pointer;
  }
`;
