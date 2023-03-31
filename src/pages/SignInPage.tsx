import { useState } from "react";
import { ButtonM } from "../components/Buttons/Button.styled";
import { Input } from "../components/Input/Input.component";
import { SignInGoogle } from "../GoogleButton/SignInGoogle";
import { SignInBottomConrainer, SignInContainer } from "../components/SignIn/SignIn.styled";
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

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const app = firebase.initializeApp(firebaseConfig);
      const auth = app.auth();
      await auth.createUserWithEmailAndPassword(email, password);
      setIsSignUpSuccess(true);
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

  return (
    <>
      <SignInContainer>
        <div>Zaloguj</div>
        <Input
          placeholder="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <InputPassword
          placeholder="hasło"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <SignInBottomConrainer>
          <ButtonM onClick={handleSignIn}>Zaloguj</ButtonM>
          <SignInGoogle />
          <div>Nie posiadasz konta?</div>
          <ButtonM onClick={handleSignUp}>Zarejestruj</ButtonM>
          {isSignUpSuccess && <div>Konto zostało utworzone pomyślnie</div>}
        </SignInBottomConrainer>
      </SignInContainer>
    </>
  );
};
