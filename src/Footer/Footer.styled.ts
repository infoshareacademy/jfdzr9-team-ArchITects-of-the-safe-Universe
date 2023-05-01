import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  padding: 5px;
  height: 80px;
  width: 100%;
  background-color: var(--color-very-light-grey);
  font-size: 0.5rem;
  font-weight: 200;
  color: var(--color-dark-grey);
  border-top-style: solid;
  border-width: 1px;
  border-color: var(--color-orange);

  @media (max-width: 1024px) {
    font-size: 0.45rem;
    padding: 0px;
    padding-top: 5px;
  }
`;

export const Law = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: var(--color-very-light-grey);
  font-size: 0.8rem;
  font-weight: 200;
  color: var(--color-dark-grey);
  padding-right: 10px;
`;

export const AppTeam = styled.div`
  background-color: var(--color-very-light-grey);
  font-size: 0.7rem;
  font-weight: 200;
  color: var(--color-dark-grey);
`;

export const Authors = styled.div`
  background-color: var(--color-very-light-grey);
  font-size: 0.7rem;
  font-weight: 200;
  color: var(--color-dark-grey);
`;

export const Leftside = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
`;

export const Rightside = styled.div`
  background-color: var(--color-very-light-grey);
  font-size: 0.7rem;
  font-weight: 200;
  color: var(--color-dark-grey);
`;

export const LogoGit = styled.div`
  width: 200px;
  height: 200px;
`;

export const Dawid = styled.div`
  background-color: var(--color-very-light-grey);
  font-size: 0.7rem;
  font-weight: 200;
  color: var(--color-dark-grey);
`;

export const Jolanta = styled.div`
  background-color: var(--color-very-light-grey);
  font-size: 0.7rem;
  font-weight: 200;
  color: var(--color-dark-grey);
`;

export const Katarzyna = styled.div`
  background-color: var(--color-very-light-grey);
  font-size: 0.7rem;
  font-weight: 200;
  color: var(--color-dark-grey);
`;

export const Piotr = styled.div`
  background-color: var(--color-very-light-grey);
  font-size: 0.7rem;
  font-weight: 200;
  color: var(--color-dark-grey);
`;
