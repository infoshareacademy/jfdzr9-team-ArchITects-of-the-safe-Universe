import { Link } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation.component";
import { ButtonContainer, ButtonS, OrangeButton } from "../components/Buttons/Button.styled";
import { Products } from "../components/Product/Product.component";

export const UserPanelPageBorrow = () => {
  return (
    <>
      <ButtonContainer>
        <OrangeButton>Do wypożyczenia</OrangeButton>
        <Link to="/userPanelLend">
          <ButtonS>Mam pożyczone</ButtonS>
        </Link>
        <Link to="/addProduct">
          <ButtonS>Chcę dodać produkt</ButtonS>
        </Link>
      </ButtonContainer>
      <Products />
      <BottomNavigation howWork={""} map={""} opinion={""} />
    </>
  );
};
