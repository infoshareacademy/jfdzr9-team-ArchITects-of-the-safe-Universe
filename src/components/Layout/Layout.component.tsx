import { ReactNode } from "react";
import Header from "../Header/Header.component";
import { FooterLabel } from "../Footer/Footer.component";
import { Main } from "./Layout.styled";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <FooterLabel />
    </>
  );
};
