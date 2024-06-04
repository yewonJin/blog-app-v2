import { pretendard } from "@/app/layout";
import StyledInput from "./Input.styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  border?: boolean;
}

export function Input({ handleInputChange, border, ...rest }: Props) {
  return (
    <StyledInput
      onChange={handleInputChange}
      className={pretendard.className}
      border={border}
      {...rest}
    />
  );
}
