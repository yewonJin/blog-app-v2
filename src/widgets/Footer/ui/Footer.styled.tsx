"use client";

import styled from "@emotion/styled";

export const StyledFooter = styled.div`
  text-align: center;
  height: 200px;
  margin-top: 100px;
  margin-bottom: 60px;
  padding-top: 30px;
  border-top: 1px solid var(--secondaryFill);

  > h2 {
    margin-bottom: 30px;
  }

  > p {
    margin: 5px 0px;
    font-size: 14px;
    color: var(--tertiaryText);
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
`;
