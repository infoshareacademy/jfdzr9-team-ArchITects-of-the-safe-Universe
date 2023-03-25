import styled from "styled-components";

export const ButtonS = styled.button`
  height: 40px;
  width: 150px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--color-light-grey);
  color: var(--color-dark-grey);
  font-weight: 600;

  :hover {
    cursor: pointer;
    background-color: var(--color-very-light-grey);
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
  background-color: var(--color-light-grey);
  color: var(--color-dark-grey);
  font-weight: 600;

  :hover {
    cursor: pointer;
    background-color: var(--color-very-light-grey);
  }
`;
