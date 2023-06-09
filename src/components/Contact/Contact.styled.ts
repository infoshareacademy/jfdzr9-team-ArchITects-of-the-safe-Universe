import styled from "styled-components";

export const FormContainer = styled.form`
  color: var(--color-footer-text);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    /* text-align: justify; */
    display: inline-block;
    vertical-align: top;
    width: 90%;
  }
  .title {
    text-align: center;
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
  .rules {
    margin-top: 50px;
  }
`;

export const Input = styled.input`
  background-color: var(--backgroundColor);
  color: var(--color-footer-text);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  width: 300px;

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
    height: 150px;
    font-size: 14px;
  }
`;
