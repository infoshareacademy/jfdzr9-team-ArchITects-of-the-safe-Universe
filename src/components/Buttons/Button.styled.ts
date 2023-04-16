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

  @media (max-width: 40em) {
    height: 30px;
    border-radius: 15px;
  }
`;

// export const ButtonD = styled.div`
//   height: 40px;
//   width: 200px;
//   outline: none;
//   border: none;
//   border-radius: 20px;
//   padding: 0;
//   box-sizing: border-box;
//   background-color: var(--color-light-grey);
//   color: var(--color-dark-grey);
//   font-weight: 600;
//   font-size: 18px;

//   :hover {
//     cursor: pointer;
//     background-color: var(--color-orange);
//   }

//   @media (max-width: 40em) {
//     height: 30px;
//     border-radius: 15px;
//   }
// `;

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

  :hover {
    cursor: pointer;
    background-color: var(--color-orange);
  }

  @media (max-width: 40em) {
    height: 30px;
    border-radius: 15px;
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
  font-size: 18px;

  @media (max-width: 40em) {
    height: 30px;
    border-radius: 15px;
  }
`;

export const ButtonContainer = styled.section`
  box-sizing: content-box;
  width: min(40rem, 100%);
  display: flex;
  justify-content: space-between;
`;
