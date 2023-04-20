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

  @media (max-width: 40em) {
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
  @media (max-width: 40em) {
    height: 25px;
    font-size: 14px;
  }
`;
