import React from "react";

const imageUrl = new URL("../../src/assets/Logo_right.svg", import.meta.url).href;

const CompanyLogo: React.FC = () => {
  return (
    <div>
      <img src={imageUrl} alt="" width={70} height={50} />
    </div>
  );
};

export default CompanyLogo;
