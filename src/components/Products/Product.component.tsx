import { Navigator, ArrowLeft, ProductContainer, ArrowRight } from "./Product.styled";
import { Container, ContainerPhoto, ContainerText } from "./Product.styled";
// import ReactCardSlider from 'react-card-slider-component';

export const Products = () => {
  return (
    <Navigator>
      <ArrowLeft>
        <div>
          <img src="src\assets\arrow-left.svg" alt="Left" />
        </div>
      </ArrowLeft>
      <ProductContainer>
        {/* const slides = [ */}
        <Container>
          <ContainerPhoto />
          <ContainerText>
            <h3>Name</h3>
            <p>Book 1</p>
            {/* {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick}, */}
          </ContainerText>
        </Container>
        <Container>
          <ContainerPhoto />
          <ContainerText>
            <h3>Name</h3>
            <p>Book 2</p>
            {/* {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick}, */}
          </ContainerText>
        </Container>
        <Container>
          <ContainerPhoto />
          <ContainerText>
            <h3>Name</h3>
            <p>Book 3</p>
            {/* {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick}, */}
          </ContainerText>
        </Container>
        <Container>
          <ContainerPhoto />
          <ContainerText>
            <h3>Name</h3>
            <p>Book 4</p>
            {/* {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick}, */}
          </ContainerText>
        </Container>
        <Container>
          <ContainerPhoto />
          <ContainerText>
            <h3>Name</h3>
            <p>Book 1</p>
            {/* {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick}, */}
          </ContainerText>
        </Container>
        {/* ] */}
      </ProductContainer>
      <ArrowRight>
        <div>
          <img src="src\assets\arrow-right.svg" alt="Right" />
        </div>
      </ArrowRight>
    </Navigator>
  );
  // <ReactCardSlider slides={slides}/>
};
