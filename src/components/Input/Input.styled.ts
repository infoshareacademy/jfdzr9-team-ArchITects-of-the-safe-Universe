import styled from "styled-components";

// kolory do podmiany po podłączeniu styli globalnych

export const InputField = styled.input`
  /* background-color: var(--color-very-light-grey); */
  background-color: lightgrey;
  /* color: var(--color-dark-grey); */
  color: black;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  outline: none;
  box-shadow: border-box;
  padding-left: 15px;

  ::placeholder {
    /* color: var(--color-grey); */
    color: grey;
  }
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  background-color: lightgrey;
  border-radius: 10px;
  /* background-color: var(--color-very-light-grey); */
  background-color: lightgrey;
  /* color: var(--color-dark-grey); */
  color: black;
  width: 250px;
  height: 35px;
  padding: 0 25px;
`;
