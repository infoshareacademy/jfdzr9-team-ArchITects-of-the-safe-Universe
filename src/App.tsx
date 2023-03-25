import GlobalStyle from "../theme/globalStyles";
import { MainPage } from "./pages/MainPage";
// import { Footer } from "./Footer/Footer.component.styled";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HeaderUser from "./components/Header/HeaderUser";
// import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          {/* <Route path="/:howDoestItWork" element={<HowDoesItWork />} /> */}
          {/* <Route path="/:howDoestItWork/borrow" element={<Borrow />} /> */}
          {/* <Route path="/:howDoestItWork/lend" element={<Lend />} /> */}
          {/* <Route path="account" element={<SignInPage />} /> */}
          {/* <Route path="account/register" element={<RegisterPage />} /> */}
          {/* <Route path="productPage" element={<ProductPage />} /> */}
          {/* <Route path="addProductPage" element={<AddProductPage />} /> */}
          {/* <Route path="opinions" element={<OpinionsPage />} /> */}
          {/* <Route path="*" element={<Navigate to="not-found" replace={true} />} /> */}
        </Routes>
        {/* </Footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
