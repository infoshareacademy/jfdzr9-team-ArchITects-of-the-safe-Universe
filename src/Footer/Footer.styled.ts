import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  width: auto;
  background-color: var(--color-very-light-grey);
  font-size: 0.7rem;
  /* font-weight: 300; */
  padding: 0;
  color: var(--color-dark-grey);

  @media (max-width: 40em) {
    font-size: 0.6rem;
    /* font-weight: 300; */
  }
`;
