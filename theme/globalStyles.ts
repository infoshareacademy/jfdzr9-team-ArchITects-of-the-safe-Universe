import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}

:root {
    --color-white: hsl(0, 0%, 100%);
    --color-very-light-grey: hsl(0, 0%, 97%)
    --color-light-grey: hsl(0, 0%, 90%);
    --color-grey: hsl(0, 0%, 84%);
    --color-light-orange: hsl(40, 36%, 100%)
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
  font-size: 14px;
  font-size: var(--font-size-homepage);
  background-color: var(--app-color-background);
  min-height: 100vh;
  width: 100%;
  margin: auto;
}

header {
  background-color: var(--app-color-elements);
  box-shadow: 0px 2px 5px var(--app-color-shadow);
}
`;

export default GlobalStyle;
