import { Link } from "react-router-dom";
import { ButtonM, ButtonContainer, ButtonS, OrangeButton } from "../components/Buttons/Button.styled";
import { HowDoesItWorkBorrow } from "../components/HowDoesItWork/HowDoesItWork.component";
import { ButtonStartRenting } from "../components/HowDoesItWork/HowDoesItWork.styled";
import { Title } from "../UI/Title.styled";

export const HowDoesItWorkBorrowPage = () => {
  return (
    <>
      <Title>Jak to działa?</Title>
      <ButtonContainer>
        <OrangeButton>Pożycz od sąsiada</OrangeButton>
        <Link to="/howDoesItWork/lend">
          <ButtonS>Pożycz sąsiadowi</ButtonS>
        </Link>
      </ButtonContainer>
      <HowDoesItWorkBorrow />;
      <ButtonStartRenting>
        <Link to="">
          <ButtonM>Zacznij wypożyczać</ButtonM>
        </Link>
      </ButtonStartRenting>
    </>
  );
};
