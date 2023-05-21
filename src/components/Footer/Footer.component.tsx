import { Link } from "react-router-dom";
import { Footer, Authors, Author, Links } from "./Footer.styled";
import GitHubLogo from "../../assets/iconmonstr-github copy.svg";
import GitHubLogo2 from "../../assets/iconmonstr-github.svg";
import Linkedin from "../../assets/iconmonstr-linkedin-3.svg";

export const FooterLabel = () => {
  return (
    <Footer>
      <div>
        <h3>
          RentMe, @2023 rentme Inc.
          <br />
          Wszystkie prawa zastrzeżone.
        </h3>
        <Link to="https://github.com/infoshareacademy/jfdzr9-team-ArchITects-of-the-safe-Universe">
          <img src={GitHubLogo2} alt="github logo" />
        </Link>
      </div>
      <Authors>
        <div>
          <Author>
            <h4 style={{ marginRight: "0.44rem" }}>Jolanta Marszałek</h4>
            <Links>
              <Link to="https://github.com/JolantaMarszalek">
                <img src={GitHubLogo} alt="github logo" />
              </Link>
              <Link to="https://www.linkedin.com/in/jolanta-marsza%C5%82ek/">
                <img src={Linkedin} alt="Linkedin" />
              </Link>
            </Links>
          </Author>
          <Author>
            <h4 style={{ marginRight: "1.2rem" }}>Katarzyna Fronc</h4>
            <Links>
              <Link to="https://github.com/katarzynaFronc">
                <img src={GitHubLogo} alt="github logo" />
              </Link>
              <Link to="https://www.linkedin.com/in/katarzyna-f/">
                <img src={Linkedin} alt="Linkedin" />
              </Link>
            </Links>
          </Author>
          <Author>
            <h4 style={{ marginRight: "1rem" }}>Dawid Maślanka</h4>
            <Links>
              <Link to="https://github.com/DawidMaslanka">
                <img src={GitHubLogo} alt="github logo" />
              </Link>
              <Link to="https://www.linkedin.com/in/dawid-maslanka/">
                <img src={Linkedin} alt="Linkedin" />
              </Link>
            </Links>
          </Author>
          <Author>
            <h4 style={{ marginRight: "1.8rem" }}>Piotr Stefański</h4>
            <Links>
              <Link to="https://github.com/peter-stefanski">
                <img src={GitHubLogo} alt="github logo" />
              </Link>
              <Link to="https://www.linkedin.com/in/stefanski-piotr/">
                <img src={Linkedin} alt="Linkedin" />
              </Link>
            </Links>
          </Author>
        </div>
      </Authors>
    </Footer>
  );
};
