import styled from "styled-components";

export const Navigator = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Arrow = styled.button`
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
  border: none;
  :hover {
    cursor: pointer;
    background-color: var(--color-dark-grey);
  }
`;

export const ProductContainer = styled.div`
  position: static;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
  align-items: center;
  height: 50vh;
  width: 92vw;
  border-radius: 10px;
  background-color: var(--color-very-light-grey);
  transition: 0.2s linear;
  border: none;
  gap: 10px;
`;

export const Container = styled.button`
  position: static;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: space-around;
  flex-wrap: wrap;
  font-size: 1rem;
  width: 200px;
  height: 45vh;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0px;
  text-transform: capitalize;
  transition: 0.2s linear;
  border: none;
`;

export const ContainerPhoto = styled.div`
  display: flex;
  background-color: var(--color-orange);
  width: 180px;
  height: 250px;
  border-radius: 10px;
  margin: 0.1rem;
  text-transform: capitalize;
  transition: 0.2s linear;

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerText = styled.label`
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  width: 180px;
  height: 15vh;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0rem;
`;
