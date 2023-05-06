import { Link } from "react-router-dom";
import { ButtonM, ButtonContainer, ButtonS, OrangeButton } from "../components/Buttons/Button.styled";
import { HowDoesItWorkBorrow, HowDoesItWorkLend } from "../components/HowDoesItWork/HowDoesItWork.component";
import { ButtonStartRenting, HowWork } from "../components/HowDoesItWork/HowDoesItWork.styled";
import { Title } from "../UI/Title.styled";
import { StartRentingButton } from "../StartRentingButton/StartRentingButton";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const HowDoesItWorkLendPage = () => {
  return (
    <HowWork>
      <Title>Jak to działa?</Title>
      <ButtonContainer>
        <Link to="/howDoesItWork/borrow">
          <ButtonM>Pożycz od sąsiada</ButtonM>
        </Link>
        <OrangeButton>Pożycz sąsiadowi</OrangeButton>
      </ButtonContainer>
      <HowDoesItWorkLend />
      <ButtonStartRenting>
        <StartRentingButton />
      </ButtonStartRenting>
    </HowWork>
  );
};
