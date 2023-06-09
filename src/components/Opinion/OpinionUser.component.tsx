import { SingleCardOpinion } from "../SingleCardOpinion/SingleCardOpinion.component";
import { ButtonOpinion, OpinionSection } from "./Opinion.styled";
import { AddOpinionButton } from "../AddOpinionButton/AddOpinionButton";

const OpinionUser = () => {
  return (
    <>
      <OpinionSection>
        <SingleCardOpinion />
      </OpinionSection>
      <ButtonOpinion>
        <AddOpinionButton />
      </ButtonOpinion>
    </>
  );
};

export default OpinionUser;
