import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px 0;
  height: 70px;
  width: 100%;
  background-color: var(--color-footer);
  font-size: 0.6rem;
  color: var(--color-dark-grey);
  border-top-style: solid;
  border-width: 1px;
  border-color: var(--color-dark-grey);
  gap: 50px;

  @media (max-width: 1024px) {
    font-size: 0.5rem;
    gap: 0px;
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    width: 100%;
  }
`;

export const Author = styled.div`
  position: static;
  padding: 0px;
  margin: 0%;
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
`;

export const Authors = styled.div`
  position: static;
  display: flex;
`;

export const Links = styled.div`
  display: flex;
  gap: 10px;
`;
