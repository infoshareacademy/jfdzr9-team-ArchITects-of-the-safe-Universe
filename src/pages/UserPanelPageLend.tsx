import { Link } from "react-router-dom";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation.component";
import { ButtonContainer, ButtonS, OrangeButton } from "../components/Buttons/Button.styled";
import { Products } from "../components/Products/Product.component";

export const UserPanelPageLend = () => {
  return (
    <>
      <ButtonContainer>
        <Link to="/userPanelBorrow">
          <ButtonS>Do wypożyczenia</ButtonS>
        </Link>
        <OrangeButton>Mam pożyczone</OrangeButton>
        <Link to="/addProduct">
          <ButtonS>Chcę dodać produkt</ButtonS>
        </Link>
      </ButtonContainer>
      <Products />
      <BottomNavigation howWork={""} map={""} opinion={""} />
    </>
  );
};
