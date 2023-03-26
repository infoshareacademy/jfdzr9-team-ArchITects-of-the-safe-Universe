import { ButtonM } from "../components/Buttons/Button.styled";
import { Input } from "../components/Input/Input.component";
import { SignInGoogle } from "../GoogleButton/SignInGoogle";
import { SignInBottomConrainer, SignInContainer } from "../components/SignIn/SignIn.styled";

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
