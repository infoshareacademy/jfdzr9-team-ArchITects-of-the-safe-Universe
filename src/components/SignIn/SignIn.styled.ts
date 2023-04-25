// import styled from "styled-components";

// export const SignInContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   gap: 20px;
//   margin-top: 20px;
// `;

// export const SignInBottomConrainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   gap: 10px;
// `;

// export const ForgotPasswordLink = styled.p`
//   color: seagreen;
//   &:hover {
//     color: darkseagreen;
//   }
// `;

import styled from "styled-components";
import backgroundImage from "../../assets/LoginLight1920-1080.png";
import backgroundImageBlack from "../../assets/LoginDark1920-1080.png";

export const TwoMainContainers = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100%;
  width: 100%;
`;
export const ForgotPasswordContainers = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-image: url(${backgroundImageBlack});
  background-size: cover;
  height: 100%;
  width: 100%;
`;

// export const LogoConteiner = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   position: static;
//   width: 600px;
//   height: 800px;
//   border-radius: 10px;
//   background-color: greenyellow;
//   margin: 5rem;
// `;

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: static;
  gap: 40px;
  margin-top: 20px;
  border-radius: 20px;
  width: 600px;
  height: 800px;
  background-color: white;
  border: solid lightgray 1px;
  margin: 3rem;
`;

export const SignInBottomConrainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  /* background-color: green; */
`;

export const ForgotPasswordLink = styled.p`
  font-size: 15px;
  color: navy;
  font-weight: bold;
  &:hover {
    color: darkblue;
    text-decoration: underline;
  }
`;

export const SignInWord = styled.div`
  color: black;
  font-size: 23px;
  color: #7e4d20;
`;

export const NewUser = styled.div`
  color: gray;
  font-size: 15px;
  font-weight: bold;
`;

export const Registration = styled.p`
  font-size: 15px;
  color: navy;
  display: flex;
  justify-content: center;
  &:hover {
    color: darkblue;
    text-decoration: underline;
  }
`;

export const SingleLine = styled.div`
  h4 span {
    width: 100%;
    text-align: center;
    margin: 10px 0 20px;
    background: white;
  }
`;
