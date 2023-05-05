import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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
  background-color: var(--backgroundColor);
  border: 1px solid var(--color-grey);
  color: var(--color-text);
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 220px;

  /* :hover {
    outline: none;
    border-color: var(--color-orange);
  } */
  :hover {
    outline: none;
    border-color: var(--color-orange);
    box-shadow: 0 0 5pt 0.5pt var(--color-orange);
  }

  /* :focus {
    outline: none;
    border-color: var(--color-orange);
  } */

  :focus {
    border-color: var(--color-orange);
    box-shadow: 0 0 5pt 2pt var(--color-orange);
    outline-width: 0px;
  }

  @media (max-width: 650px) {
    height: 15px;
    font-size: 14px;
  }
`;

export const InputFile = styled.input`
  background-color: var(--backgroundColor);
  color: var(--color-text);
  padding-top: 10px;
  border: none;
  font-size: 16px;
  width: 240px;
  height: 50px;
`;

export const TextArea = styled.textarea`
  background-color: var(--backgroundColor);
  color: var(--color-text);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  height: 150px;
  width: 220px;

  :hover {
    outline: none;
    border-color: var(--color-orange);
    box-shadow: 0 0 5pt 0.5pt var(--color-orange);
  }

  :focus {
    outline: none;
    border-color: var(--color-orange);
    box-shadow: 0 0 5pt 0.5pt var(--color-orange);
  }

  @media (max-width: 650px) {
    height: 50px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 5px 10px;
  background-color: var(--backgroundColor);
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 240px;
  height: 37px;
  color: var(--color-text);

  :hover {
    outline: none;
    border-color: var(--color-orange);
    box-shadow: 0 0 5pt 0.5pt var(--color-orange);
  }

  :focus {
    outline: none;
    border-color: var(--color-orange);
    box-shadow: 0 0 5pt 0.5pt var(--color-orange);
  }

  @media (max-width: 650px) {
    height: 30px;
    padding: 0px;
  }
`;

export const CategotyContainer = styled.div`
  display: flex;
  justify-content: center;
`;
