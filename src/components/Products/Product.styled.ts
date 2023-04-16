import styled from "styled-components";

export const Navigator = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ProductContainer = styled.div`
  position: static;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60vh;
  width: 100vw;
  border-radius: 10px;
  transition: 0.2s linear;
  border: none;
  gap: 5px;

  @media (max-width: 1024px) {
    min-height: 55vh;
  }

  @media (max-width: 650px) {
    flex-direction: column;

    button {
      width: 80%;
    }
  }
`;

export const Container = styled.button`
  position: static;
  display: flex;
  align-items: space-between;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1rem;
  height: 55vh;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0px;
  transition: 0.2s linear;
  border: none;
`;

export const ContainerPhoto = styled.div`
  display: flex;
  justify-content: center;
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

  @media (max-height: 650px) {
    height: 200px;

    img {
      width: auto;
      height: 100%;
    }
  }
`;

export const ContainerText = styled.label`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  width: 180px;
  height: 15vh;
  margin-top: 15px;

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
    h3 {
      font-size: 0.8rem;
    }
    h4 {
      font-size: 0.7rem;
    }
  }
`;
