import GlobalStyle from "../theme/globalStyles";
// import { Footer } from "./Footer/Footer.component.styled";
import { Routes } from "react-router-dom";
import Header from "./components/Header/Header";
// import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
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
    </>
  );
}

export default App;
