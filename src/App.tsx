import CompanyLogo from "./CompanyLogo/CompanyLogo";
import { ButtonM, ButtonS } from "./components/Buttons/Button.styled";
import { SmallButton } from "./components/Buttons/SmallButton.component";

function App() {
  return (
     <>
    <div>
      <CompanyLogo />
      <h1>RentMe</h1>
    </div>
          <ButtonM>Duży button</ButtonM>
      <ButtonS>Mały button</ButtonS>
      {/* button zmieniający kolor w zależności który jest aktywny. Biała ramka powinna zniknąć jak będą podłączone style globalne */}
      <SmallButton>Borrow/Lend</SmallButton>
    </>
  );
}

export default App;
