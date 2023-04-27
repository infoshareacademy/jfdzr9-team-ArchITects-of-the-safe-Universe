import styled from "styled-components";
import TownPhotoMainWeb from "../../assets/Web1920x1080px_04.png";
import TownPhotoMainTablet from "../../assets/Tablet1366x250px_04.png";
import TownPhotoMainMobile from "../../assets/Phone375x200_04.png";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
  width: 100vw;
  border-radius: 10px;
  transition: 0.2s linear;
  border: none;
  gap: 5px;

  @media (max-width: 1024px) {
    height: 53vh;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-bottom: 10px;
    gap: 15px;

    button {
      width: 80%;
    }
  }
`;

export const UserProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 65vh;
  width: 100vw;
  border-radius: 10px;
  transition: 0.2s linear;
  border: none;
  gap: 5px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-bottom: 10px;
    gap: 15px;

    button {
      width: 80%;
    }
  }
`;

export const Container = styled.div`
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
  background-color: var(--color-very-light-grey);

  @media (max-width: 1024px) {
    height: 48vh;
  }
`;

export const UserContainer = styled.div`
  position: static;
  display: flex;
  align-items: space-between;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1rem;
  height: 60vh;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0px;
  transition: 0.2s linear;
  border: none;
  background-color: var(--color-very-light-grey);
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

  @media (max-height: 700px) {
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
  text-align: center;
  justify-content: space-between;
  font-size: 1rem;
  width: 180px;
  height: 15vh;
  margin-top: 15px;
  color: var(--color-black);

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

export const FewContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const TownPhotoWeb = styled.div`
  display: block;
  margin: 0;
  background-image: url(${TownPhotoMainWeb});
  background-size: cover;
  height: 330px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    background-image: url(${TownPhotoMainTablet});
    height: 280px;
  }

  @media (max-width: 650px) {
    background-image: url(${TownPhotoMainMobile});
    height: 200px;
    margin-top: 10px;
    background-size: contain;
  }
`;
