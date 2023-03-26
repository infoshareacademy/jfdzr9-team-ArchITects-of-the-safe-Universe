import GlobalStyle from "../theme/globalStyles";
import { MainPage } from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { FooterLabel } from "./Footer/Footer.component";
import HowDoesItWork from "./components/HowDoesItWork/HowDoesItWork.component";
import { SignInPage } from "./pages/SignInPage";
import { HowDoesItWorkBorrowPage } from "./pages/HowDoesItWorkBorrowPage";
import { HowDoesItWorkLendPage } from "./pages/HowDoesItWorkLendPage";

// import HeaderUser from "./components/Header/HeaderUser";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:howDoestItWork" element={<HowDoesItWork borrow="" lend="" startRenting="" />} />
        {/* <Route path="/:howDoestItWork/borrow" element={<Borrow />} /> */}
        {/* <Route path="/:howDoestItWork/lend" element={<Lend />} /> */}
        <Route path="konto" element={<SignInPage />} />
        <Route path="/:howDoestItWork/borrow" element={<HowDoesItWorkBorrowPage />} />
        <Route path="/:howDoestItWork/lend" element={<HowDoesItWorkLendPage />} />
        {/* <Route path="account" element={<SignInPage />} /> */}
        {/* <Route path="account/register" element={<RegisterPage />} /> */}
        {/* <Route path="productPage" element={<ProductPage />} /> */}
        {/* <Route path="addProductPage" element={<AddProductPage />} /> */}
        {/* <Route path="opinions" element={<OpinionsPage />} /> */}
        {/* <Route path="*" element={<Navigate to="not-found" replace={true} />} /> */}
      </Routes>
      <FooterLabel />
    </>
  );
}

export default App;
