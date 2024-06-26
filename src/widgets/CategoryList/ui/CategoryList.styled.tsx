"use client";

import styled from "@emotion/styled";

export const StyledCategoryList = styled.div`
  width: 1200px;
  margin: 0px auto;
  display: flex;
  gap: 0.8rem;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0px 1rem;
  }

  @media (max-width: 900px) {
    overflow-x: scroll;
    padding: 0px 1rem;
  }
`;
