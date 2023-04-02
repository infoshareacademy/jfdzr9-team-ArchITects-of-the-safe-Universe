import React from "react";
import { CompanyLogoStyle } from "./CompanyLogo.styles";

const imageUrl = new URL("../assets/LogoBig.svg", import.meta.url).href;

const CompanyLogo: React.FC = () => {
  return (
    <CompanyLogoStyle>
      <img src={imageUrl} alt="Logo" />
    </CompanyLogoStyle>
  );
};

export default CompanyLogo;

// width={70} height={50}
