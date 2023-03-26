import { Link } from "react-router-dom";
import { ButtonM, ButtonContainer, ButtonS, OrangeButton } from "../components/Buttons/Button.styled";
import { HowDoesItWorkLend } from "../components/HowDoesItWork/HowDoesItWork.component";
import { ButtonStartRenting } from "../components/HowDoesItWork/HowDoesItWork.styled";
import { Title } from "../UI/Title.styled";

export const HowDoesItWorkLendPage = () => {
  return (
    <>
      <Title>Jak to działa?</Title>
      <ButtonContainer>
        <Link to="/howDoesItWork/borrow">
          <ButtonS>Pożycz od sąsiada</ButtonS>
        </Link>
        <OrangeButton>Pożycz sąsiadowi</OrangeButton>
      </ButtonContainer>
      <HowDoesItWorkLend />;
      <ButtonStartRenting>
        <Link to="">
          <ButtonM>Zacznij wypożyczać</ButtonM>
        </Link>
      </ButtonStartRenting>
    </>
  );
};
