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
    --color-black: hsl(0, 3%, 2%);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  height:100%;
}

body {
    display: flex;
		flex-direction: column;
    font-family: 'Nunito Sans', sans-serif;
    color: var(--color-dark-grey);
    width: 100%;
    margin: auto; 
    min-height: 100%;
    background-color: var(--color-white);
    overflow-y: auto;
    min-height: 100%;
    position: relative;

    @media (max-width: 650px) {
    font-size: 14px;
  }
}

.react-multi-carousel-list {
  width: 100%;
}

.react-multiple-carousel__arrow {
  width: 43px;
  height: 43px;

  @media (max-width: 650px) {
    display: none;
  }

}

.react-multi-carousel-item {
  width: 100%
} 

a {
  text-decoration: none;
  color: var(--color-black);
}

.red {
  color: red;
}
`;

export default GlobalStyle;
