"use client";

import styled from "@emotion/styled";

export const StyledRelatedPostList = styled.div`
  border-top: 1px solid var(--tertiaryText);
  width: 800px;
  margin: 30px auto;
  padding-top: 30px;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (max-width: 1400px) {
    padding: 30px 1rem;
    margin: 0px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
