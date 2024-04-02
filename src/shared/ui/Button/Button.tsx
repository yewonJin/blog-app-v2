import { pretendard } from "@/app/layout";
import StyledButton from "./Button.styled";

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: "success" | "info" | "error" | "warning";
  children: React.ReactNode;
};

export function Button({ onClick, style, children }: Props) {
  return (
    <StyledButton
      onClick={onClick}
      buttonStyle={style}
      className={pretendard.className}
    >
      {children}
    </StyledButton>
  );
}
