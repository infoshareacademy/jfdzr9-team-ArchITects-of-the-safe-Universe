import { SingleCardOpinion } from "../SingleCardOpinion/SingleCardOpinion.component";
import { OpinionSection } from "./Opinion.styled";

interface Opinion {
  name: string;
  describe: string;
}

const Opinion = ({ name, describe }: Opinion) => {
  return (
    <OpinionSection>
      <SingleCardOpinion name={"name"} describe={"describe"} />
      <SingleCardOpinion name={"name"} describe={"describe"} />
      <SingleCardOpinion name={"name"} describe={"describe"} />
      <SingleCardOpinion name={"name"} describe={"describe"} />
    </OpinionSection>
  );
};

export default Opinion;
