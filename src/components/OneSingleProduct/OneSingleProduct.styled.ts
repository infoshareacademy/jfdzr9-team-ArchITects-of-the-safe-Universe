import styled from "styled-components";

export const OneSingleProductStyle = styled.div`
  display: flex;
  padding: 4rem;
  margin: 5rem 3rem;
  position: static;
  border-radius: 2rem;
  align-content: center;
  justify-content: center;
  flex-wrap: nowrap;
  height: 100%;
  background-color: var(--color-very-light-grey);
  /* border: 5px solid black; */
`;

export const OneSingleProductPhoto = styled.div`
  display: flex;
  position: static;
  align-content: space-around;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3%;
  /* border: 5px solid yellow; */
  height: 90%;
`;

export const OneSingleProductContainer = styled.div`
  display: flex;
  position: static;
  justify-content: flex-start;
  align-content: space-around;
  min-width: 50%;
  margin-right: 2%;
  margin-left: 2%;
  /* border: 5px solid green; */
  background-color: white;
`;
export const MainPhoto = styled.div`
  display: flex;
  position: static;
  justify-content: space-around;
  align-content: space-around;
  min-width: 60%;
  height: 90%;
  width: 100%;
  margin: 3%;
  /* border: 5px solid purple; */
  background-color: white;
`;

export const AllPhotos = styled.div`
  display: flex;
  position: static;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
  min-width: 40%;
  height: 100%;
  margin-right: 2%;
  margin-left: 2%;
  background-color: white;
  /* border: 5px solid pink; */
`;
export const OneSingleProductContainerButton = styled.div`
  display: flex;
  position: static;
  justify-content: flex-start;
  min-width: 50%;
  margin-right: 2%;
  margin-left: 2%;
  /* border: 5px solid black; */
`;
