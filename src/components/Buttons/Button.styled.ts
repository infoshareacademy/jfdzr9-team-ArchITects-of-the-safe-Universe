import styled from "styled-components";

// kolory buttonów będą podmienione po podłączeniu styli globalnych

export const ButtonS = styled.button`
  height: 40px;
  width: 150px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  box-sizing: border-box;
  background-color: grey;
  color: black;
  /* background-color: var(--color-light-grey); */
  /* color: var(--color-dark-grey); */

  :hover {
    cursor: pointer;
    background-color: lightgrey;
    /* background-color: var(--color-very-light-grey); */
  }
`;

export const ButtonM = styled.button`
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  box-sizing: border-box;
  background-color: grey;
  color: black;
  /* background-color: var(--color-light-grey); */
  /* color: var(--color-dark-grey); */

  :hover {
    cursor: pointer;
    background-color: lightgrey;
    /* background-color: var(--color-very-light-grey); */
  }
`;
