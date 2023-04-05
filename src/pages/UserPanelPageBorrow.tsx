import { Link } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation.component";
import { ButtonS, OrangeButton } from "../components/Buttons/Button.styled";
import { ProductsOwner } from "../components/Product/ProductsOwner.component";
import { UserOptionsSection } from "../components/UserOptions/UserOptions.styled";

export const UserPanelPageBorrow = () => {
  return (
    <>
      <UserOptionsSection>
        <OrangeButton>Do wypożyczenia</OrangeButton>
        <Link to="/userPanelLend">
          <ButtonS>Chcę wypożyczyć</ButtonS>
        </Link>
        <Link to="/addProduct">
          <ButtonS>Chcę dodać produkt</ButtonS>
        </Link>
      </UserOptionsSection>
      <ProductsOwner />
      <BottomNavigation />
    </>
  );
};
