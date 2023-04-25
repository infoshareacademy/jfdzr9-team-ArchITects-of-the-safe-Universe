import styled from "styled-components";

export const FormContainer = styled.form`
  margin-top: 20px;
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

  :hover {
    outline: none;
    border-color: var(--color-orange);
  }

  :focus {
    outline: none;
    border-color: var(--color-orange);
  }

  @media (max-width: 40em) {
    height: 15px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  margin-bottom: 10px;
  height: 150px;
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
