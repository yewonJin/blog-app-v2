import { pretendard } from "@/app/layout";
import StyledButton from "./Button.styled";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: "success" | "info" | "error" | "warning";
  children: React.ReactNode;
}

export function Button({ onClick, buttonType, children, ...rest }: Props) {
  return (
    <StyledButton
      onClick={onClick}
      buttonType={buttonType}
      className={pretendard.className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
