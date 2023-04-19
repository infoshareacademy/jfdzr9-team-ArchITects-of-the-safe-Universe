import styled from "styled-components";

export const UserOptionsSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10vh;
  box-sizing: content-box;
  width: min(40rem, 100%);
  justify-content: space-between;
  margin: auto;

  @media (max-width: 650px) {
    flex-direction: column;
    height: 15vh;
  }
`;
