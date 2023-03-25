import CategoryDropdown from "../../CategoryDropdown/CategoryDropdown";
import CompanyLogo from "../../CompanyLogo/CompanyLogo";
import { SignInButton } from "../../SignInButton/SignInButton";
import SearchIcon from "../../assets/magnifying-glass-solid.svg";
import { Input } from "../Input/Input.component";
import {
  CompanyHeaderLogo,
  CompanyHeaderSearch,
  CompanyHeaderSearchLeft,
  CompanyHeaderSearchRight,
  CompanyHeaderSection,
  CompanyHeaderSign,
} from "../Header/Header.styled";
import { Link } from "react-router-dom";

function Header() {
  return (
    <CompanyHeaderSection>
      <Link to="/">
        <CompanyHeaderLogo>
          <CompanyLogo />
        </CompanyHeaderLogo>
      </Link>
      <CompanyHeaderSearch>
        <CompanyHeaderSearchLeft>
          <Input icon={SearchIcon} placeholder="Znajdz"></Input>
        </CompanyHeaderSearchLeft>
        <CompanyHeaderSearchRight>
          <CategoryDropdown />
        </CompanyHeaderSearchRight>
      </CompanyHeaderSearch>
      <CompanyHeaderSign>
        <SignInButton>Zarejestruj</SignInButton>
      </CompanyHeaderSign>
    </CompanyHeaderSection>
  );
}

export default Header;
