import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  padding: 5px;
  height: 60px;
  width: 100%;
  background-color: var(--color-footer);
  font-size: 0.5rem;
  font-weight: 200;
  color: var(--color-footer-text);
  border-top-style: solid;
  border-width: 1px;
  border-color: var(--color-border);

  @media (max-width: 1024px) {
    font-size: 0.45rem;
    padding: 0px;
    padding-top: 5px;
  }
`;
