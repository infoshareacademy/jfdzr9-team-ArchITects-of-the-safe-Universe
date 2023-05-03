import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  left: 0;
  bottom: 0;
  /* justify-content: space-evenly; */
  margin: auto;
  padding: 5px;
  height: 80px;
  width: 100%;
  min-height: 8vh;
  max-height: 8vh;
  background-color: var(--color-very-light-grey);
  /* font-size: 16px; */
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
  min-height: auto;
  max-height: auto;
  /* padding-right: 100px; */
`;

export const AppTeam = styled.div``;

export const Leftside = styled.div`
  display: flex;
  position: sticky;
  min-height: 8vh;
  max-height: 8vh;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  padding-right: 1200px;
`;

export const Rightside = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-very-light-grey);
  /* font-size: 0.7rem; */
  font-weight: 200;
  color: var(--color-dark-grey);
  font-size: 0.8rem;
`;

export const Authors = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Space = styled.div`
  width: 400px;
`;

export const SpaceMini = styled.div`
  width: 20px;
`;

export const LeftName = styled.div``;

export const RightName = styled.div``;

export const Dawid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 8px;
`;

export const Jolanta = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 8px;
`;

export const Katarzyna = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 8px;
`;

export const Piotr = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 8px;
`;
