import { Icon } from "@/shared/ui";
import { Menu, StyledHeader, Title } from "./Header.styled";
import { ChangeTheme } from "@/features/theme/changeTheme";

export function Header() {
  return (
    <nav>
      <StyledHeader>
        <Title>DLOG</Title>
        <Menu>
          <ChangeTheme theme="dark" />
          <ChangeTheme theme="light" />
          <Icon type="search" />
        </Menu>
      </StyledHeader>
    </nav>
  );
}
