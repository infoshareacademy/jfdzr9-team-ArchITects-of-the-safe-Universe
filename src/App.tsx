import { useState } from "react";
import GlobalStyle from "../theme/globalStyles";
import "./App.css";
import CompanyLogo from "./CompanyLogo/CompanyLogo";

function App() {
  return (
  <>
   <GlobalStyle />
    <div>
      <CompanyLogo />
      <h1>RentMe</h1>
    </div>
    </>
  );

}

export default App;
