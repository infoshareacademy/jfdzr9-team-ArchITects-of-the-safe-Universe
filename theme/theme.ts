export const lightTheme = {
  backgroundBody: `var(--color-white)`,
  backgroundElements: `var(--color-very-light-grey)`,
  text: `var(--color-very-dark-grey)`,
  OBtext: `var(--color-brown)`,
  header: `var(--color-white)`,
  footer: `var(--color-white)`,
  border: `var(--color-grey)`,
  footerText: `var(--color-dark-grey)`,
  button: `var(--color-light-grey)`,
  hoverButton: `var(--color-orange)`,
  hoverButtonText: `var(--color-brown)`,
  signText: `var(--color-brown)`,
};

export const darkTheme = {
  backgroundBody: `var(--color-very-dark-grey)`,
  backgroundElements: `var(--color-orange)`,
  text: `var(--color-very-dark-grey)`,
  OBtext: `var(--color-brown)`,
  header: `var(--color-orange)`,
  footer: `var(--color-very-dark-grey)`,
  border: `var(--color-orange)`,
  footerText: `var(--color-light-grey)`,
  button: `var(--color-light-grey)`,
  hoverButton: `var(--color-dark-grey)`,
  hoverButtonText: `var(--color-very-dark-grey)`,
  signText: `var(--color-orange)`,
};

export type Theme = typeof lightTheme | typeof darkTheme;
