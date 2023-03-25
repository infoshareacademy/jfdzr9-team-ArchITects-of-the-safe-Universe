import { ButtonM } from "../Buttons/Button.styled";
import { SingleCard } from "../SingleCard/SingleCard.component";
import { ButtonBorrowLend, ButtonStartRenting, HowDoesItWorkSection, Title } from "./HowDoesItWork.styled";

interface HowDoesItWork {
  borrow: string;
  lend: string;
  startRenting: string;
}

const HowDoesItWork = ({ borrow, lend, startRenting }: HowDoesItWork) => {
  return (
    <div>
      <Title>
        <h2>How does it work</h2>
      </Title>
      <ButtonBorrowLend>
        <a href={borrow} target="" rel="">
          <ButtonM>Borrow</ButtonM>
        </a>
        <a href={lend} target="" rel="">
          <ButtonM>Lend</ButtonM>
        </a>
      </ButtonBorrowLend>
      <HowDoesItWorkSection>
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
      </HowDoesItWorkSection>
      <ButtonStartRenting>
        <a href={startRenting} target="" rel="">
          <ButtonM>Start renting</ButtonM>
        </a>
      </ButtonStartRenting>
    </div>
  );
};

export default HowDoesItWork;
