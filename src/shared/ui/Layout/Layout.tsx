import { StyledLayout } from "./Layout.styled";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return <StyledLayout>{children}</StyledLayout>;
}
