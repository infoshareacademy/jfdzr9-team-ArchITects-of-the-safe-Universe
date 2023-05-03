import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer.styled";
import GitHubLogo from "../assets/iconmonstr-github.svg";
import GitHubLogo2 from "../assets/iconmonstr-github copy.svg";
import Linkedin from "../assets/iconmonstr-linkedin-3.svg";
import {
  Rightside,
  Leftside,
  Law,
  AppTeam,
  Authors,
  Space,
  SpaceMini,
  RightName,
  LeftName,
  Dawid,
  Jolanta,
  Katarzyna,
  Piotr,
} from "../Footer/Footer.styled";

export const FooterLabel = () => {
  return (
    <Footer>
      <Leftside>
        <Law>
          <div>
            <h3>
              RentMe, @2023 rentme Inc.
              <br />
              Wszystkie prawa zastrzeżone.
            </h3>
          </div>
        </Law>
        <Link to="https://github.com/infoshareacademy/jfdzr9-team-ArchITects-of-the-safe-Universe">
          <img src={GitHubLogo} alt="github logo" />
        </Link>
      </Leftside>
      <Rightside>
        <AppTeam>
          <div>
            <h3 style={{ textDecoration: "underline" }}>Twórcy aplikacji:</h3>
          </div>
        </AppTeam>
        <Authors>
          <RightName>
            {" "}
            <Dawid>
              <h3>Dawid Maślanka</h3>
              <SpaceMini />
              <Link to="https://github.com/DawidMaslanka">
                <img src={GitHubLogo2} alt="github logo2" />
              </Link>
              <SpaceMini />
              <Link to="https://www.linkedin.com/in/dawid-maslanka/">
                <img src={Linkedin} alt="Linkedin" />
              </Link>
            </Dawid>
            <Jolanta>
              <h3>Jolanta Marszałek</h3>
              <SpaceMini />
              <Link to="https://github.com/JolantaMarszalek">
                <img src={GitHubLogo2} alt="github logo2" />
              </Link>
              <SpaceMini />
              <Link to="https://www.linkedin.com/in/jolanta-marsza%C5%82ek/">
                <img src={Linkedin} alt="Linkedin" />
              </Link>
            </Jolanta>
          </RightName>
          <Space />
          <LeftName>
            {" "}
            <Katarzyna>
              <h3>Katarzyna Fronc</h3>
              <SpaceMini />
              <Link to="https://github.com/katarzynaFronc">
                <img src={GitHubLogo2} alt="github logo2" />
              </Link>
              <SpaceMini />
              <Link to="https://www.linkedin.com/in/katarzyna-f/">
                <img src={Linkedin} alt="Linkedin" />
              </Link>
            </Katarzyna>
            <Piotr>
              <h3>Piotr Stefański</h3>
              <SpaceMini />
              <Link to="https://github.com/peter-stefanski">
                <img src={GitHubLogo2} alt="github logo2" />
              </Link>
              <SpaceMini />
              <Link to="https://www.linkedin.com/in/stefanski-piotr/">
                <img src={Linkedin} alt="Linkedin" />
              </Link>
            </Piotr>
          </LeftName>
        </Authors>
      </Rightside>
    </Footer>
  );
};
