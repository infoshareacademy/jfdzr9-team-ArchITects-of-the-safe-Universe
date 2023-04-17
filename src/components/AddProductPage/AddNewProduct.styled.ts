import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
`;

export const FormGroupImg = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
`;

export const FormGroupNextTo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 600px;
  gap: 40px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 200px;

  @media (max-width: 650px) {
    height: 15px;
    font-size: 14px;
  }
`;

export const InputFile = styled.input`
  padding: 10px;
  border: none;
  font-size: 16px;
  margin-bottom: 10px;
  width: 300px;
  height: 50px;
`;

export const TextArea = styled.textarea`
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  resize: vertical;
  @media (max-width: 650px) {
    height: 25px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 222px;
  height: 37px;

  @media (max-width: 650px) {
    height: 30px;
    padding: 0px;
  }
`;
