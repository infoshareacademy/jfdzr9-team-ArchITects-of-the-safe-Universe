import styled from "styled-components";

export const SingleCardSection = styled.div`
  position: relative;
  opacity: 1;
  height: 300px;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  ::before {
    content: "";
    position: absolute;
    margin: 10px;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    transition: 0.2s linear;
  }
  > * {
    position: relative;
  }

  @media (max-width: 650px) {
    margin-top: 20px;
    width: 80vw;
  }
`;

export const SingleCardImage = styled.div`
  display: grid;
  place-items: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  margin: 2%;
  max-width: 200px;
  max-height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const SingleCardInfo = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 0.2rem;
  gap: 1.2rem;
  max-width: 200px;
`;
