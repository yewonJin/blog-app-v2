"use client";

import styled from "@emotion/styled";

export const StyledHeader = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0px auto;

  @media (max-width: 1200px) {
    padding: 0px 1rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;
