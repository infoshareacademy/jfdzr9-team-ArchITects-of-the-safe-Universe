import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 0.2rem;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  font-weight: 800;
  width: auto;
  height: 1.4rem;
  padding: 0;
  background-color: var(--color-header);
  color: var(--color-text);

  cursor: pointer;
`;
