import BottomNavigation from "../components/BottomNavigation/BottomNavigation.component";

import { Products } from "../components/Product/Product.component";
import { TopNavigation } from "../components/TopNavigation/TopNavigation.component";

export const MainPage = () => {
  return (
    <>
      <TopNavigation />
      <Products />
      <BottomNavigation />
    </>
  );
};
