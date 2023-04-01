import { SingleCardProduct } from "../SingleCardProduct/SingleCardProduct.component";
import { Navigator, Arrow, ProductContainer } from "./Product.styled";
import { Container, ContainerPhoto, ContainerText } from "./Product.styled";
import { Carousel } from "@trendyol-js/react-carousel";
// import ReactCardSlider from 'react-card-slider-component';

export const Products = () => {
  return (
    // <Navigator>
    //   <Arrow>
    //     <img src="src\assets\arrow-left.svg" alt="Left" />
    //   </Arrow>
    //   <SingleCardProduct />
    //   <Arrow>
    //     <img src="src\assets\arrow-right.svg" alt="Right" />
    //   </Arrow>
    // </Navigator>
    <Carousel
      show={3}
      slide={1}
      leftArrow={
        <Arrow>
          <img src="src\assets\arrow-left.svg" alt="Left" />
        </Arrow>
      }
      rightArrow={
        <Arrow>
          <img src="src\assets\arrow-right.svg" alt="Right" />
        </Arrow>
      }
      swiping={true}
    >
      <SingleCardProduct />
      <SingleCardProduct />
      <SingleCardProduct />
      <SingleCardProduct />
      <SingleCardProduct />
      <SingleCardProduct />
      <SingleCardProduct />
      <SingleCardProduct />
      <SingleCardProduct />
    </Carousel>
  );
  // <ReactCardSlider slides={slides}/>
};
