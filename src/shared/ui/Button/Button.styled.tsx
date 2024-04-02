"use client";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ButtonProps = {
  buttonStyle?: "success" | "info" | "error" | "warning";
};

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 0.8rem;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }

  ${({ buttonStyle }) => setButtonStyle(buttonStyle)}
`;

const setButtonStyle = (style?: "success" | "info" | "error" | "warning") => {
  switch (style) {
    case "success":
      return css`
        color: var(--whiteColor);
        background-color: var(--primarySuccess);
        &:hover {
          background-color: var(--secondarySuccess);
        }
      `;

    case "info":
      return css`
        color: var(--whiteColor);
        background-color: var(--primaryInfo);
        &:hover {
          background-color: var(--secondaryInfo);
        }
      `;

    case "error":
      return css`
        color: var(--whiteColor);
        background-color: var(--primaryError);
        &:hover {
          background-color: var(--secondaryError);
        }
      `;

    case "warning":
      return css`
        color: var(--whiteColor);
        background-color: var(--primaryWarning);
        &:hover {
          background-color: var(--secondaryWarning);
        }
      `;

    default:
      return css`
        color: var(--secondaryText);
        background-color: var(--primaryFill);
        &:hover {
          background-color: var(--primaryHoverFill);
        }
      `;
  }
};

export default StyledButton;
