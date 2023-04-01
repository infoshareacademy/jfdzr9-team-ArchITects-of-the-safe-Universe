import BottomNavigation from "../components/BottomNavigation/BottomNavigation.component";

import { Products } from "../components/Product/Product.component";

export const MainPage = () => {
  return (
    <>
      <Products />
      <BottomNavigation howWork={""} map={""} opinion={""} />
    </>
  );
};
