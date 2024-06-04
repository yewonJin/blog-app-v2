import { RevalidateForm } from "@/features/revalidate";
import { FormWrapper, StyledAdmin, Title } from "./Admin.styled";

export function Admin() {
  return (
    <StyledAdmin>
      <Title>재검증</Title>
      <FormWrapper>
        <RevalidateForm label="포스트 디테일" path="/post/[id]" />
        <RevalidateForm label="메인 페이지" path="/" />
      </FormWrapper>
    </StyledAdmin>
  );
}
