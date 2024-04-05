import Link from "next/link";

import { Icon } from "@/shared/ui";
import { Menu, StyledHeader, Logo } from "./Header.styled";
import { ChangeTheme } from "@/features/theme/changeTheme";

export function Header() {
  return (
    <nav>
      <StyledHeader>
        <Link href={"/"}>
          <Logo>DLOG</Logo>
        </Link>
        <Menu>
          <ChangeTheme theme="dark" />
          <ChangeTheme theme="light" />
          <Icon type="search" />
        </Menu>
      </StyledHeader>
    </nav>
  );
}
