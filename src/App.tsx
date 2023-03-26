import GlobalStyle from "../theme/globalStyles";
import { MainPage } from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { FooterLabel } from "./Footer/Footer.component";
import { HowDoesItWorkBorrowPage } from "./pages/HowDoesItWorkBorrowPage";
import { HowDoesItWorkLendPage } from "./pages/HowDoesItWorkLendPage";
import { SignInPage } from "./pages/SignInPage";
import { UserPanelPageBorrow } from "./pages/UserPanelPageBorrow";
import { UserPanelPageLend } from "./pages/UserPanelPageLend";
// import HeaderUser from "./components/Header/HeaderUser";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/howDoesItWork/borrow" element={<HowDoesItWorkBorrowPage />} />
        <Route path="/howDoesItWork/lend" element={<HowDoesItWorkLendPage />} />
        {/* <Route path="account" element={<SignInPage />} /> */}
        {/* <Route path="account/register" element={<RegisterPage />} /> */}
        {/* <Route path="productPage" element={<ProductPage />} /> */}
        {/* <Route path="addProductPage" element={<AddProductPage />} /> */}
        {/* <Route path="opinions" element={<OpinionsPage />} /> */}
        <Route path="/userPanelBorrow" element={<UserPanelPageBorrow />} />
        <Route path="/userPanelLend" element={<UserPanelPageLend />} />
        {/* <Route path="/addProduct" element={<UserPanelPageBorrow />} /> */}
        {/* <Route path="*" element={<Navigate to="not-found" replace={true} />} /> */}
      </Routes>
      <FooterLabel />
    </>
  );
}

export default App;
