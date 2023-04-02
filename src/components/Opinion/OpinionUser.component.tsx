import { Link } from "react-router-dom";
import { ButtonM } from "../Buttons/Button.styled";
import { SingleCardOpinion } from "../SingleCardOpinion/SingleCardOpinion.component";
import { ButtonOpinion, OpinionSection } from "./Opinion.styled";
import { AddOpinionButton } from "../../AddOpinionButton/AddOpinionButton";

const OpinionUser = () => {
  return (
    <>
      <OpinionSection>
        <SingleCardOpinion />
      </OpinionSection>
      <AddOpinionButton />
    </>
  );
};

export default OpinionUser;
