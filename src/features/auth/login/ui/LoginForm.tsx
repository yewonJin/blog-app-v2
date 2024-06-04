"use client";

import { Button, Input } from "@/shared/ui";
import { StyledLoginForm, Title } from "./LoginForm.styled";
import { useLogin } from "../lib/useLogin";

export function LoginForm() {
  const { input, handleInputChange, handleSubmit } = useLogin();

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <Title>로그인 페이지</Title>
      <Input
        value={input.id}
        handleInputChange={handleInputChange}
        name="id"
        type="text"
        placeholder="아이디"
        border
      ></Input>
      <Input
        value={input.password}
        handleInputChange={handleInputChange}
        name="password"
        type="password"
        placeholder="비밀번호"
        border
      ></Input>
      <Button>로그인</Button>
    </StyledLoginForm>
  );
}
