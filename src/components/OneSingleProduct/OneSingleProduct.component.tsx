import { Link } from "react-router-dom";
import { OneSingleProductStyle } from "./OneSingleProduct.style";
import { SingleCard } from "../SingleCard/SingleCard.component";
import imgSearch from "../../assets/borrow/Search.png";
import { OneSingleProductPhoto } from "./OneSingleProduct.style";
import { OneSingleProductText } from "./OneSingleProduct.style";

export const ProductConteiner = () => {
  return (
    <OneSingleProductStyle>
      <OneSingleProductPhoto>
        <SingleCard imgSearch={imgSearch} describe={"describe"} />
      </OneSingleProductPhoto>
      <OneSingleProductText />
    </OneSingleProductStyle>
  );
};
