import styled from "styled-components";

export const Footer = styled.footer`
  /* position: relative; */
  /* bottom: 0; */
  display: flex;
  /* align-self: flex-end; */
  /* position: fixed; */
  bottom: 0;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 8vh;
  width: auto;
  background-color: var(--color-very-light-grey);
  font-size: 0.55rem;
  font-weight: 200;

  color: var(--color-dark-grey);

  @media (max-width: 40em) {
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 0.45rem;
    gap: 10px;
    padding: 0 10px;
    height: auto;
    width: auto;
  }
`;
