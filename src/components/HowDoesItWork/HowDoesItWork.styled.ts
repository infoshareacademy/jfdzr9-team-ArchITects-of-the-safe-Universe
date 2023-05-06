import styled from "styled-components";

export const HowDoesItWorkSection = styled.section`
  box-sizing: content-box;
  width: min(80rem, 100%);
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;
  margin: auto;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    button {
      width: 100%;
    }
  }
`;

export const ButtonStartRenting = styled.section`
  box-sizing: content-box;
  width: 60%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  margin: auto;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;
