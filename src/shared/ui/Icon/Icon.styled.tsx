"use client";

import styled from "@emotion/styled";

const StyledIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  fill: var(--primaryText);

  &:hover {
    cursor: pointer;
    fill: var(--secondaryText);
  }
`;

export default StyledIcon;
