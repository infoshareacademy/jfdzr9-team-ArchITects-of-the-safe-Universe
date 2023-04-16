import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 50px;
  height: 60px;
  width: 100%;
  background-color: var(--color-very-light-grey);
  font-size: 0.5rem;
  font-weight: 200;

  color: var(--color-dark-grey);

  @media (max-width: 1024px) {
    font-size: 0.45rem;
    gap: 10px;
    margin-left: 10px;
  }
`;
