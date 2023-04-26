import styled from "styled-components";

export const ButtonS = styled.button`
  height: 40px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--color-light-grey);
  color: var(--color-dark-grey);
  font-weight: 600;
  font-size: 18px;

  :hover {
    cursor: pointer;
    background-color: var(--color-orange);
  }

  @media (max-width: 1024px) {
    height: 30px;
    border-radius: 15px;
  }
`;

export const ButtonM = styled.button`
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--color-light-grey);
  color: var(--color-dark-grey);
  font-weight: 600;
  font-size: 18px;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: var(--color-orange);
    color: #7e4d20;
  }

  @media (max-width: 1024px) {
    height: 30px;
    border-radius: 15px;
  }
`;

export const OrangeButton = styled.button`
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--color-orange);
  color: var(--color-dark-grey);
  font-weight: 600;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 650px) {
    height: 30px;
    border-radius: 15px;
  }
`;

export const ButtonContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 10vh;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
