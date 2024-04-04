"use client";

import styled from "@emotion/styled";

export const StyledCategoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  background-color: var(--primaryFill);
  border-radius: 0.5rem;
  padding: 0.6rem 1rem;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: var(--primaryHoverFill);
  }
`;

export const CategoryName = styled.div`
  color: var(--primaryText);
`;

export const CategoryLength = styled.div`
  font-size: 14px;
  color: var(--secondaryText);
`;
