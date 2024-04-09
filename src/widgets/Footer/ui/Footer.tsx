"use client";

import { Icon } from "@/shared/ui";
import { LinkContainer, StyledFooter } from "./Footer.styled";

export function Footer() {
  return (
    <StyledFooter>
      <h2>도로모의 기술 블로그</h2>
      <LinkContainer>
        <Icon
          type="github"
          onClick={() => window.open("https://github.com/yewonJin")}
        />
      </LinkContainer>
      <p># Contact : jyw966@naver.com</p>
      <p>Copyright © doromo. All Rights Reserved.</p>
    </StyledFooter>
  );
}
