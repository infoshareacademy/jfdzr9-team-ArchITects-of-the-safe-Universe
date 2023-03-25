import GlobalStyle from "../theme/globalStyles";
import Header from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainPage />
      {/* <Footer /> */}
    </>
  );
}

export default App;
