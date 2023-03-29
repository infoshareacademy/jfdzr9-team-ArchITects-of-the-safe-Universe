import { SingleCardImage, SingleCardInfo, SingleCardSection } from "./SingleCard.styled";

interface SingleCard {
  imgSearch: string;
  describe: string;
}
interface SingleCard1 {
  imgCheck: string;
  describe: string;
}
interface SingleCard2 {
  imgReservation: string;
  describe: string;
}
interface SingleCard3 {
  imgUse: string;
  describe: string;
}
interface SingleCard4 {
  imgOffer: string;
  describe: string;
}
interface SingleCard5 {
  imgAccept: string;
  describe: string;
}
interface SingleCard6 {
  imgMuch: string;
  describe: string;
}
interface SingleCard7 {
  imgGuarant: string;
  describe: string;
}

export const SingleCard = ({ imgSearch, describe }: SingleCard) => {
  return (
    <div>
      <SingleCardSection>
        <SingleCardImage>
          <img src={imgSearch} alt="" />
        </SingleCardImage>
        <SingleCardInfo>
          <div>
            <h3>Szukaj</h3>
          </div>
          <div>
            <p>Znajdz swój idealny przedmiot!</p>
          </div>
        </SingleCardInfo>
      </SingleCardSection>
    </div>
  );
};
export const SingleCard1 = ({ imgCheck, describe }: SingleCard1) => {
  return (
    <div>
      <SingleCardSection>
        <SingleCardImage>
          <img src={imgCheck} alt="" />
        </SingleCardImage>
        <SingleCardInfo>
          <h3>Sprawdź</h3>
          <p>Bądz pewny, że wszystko jest ok</p>
        </SingleCardInfo>
      </SingleCardSection>
    </div>
  );
};

export const SingleCard2 = ({ imgReservation, describe }: SingleCard2) => {
  return (
    <div>
      <SingleCardSection>
        <SingleCardImage>
          <img src={imgReservation} alt="" />
        </SingleCardImage>
        <SingleCardInfo>
          <h3>Rezerwacja</h3>
          <p>Zrób okazję idealną dla Ciebie</p>
        </SingleCardInfo>
      </SingleCardSection>
    </div>
  );
};

export const SingleCard3 = ({ imgUse, describe }: SingleCard3) => {
  return (
    <div>
      <SingleCardSection>
        <SingleCardImage>
          <img src={imgUse} alt="" />
        </SingleCardImage>
        <SingleCardInfo>
          <h3>Użyj i zwróć</h3>
          <p>Oddaj wszystko co wziąłeś z powrotem</p>
        </SingleCardInfo>
      </SingleCardSection>
    </div>
  );
};

export const SingleCard4 = ({ imgOffer, describe }: SingleCard4) => {
  return (
    <div>
      <SingleCardSection>
        <SingleCardImage>
          <img src={imgOffer} alt="" />
        </SingleCardImage>
        <SingleCardInfo>
          <h3>Zaoferuj przedmiot</h3>
          <p>Uszczęśliw kogoś kto na to zasługuje</p>
        </SingleCardInfo>
      </SingleCardSection>
    </div>
  );
};
export const SingleCard5 = ({ imgAccept, describe }: SingleCard5) => {
  return (
    <div>
      <SingleCardSection>
        <SingleCardImage>
          <img src={imgAccept} alt="" />
        </SingleCardImage>
        <SingleCardInfo>
          <h3>Zaakceptuj</h3>
          <p>Zdecyduj o swoim przedmiocie</p>
        </SingleCardInfo>
      </SingleCardSection>
    </div>
  );
};

export const SingleCard6 = ({ imgMuch, describe }: SingleCard6) => {
  return (
    <div>
      <SingleCardSection>
        <SingleCardImage>
          <img src={imgMuch} alt="" />
        </SingleCardImage>
        <SingleCardInfo>
          <h3>Ile to kosztuje?</h3>
          <p>Sprwdż czy oferta pasuje do Ciebie</p>
        </SingleCardInfo>
      </SingleCardSection>
    </div>
  );
};

export const SingleCard7 = ({ imgGuarant, describe }: SingleCard7) => {
  return (
    <div>
      <SingleCardSection>
        <SingleCardImage>
          <img src={imgGuarant} alt="" />
        </SingleCardImage>
        <SingleCardInfo>
          <h3>Gwarancja</h3>
          <p>Przebieg tranzakcji na Twoim koncie</p>
        </SingleCardInfo>
      </SingleCardSection>
    </div>
  );
};
