import { Link } from "react-router-dom";
import { ButtonContainer, ButtonS, OrangeButton } from "../components/Buttons/Button.styled";
import { HowDoesItWorkBorrow } from "../components/HowDoesItWork/HowDoesItWork.component";
import { ButtonStartRenting } from "../components/HowDoesItWork/HowDoesItWork.styled";
import { Title } from "../UI/Title.styled";
import { StartRentingButton } from "../StartRentingButton/StartRentingButton";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

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
      <HowDoesItWorkBorrow />
      <ButtonStartRenting>
        <StartRentingButton />
      </ButtonStartRenting>
    </>
  );
};
