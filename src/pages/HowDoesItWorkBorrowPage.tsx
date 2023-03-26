import { Link } from "react-router-dom";
import { ButtonM, BorrowLendButton } from "../components/Buttons/Button.styled";
import { HowDoesItWorkBorrow } from "../components/HowDoesItWork/HowDoesItWork.component";
import { ButtonBorrowLend, ButtonStartRenting, Title } from "../components/HowDoesItWork/HowDoesItWork.styled";

export const HowDoesItWorkBorrowPage = () => {
  return (
    <>
      <Title>
        <h2>Jak to działa?</h2>
      </Title>
      <ButtonBorrowLend>
        <BorrowLendButton>Pożycz od sąsiada</BorrowLendButton>
        <Link to="/howDoestItWork/lend">
          <ButtonM>Pożycz sąsiadowi</ButtonM>
        </Link>
      </ButtonBorrowLend>
      <HowDoesItWorkBorrow />;
      <ButtonStartRenting>
        <Link to="">
          <ButtonM>Zacznij wypożyczać</ButtonM>
        </Link>
      </ButtonStartRenting>
    </>
  );
};
