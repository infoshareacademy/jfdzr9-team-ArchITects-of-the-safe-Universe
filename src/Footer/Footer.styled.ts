import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 5px;
  height: 120px;
  width: 100%;
  background-color: var(--color-very-light-grey);
  font-size: 0.9rem;
  font-weight: 200;
  color: var(--color-dark-grey);
  border-top-style: solid;
  border-width: 1px;
  border-color: var(--color-orange);

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    padding: 0px;
    padding-top: 5px;
  }
`;

export const Dawid = styled.div`
  padding: 0px;
  margin: 0%;
  display: flex;
  flex-wrap: wrap;
`;

export const Jolanta = styled.div`
  padding: 0px;
  margin: 0%;
  display: flex;
  flex-wrap: wrap;
`;
export const Katarzyna = styled.div`
  padding: 0px;
  margin: 0%;
  display: flex;
  flex-wrap: wrap;
`;
export const Piotr = styled.div`
  padding: 0px;
  margin: 0%;
  display: flex;
  flex-wrap: wrap;
`;
