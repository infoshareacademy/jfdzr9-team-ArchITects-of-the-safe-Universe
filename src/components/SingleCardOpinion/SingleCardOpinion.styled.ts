import styled from "styled-components";

export const OpinionContainer = styled.div`
  position: static;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
  align-items: center;
  height: 50vh;
  width: 92vw;
  border-radius: 10px;
  background-color: var(--color-light-grey);
  transition: 0.2s linear;
  border: none;
  gap: 10px;
`;

export const SingleCardOpinionSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: normal;
  align-content: center;
  flex-wrap: nowrap;
  font-size: 1rem;
  width: 200px;
  height: 45vh;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0px;
  text-transform: capitalize;
  transition: 0.2s linear;
  border: none;
  background-color: var(--color-very-light-grey);
`;

export const SingleCardName = styled.div`
  font-weight: bold;
  gap: 1.2rem;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  justify-content: end;
`;

export const SingleCardDescribe = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 12px;
  text-align: center;
  margin: 10px;
`;

export const SingleCardRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;
