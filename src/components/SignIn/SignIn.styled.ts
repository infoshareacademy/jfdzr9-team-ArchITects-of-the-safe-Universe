import styled from "styled-components";
import backgroundImage from "../../assets/LoginDarkColor1920-1080.png";
import backgroundImageBlack from "../../assets/LoginDarkBW1920-1080.png";

export const TwoMainContainers = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
`;

export const TwoMainContainersSignUp = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImageBlack});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
`;

export const ForgotPasswordContainers = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImageBlack});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
`;

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: static;
  gap: 30px;
  border-radius: 20px;
  width: 500px;
  height: 700px;
  background-color: var(--backgroundColor);
  border: solid lightgray 1px;
  margin: 20px;

  @media (max-width: 650px) {
    width: 70%;
    height: auto;
    padding: 10px;
    gap: 20px;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: static;
  gap: 30px;
  border-radius: 20px;
  width: 500px;
  height: 700px;
  background-color: var(--backgroundColor);
  border: solid lightgray 1px;
  margin: 20px;

  @media (max-width: 650px) {
    width: 70%;
    height: auto;
    padding: 10px;
    gap: 20px;
  }
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
    cursor: pointer;
  }
`;

export const SignInWord = styled.h1`
  font-size: 40px;
  color: var(--color-sign-text);
  margin-top: 0;
  @media (max-width: 650px) {
    font-size: 30px;
  }
`;

export const Registration = styled.p`
  font-size: 15px;
  color: navy;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  &:hover {
    color: darkblue;
    cursor: pointer;
  }
`;

export const SingleLine = styled.h4`
  width: 100%;
  text-align: center;
  background: var(--backgroundColor);
`;
