import styled from "styled-components";

export const BottomNavigationSection = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: space-between;
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
