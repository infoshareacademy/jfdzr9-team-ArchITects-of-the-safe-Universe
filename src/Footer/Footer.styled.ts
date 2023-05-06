import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 5px;
  height: 90px;
  width: 100%;
  background-color: var(--color-footer);
  font-size: 0.5rem;
  font-weight: 200;
  color: var(--color-dark-grey);
  border-top-style: solid;
  border-width: 1px;
  border-color: var(--color-dark-grey);

  @media (max-width: 1024px) {
    font-size: 0.4rem;
    padding: 0px;
    padding-top: 5px;
  }

  @media (max-width: 600px) {
    font-size: 0.4rem;
    padding: 0px;
    padding-top: 5px;
    height: 90px;
    width: 100%;
  }
`;

export const Dawid = styled.div`
  position: static;
  padding: 0px;
  margin: 0%;
  display: flex;
  flex-wrap: wrap;
`;

export const Jolanta = styled.div`
  position: static;
  padding: 0px;
  margin: 0%;
  display: flex;
  flex-wrap: wrap;
`;
export const Katarzyna = styled.div`
  position: static;
  padding: 0px;
  margin: 0%;
  display: flex;
  flex-wrap: wrap;
`;
export const Piotr = styled.div`
  position: static;
  padding: 0px;
  margin: 0%;
  display: flex;
  flex-wrap: wrap;
`;

export const Authors = styled.div`
  position: static;
`;
