import { Link } from "react-router-dom";
import { ButtonM } from "../Buttons/Button.styled";
import { SingleCardOpinion } from "../SingleCardOpinion/SingleCardOpinion.component";
import { ButtonOpinion, OpinionSection } from "./Opinion.styled";

const OpinionUser = () => {
  return (
    <>
      <OpinionSection>
        <SingleCardOpinion />
      </OpinionSection>
      <ButtonOpinion>
        <Link to="/addOpinion">
          <ButtonM>Dodaj opinię</ButtonM>
        </Link>
      </ButtonOpinion>
    </>
  );
};

export default OpinionUser;
