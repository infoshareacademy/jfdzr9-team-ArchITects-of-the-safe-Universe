import { Link } from "react-router-dom";
import { ButtonContainer, ButtonM, OrangeButton } from "../components/Buttons/Button.styled";
import { HowDoesItWorkBorrow } from "../components/HowDoesItWork/HowDoesItWork.component";
import { ButtonStartRenting } from "../components/HowDoesItWork/HowDoesItWork.styled";
import { Title } from "../UI/Title.styled";
import { StartRentingButton } from "../StartRentingButton/StartRentingButton";

export const HowDoesItWorkBorrowPage = () => {
  return (
    <>
      <Title>Jak to działa?</Title>
      <ButtonContainer>
        <OrangeButton>Pożycz od sąsiada</OrangeButton>
        <Link to="/howDoesItWork/lend">
          <ButtonM>Pożycz sąsiadowi</ButtonM>
        </Link>
      </ButtonContainer>
      <HowDoesItWorkBorrow />
      <ButtonStartRenting>
        <StartRentingButton />
      </ButtonStartRenting>
    </>
  );
};
