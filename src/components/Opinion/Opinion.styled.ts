import styled from "styled-components";

export const OpinionSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  box-sizing: content-box;
  width: min(80rem, 100%);
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
  margin: auto;

  @media (max-width: 48.12em) {
    grid-template-columns: repeat(2, 1fr);
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;
export const ButtonOpinion = styled.section`
  box-sizing: content-box;
  width: (100%);
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  margin: auto;

  @media (max-width: 48.12em) {
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;
