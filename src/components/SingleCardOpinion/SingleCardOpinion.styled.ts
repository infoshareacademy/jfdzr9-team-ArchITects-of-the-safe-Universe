import styled from "styled-components";

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

export const OpinionContainer = styled.div`
  position: static;
  display: flex;
  align-items: center;
  height: 50vh;
  width: 100vw;
  border-radius: 10px;
  background-color: var(--color-very-light-grey);
  transition: 0.2s linear;
  border: none;
`;

export const SingleCardOpinionSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  flex-wrap: nowrap;
  font-size: 1rem;
  width: 200px;
  height: 50vh;
  border-radius: 10px;
  padding: 0.5rem;
  margin: auto;
  text-transform: capitalize;
  transition: 0.2s linear;
  border: none;
  background-color: var(--color-light-grey);
`;

export const SingleCardName = styled.div`
  font-weight: bold;
  gap: 1.2rem;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  justify-content: center;
`;

export const SingleCardDescribe = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 13px;
  text-align: center;
  margin: 10px;
  justify-content: center;
`;

export const SingleCardRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 20px;
  text-align: center;
  margin: 10px;
  justify-content: center;
`;
