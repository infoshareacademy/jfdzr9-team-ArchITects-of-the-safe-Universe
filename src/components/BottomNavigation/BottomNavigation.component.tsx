import { Link } from "react-router-dom";
import { ButtonM } from "../Buttons/Button.styled";
import { BottomNavigationSection } from "./BottomNavigation.styled";

interface BottomNavigation {
  howWork: string;
  map: string;
  opinion: string;
}

const BottomNavigation = ({ howWork, map, opinion }: BottomNavigation) => {
  return (
    <div>
      <BottomNavigationSection>
        <Link to="/howDoesItWork/borrow">
          <ButtonM>Jak to działa?</ButtonM>
        </Link>
        {/* <Link to="">
          <ButtonM>Mapa</ButtonM>
        </Link> */}
        {/* <Link to="opinions"> */}
        <Link to="opinionsUser">
          <ButtonM>Opinie</ButtonM>
        </Link>
      </BottomNavigationSection>
    </div>
  );
};

export default BottomNavigation;
