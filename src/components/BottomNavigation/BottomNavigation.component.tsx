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
        <Link to="/howDoestItWork">
          <a href={howWork} target="" rel="">
            <ButtonM>How does it work</ButtonM>
          </a>
        </Link>
        <Link to="">
          <a href={map} target="" rel="">
            <ButtonM>Map</ButtonM>
          </a>
        </Link>
        <Link to="">
          <a href={opinion} target="" rel="">
            <ButtonM>Opinions about the application</ButtonM>
          </a>
        </Link>
      </BottomNavigationSection>
    </div>
  );
};

export default BottomNavigation;
