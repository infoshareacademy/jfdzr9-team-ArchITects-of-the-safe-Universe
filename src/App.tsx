import "./App.css";
import CompanyLogo from "./CompanyLogo/CompanyLogo";
import { Input } from "./components/Input/Input.component";
import SearchIcon from "./assets/magnifying-glass-solid.svg";

function App() {
  return (
    <div>
      <CompanyLogo />
      <h1>RentMe</h1>
      <Input icon={SearchIcon} placeholder="find what you need"></Input>
      <Input placeholder="city"></Input>
    </div>
  );
}

export default App;
