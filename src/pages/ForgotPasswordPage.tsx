import { useState } from "react";
import { ButtonM } from "../components/Buttons/Button.styled";
import { Input } from "../components/Input/Input.component";
import { SignInContainer } from "../components/SignIn/SignIn.styled";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "../utils/firebase/firebase.config";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordContainers } from "../components/SignIn/SignIn.styled";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState<string>("");
  const [isResetSuccess, setIsResetSuccess] = useState(false);

  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      const app = firebase.initializeApp(firebaseConfig);
      const auth = app.auth();
      await auth.sendPasswordResetEmail(email);
      setIsResetSuccess(true);
    } catch (error) {
      alert(`Nieprawidłowy email`);
    }
  };

  return (
    <>
      <ForgotPasswordContainers>
        <SignInContainer>
          <h1>Zresetuj hasło</h1>
          <Input
            placeholder="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <ButtonM onClick={handleResetPassword}>Zresetuj</ButtonM>
          {isResetSuccess && <div>Email z instrukcją został wysłany</div>}
          <div>
            <ButtonM onClick={() => navigate("/account")}>Powrót do logowania</ButtonM>
          </div>
        </SignInContainer>
      </ForgotPasswordContainers>
    </>
  );
};
