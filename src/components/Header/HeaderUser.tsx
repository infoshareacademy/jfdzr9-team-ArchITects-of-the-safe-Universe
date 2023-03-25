import CategoryDropdown from "../../CategoryDropdown/CategoryDropdown";
import CompanyLogo from "../../CompanyLogo/CompanyLogo";
import SearchIcon from "../../assets/magnifying-glass-solid.svg";
import { Input } from "../Input/Input.component";
import {
  CompanyHeaderLeft,
  CompanyHeaderLogo,
  CompanyHeaderRight,
  CompanyHeaderSearch,
  CompanyHeaderSection,
  CompanyHeaderSign,
} from "./Header.styled";
import { SignOutButton } from "../../SignOutButton/SignOutButton";
import { UserPanelButton } from "../../UserPanelButton/UserPanelButton";
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
        <CompanyHeaderLeft>
          <Input icon={SearchIcon} placeholder="Znajdz"></Input>
        </CompanyHeaderLeft>
        <CompanyHeaderRight>
          <CategoryDropdown />
        </CompanyHeaderRight>
      </CompanyHeaderSearch>
      <CompanyHeaderSign>
        <UserPanelButton />
        <SignOutButton />
      </CompanyHeaderSign>
    </CompanyHeaderSection>
  );
}

export default Header;
