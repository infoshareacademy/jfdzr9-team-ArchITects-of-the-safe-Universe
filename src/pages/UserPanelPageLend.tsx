import { Link } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation.component";
import { ButtonContainer, ButtonS, OrangeButton } from "../components/Buttons/Button.styled";
import { Products } from "../components/Product/Product.component";
import { UserOptionsSection } from "../components/UserOptions/UserOptions.styled";

export const UserPanelPageLend = () => {
  return (
    <>
      <UserOptionsSection>
        <Link to="/userPanelBorrow">
          <ButtonS>Do wypożyczenia</ButtonS>
        </Link>
        <OrangeButton>Mam pożyczone</OrangeButton>
        <Link to="/addProduct">
          <ButtonS>Chcę dodać produkt</ButtonS>
        </Link>
      </UserOptionsSection>
      <Products />
      <BottomNavigation />
    </>
  );
};
