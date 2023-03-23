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
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
    line-height: 1.8;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
    color: var(--color-dark-grey);
    width: 100%;
    margin: auto; 
    min-height: 100vh;
    background-color: var(--color-white);
}
`;

export default GlobalStyle;
