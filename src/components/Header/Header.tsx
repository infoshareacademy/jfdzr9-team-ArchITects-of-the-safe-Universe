import CategoryDropdown from "../../CategoryDropdown/CategoryDropdown";
import CompanyLogo from "../../CompanyLogo/CompanyLogo";
import { SignInButton } from "../../SignInButton/SignInButton";
import SearchIcon from "../../assets/magnifying-glass-solid.svg";
import { Input } from "../Input/Input.component";
import {
  CompanyHeaderLeft,
  CompanyHeaderLogo,
  CompanyHeaderRight,
  CompanyHeaderSearch,
  CompanyHeaderSection,
  CompanyHeaderSign,
} from "../Header/Header.styled";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <CompanyHeaderSection>
      <Link to="/">
        <CompanyHeaderLogo>
          <CompanyLogo />
        </CompanyHeaderLogo>
      </Link>
      <CompanyHeaderSearch>
        <CompanyHeaderLeft>
          <Input icon={SearchIcon} placeholder="Znajdz"></Input>
        </CompanyHeaderLeft>
        <CompanyHeaderRight>
          <CategoryDropdown />
        </CompanyHeaderRight>
      </CompanyHeaderSearch>
      <CompanyHeaderSign>
        <SignInButton />
      </CompanyHeaderSign>
    </CompanyHeaderSection>
  );
}

export default Header;
