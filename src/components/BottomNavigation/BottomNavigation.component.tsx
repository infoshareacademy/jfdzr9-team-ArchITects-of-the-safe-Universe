import { Link } from "react-router-dom";
import { ButtonM } from "../Buttons/Button.styled";
import { BottomNavigationSection } from "./BottomNavigation.styled";
import { OpinionButton } from "../../OpinionButton/OpinionButton";

interface BottomNavigation {
  howWork: string;
  map: string;
  opinion: string;
}

const BottomNavigation = () => {
  return (
    <BottomNavigationSection>
      <Link to="/howDoesItWork/borrow">
        <ButtonM>Jak to działa?</ButtonM>
      </Link>
      <OpinionButton />
    </BottomNavigationSection>
  );
};

export default BottomNavigation;
