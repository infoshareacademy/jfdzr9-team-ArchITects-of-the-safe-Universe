import GlobalStyle from "../theme/globalStyles";
import "./App.css";
import CompanyLogo from "./CompanyLogo/CompanyLogo";
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
      <Input icon={SearchIcon} placeholder="find what you need"></Input>
      <Input placeholder="city"></Input>
    </>
  );
}

export default App;
