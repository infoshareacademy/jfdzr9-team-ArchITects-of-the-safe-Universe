import { SingleCardImage, SingleCardInfo, SingleCardSection } from "./SingleCard.styled";

interface SingleCard {
  img: string;
  describe: string;
}

export const SingleCard = ({ img, describe }: SingleCard) => {
  return (
    <div>
      <SingleCardSection>
        <SingleCardImage>
          <img src={img} alt="" />
        </SingleCardImage>
        <SingleCardInfo>
          <p>{describe}</p>
        </SingleCardInfo>
      </SingleCardSection>
    </div>
  );
};

export default SingleCard;
