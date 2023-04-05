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
  height: 45vh;
  border-radius: 10px;
  padding: 1.6rem;
  text-transform: capitalize;
  transition: 0.2s linear;
  border: none;
  :hover {
    cursor: pointer;
    background-color: var(--color-dark-grey);
  }

  @media (max-width: 40em) {
    display: none;
  }
`;

export const ProductContainer = styled.div`
  position: static;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
  /* align-content: space-around; */
  align-items: center;
  height: 60vh;
  width: 100vw;
  border-radius: 10px;
  background-color: var(--color-white);
  transition: 0.2s linear;
  border: none;
  gap: 10px;

  @media (max-width: 40em) {
    flex-direction: column;
    align-items: stretch;
    height: 57vh;

    button {
      width: 80%;
    }
  }
`;

export const Container = styled.button`
  position: static;
  display: flex;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
  font-size: 1rem;
  max-width: 200px;
  height: auto;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0px;
  /* text-transform: capitalize; */
  transition: 0.2s linear;
  border: none;

  @media (max-width: 40em) {
    height: 55vh;
  }
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
  height: 12vh;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0rem;

  @media (max-width: 40em) {
    h3 {
      font-size: 0.9rem;
    }
    h5 {
      font-size: 0.8rem;
    }
  }
`;

// export const Title = styled.h3`
// `

// export const name = styled.h5`
// `
