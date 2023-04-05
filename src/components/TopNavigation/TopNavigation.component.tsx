import { CompanyHeaderLeft, CompanyHeaderRight } from "../Header/Header.styled";
import CategoryDropdowncopy from "../../CategoryDropdown/CategoryDropdowncopy";
import { Input } from "../Input/Input.component";
import SearchIcon from "../../assets/magnifying-glass-solid.svg";
import { TopNavSection } from "./TopNavigatioon.styled";

export const TopNavigation = () => {
  return (
    <TopNavSection>
      {/* <CompanyHeaderSearch> */}
      <CompanyHeaderLeft>
        <Input icon={SearchIcon} placeholder="Znajdź"></Input>
      </CompanyHeaderLeft>
      <CompanyHeaderRight>
        <CategoryDropdowncopy />
      </CompanyHeaderRight>
      {/* </CompanyHeaderSearch> */}
    </TopNavSection>
  );
};
