import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 200px;
  height: 50px;

  :hover {
    outline: none;
    border-color: var(--color-orange);
  }

  :focus {
    outline: none;
    border-color: var(--color-orange);
  }

  @media (max-width: 650px) {
    height: 15px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  resize: vertical;

  :hover {
    outline: none;
    border-color: var(--color-orange);
  }

  :focus {
    outline: none;
    border-color: var(--color-orange);
  }

  @media (max-width: 650px) {
    height: 50px;
    font-size: 14px;
  }
`;
