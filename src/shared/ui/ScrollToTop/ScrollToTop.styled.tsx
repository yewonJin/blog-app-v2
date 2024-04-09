"use client";

import styled from "@emotion/styled";

export const StyledScrollToTop = styled.div`
  position: fixed;
  right: 26vw;
  bottom: 20vh;
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

  @media (max-width: 900px) {
    right: 10vw;
    bottom: 10vh;
  }
`;
