import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const SignInBottomConrainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const ForgotPasswordLink = styled.p`
  color: seagreen;
  &:hover {
    color: darkseagreen;
  }
`;
