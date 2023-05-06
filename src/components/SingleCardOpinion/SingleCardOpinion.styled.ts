import styled from "styled-components";

export const OpinionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  width: 100vw;
  border-radius: 10px;
  transition: 0.2s linear;
  border: none;
  margin-top: 10vh;

  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 6vh;
  }
`;

export const SingleCardOpinionSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  flex-wrap: nowrap;
  width: 200px;
  height: 50vh;
  border-radius: 10px;
  padding: 0.5rem;
  margin: auto;
  transition: 0.2s linear;
  border: none;
  background-color: var(--backgroundColorElements);
  color: var(--color-text);

  @media (max-width: 650px) {
    width: 80%;
    /* height: 60vh; */
  }
`;

export const SingleCardName = styled.div`
  font-weight: bold;
  gap: 1.2rem;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  justify-content: center;

  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const SingleCardDescribe = styled.div`
  display: flex;
  gap: 1.2rem;
  text-align: center;
  margin: 10px;
  justify-content: center;
  word-break: break-word;
  word-wrap: break-word;
  max-width: auto;

  @media (max-width: 650px) {
    font-size: 14px;
  }
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
