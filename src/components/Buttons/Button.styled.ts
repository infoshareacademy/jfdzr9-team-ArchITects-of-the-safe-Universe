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

  :hover {
    cursor: pointer;
    background-color: var(--color-very-light-grey);
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

  :hover {
    cursor: pointer;
    background-color: var(--color-very-light-grey);
  }
`;

export const OrangeButton = styled.button`
  height: 40px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--color-orange);
  color: var(--color-dark-grey);
  font-weight: 600;
`;

export const ButtonContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
  margin: auto;

  @media (max-width: 48.12em) {
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;
