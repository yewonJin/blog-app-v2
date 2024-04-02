import { pretendard } from "@/app/layout";
import StyledInput from "./Input.styled";

type Props = {
  onChange?: () => void;
  placeholder?: string;
  border?: boolean;
};

export function Input({ onChange, placeholder, border }: Props) {
  return (
    <StyledInput
      placeholder={placeholder}
      className={pretendard.className}
      border={border}
    />
  );
}
