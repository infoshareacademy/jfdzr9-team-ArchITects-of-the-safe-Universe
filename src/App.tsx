import GlobalStyle from "../theme/globalStyles";
import { ButtonM, ButtonS } from "./components/Buttons/Button.styled";
import { SmallButton } from "./components/Buttons/SmallButton.component";
import { Input } from "./components/Input/Input.component";
import SearchIcon from "./assets/magnifying-glass-solid.svg";
import Header from "./components/Header/Header";

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
    </>
  );
}

export default App;
