import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroupNextTo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 600px;
  gap: 40px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 200px;
  height: 50px;
`;

export const TextArea = styled.textarea`
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  resize: vertical;
`;