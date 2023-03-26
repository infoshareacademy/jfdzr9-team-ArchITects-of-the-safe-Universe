import { ButtonM } from "../components/Buttons/Button.styled";
import { Input } from "../components/Input/Input.component";
import { SignInContainer, SignInBottomConrainer } from "./SignIn.styled";
import { SignInGoogle } from "../GoogleButton/SignInGoogleButton";
export const SignInPage = () => {
  return (
    <>
      <SignInContainer>
        <div>Zaloguj</div>
        <Input placeholder="email"></Input>
        <Input placeholder="hasło"></Input>
        <SignInBottomConrainer>
          <ButtonM>Zaloguj</ButtonM>
          <SignInGoogle />
          <div>Nie posiadasz konta?</div>
          <ButtonM>Zarejestruj</ButtonM>
        </SignInBottomConrainer>
      </SignInContainer>
    </>
  );
};
