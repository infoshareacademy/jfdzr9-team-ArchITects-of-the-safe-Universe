import styled from "styled-components";

export const InputField = styled.input`
  border: none;
  height: 30px;
  outline: none;
  font-size: 16px;
  padding-left: 25px;
  box-shadow: border-box;
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 40em) {
    height: 46px;
  }
`;
