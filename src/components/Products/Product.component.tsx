import { Navigator, ArrowLeft, ProductContainer, ArrowRight } from "./Product.styled";
import { Container, ContainerPhoto, ContainerText } from "./Product.styled";

export const Products = () => {
  return (
    <Navigator>
      <ArrowLeft>
        <div>
          <img src="src\assets\arrow-left.svg" alt="Left" />
        </div>
      </ArrowLeft>
      <ProductContainer>
        <Container>
          <ContainerPhoto />
          <ContainerText>
            <h3>Name</h3>
            <p>Book 1</p>
          </ContainerText>
        </Container>
        <Container>
          <ContainerPhoto />
          <ContainerText>
            <h3>Name</h3>
            <p>Book 2</p>
          </ContainerText>
        </Container>
        <Container>
          <ContainerPhoto />
          <ContainerText>
            <h3>Name</h3>
            <p>Book 3</p>
          </ContainerText>
        </Container>
        <Container>
          <ContainerPhoto />
          <ContainerText>
            <h3>Name</h3>
            <p>Book 4</p>
          </ContainerText>
        </Container>
        <Container>
          <ContainerPhoto />
          <ContainerText>
            <h3>Name</h3>
            <p>Book 1</p>
          </ContainerText>
        </Container>
      </ProductContainer>
      <ArrowRight>
        <div>
          <img src="src\assets\arrow-right.svg" alt="Right" />
        </div>
      </ArrowRight>
    </Navigator>
  );
};
