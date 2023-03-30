import { Link } from "react-router-dom";
import { ButtonM } from "../Buttons/Button.styled";
import { SingleCardOpinion } from "../SingleCardOpinion/SingleCardOpinion.component";
import { ButtonOpinion, OpinionSection } from "./Opinion.styled";

interface OpinionUser {
  name: string;
  describe: string;
}

const OpinionUser = ({ name, describe }: OpinionUser) => {
  return (
    <>
      <OpinionSection>
        <SingleCardOpinion name={"name"} describe={"describe"} />
        <SingleCardOpinion name={"name"} describe={"describe"} />
        <SingleCardOpinion name={"name"} describe={"describe"} />
        <SingleCardOpinion name={"name"} describe={"describe"} />
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
