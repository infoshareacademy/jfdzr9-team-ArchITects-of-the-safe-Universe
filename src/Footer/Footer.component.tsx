import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer.styled";
import GitHubLogo from "../assets/iconmonstr-github.svg";

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
          <img src={GitHubLogo} alt="github logo" />
        </Link>
      </div>
      <div>
        <h3 style={{ textDecoration: "underline" }}>Twórcy aplikacji:</h3>
        <h3>
          Dawid Maślanka
          <br />
          Jolanta Marszałek
          <br />
          Katarzyna Fronc
          <br />
          Piotr Stefański
        </h3>
      </div>
    </Footer>
  );
};
