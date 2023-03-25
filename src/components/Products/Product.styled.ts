import styled from "styled-components";

export const Navigator = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ArrowLeft = styled.button`
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 2.5vw;
  height: 50vh;
  border-radius: 10px;
  padding: 1.6rem;
  text-transform: capitalize;
  transition: 0.2s linear;
  :hover {
    cursor: pointer;
    background-color: lightgrey;
  }
`;

export const ProductContainer = styled.button`
  position: static;
  height: 50vh;
  width: 95vw;
  border-radius: 10px;
  background-color: var(--color-very-light-grey);
  transition: 0.2s linear;
`;

export const ArrowRight = styled.button`
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 2.5vw;
  height: 50vh;
  border-radius: 10px;
  padding: 1.6rem;
  text-transform: capitalize;
  transition: 0.2s linear;
  :hover {
    cursor: pointer;
    background-color: lightgrey;
  }
`;
