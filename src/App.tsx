import GlobalStyle from "../theme/globalStyles";
import CompanyLogo from "./CompanyLogo/CompanyLogo";
import { ButtonM, ButtonS } from "./components/Buttons/Button.styled";
import { SmallButton } from "./components/Buttons/SmallButton.component";
import { Input } from "./components/Input/Input.component";
import SearchIcon from "./assets/magnifying-glass-solid.svg";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <CompanyLogo />
        <h1>RentMe</h1>
      </div>
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
