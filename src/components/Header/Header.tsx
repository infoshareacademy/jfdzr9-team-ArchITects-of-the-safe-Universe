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

function Header() {
  return (
    <CompanyHeaderSection>
      <CompanyHeaderLogo>
        <CompanyLogo />
      </CompanyHeaderLogo>
      <CompanyHeaderSearch>
        <CompanyHeaderSearchLeft>
          <Input icon={SearchIcon} placeholder="Znajdz"></Input>
        </CompanyHeaderSearchLeft>
        <CompanyHeaderSearchRight>
          <CategoryDropdown />
        </CompanyHeaderSearchRight>
      </CompanyHeaderSearch>
      <CompanyHeaderSign>
        <SignInButton />
      </CompanyHeaderSign>
    </CompanyHeaderSection>
  );
}

export default Header;
