import { SingleCard } from "../SingleCard/SingleCard.component";
import { HowDoesItWorkSection } from "./HowDoesItWork.styled";

// interface HowDoesItWork {
//   borrow: string;
//   lend: string;
//   startRenting: string;
// }

export const HowDoesItWorkBorrow = () => {
  return (
    <div>
      <HowDoesItWorkSection>
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
      </HowDoesItWorkSection>
    </div>
  );
};

export const HowDoesItWorkLend = () => {
  return (
    <div>
      <HowDoesItWorkSection>
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
        <SingleCard img={"img"} describe={"describe"} />
      </HowDoesItWorkSection>
    </div>
  );
};
