import { useState, useRef } from "react";
import { ButtonM } from "../components/Buttons/Button.styled";
import { Input } from "../components/AddProductPage/AddNewProduct.styled";
import { SignInGoogle } from "../GoogleButton/SignInGoogle";
import {
  TwoMainContainers,
  ForgotPasswordLink,
  SignInBottomConrainer,
  SignInContainer,
  SignInWord,
  Registration,
  SingleLine,
} from "../components/SignIn/SignIn.styled";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseConfig } from "../utils/firebase/firebase.config";
import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputPassword } from "../components/Input/Input.componentpassword";
import ReactDOM from "react-dom";

export const SignInPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [isEnterPressed, setIsEnterPressed] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const app = firebase.initializeApp(firebaseConfig);
      const auth = app.auth();
      await auth.signInWithEmailAndPassword(email, password);
      navigate("/userPanelBorrow");
    } catch (error: any) {
      const errorMessage = document.getElementById("error-message");
      let errorText = "";
      if (error.code === "auth/wrong-password") {
        errorText = "Błędne hasło";
      } else {
        errorText = "Błędne dane logowania";
      }
      ReactDOM.render(<div style={{ color: "red" }}>{errorText}</div>, errorMessage);
    }
  };

  const loginButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <TwoMainContainers>
        <SignInContainer>
          <SignInWord>Zaloguj się</SignInWord>
          <div id="error-message"></div>
          <SingleLine>
            Nie posiadasz konta?
            <Link to="/signUp">
              <Registration>
                <span>Zarejestruj się</span>
              </Registration>
            </Link>
          </SingleLine>
          <form>
            <Input
              placeholder="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <InputPassword
              placeholder="hasło"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  setIsEnterPressed(true);
                  handleSignIn();
                }
              }}
            />
          </form>
          <SignInBottomConrainer>
            <ButtonM onClick={handleSignIn} ref={loginButtonRef}>
              Zaloguj się
            </ButtonM>
          </SignInBottomConrainer>

          <SingleLine>Albo</SingleLine>

          <SignInBottomConrainer>
            <SignInGoogle />
            <ForgotPasswordLink>
              <span onClick={() => navigate("/forgotPassword")}>Zapomniałeś hasła?</span>
            </ForgotPasswordLink>
          </SignInBottomConrainer>
        </SignInContainer>
      </TwoMainContainers>
    </>
  );
};
