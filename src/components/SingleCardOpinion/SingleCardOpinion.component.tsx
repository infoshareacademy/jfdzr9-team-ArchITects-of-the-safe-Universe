import { SingleCardDescribe, SingleCardName, SingleCardOpinionSection } from "./SingleCardOpinion.styled";

interface SingleCardOpinion {
  name: string;
  describe: string;
}

export const SingleCardOpinion = ({ name, describe }: SingleCardOpinion) => {
  return (
    <div>
      <SingleCardOpinionSection>
        <SingleCardName>
          <p>{name}</p>
        </SingleCardName>
        <SingleCardDescribe>
          <p>{describe}</p>
        </SingleCardDescribe>
      </SingleCardOpinionSection>
    </div>
  );
};

export default SingleCardOpinion;
