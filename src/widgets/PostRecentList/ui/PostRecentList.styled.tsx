"use client";

import styled from "@emotion/styled";

export const StyledPostRecentList = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1200px) {
    padding: 0px 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 850px) {
    padding: 0px 1rem;
    grid-template-columns: 1fr;
  }
`;
