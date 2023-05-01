import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer.styled";
import GitHubLogo from "../assets/iconmonstr-github.svg";
import {
  LogoGit,
  Rightside,
  Leftside,
  Law,
  AppTeam,
  Authors,
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
        /
        <div>
          <Link to="https://github.com/infoshareacademy/jfdzr9-team-ArchITects-of-the-safe-Universe">
            <img src={GitHubLogo} alt="github logo" />
          </Link>
        </div>
        {/* </LogoGit> */}
      </Leftside>
      <Rightside>
        <AppTeam>
          <div>
            <h3 style={{ textDecoration: "underline" }}>Twórcy aplikacji:</h3>
          </div>
        </AppTeam>
        <Authors>
          <div>
            <Dawid>
              <h3>Dawid Maślanka</h3>
            </Dawid>
            <Jolanta>
              <h3>Jolanta Marszałek</h3>
            </Jolanta>
            <Katarzyna>
              <h3>Katarzyna Fronc</h3>
            </Katarzyna>
            <Piotr>
              <h3>Piotr Stefański</h3>
            </Piotr>
          </div>
        </Authors>
      </Rightside>
    </Footer>
  );
};
