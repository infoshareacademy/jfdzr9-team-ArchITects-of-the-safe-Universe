import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
`;

export const Input = styled.input`
  background-color: var(--backgroundColor);
  color: var(--color-footer-text);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 200px;

  :hover {
    outline: none;
    border-color: var(--color-orange);
  }

  :focus {
    outline: none;
    border-color: var(--color-orange);
  }

  @media (max-width: 650px) {
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  background-color: var(--backgroundColor);
  color: var(--color-footer-text);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  height: 180px;
  width: 200px;
  margin-bottom: 10px;

  :hover {
    outline: none;
    border-color: var(--color-orange);
  }

  :focus {
    outline: none;
    border-color: var(--color-orange);
  }

  @media (max-width: 650px) {
    font-size: 14px;
  }
`;
