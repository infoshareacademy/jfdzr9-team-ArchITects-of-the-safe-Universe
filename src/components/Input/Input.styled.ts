import styled from "styled-components";

export const InputField = styled.input`
  background-color: var(--color-very-light-grey);
  color: var(--color-dark-grey);
  border: none;
  border-radius: 10px;
  font-weight: 600;
  outline: none;
  box-shadow: border-box;
  padding-left: 15px;

  ::placeholder {
    color: var(--color-grey);
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  background-color: lightgrey;
  border-radius: 10px;
  background-color: var(--color-very-light-grey);
  color: var(--color-dark-grey);
  height: 35px;
  padding: 0 25px;
`;
