import GlobalStyle from "../theme/globalStyles";
import { ButtonM, ButtonS } from "./components/Buttons/Button.styled";
import { SmallButton } from "./components/Buttons/SmallButton.component";
import { Input } from "./components/Input/Input.component";
import SearchIcon from "./assets/magnifying-glass-solid.svg";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation.components";
import { FooterLabel } from "./Footer/Footer.component";
import Header from "./components/Header/Header";
import { Products } from "./Products/Product.component";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ButtonM>Duży button</ButtonM>
      <ButtonS>Mały button</ButtonS>
      {/* button zmieniający kolor w zależności który jest aktywny. Biała ramka powinna zniknąć jak będą podłączone style globalne */}
      <SmallButton>Borrow/Lend</SmallButton>
      <Input icon={SearchIcon} placeholder="find what you need"></Input>
      <Input placeholder="city"></Input>
      <BottomNavigation howWork={"howWork"} map={"map"} opinion={"opinion"} />
      <Products />
      <FooterLabel />
    </>
  );
}
export default App;
