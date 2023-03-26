import { Link } from "react-router-dom";
import { ButtonM } from "../Buttons/Button.styled";
import { SingleCard } from "../SingleCard/SingleCard.component";
import { ButtonBorrowLend, ButtonStartRenting, HowDoesItWorkSection, Title } from "./HowDoesItWork.styled";

interface HowDoesItWork {
  borrow: string;
  lend: string;
  startRenting: string;
}

export const HowDoesItWork = ({ borrow, lend, startRenting }: HowDoesItWork) => {
  return (
    <div>
      <Title>
        <h2>How does it work</h2>
      </Title>
      <ButtonBorrowLend>
        <Link to="/howDoestItWork/borrow">
          <a href={borrow} target="" rel="">
            <ButtonM>Borrow</ButtonM>
          </a>
        </Link>
        <Link to="/howDoestItWork/lend">
          <a href={lend} target="" rel="">
            <ButtonM>Lend</ButtonM>
          </a>
        </Link>
      </ButtonBorrowLend>
      <HowDoesItWorkSection>
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
      </HowDoesItWorkSection>
      <ButtonStartRenting>
        <Link to="">
          <a href={startRenting} target="" rel="">
            <ButtonM>Start renting</ButtonM>
          </a>
        </Link>
      </ButtonStartRenting>
    </div>
  );
};

export default HowDoesItWork;
