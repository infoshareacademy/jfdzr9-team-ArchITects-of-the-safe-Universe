import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */
  height: 6vh;
  width: auto;
  background-color: var(--color-very-light-grey);
  font-size: 0.7rem;
  font-weight: 200;
  padding: 0;
  padding: 10px;
  color: var(--color-dark-grey);

  @media (max-width: 48em) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    /* padding: 10px; */
    font-size: 0.6rem;
    gap: 10px;
  }
`;
