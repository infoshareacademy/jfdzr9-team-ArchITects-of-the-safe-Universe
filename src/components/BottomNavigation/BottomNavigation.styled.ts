import styled from "styled-components";

export const BottomNavigationSection = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 10vh;

  @media (max-width: 40em) {
    flex-direction: column;
    /* align-items: stretch; */
    /* height: 15vh; */
  }
`;
