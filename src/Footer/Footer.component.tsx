import { Link } from "react-router-dom";
import { Footer, Dawid, Jolanta, Katarzyna, Piotr } from "../Footer/Footer.styled";
import GitHubLogo from "../assets/iconmonstr-github copy.svg";
import GitHubLogo2 from "../assets/iconmonstr-github.svg";
import Linkedin from "../assets/iconmonstr-linkedin-3.svg";

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
      {/* <div style={{ marginRight: "100rem" }} /> */}
      <div>
        <h3 style={{ textDecoration: "underline" }}>Twórcy aplikacji:</h3>
        <p style={{ marginBottom: "0.5rem" }} />
        <h3>
          <Dawid>
            <p style={{ marginRight: "1rem" }}>Dawid Maślanka</p>
            <Link to="https://github.com/DawidMaslanka">
              <img src={GitHubLogo} alt="github logo" />
            </Link>
            <Link to="https://www.linkedin.com/in/dawid-maslanka/">
              <img src={Linkedin} alt="Linkedin" />
            </Link>
          </Dawid>
          <Jolanta>
            <p style={{ marginRight: "0.44rem" }}>Jolanta Marszałek</p>
            <Link to="https://github.com/JolantaMarszalek">
              <img src={GitHubLogo} alt="github logo" />
            </Link>
            <Link to="https://www.linkedin.com/in/jolanta-marsza%C5%82ek/">
              <img src={Linkedin} alt="Linkedin" />
            </Link>
          </Jolanta>
          <Katarzyna>
            <p style={{ marginRight: "1.2rem" }}>Katarzyna Fronc</p>
            <Link to="https://github.com/katarzynaFronc">
              <img src={GitHubLogo} alt="github logo" />
            </Link>
            <Link to="https://www.linkedin.com/in/katarzyna-f/">
              <img src={Linkedin} alt="Linkedin" />
            </Link>
          </Katarzyna>
          <Piotr>
            <p style={{ marginRight: "1.8rem" }}>Piotr Stefański</p>
            <Link to="https://github.com/peter-stefanski">
              <img src={GitHubLogo} alt="github logo" />
            </Link>
            <Link to="https://www.linkedin.com/in/stefanski-piotr/">
              <img src={Linkedin} alt="Linkedin" />
            </Link>
          </Piotr>
        </h3>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Footer>
  );
};
