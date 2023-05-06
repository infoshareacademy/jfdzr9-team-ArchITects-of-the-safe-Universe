import BottomNavigation from "../components/BottomNavigation/BottomNavigation.component";
import { OrangeButton } from "../components/Buttons/Button.styled";
import { ProductsOwner } from "../components/Product/ProductsOwner.component";
import { UserOptionsSection } from "../components/UserOptions/UserOptions.styled";
import { AddProductButton } from "../AddProductButton/AddProductButton";

export const UserPanelPageBorrow = () => {
  return (
    <>
      <UserOptionsSection>
        <OrangeButton>Do wypożyczenia</OrangeButton>
        {/* <Link to="/userPanelLend">
          <ButtonS>Mam pożyczone</ButtonS>
        </Link> */}
        <AddProductButton />
      </UserOptionsSection>
      <ProductsOwner />
      <BottomNavigation />
    </>
  );
};
