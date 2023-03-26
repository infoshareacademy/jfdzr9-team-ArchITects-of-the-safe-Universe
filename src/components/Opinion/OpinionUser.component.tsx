import { Link } from "react-router-dom";
import { ButtonM } from "../Buttons/Button.styled";
import { SingleCardOpinion } from "../SingleCardOpinion/SingleCardOpinion.component";
import { ButtonOpinion, OpinionSection } from "./Opinion.styled";

interface Opinion {
  name: string;
  describe: string;
}

const OpinionUser = ({ name, describe }: Opinion) => {
  return (
    <>
      <OpinionSection>
        <SingleCardOpinion name={"name"} describe={"describe"} />
        <SingleCardOpinion name={"name"} describe={"describe"} />
        <SingleCardOpinion name={"name"} describe={"describe"} />
        <SingleCardOpinion name={"name"} describe={"describe"} />
      </OpinionSection>
      <ButtonOpinion>
        <Link to="">
          <ButtonM>Dodaj opinię</ButtonM>
        </Link>
      </ButtonOpinion>
    </>
  );
};

export default OpinionUser;
