import { collection, CollectionReference, getDocs, where, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { db } from "../../utils/firebase/firebase.config";
import { ProductProps } from "../AddProductPage/AddNewProduct.component";
import { Arrow, Container, ContainerPhoto, ContainerText, ProductContainer } from "../Products/Product.styled";
import CategoryDropdowncopy, { CategoryProps } from "../../CategoryDropdown/CategoryDropdownMain";
import SearchIcon from "../../assets/magnifying-glass-solid.svg";
import { Input } from "../Input/Input.component";
import { TopNavSection } from "../TopNavigation/TopNavigatioon.styled";
import { CompanyHeaderLeft, CompanyHeaderRight } from "../Header/Header.styled";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Products = () => {
  const { currentUser } = useContext(AuthContext);
  const [products, setProducts] = useState<(ProductProps & { id: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const getProductsByCategory = async (category: string) => {
    if (category === "Kategoria") {
      try {
        const allProducts: (ProductProps & { id: string })[] = [];
        const collections = ["Tools", "Sport", "books"];
        for (const collectionName of collections) {
          const collectionRef = collection(db, collectionName) as CollectionReference<ProductProps>;
          const queryRef = query(collectionRef, where("email", "!=", currentUser?.email ?? ""));
          const snapshot = await getDocs<ProductProps>(queryRef);
          const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          allProducts.push(...products);
        }
        return allProducts;
      } catch (error) {
        return [];
      }
    } else if (["Tools", "Sport", "books"].includes(category)) {
      try {
        const collectionRef = collection(db, category) as CollectionReference<ProductProps>;
        const queryRef = query(collectionRef, where("email", "!=", currentUser?.email ?? ""));
        const snapshot = await getDocs<ProductProps>(queryRef);
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return products;
      } catch (error) {
        return [];
      }
    } else {
      return [];
    }
  };
  useEffect(() => {
    setIsLoading(true);
    const savedCategory = localStorage.getItem("selectedCategory") || "Kategoria";
    setCategory(savedCategory);
    getProductsByCategory(savedCategory).then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, [currentUser?.email, category, searchTerm]);
  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
    localStorage.setItem("selectedCategory", selectedCategory);
  };
  const categoryProps: CategoryProps = {
    value: category,
    onChange: handleCategoryChange,
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(searchQuery);
    }, 600);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <>
      <TopNavSection>
        <CompanyHeaderLeft>
          <Input icon={SearchIcon} placeholder="Znajdź" value={searchQuery} onChange={handleInputChange} />
        </CompanyHeaderLeft>
        <CompanyHeaderRight>
          <CategoryDropdowncopy {...categoryProps} />
        </CompanyHeaderRight>
      </TopNavSection>
      <ProductContainer>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          focusOnSelect={false}
          minimumTouchDrag={80}
          responsive={{
            largeDesktop: {
              breakpoint: {
                max: 3000,
                min: 1400,
              },
              items: 6,

              partialVisibilityGutter: 40,
            },
            desktop: {
              breakpoint: {
                max: 1400,
                min: 1100,
              },
              items: 5,

              partialVisibilityGutter: 40,
            },
            smallDesktop: {
              breakpoint: {
                max: 1100,
                min: 700,
              },
              items: 4,

              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 700,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          slidesToSlide={1}
          swipeable
        >
          {filteredProducts.map(({ id, name, author, img }) => (
            <Container key={id}>
              <Link to={`/productPage/${id}`}>
                <ContainerPhoto>{img && <img src={img} alt={name} />}</ContainerPhoto>
                <ContainerText>
                  <h3>{name}</h3>
                  <h5>{author}</h5>
                </ContainerText>
              </Link>
            </Container>
          ))}
        </Carousel>
      </ProductContainer>
    </>
  );
};
