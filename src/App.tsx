import GlobalStyle from "../theme/globalStyles";
import { MainPage } from "./pages/MainPage";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { HowDoesItWorkBorrowPage } from "./pages/HowDoesItWorkBorrowPage";
import { HowDoesItWorkLendPage } from "./pages/HowDoesItWorkLendPage";
import { SignInPage } from "./pages/SignInPage";
import { UserPanelPageBorrow } from "./pages/UserPanelPageBorrow";
import { OpinionsUserPage } from "./pages/OpinionsPageUser";
import { AddProductPage } from "./pages/AddProductPage";
import { AddOpinionPage } from "./pages/AddOpinionPage";
import { AuthProvider } from "./Context/AuthContext";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import { OpinionsPage } from "./pages/OpinionsPage";
import { Layout } from "./components/Layout/Layout.component";
import { OneSingleProductPage } from "./pages/OneSingleProductPage";
import { ContactPage } from "./pages/ContactPage";
import { UserDataPanel } from "./pages/UserDataPanel";
import { SignUpPage } from "./pages/SignUpPage";
import { DarkModeContext } from "./Context/darkMode.context";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";

function App() {
  const { theme } = useContext(DarkModeContext);
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <GlobalStyle />
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/howDoesItWork/borrow" element={<HowDoesItWorkBorrowPage />} />
              <Route path="/howDoesItWork/lend" element={<HowDoesItWorkLendPage />} />
              <Route path="account" element={<SignInPage />} />
              <Route path="/opinions" element={<OpinionsPage />} />
              <Route path="/opinionsUser" element={<OpinionsUserPage />} />
              <Route path="/addOpinion" element={<AddOpinionPage />} />
              <Route path="addProduct" element={<AddProductPage />} />
              <Route path="/userPanelBorrow" element={<UserPanelPageBorrow />} />
              <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/userDataPanel" element={<UserDataPanel />} />
              <Route path="/signUp" element={<SignUpPage />} />
              <Route path="not-found" element={<NotFoundPage />} />
              <Route
                path="productPage"
                element={
                  <div>
                    <Outlet />
                  </div>
                }
              >
                <Route path=":id" element={<OneSingleProductPage />} />
              </Route>
              <Route path="*" element={<Navigate to="not-found" replace={true} />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
