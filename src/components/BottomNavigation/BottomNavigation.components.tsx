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
        <a href={howWork} target="" rel="">
          <ButtonM>How does it work</ButtonM>
        </a>
        <a href={map} target="" rel="">
          <ButtonM>Map</ButtonM>
        </a>
        <a href={opinion} target="" rel="">
          <ButtonM>Opinions about the application</ButtonM>
        </a>
      </BottomNavigationSection>
      <a href={howWork} target="" rel="">
        <ButtonM>How does it work</ButtonM>
      </a>
      <a href={map} target="" rel="">
        <ButtonM>Map</ButtonM>
      </a>
      <a href={opinion} target="" rel="">
        <ButtonM>Opinions about the application</ButtonM>
      </a>
    </div>
  );
};

export default BottomNavigation;
