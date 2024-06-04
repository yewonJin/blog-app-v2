"use client";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

type InputProps = {
  border?: boolean;
};

const StyledInput = styled.input<InputProps>`
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  padding: 0.6rem 1.2rem;
  background-color: var(--primaryBackground);
  color: var(--primaryText);

  ::placeholder {
    color: var(--tertiaryText);
  }

  ${({ border }) =>
    border &&
    css`
      border-radius: 20px;
      border: 1px solid var(--secondaryFill);
    `}
`;

export default StyledInput;
