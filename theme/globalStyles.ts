import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}

:root {
    --color-white: hsl(0, 0%, 100%);
    --color-very-light-grey: hsl(0, 0%, 97%);
    --color-light-grey: hsl(0, 0%, 90%);
    --color-grey: hsl(0, 0%, 85%);
    --color-dark-grey: hsl(0, 0%, 60%);
    --color-orange: hsl(40, 85%, 80%);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
    color: var(--color-dark-grey);
    width: 100%;
    margin: auto; 
    min-height: 100vh;
    background-color: var(--color-white);
}

.react-multi-carousel-list {
  width: 100%;
}

.react-multiple-carousel__arrow {
  width: 43px;
  height: 43px;

  @media (max-width: 40em) {
    display: none;
  }

}

.react-multi-carousel-item {
  display: flex;
  justify-content: center;
  margin: 10px
  width: 100%
} 

`;

export default GlobalStyle;
