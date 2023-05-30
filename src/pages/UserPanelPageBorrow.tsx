import BottomNavigation from "../components/BottomNavigation/BottomNavigation.component";
import { OrangeButton } from "../components/Buttons/Button.styled";
import { ProductsOwner } from "../components/Product/ProductsOwner.component";
import { UserOptionsSection } from "../components/UserOptions/UserOptions.styled";
import { AddProductButton } from "../components/AddProductButton/AddProductButton";

export const UserPanelPageBorrow = () => {
  return (
    <>
      <UserOptionsSection>
        <OrangeButton>Moje produkty</OrangeButton>
        <AddProductButton />
      </UserOptionsSection>
      <ProductsOwner />
      <BottomNavigation />
    </>
  );
};
