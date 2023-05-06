import { SingleCard } from "../SingleCard/SingleCard.component";
import { SingleCard1 } from "../SingleCard/SingleCard.component";
import { SingleCard2 } from "../SingleCard/SingleCard.component";
import { SingleCard3 } from "../SingleCard/SingleCard.component";
import { SingleCard4 } from "../SingleCard/SingleCard.component";
import { SingleCard5 } from "../SingleCard/SingleCard.component";
import { SingleCard6 } from "../SingleCard/SingleCard.component";
import { SingleCard7 } from "../SingleCard/SingleCard.component";
import { HowDoesItWorkSection } from "./HowDoesItWork.styled";
import imgSearch from "../../assets/borrow/Search.png";
import imgCheck from "../../assets/borrow/Check.png";
import imgReservation from "../../assets/borrow/Reservation.png";
import imgUse from "../../assets/borrow/Use it and return.png";
import imgOffer from "../../assets/land/Offer an item.png";
import imgAccept from "../../assets/land/Accept.png";
import imgMuch from "../../assets/land/How much does it cost.png";
import imgGuarant from "../../assets/land/Guarantee.png";

interface HowDoesItWork {
  borrow: string;
  lend: string;
  startRenting: string;
  children: string;
}

export const HowDoesItWorkBorrow = () => {
  return (
    <HowDoesItWorkSection>
      <SingleCard imgSearch={imgSearch} describe={"describe"} />
      <SingleCard1 imgCheck={imgCheck} describe={"describe"} />
      <SingleCard2 imgReservation={imgReservation} describe={"describe"} />
      <SingleCard3 imgUse={imgUse} describe={"describe"} />
    </HowDoesItWorkSection>
  );
};

export const HowDoesItWorkLend = () => {
  return (
    <HowDoesItWorkSection>
      <SingleCard4 imgOffer={imgOffer} describe={"describe"} />
      <SingleCard5 imgAccept={imgAccept} describe={"describe"} />
      <SingleCard6 imgMuch={imgMuch} describe={"describe"} />
      <SingleCard7 imgGuarant={imgGuarant} describe={"describe"} />
    </HowDoesItWorkSection>
  );
};
