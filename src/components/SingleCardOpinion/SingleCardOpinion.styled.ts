import styled from "styled-components";

export const SingleCardOpinionSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  width: 100%;
  /* width: 300px; */
  background-color: var(--color-light-grey);
  margin-top: 20px;
  border-radius: 10px;
`;

export const SingleCardName = styled.div`
  font-weight: bold;
  gap: 1.2rem;
  margin: 10px;
  font-size: 20px;
`;

export const SingleCardDescribe = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 15px;
  text-align: justify;
  margin: 10px;
`;

export const SingleCardRating = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 15px;
  margin: 10px;
`;
