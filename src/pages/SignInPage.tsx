import { useState, useRef } from "react";
import { ButtonM } from "../components/Buttons/Button.styled";
import { Input } from "../components/AddProductPage/AddNewProduct.styled";
import { SignInGoogle } from "../GoogleButton/SignInGoogle";
import {
  TwoMainContainers,
  // LogoConteiner,
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
import { useNavigate } from "react-router-dom";
import { InputPassword } from "../components/Input/Input.componentpassword";

export const SignInPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [isEnterPressed, setIsEnterPressed] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Nieprawidłowy adres email");
      return;
    }

    try {
      const app = firebase.initializeApp(firebaseConfig);
      const auth = app.auth();
      await auth.createUserWithEmailAndPassword(email, password);
      setIsSignUpSuccess(true);
      navigate("/UserDataPanel");
    } catch (error) {
      alert(`Hasło powinno zawierać min 6 znaków`);
    }
  };

  const handleSignIn = async () => {
    try {
      const app = firebase.initializeApp(firebaseConfig);
      const auth = app.auth();
      await auth.signInWithEmailAndPassword(email, password);
      navigate("/userPanelBorrow");
    } catch (error) {
      alert(`Nieprawidłowe dane logowania`);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)); // added

  };

  const loginButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <TwoMainContainers>
        <SignInContainer>
          <SignInWord>Zaloguj się</SignInWord>
          <SingleLine>
            Nie posiadasz konta?
            <Registration>
              <span onClick={handleSignUp}>Zarejestruj się</span>
              {isSignUpSuccess && <div>Konto zostało utworzone pomyślnie</div>}
            </Registration>
          </SingleLine>
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
