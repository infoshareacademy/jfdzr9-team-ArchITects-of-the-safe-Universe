import { Link } from "react-router-dom";
import { ButtonM, BorrowLendButton } from "../components/Buttons/Button.styled";
import { HowDoesItWorkLend } from "../components/HowDoesItWork/HowDoesItWork.component";
import { ButtonBorrowLend, ButtonStartRenting, Title } from "../components/HowDoesItWork/HowDoesItWork.styled";

export const HowDoesItWorkLendPage = () => {
  return (
    <>
      <Title>
        <h2>Jak to działa?</h2>
      </Title>
      <ButtonBorrowLend>
        <Link to="/howDoesItWork/borrow">
          <ButtonM>Pożycz od sąsiada</ButtonM>
        </Link>
        <BorrowLendButton>Pożycz sąsiadowi</BorrowLendButton>
      </ButtonBorrowLend>
      <HowDoesItWorkLend />;
      <ButtonStartRenting>
        <Link to="">
          <ButtonM>Zacznij wypożyczać</ButtonM>
        </Link>
      </ButtonStartRenting>
    </>
  );
};
