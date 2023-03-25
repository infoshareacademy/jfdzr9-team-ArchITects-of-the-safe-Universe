import { Navigator, ArrowLeft, ProductContainer, ArrowRight } from "./Product.styled";

export const Products = () => {
  return (
    <Navigator>
      <ArrowLeft>
        <div>
          <img src="src\assets\arrow-left.svg" alt="Left" />
        </div>
      </ArrowLeft>
      <ProductContainer />
      <ArrowRight>
        <div>
          <img src="src\assets\arrow-right.svg" alt="Right" />
        </div>
      </ArrowRight>
    </Navigator>
  );
};
