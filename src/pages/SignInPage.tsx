import { ButtonM } from "../components/Buttons/Button.styled";
import GoogleLoginButton from "../components/GoogleButton/GoogleButton";
import { Input } from "../components/Input/Input.component";
import { SignInContainer, SignInBottomConrainer } from "./SignIn.styled";

export const SignInPage = () => {
  return (
    <>
      <SignInContainer>
        <div>Zaloguj</div>
        <Input placeholder="email"></Input>
        <Input placeholder="hasło"></Input>
        <SignInBottomConrainer>
          <ButtonM>Zaloguj</ButtonM>
          <GoogleLoginButton />
          <div>Nie posiadasz konta?</div>
          <ButtonM>Zarejestruj</ButtonM>
        </SignInBottomConrainer>
      </SignInContainer>
    </>
  );
};
